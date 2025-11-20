export declare enum ProposalStatus {
    ProposalStatusEmpty = 0,
    ProposalStatusDraft = 10,
    ProposalStatusSubmitted = 20,
    ProposalStatusVoting = 25,
    ProposalStatusApproved = 30,
    ProposalStatusRejected = 40,
    ProposalStatusReviewed = 45,
    ProposalStatusFunded = 50,
    ProposalStatusBlocked = 60,
    ProposalStatusDelete = 70
}
export type Status = "Empty" | "Draft" | "Submitted" | "Voting" | "Approved" | "Rejected" | "Funded" | "Blocked" | "Delete";
export type ExtendedStatus = Status | "Discussion" | "Reviewed" | "Deleted";
export declare const ProposalStatusMap: Record<number, ExtendedStatus>;
