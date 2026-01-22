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
export declare const ProposalStatusReverseMap: Record<string, ProposalStatus[]>;
export declare const ProposalStatusFilterKeys: readonly ["Discussion", "Voting", "Approved", "Rejected", "Funded", "Blocked"];
export declare enum ProposalCategory {
    ProposalCategoryNull = 0,
    ProposalCategorySmall = 10,
    ProposalCategoryMedium = 20,
    ProposalCategoryLarge = 33
}
export type Category = "Null" | "Small" | "Medium" | "Large";
export declare const ProposalCategoryMap: Record<number, Category>;
export declare const ProposalCategoryReverseMap: Record<Category, ProposalCategory>;
export declare enum ProposalFundingType {
    Null = 0,
    Proactive = 10,
    Retroactive = 20
}
export type FundingType = "Null" | "Proactive" | "Retroactive";
export declare const ProposalFundingTypeMap: Record<number, FundingType>;
export declare const ProposalFundingTypeReverseMap: Record<FundingType, ProposalFundingType>;
export declare enum ProposalFocus {
    FocusNull = 0,
    FocusDeFi = 10,
    FocusEducation = 20,
    FocusLibraries = 30,
    FocusNFT = 40,
    FocusTooling = 50,
    FocusSaas = 60,
    FocusOther = 70
}
export type Focus = "Null" | "DeFi" | "Education" | "Libraries" | "NFT" | "Tooling" | "Saas" | "Other";
export declare const FocusMap: Record<number, string>;
export declare const FocusReverseMap: Record<string, ProposalFocus>;
export declare const statusToPhase: Record<ProposalStatus, string>;
export declare const phaseToText: Record<string, string>;
