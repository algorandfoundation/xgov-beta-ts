import algosdk from "algosdk";
import { BaseSDK } from "./BaseSDK";
import { APP_SPEC as COUNCIL_APP_SPEC, CouncilClient, } from "./generated/CouncilClient";
import { councilMemberBoxName, councilVoteBoxName } from "./utils/box-names";
import { wrapTransactionSigner, handleTransactionSuccess, handleTransactionError, } from "./utils/transaction";
export class XGovCouncilSDK extends BaseSDK {
    client;
    algorand;
    registryAppId;
    static APP_SPEC = COUNCIL_APP_SPEC;
    constructor({ appId, algorand, registryAppId, }) {
        super();
        this.algorand = algorand;
        this.client = new CouncilClient({ appId, algorand });
        this.registryAppId = registryAppId;
    }
    // ============================================================================
    // Read Operations
    // ============================================================================
    /**
     * Get the council global state.
     */
    async getGlobalState() {
        try {
            return await this.client.state.global.getAll();
        }
        catch (e) {
            console.error("Error getting council global state:", e);
            return null;
        }
    }
    /**
     * Get all council member addresses.
     */
    async getAllMembers() {
        const boxes = await this.algorand.client.algod
            .getApplicationBoxes(Number(this.appId))
            .do();
        return boxes.boxes
            .filter((box) => new TextDecoder().decode(box.name).startsWith("M"))
            .map((box) => algosdk.encodeAddress(Buffer.from(box.name.slice(1))));
    }
    /**
     * Check if an address is a council member.
     */
    async isMember(address) {
        const members = await this.getAllMembers();
        return members.includes(address);
    }
    /**
     * Get votes for a proposal.
     */
    async getVotes(proposalId) {
        try {
            const voteBoxValue = await this.algorand.app.getBoxValueFromABIType({
                appId: this.appId,
                boxName: councilVoteBoxName(proposalId),
                type: algosdk.ABIType.from("(address,bool)[]"),
            });
            if (!Array.isArray(voteBoxValue)) {
                throw new Error("Vote box value is not an array");
            }
            return voteBoxValue.map((vote) => {
                const voteArray = vote;
                return {
                    address: voteArray[0],
                    block: voteArray[1],
                };
            });
        }
        catch (e) {
            console.error("Error getting council votes:", e);
            return [];
        }
    }
    /**
     * Check if a member has voted on a proposal.
     */
    async hasVoted(proposalId, memberAddress) {
        const votes = await this.getVotes(proposalId);
        return votes.some((vote) => vote.address === memberAddress);
    }
    // ============================================================================
    // Write Operations
    // ============================================================================
    /**
     * Cast a vote on a proposal.
     */
    async vote(options) {
        const { sender, signer, onStatusChange, onSuccess, proposalId, block, proposerAddress, isLastVoter } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const result = await this.client.send.vote({
                sender,
                signer: wrappedSigner,
                args: {
                    proposalId,
                    block,
                },
                accountReferences: [
                    algosdk.getApplicationAddress(this.registryAppId),
                    proposerAddress,
                ],
                appReferences: [proposalId, this.registryAppId],
                boxReferences: [
                    councilVoteBoxName(Number(proposalId)),
                    councilMemberBoxName(sender),
                ],
                extraFee: isLastVoter ? (3_000).microAlgo() : (1_000).microAlgo(),
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
            handleTransactionError(e, "vote", onStatusChange);
            return false;
        }
    }
    /**
     * Add a member to the council (admin only).
     */
    async addMember(options) {
        const { sender, signer, onStatusChange, onSuccess, memberAddress } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const result = await this.client.send.addMember({
                sender,
                signer: wrappedSigner,
                args: { address: memberAddress },
                appReferences: [this.registryAppId],
                boxReferences: [councilMemberBoxName(memberAddress)],
            });
            if (result.confirmation.confirmedRound !== undefined &&
                result.confirmation.confirmedRound > 0 &&
                result.confirmation.poolError === "") {
                await handleTransactionSuccess({ onStatusChange, onSuccess });
                return true;
            }
            throw new Error("Add member transaction failed to confirm");
        }
        catch (e) {
            handleTransactionError(e, "addMember", onStatusChange);
            return false;
        }
    }
    /**
     * Remove a member from the council (admin only).
     */
    async removeMember(options) {
        const { sender, signer, onStatusChange, onSuccess, memberAddress } = options;
        const wrappedSigner = wrapTransactionSigner(signer, onStatusChange);
        onStatusChange?.("loading");
        try {
            const result = await this.client.send.removeMember({
                sender,
                signer: wrappedSigner,
                args: { address: memberAddress },
                appReferences: [this.registryAppId],
                boxReferences: [councilMemberBoxName(memberAddress)],
            });
            if (result.confirmation.confirmedRound !== undefined &&
                result.confirmation.confirmedRound > 0 &&
                result.confirmation.poolError === "") {
                await handleTransactionSuccess({ onStatusChange, onSuccess });
                return true;
            }
            throw new Error("Remove member transaction failed to confirm");
        }
        catch (e) {
            handleTransactionError(e, "removeMember", onStatusChange);
            return false;
        }
    }
}
