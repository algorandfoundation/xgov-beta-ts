export var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus[ProposalStatus["ProposalStatusEmpty"] = 0] = "ProposalStatusEmpty";
    ProposalStatus[ProposalStatus["ProposalStatusDraft"] = 10] = "ProposalStatusDraft";
    ProposalStatus[ProposalStatus["ProposalStatusSubmitted"] = 20] = "ProposalStatusSubmitted";
    ProposalStatus[ProposalStatus["ProposalStatusVoting"] = 25] = "ProposalStatusVoting";
    ProposalStatus[ProposalStatus["ProposalStatusApproved"] = 30] = "ProposalStatusApproved";
    ProposalStatus[ProposalStatus["ProposalStatusRejected"] = 40] = "ProposalStatusRejected";
    ProposalStatus[ProposalStatus["ProposalStatusReviewed"] = 45] = "ProposalStatusReviewed";
    ProposalStatus[ProposalStatus["ProposalStatusFunded"] = 50] = "ProposalStatusFunded";
    ProposalStatus[ProposalStatus["ProposalStatusBlocked"] = 60] = "ProposalStatusBlocked";
    ProposalStatus[ProposalStatus["ProposalStatusDelete"] = 70] = "ProposalStatusDelete";
})(ProposalStatus || (ProposalStatus = {}));
export const ProposalStatusMap = {
    [ProposalStatus.ProposalStatusEmpty]: "Empty",
    [ProposalStatus.ProposalStatusDraft]: "Discussion",
    [ProposalStatus.ProposalStatusSubmitted]: "Discussion",
    [ProposalStatus.ProposalStatusVoting]: "Voting",
    [ProposalStatus.ProposalStatusApproved]: "Approved",
    [ProposalStatus.ProposalStatusRejected]: "Rejected",
    [ProposalStatus.ProposalStatusReviewed]: "Reviewed",
    [ProposalStatus.ProposalStatusFunded]: "Funded",
    [ProposalStatus.ProposalStatusBlocked]: "Blocked",
    [ProposalStatus.ProposalStatusDelete]: "Deleted",
};
