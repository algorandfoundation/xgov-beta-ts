var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import algosdk, { encodeAddress, makePaymentTxnWithSuggestedParamsFromObject } from "algosdk";
import { APP_SPEC as REGISTRY_APP_SPEC, XGovRegistryClient, } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
import { ProposalStatusMap } from "./enums";
import { XgovReaderSDK, } from "./generated/XgovReaderGhostSDK";
import { chunked } from "./utils/chunk";
import { xGovBoxName, proposerBoxName, requestBoxName, proposalApprovalBoxName, } from "./utils/box-names";
import { wrapTransactionSigner, handleTransactionSuccess, handleTransactionError, } from "./utils/transaction";
import { FEE_SINK, PROPOSAL_APPROVAL_BOX_REFERENCE_COUNT } from "./config/constants";
export class XGovRegistrySDK extends BaseSDK {
    client;
    algorand;
    ghostReaderSDK;
    static APP_SPEC = REGISTRY_APP_SPEC;
    constructor({ appId, algorand, }) {
        super();
        this.algorand = algorand;
        this.client = new XGovRegistryClient({ appId, algorand });
        this.ghostReaderSDK = new XgovReaderSDK({ algorand });
    }
    // ============================================================================
    // Read Operations
    // ============================================================================
    /**
     * Get the global state of the registry contract.
     */
    async getGlobalState() {
        try {
            const state = await this.client.state.global.getAll();
            return {
                committeeManager: state.committeeManager ?? "",
                xgovDaemon: state.xgovDaemon ?? "",
                kycProvider: state.kycProvider ?? "",
                xgovManager: state.xgovManager ?? "",
                xgovPayor: state.xgovPayor ?? "",
                xgovCouncil: state.xgovCouncil ?? "",
                xgovSubscriber: state.xgovSubscriber ?? "",
                xgovFee: state.xgovFee,
                proposerFee: state.proposerFee,
                proposalFee: state.openProposalFee,
            };
        }
        catch (e) {
            console.error("Failed to fetch global registry contract state", e);
            return null;
        }
    }
    /**
     * Get all proposal app IDs created by this registry.
     */
    async getProposalAppIds() {
        const { createdApps } = await this.algorand.account.getInformation(this.appAddress);
        return createdApps?.map(({ id }) => id) || [];
    }
    /**
     * Get short proposal state for multiple proposals (batched with ghost reader).
     */
    async getProposalsShortState(appIds) {
        const shortStates = await this.ghostReaderSDK.getShortProposalState({
            appIds,
        });
        return shortStates.map((shortState, index) => ({
            ...shortState,
            appId: appIds[index],
            statusText: ProposalStatusMap[Number(shortState.status)],
        }));
    }
    /**
     * Check if an address is a subscribed xGov and get their box data.
     */
    async getXGovInfo(address) {
        try {
            const result = await this.client.newGroup().getXgovBox({
                sender: FEE_SINK,
                args: { xgovAddress: address },
                boxReferences: [xGovBoxName(address)],
            }).simulate({ skipSignatures: true });
            const xgovBoxValue = result.returns[0];
            return {
                votingAddress: xgovBoxValue[0][0],
                votedProposals: xgovBoxValue[0][1],
                lastVoteTimestamp: xgovBoxValue[0][2],
                subscriptionRound: xgovBoxValue[0][3],
                isXGov: xgovBoxValue[1],
            };
        }
        catch (e) {
            console.error("Error getting xGov info:", e);
            return {
                votingAddress: "",
                votedProposals: BigInt(0),
                lastVoteTimestamp: BigInt(0),
                subscriptionRound: BigInt(0),
                isXGov: false,
            };
        }
    }
    /**
     * Check if an address is a registered proposer and get their box data.
     */
    async getProposerInfo(address) {
        try {
            const result = await this.client.newGroup().getProposerBox({
                sender: FEE_SINK,
                args: { proposerAddress: address },
                boxReferences: [proposerBoxName(address)],
            }).simulate({ skipSignatures: true });
            const proposerBoxValue = result.returns[0];
            return {
                activeProposal: proposerBoxValue[0][0],
                kycStatus: proposerBoxValue[0][1],
                kycExpiring: proposerBoxValue[0][2],
                isProposer: proposerBoxValue[1],
            };
        }
        catch (e) {
            console.error("Error getting proposer info:", e);
            return {
                activeProposal: false,
                kycStatus: false,
                kycExpiring: BigInt(0),
                isProposer: false,
            };
        }
    }
    /**
     * Get all subscribed xGov addresses.
     */
    async getAllXGovAddresses() {
        const boxes = await this.algorand.client.algod
            .getApplicationBoxes(Number(this.appId))
            .do();
        return boxes.boxes
            .filter((box) => new TextDecoder().decode(box.name).startsWith("x"))
            .map((box) => encodeAddress(Buffer.from(box.name.slice(1))));
    }
    /**
     * Get all proposer addresses.
     */
    async getAllProposerAddresses() {
        const boxes = await this.algorand.client.algod
            .getApplicationBoxes(Number(this.appId))
            .do();
        return boxes.boxes
            .filter((box) => box.name[0] === 112 && box.name.length === 33) // 'p' = 112
            .map((box) => encodeAddress(Buffer.from(box.name.slice(1))));
    }
    /**
     * Get all xGov subscription requests.
     */
    async getAllSubscribeRequests() {
        const boxes = await this.algorand.client.algod
            .getApplicationBoxes(Number(this.appId))
            .do();
        const requestBoxes = boxes.boxes.filter((box) => new TextDecoder().decode(box.name).startsWith("r"));
        const results = await Promise.allSettled(requestBoxes.map(async (box) => {
            const boxValue = await this.algorand.client.algod
                .getApplicationBoxByName(Number(this.appId), box.name)
                .do();
            return { name: box.name, value: boxValue.value };
        }));
        const abi = algosdk.ABIType.from("(address,address,uint64)");
        return results
            .filter((r) => r.status === "fulfilled")
            .map((result) => {
            const decoded = abi.decode(result.value.value);
            return {
                id: BigInt(algosdk.decodeUint64(result.value.name.slice(1), "safe")),
                xgovAddr: decoded[0],
                ownerAddr: decoded[1],
                relationType: decoded[2],
            };
        })
            .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
    }
    // ============================================================================
    // Write Operations - xGov Management
    // ============================================================================
    /**
     * Subscribe as an xGov.
     */
    async subscribeXGov(options) {
        const { sender, signer, onStatusChange, onSuccess, xgovFee, votingAddress } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const suggestedParams = await this.algorand.getSuggestedParams();
            const payment = makePaymentTxnWithSuggestedParamsFromObject({
                sender,
                receiver: this.client.appAddress.toString(),
                amount: xgovFee,
                suggestedParams,
            });
            await this.client.newGroup().subscribeXgov({
                sender,
                signer: wrappedSigner,
                args: {
                    payment,
                    votingAddress: votingAddress ?? sender,
                },
                boxReferences: [xGovBoxName(sender)],
            }).send();
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "subscribeXGov", onStatusChange);
        }
    }
    /**
     * Unsubscribe from xGov.
     */
    async unsubscribeXGov(options) {
        const { sender, signer, onStatusChange, onSuccess } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            await this.client.send.unsubscribeXgov({
                sender,
                signer: wrappedSigner,
                args: {},
                extraFee: (1_000).microAlgos(),
                boxReferences: [xGovBoxName(sender)],
            });
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "unsubscribeXGov", onStatusChange);
        }
    }
    /**
     * Set the voting address for an xGov.
     */
    async setVotingAddress(options) {
        const { sender, signer, onStatusChange, onSuccess, xgovAddress, newVotingAddress } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            await this.client.send.setVotingAccount({
                sender,
                signer: wrappedSigner,
                args: {
                    xgovAddress,
                    votingAddress: newVotingAddress,
                },
                boxReferences: [xGovBoxName(xgovAddress)],
            });
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "setVotingAddress", onStatusChange);
        }
    }
    /**
     * Approve a subscription request.
     */
    async approveSubscribeRequest(options) {
        const { sender, signer, onStatusChange, onSuccess, requestId, xgovAddress } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            await this.client.send.approveSubscribeXgov({
                sender,
                signer: wrappedSigner,
                args: { requestId },
                boxReferences: [
                    requestBoxName(Number(requestId)),
                    xGovBoxName(xgovAddress),
                ],
            });
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "approveSubscribeRequest", onStatusChange);
        }
    }
    /**
     * Reject a subscription request.
     */
    async rejectSubscribeRequest(options) {
        const { sender, signer, onStatusChange, onSuccess, requestId } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            await this.client.send.rejectSubscribeXgov({
                sender,
                signer: wrappedSigner,
                args: { requestId },
                boxReferences: [requestBoxName(Number(requestId))],
            });
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "rejectSubscribeRequest", onStatusChange);
        }
    }
    // ============================================================================
    // Write Operations - Proposer Management
    // ============================================================================
    /**
     * Subscribe as a proposer.
     */
    async subscribeProposer(options) {
        const { sender, signer, onStatusChange, onSuccess, proposerFee } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const suggestedParams = await this.algorand.getSuggestedParams();
            const payment = makePaymentTxnWithSuggestedParamsFromObject({
                sender,
                receiver: this.client.appAddress.toString(),
                amount: proposerFee,
                suggestedParams,
            });
            await this.client.newGroup().subscribeProposer({
                sender,
                signer: wrappedSigner,
                args: { payment },
                boxReferences: [proposerBoxName(sender)],
            }).send();
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "subscribeProposer", onStatusChange);
        }
    }
    /**
     * Set KYC status for a proposer (admin only).
     */
    async setProposerKYC(options) {
        const { sender, signer, onStatusChange, onSuccess, proposerAddress, kycStatus, expiration } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const result = await this.client.newGroup().setProposerKyc({
                sender,
                signer: wrappedSigner,
                args: {
                    proposer: proposerAddress,
                    kycStatus,
                    kycExpiring: expiration,
                },
                boxReferences: [proposerBoxName(proposerAddress)],
            }).send();
            const [confirmation] = result.confirmations;
            if (confirmation.confirmedRound !== undefined &&
                confirmation.confirmedRound > 0 &&
                confirmation.poolError === "") {
                await handleTransactionSuccess({ onStatusChange, onSuccess });
            }
            else {
                throw new Error("Failed to confirm transaction");
            }
        }
        catch (e) {
            handleTransactionError(e, "setProposerKYC", onStatusChange);
        }
    }
    // ============================================================================
    // Write Operations - Proposal Management
    // ============================================================================
    /**
     * Create an empty proposal (returns the new proposal app ID).
     */
    async createEmptyProposal(options) {
        const { sender, signer, onStatusChange, onSuccess, proposalFee } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const suggestedParams = await this.algorand.getSuggestedParams();
            const _proposalApprovalBoxName = proposalApprovalBoxName();
            const result = await this.client.send.openProposal({
                sender,
                signer: wrappedSigner,
                args: {
                    payment: makePaymentTxnWithSuggestedParamsFromObject({
                        amount: proposalFee,
                        sender,
                        receiver: this.client.appAddress.toString(),
                        suggestedParams,
                    }),
                },
                boxReferences: [
                    proposerBoxName(sender),
                    ...Array(PROPOSAL_APPROVAL_BOX_REFERENCE_COUNT).fill(_proposalApprovalBoxName),
                ],
                extraFee: (2_000).microAlgos(),
            });
            if (!result.return) {
                throw new Error("Proposal creation failed - no return value");
            }
            await handleTransactionSuccess({ onStatusChange, onSuccess });
            return result.return;
        }
        catch (e) {
            const error = e instanceof Error ? e : new Error(String(e));
            if (error.message.includes("tried to spend")) {
                onStatusChange?.(new Error("Insufficient funds to create proposal."));
            }
            else {
                handleTransactionError(e, "createEmptyProposal", onStatusChange);
            }
            return null;
        }
    }
    /**
     * Vote on a proposal.
     */
    async voteProposal(options) {
        const { sender, signer, onStatusChange, onSuccess, proposalId, xgovAddress, approvalVotes, rejectionVotes } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            // Import dynamically to avoid circular dependency
            const { voterBoxName } = await import("./utils/box-names");
            const result = await this.client.send.voteProposal({
                sender,
                signer: wrappedSigner,
                args: {
                    proposalId,
                    xgovAddress,
                    approvalVotes,
                    rejectionVotes,
                },
                appReferences: [proposalId],
                accountReferences: [sender],
                boxReferences: [
                    xGovBoxName(xgovAddress),
                    { appId: proposalId, name: voterBoxName(xgovAddress) },
                ],
                extraFee: (1000).microAlgos(),
            });
            if (result.confirmation.confirmedRound !== undefined &&
                result.confirmation.confirmedRound > 0 &&
                result.confirmation.poolError === "") {
                await handleTransactionSuccess({ onStatusChange, onSuccess });
                return true;
            }
            throw new Error("Vote transaction failed to confirm");
        }
        catch (e) {
            handleTransactionError(e, "voteProposal", onStatusChange);
            return false;
        }
    }
    /**
     * Finalize a proposal after voting ends.
     */
    async finalizeProposal(options) {
        const { sender, signer, onStatusChange, onSuccess, proposalId } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            await this.client.send.finalizeProposal({
                sender,
                signer: wrappedSigner,
                args: { proposalId },
                appReferences: [proposalId],
            });
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "finalizeProposal", onStatusChange);
        }
    }
    /**
     * Drop a proposal (admin only).
     */
    async dropProposal(options) {
        const { sender, signer, onStatusChange, onSuccess, proposalId } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            await this.client.send.dropProposal({
                sender,
                signer: wrappedSigner,
                args: { proposalId },
                appReferences: [proposalId],
            });
            await handleTransactionSuccess({ onStatusChange, onSuccess });
        }
        catch (e) {
            handleTransactionError(e, "dropProposal", onStatusChange);
        }
    }
    // ============================================================================
    // Factory Methods
    // ============================================================================
    /**
     * Get an XGovProposalSDK instance for a specific proposal.
     */
    proposal(appId) {
        return new XGovProposalSDK({ appId, algorand: this.algorand, registryAppId: this.appId });
    }
}
__decorate([
    chunked(128)
], XGovRegistrySDK.prototype, "getProposalsShortState", null);
