import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { BaseSDK } from "./BaseSDK";
import { ProposalClient, GlobalKeysState as ProposalGlobalKeysState, VotingState as GeneratedVotingState } from "./generated/ProposalClient";
import { ExtendedStatus } from "./enums";
import { type TransactionOptions } from "./utils/transaction";
import type { ProposalMetadata, ProposalSummary, ProposalDetails, VoterInfo, OpenProposalInput, UpdateMetadataInput } from "./types";
export interface ProposalState extends ProposalGlobalKeysState {
    appId: bigint;
    statusText: ExtendedStatus;
}
export declare class XGovProposalSDK extends BaseSDK {
    client: ProposalClient;
    algorand: AlgorandClient;
    registryAppId?: bigint;
    static APP_SPEC: import("@algorandfoundation/algokit-utils/types/app-arc56").Arc56Contract;
    constructor({ appId, algorand, registryAppId, }: {
        appId: bigint;
        algorand: AlgorandClient;
        registryAppId?: bigint;
    });
    /**
     * Get the full state of the proposal including status text.
     */
    getState(): Promise<ProposalState | null>;
    /**
     * Get the proposal summary from global state.
     */
    getSummary(): Promise<ProposalSummary | null>;
    /**
     * Get the metadata JSON stored in the proposal's metadata box.
     */
    getMetadata(): Promise<ProposalMetadata | null>;
    /**
     * Get full proposal details including summary and metadata.
     */
    getDetails(): Promise<ProposalDetails | null>;
    /**
     * Get the voting state from the contract.
     */
    getVotingState(): Promise<GeneratedVotingState | null>;
    /**
     * Get all voter addresses for this proposal.
     */
    getVoterAddresses(limit?: number): Promise<string[]>;
    /**
     * Get a voter's vote weight from their box.
     */
    getVoterWeight(address: string): Promise<bigint | null>;
    /**
     * Check if a voter has voted (box exists but empty = not voted yet).
     */
    hasVoted(address: string): Promise<boolean>;
    /**
     * Get voter info for multiple addresses.
     */
    getVotersInfo(addresses: string[]): Promise<VoterInfo[]>;
    /**
     * Open the proposal with initial data and metadata.
     */
    open(options: TransactionOptions & {
        data: OpenProposalInput;
        publishingBps: bigint;
    }): Promise<void>;
    /**
     * Update proposal metadata.
     */
    updateMetadata(options: TransactionOptions & {
        data: UpdateMetadataInput;
    }): Promise<void>;
    /**
     * Call scrutiny on the proposal.
     */
    scrutinize(options: TransactionOptions & {
        proposerAddress: string;
    }): Promise<void>;
}
