/**
 * Network configuration and constants for xGov SDK.
 * Provides fee structures, limits, and network-specific app IDs.
 */
export type NetworkId = "mainnet" | "testnet" | "localnet";
export interface NetworkConfig {
    registryAppId: bigint;
    councilAppId: bigint;
    algodUrl?: string;
    algodToken?: string;
    indexerUrl?: string;
    indexerToken?: string;
}
/** Fee to subscribe as an xGov (1 ALGO) */
export declare const XGOV_FEE: bigint;
/** Fee to subscribe as a proposer (10 ALGO) */
export declare const PROPOSER_FEE: bigint;
/** Fee to create a proposal (100 ALGO) */
export declare const PROPOSAL_FEE: bigint;
/** Publishing fee in basis points (5%) */
export declare const PROPOSAL_PUBLISHING_BPS: bigint;
/** Commitment fee in basis points (3%) */
export declare const PROPOSAL_COMMITMENT_BPS: bigint;
/** Minimum requested amount for a proposal */
export declare const MIN_REQUESTED_AMOUNT: bigint;
/** Maximum requested amount for small proposals (50,000 ALGO) */
export declare const MAX_REQUESTED_AMOUNT_SMALL: bigint;
/** Maximum requested amount for medium proposals (250,000 ALGO) */
export declare const MAX_REQUESTED_AMOUNT_MEDIUM: bigint;
/** Maximum requested amount for large proposals (500,000 ALGO) */
export declare const MAX_REQUESTED_AMOUNT_LARGE: bigint;
/** Discussion duration for small proposals */
export declare const DISCUSSION_DURATION_SMALL: bigint;
/** Discussion duration for medium proposals */
export declare const DISCUSSION_DURATION_MEDIUM: bigint;
/** Discussion duration for large proposals */
export declare const DISCUSSION_DURATION_LARGE: bigint;
/** Discussion duration for extra-large proposals */
export declare const DISCUSSION_DURATION_XLARGE: bigint;
/** Voting duration for small proposals (7200 seconds) */
export declare const VOTING_DURATION_SMALL: bigint;
/** Voting duration for medium proposals (7200 seconds) */
export declare const VOTING_DURATION_MEDIUM: bigint;
/** Voting duration for large proposals (7200 seconds) */
export declare const VOTING_DURATION_LARGE: bigint;
/** Voting duration for extra-large proposals (7200 seconds) */
export declare const VOTING_DURATION_XLARGE: bigint;
/** Quorum required for small proposals */
export declare const QUORUM_SMALL: bigint;
/** Quorum required for medium proposals */
export declare const QUORUM_MEDIUM: bigint;
/** Quorum required for large proposals */
export declare const QUORUM_LARGE: bigint;
/** Weighted quorum required for small proposals */
export declare const WEIGHTED_QUORUM_SMALL: bigint;
/** Weighted quorum required for medium proposals */
export declare const WEIGHTED_QUORUM_MEDIUM: bigint;
/** Weighted quorum required for large proposals */
export declare const WEIGHTED_QUORUM_LARGE: bigint;
/** Number of box references needed for proposal approval */
export declare const PROPOSAL_APPROVAL_BOX_REFERENCE_COUNT = 4;
/** Fee sink address for simulating read-only calls */
export declare const FEE_SINK = "A7NMWS3NT3IUDMLVO26ULGXGIIOUQ3ND2TXSER6EBGRZNOBOUIQXHIBGDE";
