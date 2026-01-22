// ============================================================================
// Proposal Status
// ============================================================================

export enum ProposalStatus {
  ProposalStatusEmpty = 0,
  ProposalStatusDraft = 10,
  ProposalStatusSubmitted = 20,
  ProposalStatusVoting = 25,
  ProposalStatusApproved = 30,
  ProposalStatusRejected = 40,
  ProposalStatusReviewed = 45,
  ProposalStatusFunded = 50,
  ProposalStatusBlocked = 60,
  ProposalStatusDelete = 70,
}

export type Status =
  | "Empty"
  | "Draft"
  | "Submitted"
  | "Voting"
  | "Approved"
  | "Rejected"
  | "Funded"
  | "Blocked"
  | "Delete";

export type ExtendedStatus = Status | "Discussion" | "Reviewed" | "Deleted";

export const ProposalStatusMap: Record<number, ExtendedStatus> = {
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

export const ProposalStatusReverseMap: Record<string, ProposalStatus[]> = {
  Empty: [ProposalStatus.ProposalStatusEmpty],
  Discussion: [ProposalStatus.ProposalStatusDraft, ProposalStatus.ProposalStatusSubmitted],
  Voting: [ProposalStatus.ProposalStatusVoting],
  Approved: [ProposalStatus.ProposalStatusApproved],
  Rejected: [ProposalStatus.ProposalStatusRejected],
  Funded: [ProposalStatus.ProposalStatusFunded],
  Blocked: [ProposalStatus.ProposalStatusBlocked],
  Delete: [ProposalStatus.ProposalStatusDelete],
};

export const ProposalStatusFilterKeys = ["Discussion", "Voting", "Approved", "Rejected", "Funded", "Blocked"] as const;

// ============================================================================
// Proposal Category
// ============================================================================

export enum ProposalCategory {
  ProposalCategoryNull = 0,
  ProposalCategorySmall = 10,
  ProposalCategoryMedium = 20,
  ProposalCategoryLarge = 33,
}

export type Category = "Null" | "Small" | "Medium" | "Large";

export const ProposalCategoryMap: Record<number, Category> = {
  [ProposalCategory.ProposalCategoryNull]: "Null",
  [ProposalCategory.ProposalCategorySmall]: "Small",
  [ProposalCategory.ProposalCategoryMedium]: "Medium",
  [ProposalCategory.ProposalCategoryLarge]: "Large",
};

export const ProposalCategoryReverseMap: Record<Category, ProposalCategory> = {
  Null: ProposalCategory.ProposalCategoryNull,
  Small: ProposalCategory.ProposalCategorySmall,
  Medium: ProposalCategory.ProposalCategoryMedium,
  Large: ProposalCategory.ProposalCategoryLarge,
};

// ============================================================================
// Proposal Funding Type
// ============================================================================

export enum ProposalFundingType {
  Null = 0,
  Proactive = 10,
  Retroactive = 20,
}

export type FundingType = "Null" | "Proactive" | "Retroactive";

export const ProposalFundingTypeMap: Record<number, FundingType> = {
  [ProposalFundingType.Null]: "Null",
  [ProposalFundingType.Proactive]: "Proactive",
  [ProposalFundingType.Retroactive]: "Retroactive",
};

export const ProposalFundingTypeReverseMap: Record<FundingType, ProposalFundingType> = {
  Null: ProposalFundingType.Null,
  Proactive: ProposalFundingType.Proactive,
  Retroactive: ProposalFundingType.Retroactive,
};

// ============================================================================
// Proposal Focus
// ============================================================================

export enum ProposalFocus {
  FocusNull = 0,
  FocusDeFi = 10,
  FocusEducation = 20,
  FocusLibraries = 30,
  FocusNFT = 40,
  FocusTooling = 50,
  FocusSaas = 60,
  FocusOther = 70,
}

export type Focus =
  | "Null"
  | "DeFi"
  | "Education"
  | "Libraries"
  | "NFT"
  | "Tooling"
  | "Saas"
  | "Other";

export const FocusMap: Record<number, string> = {
  [ProposalFocus.FocusNull]: "Unspecified",
  [ProposalFocus.FocusDeFi]: "DeFi",
  [ProposalFocus.FocusEducation]: "Education",
  [ProposalFocus.FocusLibraries]: "Libraries",
  [ProposalFocus.FocusNFT]: "NFT",
  [ProposalFocus.FocusTooling]: "Tooling",
  [ProposalFocus.FocusSaas]: "Saas",
  [ProposalFocus.FocusOther]: "Other",
};

export const FocusReverseMap: Record<string, ProposalFocus> = {
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

export const statusToPhase: Record<ProposalStatus, string> = {
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

export const phaseToText: Record<string, string> = {
  submission: "Submission",
  discussion: "Discussion",
  voting: "Voting",
  closure: "Closure",
};
