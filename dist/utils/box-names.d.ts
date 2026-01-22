/**
 * Box name utilities for xGov smart contracts.
 * Each contract uses prefixed box names to organize data by type.
 */
/**
 * Creates a box name for a proposer in the registry contract.
 * Format: "p" + 32-byte public key
 */
export declare function proposerBoxName(address: string): Uint8Array;
/**
 * Creates a box name for an xGov in the registry contract.
 * Format: "x" + 32-byte public key
 */
export declare function xGovBoxName(address: string): Uint8Array;
/**
 * Creates a box name for an xGov subscription request in the registry contract.
 * Format: "r" + 8-byte uint64 request ID
 */
export declare function requestBoxName(id: number | bigint): Uint8Array;
/**
 * Creates a box name for proposal approvals in the registry contract.
 * Format: "pa"
 */
export declare function proposalApprovalBoxName(): Uint8Array;
/**
 * Creates a box name for a voter in a proposal contract.
 * Format: "V" + 32-byte public key
 */
export declare function voterBoxName(address: string): Uint8Array;
/**
 * Creates a box name for proposal metadata.
 * Format: "M"
 */
export declare function metadataBoxName(): Uint8Array;
/**
 * Creates a box name for a council member.
 * Format: "M" + 32-byte public key
 */
export declare function councilMemberBoxName(address: string): Uint8Array;
/**
 * Creates a box name for council votes on a proposal.
 * Format: "V" + 8-byte uint64 proposal ID
 */
export declare function councilVoteBoxName(proposalId: number | bigint): Uint8Array;
