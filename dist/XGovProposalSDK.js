import algosdk, { makePaymentTxnWithSuggestedParamsFromObject } from "algosdk";
import { BaseSDK } from "./BaseSDK";
import { APP_SPEC as PROPOSAL_APP_SPEC, ProposalClient, } from "./generated/ProposalClient";
import { ProposalStatusMap } from "./enums";
import { FEE_SINK } from "./config/constants";
import { metadataBoxName, voterBoxName } from "./utils/box-names";
import { wrapTransactionSigner, handleTransactionSuccess, handleTransactionError, } from "./utils/transaction";
/** Maximum chunk size for metadata uploads */
const METADATA_CHUNK_SIZE = 2041;
/** Box references needed per metadata upload transaction */
const METADATA_BOX_REFS_PER_TXN = 7;
export class XGovProposalSDK extends BaseSDK {
    client;
    algorand;
    registryAppId;
    static APP_SPEC = PROPOSAL_APP_SPEC;
    constructor({ appId, algorand, registryAppId, }) {
        super();
        this.algorand = algorand;
        this.client = new ProposalClient({ appId, algorand });
        this.registryAppId = registryAppId;
    }
    // ============================================================================
    // Read Operations
    // ============================================================================
    /**
     * Get the full state of the proposal including status text.
     */
    async getState() {
        const state = (await this.client.state.global.getAll());
        if (!state || !state.registryAppId) {
            return null;
        }
        return {
            ...state,
            appId: this.appId,
            statusText: ProposalStatusMap[Number(state.status)],
        };
    }
    /**
     * Get the proposal summary from global state.
     */
    async getSummary() {
        try {
            const state = await this.client.state.global.getAll();
            if (!state)
                return null;
            return {
                id: this.appId,
                title: state.title ?? "",
                requestedAmount: state.requestedAmount ?? 0n,
                proposer: state.proposer ?? "",
                fundingType: Number(state.fundingType ?? 0),
                status: Number(state.status ?? 0),
                focus: (state.focus ?? 0),
                fundingCategory: Number(state.fundingCategory ?? 0),
                openTs: state.openTs ?? 0n,
                approvals: state.approvals ?? 0n,
                rejections: state.rejections ?? 0n,
                nulls: state.nulls ?? 0n,
                committeeVotes: state.committeeVotes ?? 0n,
                registryAppId: state.registryAppId ?? 0n,
                submissionTs: state.submissionTs ?? 0n,
                voteOpenTs: state.voteOpenTs ?? 0n,
                lockedAmount: state.lockedAmount ?? 0n,
                committeeId: state.committeeId ?? new Uint8Array(),
                committeeMembers: state.committeeMembers ?? 0n,
                votedMembers: state.votedMembers ?? 0n,
                finalized: Boolean(state.finalized ?? false),
            };
        }
        catch (e) {
            console.error("Error getting proposal summary:", e);
            return null;
        }
    }
    /**
     * Get the metadata JSON stored in the proposal's metadata box.
     */
    async getMetadata() {
        try {
            const metadata = await this.algorand.app.getBoxValue(this.appId, metadataBoxName());
            return JSON.parse(Buffer.from(metadata).toString());
        }
        catch (e) {
            console.error("Error getting proposal metadata:", e);
            return null;
        }
    }
    /**
     * Get full proposal details including summary and metadata.
     */
    async getDetails() {
        const [summary, metadata] = await Promise.all([
            this.getSummary(),
            this.getMetadata(),
        ]);
        if (!summary)
            return null;
        return {
            ...summary,
            description: metadata?.description ?? "",
            team: metadata?.team ?? "",
            additionalInfo: metadata?.additionalInfo,
            openSource: metadata?.openSource ?? false,
            deliverables: metadata?.deliverables,
            adoptionMetrics: metadata?.adoptionMetrics,
            pastProposalLinks: metadata?.pastProposalLinks,
            forumLink: metadata?.forumLink ?? "",
        };
    }
    /**
     * Get the voting state from the contract.
     */
    async getVotingState() {
        try {
            const result = await this.client.newGroup().getVotingState({
                sender: FEE_SINK,
                args: {},
            }).simulate({ skipSignatures: true });
            return result.returns[0] ?? null;
        }
        catch (e) {
            console.error("Error getting voting state:", e);
            return null;
        }
    }
    /**
     * Get all voter addresses for this proposal.
     */
    async getVoterAddresses(limit = 1000) {
        const boxes = await this.algorand.client.algod
            .getApplicationBoxes(Number(this.appId))
            .max(limit)
            .do();
        return boxes.boxes
            .filter((box) => new TextDecoder().decode(box.name).startsWith("V"))
            .map((box) => algosdk.encodeAddress(Buffer.from(box.name.slice(1))));
    }
    /**
     * Get a voter's vote weight from their box.
     */
    async getVoterWeight(address) {
        try {
            return await this.algorand.app.getBoxValueFromABIType({
                appId: this.appId,
                boxName: voterBoxName(address),
                type: algosdk.ABIType.from("uint64"),
            });
        }
        catch {
            return null;
        }
    }
    /**
     * Check if a voter has voted (box exists but empty = not voted yet).
     */
    async hasVoted(address) {
        try {
            await this.getVoterWeight(address);
            // If we got a value, voter has NOT voted yet (box still has weight)
            return false;
        }
        catch {
            // Box doesn't exist or is empty = voter HAS voted
            return true;
        }
    }
    /**
     * Get voter info for multiple addresses.
     */
    async getVotersInfo(addresses) {
        const results = await Promise.allSettled(addresses.map((address) => this.getVoterWeight(address)));
        return addresses.map((address, i) => ({
            address,
            votes: results[i].status === "fulfilled" && results[i].value !== null
                ? results[i].value
                : 0n,
            voted: results[i].status === "rejected" || results[i].value === null,
        }));
    }
    // ============================================================================
    // Write Operations
    // ============================================================================
    /**
     * Open the proposal with initial data and metadata.
     */
    async open(options) {
        const { sender, signer, onStatusChange, onSuccess, data, publishingBps } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        if (!this.registryAppId) {
            throw new Error("Registry app ID required to open proposal");
        }
        onStatusChange?.("loading");
        try {
            const suggestedParams = await this.algorand.getSuggestedParams();
            // Build metadata JSON
            const metadata = {
                description: data.description,
                team: data.team,
                additionalInfo: data.additionalInfo,
                openSource: data.openSource,
                adoptionMetrics: data.adoptionMetrics,
                forumLink: data.forumLink,
            };
            const metadataBytes = new Uint8Array(Buffer.from(JSON.stringify(metadata)));
            // Chunk metadata for multiple upload transactions
            const chunks = [];
            for (let i = 0; i < metadataBytes.length; i += METADATA_CHUNK_SIZE) {
                chunks.push(metadataBytes.slice(i, i + METADATA_CHUNK_SIZE));
            }
            // Calculate submission fee
            const requestedAmount = data.requestedAmount;
            const submissionFee = Math.trunc(Number((requestedAmount * publishingBps) / BigInt(10_000)));
            // Build transaction group
            const group = this.client.newGroup().open({
                sender,
                signer: wrappedSigner,
                args: {
                    payment: makePaymentTxnWithSuggestedParamsFromObject({
                        amount: submissionFee,
                        sender,
                        receiver: this.client.appAddress.toString(),
                        suggestedParams,
                    }),
                    title: data.title,
                    fundingType: Number(data.fundingType),
                    requestedAmount,
                    focus: Number(data.focus),
                },
                appReferences: [this.registryAppId],
            });
            // Add metadata upload transactions
            const _metadataBoxName = metadataBoxName();
            chunks.forEach((chunk, index) => {
                group.uploadMetadata({
                    sender,
                    signer: wrappedSigner,
                    args: {
                        payload: chunk,
                        isFirstInGroup: index === 0,
                    },
                    appReferences: [this.registryAppId],
                    boxReferences: [_metadataBoxName, _metadataBoxName],
                });
            });
            await group.send();
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            const error = e instanceof Error ? e : new Error(String(e));
            if (error.message.includes("tried to spend")) {
                onStatusChange?.(new Error("Insufficient funds to open proposal."));
            }
            else {
                handleTransactionError(e, "open", onStatusChange);
            }
        }
    }
    /**
     * Update proposal metadata.
     */
    async updateMetadata(options) {
        const { sender, signer, onStatusChange, onSuccess, data } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        if (!this.registryAppId) {
            throw new Error("Registry app ID required to update metadata");
        }
        onStatusChange?.("loading");
        try {
            const _metadataBoxName = metadataBoxName();
            // Get current box size to calculate needed op-ups
            const currentBoxSize = (await this.client.appClient.getBoxValue(_metadataBoxName)).length;
            const refCountNeeded = currentBoxSize / 1024;
            // Build new metadata
            const metadata = {
                description: data.description,
                team: data.team,
                additionalInfo: data.additionalInfo,
                openSource: data.openSource,
                adoptionMetrics: data.adoptionMetrics,
                forumLink: data.forumLink,
            };
            const metadataBytes = new Uint8Array(Buffer.from(JSON.stringify(metadata)));
            // Chunk metadata
            const chunks = [];
            for (let i = 0; i < metadataBytes.length; i += METADATA_CHUNK_SIZE) {
                chunks.push(metadataBytes.slice(i, i + METADATA_CHUNK_SIZE));
            }
            const boxRefs = Array(METADATA_BOX_REFS_PER_TXN).fill(_metadataBoxName);
            // Build transaction group
            const group = this.client.newGroup();
            chunks.forEach((chunk, index) => {
                group.uploadMetadata({
                    sender,
                    signer: wrappedSigner,
                    args: {
                        payload: chunk,
                        isFirstInGroup: index === 0,
                    },
                    appReferences: [this.registryAppId],
                    boxReferences: boxRefs,
                });
            });
            // Add op-ups if needed
            const opUpsNeeded = (refCountNeeded - chunks.length * METADATA_BOX_REFS_PER_TXN) / METADATA_BOX_REFS_PER_TXN;
            for (let i = 0; i < opUpsNeeded; i++) {
                group.opUp({
                    sender,
                    signer: wrappedSigner,
                    args: {},
                    boxReferences: boxRefs,
                    note: `opup ${i}`,
                });
            }
            await group.send();
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            const error = e instanceof Error ? e : new Error(String(e));
            if (error.message.includes("tried to spend")) {
                onStatusChange?.(new Error("Insufficient funds to update metadata."));
            }
            else {
                handleTransactionError(e, "updateMetadata", onStatusChange);
            }
        }
    }
    /**
     * Call scrutiny on the proposal.
     */
    async scrutinize(options) {
        const { sender, signer, onStatusChange, proposerAddress } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        if (!this.registryAppId) {
            throw new Error("Registry app ID required for scrutiny");
        }
        try {
            const scrutinyTxn = (await this.client.createTransaction.scrutiny({
                sender,
                signer: wrappedSigner,
                args: {},
                appReferences: [this.registryAppId],
                accountReferences: [proposerAddress],
                extraFee: (1000).microAlgo(),
            })).transactions[0];
            // Import registry client dynamically to avoid circular deps
            const { XGovRegistryClient } = await import("./generated/XGovRegistryClient");
            const registryClient = new XGovRegistryClient({
                appId: this.registryAppId,
                algorand: this.algorand,
            });
            await registryClient
                .newGroup()
                .isProposal({
                sender,
                signer: wrappedSigner,
                args: { proposalId: this.appId },
                appReferences: [this.appId],
            })
                .addTransaction(scrutinyTxn, wrappedSigner)
                .send();
        }
        catch (e) {
            console.warn(`While calling scrutiny(${this.appId}):`, e.message);
        }
    }
}
