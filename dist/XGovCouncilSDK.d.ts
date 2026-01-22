import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { BaseSDK } from "./BaseSDK";
import { CouncilClient } from "./generated/CouncilClient";
import { type TransactionOptions } from "./utils/transaction";
import type { CouncilVote } from "./types";
export declare class XGovCouncilSDK extends BaseSDK {
    client: CouncilClient;
    algorand: AlgorandClient;
    registryAppId: bigint;
    static APP_SPEC: import("@algorandfoundation/algokit-utils/types/app-arc56").Arc56Contract;
    constructor({ appId, algorand, registryAppId, }: {
        appId: bigint;
        algorand: AlgorandClient;
        registryAppId: bigint;
    });
    /**
     * Get the council global state.
     */
    getGlobalState(): Promise<{
        registryAppId?: bigint;
        memberCount?: bigint;
    } | null>;
    /**
     * Get all council member addresses.
     */
    getAllMembers(): Promise<string[]>;
    /**
     * Check if an address is a council member.
     */
    isMember(address: string): Promise<boolean>;
    /**
     * Get votes for a proposal.
     */
    getVotes(proposalId: number | bigint): Promise<CouncilVote[]>;
    /**
     * Check if a member has voted on a proposal.
     */
    hasVoted(proposalId: number | bigint, memberAddress: string): Promise<boolean>;
    /**
     * Cast a vote on a proposal.
     */
    vote(options: TransactionOptions & {
        proposalId: bigint;
        block: boolean;
        proposerAddress: string;
        isLastVoter?: boolean;
    }): Promise<boolean>;
    /**
     * Add a member to the council (admin only).
     */
    addMember(options: TransactionOptions & {
        memberAddress: string;
    }): Promise<boolean>;
    /**
     * Remove a member from the council (admin only).
     */
    removeMember(options: TransactionOptions & {
        memberAddress: string;
    }): Promise<boolean>;
}
