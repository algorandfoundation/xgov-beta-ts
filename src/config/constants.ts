/**
 * Network configuration and constants for xGov SDK.
 * Provides fee structures, limits, and network-specific app IDs.
 */

// ============================================================================
// Network Types
// ============================================================================

export type NetworkId = "mainnet" | "testnet" | "localnet";

export interface NetworkConfig {
  registryAppId: bigint;
  councilAppId: bigint;
  algodUrl?: string;
  algodToken?: string;
  indexerUrl?: string;
  indexerToken?: string;
}

// ============================================================================
// Fee Constants (in microAlgos)
// ============================================================================

/** Fee to subscribe as an xGov (1 ALGO) */
export const XGOV_FEE = BigInt(1_000_000);

/** Fee to subscribe as a proposer (10 ALGO) */
export const PROPOSER_FEE = BigInt(10_000_000);

/** Fee to create a proposal (100 ALGO) */
export const PROPOSAL_FEE = BigInt(100_000_000);

/** Publishing fee in basis points (5%) */
export const PROPOSAL_PUBLISHING_BPS = BigInt(500);

/** Commitment fee in basis points (3%) */
export const PROPOSAL_COMMITMENT_BPS = BigInt(300);

// ============================================================================
// Amount Limits (in microAlgos)
// ============================================================================

/** Minimum requested amount for a proposal */
export const MIN_REQUESTED_AMOUNT = BigInt(1_000);

/** Maximum requested amount for small proposals (50,000 ALGO) */
export const MAX_REQUESTED_AMOUNT_SMALL = BigInt(50_000_000_000);

/** Maximum requested amount for medium proposals (250,000 ALGO) */
export const MAX_REQUESTED_AMOUNT_MEDIUM = BigInt(250_000_000_000);

/** Maximum requested amount for large proposals (500,000 ALGO) */
export const MAX_REQUESTED_AMOUNT_LARGE = BigInt(500_000_000_000);

// ============================================================================
// Duration Constants (in seconds)
// ============================================================================

/** Discussion duration for small proposals */
export const DISCUSSION_DURATION_SMALL = BigInt(60);

/** Discussion duration for medium proposals */
export const DISCUSSION_DURATION_MEDIUM = BigInt(60);

/** Discussion duration for large proposals */
export const DISCUSSION_DURATION_LARGE = BigInt(60);

/** Discussion duration for extra-large proposals */
export const DISCUSSION_DURATION_XLARGE = BigInt(60);

/** Voting duration for small proposals (7200 seconds) */
export const VOTING_DURATION_SMALL = BigInt(7200);

/** Voting duration for medium proposals (7200 seconds) */
export const VOTING_DURATION_MEDIUM = BigInt(7200);

/** Voting duration for large proposals (7200 seconds) */
export const VOTING_DURATION_LARGE = BigInt(7200);

/** Voting duration for extra-large proposals (7200 seconds) */
export const VOTING_DURATION_XLARGE = BigInt(7200);

// ============================================================================
// Quorum Constants
// ============================================================================

/** Quorum required for small proposals */
export const QUORUM_SMALL = BigInt(1_000);

/** Quorum required for medium proposals */
export const QUORUM_MEDIUM = BigInt(1_500);

/** Quorum required for large proposals */
export const QUORUM_LARGE = BigInt(2_000);

/** Weighted quorum required for small proposals */
export const WEIGHTED_QUORUM_SMALL = BigInt(2_000);

/** Weighted quorum required for medium proposals */
export const WEIGHTED_QUORUM_MEDIUM = BigInt(3_000);

/** Weighted quorum required for large proposals */
export const WEIGHTED_QUORUM_LARGE = BigInt(4_000);

// ============================================================================
// Box Reference Counts
// ============================================================================

/** Number of box references needed for proposal approval */
export const PROPOSAL_APPROVAL_BOX_REFERENCE_COUNT = 4;

// ============================================================================
// Special Addresses
// ============================================================================

/** Fee sink address for simulating read-only calls */
export const FEE_SINK = "A7NMWS3NT3IUDMLVO26ULGXGIIOUQ3ND2TXSER6EBGRZNOBOUIQXHIBGDE";
