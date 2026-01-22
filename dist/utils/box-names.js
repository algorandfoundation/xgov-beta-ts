import algosdk from "algosdk";
/**
 * Box name utilities for xGov smart contracts.
 * Each contract uses prefixed box names to organize data by type.
 */
// ============================================================================
// Registry Contract Box Names
// ============================================================================
/**
 * Creates a box name for a proposer in the registry contract.
 * Format: "p" + 32-byte public key
 */
export function proposerBoxName(address) {
    return new Uint8Array(Buffer.concat([
        Buffer.from("p"),
        algosdk.decodeAddress(address).publicKey,
    ]));
}
/**
 * Creates a box name for an xGov in the registry contract.
 * Format: "x" + 32-byte public key
 */
export function xGovBoxName(address) {
    return new Uint8Array(Buffer.concat([
        Buffer.from("x"),
        algosdk.decodeAddress(address).publicKey,
    ]));
}
/**
 * Creates a box name for an xGov subscription request in the registry contract.
 * Format: "r" + 8-byte uint64 request ID
 */
export function requestBoxName(id) {
    return new Uint8Array(Buffer.concat([
        Buffer.from("r"),
        algosdk.encodeUint64(BigInt(id)),
    ]));
}
/**
 * Creates a box name for proposal approvals in the registry contract.
 * Format: "pa"
 */
export function proposalApprovalBoxName() {
    return new Uint8Array(Buffer.from("pa"));
}
// ============================================================================
// Proposal Contract Box Names
// ============================================================================
/**
 * Creates a box name for a voter in a proposal contract.
 * Format: "V" + 32-byte public key
 */
export function voterBoxName(address) {
    return new Uint8Array(Buffer.concat([
        Buffer.from("V"),
        algosdk.decodeAddress(address).publicKey,
    ]));
}
/**
 * Creates a box name for proposal metadata.
 * Format: "M"
 */
export function metadataBoxName() {
    return new Uint8Array(Buffer.from("M"));
}
// ============================================================================
// Council Contract Box Names
// ============================================================================
/**
 * Creates a box name for a council member.
 * Format: "M" + 32-byte public key
 */
export function councilMemberBoxName(address) {
    return new Uint8Array(Buffer.concat([
        Buffer.from("M"),
        algosdk.decodeAddress(address).publicKey,
    ]));
}
/**
 * Creates a box name for council votes on a proposal.
 * Format: "V" + 8-byte uint64 proposal ID
 */
export function councilVoteBoxName(proposalId) {
    return new Uint8Array(Buffer.concat([
        Buffer.from("V"),
        algosdk.encodeUint64(BigInt(proposalId)),
    ]));
}
