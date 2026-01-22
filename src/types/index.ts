import type {
  ProposalCategory,
  ProposalFocus,
  ProposalFundingType,
  ProposalStatus,
} from "../enums";

// ============================================================================
// Registry Types
// ============================================================================

/**
 * xGov box value containing subscription and voting information.
 */
export interface XGovBoxValue {
  votingAddress: string;
  votedProposals: bigint;
  lastVoteTimestamp: bigint;
  subscriptionRound: bigint;
}

/**
 * xGov box value with existence flag from contract read.
 */
export interface XGovInfo extends XGovBoxValue {
  isXGov: boolean;
}

/**
 * Proposer box value containing KYC and proposal status.
 */
export interface ProposerBoxValue {
  activeProposal: boolean;
  kycStatus: boolean;
  kycExpiring: bigint;
}

/**
 * Proposer box value with existence flag from contract read.
 */
export interface ProposerInfo extends ProposerBoxValue {
  isProposer: boolean;
}

/**
 * xGov subscription request stored in registry.
 */
export interface XGovSubscribeRequest {
  id: bigint;
  xgovAddr: string;
  ownerAddr: string;
  relationType: bigint;
}

/**
 * Registry global state.
 */
export interface RegistryGlobalState {
  committeeManager: string;
  xgovDaemon: string;
  kycProvider: string;
  xgovManager: string;
  xgovPayor: string;
  xgovCouncil: string;
  xgovSubscriber: string;
  xgovFee?: bigint;
  proposerFee?: bigint;
  proposalFee?: bigint;
}

// ============================================================================
// Proposal Types
// ============================================================================

/**
 * JSON metadata stored in proposal box.
 */
export interface ProposalMetadata {
  description: string;
  team: string;
  additionalInfo?: string;
  openSource: boolean;
  /** Deliverables for proactive proposals */
  deliverables?: {
    amount: bigint;
    description: string;
  }[];
  /** Adoption metrics for retroactive proposals */
  adoptionMetrics?: string[];
  pastProposalLinks?: bigint[];
  forumLink: string;
}

/**
 * Summary of a proposal from global state.
 */
export interface ProposalSummary {
  id: bigint;
  title: string;
  requestedAmount: bigint;
  proposer: string;
  fundingType: ProposalFundingType;
  status: ProposalStatus;
  focus: ProposalFocus;
  fundingCategory: ProposalCategory;
  openTs: bigint;
  approvals: bigint;
  rejections: bigint;
  nulls: bigint;
  committeeVotes: bigint;
  registryAppId: bigint;
  submissionTs: bigint;
  voteOpenTs: bigint;
  lockedAmount: bigint;
  committeeId: Uint8Array;
  committeeMembers: bigint;
  votedMembers: bigint;
  finalized: boolean;
}

/**
 * Full proposal details including metadata.
 */
export interface ProposalDetails extends ProposalSummary, ProposalMetadata {}

/**
 * Brief proposal info for lists.
 */
export interface ProposalBrief {
  id: bigint;
  status: ProposalStatus;
  title: string;
}

/**
 * Voting state for a proposal.
 */
export interface VotingState {
  approvals: bigint;
  rejections: bigint;
  nulls: bigint;
  totalVotes: bigint;
}

/**
 * Voter information for a proposal.
 */
export interface VoterInfo {
  address: string;
  votes: bigint;
  voted: boolean;
}

// ============================================================================
// Council Types
// ============================================================================

/**
 * Council vote record.
 */
export interface CouncilVote {
  address: string;
  block: boolean;
}

/**
 * Council member info with optional voting power.
 */
export interface CouncilMember {
  address: string;
  votes?: number;
}

// ============================================================================
// Committee Types
// ============================================================================

/**
 * Committee member as stored in committee JSON.
 */
export interface CommitteeMember {
  address: string;
  votes: number;
}

/**
 * Committee data structure.
 */
export interface CommitteeData {
  id: string;
  name: string;
  xGovs: CommitteeMember[];
  totalVotes: number;
}

// ============================================================================
// Input Types for SDK Operations
// ============================================================================

/**
 * Input for opening/creating a proposal.
 */
export interface OpenProposalInput {
  title: string;
  description: string;
  team: string;
  additionalInfo?: string;
  openSource: boolean;
  fundingType: ProposalFundingType;
  requestedAmount: bigint;
  focus: ProposalFocus;
  adoptionMetrics?: string[];
  forumLink: string;
}

/**
 * Input for updating proposal metadata.
 */
export interface UpdateMetadataInput {
  description: string;
  team: string;
  additionalInfo?: string;
  openSource: boolean;
  adoptionMetrics?: string[];
  forumLink: string;
}

/**
 * Input for voting on a proposal.
 */
export interface VoteInput {
  proposalId: bigint;
  xgovAddress: string;
  approvals: number;
  rejections: number;
}
