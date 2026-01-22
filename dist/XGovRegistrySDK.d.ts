import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { XGovRegistryClient, type XGovBoxValue as GeneratedXGovBoxValue, type ProposerBoxValue as GeneratedProposerBoxValue } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
import { ExtendedStatus } from "./enums";
import { ShortProposalState, XgovReaderSDK } from "./generated/XgovReaderGhostSDK";
import { type TransactionOptions } from "./utils/transaction";
import type { XGovInfo, ProposerInfo, XGovSubscribeRequest, RegistryGlobalState } from "./types";
export interface ShortProposalStateExtended extends ShortProposalState {
    appId: bigint;
    statusText: ExtendedStatus;
}
export type { GeneratedXGovBoxValue as XGovBoxValue, GeneratedProposerBoxValue as ProposerBoxValue };
export declare class XGovRegistrySDK extends BaseSDK {
    client: XGovRegistryClient;
    algorand: AlgorandClient;
    ghostReaderSDK: XgovReaderSDK;
    static APP_SPEC: import("@algorandfoundation/algokit-utils/types/app-arc56").Arc56Contract;
    constructor({ appId, algorand, }: {
        appId: bigint;
        algorand: AlgorandClient;
    });
    /**
     * Get the global state of the registry contract.
     */
    getGlobalState(): Promise<RegistryGlobalState | null>;
    /**
     * Get all proposal app IDs created by this registry.
     */
    getProposalAppIds(): Promise<bigint[]>;
    /**
     * Get short proposal state for multiple proposals (batched with ghost reader).
     */
    getProposalsShortState(appIds: bigint[]): Promise<ShortProposalStateExtended[]>;
    /**
     * Check if an address is a subscribed xGov and get their box data.
     */
    getXGovInfo(address: string): Promise<XGovInfo>;
    /**
     * Check if an address is a registered proposer and get their box data.
     */
    getProposerInfo(address: string): Promise<ProposerInfo>;
    /**
     * Get all subscribed xGov addresses.
     */
    getAllXGovAddresses(): Promise<string[]>;
    /**
     * Get all proposer addresses.
     */
    getAllProposerAddresses(): Promise<string[]>;
    /**
     * Get all xGov subscription requests.
     */
    getAllSubscribeRequests(): Promise<XGovSubscribeRequest[]>;
    /**
     * Subscribe as an xGov.
     */
    subscribeXGov(options: TransactionOptions & {
        xgovFee: bigint;
        votingAddress?: string;
    }): Promise<void>;
    /**
     * Unsubscribe from xGov.
     */
    unsubscribeXGov(options: TransactionOptions): Promise<void>;
    /**
     * Set the voting address for an xGov.
     */
    setVotingAddress(options: TransactionOptions & {
        xgovAddress: string;
        newVotingAddress: string;
    }): Promise<void>;
    /**
     * Approve a subscription request.
     */
    approveSubscribeRequest(options: TransactionOptions & {
        requestId: bigint;
        xgovAddress: string;
    }): Promise<void>;
    /**
     * Reject a subscription request.
     */
    rejectSubscribeRequest(options: TransactionOptions & {
        requestId: bigint;
    }): Promise<void>;
    /**
     * Subscribe as a proposer.
     */
    subscribeProposer(options: TransactionOptions & {
        proposerFee: bigint;
    }): Promise<void>;
    /**
     * Set KYC status for a proposer (admin only).
     */
    setProposerKYC(options: TransactionOptions & {
        proposerAddress: string;
        kycStatus: boolean;
        expiration: number;
    }): Promise<void>;
    /**
     * Create an empty proposal (returns the new proposal app ID).
     */
    createEmptyProposal(options: TransactionOptions & {
        proposalFee: bigint;
    }): Promise<bigint | null>;
    /**
     * Vote on a proposal.
     */
    voteProposal(options: TransactionOptions & {
        proposalId: bigint;
        xgovAddress: string;
        approvalVotes: number;
        rejectionVotes: number;
    }): Promise<boolean>;
    /**
     * Finalize a proposal after voting ends.
     */
    finalizeProposal(options: TransactionOptions & {
        proposalId: bigint;
    }): Promise<void>;
    /**
     * Drop a proposal (admin only).
     */
    dropProposal(options: TransactionOptions & {
        proposalId: bigint;
    }): Promise<void>;
    /**
     * Get an XGovProposalSDK instance for a specific proposal.
     */
    proposal(appId: bigint): XGovProposalSDK;
}
