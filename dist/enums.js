// ============================================================================
// Proposal Status
// ============================================================================
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
export const ProposalStatusReverseMap = {
    Empty: [ProposalStatus.ProposalStatusEmpty],
    Discussion: [ProposalStatus.ProposalStatusDraft, ProposalStatus.ProposalStatusSubmitted],
    Voting: [ProposalStatus.ProposalStatusVoting],
    Approved: [ProposalStatus.ProposalStatusApproved],
    Rejected: [ProposalStatus.ProposalStatusRejected],
    Funded: [ProposalStatus.ProposalStatusFunded],
    Blocked: [ProposalStatus.ProposalStatusBlocked],
    Delete: [ProposalStatus.ProposalStatusDelete],
};
export const ProposalStatusFilterKeys = ["Discussion", "Voting", "Approved", "Rejected", "Funded", "Blocked"];
// ============================================================================
// Proposal Category
// ============================================================================
export var ProposalCategory;
(function (ProposalCategory) {
    ProposalCategory[ProposalCategory["ProposalCategoryNull"] = 0] = "ProposalCategoryNull";
    ProposalCategory[ProposalCategory["ProposalCategorySmall"] = 10] = "ProposalCategorySmall";
    ProposalCategory[ProposalCategory["ProposalCategoryMedium"] = 20] = "ProposalCategoryMedium";
    ProposalCategory[ProposalCategory["ProposalCategoryLarge"] = 33] = "ProposalCategoryLarge";
})(ProposalCategory || (ProposalCategory = {}));
export const ProposalCategoryMap = {
    [ProposalCategory.ProposalCategoryNull]: "Null",
    [ProposalCategory.ProposalCategorySmall]: "Small",
    [ProposalCategory.ProposalCategoryMedium]: "Medium",
    [ProposalCategory.ProposalCategoryLarge]: "Large",
};
export const ProposalCategoryReverseMap = {
    Null: ProposalCategory.ProposalCategoryNull,
    Small: ProposalCategory.ProposalCategorySmall,
    Medium: ProposalCategory.ProposalCategoryMedium,
    Large: ProposalCategory.ProposalCategoryLarge,
};
// ============================================================================
// Proposal Funding Type
// ============================================================================
export var ProposalFundingType;
(function (ProposalFundingType) {
    ProposalFundingType[ProposalFundingType["Null"] = 0] = "Null";
    ProposalFundingType[ProposalFundingType["Proactive"] = 10] = "Proactive";
    ProposalFundingType[ProposalFundingType["Retroactive"] = 20] = "Retroactive";
})(ProposalFundingType || (ProposalFundingType = {}));
export const ProposalFundingTypeMap = {
    [ProposalFundingType.Null]: "Null",
    [ProposalFundingType.Proactive]: "Proactive",
    [ProposalFundingType.Retroactive]: "Retroactive",
};
export const ProposalFundingTypeReverseMap = {
    Null: ProposalFundingType.Null,
    Proactive: ProposalFundingType.Proactive,
    Retroactive: ProposalFundingType.Retroactive,
};
// ============================================================================
// Proposal Focus
// ============================================================================
export var ProposalFocus;
(function (ProposalFocus) {
    ProposalFocus[ProposalFocus["FocusNull"] = 0] = "FocusNull";
    ProposalFocus[ProposalFocus["FocusDeFi"] = 10] = "FocusDeFi";
    ProposalFocus[ProposalFocus["FocusEducation"] = 20] = "FocusEducation";
    ProposalFocus[ProposalFocus["FocusLibraries"] = 30] = "FocusLibraries";
    ProposalFocus[ProposalFocus["FocusNFT"] = 40] = "FocusNFT";
    ProposalFocus[ProposalFocus["FocusTooling"] = 50] = "FocusTooling";
    ProposalFocus[ProposalFocus["FocusSaas"] = 60] = "FocusSaas";
    ProposalFocus[ProposalFocus["FocusOther"] = 70] = "FocusOther";
})(ProposalFocus || (ProposalFocus = {}));
export const FocusMap = {
    [ProposalFocus.FocusNull]: "Unspecified",
    [ProposalFocus.FocusDeFi]: "DeFi",
    [ProposalFocus.FocusEducation]: "Education",
    [ProposalFocus.FocusLibraries]: "Libraries",
    [ProposalFocus.FocusNFT]: "NFT",
    [ProposalFocus.FocusTooling]: "Tooling",
    [ProposalFocus.FocusSaas]: "Saas",
    [ProposalFocus.FocusOther]: "Other",
};
export const FocusReverseMap = {
    Null: ProposalFocus.FocusNull,
    DeFi: ProposalFocus.FocusDeFi,
    Education: ProposalFocus.FocusEducation,
    Libraries: ProposalFocus.FocusLibraries,
    NFT: ProposalFocus.FocusNFT,
    Tooling: ProposalFocus.FocusTooling,
    Saas: ProposalFocus.FocusSaas,
    Other: ProposalFocus.FocusOther,
};
// ============================================================================
// Status to Phase Mapping
// ============================================================================
export const statusToPhase = {
    [ProposalStatus.ProposalStatusEmpty]: "null",
    [ProposalStatus.ProposalStatusDraft]: "draft",
    [ProposalStatus.ProposalStatusSubmitted]: "discussion",
    [ProposalStatus.ProposalStatusVoting]: "voting",
    [ProposalStatus.ProposalStatusApproved]: "closure",
    [ProposalStatus.ProposalStatusRejected]: "closure",
    [ProposalStatus.ProposalStatusReviewed]: "closure",
    [ProposalStatus.ProposalStatusFunded]: "closure",
    [ProposalStatus.ProposalStatusBlocked]: "closure",
    [ProposalStatus.ProposalStatusDelete]: "closure",
};
export const phaseToText = {
    submission: "Submission",
    discussion: "Discussion",
    voting: "Voting",
    closure: "Closure",
};
