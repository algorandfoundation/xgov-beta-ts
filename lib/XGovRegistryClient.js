import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "XGovRegistry", "structs": { "XGovRegistryConfig": [{ "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "openProposalFee", "type": "uint64" }, { "name": "daemonOpsFundingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }], "TypedGlobalState": [{ "name": "pausedRegistry", "type": "bool" }, { "name": "pausedProposals", "type": "bool" }, { "name": "xgovManager", "type": "address" }, { "name": "xgovPayor", "type": "address" }, { "name": "xgovCouncil", "type": "address" }, { "name": "xgovSubscriber", "type": "address" }, { "name": "kycProvider", "type": "address" }, { "name": "committeeManager", "type": "address" }, { "name": "xgovDaemon", "type": "address" }, { "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "openProposalFee", "type": "uint64" }, { "name": "daemonOpsFundingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }, { "name": "outstandingFunds", "type": "uint64" }, { "name": "pendingProposals", "type": "uint64" }, { "name": "committeeId", "type": "byte[32]" }, { "name": "committeeMembers", "type": "uint64" }, { "name": "committeeVotes", "type": "uint64" }], "XGovBoxValue": [{ "name": "votingAddress", "type": "address" }, { "name": "votedProposals", "type": "uint64" }, { "name": "lastVoteTimestamp", "type": "uint64" }, { "name": "subscriptionRound", "type": "uint64" }], "ProposerBoxValue": [{ "name": "activeProposal", "type": "bool" }, { "name": "kycStatus", "type": "bool" }, { "name": "kycExpiring", "type": "uint64" }] }, "methods": [{ "name": "create", "desc": "Create the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "pause_registry", "desc": "Pauses the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pause_proposals", "desc": "Pauses the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_registry", "desc": "Resumes the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_proposals", "desc": "Resumes the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_manager", "desc": "Sets the xGov Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_payor", "desc": "Sets the xGov Payor.", "args": [{ "name": "payor", "type": "address", "desc": "Address of the new xGov Payor" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_council", "desc": "Sets the xGov Council.", "args": [{ "name": "council", "type": "address", "desc": "Address of the new xGov Council" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_subscriber", "desc": "Sets the xGov Subscriber.", "args": [{ "name": "subscriber", "type": "address", "desc": "Address of the new xGov Subscriber" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_kyc_provider", "desc": "Sets the KYC provider.", "args": [{ "name": "provider", "type": "address", "desc": "Address of the new KYC Provider" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_manager", "desc": "Sets the Committee Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_daemon", "desc": "Sets the xGov Daemon.", "args": [{ "name": "xgov_daemon", "type": "address", "desc": "Address of the new xGov Daemon" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "config_xgov_registry", "desc": "Sets the configuration of the xGov Registry.", "args": [{ "name": "config", "type": "(uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3])", "desc": "Configuration class containing the field data", "struct": "XGovRegistryConfig" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "update_xgov_registry", "desc": "Updates the xGov Registry contract.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["UpdateApplication"] } }, { "name": "subscribe_xgov", "desc": "Subscribes the sender to being an xGov.", "args": [{ "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov", "desc": "Unsubscribes the designated address from being an xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov to unsubscribe" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "request_subscribe_xgov", "desc": "Requests to subscribe to the xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }, { "name": "owner_address", "type": "address", "desc": "The address of the xGov Address owner/controller (Voting Address)" }, { "name": "relation_type", "type": "uint64", "desc": "The type of relationship enum" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "approve_subscribe_xgov", "desc": "Approves a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to approve" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "reject_subscribe_xgov", "desc": "Rejects a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to reject" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_voting_account", "desc": "Sets the Voting Address for the xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The xGov address delegating voting power" }, { "name": "voting_address", "type": "address", "desc": "The voting account address to delegate voting power to" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_proposer", "desc": "Subscribes the sender to being a Proposer.", "args": [{ "name": "payment", "type": "pay", "desc": "The payment transaction covering the Proposer fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_proposer_kyc", "desc": "Sets a proposer's KYC status.", "args": [{ "name": "proposer", "type": "address", "desc": "The address of the Proposer" }, { "name": "kyc_status", "type": "bool", "desc": "The new status of the Proposer" }, { "name": "kyc_expiring", "type": "uint64", "desc": "The expiration date as a unix timestamp of the time the KYC expires" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "declare_committee", "desc": "Sets the xGov Committee in charge.", "args": [{ "name": "committee_id", "type": "byte[32]", "desc": "The ID of the xGov Committee" }, { "name": "size", "type": "uint64", "desc": "The size of the xGov Committee" }, { "name": "votes", "type": "uint64", "desc": "The voting power of the xGov Committee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "open_proposal", "desc": "Creates a new Proposal.", "args": [{ "name": "payment", "type": "pay", "desc": "payment for covering the proposal fee (includes child contract MBR)" }], "returns": { "type": "uint64" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote_proposal", "desc": "Votes on a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app being voted on" }, { "name": "xgov_address", "type": "address", "desc": "(arc4.Address): The address of the xGov being voted on behalf of" }, { "name": "approval_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of approvals votes allocated" }, { "name": "rejection_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of rejections votes allocated" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pay_grant_proposal", "desc": "Disburses the funds for an approved Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the approved Proposal" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "finalize_proposal", "desc": "Finalize a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app to finalize" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "drop_proposal", "desc": "Drops a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app to drop" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "deposit_funds", "desc": "Deposits xGov program funds into the xGov Treasury (xGov Registry Account).", "args": [{ "name": "payment", "type": "pay", "desc": "the deposit transaction" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_funds", "desc": "Remove xGov program funds from the xGov Treasury (xGov Registry Account).", "args": [{ "name": "amount", "type": "uint64", "desc": "the amount to remove" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_balance", "desc": "Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_state", "desc": "Returns the xGov Registry state.", "args": [], "returns": { "type": "(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)", "struct": "TypedGlobalState" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_xgov_box", "desc": "Returns the xGov box for the given address.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }], "returns": { "type": "(address,uint64,uint64,uint64)", "desc": "The xGov box value", "struct": "XGovBoxValue" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_proposer_box", "desc": "Returns the Proposer box for the given address.", "args": [{ "name": "proposer_address", "type": "address", "desc": "The address of the Proposer" }], "returns": { "type": "(bool,bool,uint64)", "desc": "The Proposer box value", "struct": "ProposerBoxValue" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }, { "name": "is_proposal", "args": [{ "name": "proposal_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 36, "bytes": 28 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "committee_id": { "key": "Y29tbWl0dGVlX2lk", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_manager": { "key": "Y29tbWl0dGVlX21hbmFnZXI=", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_members": { "key": "Y29tbWl0dGVlX21lbWJlcnM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "committee_votes": { "key": "Y29tbWl0dGVlX3ZvdGVz", "keyType": "AVMString", "valueType": "AVMUint64" }, "daemon_ops_funding_bps": { "key": "ZGFlbW9uX29wZXJhdGlvbl9mdW5kaW5nX2Jwcw==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_large": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_medium": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0=", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_small": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_xlarge": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "kyc_provider": { "key": "a3ljX3Byb3ZpZGVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "max_committee_size": { "key": "bWF4X2NvbW1pdHRlZV9zaXpl", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_large": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_medium": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVt", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_small": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGw=", "keyType": "AVMString", "valueType": "AVMUint64" }, "min_requested_amount": { "key": "bWluX3JlcXVlc3RlZF9hbW91bnQ=", "keyType": "AVMString", "valueType": "AVMUint64" }, "open_proposal_fee": { "key": "b3Blbl9wcm9wb3NhbF9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "outstanding_funds": { "key": "b3V0c3RhbmRpbmdfZnVuZHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_proposals": { "key": "cGF1c2VkX3Byb3Bvc2Fscw==", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_registry": { "key": "cGF1c2VkX3JlZ2lzdHJ5", "keyType": "AVMString", "valueType": "AVMUint64" }, "pending_proposals": { "key": "cGVuZGluZ19wcm9wb3NhbHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_commitment_bps": { "key": "cHJvcG9zYWxfY29tbWl0bWVudF9icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposer_fee": { "key": "cHJvcG9zZXJfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_large": { "key": "cXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_medium": { "key": "cXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_small": { "key": "cXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "request_id": { "key": "cmVxdWVzdF9pZA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_large": { "key": "dm90aW5nX2R1cmF0aW9uX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_medium": { "key": "dm90aW5nX2R1cmF0aW9uX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_small": { "key": "dm90aW5nX2R1cmF0aW9uX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_xlarge": { "key": "dm90aW5nX2R1cmF0aW9uX3hsYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_large": { "key": "d2VpZ2h0ZWRfcXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_medium": { "key": "d2VpZ2h0ZWRfcXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_small": { "key": "d2VpZ2h0ZWRfcXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_council": { "key": "eGdvdl9jb3VuY2ls", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_daemon": { "key": "eGdvdl9kYWVtb24=", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_fee": { "key": "eGdvdl9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_manager": { "key": "eGdvdl9tYW5hZ2Vy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_payor": { "key": "eGdvdl9wYXlvcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_subscriber": { "key": "eGdvdl9zdWJzY3JpYmVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgovs": { "key": "eGdvdnM=", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX19hbGdvcHlfZW50cnlwb2ludF93aXRoX2luaXQoKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMCAxIDQgOCAxOTMwMAogICAgYnl0ZWNibG9jayAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OSAweDcwIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MyAweDE1MWY3Yzc1IDB4NzggMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIgMHg3ODY3NmY3NjczIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MyAweDAwIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMgMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIgMHg3ODY3NmY3NjVmNzA2MTc5NmY3MiAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MiAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIgMHg3ODY3NmY3NjVmNjQ2MTY1NmQ2ZjZlIDB4Nzg2NzZmNzY1ZjY2NjU2NSAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NSAweDZmNzA2NTZlNWY3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUgIldyb25nIFByb3Bvc2FsIFN0YXR1cyBvciBmaW5hbGl6ZWQiICJFUlI6IiAweDc4Njc2Zjc2NWY2MzZmNzU2ZTYzNjk2YyAweDY0NjE2NTZkNmY2ZTVmNmY3MDY1NzI2MTc0Njk2ZjZlNWY2Njc1NmU2NDY5NmU2NzVmNjI3MDczIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmM2MTcyNjc2NSAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZCAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1IDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NSAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1IDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUgMHg3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMgMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZCAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NSAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1IDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0IDB4NmQ2MTc4NWY2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjczNjk3YTY1IDB4NzIgMHgwMDAwMDAwMDAwMDAwMDAwIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2OTY0ICJNaXNzaW5nIENvbmZpZyIgVE1QTF9lbnRyb3B5CiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYm56IG1haW5fYWZ0ZXJfaWZfZWxzZUAyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1Mi01MwogICAgLy8gIyBQcmVjb25kaXRpb25zCiAgICAvLyBhc3NlcnQgVHhuLmdsb2JhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuR0xPQkFMX0JZVEVTLCBlcnIuV1JPTkdfR0xPQkFMX0JZVEVTCiAgICB0eG4gR2xvYmFsTnVtQnl0ZVNsaWNlCiAgICBwdXNoaW50IDI4IC8vIDI4CiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBCeXRlcyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NAogICAgLy8gYXNzZXJ0IFR4bi5nbG9iYWxfbnVtX3VpbnQgPT0gY2ZnLkdMT0JBTF9VSU5UUywgZXJyLldST05HX0dMT0JBTF9VSU5UUwogICAgdHhuIEdsb2JhbE51bVVpbnQKICAgIHB1c2hpbnQgMzYgLy8gMzYKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgR2xvYmFsIFVJbnRzIGFsbG9jYXRpb24KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1CiAgICAvLyBhc3NlcnQgVHhuLmxvY2FsX251bV9ieXRlX3NsaWNlID09IGNmZy5MT0NBTF9CWVRFUywgZXJyLldST05HX0xPQ0FMX0JZVEVTCiAgICB0eG4gTG9jYWxOdW1CeXRlU2xpY2UKICAgICEKICAgIGFzc2VydCAvLyBXcm9uZyBMb2NhbCBCeXRlcyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NgogICAgLy8gYXNzZXJ0IFR4bi5sb2NhbF9udW1fdWludCA9PSBjZmcuTE9DQUxfVUlOVFMsIGVyci5XUk9OR19MT0NBTF9VSU5UUwogICAgdHhuIExvY2FsTnVtVWludAogICAgIQogICAgYXNzZXJ0IC8vIFdyb25nIExvY2FsIFVJbnRzIGFsbG9jYXRpb24KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4LTU5CiAgICAvLyAjIEluaXRpYWxpemUgZ2xvYmFsIHN0YXRlIHZhcmlhYmxlcwogICAgLy8gc2VsZi5wYXVzZWRfcmVnaXN0cnkgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUEFVU0VEX1JFR0lTVFJZKQogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MAogICAgLy8gc2VsZi5wYXVzZWRfcHJvcG9zYWxzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BBVVNFRF9QUk9QT1NBTFMpCiAgICBieXRlYyA5IC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjIKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfTUFOQUdFUikKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY0CiAgICAvLyBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2My02NQogICAgLy8gc2VsZi54Z292X3N1YnNjcmliZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjYKICAgIC8vIHNlbGYueGdvdl9wYXlvciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX1BBWU9SKQogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjcKICAgIC8vIHNlbGYueGdvdl9jb3VuY2lsID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfQ09VTkNJTCkKICAgIGJ5dGVjIDIwIC8vIDB4Nzg2NzZmNzY1ZjYzNmY3NTZlNjM2OTZjCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OQogICAgLy8gc2VsZi5reWNfcHJvdmlkZXIgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfS1lDX1BST1ZJREVSKQogICAgYnl0ZWMgMTIgLy8gMHg2Yjc5NjM1ZjcwNzI2Zjc2Njk2NDY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcxCiAgICAvLyBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01BTkFHRVIKICAgIGJ5dGVjIDEzIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDYxNmU2MTY3NjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MC03MgogICAgLy8gc2VsZi5jb21taXR0ZWVfbWFuYWdlciA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfTUFOQUdFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczCiAgICAvLyBzZWxmLnhnb3ZfZGFlbW9uID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfREFFTU9OKQogICAgYnl0ZWMgMTQgLy8gMHg3ODY3NmY3NjVmNjQ2MTY1NmQ2ZjZlCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NQogICAgLy8gc2VsZi54Z292X2ZlZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX0ZFRSkKICAgIGJ5dGVjIDE1IC8vIDB4Nzg2NzZmNzY1ZjY2NjU2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NgogICAgLy8gc2VsZi54Z292cyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WUykKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3CiAgICAvLyBzZWxmLnByb3Bvc2VyX2ZlZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NFUl9GRUUpCiAgICBieXRlYyAxNiAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3OAogICAgLy8gc2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9PUEVOX1BST1BPU0FMX0ZFRSkKICAgIGJ5dGVjIDE3IC8vIDB4NmY3MDY1NmU1ZjcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RBRU1PTl9PUFNfRlVORElOR19CUFMKICAgIGJ5dGVjIDIxIC8vIDB4NjQ2MTY1NmQ2ZjZlNWY2ZjcwNjU3MjYxNzQ2OTZmNmU1ZjY2NzU2ZTY0Njk2ZTY3NWY2MjcwNzMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3OS04MQogICAgLy8gc2VsZi5kYWVtb25fb3BzX2Z1bmRpbmdfYnBzID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RBRU1PTl9PUFNfRlVORElOR19CUFMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0NPTU1JVE1FTlRfQlBTCiAgICBieXRlYyAyMiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4Mi04NAogICAgLy8gc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2JwcyA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9DT01NSVRNRU5UX0JQUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUlOX1JFUVVFU1RFRF9BTU9VTlQKICAgIGJ5dGVjIDIzIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg2LTg4CiAgICAvLyBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50ID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01JTl9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTEKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9TTUFMTAogICAgYnl0ZWMgMjQgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTAtOTIKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX01FRElVTQogICAgYnl0ZWMgMjUgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5My05NQogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTcKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9MQVJHRQogICAgYnl0ZWMgMjYgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTYtOTgKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDEKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX1NNQUxMCiAgICBieXRlYyAyNyAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwLTEwMgogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX01FRElVTQogICAgYnl0ZWMgMjggLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAzLTEwNQogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTEFSR0UKICAgIGJ5dGVjIDI5IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDYtMTA4CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9MQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fWExBUkdFCiAgICBieXRlYyAzMCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDktMTExCiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fWExBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1NNQUxMCiAgICBieXRlYyAzMSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMy0xMTUKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9NRURJVU0KICAgIGJ5dGVjIDMyIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTYtMTE4CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9MQVJHRQogICAgYnl0ZWMgMzMgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTktMTIxCiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjMKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fWExBUkdFCiAgICBieXRlYyAzNCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIyLTEyNAogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9YTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjYKICAgIC8vIHNlbGYucXVvcnVtX3NtYWxsID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9TTUFMTCkKICAgIGJ5dGVjIDM1IC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNwogICAgLy8gc2VsZi5xdW9ydW1fbWVkaXVtID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9NRURJVU0pCiAgICBieXRlYyAzNiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyOAogICAgLy8gc2VsZi5xdW9ydW1fbGFyZ2UgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUVVPUlVNX0xBUkdFKQogICAgYnl0ZWMgMzcgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTMxCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX1NNQUxMCiAgICBieXRlYyAzOCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzMC0xMzIKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzNAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9NRURJVU0KICAgIGJ5dGVjIDM5IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzMtMTM1CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzNwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9MQVJHRQogICAgYnl0ZWMgNDAgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzYtMTM4CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDAKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfT1VUU1RBTkRJTkdfRlVORFMpCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDMKICAgIC8vIHNlbGYuY29tbWl0dGVlX21lbWJlcnMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01FTUJFUlMpCiAgICBieXRlYyA0MSAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2NTZkNjI2NTcyNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTQ0CiAgICAvLyBzZWxmLmNvbW1pdHRlZV92b3RlcyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfVk9URVMpCiAgICBieXRlYyA0MiAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDYKICAgIC8vIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUEVORElOR19QUk9QT1NBTFMpCiAgICBieXRlYyA3IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDgKICAgIC8vIHNlbGYucmVxdWVzdF9pZCA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9SRVFVRVNUX0lEKQogICAgYnl0ZWMgNDMgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNTEKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfQ09NTUlUVEVFX1NJWkUKICAgIGJ5dGVjIDQ0IC8vIDB4NmQ2MTc4NWY2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjczNjk3YTY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTUwLTE1MgogICAgLy8gc2VsZi5tYXhfY29tbWl0dGVlX3NpemUgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX0NPTU1JVFRFRV9TSVpFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAoKbWFpbl9hZnRlcl9pZl9lbHNlQDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogbWFpbl9hZnRlcl9pZl9lbHNlQDQwCiAgICBwdXNoYnl0ZXNzIDB4NGM1YzYxYmEgMHg4NmY3ZTBlNiAweDM5ZTI2ZDhhIDB4OTgzNTJlODYgMHhmYTRlZDZlMiAweGQ2YzljYzFhIDB4NWM0ODQwNTUgMHgzN2Q2YWRmMSAweGQ0MjE2YjZlIDB4YmE4NTIwZjIgMHgxNjc3YjMwZSAweDg0YjdkMjY4IDB4NjUzYTBiZGIgMHg0OTU2YzFhYiAweGEwODJjZWY4IDB4NzY3MjU1NTkgMHg0NTA3NzM5MCAweDNjMzFiYzAyIDB4MGQyYzc4OTEgMHgwZGEyNzg4NSAweDdhNGZlZTQzIDB4NTJkZDEwZDcgMHhkNGQzN2E2NCAweDM0MzQ5ZGNjIDB4MTU4ZjhkZDYgMHhkYjI3YjlhZiAweGY1OTEwNzU2IDB4NjU2MTBhOWYgMHhmZGM2OTVjMiAweGJhOTBhYjU0IDB4YjNiNTg0ODIgMHgwMGIzY2VmNSAweDZmNzUyMDA3IDB4M2E4ZDU2OGYgMHgyNjk4MzIwMCAvLyBtZXRob2QgImNyZWF0ZSgpdm9pZCIsIG1ldGhvZCAicGF1c2VfcmVnaXN0cnkoKXZvaWQiLCBtZXRob2QgInBhdXNlX3Byb3Bvc2Fscygpdm9pZCIsIG1ldGhvZCAicmVzdW1lX3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJyZXN1bWVfcHJvcG9zYWxzKCl2b2lkIiwgbWV0aG9kICJzZXRfeGdvdl9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3BheW9yKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfY291bmNpbChhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF94Z292X3N1YnNjcmliZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfa3ljX3Byb3ZpZGVyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X2NvbW1pdHRlZV9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfZGFlbW9uKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAiY29uZmlnX3hnb3ZfcmVnaXN0cnkoKHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbNF0sdWludDY0WzRdLHVpbnQ2NFszXSx1aW50NjRbM10pKXZvaWQiLCBtZXRob2QgInVwZGF0ZV94Z292X3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJzdWJzY3JpYmVfeGdvdihhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292KGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAicmVxdWVzdF9zdWJzY3JpYmVfeGdvdihhZGRyZXNzLGFkZHJlc3MsdWludDY0LHBheSl2b2lkIiwgbWV0aG9kICJhcHByb3ZlX3N1YnNjcmliZV94Z292KHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZWplY3Rfc3Vic2NyaWJlX3hnb3YodWludDY0KXZvaWQiLCBtZXRob2QgInNldF92b3RpbmdfYWNjb3VudChhZGRyZXNzLGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3Byb3Bvc2VyKHBheSl2b2lkIiwgbWV0aG9kICJzZXRfcHJvcG9zZXJfa3ljKGFkZHJlc3MsYm9vbCx1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVjbGFyZV9jb21taXR0ZWUoYnl0ZVszMl0sdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJvcGVuX3Byb3Bvc2FsKHBheSl1aW50NjQiLCBtZXRob2QgInZvdGVfcHJvcG9zYWwodWludDY0LGFkZHJlc3MsdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJwYXlfZ3JhbnRfcHJvcG9zYWwodWludDY0KXZvaWQiLCBtZXRob2QgImZpbmFsaXplX3Byb3Bvc2FsKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJkcm9wX3Byb3Bvc2FsKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJkZXBvc2l0X2Z1bmRzKHBheSl2b2lkIiwgbWV0aG9kICJ3aXRoZHJhd19mdW5kcyh1aW50NjQpdm9pZCIsIG1ldGhvZCAid2l0aGRyYXdfYmFsYW5jZSgpdm9pZCIsIG1ldGhvZCAiZ2V0X3N0YXRlKCkoYm9vbCxib29sLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0WzNdLHVpbnQ2NFs0XSx1aW50NjRbNF0sdWludDY0WzNdLHVpbnQ2NFszXSx1aW50NjQsdWludDY0LGJ5dGVbMzJdLHVpbnQ2NCx1aW50NjQpIiwgbWV0aG9kICJnZXRfeGdvdl9ib3goYWRkcmVzcykoYWRkcmVzcyx1aW50NjQsdWludDY0LHVpbnQ2NCkiLCBtZXRob2QgImdldF9wcm9wb3Nlcl9ib3goYWRkcmVzcykoYm9vbCxib29sLHVpbnQ2NCkiLCBtZXRob2QgImlzX3Byb3Bvc2FsKHVpbnQ2NCl2b2lkIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggbWFpbl9jcmVhdGVfcm91dGVANSBtYWluX3BhdXNlX3JlZ2lzdHJ5X3JvdXRlQDYgbWFpbl9wYXVzZV9wcm9wb3NhbHNfcm91dGVANyBtYWluX3Jlc3VtZV9yZWdpc3RyeV9yb3V0ZUA4IG1haW5fcmVzdW1lX3Byb3Bvc2Fsc19yb3V0ZUA5IG1haW5fc2V0X3hnb3ZfbWFuYWdlcl9yb3V0ZUAxMCBtYWluX3NldF9wYXlvcl9yb3V0ZUAxMSBtYWluX3NldF94Z292X2NvdW5jaWxfcm91dGVAMTIgbWFpbl9zZXRfeGdvdl9zdWJzY3JpYmVyX3JvdXRlQDEzIG1haW5fc2V0X2t5Y19wcm92aWRlcl9yb3V0ZUAxNCBtYWluX3NldF9jb21taXR0ZWVfbWFuYWdlcl9yb3V0ZUAxNSBtYWluX3NldF94Z292X2RhZW1vbl9yb3V0ZUAxNiBtYWluX2NvbmZpZ194Z292X3JlZ2lzdHJ5X3JvdXRlQDE3IG1haW5fdXBkYXRlX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTggbWFpbl9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxOSBtYWluX3Vuc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjAgbWFpbl9yZXF1ZXN0X3N1YnNjcmliZV94Z292X3JvdXRlQDIxIG1haW5fYXBwcm92ZV9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMiBtYWluX3JlamVjdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMyBtYWluX3NldF92b3RpbmdfYWNjb3VudF9yb3V0ZUAyNCBtYWluX3N1YnNjcmliZV9wcm9wb3Nlcl9yb3V0ZUAyNSBtYWluX3NldF9wcm9wb3Nlcl9reWNfcm91dGVAMjYgbWFpbl9kZWNsYXJlX2NvbW1pdHRlZV9yb3V0ZUAyNyBtYWluX29wZW5fcHJvcG9zYWxfcm91dGVAMjggbWFpbl92b3RlX3Byb3Bvc2FsX3JvdXRlQDI5IG1haW5fcGF5X2dyYW50X3Byb3Bvc2FsX3JvdXRlQDMwIG1haW5fZmluYWxpemVfcHJvcG9zYWxfcm91dGVAMzEgbWFpbl9kcm9wX3Byb3Bvc2FsX3JvdXRlQDMyIG1haW5fZGVwb3NpdF9mdW5kc19yb3V0ZUAzMyBtYWluX3dpdGhkcmF3X2Z1bmRzX3JvdXRlQDM0IG1haW5fd2l0aGRyYXdfYmFsYW5jZV9yb3V0ZUAzNSBtYWluX2dldF9zdGF0ZV9yb3V0ZUAzNiBtYWluX2dldF94Z292X2JveF9yb3V0ZUAzNyBtYWluX2dldF9wcm9wb3Nlcl9ib3hfcm91dGVAMzggbWFpbl9pc19wcm9wb3NhbF9yb3V0ZUAzOQoKbWFpbl9hZnRlcl9pZl9lbHNlQDQwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgaW50Y18wIC8vIDAKICAgIHJldHVybgoKbWFpbl9pc19wcm9wb3NhbF9yb3V0ZUAzOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNzkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNzkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGlzX3Byb3Bvc2FsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2dldF9wcm9wb3Nlcl9ib3hfcm91dGVAMzg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjUxCiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI1MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHJlYWRvbmx5PVRydWUpCiAgICBjYWxsc3ViIGdldF9wcm9wb3Nlcl9ib3gKICAgIGJ5dGVjXzMgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZ2V0X3hnb3ZfYm94X3JvdXRlQDM3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIzOAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHJlYWRvbmx5PVRydWUpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMzgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChyZWFkb25seT1UcnVlKQogICAgY2FsbHN1YiBnZXRfeGdvdl9ib3gKICAgIGJ5dGVjXzMgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZ2V0X3N0YXRlX3JvdXRlQDM2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE4MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHJlYWRvbmx5PVRydWUpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgZ2V0X3N0YXRlCiAgICBieXRlY18zIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3dpdGhkcmF3X2JhbGFuY2Vfcm91dGVAMzU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTUzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHdpdGhkcmF3X2JhbGFuY2UKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fd2l0aGRyYXdfZnVuZHNfcm91dGVAMzQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB3aXRoZHJhd19mdW5kcwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9kZXBvc2l0X2Z1bmRzX3JvdXRlQDMzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTExCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkZXBvc2l0X2Z1bmRzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2Ryb3BfcHJvcG9zYWxfcm91dGVAMzI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDc0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDc0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkcm9wX3Byb3Bvc2FsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2ZpbmFsaXplX3Byb3Bvc2FsX3JvdXRlQDMxOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAzMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAzMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZmluYWxpemVfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcGF5X2dyYW50X3Byb3Bvc2FsX3JvdXRlQDMwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTgwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHBheV9ncmFudF9wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl92b3RlX3Byb3Bvc2FsX3JvdXRlQDI5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTAzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHZvdGVfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fb3Blbl9wcm9wb3NhbF9yb3V0ZUAyODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQ0CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIGNhbGxzdWIgb3Blbl9wcm9wb3NhbAogICAgaXRvYgogICAgYnl0ZWNfMyAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9kZWNsYXJlX2NvbW1pdHRlZV9yb3V0ZUAyNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODE2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkZWNsYXJlX2NvbW1pdHRlZQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfcHJvcG9zZXJfa3ljX3JvdXRlQDI2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9wcm9wb3Nlcl9reWMKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc3Vic2NyaWJlX3Byb3Bvc2VyX3JvdXRlQDI1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzYyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMSAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc2MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc3Vic2NyaWJlX3Byb3Bvc2VyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF92b3RpbmdfYWNjb3VudF9yb3V0ZUAyNDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzMwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfdm90aW5nX2FjY291bnQKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVqZWN0X3N1YnNjcmliZV94Z292X3JvdXRlQDIzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzEzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHJlamVjdF9zdWJzY3JpYmVfeGdvdgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9hcHByb3ZlX3N1YnNjcmliZV94Z292X3JvdXRlQDIyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjkxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGFwcHJvdmVfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVxdWVzdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NTAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHJlcXVlc3Rfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fdW5zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYyMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjIzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB1bnN1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3N1YnNjcmliZV94Z292X3JvdXRlQDE5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMSAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU5NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fdXBkYXRlX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChhbGxvd19hY3Rpb25zPVsiVXBkYXRlQXBwbGljYXRpb24iXSkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgIGludGNfMiAvLyBVcGRhdGVBcHBsaWNhdGlvbgogICAgPT0KICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IFVwZGF0ZUFwcGxpY2F0aW9uCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgdXBkYXRlX3hnb3ZfcmVnaXN0cnkKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fY29uZmlnX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTc6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MDUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgY29uZmlnX3hnb3ZfcmVnaXN0cnkKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3hnb3ZfZGFlbW9uX3JvdXRlQDE2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDkwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X2RhZW1vbgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfY29tbWl0dGVlX21hbmFnZXJfcm91dGVAMTU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X2NvbW1pdHRlZV9tYW5hZ2VyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF9reWNfcHJvdmlkZXJfcm91dGVAMTQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ2MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X2t5Y19wcm92aWRlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfeGdvdl9zdWJzY3JpYmVyX3JvdXRlQDEzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQ1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X3N1YnNjcmliZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3hnb3ZfY291bmNpbF9yb3V0ZUAxMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQzMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDMwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfeGdvdl9jb3VuY2lsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF9wYXlvcl9yb3V0ZUAxMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDE1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfcGF5b3IKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3hnb3ZfbWFuYWdlcl9yb3V0ZUAxMDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDAwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfeGdvdl9tYW5hZ2VyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3Jlc3VtZV9wcm9wb3NhbHNfcm91dGVAOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiByZXN1bWVfcHJvcG9zYWxzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3Jlc3VtZV9yZWdpc3RyeV9yb3V0ZUA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHJlc3VtZV9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9wYXVzZV9wcm9wb3NhbHNfcm91dGVANzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiBwYXVzZV9wcm9wb3NhbHMKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcGF1c2VfcmVnaXN0cnlfcm91dGVANjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiBwYXVzZV9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9jcmVhdGVfcm91dGVANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGNyZWF0ZT0icmVxdWlyZSIpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBjcmVhdGluZwogICAgY2FsbHN1YiBjcmVhdGUKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfeGdvdl9tYW5hZ2VyKCkgLT4gdWludDY0Ogppc194Z292X21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODUKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IHNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZQogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICA9PQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmlzX3hnb3Zfc3Vic2NyaWJlcigpIC0+IHVpbnQ2NDoKaXNfeGdvdl9zdWJzY3JpYmVyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg5CiAgICAvLyByZXR1cm4gVHhuLnNlbmRlciA9PSBzZWxmLnhnb3Zfc3Vic2NyaWJlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3Zfc3Vic2NyaWJlciBleGlzdHMKICAgID09CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX2lzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiB1aW50NjQpIC0+IHVpbnQ2NDoKX2lzX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk5LTIwMAogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiBfaXNfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IFVJbnQ2NCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAxCiAgICAvLyByZXR1cm4gQXBwbGljYXRpb24ocHJvcG9zYWxfaWQpLmNyZWF0b3IgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5nZXRfcHJvcG9zYWxfcHJvcG9zZXIocHJvcG9zYWxfaWQ6IHVpbnQ2NCkgLT4gYnl0ZXM6CmdldF9wcm9wb3NhbF9wcm9wb3NlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIxMS0yMTIKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgZ2V0X3Byb3Bvc2FsX3Byb3Bvc2VyKHNlbGYsIHByb3Bvc2FsX2lkOiBVSW50NjQpIC0+IEFjY291bnQ6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIxMy0yMTUKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgLy8gKQogICAgZnJhbWVfZGlnIC0xCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTQKICAgIC8vIHByb3Bvc2FsX2lkLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgcHVzaGJ5dGVzIDB4NzA3MjZmNzA2ZjczNjU3MgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjEzLTIxNQogICAgLy8gcHJvcG9zZXJfYnl0ZXMsIHByb3Bvc2VyX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfYnl0ZXMoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE2CiAgICAvLyBhc3NlcnQgcHJvcG9zZXJfZXhpc3RzLCBlcnIuTUlTU0lOR19LRVkKICAgIGFzc2VydCAvLyBNaXNzaW5nIGtleSBpbiBzdGF0ZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE3CiAgICAvLyByZXR1cm4gQWNjb3VudChwcm9wb3Nlcl9ieXRlcykKICAgIGR1cAogICAgbGVuCiAgICBwdXNoaW50IDMyIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIEFkZHJlc3MgbGVuZ3RoIGlzIDMyIGJ5dGVzCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQ6IHVpbnQ2NCkgLT4gdWludDY0Ogp2YWxpZF94Z292X3BheW1lbnQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzUtMjM2CiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIHZhbGlkX3hnb3ZfcGF5bWVudChzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjM4CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjM4LTIzOQogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgYnogdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjM5CiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNSAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzgtMjM5CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICBieiB2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzCiAgICBpbnRjXzEgLy8gMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjM3LTI0MAogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICAgICBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgLy8gKQogICAgcmV0c3ViCgp2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIzNy0yNDAKICAgIC8vIHJldHVybiAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyAgICAgYW5kIHBheW1lbnQuYW1vdW50ID09IHNlbGYueGdvdl9mZWUudmFsdWUKICAgIC8vICkKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS52YWxpZF9reWMoYWRkcmVzczogYnl0ZXMpIC0+IHVpbnQ2NDoKdmFsaWRfa3ljOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQyLTI0MwogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiB2YWxpZF9reWMoc2VsZiwgYWRkcmVzczogQWNjb3VudCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ1CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgYnl0ZWNfMSAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgZ2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ1LTI0NgogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGJ6IHZhbGlkX2t5Y19ib29sX2ZhbHNlQDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI0NgogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICBleHRyYWN0X3VpbnQ2NAogICAgZ2xvYmFsIExhdGVzdFRpbWVzdGFtcAogICAgPgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ1LTI0NgogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGJ6IHZhbGlkX2t5Y19ib29sX2ZhbHNlQDMKICAgIGludGNfMSAvLyAxCgp2YWxpZF9reWNfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ0LTI0NwogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gICAgIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIC8vICkKICAgIHN3YXAKICAgIHJldHN1YgoKdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIHZhbGlkX2t5Y19ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVjcmVtZW50X3BlbmRpbmdfcHJvcG9zYWxzKHByb3Bvc2FsX2lkOiB1aW50NjQpIC0+IHZvaWQ6CmRlY3JlbWVudF9wZW5kaW5nX3Byb3Bvc2FsczoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwNC0zMDUKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgZGVjcmVtZW50X3BlbmRpbmdfcHJvcG9zYWxzKHNlbGYsIHByb3Bvc2FsX2lkOiBVSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwNi0zMDcKICAgIC8vICMgRGVjcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzIGNvdW50CiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlIC09IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA3IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGJ5dGVjIDcgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzA5LTMxMAogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBwcm9wb3NlciA9IHNlbGYuZ2V0X3Byb3Bvc2FsX3Byb3Bvc2VyKHByb3Bvc2FsX2lkKQogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIGdldF9wcm9wb3NhbF9wcm9wb3NlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzExCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlcl0uYWN0aXZlX3Byb3Bvc2FsID0gYXJjNC5Cb29sKEZhbHNlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzEgLy8gMHg3MAogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBkdXAKICAgIHNldGJpdAogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5Lm1ha2VfeGdvdl9ib3godm90aW5nX2FkZHJlc3M6IGJ5dGVzKSAtPiBieXRlczoKbWFrZV94Z292X2JveDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxMy0zMTQKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgbWFrZV94Z292X2JveChzZWxmLCB2b3RpbmdfYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiB0eXAuWEdvdkJveFZhbHVlOgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjgKICAgIC8vIHN1YnNjcmlwdGlvbl9yb3VuZD1hcmM0LlVJbnQ2NChHbG9iYWwucm91bmQpLAogICAgZ2xvYmFsIFJvdW5kCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjQtMzI5CiAgICAvLyByZXR1cm4gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBzdWJzY3JpcHRpb25fcm91bmQ9YXJjNC5VSW50NjQoR2xvYmFsLnJvdW5kKSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzI2CiAgICAvLyB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA0NiAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMyNC0zMjkKICAgIC8vIHJldHVybiB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIHN1YnNjcmlwdGlvbl9yb3VuZD1hcmM0LlVJbnQ2NChHbG9iYWwucm91bmQpLAogICAgLy8gKQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjcKICAgIC8vIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA0NiAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMyNC0zMjkKICAgIC8vIHJldHVybiB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIHN1YnNjcmlwdGlvbl9yb3VuZD1hcmM0LlVJbnQ2NChHbG9iYWwucm91bmQpLAogICAgLy8gKQogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5jcmVhdGUoKSAtPiB2b2lkOgpjcmVhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjEKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlID0gYXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICB0eG4gU2VuZGVyCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTgxCiAgICAvLyByZXR1cm4gVGVtcGxhdGVWYXJbQnl0ZXNdKCJlbnRyb3B5IikgICMgdHJpY2sgdG8gYWxsb3cgZnJlc2ggZGVwbG95bWVudAogICAgYnl0ZWMgNDkgLy8gVE1QTF9lbnRyb3B5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjIKICAgIC8vIGFzc2VydCBzZWxmLmVudHJvcHkoKSA9PSBUZW1wbGF0ZVZhcltCeXRlc10oImVudHJvcHkiKQogICAgZHVwCiAgICA9PQogICAgYXNzZXJ0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucGF1c2VfcmVnaXN0cnkoKSAtPiB2b2lkOgpwYXVzZV9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3MAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzEKICAgIC8vIHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlID0gVUludDY0KDEpCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBpbnRjXzEgLy8gMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5wYXVzZV9wcm9wb3NhbHMoKSAtPiB2b2lkOgpwYXVzZV9wcm9wb3NhbHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzkKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgwCiAgICAvLyBzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUgPSBVSW50NjQoMSkKICAgIGJ5dGVjIDkgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgaW50Y18xIC8vIDEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVzdW1lX3JlZ2lzdHJ5KCkgLT4gdm9pZDoKcmVzdW1lX3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzg4CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM4OQogICAgLy8gc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUgPSBVSW50NjQoMCkKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnJlc3VtZV9wcm9wb3NhbHMoKSAtPiB2b2lkOgpyZXN1bWVfcHJvcG9zYWxzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk3CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5OAogICAgLy8gc2VsZi5wYXVzZWRfcHJvcG9zYWxzLnZhbHVlID0gVUludDY0KDApCiAgICBieXRlYyA5IC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X21hbmFnZXIobWFuYWdlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MDAtNDAxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MTIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDEzCiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IG1hbmFnZXIKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfcGF5b3IocGF5b3I6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfcGF5b3I6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MTUtNDE2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9wYXlvcihzZWxmLCBwYXlvcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDI4CiAgICAvLyBzZWxmLnhnb3ZfcGF5b3IudmFsdWUgPSBwYXlvcgogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X2NvdW5jaWwoY291bmNpbDogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X2NvdW5jaWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzAtNDMxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X2NvdW5jaWwoc2VsZiwgY291bmNpbDogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQzCiAgICAvLyBzZWxmLnhnb3ZfY291bmNpbC52YWx1ZSA9IGNvdW5jaWwKICAgIGJ5dGVjIDIwIC8vIDB4Nzg2NzZmNzY1ZjYzNmY3NTZlNjM2OTZjCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3Zfc3Vic2NyaWJlcihzdWJzY3JpYmVyOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3Zfc3Vic2NyaWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0NS00NDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3hnb3Zfc3Vic2NyaWJlcihzZWxmLCBzdWJzY3JpYmVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ1NwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTgKICAgIC8vIHNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlID0gc3Vic2NyaWJlcgogICAgYnl0ZWMgMTAgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfa3ljX3Byb3ZpZGVyKHByb3ZpZGVyOiBieXRlcykgLT4gdm9pZDoKc2V0X2t5Y19wcm92aWRlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ2MC00NjEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2t5Y19wcm92aWRlcihzZWxmLCBwcm92aWRlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDczCiAgICAvLyBzZWxmLmt5Y19wcm92aWRlci52YWx1ZSA9IHByb3ZpZGVyCiAgICBieXRlYyAxMiAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9jb21taXR0ZWVfbWFuYWdlcihtYW5hZ2VyOiBieXRlcykgLT4gdm9pZDoKc2V0X2NvbW1pdHRlZV9tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDc1LTQ3NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfY29tbWl0dGVlX21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0ODcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDg4CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlID0gbWFuYWdlcgogICAgYnl0ZWMgMTMgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3ZfZGFlbW9uKHhnb3ZfZGFlbW9uOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3ZfZGFlbW9uOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDkwLTQ5MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfeGdvdl9kYWVtb24oc2VsZiwgeGdvdl9kYWVtb246IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTAyCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwMwogICAgLy8gc2VsZi54Z292X2RhZW1vbi52YWx1ZSA9IHhnb3ZfZGFlbW9uCiAgICBieXRlYyAxNCAvLyAweDc4Njc2Zjc2NWY2NDYxNjU2ZDZmNmUKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5jb25maWdfeGdvdl9yZWdpc3RyeShjb25maWc6IGJ5dGVzKSAtPiB2b2lkOgpjb25maWdfeGdvdl9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwNS01MDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgY29uZmlnX3hnb3ZfcmVnaXN0cnkoc2VsZiwgY29uZmlnOiB0eXAuWEdvdlJlZ2lzdHJ5Q29uZmlnKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICBpbnRjXzAgLy8gMAogICAgcHVzaGJ5dGVzICIiCiAgICBkdXBuIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxOAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTcKICAgIC8vIHJldHVybiBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlID09IDAKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA3IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgIQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE5CiAgICAvLyBhc3NlcnQgc2VsZi5ub19wZW5kaW5nX3Byb3Bvc2FscygpLCBlcnIuTk9fUEVORElOR19QUk9QT1NBTFMKICAgIGFzc2VydCAvLyBDYW5ub3QgcGVyZm9ybSBvcGVyYXRpb24gd2l0aCBwZW5kaW5nIHByb3Bvc2FscwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQwCiAgICAvLyBjb25maWcueGdvdl9mZWUubmF0aXZlID49IHhnb3ZfYm94X21icgogICAgZnJhbWVfZGlnIC0xCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjcwLTI3MgogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBrZXlfcHJlZml4X2xlbmd0aCArIGtleV90eXBlX3NpemUgKyB2YWx1ZV90eXBlX3NpemUKICAgIC8vICkgKiBQRVJfQllURV9JTl9CT1hfTUJSICsgUEVSX0JPWF9NQlIKICAgIHB1c2hpbnQgMzgxMDAgLy8gMzgxMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0MAogICAgLy8gY29uZmlnLnhnb3ZfZmVlLm5hdGl2ZSA+PSB4Z292X2JveF9tYnIKICAgID49CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDAtNTQxCiAgICAvLyBjb25maWcueGdvdl9mZWUubmF0aXZlID49IHhnb3ZfYm94X21icgogICAgLy8gYW5kIGNvbmZpZy54Z292X2ZlZS5uYXRpdmUgPj0geGdvdl9yZXF1ZXN0X2JveF9tYnIKICAgIGJ6IGNvbmZpZ194Z292X3JlZ2lzdHJ5X2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQxCiAgICAvLyBhbmQgY29uZmlnLnhnb3ZfZmVlLm5hdGl2ZSA+PSB4Z292X3JlcXVlc3RfYm94X21icgogICAgZnJhbWVfZGlnIDUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3MC0yNzIKICAgIC8vIHJldHVybiAoCiAgICAvLyAgICAga2V5X3ByZWZpeF9sZW5ndGggKyBrZXlfdHlwZV9zaXplICsgdmFsdWVfdHlwZV9zaXplCiAgICAvLyApICogUEVSX0JZVEVfSU5fQk9YX01CUiArIFBFUl9CT1hfTUJSCiAgICBwdXNoaW50IDM0OTAwIC8vIDM0OTAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDEKICAgIC8vIGFuZCBjb25maWcueGdvdl9mZWUubmF0aXZlID49IHhnb3ZfcmVxdWVzdF9ib3hfbWJyCiAgICA+PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQwLTU0MQogICAgLy8gY29uZmlnLnhnb3ZfZmVlLm5hdGl2ZSA+PSB4Z292X2JveF9tYnIKICAgIC8vIGFuZCBjb25maWcueGdvdl9mZWUubmF0aXZlID49IHhnb3ZfcmVxdWVzdF9ib3hfbWJyCiAgICBieiBjb25maWdfeGdvdl9yZWdpc3RyeV9ib29sX2ZhbHNlQDMKICAgIGludGNfMSAvLyAxCgpjb25maWdfeGdvdl9yZWdpc3RyeV9ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MzktNTQyCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIGNvbmZpZy54Z292X2ZlZS5uYXRpdmUgPj0geGdvdl9ib3hfbWJyCiAgICAvLyAgICAgYW5kIGNvbmZpZy54Z292X2ZlZS5uYXRpdmUgPj0geGdvdl9yZXF1ZXN0X2JveF9tYnIKICAgIC8vICksIGVyci5JTlZBTElEX1hHT1ZfRkVFCiAgICBhc3NlcnQgLy8gSW52YWxpZCB4R292IGZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ0CiAgICAvLyBhc3NlcnQgY29uZmlnLnByb3Bvc2VyX2ZlZS5uYXRpdmUgPj0gcHJvcG9zZXJfYm94X21iciwgZXJyLklOVkFMSURfUFJPUE9TRVJfRkVFCiAgICBmcmFtZV9kaWcgLTEKICAgIGludGNfMyAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgZHVwCiAgICBmcmFtZV9idXJ5IDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3MC0yNzIKICAgIC8vIHJldHVybiAoCiAgICAvLyAgICAga2V5X3ByZWZpeF9sZW5ndGggKyBrZXlfdHlwZV9zaXplICsgdmFsdWVfdHlwZV9zaXplCiAgICAvLyApICogUEVSX0JZVEVfSU5fQk9YX01CUiArIFBFUl9CT1hfTUJSCiAgICBpbnRjIDQgLy8gMTkzMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0NAogICAgLy8gYXNzZXJ0IGNvbmZpZy5wcm9wb3Nlcl9mZWUubmF0aXZlID49IHByb3Bvc2VyX2JveF9tYnIsIGVyci5JTlZBTElEX1BST1BPU0VSX0ZFRQogICAgPj0KICAgIGFzc2VydCAvLyBJbnZhbGlkIHByb3Bvc2VyIGZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ3CiAgICAvLyBjb25maWcubWluX3JlcXVlc3RlZF9hbW91bnQubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIHB1c2hpbnQgNDAgLy8gNDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBkdXAKICAgIGZyYW1lX2J1cnkgNAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ4CiAgICAvLyA8IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCA0OCAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZnJhbWVfYnVyeSAwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGR1cAogICAgZnJhbWVfYnVyeSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDctNTQ4CiAgICAvLyBjb25maWcubWluX3JlcXVlc3RlZF9hbW91bnQubmF0aXZlCiAgICAvLyA8IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFswXS5uYXRpdmUKICAgIDwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0Ny01NDkKICAgIC8vIGNvbmZpZy5taW5fcmVxdWVzdGVkX2Ftb3VudC5uYXRpdmUKICAgIC8vIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzBdLm5hdGl2ZQogICAgLy8gPCBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMV0ubmF0aXZlCiAgICBieiBjb25maWdfeGdvdl9yZWdpc3RyeV9ib29sX2ZhbHNlQDgKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0OQogICAgLy8gPCBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMV0ubmF0aXZlCiAgICBmcmFtZV9kaWcgMAogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBkdXAKICAgIGZyYW1lX2J1cnkgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ4LTU0OQogICAgLy8gPCBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMF0ubmF0aXZlCiAgICAvLyA8IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsxXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAxCiAgICA+CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDctNTQ5CiAgICAvLyBjb25maWcubWluX3JlcXVlc3RlZF9hbW91bnQubmF0aXZlCiAgICAvLyA8IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFswXS5uYXRpdmUKICAgIC8vIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzFdLm5hdGl2ZQogICAgYnogY29uZmlnX3hnb3ZfcmVnaXN0cnlfYm9vbF9mYWxzZUA4CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NTAKICAgIC8vIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzJdLm5hdGl2ZQogICAgZnJhbWVfZGlnIDAKICAgIHB1c2hpbnQgMTYgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDktNTUwCiAgICAvLyA8IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsxXS5uYXRpdmUKICAgIC8vIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzJdLm5hdGl2ZQogICAgZnJhbWVfZGlnIDIKICAgID4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0OC01NTAKICAgIC8vIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzBdLm5hdGl2ZQogICAgLy8gPCBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMV0ubmF0aXZlCiAgICAvLyA8IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsyXS5uYXRpdmUKICAgIGJ6IGNvbmZpZ194Z292X3JlZ2lzdHJ5X2Jvb2xfZmFsc2VAOAogICAgaW50Y18xIC8vIDEKCmNvbmZpZ194Z292X3JlZ2lzdHJ5X2Jvb2xfbWVyZ2VAOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0Ni01NTEKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgY29uZmlnLm1pbl9yZXF1ZXN0ZWRfYW1vdW50Lm5hdGl2ZQogICAgLy8gICAgIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzBdLm5hdGl2ZQogICAgLy8gICAgIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzFdLm5hdGl2ZQogICAgLy8gICAgIDwgY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzJdLm5hdGl2ZQogICAgLy8gKSwgZXJyLklOQ09TSVNURU5UX1JFUVVFU1RFRF9BTU9VTlRfQ09ORklHCiAgICBhc3NlcnQgLy8gSW5jb25zaXN0ZW50IHJlcXVlc3RlZCBhbW91bnQgY29uZmlnCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NTQKICAgIC8vIGNvbmZpZy5vcGVuX3Byb3Bvc2FsX2ZlZS5uYXRpdmUsIGNvbmZpZy5kYWVtb25fb3BzX2Z1bmRpbmdfYnBzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgZnJhbWVfZGlnIC0xCiAgICBwdXNoaW50IDI0IC8vIDI0CiAgICBleHRyYWN0X3VpbnQ2NAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjUzCiAgICAvLyByZXR1cm4gYW1vdW50ICogZnJhY3Rpb25faW5fYnBzIC8vIEJQUwogICAgZHVwMgogICAgKgogICAgcHVzaGludCAxMDAwMCAvLyAxMDAwMAogICAgLwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjkxCiAgICAvLyBVSW50NjQoTUFYX01CUl9QRVJfQVBQICsgTUFYX01CUl9QRVJfQk9YICsgQUNDT1VOVF9NQlIpICsgZGFlbW9uX29wc19mdW5kaW5nCiAgICBwdXNoaW50IDE2ODM1MzAwIC8vIDE2ODM1MzAwCiAgICArCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyOTQKICAgIC8vIGFzc2VydCBvcGVuX3Byb3Bvc2FsX2ZlZSA+IHRvX3N1YnN0cmFjdCwgZXJyLklOVkFMSURfT1BFTl9QUk9QT1NBTF9GRUUKICAgIGRpZyAyCiAgICBkaWcgMQogICAgPgogICAgYXNzZXJ0IC8vIEludmFsaWQgb3BlbiBwcm9wb3NhbCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI5NgogICAgLy8gbWJyX2F2YWlsYWJsZV9mb3JfY29tbWl0dGVlID0gb3Blbl9wcm9wb3NhbF9mZWUgLSB0b19zdWJzdHJhY3QKICAgIGRpZyAyCiAgICBzd2FwCiAgICAtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzAtMjcyCiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIGtleV9wcmVmaXhfbGVuZ3RoICsga2V5X3R5cGVfc2l6ZSArIHZhbHVlX3R5cGVfc2l6ZQogICAgLy8gKSAqIFBFUl9CWVRFX0lOX0JPWF9NQlIgKyBQRVJfQk9YX01CUgogICAgaW50YyA0IC8vIDE5MzAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDIKICAgIC8vIHNlbGYubWF4X2NvbW1pdHRlZV9zaXplLnZhbHVlID0gbWJyX2F2YWlsYWJsZV9mb3JfY29tbWl0dGVlIC8vIHBlcl92b3Rlcl9tYnIKICAgIC8KICAgIGJ5dGVjIDQ0IC8vIDB4NmQ2MTc4NWY2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjczNjk3YTY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTU3CiAgICAvLyBzZWxmLnhnb3ZfZmVlLnZhbHVlID0gY29uZmlnLnhnb3ZfZmVlLm5hdGl2ZQogICAgYnl0ZWMgMTUgLy8gMHg3ODY3NmY3NjVmNjY2NTY1CiAgICBmcmFtZV9kaWcgNQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1OAogICAgLy8gc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUgPSBjb25maWcucHJvcG9zZXJfZmVlLm5hdGl2ZQogICAgYnl0ZWMgMTYgLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIGZyYW1lX2RpZyAzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTU5CiAgICAvLyBzZWxmLm9wZW5fcHJvcG9zYWxfZmVlLnZhbHVlID0gY29uZmlnLm9wZW5fcHJvcG9zYWxfZmVlLm5hdGl2ZQogICAgYnl0ZWMgMTcgLy8gMHg2ZjcwNjU2ZTVmNzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICB1bmNvdmVyIDIKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjAKICAgIC8vIHNlbGYuZGFlbW9uX29wc19mdW5kaW5nX2Jwcy52YWx1ZSA9IGNvbmZpZy5kYWVtb25fb3BzX2Z1bmRpbmdfYnBzLm5hdGl2ZQogICAgYnl0ZWMgMjEgLy8gMHg2NDYxNjU2ZDZmNmU1ZjZmNzA2NTcyNjE3NDY5NmY2ZTVmNjY3NTZlNjQ2OTZlNjc1ZjYyNzA3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2MQogICAgLy8gc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSA9IGNvbmZpZy5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgcHVzaGludCAzMiAvLyAzMgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDIyIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2MwogICAgLy8gc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudC52YWx1ZSA9IGNvbmZpZy5taW5fcmVxdWVzdGVkX2Ftb3VudC5uYXRpdmUKICAgIGJ5dGVjIDIzIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgZnJhbWVfZGlnIDQKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjQKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMF0ubmF0aXZlCiAgICBieXRlYyAyNCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMKICAgIGZyYW1lX2RpZyAxCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTY1CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsxXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAwCiAgICBkdXAKICAgIGludGNfMyAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjUgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjYKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMl0ubmF0aXZlCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjYgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTY4CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCA3MiAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNyAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTY5CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bMV0ubmF0aXZlCiAgICBkdXAKICAgIGludGNfMyAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjggLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTcwCiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblsyXS5uYXRpdmUKICAgIGR1cAogICAgcHVzaGludCAxNiAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDI5IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzEKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblszXS5uYXRpdmUKICAgIHB1c2hpbnQgMjQgLy8gMjQKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzMCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzMKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAxMDQgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGludGNfMCAvLyAwCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzEgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzQKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bMV0ubmF0aXZlCiAgICBkdXAKICAgIGludGNfMyAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzIgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3NQogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UudmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzJdLm5hdGl2ZQogICAgZHVwCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzMgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzYKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bM10ubmF0aXZlCiAgICBwdXNoaW50IDI0IC8vIDI0CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzQgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3OAogICAgLy8gc2VsZi5xdW9ydW1fc21hbGwudmFsdWUgPSBjb25maWcucXVvcnVtWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDEzNiAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNSAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3OQogICAgLy8gc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlID0gY29uZmlnLnF1b3J1bVsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTgwCiAgICAvLyBzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSA9IGNvbmZpZy5xdW9ydW1bMl0ubmF0aXZlCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzcgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODIKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlID0gY29uZmlnLndlaWdodGVkX3F1b3J1bVswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAxNjAgMjQgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGludGNfMCAvLyAwCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzggLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODMKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSA9IGNvbmZpZy53ZWlnaHRlZF9xdW9ydW1bMV0ubmF0aXZlCiAgICBkdXAKICAgIGludGNfMyAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzkgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4NAogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUgPSBjb25maWcud2VpZ2h0ZWRfcXVvcnVtWzJdLm5hdGl2ZQogICAgcHVzaGludCAxNiAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDQwIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgpjb25maWdfeGdvdl9yZWdpc3RyeV9ib29sX2ZhbHNlQDg6CiAgICBpbnRjXzAgLy8gMAogICAgYiBjb25maWdfeGdvdl9yZWdpc3RyeV9ib29sX21lcmdlQDkKCmNvbmZpZ194Z292X3JlZ2lzdHJ5X2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIGNvbmZpZ194Z292X3JlZ2lzdHJ5X2Jvb2xfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS51cGRhdGVfeGdvdl9yZWdpc3RyeSgpIC0+IHZvaWQ6CnVwZGF0ZV94Z292X3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk1CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfeGdvdih2b3RpbmdfYWRkcmVzczogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OTctNjAwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV94Z292KAogICAgLy8gICAgIHNlbGYsIHZvdGluZ19hZGRyZXNzOiBhcmM0LkFkZHJlc3MsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAyIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxMwogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTUKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyIG5vdCBpbiBzZWxmLnhnb3ZfYm94LCBlcnIuQUxSRUFEWV9YR09WCiAgICBieXRlYyA0IC8vIDB4NzgKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhbiB4R292CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTYtNjE3CiAgICAvLyAjIGNoZWNrIHBheW1lbnQKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX3hnb3ZfcGF5bWVudChwYXltZW50KSwgZXJyLklOVkFMSURfUEFZTUVOVAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIHZhbGlkX3hnb3ZfcGF5bWVudAogICAgYXNzZXJ0IC8vIEludmFsaWQgcGF5bWVudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjE5LTYyMAogICAgLy8gIyBjcmVhdGUgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W1R4bi5zZW5kZXJdID0gc2VsZi5tYWtlX3hnb3ZfYm94KHZvdGluZ19hZGRyZXNzKQogICAgZnJhbWVfZGlnIC0yCiAgICBjYWxsc3ViIG1ha2VfeGdvdl9ib3gKICAgIGJ5dGVjIDQgLy8gMHg3OAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MjEKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudW5zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzKSAtPiB2b2lkOgp1bnN1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjIzLTYyNAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB1bnN1YnNjcmliZV94Z292KHNlbGYsIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MzUKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjM3LTYzOAogICAgLy8gIyBlbnN1cmUgdGhlIHByb3ZpZGVkIGFkZHJlc3MgaXMgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWMgNCAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwbiAyCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzOS02NDAKICAgIC8vICMgZ2V0IHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gdm90aW5nX2FkZHJlc3MgPSBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLnZvdGluZ19hZGRyZXNzLm5hdGl2ZQogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDMKICAgIC8vIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICBmcmFtZV9kaWcgLTEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMgogICAgZnJhbWVfZGlnIDEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiB1bnN1YnNjcmliZV94Z292X2Jvb2xfZmFsc2VAMwoKdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCgp1bnN1YnNjcmliZV94Z292X2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY0MS02NDQKICAgIC8vICMgZW5zdXJlIHRoZSBzZW5kZXIgaXMgdGhlIHhHb3Ygb3IgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDYtNjQ3CiAgICAvLyAjIGRlbGV0ZSBib3gKICAgIC8vIGRlbCBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2RlbAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDgKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCnVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIGIgdW5zdWJzY3JpYmVfeGdvdl9ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVxdWVzdF9zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzLCBvd25lcl9hZGRyZXNzOiBieXRlcywgcmVsYXRpb25fdHlwZTogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKcmVxdWVzdF9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1MC02NTcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcmVxdWVzdF9zdWJzY3JpYmVfeGdvdigKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbiwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjcyCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3NC02NzUKICAgIC8vICMgZW5zdXJlIHRoZSB4Z292X2FkZHJlc3MgaXMgbm90IGFscmVhZHkgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjIDQgLy8gMHg3OAogICAgZnJhbWVfZGlnIC00CiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njc3LTY3OAogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4MC02ODEKICAgIC8vICMgY3JlYXRlIHJlcXVlc3QgYm94CiAgICAvLyByaWQgPSBzZWxmLnJlcXVlc3RfaWQudmFsdWUKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MyAvLyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucmVxdWVzdF9pZCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4Mi02ODYKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgLy8gICAgIHhnb3ZfYWRkcj14Z292X2FkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcj1vd25lcl9hZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU9cmVsYXRpb25fdHlwZSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtNAogICAgZnJhbWVfZGlnIC0zCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2ODIKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgZGlnIDEKICAgIGl0b2IKICAgIGJ5dGVjIDQ1IC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjgyLTY4NgogICAgLy8gc2VsZi5yZXF1ZXN0X2JveFtyaWRdID0gdHlwLlhHb3ZTdWJzY3JpYmVSZXF1ZXN0Qm94VmFsdWUoCiAgICAvLyAgICAgeGdvdl9hZGRyPXhnb3ZfYWRkcmVzcywKICAgIC8vICAgICBvd25lcl9hZGRyPW93bmVyX2FkZHJlc3MsCiAgICAvLyAgICAgcmVsYXRpb25fdHlwZT1yZWxhdGlvbl90eXBlLAogICAgLy8gKQogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njg4LTY4OQogICAgLy8gIyBpbmNyZW1lbnQgcmVxdWVzdCBpZAogICAgLy8gc2VsZi5yZXF1ZXN0X2lkLnZhbHVlICs9IDEKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlYyA0MyAvLyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmFwcHJvdmVfc3Vic2NyaWJlX3hnb3YocmVxdWVzdF9pZDogYnl0ZXMpIC0+IHZvaWQ6CmFwcHJvdmVfc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OTEtNjkyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGFwcHJvdmVfc3Vic2NyaWJlX3hnb3Yoc2VsZiwgcmVxdWVzdF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcwMwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9zdWJzY3JpYmVyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9zdWJzY3JpYmVyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDUtNzA2CiAgICAvLyAjIGdldCB0aGUgcmVxdWVzdAogICAgLy8gcmVxdWVzdCA9IHNlbGYucmVxdWVzdF9ib3hbcmVxdWVzdF9pZC5uYXRpdmVdLmNvcHkoKQogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBpdG9iCiAgICBieXRlYyA0NSAvLyAweDcyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucmVxdWVzdF9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDctNzA4CiAgICAvLyAjIGNyZWF0ZSB0aGUgeEdvdgogICAgLy8gc2VsZi54Z292X2JveFtyZXF1ZXN0Lnhnb3ZfYWRkci5uYXRpdmVdID0gc2VsZi5tYWtlX3hnb3ZfYm94KHJlcXVlc3Qub3duZXJfYWRkcikKICAgIGR1cAogICAgZXh0cmFjdCAzMiAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGNhbGxzdWIgbWFrZV94Z292X2JveAogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnl0ZWMgNCAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcwOQogICAgLy8gc2VsZi54Z292cy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlYyA2IC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcxMC03MTEKICAgIC8vICMgZGVsZXRlIHRoZSByZXF1ZXN0CiAgICAvLyBkZWwgc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0KICAgIGJveF9kZWwKICAgIHBvcAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnJlamVjdF9zdWJzY3JpYmVfeGdvdihyZXF1ZXN0X2lkOiBieXRlcykgLT4gdm9pZDoKcmVqZWN0X3N1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzEzLTcxNAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiByZWplY3Rfc3Vic2NyaWJlX3hnb3Yoc2VsZiwgcmVxdWVzdF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyNQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9zdWJzY3JpYmVyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9zdWJzY3JpYmVyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjctNzI4CiAgICAvLyAjIGRlbGV0ZSB0aGUgcmVxdWVzdAogICAgLy8gZGVsIHNlbGYucmVxdWVzdF9ib3hbcmVxdWVzdF9pZC5uYXRpdmVdCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGl0b2IKICAgIGJ5dGVjIDQ1IC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgYm94X2RlbAogICAgcG9wCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3ZvdGluZ19hY2NvdW50KHhnb3ZfYWRkcmVzczogYnl0ZXMsIHZvdGluZ19hZGRyZXNzOiBieXRlcykgLT4gdm9pZDoKc2V0X3ZvdGluZ19hY2NvdW50OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzMwLTczMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfdm90aW5nX2FjY291bnQoCiAgICAvLyAgICAgc2VsZiwgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsIHZvdGluZ19hZGRyZXNzOiBhcmM0LkFkZHJlc3MKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzQ2CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0OC03NDkKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHNlbmRlciBpcyBhbiB4R292IG1lbWJlcgogICAgLy8gZXhpc3RzID0geGdvdl9hZGRyZXNzLm5hdGl2ZSBpbiBzZWxmLnhnb3ZfYm94CiAgICBieXRlYyA0IC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBkdXBuIDIKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzUwCiAgICAvLyBhc3NlcnQgZXhpc3RzLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTEKICAgIC8vIHhnb3ZfYm94ID0gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5jb3B5KCkKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzU1CiAgICAvLyBUeG4uc2VuZGVyID09IHhnb3ZfYm94LnZvdGluZ19hZGRyZXNzLm5hdGl2ZQogICAgdHhuIFNlbmRlcgogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1NS03NTYKICAgIC8vIFR4bi5zZW5kZXIgPT0geGdvdl9ib3gudm90aW5nX2FkZHJlc3MubmF0aXZlCiAgICAvLyBvciBUeG4uc2VuZGVyID09IHhnb3ZfYWRkcmVzcy5uYXRpdmUKICAgIGJueiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1NgogICAgLy8gb3IgVHhuLnNlbmRlciA9PSB4Z292X2FkZHJlc3MubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBmcmFtZV9kaWcgLTIKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTUtNzU2CiAgICAvLyBUeG4uc2VuZGVyID09IHhnb3ZfYm94LnZvdGluZ19hZGRyZXNzLm5hdGl2ZQogICAgLy8gb3IgVHhuLnNlbmRlciA9PSB4Z292X2FkZHJlc3MubmF0aXZlCiAgICBieiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDI6CiAgICBpbnRjXzEgLy8gMQoKc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1My03NTcKICAgIC8vICMgQ2hlY2sgdGhhdCB0aGUgc2VuZGVyIGlzIGVpdGhlciB0aGUgeEdvdiBvciB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgVHhuLnNlbmRlciA9PSB4Z292X2JveC52b3RpbmdfYWRkcmVzcy5uYXRpdmUKICAgIC8vICAgICBvciBUeG4uc2VuZGVyID09IHhnb3ZfYWRkcmVzcy5uYXRpdmUKICAgIC8vICksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1OS03NjAKICAgIC8vICMgVXBkYXRlIHRoZSB2b3RpbmcgYWNjb3VudCBpbiB0aGUgeEdvdiBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0udm90aW5nX2FkZHJlc3MgPSB2b3RpbmdfYWRkcmVzcwogICAgZnJhbWVfZGlnIDAKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIHJlcGxhY2UyIDAKICAgIGJveF9wdXQKICAgIHJldHN1YgoKc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIHNldF92b3RpbmdfYWNjb3VudF9ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc3Vic2NyaWJlX3Byb3Bvc2VyKHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKc3Vic2NyaWJlX3Byb3Bvc2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzYyLTc2MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzdWJzY3JpYmVfcHJvcG9zZXIoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3NgogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzgKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyIG5vdCBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLkFMUkVBRFlfUFJPUE9TRVIKICAgIGJ5dGVjXzEgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBBbHJlYWR5IGEgcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4MQogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3OS03ODIKICAgIC8vICMgY2hlY2sgZmVlCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gKSwgZXJyLldST05HX1JFQ0VJVkVSCiAgICBhc3NlcnQgLy8gV3JvbmcgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4MwogICAgLy8gYXNzZXJ0IHBheW1lbnQuYW1vdW50ID09IHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlLCBlcnIuV1JPTkdfUEFZTUVOVF9BTU9VTlQKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTYgLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9mZWUgZXhpc3RzCiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIHBheW1lbnQgYW1vdW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODUKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdID0gc2VsZi5tYWtlX3Byb3Bvc2VyX2JveCgKICAgIGJ5dGVjXzEgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDktMzUzCiAgICAvLyByZXR1cm4gdHlwLlByb3Bvc2VyQm94VmFsdWUoCiAgICAvLyAgICAgYWN0aXZlX3Byb3Bvc2FsPWFjdGl2ZV9wcm9wb3NhbCwKICAgIC8vICAgICBreWNfc3RhdHVzPWt5Y19zdGF0dXMsCiAgICAvLyAgICAga3ljX2V4cGlyaW5nPWt5Y19leHBpcmluZywKICAgIC8vICkKICAgIHB1c2hieXRlcyAweDAwMDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg1LTc4NwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbVHhuLnNlbmRlcl0gPSBzZWxmLm1ha2VfcHJvcG9zZXJfYm94KAogICAgLy8gICAgIGFyYzQuQm9vbChGYWxzZSksIGFyYzQuQm9vbChGYWxzZSksIGFyYzQuVUludDY0KDApICAjIG5vcWE6IEZCVDAwMwogICAgLy8gKQogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9wcm9wb3Nlcl9reWMocHJvcG9zZXI6IGJ5dGVzLCBreWNfc3RhdHVzOiBieXRlcywga3ljX2V4cGlyaW5nOiBieXRlcykgLT4gdm9pZDoKc2V0X3Byb3Bvc2VyX2t5YzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4OS03OTIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3Byb3Bvc2VyX2t5YygKICAgIC8vICAgICBzZWxmLCBwcm9wb3NlcjogYXJjNC5BZGRyZXNzLCBreWNfc3RhdHVzOiBhcmM0LkJvb2wsIGt5Y19leHBpcmluZzogYXJjNC5VSW50NjQKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDMgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODA2LTgwNwogICAgLy8gIyBjaGVjayBpZiBreWMgcHJvdmlkZXIKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLm5hdGl2ZSwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEyIC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYua3ljX3Byb3ZpZGVyIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgwOAogICAgLy8gYXNzZXJ0IHByb3Bvc2VyLm5hdGl2ZSBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlBST1BPU0VSX0RPRVNfTk9UX0VYSVNUCiAgICBieXRlY18xIC8vIDB4NzAKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFByb3Bvc2VyIGRvZXMgbm90IGV4aXN0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTAKICAgIC8vIGFjdGl2ZV9wcm9wb3NhbCA9IHNlbGYucHJvcG9zZXJfYm94W3Byb3Bvc2VyLm5hdGl2ZV0uY29weSgpLmFjdGl2ZV9wcm9wb3NhbAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ5LTM1MwogICAgLy8gcmV0dXJuIHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgLy8gICAgIGFjdGl2ZV9wcm9wb3NhbD1hY3RpdmVfcHJvcG9zYWwsCiAgICAvLyAgICAga3ljX3N0YXR1cz1reWNfc3RhdHVzLAogICAgLy8gICAgIGt5Y19leHBpcmluZz1reWNfZXhwaXJpbmcsCiAgICAvLyApCiAgICBmcmFtZV9kaWcgLTIKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGludGNfMSAvLyAxCiAgICBzd2FwCiAgICBzZXRiaXQKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTItODE0CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdID0gc2VsZi5tYWtlX3Byb3Bvc2VyX2JveCgKICAgIC8vICAgICBhY3RpdmVfcHJvcG9zYWwsIGt5Y19zdGF0dXMsIGt5Y19leHBpcmluZwogICAgLy8gKQogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmRlY2xhcmVfY29tbWl0dGVlKGNvbW1pdHRlZV9pZDogYnl0ZXMsIHNpemU6IGJ5dGVzLCB2b3RlczogYnl0ZXMpIC0+IHZvaWQ6CmRlY2xhcmVfY29tbWl0dGVlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODE2LTgxOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBkZWNsYXJlX2NvbW1pdHRlZSgKICAgIC8vICAgICBzZWxmLCBjb21taXR0ZWVfaWQ6IHR5cC5CeXRlczMyLCBzaXplOiBhcmM0LlVJbnQ2NCwgdm90ZXM6IGFyYzQuVUludDY0CiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAzIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5MwogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi5jb21taXR0ZWVfbWFuYWdlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfbWFuYWdlciBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzQKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfY29tbWl0dGVlX21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM3CiAgICAvLyBzaXplLm5hdGl2ZSA8PSBzZWxmLm1heF9jb21taXR0ZWVfc2l6ZS52YWx1ZQogICAgZnJhbWVfZGlnIC0yCiAgICBidG9pCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDQgLy8gMHg2ZDYxNzg1ZjYzNmY2ZDZkNjk3NDc0NjU2NTVmNzM2OTdhNjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfY29tbWl0dGVlX3NpemUgZXhpc3RzCiAgICBkaWcgMQogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzNi04MzgKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgc2l6ZS5uYXRpdmUgPD0gc2VsZi5tYXhfY29tbWl0dGVlX3NpemUudmFsdWUKICAgIC8vICksIGVyci5DT01NSVRURUVfU0laRV9UT09fTEFSR0UKICAgIGFzc2VydCAvLyBDb21taXR0ZWUgc2l6ZSBpcyB0b28gbGFyZ2UKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0MAogICAgLy8gc2VsZi5jb21taXR0ZWVfaWQudmFsdWUgPSBjb21taXR0ZWVfaWQuY29weSgpCiAgICBieXRlYyA0NyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NAogICAgZnJhbWVfZGlnIC0zCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQxCiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlID0gc2l6ZS5uYXRpdmUKICAgIGJ5dGVjIDQxIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0MgogICAgLy8gc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUgPSB2b3Rlcy5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgYnl0ZWMgNDIgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkub3Blbl9wcm9wb3NhbChwYXltZW50OiB1aW50NjQpIC0+IHVpbnQ2NDoKb3Blbl9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0NC04NDUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZAogICAgLy8gZGVmIG9wZW5fcHJvcG9zYWwoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IFVJbnQ2NDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODYxCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg2MgogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUsIGVyci5QQVVTRURfUFJPUE9TQUxTCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgOSAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3Byb3Bvc2FscyBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBDcmVhdGlvbiBvZiBwcm9wb3NhbHMgaXMgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjQtODY1CiAgICAvLyAjIENoZWNrIGlmIHRoZSBjYWxsZXIgaXMgYSByZWdpc3RlcmVkIHByb3Bvc2VyCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWNfMSAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODY3LTg2OAogICAgLy8gIyBDaGVjayBpZiB0aGUgcHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucHJvcG9zZXJfYm94WwogICAgYnl0ZWNfMSAvLyAweDcwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjkKICAgIC8vIFR4bi5zZW5kZXIKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg2Ny04NzAKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnByb3Bvc2VyX2JveFsKICAgIC8vICAgICBUeG4uc2VuZGVyCiAgICAvLyBdLmFjdGl2ZV9wcm9wb3NhbCwgZXJyLkFMUkVBRFlfQUNUSVZFX1BST1BPU0FMCiAgICBjb25jYXQKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGJ5dGVjIDggLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzEKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX2t5YyhUeG4uc2VuZGVyKSwgZXJyLklOVkFMSURfS1lDCiAgICB0eG4gU2VuZGVyCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzMKICAgIC8vIGFzc2VydCBUeG4uZmVlID49IChHbG9iYWwubWluX3R4bl9mZWUgKiAzKSwgZXJyLklOU1VGRklDSUVOVF9GRUUKICAgIHR4biBGZWUKICAgIGdsb2JhbCBNaW5UeG5GZWUKICAgIHB1c2hpbnQgMyAvLyAzCiAgICAqCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3NwogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3NS04NzgKICAgIC8vICMgRW5zdXJlIHRoZSB0cmFuc2FjdGlvbiBoYXMgdGhlIGNvcnJlY3QgcGF5bWVudAogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzkKICAgIC8vIGFzc2VydCBwYXltZW50LmFtb3VudCA9PSBzZWxmLm9wZW5fcHJvcG9zYWxfZmVlLnZhbHVlLCBlcnIuV1JPTkdfUEFZTUVOVF9BTU9VTlQKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTcgLy8gMHg2ZjcwNjU2ZTVmNzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3Blbl9wcm9wb3NhbF9mZWUgZXhpc3RzCiAgICBzd2FwCiAgICBkaWcgMQogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBwYXltZW50IGFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgxCiAgICAvLyBtYnJfYmVmb3JlID0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5iYWxhbmNlCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgYWNjdF9wYXJhbXNfZ2V0IEFjY3RCYWxhbmNlCiAgICBhc3NlcnQgLy8gYWNjb3VudCBmdW5kZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4My04ODQKICAgIC8vICMgQ3JlYXRlIHRoZSBQcm9wb3NhbCBBcHAKICAgIC8vIGVycm9yLCB0eCA9IGFyYzQuYXJjNF9jcmVhdGUocHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwuY3JlYXRlLCBUeG4uc2VuZGVyKQogICAgaXR4bl9iZWdpbgogICAgdHhuIFNlbmRlcgogICAgcHVzaGludCAyMCAvLyAyMAogICAgaXR4bl9maWVsZCBHbG9iYWxOdW1VaW50CiAgICBwdXNoaW50IDMgLy8gMwogICAgaXR4bl9maWVsZCBHbG9iYWxOdW1CeXRlU2xpY2UKICAgIGludGNfMSAvLyAxCiAgICBpdHhuX2ZpZWxkIEV4dHJhUHJvZ3JhbVBhZ2VzCiAgICBwdXNoYnl0ZXMgYmFzZTY0KENvRUJRdz09KQogICAgaXR4bl9maWVsZCBDbGVhclN0YXRlUHJvZ3JhbVBhZ2VzCiAgICBwdXNoYnl0ZXMgYmFzZTY0KENpQUZBQUVLRkpCT0poOENBQUFHYzNSaGRIVnpBQWxtYVc1aGJHbDZaV1FJY0hKdmNHOXpaWElQY21WbmFYTjBjbmxmWVhCd1gybGtFR1oxYm1ScGJtZGZZMkYwWldkdmNua0JUUkZqYjIxdGFYUjBaV1ZmYldWdFltVnljd3gyYjNSbGNuTmZZMjkxYm5RUFkyOXRiV2wwZEdWbFgzWnZkR1Z6RFhadmRHVmtYMjFsYldKbGNuTUpZWEJ3Y205MllXeHpDbkpsYW1WamRHbHZibk1PWVhOemFXZHVaV1JmZG05MFpYTUVGUjk4ZFExc2IyTnJaV1JmWVcxdmRXNTBCVzUxYkd4ekFRQU9iM0JsYmw5MGFXMWxjM1JoYlhBV2RtOTBaVjl2Y0dWdWFXNW5YM1JwYldWemRHRnRjQXhqYjIxdGFYUjBaV1ZmYVdRb0FDWkZVbEk2VjNKdmJtY2dVSEp2Y0c5ellXd2dVM1JoZEhWeklHOXlJR1pwYm1Gc2FYcGxaQVYwYVhSc1pSUnpkV0p0YVhOemFXOXVYM1JwYldWemRHRnRjQVZtYjJOMWN3eG1kVzVrYVc1blgzUjVjR1VRY21WeGRXVnpkR1ZrWDJGdGIzVnVkQkZ0WlhSaFpHRjBZVjkxY0d4dllXUmxaQUZXQzNobmIzWmZaR0ZsYlc5dU1SaEFBRzR4TllFREVrUXhOQ1VTUkRFM0ZFUXhOaFJFSndReUEyY25CU0puSnhjcVp5Y1RJbWNuR0NKbkp4UWlaeWtpWnlzaVp5Y0dJbWNuR1NKbkp4b2laeWNiSW1jbkVDSm5KeFVxWnljSUltY25DaUpuSndzaVp5Y01JbWNuRFNKbkp4RWlaeWNKSW1jbkRpSm5KeHdpWnpFYlFRQndnZzhFSVdzZUJ3VHRycm5LQkhGRG1VOEVjM0V5R2dRMDVoUEtCQTJhc05jRUdFR2cwZ1J6VGI3TUJDRXRud2NFaWw1TWdBUXF3WnNGQklBZ2FiUUVKRGVOUEFTb3h2Z0tCTnZZUGRrMkdnQ09Ed0R5QU5BQXZnQ3RBS0VBa2dCNEFHd0FXd0JLQURzQUtnQWNBQXNBQWlKRE1Sa1VSREVZUkNORE1Sa1VSREVZUklnTGtDY1BURkN3STBNeEdZRUZFa1F4R0VTSUMxOGpRekVaRkVReEdFU0lDcGduRDB4UXNDTkRNUmtVUkRFWVJEWWFBWWdKeFNORE1Sa1VSREVZUklnSmd5Y1BURkN3STBNeEdSUkVNUmhFTmhvQklsT0lDUzBqUXpFWkZFUXhHRVNJQjhNalF6RVpGRVF4R0VRMkdnRTJHZ0kyR2dPSUJsVW5EMHhRc0NORE1Sa1VSREVZUkRZYUFZZ0ZpaU5ETVJrVVJERVlSSWdFaHlORE1Sa1VSREVZUklnRVBDY1BURkN3STBNeEdSUkVNUmhFTmhvQk5ob0NpQVBpSTBNeEdSUkVNUmhFTVJZakNVazRFQ01TUkRZYUFUWWFBallhQXpZYUJJZ0NlQ05ETVJrVVJERVlGRVEyR2dHSUFaNG5EMHhRc0NORGlnQUNJaW95QnlJbkZHVkVDU0luQm1WTVNVOENSQ1FTUVFBNGdCVjJiM1JwYm1kZlpIVnlZWFJwYjI1ZmMyMWhiR3lJQUt5TUFJd0Jpd0FvRTBFQUNDS0xBSXdCakFDSml3S0xBUTRvakFHTUFJbUxBeVVTUVFBaWdCWjJiM1JwYm1kZlpIVnlZWFJwYjI1ZmJXVmthWFZ0aUFCc2pBQ01BVUwvdllBVmRtOTBhVzVuWDJSMWNtRjBhVzl1WDJ4aGNtZGxpQUJMakFDTUFVTC9uSWdBbVVRaUtXVkVKQkpCQUFvaUsyVkVRQUFESTBTSklrTC8rb29CQVlBWGNISnZjRzl6WVd4ZlkyOXRiV2wwYldWdWRGOWljSE9JQUFvb0VrU0wvd3NoQkFxSmlnRUNJaWNGWlVTTC8yVW9URUFBR0lBVUFCSkZVbEk2VFdsemMybHVaeUJEYjI1bWFXZU1BWXNBaXdGUEEwOERpWW9CQVNJbkJXVkVpLzlsUkltQUQzQmhkWE5sWkY5eVpXZHBjM1J5ZVlqL3JpZ1NSQlJFaVRFQUlpY0VaVVFTaVRFQUp4NkkvOGxKRllFZ0VrUVNpVElOSWljRlpVUVNpWW9DQUxHTC83SUlpLzZ5QnlPeUVDS3lBYk9KaWdFQUlpY1FaVVNMLzB5SS85NG5FQ0puaVlvQkFJdi9PQmd5Q0JKRWkvODVHZ0EyR2dBU1JJbUtBUUVpS2treURVUW5CSXYvWnljRk1nMW5KeFdJLzJOSktoSkJBQjJBR0FBV1JWSlNPa1Z0Y0hSNUlFTnZiVzFwZEhSbFpTQkpSSXdBaVNjSWlQOEtTVTRDakFDTUFTZ1RRUUFGaXdCQy8rZUxBU0lPUVFBaWdCMEFHMFZTVWpwWGNtOXVaeUJEYjIxdGFYUjBaV1VnVFdWdFltVnljMEwvdmljS2lQN0xTVTRDakFDTUFpZ1RRUUFGaXdCQy82aUxBaUlPUVFBZ2dCc0FHVVZTVWpwWGNtOXVaeUJEYjIxdGFYUjBaV1VnVm05MFpYTkMvNEVuRllzRFp5Y0lpd0ZuSndxTEFtY29Rdjl1aWdVQUtrY0NpUDYxaVA3TVJDSXBaVVJBQVRBaUsyVkVRQUVwSTBTTC9GY0NBSXo4aS8wWFNZd0FpLzRYakFLTC9CV0JldzVFaS93cUUwUWtFa0FBQjRzQUpSSkJBUGtqUklBVWJXbHVYM0psY1hWbGMzUmxaRjloYlc5MWJuU0kvaDRvRWtTQUdtMWhlRjl5WlhGMVpYTjBaV1JmWVcxdmRXNTBYMnhoY21kbGlQMzhLQkpFaXdKSlR3TVBSRWxQQWc1RVNZajl3SXY3T0FBaUp3UmxSQkpFaS9zNEJ6SUtFa1NMK3pnSUVrUW5GNHY4WjRBYWJXRjRYM0psY1hWbGMzUmxaRjloYlc5MWJuUmZjMjFoYkd5SS9hd29Fa1NBRzIxaGVGOXlaWEYxWlhOMFpXUmZZVzF2ZFc1MFgyMWxaR2wxYllqOWlVeU1BU2dTUkE1QkFDZ25CaVJuSnhxTEFHY25HNHNDU1U0Q1o0di9GeWNaVEdlSS9Uc25FRXhuSnhNeUIyY3BKR2VKaXdLTEFRNUJBQWNuQmlWblF2L05Kd2FCSVdkQy84VWlRdjhFSWtMKzFJb0NBSWo5Y0lqODY0ditJbGxKUkNjY0kyZUwveWNTRTBFQURpY0h2RWlML2xjQ0FDY0hUTCtKSndlOVJDY0h2VVNMQUFnbkIwelRpLzVYQWdBbkIwNEN1NG1LQUFFaWlQMWVSQ0lwWlVRa0UwQUFCeUlyWlVSQkFDRW5Gb3dBaXdBb0UwRUFCSXNBVElraUp3UmxSSWo5VXljSHZFZ3JJMmNvVElrb2pBQkMvOTJLQUFBaWlQenRpUHhvTWdjaUp4TmxSQWtpSndabFRFbFBBa1FrRWtFQWlZQVpaR2x6WTNWemMybHZibDlrZFhKaGRHbHZibDl6YldGc2JJajhlSXdBaXdBb0VrU0xBUTVFS1NWbkp4Z3lCMmVBRVc5d1pXNWZjSEp2Y0c5ellXeGZabVZsaVB4UEtCSkVJaWNjWlVSRWdCeGtZV1Z0YjI1ZmIzQmxjbUYwYVc5dVgyWjFibVJwYm1kZlluQnppUHdsS0JKRUp4NkkvRTVKRllFZ0VrUk9BZ3NoQkFxSS9JZUppd0lsRWtFQUpJQWFaR2x6WTNWemMybHZibDlrZFhKaGRHbHZibDl0WldScGRXMkkrK2VNQUVML2JJQVpaR2x6WTNWemMybHZibDlrZFhKaGRHbHZibDlzWVhKblpZajd4SXdBUXY5SmlnRUFLa2NDaVB3WFJDSXBaVVFsRWtReEZrQUFtaklFakFFampBQ0xBSXNCREVFQURZc0FTWWo4TkNNSWpBQkMvK3VML3lKWmpBSWlqQUNMQUlzQ0RFRUFTWXYvVndJQWl3QkpUZ0tCS0F1QktGaEpWd0FnVElFZ1d5Y2RUd0pRU2IxRkFSUkVTd0ZFU3dFV0p4SlF2eUluQ1dWRUl3Z25DVXhuSWljT1pVUUlKdzVNWnlNSWpBQkMvNjhpSndsbFJDSW5DR1ZFRWtFQUZTSW5EbVZFSWljS1pVUVNSQ21CR1djbkZESUhaNGtpaVB1clF2OTdpZ01CSWtjQ0trY0NpUHRzUkNJcFpVU0JHUk5CQVFZbkZvd0Jpd0VvRTBFQUJZc0JqQUNKaS80WGpBT0wveGVNQlNjZGkvMVFTWXdBdlVVQlFBQjFnQlVBRTBWU1VqcFdiM1JsY2lCdWIzUWdabTkxYm1TTUFZc0JLQk5CQUFXTEFZd0FpWXNBU2I1RVNWY0FDSUFCZ0ZCUEFreS9JaWNMWlVRakNDY0xUR2NpVzRzRFNVNENDWXNGU1U0RENTSW5ER1ZFVHdJSUp3eE1aeUluRFdWRVR3SUlKdzFNWnlJbkVXVkVDQ2NSVEdjb2pBQ0ppd0MrVEVsT0Fvd0NSSUZBVXljU0lrOENWQ2NTRTBFQUlJQVpBQmRGVWxJNlZtOTBaWElnWVd4eVpXRmtlU0IyYjNSbFpJd0JRdjlyaXdKWEFBaUxBNHNGQ0Jha1FRQWJnQlFBRWtWU1VqcFdiM1JsY3lCbGVHTmxaV1JsWkl3QlF2OUJLSXdCUXY4N2lQa0hTVTRDakFHTUJDZ1RRUDd2aXdSQUFDS0FHd0FaUlZKU09sWnZkR2x1WnlCUVpYSnBiMlFnUlhod2FYSmxaSXdCUXY3SUtJd0JRdjdDaWdBQUlpcEhBNGo1NHlJcFpVU0JHUkpFaVBpNUtCSkVRUUFPSWljTFpVUWlKd2hsUkJKQkFURWpSQ0luQm1WTVNVNENqQUZFSkJKQkFPdUFESEYxYjNKMWJWOXpiV0ZzYklqNVk0d0Fpd0FvRWtRaUp3aGxSQXNoQkFxTUFpSW5CbVZNU1U0Q2pBRkVKQkpCQUhLQUZYZGxhV2RvZEdWa1gzRjFiM0oxYlY5emJXRnNiSWo1SjR3QWl3QW9Fa1FpSnd4bFJDSW5EV1ZFQ0NJbkVXVkVDSXdFSWljS1pVUUxJUVFLakFNaUp3dGxSSXNDRDBFQUc0c0Vpd01QUVFBVElpY01aVVFpSncxbFJBMUJBQVVwZ1I1bmlTbUJLR2NpSndSbFJJajVYWW1MQVNVU1FRQWdnQlozWldsbmFIUmxaRjl4ZFc5eWRXMWZiV1ZrYVhWdGlQaXRqQUJDLzRPQUZYZGxhV2RvZEdWa1gzRjFiM0oxYlY5c1lYSm5aWWo0am93QVF2OWtpd0VsRWtFQUY0QU5jWFZ2Y25WdFgyMWxaR2wxYllqNGNJd0FRdjhLZ0F4eGRXOXlkVzFmYkdGeVoyV0krRnFNQUVMKzlDSkMvc3lLQVFBeEFJQU1lR2R2ZGw5amIzVnVZMmxzaVBoc1NSV0JJQkpFRWtRaUtXVkVnUjRTUkl2L1FRQVFLWUU4WnlJbkJXVkVjZ2hFaVBpa2lTbUJMV2VKaWdBQklvajRla1FpS1dWRWdTMFRRUUFlSnhhTUFJc0FLQk5CQUFTTEFFeUpLWUV5WnlJbkJHVkVpUGh4S0V5SktJd0FRdi9naWdFQUlpcEhBeUlwWlVRbEVrRUFnWWo0S1VReEZrQUFjVElFakFRampBS0xBb3NFREVFQURZc0NTWWo0VFNNSWpBSkMvK3VML3lKWmpBRWlqQU9MQTRzQkRFRUFRNHYvVndJQWl3T0JJQXVCSUZnbkhVeFFTWXdBdlVVQlFRQWdJaWNKWlVRakNTY0pUR2NpSnc1bFJJc0FTVTRDdmtRaVd3a25Ea3hudkVpTEF5TUlqQU5DLzdXSklvajM3VUwvcENJcFpVU0JNaEpBQUJRaUtXVkVnVHdTUUFBS0lpbGxSSUVvRWtFQURDSXJaVVJBQUFValJFTC9XU0pDLy9pS0FBRWlpUGVGUkNJclpVUkFBQzRpS1dWRVFRQ2ZJaWxsUkNRVFFRQ1dJaWxsUklFeUUwRUFqQ0lwWlVTQlBCTkJBSUlpS1dWRWdTZ1RRUUI0SnhhTUFJc0FLQk5CQUFTTEFFeUpJaWNKWlVSQkFEU0FNQUF1UlZKU09sUm9aWEpsSUdGeVpTQjJiM1JsY25NZ1lYTnphV2R1WldRZ2RHOGdkR2hwY3lCd2NtOXdiM05oYkV5SklpbGxSQ1FTUVFBSUlpY0VaVVNJOXhBaUp3VmxSSElJUkRJS2N3QkVNZ3B6QVVRSmlQYm1LeU5uS0V5SktJd0FRditHaVBhL1JDSXJaVVJFSndlOFNDSW5CV1ZFY2doRU1ncHpBRVNJOXIySklpY0VaVVFpSndWbFJCWWlKeGRsUkVrVkZsY0dBa3hRSWljVFpVUVdJaWNZWlVRV0lpY1VaVVFXSWlsbFJCWWlLMlZFSnhJaVR3SlVJaWNHWlVRV0lpY1paVVFXU1pPQkNBNUVWd2NCSWljYVpVUVdJaWNiWlVRV0lpY1FaVVFXSWljVlpVUWlKd2hsUkJZaUp3cGxSQllpSnd0bFJCWWlKd3hsUkJZaUp3MWxSQllpSnhGbFJCWlBFMDhUVUlBQ0FMeFFUeEZRVHhCUVR3OVFUdzVRVHcxUVR3eFFUd3RRVHdwUVR3bFFUd2hRVHdkUVR3WlFUd1ZRVHdSUVR3TlFUd0pRVEZCTVVJaz0pCiAgICBpdHhuX2ZpZWxkIEFwcHJvdmFsUHJvZ3JhbVBhZ2VzCiAgICBwdXNoYnl0ZXMgMHgyMTZiMWUwNyAvLyBtZXRob2QgImNyZWF0ZShhZGRyZXNzKXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZXh0cmFjdCAwIDQKICAgIGJ5dGVjXzMgLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBsb2cgdmFsdWUgaXMgbm90IHRoZSByZXN1bHQgb2YgYW4gQUJJIHJldHVybgogICAgaXR4biBDcmVhdGVkQXBwbGljYXRpb25JRAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg2CiAgICAvLyBtYnJfYWZ0ZXIgPSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLmJhbGFuY2UKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBhY2N0X3BhcmFtc19nZXQgQWNjdEJhbGFuY2UKICAgIGFzc2VydCAvLyBhY2NvdW50IGZ1bmRlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg4LTg4OQogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIgc3RhdGUKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbChUcnVlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzEgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBpbnRjXzEgLy8gMQogICAgc2V0Yml0CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTEtODk2CiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwLCBleGNsdWRpbmcgdGhlIE1CUiBuZWVkZWQgZm9yIHRoZSBQcm9wb3NhbCBBcHAKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj10eC5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgLy8gICAgIGFtb3VudD1zZWxmLm9wZW5fcHJvcG9zYWxfZmVlLnZhbHVlIC0gKG1icl9hZnRlciAtIG1icl9iZWZvcmUpLAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkzCiAgICAvLyByZWNlaXZlcj10eC5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgZGlnIDEKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5NAogICAgLy8gYW1vdW50PXNlbGYub3Blbl9wcm9wb3NhbF9mZWUudmFsdWUgLSAobWJyX2FmdGVyIC0gbWJyX2JlZm9yZSksCiAgICBzd2FwCiAgICB1bmNvdmVyIDMKICAgIC0KICAgIHVuY292ZXIgMwogICAgc3dhcAogICAgLQogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIGl0eG5fZmllbGQgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5MS04OTIKICAgIC8vICMgVHJhbnNmZXIgZnVuZHMgdG8gdGhlIG5ldyBQcm9wb3NhbCBBcHAsIGV4Y2x1ZGluZyB0aGUgTUJSIG5lZWRlZCBmb3IgdGhlIFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk1CiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkxLTg5NgogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcCwgZXhjbHVkaW5nIHRoZSBNQlIgbmVlZGVkIGZvciB0aGUgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9dHguY3JlYXRlZF9hcHAuYWRkcmVzcywKICAgIC8vICAgICBhbW91bnQ9c2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZS52YWx1ZSAtIChtYnJfYWZ0ZXIgLSBtYnJfYmVmb3JlKSwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTgtODk5CiAgICAvLyAjIEluY3JlbWVudCBwZW5kaW5nIHByb3Bvc2FscwogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlYyA3IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMQogICAgLy8gcmV0dXJuIHR4LmNyZWF0ZWRfYXBwLmlkCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudm90ZV9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMsIHhnb3ZfYWRkcmVzczogYnl0ZXMsIGFwcHJvdmFsX3ZvdGVzOiBieXRlcywgcmVqZWN0aW9uX3ZvdGVzOiBieXRlcykgLT4gdm9pZDoKdm90ZV9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMy05MTAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgdm90ZV9wcm9wb3NhbCgKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICBhcHByb3ZhbF92b3RlczogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgcmVqZWN0aW9uX3ZvdGVzOiBhcmM0LlVJbnQ2NCwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTM0CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzNi05MzcKICAgIC8vICMgdmVyaWZ5IHByb3Bvc2FsIGlkIGlzIGdlbnVpbmUgcHJvcG9zYWwKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZC5uYXRpdmUpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC00CiAgICBidG9pCiAgICBkdXAKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTM5LTk0MAogICAgLy8gIyBtYWtlIHN1cmUgdGhleSdyZSB2b3Rpbmcgb24gYmVoYWxmIG9mIGFuIHhHb3YKICAgIC8vIGV4aXN0cyA9IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveAogICAgYnl0ZWMgNCAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0MQogICAgLy8gYXNzZXJ0IGV4aXN0cywgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQyCiAgICAvLyB4Z292X2JveCA9IHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0uY29weSgpCiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQ0CiAgICAvLyB4Z292X2JveC52b3RlZF9wcm9wb3NhbHMubmF0aXZlICsgVUludDY0KDEpCiAgICBkdXAKICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgIGV4dHJhY3RfdWludDY0CiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQzLTk0NQogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS52b3RlZF9wcm9wb3NhbHMgPSBhcmM0LlVJbnQ2NCgKICAgIC8vICAgICB4Z292X2JveC52b3RlZF9wcm9wb3NhbHMubmF0aXZlICsgVUludDY0KDEpCiAgICAvLyApCiAgICBpdG9iCiAgICBkaWcgMQogICAgc3dhcAogICAgcmVwbGFjZTIgMzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0NwogICAgLy8gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGdsb2JhbCBMYXRlc3RUaW1lc3RhbXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0Ni05NDgKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0ubGFzdF92b3RlX3RpbWVzdGFtcCA9IGFyYzQuVUludDY0KAogICAgLy8gICAgIEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICAvLyApCiAgICBpdG9iCiAgICByZXBsYWNlMiA0MAogICAgdW5jb3ZlciAyCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NTAtOTUxCiAgICAvLyAjIFZlcmlmeSB0aGUgY2FsbGVyIGlzIHVzaW5nIHRoZWlyIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSB4Z292X2JveC52b3RpbmdfYWRkcmVzcy5uYXRpdmUsIGVyci5NVVNUX0JFX1ZPVElOR19BRERSRVNTCiAgICB0eG4gU2VuZGVyCiAgICBzd2FwCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICA9PQogICAgYXNzZXJ0IC8vIE11c3QgYmUgdm90aW5nIGFkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1My05NjAKICAgIC8vICMgQ2FsbCB0aGUgUHJvcG9zYWwgQXBwIHRvIHJlZ2lzdGVyIHRoZSB2b3RlCiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLnZvdGUsCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzLAogICAgLy8gICAgIGFwcHJvdmFsX3ZvdGVzLAogICAgLy8gICAgIHJlamVjdGlvbl92b3RlcywKICAgIC8vICAgICBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlLAogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHgxODQxYTBkMiAvLyBtZXRob2QgInZvdGUoYWRkcmVzcyx1aW50NjQsdWludDY0KXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTMKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTEKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBkdXBuIDIKICAgIGV4dHJhY3QgMCA0CiAgICBieXRlY18zIC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gbG9nIHZhbHVlIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGFuIEFCSSByZXR1cm4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2MgogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgZXh0cmFjdCA2IDAKICAgIGR1cAogICAgbGVuCiAgICBkdXAKICAgIGludGNfMiAvLyA0CiAgICA8CiAgICBieiB2b3RlX3Byb3Bvc2FsX3Rlcm5hcnlfZmFsc2VAMwogICAgaW50Y18wIC8vIDAKCnZvdGVfcHJvcG9zYWxfdGVybmFyeV9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTYyCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBieiB2b3RlX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAMTMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2MwogICAgLy8gZXJyb3Jfd2l0aG91dF9wcmVmaXggPSBTdHJpbmcuZnJvbV9ieXRlcyhlcnJvci5uYXRpdmUuYnl0ZXNbNDpdKQogICAgaW50Y18yIC8vIDQKICAgIGZyYW1lX2RpZyAyCiAgICBkdXAKICAgIGNvdmVyIDIKICAgID49CiAgICBpbnRjXzIgLy8gNAogICAgZGlnIDIKICAgIHVuY292ZXIgMgogICAgc2VsZWN0CiAgICBmcmFtZV9kaWcgMQogICAgc3dhcAogICAgdW5jb3ZlciAyCiAgICBzdWJzdHJpbmczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NjUKICAgIC8vIGNhc2UgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUzoKICAgIGJ5dGVjIDE4IC8vICJXcm9uZyBQcm9wb3NhbCBTdGF0dXMgb3IgZmluYWxpemVkIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY3CiAgICAvLyBjYXNlIGVyci5NSVNTSU5HX0NPTkZJRzoKICAgIGJ5dGVjIDQ4IC8vICJNaXNzaW5nIENvbmZpZyIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2OQogICAgLy8gY2FzZSBlcnIuVk9URVJfTk9UX0ZPVU5EOgogICAgcHVzaGJ5dGVzcyAiVm90ZXIgbm90IGZvdW5kIiAiVm90ZXIgYWxyZWFkeSB2b3RlZCIgIlZvdGVzIGV4Y2VlZGVkIiAiVm90aW5nIFBlcmlvZCBFeHBpcmVkIiAvLyAiVm90ZXIgbm90IGZvdW5kIiwgIlZvdGVyIGFscmVhZHkgdm90ZWQiLCAiVm90ZXMgZXhjZWVkZWQiLCAiVm90aW5nIFBlcmlvZCBFeHBpcmVkIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY0LTk3OAogICAgLy8gbWF0Y2ggZXJyb3Jfd2l0aG91dF9wcmVmaXg6CiAgICAvLyAgICAgY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLk1JU1NJTkdfQ09ORklHOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5NSVNTSU5HX0NPTkZJRyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuVk9URVJfTk9UX0ZPVU5EOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RFUl9OT1RfRk9VTkQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLlZPVEVSX0FMUkVBRFlfVk9URUQ6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVSX0FMUkVBRFlfVk9URUQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLlZPVEVTX0VYQ0VFREVEOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RFU19FWENFRURFRCAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuVk9USU5HX1BFUklPRF9FWFBJUkVEOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RJTkdfUEVSSU9EX0VYUElSRUQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgXzoKICAgIC8vICAgICAgICAgYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgdW5jb3ZlciA2CiAgICBtYXRjaCB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANiB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzFANyB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzJAOCB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzNAOSB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzRAMTAgdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV81QDExCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzgKICAgIC8vIGFzc2VydCBGYWxzZSwgIlVua25vd24gZXJyb3IiICAjIG5vcWEKICAgIGVyciAvLyBVbmtub3duIGVycm9yCgp2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzVAMTE6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzYKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLlZPVElOR19QRVJJT0RfRVhQSVJFRCAgIyBub3FhCiAgICBlcnIgLy8gVm90aW5nIFBlcmlvZCBFeHBpcmVkCgp2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzRAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzQKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVTX0VYQ0VFREVEICAjIG5vcWEKICAgIGVyciAvLyBWb3RlcyBleGNlZWRlZAoKdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8zQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzIKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVSX0FMUkVBRFlfVk9URUQgICMgbm9xYQogICAgZXJyIC8vIFZvdGVyIGFscmVhZHkgdm90ZWQKCnZvdGVfcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMkA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTcwCiAgICAvLyBhc3NlcnQgRmFsc2UsIGVyci5WT1RFUl9OT1RfRk9VTkQgICMgbm9xYQogICAgZXJyIC8vIFZvdGVyIG5vdCBmb3VuZAoKdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8xQDc6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NjgKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLk1JU1NJTkdfQ09ORklHICAjIG5vcWEKICAgIGVyciAvLyBNaXNzaW5nIENvbmZpZwoKdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NjYKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICBlcnIgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZAoKdm90ZV9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDEzOgogICAgcmV0c3ViCgp2b3RlX3Byb3Bvc2FsX3Rlcm5hcnlfZmFsc2VAMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2MgogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgZnJhbWVfZGlnIDAKICAgIGV4dHJhY3QgNiA0CiAgICBieXRlYyAxOSAvLyAiRVJSOiIKICAgID09CiAgICBiIHZvdGVfcHJvcG9zYWxfdGVybmFyeV9tZXJnZUA0CgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnBheV9ncmFudF9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMpIC0+IHZvaWQ6CnBheV9ncmFudF9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4MC05ODEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcGF5X2dyYW50X3Byb3Bvc2FsKHNlbGYsIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTk4LTk5OQogICAgLy8gIyBWZXJpZnkgdGhlIGNhbGxlciBpcyB0aGUgeEdvdiBQYXlvcgogICAgLy8gYXNzZXJ0IGFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSA9PSBzZWxmLnhnb3ZfcGF5b3IudmFsdWUsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMSAvLyAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9wYXlvciBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDAxLTEwMDIKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZC5uYXRpdmUpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBkdXAKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwNC0xMDA1CiAgICAvLyAjIFJlYWQgcHJvcG9zYWwgc3RhdGUgZGlyZWN0bHkgZnJvbSB0aGUgUHJvcG9zYWwgQXBwJ3MgZ2xvYmFsIHN0YXRlCiAgICAvLyBwcm9wb3NlciA9IHNlbGYuZ2V0X3Byb3Bvc2FsX3Byb3Bvc2VyKHByb3Bvc2FsX2lkLm5hdGl2ZSkKICAgIGR1cAogICAgY2FsbHN1YiBnZXRfcHJvcG9zYWxfcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIyMS0yMjMKICAgIC8vIHJlcXVlc3RlZF9hbW91bnQsIHJlcXVlc3RlZF9hbW91bnRfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQsIHBjZmcuR1NfS0VZX1JFUVVFU1RFRF9BTU9VTlQKICAgIC8vICkKICAgIGRpZyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjIKICAgIC8vIHByb3Bvc2FsX2lkLCBwY2ZnLkdTX0tFWV9SRVFVRVNURURfQU1PVU5UCiAgICBwdXNoYnl0ZXMgMHg3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjIxLTIyMwogICAgLy8gcmVxdWVzdGVkX2Ftb3VudCwgcmVxdWVzdGVkX2Ftb3VudF9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZCwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIyNAogICAgLy8gYXNzZXJ0IHJlcXVlc3RlZF9hbW91bnRfZXhpc3RzLCBlcnIuTUlTU0lOR19LRVkKICAgIGFzc2VydCAvLyBNaXNzaW5nIGtleSBpbiBzdGF0ZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwOAogICAgLy8gYXNzZXJ0IHByb3Bvc2VyIGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuV1JPTkdfUFJPUE9TRVIKICAgIGJ5dGVjXzEgLy8gMHg3MAogICAgZGlnIDIKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBhc3NlcnQgLy8gV3JvbmcgcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMTAKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX2t5Yyhwcm9wb3NlciksIGVyci5JTlZBTElEX0tZQwogICAgZGlnIDEKICAgIGNhbGxzdWIgdmFsaWRfa3ljCiAgICBhc3NlcnQgLy8gSW52YWxpZCBLWUMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMTQKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgPj0gcmVxdWVzdGVkX2Ftb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBkdXAKICAgIGRpZyAyCiAgICA+PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxMi0xMDE1CiAgICAvLyAjIFZlcmlmeSBzdWZmaWNpZW50IGZ1bmRzIGFyZSBhdmFpbGFibGUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSA+PSByZXF1ZXN0ZWRfYW1vdW50CiAgICAvLyApLCBlcnIuSU5TVUZGSUNJRU5UX1RSRUFTVVJZX0ZVTkRTCiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IHRyZWFzdXJ5IGZ1bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjktMjMwCiAgICAvLyAjIFRyYW5zZmVyIHRoZSBmdW5kcyB0byB0aGUgcmVjZWl2ZXIKICAgIC8vIGl0eG4uUGF5bWVudChyZWNlaXZlcj1yZWNpcGllbnQsIGFtb3VudD1hbW91bnQsIGZlZT0wKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgZGlnIDEKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICB1bmNvdmVyIDIKICAgIGl0eG5fZmllbGQgUmVjZWl2ZXIKICAgIGludGNfMSAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIzMi0yMzMKICAgIC8vICMgVXBkYXRlIHRoZSBvdXRzdGFuZGluZyBmdW5kcwogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSAtPSBhbW91bnQKICAgIHN3YXAKICAgIC0KICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxOS0xMDIxCiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLmZ1bmQsIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4OGE1ZTRjODAgLy8gbWV0aG9kICJmdW5kKClzdHJpbmciCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwbiAyCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWNfMyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDIzCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBleHRyYWN0IDYgMAogICAgZHVwCiAgICBsZW4KICAgIGR1cAogICAgaW50Y18yIC8vIDQKICAgIDwKICAgIGJ6IHBheV9ncmFudF9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDMKICAgIGludGNfMCAvLyAwCgpwYXlfZ3JhbnRfcHJvcG9zYWxfdGVybmFyeV9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAyMwogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgYnogcGF5X2dyYW50X3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAOAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAyNAogICAgLy8gZXJyb3Jfd2l0aG91dF9wcmVmaXggPSBTdHJpbmcuZnJvbV9ieXRlcyhlcnJvci5uYXRpdmUuYnl0ZXNbNDpdKQogICAgaW50Y18yIC8vIDQKICAgIGZyYW1lX2RpZyAyCiAgICBkdXAKICAgIGNvdmVyIDIKICAgID49CiAgICBpbnRjXzIgLy8gNAogICAgZGlnIDIKICAgIHVuY292ZXIgMgogICAgc2VsZWN0CiAgICBmcmFtZV9kaWcgMQogICAgc3dhcAogICAgdW5jb3ZlciAyCiAgICBzdWJzdHJpbmczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDI2CiAgICAvLyBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICBieXRlYyAxOCAvLyAiV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZCIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMjUtMTAyOQogICAgLy8gbWF0Y2ggZXJyb3Jfd2l0aG91dF9wcmVmaXg6CiAgICAvLyAgICAgY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgLy8gICAgIGNhc2UgXzoKICAgIC8vICAgICAgICAgYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgc3dhcAogICAgbWF0Y2ggcGF5X2dyYW50X3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAyOQogICAgLy8gYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgZXJyIC8vIFVua25vd24gZXJyb3IKCnBheV9ncmFudF9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDI3CiAgICAvLyBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgZXJyIC8vIFdyb25nIFByb3Bvc2FsIFN0YXR1cyBvciBmaW5hbGl6ZWQKCnBheV9ncmFudF9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDg6CiAgICByZXRzdWIKCnBheV9ncmFudF9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDIzCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMAogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDE5IC8vICJFUlI6IgogICAgPT0KICAgIGIgcGF5X2dyYW50X3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5maW5hbGl6ZV9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMpIC0+IHZvaWQ6CmZpbmFsaXplX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAzMS0xMDMyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGZpbmFsaXplX3Byb3Bvc2FsKHNlbGYsIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgaW50Y18wIC8vIDAKICAgIGR1cAogICAgcHVzaGJ5dGVzICIiCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQ3CiAgICAvLyBwcm9wb3NhbF9zdGF0dXMgPSBzZWxmLmdldF9wcm9wb3NhbF9zdGF0dXMocHJvcG9zYWxfaWQubmF0aXZlKQogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwNgogICAgLy8gcHJvcG9zYWxfaWQsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgcHVzaGJ5dGVzIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDUtMjA3CiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZCwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgc3dhcAogICAgZHVwCiAgICB1bmNvdmVyIDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwOAogICAgLy8gYXNzZXJ0IHN0YXR1c19leGlzdHMsIGVyci5NSVNTSU5HX0tFWQogICAgYXNzZXJ0IC8vIE1pc3Npbmcga2V5IGluIHN0YXRlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQ4LTEwNTAKICAgIC8vIGlmIHByb3Bvc2FsX3N0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfRU1QVFkpIG9yIHByb3Bvc2FsX3N0YXR1cyA9PSBVSW50NjQoCiAgICAvLyAgICAgcGVubS5TVEFUVVNfRFJBRlQKICAgIC8vICk6CiAgICBieiBmaW5hbGl6ZV9wcm9wb3NhbF9pZl9ib2R5QDIKICAgIGZyYW1lX2RpZyA0CiAgICBwdXNoaW50IDEwIC8vIDEwCiAgICA9PQogICAgYnogZmluYWxpemVfcHJvcG9zYWxfYWZ0ZXJfaWZfZWxzZUAzCgpmaW5hbGl6ZV9wcm9wb3NhbF9pZl9ib2R5QDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDUxCiAgICAvLyBhc3NlcnQgYXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpID09IHNlbGYueGdvdl9kYWVtb24udmFsdWUsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNCAvLyAweDc4Njc2Zjc2NWY2NDYxNjU2ZDZmNmUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2RhZW1vbiBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCgpmaW5hbGl6ZV9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDUzLTEwNTQKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZC5uYXRpdmUpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIDMKICAgIGR1cAogICAgY2FsbHN1YiBfaXNfcHJvcG9zYWwKICAgIGFzc2VydCAvLyBJbnZhbGlkIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDU2LTEwNTgKICAgIC8vIGVycm9yLCB0eCA9IGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwuZmluYWxpemUsIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4ODAyMDY5YjQgLy8gbWV0aG9kICJmaW5hbGl6ZSgpc3RyaW5nIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIHB1c2hpbnQgNiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICBpdHhuIExhc3RMb2cKICAgIGR1cAogICAgZnJhbWVfYnVyeSAwCiAgICBkdXAKICAgIGV4dHJhY3QgMCA0CiAgICBieXRlY18zIC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gbG9nIHZhbHVlIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGFuIEFCSSByZXR1cm4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjAKICAgIC8vIGlmIGVycm9yLm5hdGl2ZS5zdGFydHN3aXRoKGVyci5BUkNfNjVfUFJFRklYKToKICAgIGV4dHJhY3QgNiAwCiAgICBkdXAKICAgIGZyYW1lX2J1cnkgMQogICAgbGVuCiAgICBkdXAKICAgIGZyYW1lX2J1cnkgMgogICAgaW50Y18yIC8vIDQKICAgIDwKICAgIGJ6IGZpbmFsaXplX3Byb3Bvc2FsX3Rlcm5hcnlfZmFsc2VANgogICAgaW50Y18wIC8vIDAKCmZpbmFsaXplX3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjAKICAgIC8vIGlmIGVycm9yLm5hdGl2ZS5zdGFydHN3aXRoKGVyci5BUkNfNjVfUFJFRklYKToKICAgIGJ6IGZpbmFsaXplX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAMTMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjEKICAgIC8vIGVycm9yX3dpdGhvdXRfcHJlZml4ID0gU3RyaW5nLmZyb21fYnl0ZXMoZXJyb3IubmF0aXZlLmJ5dGVzWzQ6XSkKICAgIGludGNfMiAvLyA0CiAgICBmcmFtZV9kaWcgMgogICAgZHVwCiAgICBjb3ZlciAyCiAgICA+PQogICAgaW50Y18yIC8vIDQKICAgIGRpZyAyCiAgICB1bmNvdmVyIDIKICAgIHNlbGVjdAogICAgZnJhbWVfZGlnIDEKICAgIHN3YXAKICAgIHVuY292ZXIgMgogICAgc3Vic3RyaW5nMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2MwogICAgLy8gY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgYnl0ZWMgMTggLy8gIldyb25nIFByb3Bvc2FsIFN0YXR1cyBvciBmaW5hbGl6ZWQiCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDY1CiAgICAvLyBjYXNlIGVyci5NSVNTSU5HX0NPTkZJRzoKICAgIGJ5dGVjIDQ4IC8vICJNaXNzaW5nIENvbmZpZyIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjcKICAgIC8vIGNhc2UgZXJyLlZPVEVSU19BU1NJR05FRDoKICAgIHB1c2hieXRlcyAiVGhlcmUgYXJlIHZvdGVycyBhc3NpZ25lZCB0byB0aGlzIHByb3Bvc2FsIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2Mi0xMDcwCiAgICAvLyBtYXRjaCBlcnJvcl93aXRob3V0X3ByZWZpeDoKICAgIC8vICAgICBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuTUlTU0lOR19DT05GSUc6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLk1JU1NJTkdfQ09ORklHICAjIG5vcWEKICAgIC8vICAgICBjYXNlIGVyci5WT1RFUlNfQVNTSUdORUQ6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVSU19BU1NJR05FRCAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBfOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsICJVbmtub3duIGVycm9yIiAgIyBub3FhCiAgICB1bmNvdmVyIDMKICAgIG1hdGNoIGZpbmFsaXplX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBAOSBmaW5hbGl6ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8xQDEwIGZpbmFsaXplX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzJAMTEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNzAKICAgIC8vIGFzc2VydCBGYWxzZSwgIlVua25vd24gZXJyb3IiICAjIG5vcWEKICAgIGVyciAvLyBVbmtub3duIGVycm9yCgpmaW5hbGl6ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8yQDExOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2OAogICAgLy8gYXNzZXJ0IEZhbHNlLCBlcnIuVk9URVJTX0FTU0lHTkVEICAjIG5vcWEKICAgIGVyciAvLyBUaGVyZSBhcmUgdm90ZXJzIGFzc2lnbmVkIHRvIHRoaXMgcHJvcG9zYWwKCmZpbmFsaXplX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzFAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDY2CiAgICAvLyBhc3NlcnQgRmFsc2UsIGVyci5NSVNTSU5HX0NPTkZJRyAgIyBub3FhCiAgICBlcnIgLy8gTWlzc2luZyBDb25maWcKCmZpbmFsaXplX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBAOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjQKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICBlcnIgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZAoKZmluYWxpemVfcHJvcG9zYWxfYWZ0ZXJfaWZfZWxzZUAxMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNzIKICAgIC8vIHNlbGYuZGVjcmVtZW50X3BlbmRpbmdfcHJvcG9zYWxzKHByb3Bvc2FsX2lkLm5hdGl2ZSkKICAgIGZyYW1lX2RpZyAzCiAgICBjYWxsc3ViIGRlY3JlbWVudF9wZW5kaW5nX3Byb3Bvc2FscwogICAgcmV0c3ViCgpmaW5hbGl6ZV9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDYwCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMAogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDE5IC8vICJFUlI6IgogICAgPT0KICAgIGIgZmluYWxpemVfcHJvcG9zYWxfdGVybmFyeV9tZXJnZUA3CgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmRyb3BfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB2b2lkOgpkcm9wX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA3NC0xMDc1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRyb3BfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDg5CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOTEtMTA5MgogICAgLy8gIyBWZXJpZnkgcHJvcG9zYWxfaWQgaXMgYSBnZW51aW5lIHByb3Bvc2FsIGNyZWF0ZWQgYnkgdGhpcyByZWdpc3RyeQogICAgLy8gYXNzZXJ0IHNlbGYuX2lzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkLm5hdGl2ZSksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGR1cG4gMgogICAgY2FsbHN1YiBfaXNfcHJvcG9zYWwKICAgIGFzc2VydCAvLyBJbnZhbGlkIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDk0CiAgICAvLyBwcm9wb3NlciA9IHNlbGYuZ2V0X3Byb3Bvc2FsX3Byb3Bvc2VyKHByb3Bvc2FsX2lkLm5hdGl2ZSkKICAgIGR1cAogICAgY2FsbHN1YiBnZXRfcHJvcG9zYWxfcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOTUKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHByb3Bvc2VyLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICA9PQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5Ny0xMDk5CiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLmRyb3AsIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4NzM3MTMyMWEgLy8gbWV0aG9kICJkcm9wKClzdHJpbmciCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwbiAyCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWNfMyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAxCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBleHRyYWN0IDYgMAogICAgZHVwCiAgICBsZW4KICAgIGR1cAogICAgaW50Y18yIC8vIDQKICAgIDwKICAgIGJ6IGRyb3BfcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzCiAgICBpbnRjXzAgLy8gMAoKZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAxCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBieiBkcm9wX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAOAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwMgogICAgLy8gZXJyb3Jfd2l0aG91dF9wcmVmaXggPSBTdHJpbmcuZnJvbV9ieXRlcyhlcnJvci5uYXRpdmUuYnl0ZXNbNDpdKQogICAgaW50Y18yIC8vIDQKICAgIGZyYW1lX2RpZyAzCiAgICBkdXAKICAgIGNvdmVyIDIKICAgID49CiAgICBpbnRjXzIgLy8gNAogICAgZGlnIDIKICAgIHVuY292ZXIgMgogICAgc2VsZWN0CiAgICBmcmFtZV9kaWcgMgogICAgc3dhcAogICAgdW5jb3ZlciAyCiAgICBzdWJzdHJpbmczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTA0CiAgICAvLyBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICBieXRlYyAxOCAvLyAiV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZCIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDMtMTEwNwogICAgLy8gbWF0Y2ggZXJyb3Jfd2l0aG91dF9wcmVmaXg6CiAgICAvLyAgICAgY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgLy8gICAgIGNhc2UgXzoKICAgIC8vICAgICAgICAgYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgc3dhcAogICAgbWF0Y2ggZHJvcF9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDYKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDcKICAgIC8vIGFzc2VydCBGYWxzZSwgIlVua25vd24gZXJyb3IiICAjIG5vcWEKICAgIGVyciAvLyBVbmtub3duIGVycm9yCgpkcm9wX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDUKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICBlcnIgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZAoKZHJvcF9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTA5CiAgICAvLyBzZWxmLmRlY3JlbWVudF9wZW5kaW5nX3Byb3Bvc2Fscyhwcm9wb3NhbF9pZC5uYXRpdmUpCiAgICBmcmFtZV9kaWcgMAogICAgY2FsbHN1YiBkZWNyZW1lbnRfcGVuZGluZ19wcm9wb3NhbHMKICAgIHJldHN1YgoKZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAxCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMQogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDE5IC8vICJFUlI6IgogICAgPT0KICAgIGIgZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVwb3NpdF9mdW5kcyhwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CmRlcG9zaXRfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTExLTExMTIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgZGVwb3NpdF9mdW5kcyhzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEyNAogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMjMtMTEyNQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI2CiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlICs9IHBheW1lbnQuYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICArCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS53aXRoZHJhd19mdW5kcyhhbW91bnQ6IHVpbnQ2NCkgLT4gdm9pZDoKd2l0aGRyYXdfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI4LTExMjkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgd2l0aGRyYXdfZnVuZHMoc2VsZiwgYW1vdW50OiBVSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNDIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0MwogICAgLy8gYXNzZXJ0IGFtb3VudCA8PSBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlLCBlcnIuSU5TVUZGSUNJRU5UX0ZVTkRTCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgZGlnIDEKICAgIDw9CiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IGZ1bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTQ0CiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMiksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDIgLy8gMgogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTQ1CiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlIC09IGFtb3VudAogICAgZnJhbWVfZGlnIC0xCiAgICAtCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNDctMTE1MQogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0OAogICAgLy8gcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTQ3CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTUwCiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0Ny0xMTUxCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LndpdGhkcmF3X2JhbGFuY2UoKSAtPiB2b2lkOgp3aXRoZHJhd19iYWxhbmNlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE2NQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTY2CiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMiksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDIgLy8gMgogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTcwCiAgICAvLyBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLmJhbGFuY2UKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBhY2N0X3BhcmFtc19nZXQgQWNjdEJhbGFuY2UKICAgIGFzc2VydCAvLyBhY2NvdW50IGZ1bmRlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE3MQogICAgLy8gLSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLm1pbl9iYWxhbmNlCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgYWNjdF9wYXJhbXNfZ2V0IEFjY3RNaW5CYWxhbmNlCiAgICBhc3NlcnQgLy8gYWNjb3VudCBmdW5kZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNzAtMTE3MQogICAgLy8gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5iYWxhbmNlCiAgICAvLyAtIEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MubWluX2JhbGFuY2UKICAgIC0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNzIKICAgIC8vIC0gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTcwLTExNzIKICAgIC8vIEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MuYmFsYW5jZQogICAgLy8gLSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLm1pbl9iYWxhbmNlCiAgICAvLyAtIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUKICAgIC0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNzUKICAgIC8vIGFzc2VydCBhbW91bnQgPiAwLCBlcnIuSU5TVUZGSUNJRU5UX0ZVTkRTCiAgICBkdXAKICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNzYtMTE4MAogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE3NwogICAgLy8gcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE3NgogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE3OQogICAgLy8gZmVlPTAsCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNzYtMTE4MAogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5nZXRfc3RhdGUoKSAtPiBieXRlczoKZ2V0X3N0YXRlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE4OQogICAgLy8gcGF1c2VkX3JlZ2lzdHJ5PWFyYzQuQm9vbChib29sKHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlKSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgIGJ5dGVjIDggLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTkwCiAgICAvLyBwYXVzZWRfcHJvcG9zYWxzPWFyYzQuQm9vbChib29sKHNlbGYucGF1c2VkX3Byb3Bvc2Fscy52YWx1ZSkpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDkgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9wcm9wb3NhbHMgZXhpc3RzCiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE5MQogICAgLy8geGdvdl9tYW5hZ2VyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTkyCiAgICAvLyB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMSAvLyAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9wYXlvciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExOTMKICAgIC8vIHhnb3ZfY291bmNpbD1zZWxmLnhnb3ZfY291bmNpbC52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyMCAvLyAweDc4Njc2Zjc2NWY2MzZmNzU2ZTYzNjk2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfY291bmNpbCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExOTQKICAgIC8vIHhnb3Zfc3Vic2NyaWJlcj1zZWxmLnhnb3Zfc3Vic2NyaWJlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3Zfc3Vic2NyaWJlciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExOTUKICAgIC8vIGt5Y19wcm92aWRlcj1zZWxmLmt5Y19wcm92aWRlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMiAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmt5Y19wcm92aWRlciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExOTYKICAgIC8vIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTMgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTk3CiAgICAvLyB4Z292X2RhZW1vbj1zZWxmLnhnb3ZfZGFlbW9uLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE0IC8vIDB4Nzg2NzZmNzY1ZjY0NjE2NTZkNmY2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfZGFlbW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE5OAogICAgLy8geGdvdl9mZWU9YXJjNC5VSW50NjQoc2VsZi54Z292X2ZlZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTUgLy8gMHg3ODY3NmY3NjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9mZWUgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTk5CiAgICAvLyBwcm9wb3Nlcl9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE2IC8vIDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfZmVlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIwMAogICAgLy8gb3Blbl9wcm9wb3NhbF9mZWU9YXJjNC5VSW50NjQoc2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTcgLy8gMHg2ZjcwNjU2ZTVmNzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3Blbl9wcm9wb3NhbF9mZWUgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjAxCiAgICAvLyBkYWVtb25fb3BzX2Z1bmRpbmdfYnBzPWFyYzQuVUludDY0KHNlbGYuZGFlbW9uX29wc19mdW5kaW5nX2Jwcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjEgLy8gMHg2NDYxNjU2ZDZmNmU1ZjZmNzA2NTcyNjE3NDY5NmY2ZTVmNjY3NTZlNjQ2OTZlNjc1ZjYyNzA3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRhZW1vbl9vcHNfZnVuZGluZ19icHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjAyCiAgICAvLyBwcm9wb3NhbF9jb21taXRtZW50X2Jwcz1hcmM0LlVJbnQ2NChzZWxmLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyMiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2JwcyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMDMKICAgIC8vIG1pbl9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuVUludDY0KHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIzIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50IGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIwNQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjQgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjA2CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjUgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjA3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNiAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMDQtMTIwOAogICAgLy8gbWF4X3JlcXVlc3RlZF9hbW91bnQ9YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMTAKICAgIC8vIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjcgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjExCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyOCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMTIKICAgIC8vIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjEzCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMDktMTIxNAogICAgLy8gZGlzY3Vzc2lvbl9kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIC8vICksCiAgICB1bmNvdmVyIDMKICAgIHVuY292ZXIgMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjE2CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzEgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjE3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMyIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIxOAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMzIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIxOQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMTUtMTIyMAogICAgLy8gdm90aW5nX2R1cmF0aW9uPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFs0XV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgdW5jb3ZlciAzCiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIyMgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM1IC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIyMwogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMjQKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMjEtMTIyNQogICAgLy8gcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjI3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzggLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjI4CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM5IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIyOQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQwIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIyNi0xMjMwCiAgICAvLyB3ZWlnaHRlZF9xdW9ydW09YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMzEKICAgIC8vIG91dHN0YW5kaW5nX2Z1bmRzPWFyYzQuVUludDY0KHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjMyCiAgICAvLyBwZW5kaW5nX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NChzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA3IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIzMwogICAgLy8gY29tbWl0dGVlX2lkPXNlbGYuY29tbWl0dGVlX2lkLnZhbHVlLmNvcHkoKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0NyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV9pZCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMzQKICAgIC8vIGNvbW1pdHRlZV9tZW1iZXJzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX21lbWJlcnMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQxIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIzNQogICAgLy8gY29tbWl0dGVlX3ZvdGVzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX3ZvdGVzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MiAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV92b3RlcyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExODgtMTIzNgogICAgLy8gcmV0dXJuIHR5cC5UeXBlZEdsb2JhbFN0YXRlKAogICAgLy8gICAgIHBhdXNlZF9yZWdpc3RyeT1hcmM0LkJvb2woYm9vbChzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSkpLAogICAgLy8gICAgIHBhdXNlZF9wcm9wb3NhbHM9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcHJvcG9zYWxzLnZhbHVlKSksCiAgICAvLyAgICAgeGdvdl9tYW5hZ2VyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLAogICAgLy8gICAgIHhnb3ZfcGF5b3I9c2VsZi54Z292X3BheW9yLnZhbHVlLAogICAgLy8gICAgIHhnb3ZfY291bmNpbD1zZWxmLnhnb3ZfY291bmNpbC52YWx1ZSwKICAgIC8vICAgICB4Z292X3N1YnNjcmliZXI9c2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUsCiAgICAvLyAgICAga3ljX3Byb3ZpZGVyPXNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLAogICAgLy8gICAgIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICAvLyAgICAgeGdvdl9kYWVtb249c2VsZi54Z292X2RhZW1vbi52YWx1ZSwKICAgIC8vICAgICB4Z292X2ZlZT1hcmM0LlVJbnQ2NChzZWxmLnhnb3ZfZmVlLnZhbHVlKSwKICAgIC8vICAgICBwcm9wb3Nlcl9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUpLAogICAgLy8gICAgIG9wZW5fcHJvcG9zYWxfZmVlPWFyYzQuVUludDY0KHNlbGYub3Blbl9wcm9wb3NhbF9mZWUudmFsdWUpLAogICAgLy8gICAgIGRhZW1vbl9vcHNfZnVuZGluZ19icHM9YXJjNC5VSW50NjQoc2VsZi5kYWVtb25fb3BzX2Z1bmRpbmdfYnBzLnZhbHVlKSwKICAgIC8vICAgICBwcm9wb3NhbF9jb21taXRtZW50X2Jwcz1hcmM0LlVJbnQ2NChzZWxmLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzLnZhbHVlKSwKICAgIC8vICAgICBtaW5fcmVxdWVzdGVkX2Ftb3VudD1hcmM0LlVJbnQ2NChzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50LnZhbHVlKSwKICAgIC8vICAgICBtYXhfcmVxdWVzdGVkX2Ftb3VudD1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIGRpc2N1c3Npb25fZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgdm90aW5nX2R1cmF0aW9uPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFs0XV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgd2VpZ2h0ZWRfcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgb3V0c3RhbmRpbmdfZnVuZHM9YXJjNC5VSW50NjQoc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSksCiAgICAvLyAgICAgcGVuZGluZ19wcm9wb3NhbHM9YXJjNC5VSW50NjQoc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSksCiAgICAvLyAgICAgY29tbWl0dGVlX2lkPXNlbGYuY29tbWl0dGVlX2lkLnZhbHVlLmNvcHkoKSwKICAgIC8vICAgICBjb21taXR0ZWVfbWVtYmVycz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlKSwKICAgIC8vICAgICBjb21taXR0ZWVfdm90ZXM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUpLAogICAgLy8gKQogICAgdW5jb3ZlciAyMwogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgdW5jb3ZlciAyNAogICAgaW50Y18xIC8vIDEKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICB1bmNvdmVyIDIzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMjIKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyMQogICAgY29uY2F0CiAgICB1bmNvdmVyIDIwCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTkKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxOAogICAgY29uY2F0CiAgICB1bmNvdmVyIDE3CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTYKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNQogICAgY29uY2F0CiAgICB1bmNvdmVyIDE0CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMgogICAgY29uY2F0CiAgICB1bmNvdmVyIDExCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTAKICAgIGNvbmNhdAogICAgdW5jb3ZlciA5CiAgICBjb25jYXQKICAgIHVuY292ZXIgOAogICAgY29uY2F0CiAgICB1bmNvdmVyIDcKICAgIGNvbmNhdAogICAgdW5jb3ZlciA2CiAgICBjb25jYXQKICAgIHVuY292ZXIgNQogICAgY29uY2F0CiAgICB1bmNvdmVyIDQKICAgIGNvbmNhdAogICAgdW5jb3ZlciAzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5nZXRfeGdvdl9ib3goeGdvdl9hZGRyZXNzOiBieXRlcykgLT4gYnl0ZXM6CmdldF94Z292X2JveDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMzgtMTIzOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHJlYWRvbmx5PVRydWUpCiAgICAvLyBkZWYgZ2V0X3hnb3ZfYm94KHNlbGYsIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiB0eXAuWEdvdkJveFZhbHVlOgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjQ5CiAgICAvLyByZXR1cm4gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5jb3B5KCkKICAgIGJ5dGVjIDQgLy8gMHg3OAogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmdldF9wcm9wb3Nlcl9ib3gocHJvcG9zZXJfYWRkcmVzczogYnl0ZXMpIC0+IGJ5dGVzOgpnZXRfcHJvcG9zZXJfYm94OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI1MS0xMjUyCiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIC8vIGRlZiBnZXRfcHJvcG9zZXJfYm94KHNlbGYsIHByb3Bvc2VyX2FkZHJlc3M6IGFyYzQuQWRkcmVzcykgLT4gdHlwLlByb3Bvc2VyQm94VmFsdWU6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNjIKICAgIC8vIHJldHVybiBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlcl9hZGRyZXNzLm5hdGl2ZV0uY29weSgpCiAgICBieXRlY18xIC8vIDB4NzAKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB2b2lkOgppc19wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNzktMTI4MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBpc19wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyODEKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZC5uYXRpdmUpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBjYWxsc3ViIF9pc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIHJldHN1Ygo=", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
class BinaryStateValue {
    value;
    constructor(value) {
        this.value = value;
    }
    asByteArray() {
        return this.value;
    }
    asString() {
        return this.value !== undefined ? Buffer.from(this.value).toString('utf-8') : undefined;
    }
}
/**
 * Converts the ABI tuple representation of a XGovRegistryConfig to the struct representation
 */
export function XGovRegistryConfigFromTuple(abiTuple) {
    return getABIStructFromABITuple(abiTuple, APP_SPEC.structs.XGovRegistryConfig, APP_SPEC.structs);
}
/**
 * Converts the ABI tuple representation of a TypedGlobalState to the struct representation
 */
export function TypedGlobalStateFromTuple(abiTuple) {
    return getABIStructFromABITuple(abiTuple, APP_SPEC.structs.TypedGlobalState, APP_SPEC.structs);
}
/**
 * Converts the ABI tuple representation of a XGovBoxValue to the struct representation
 */
export function XGovBoxValueFromTuple(abiTuple) {
    return getABIStructFromABITuple(abiTuple, APP_SPEC.structs.XGovBoxValue, APP_SPEC.structs);
}
/**
 * Converts the ABI tuple representation of a ProposerBoxValue to the struct representation
 */
export function ProposerBoxValueFromTuple(abiTuple) {
    return getABIStructFromABITuple(abiTuple, APP_SPEC.structs.ProposerBoxValue, APP_SPEC.structs);
}
/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the XGovRegistry smart contract
 */
export class XGovRegistryParamsFactory {
    /**
     * Gets available create ABI call param factories
     */
    static get create() {
        return {
            _resolveByMethod(params) {
                switch (params.method) {
                    case 'create':
                    case 'create()void':
                        return XGovRegistryParamsFactory.create.create(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs create ABI call params for the XGovRegistry smart contract using the create()void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            create(params) {
                return {
                    ...params,
                    method: 'create()void',
                    args: Array.isArray(params.args) ? params.args : [],
                };
            },
        };
    }
    /**
     * Gets available update ABI call param factories
     */
    static get update() {
        return {
            _resolveByMethod(params) {
                switch (params.method) {
                    case 'update_xgov_registry':
                    case 'update_xgov_registry()void':
                        return XGovRegistryParamsFactory.update.updateXgovRegistry(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs update ABI call params for the XGovRegistry smart contract using the update_xgov_registry()void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            updateXgovRegistry(params) {
                return {
                    ...params,
                    method: 'update_xgov_registry()void',
                    args: Array.isArray(params.args) ? params.args : [],
                };
            },
        };
    }
    /**
     * Constructs a no op call for the pause_registry()void ABI method
     *
     * Pauses the xGov Registry non-administrative methods.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static pauseRegistry(params) {
        return {
            ...params,
            method: 'pause_registry()void',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the pause_proposals()void ABI method
     *
     * Pauses the creation of new Proposals.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static pauseProposals(params) {
        return {
            ...params,
            method: 'pause_proposals()void',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the resume_registry()void ABI method
     *
     * Resumes the xGov Registry non-administrative methods.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static resumeRegistry(params) {
        return {
            ...params,
            method: 'resume_registry()void',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the resume_proposals()void ABI method
     *
     * Resumes the creation of new Proposals.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static resumeProposals(params) {
        return {
            ...params,
            method: 'resume_proposals()void',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the set_xgov_manager(address)void ABI method
     *
     * Sets the xGov Manager.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setXgovManager(params) {
        return {
            ...params,
            method: 'set_xgov_manager(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.manager],
        };
    }
    /**
     * Constructs a no op call for the set_payor(address)void ABI method
     *
     * Sets the xGov Payor.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setPayor(params) {
        return {
            ...params,
            method: 'set_payor(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.payor],
        };
    }
    /**
     * Constructs a no op call for the set_xgov_council(address)void ABI method
     *
     * Sets the xGov Council.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setXgovCouncil(params) {
        return {
            ...params,
            method: 'set_xgov_council(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.council],
        };
    }
    /**
     * Constructs a no op call for the set_xgov_subscriber(address)void ABI method
     *
     * Sets the xGov Subscriber.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setXgovSubscriber(params) {
        return {
            ...params,
            method: 'set_xgov_subscriber(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.subscriber],
        };
    }
    /**
     * Constructs a no op call for the set_kyc_provider(address)void ABI method
     *
     * Sets the KYC provider.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setKycProvider(params) {
        return {
            ...params,
            method: 'set_kyc_provider(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.provider],
        };
    }
    /**
     * Constructs a no op call for the set_committee_manager(address)void ABI method
     *
     * Sets the Committee Manager.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setCommitteeManager(params) {
        return {
            ...params,
            method: 'set_committee_manager(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.manager],
        };
    }
    /**
     * Constructs a no op call for the set_xgov_daemon(address)void ABI method
     *
     * Sets the xGov Daemon.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setXgovDaemon(params) {
        return {
            ...params,
            method: 'set_xgov_daemon(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.xgovDaemon],
        };
    }
    /**
     * Constructs a no op call for the config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3]))void ABI method
     *
     * Sets the configuration of the xGov Registry.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static configXgovRegistry(params) {
        return {
            ...params,
            method: 'config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3]))void',
            args: Array.isArray(params.args) ? params.args : [params.args.config],
        };
    }
    /**
     * Constructs a no op call for the subscribe_xgov(address,pay)void ABI method
     *
     * Subscribes the sender to being an xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static subscribeXgov(params) {
        return {
            ...params,
            method: 'subscribe_xgov(address,pay)void',
            args: Array.isArray(params.args) ? params.args : [params.args.votingAddress, params.args.payment],
        };
    }
    /**
     * Constructs a no op call for the unsubscribe_xgov(address)void ABI method
     *
     * Unsubscribes the designated address from being an xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static unsubscribeXgov(params) {
        return {
            ...params,
            method: 'unsubscribe_xgov(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.xgovAddress],
        };
    }
    /**
     * Constructs a no op call for the request_subscribe_xgov(address,address,uint64,pay)void ABI method
     *
     * Requests to subscribe to the xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static requestSubscribeXgov(params) {
        return {
            ...params,
            method: 'request_subscribe_xgov(address,address,uint64,pay)void',
            args: Array.isArray(params.args) ? params.args : [params.args.xgovAddress, params.args.ownerAddress, params.args.relationType, params.args.payment],
        };
    }
    /**
     * Constructs a no op call for the approve_subscribe_xgov(uint64)void ABI method
     *
     * Approves a subscribe request to xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static approveSubscribeXgov(params) {
        return {
            ...params,
            method: 'approve_subscribe_xgov(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.requestId],
        };
    }
    /**
     * Constructs a no op call for the reject_subscribe_xgov(uint64)void ABI method
     *
     * Rejects a subscribe request to xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static rejectSubscribeXgov(params) {
        return {
            ...params,
            method: 'reject_subscribe_xgov(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.requestId],
        };
    }
    /**
     * Constructs a no op call for the set_voting_account(address,address)void ABI method
     *
     * Sets the Voting Address for the xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setVotingAccount(params) {
        return {
            ...params,
            method: 'set_voting_account(address,address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.xgovAddress, params.args.votingAddress],
        };
    }
    /**
     * Constructs a no op call for the subscribe_proposer(pay)void ABI method
     *
     * Subscribes the sender to being a Proposer.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static subscribeProposer(params) {
        return {
            ...params,
            method: 'subscribe_proposer(pay)void',
            args: Array.isArray(params.args) ? params.args : [params.args.payment],
        };
    }
    /**
     * Constructs a no op call for the set_proposer_kyc(address,bool,uint64)void ABI method
     *
     * Sets a proposer's KYC status.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setProposerKyc(params) {
        return {
            ...params,
            method: 'set_proposer_kyc(address,bool,uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposer, params.args.kycStatus, params.args.kycExpiring],
        };
    }
    /**
     * Constructs a no op call for the declare_committee(byte[32],uint64,uint64)void ABI method
     *
     * Sets the xGov Committee in charge.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static declareCommittee(params) {
        return {
            ...params,
            method: 'declare_committee(byte[32],uint64,uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.committeeId, params.args.size, params.args.votes],
        };
    }
    /**
     * Constructs a no op call for the open_proposal(pay)uint64 ABI method
     *
     * Creates a new Proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static openProposal(params) {
        return {
            ...params,
            method: 'open_proposal(pay)uint64',
            args: Array.isArray(params.args) ? params.args : [params.args.payment],
        };
    }
    /**
     * Constructs a no op call for the vote_proposal(uint64,address,uint64,uint64)void ABI method
     *
     * Votes on a Proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static voteProposal(params) {
        return {
            ...params,
            method: 'vote_proposal(uint64,address,uint64,uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposalId, params.args.xgovAddress, params.args.approvalVotes, params.args.rejectionVotes],
        };
    }
    /**
     * Constructs a no op call for the pay_grant_proposal(uint64)void ABI method
     *
     * Disburses the funds for an approved Proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static payGrantProposal(params) {
        return {
            ...params,
            method: 'pay_grant_proposal(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposalId],
        };
    }
    /**
     * Constructs a no op call for the finalize_proposal(uint64)void ABI method
     *
     * Finalize a Proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static finalizeProposal(params) {
        return {
            ...params,
            method: 'finalize_proposal(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposalId],
        };
    }
    /**
     * Constructs a no op call for the drop_proposal(uint64)void ABI method
     *
     * Drops a Proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static dropProposal(params) {
        return {
            ...params,
            method: 'drop_proposal(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposalId],
        };
    }
    /**
     * Constructs a no op call for the deposit_funds(pay)void ABI method
     *
     * Deposits xGov program funds into the xGov Treasury (xGov Registry Account).
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static depositFunds(params) {
        return {
            ...params,
            method: 'deposit_funds(pay)void',
            args: Array.isArray(params.args) ? params.args : [params.args.payment],
        };
    }
    /**
     * Constructs a no op call for the withdraw_funds(uint64)void ABI method
     *
     * Remove xGov program funds from the xGov Treasury (xGov Registry Account).
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static withdrawFunds(params) {
        return {
            ...params,
            method: 'withdraw_funds(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.amount],
        };
    }
    /**
     * Constructs a no op call for the withdraw_balance()void ABI method
     *
     * Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static withdrawBalance(params) {
        return {
            ...params,
            method: 'withdraw_balance()void',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64) ABI method
     *
     * Returns the xGov Registry state.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getState(params) {
        return {
            ...params,
            method: 'get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
    /**
     * Constructs a no op call for the get_xgov_box(address)(address,uint64,uint64,uint64) ABI method
     *
     * Returns the xGov box for the given address.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getXgovBox(params) {
        return {
            ...params,
            method: 'get_xgov_box(address)(address,uint64,uint64,uint64)',
            args: Array.isArray(params.args) ? params.args : [params.args.xgovAddress],
        };
    }
    /**
     * Constructs a no op call for the get_proposer_box(address)(bool,bool,uint64) ABI method
     *
     * Returns the Proposer box for the given address.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getProposerBox(params) {
        return {
            ...params,
            method: 'get_proposer_box(address)(bool,bool,uint64)',
            args: Array.isArray(params.args) ? params.args : [params.args.proposerAddress],
        };
    }
    /**
     * Constructs a no op call for the is_proposal(uint64)void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static isProposal(params) {
        return {
            ...params,
            method: 'is_proposal(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposalId],
        };
    }
}
/**
 * A factory to create and deploy one or more instance of the XGovRegistry smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class XGovRegistryFactory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    appFactory;
    /**
     * Creates a new instance of `XGovRegistryFactory`
     *
     * @param params The parameters to initialise the app factory with
     */
    constructor(params) {
        this.appFactory = new _AppFactory({
            ...params,
            appSpec: APP_SPEC,
        });
    }
    /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
    get appName() {
        return this.appFactory.appName;
    }
    /** The ARC-56 app spec being used */
    get appSpec() {
        return APP_SPEC;
    }
    /** A reference to the underlying `AlgorandClient` this app factory is using. */
    get algorand() {
        return this.appFactory.algorand;
    }
    /**
     * Returns a new `AppClient` client for an app instance of the given ID.
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    getAppClientById(params) {
        return new XGovRegistryClient(this.appFactory.getAppClientById(params));
    }
    /**
     * Returns a new `AppClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    async getAppClientByCreatorAndName(params) {
        return new XGovRegistryClient(await this.appFactory.getAppClientByCreatorAndName(params));
    }
    /**
     * Idempotently deploys the XGovRegistry smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    async deploy(params = {}) {
        const result = await this.appFactory.deploy({
            ...params,
            createParams: params.createParams?.method ? XGovRegistryParamsFactory.create._resolveByMethod(params.createParams) : params.createParams ? params.createParams : undefined,
            updateParams: params.updateParams?.method ? XGovRegistryParamsFactory.update._resolveByMethod(params.updateParams) : params.updateParams ? params.updateParams : undefined,
        });
        return { result: result.result, appClient: new XGovRegistryClient(result.appClient) };
    }
    /**
     * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    params = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the XGovRegistry smart contract using the create()void ABI method.
             *
             * Create the xGov Registry.
             *
             * @param params The params for the smart contract call
             * @returns The create params
             */
            create: (params = { args: [] }) => {
                return this.appFactory.params.create(XGovRegistryParamsFactory.create.create(params));
            },
        },
        /**
         * Gets available deployUpdate methods
         */
        deployUpdate: {
            /**
             * Updates an existing instance of the XGovRegistry smart contract using the update_xgov_registry()void ABI method.
             *
             * Updates the xGov Registry contract.
             *
             * @param params The params for the smart contract call
             * @returns The deployUpdate params
             */
            updateXgovRegistry: (params = { args: [] }) => {
                return this.appFactory.params.deployUpdate(XGovRegistryParamsFactory.update.updateXgovRegistry(params));
            },
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the XGovRegistry smart contract using the create()void ABI method.
             *
             * Create the xGov Registry.
             *
             * @param params The params for the smart contract call
             * @returns The create transaction
             */
            create: (params = { args: [] }) => {
                return this.appFactory.createTransaction.create(XGovRegistryParamsFactory.create.create(params));
            },
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the XGovRegistry smart contract using an ABI method call using the create()void ABI method.
             *
             * Create the xGov Registry.
             *
             * @param params The params for the smart contract call
             * @returns The create result
             */
            create: async (params = { args: [] }) => {
                const result = await this.appFactory.send.create(XGovRegistryParamsFactory.create.create(params));
                return { result: { ...result.result, return: result.result.return }, appClient: new XGovRegistryClient(result.appClient) };
            },
        },
    };
}
/**
 * A client to make calls to the XGovRegistry smart contract
 */
export class XGovRegistryClient {
    /**
     * The underlying `AppClient` for when you want to have more flexibility
     */
    appClient;
    constructor(appClientOrParams) {
        this.appClient = appClientOrParams instanceof _AppClient ? appClientOrParams : new _AppClient({
            ...appClientOrParams,
            appSpec: APP_SPEC,
        });
    }
    /**
     * Checks for decode errors on the given return value and maps the return value to the return type for the given method
     * @returns The typed return value or undefined if there was no value
     */
    decodeReturnValue(method, returnValue) {
        return returnValue !== undefined ? getArc56ReturnValue(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined;
    }
    /**
     * Returns a new `XGovRegistryClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static async fromCreatorAndName(params) {
        return new XGovRegistryClient(await _AppClient.fromCreatorAndName({ ...params, appSpec: APP_SPEC }));
    }
    /**
     * Returns an `XGovRegistryClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static async fromNetwork(params) {
        return new XGovRegistryClient(await _AppClient.fromNetwork({ ...params, appSpec: APP_SPEC }));
    }
    /** The ID of the app instance this client is linked to. */
    get appId() {
        return this.appClient.appId;
    }
    /** The app address of the app instance this client is linked to. */
    get appAddress() {
        return this.appClient.appAddress;
    }
    /** The name of the app. */
    get appName() {
        return this.appClient.appName;
    }
    /** The ARC-56 app spec being used */
    get appSpec() {
        return this.appClient.appSpec;
    }
    /** A reference to the underlying `AlgorandClient` this app client is using. */
    get algorand() {
        return this.appClient.algorand;
    }
    /**
     * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    params = {
        /**
         * Gets available update methods
         */
        update: {
            /**
             * Updates an existing instance of the XGovRegistry smart contract using the `update_xgov_registry()void` ABI method.
             *
             * Updates the xGov Registry contract.
             *
             * @param params The params for the smart contract call
             * @returns The update params
             */
            updateXgovRegistry: (params = { args: [] }) => {
                return this.appClient.params.update(XGovRegistryParamsFactory.update.updateXgovRegistry(params));
            },
        },
        /**
         * Makes a clear_state call to an existing instance of the XGovRegistry smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.params.bare.clearState(params);
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pause_registry()void` ABI method.
         *
         * Pauses the xGov Registry non-administrative methods.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        pauseRegistry: (params = { args: [] }) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.pauseRegistry(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pause_proposals()void` ABI method.
         *
         * Pauses the creation of new Proposals.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        pauseProposals: (params = { args: [] }) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.pauseProposals(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `resume_registry()void` ABI method.
         *
         * Resumes the xGov Registry non-administrative methods.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        resumeRegistry: (params = { args: [] }) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.resumeRegistry(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `resume_proposals()void` ABI method.
         *
         * Resumes the creation of new Proposals.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        resumeProposals: (params = { args: [] }) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.resumeProposals(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_manager(address)void` ABI method.
         *
         * Sets the xGov Manager.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setXgovManager: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setXgovManager(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_payor(address)void` ABI method.
         *
         * Sets the xGov Payor.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setPayor: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setPayor(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_council(address)void` ABI method.
         *
         * Sets the xGov Council.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setXgovCouncil: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setXgovCouncil(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_subscriber(address)void` ABI method.
         *
         * Sets the xGov Subscriber.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setXgovSubscriber: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setXgovSubscriber(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_kyc_provider(address)void` ABI method.
         *
         * Sets the KYC provider.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setKycProvider: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setKycProvider(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_committee_manager(address)void` ABI method.
         *
         * Sets the Committee Manager.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setCommitteeManager: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setCommitteeManager(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_daemon(address)void` ABI method.
         *
         * Sets the xGov Daemon.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setXgovDaemon: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setXgovDaemon(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3]))void` ABI method.
         *
         * Sets the configuration of the xGov Registry.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        configXgovRegistry: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.configXgovRegistry(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `subscribe_xgov(address,pay)void` ABI method.
         *
         * Subscribes the sender to being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        subscribeXgov: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.subscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `unsubscribe_xgov(address)void` ABI method.
         *
         * Unsubscribes the designated address from being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        unsubscribeXgov: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.unsubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `request_subscribe_xgov(address,address,uint64,pay)void` ABI method.
         *
         * Requests to subscribe to the xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        requestSubscribeXgov: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.requestSubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `approve_subscribe_xgov(uint64)void` ABI method.
         *
         * Approves a subscribe request to xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        approveSubscribeXgov: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.approveSubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `reject_subscribe_xgov(uint64)void` ABI method.
         *
         * Rejects a subscribe request to xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        rejectSubscribeXgov: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.rejectSubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_voting_account(address,address)void` ABI method.
         *
         * Sets the Voting Address for the xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setVotingAccount: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setVotingAccount(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `subscribe_proposer(pay)void` ABI method.
         *
         * Subscribes the sender to being a Proposer.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        subscribeProposer: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.subscribeProposer(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_proposer_kyc(address,bool,uint64)void` ABI method.
         *
         * Sets a proposer's KYC status.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setProposerKyc: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setProposerKyc(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `declare_committee(byte[32],uint64,uint64)void` ABI method.
         *
         * Sets the xGov Committee in charge.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        declareCommittee: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.declareCommittee(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `open_proposal(pay)uint64` ABI method.
         *
         * Creates a new Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        openProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.openProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `vote_proposal(uint64,address,uint64,uint64)void` ABI method.
         *
         * Votes on a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        voteProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.voteProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pay_grant_proposal(uint64)void` ABI method.
         *
         * Disburses the funds for an approved Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        payGrantProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.payGrantProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `finalize_proposal(uint64)void` ABI method.
         *
         * Finalize a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        finalizeProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.finalizeProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `drop_proposal(uint64)void` ABI method.
         *
         * Drops a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        dropProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.dropProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `deposit_funds(pay)void` ABI method.
         *
         * Deposits xGov program funds into the xGov Treasury (xGov Registry Account).
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        depositFunds: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.depositFunds(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `withdraw_funds(uint64)void` ABI method.
         *
         * Remove xGov program funds from the xGov Treasury (xGov Registry Account).
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        withdrawFunds: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.withdrawFunds(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `withdraw_balance()void` ABI method.
         *
         * Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        withdrawBalance: (params = { args: [] }) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.withdrawBalance(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov Registry state.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getState: (params = { args: [] }) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.getState(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_xgov_box(address)(address,uint64,uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov box for the given address.
         *
         * @param params The params for the smart contract call
         * @returns The call params: The xGov box value
         */
        getXgovBox: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.getXgovBox(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_proposer_box(address)(bool,bool,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the Proposer box for the given address.
         *
         * @param params The params for the smart contract call
         * @returns The call params: The Proposer box value
         */
        getProposerBox: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.getProposerBox(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `is_proposal(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        isProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.isProposal(params));
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Gets available update methods
         */
        update: {
            /**
             * Updates an existing instance of the XGovRegistry smart contract using the `update_xgov_registry()void` ABI method.
             *
             * Updates the xGov Registry contract.
             *
             * @param params The params for the smart contract call
             * @returns The update transaction
             */
            updateXgovRegistry: (params = { args: [] }) => {
                return this.appClient.createTransaction.update(XGovRegistryParamsFactory.update.updateXgovRegistry(params));
            },
        },
        /**
         * Makes a clear_state call to an existing instance of the XGovRegistry smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.createTransaction.bare.clearState(params);
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pause_registry()void` ABI method.
         *
         * Pauses the xGov Registry non-administrative methods.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        pauseRegistry: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.pauseRegistry(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pause_proposals()void` ABI method.
         *
         * Pauses the creation of new Proposals.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        pauseProposals: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.pauseProposals(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `resume_registry()void` ABI method.
         *
         * Resumes the xGov Registry non-administrative methods.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        resumeRegistry: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.resumeRegistry(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `resume_proposals()void` ABI method.
         *
         * Resumes the creation of new Proposals.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        resumeProposals: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.resumeProposals(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_manager(address)void` ABI method.
         *
         * Sets the xGov Manager.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setXgovManager: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setXgovManager(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_payor(address)void` ABI method.
         *
         * Sets the xGov Payor.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setPayor: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setPayor(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_council(address)void` ABI method.
         *
         * Sets the xGov Council.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setXgovCouncil: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setXgovCouncil(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_subscriber(address)void` ABI method.
         *
         * Sets the xGov Subscriber.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setXgovSubscriber: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setXgovSubscriber(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_kyc_provider(address)void` ABI method.
         *
         * Sets the KYC provider.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setKycProvider: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setKycProvider(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_committee_manager(address)void` ABI method.
         *
         * Sets the Committee Manager.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setCommitteeManager: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setCommitteeManager(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_daemon(address)void` ABI method.
         *
         * Sets the xGov Daemon.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setXgovDaemon: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setXgovDaemon(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3]))void` ABI method.
         *
         * Sets the configuration of the xGov Registry.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        configXgovRegistry: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.configXgovRegistry(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `subscribe_xgov(address,pay)void` ABI method.
         *
         * Subscribes the sender to being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        subscribeXgov: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.subscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `unsubscribe_xgov(address)void` ABI method.
         *
         * Unsubscribes the designated address from being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        unsubscribeXgov: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.unsubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `request_subscribe_xgov(address,address,uint64,pay)void` ABI method.
         *
         * Requests to subscribe to the xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        requestSubscribeXgov: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.requestSubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `approve_subscribe_xgov(uint64)void` ABI method.
         *
         * Approves a subscribe request to xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        approveSubscribeXgov: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.approveSubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `reject_subscribe_xgov(uint64)void` ABI method.
         *
         * Rejects a subscribe request to xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        rejectSubscribeXgov: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.rejectSubscribeXgov(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_voting_account(address,address)void` ABI method.
         *
         * Sets the Voting Address for the xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setVotingAccount: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setVotingAccount(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `subscribe_proposer(pay)void` ABI method.
         *
         * Subscribes the sender to being a Proposer.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        subscribeProposer: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.subscribeProposer(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_proposer_kyc(address,bool,uint64)void` ABI method.
         *
         * Sets a proposer's KYC status.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setProposerKyc: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setProposerKyc(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `declare_committee(byte[32],uint64,uint64)void` ABI method.
         *
         * Sets the xGov Committee in charge.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        declareCommittee: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.declareCommittee(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `open_proposal(pay)uint64` ABI method.
         *
         * Creates a new Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        openProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.openProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `vote_proposal(uint64,address,uint64,uint64)void` ABI method.
         *
         * Votes on a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        voteProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.voteProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pay_grant_proposal(uint64)void` ABI method.
         *
         * Disburses the funds for an approved Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        payGrantProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.payGrantProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `finalize_proposal(uint64)void` ABI method.
         *
         * Finalize a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        finalizeProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.finalizeProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `drop_proposal(uint64)void` ABI method.
         *
         * Drops a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        dropProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.dropProposal(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `deposit_funds(pay)void` ABI method.
         *
         * Deposits xGov program funds into the xGov Treasury (xGov Registry Account).
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        depositFunds: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.depositFunds(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `withdraw_funds(uint64)void` ABI method.
         *
         * Remove xGov program funds from the xGov Treasury (xGov Registry Account).
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        withdrawFunds: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.withdrawFunds(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `withdraw_balance()void` ABI method.
         *
         * Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        withdrawBalance: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.withdrawBalance(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov Registry state.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getState: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.getState(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_xgov_box(address)(address,uint64,uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov box for the given address.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The xGov box value
         */
        getXgovBox: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.getXgovBox(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_proposer_box(address)(bool,bool,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the Proposer box for the given address.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The Proposer box value
         */
        getProposerBox: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.getProposerBox(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `is_proposal(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        isProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.isProposal(params));
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Gets available update methods
         */
        update: {
            /**
             * Updates an existing instance of the XGovRegistry smart contract using the `update_xgov_registry()void` ABI method.
             *
             * Updates the xGov Registry contract.
             *
             * @param params The params for the smart contract call
             * @returns The update result
             */
            updateXgovRegistry: async (params = { args: [] }) => {
                const result = await this.appClient.send.update(XGovRegistryParamsFactory.update.updateXgovRegistry(params));
                return { ...result, return: result.return };
            },
        },
        /**
         * Makes a clear_state call to an existing instance of the XGovRegistry smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.send.bare.clearState(params);
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pause_registry()void` ABI method.
         *
         * Pauses the xGov Registry non-administrative methods.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        pauseRegistry: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.pauseRegistry(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pause_proposals()void` ABI method.
         *
         * Pauses the creation of new Proposals.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        pauseProposals: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.pauseProposals(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `resume_registry()void` ABI method.
         *
         * Resumes the xGov Registry non-administrative methods.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        resumeRegistry: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.resumeRegistry(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `resume_proposals()void` ABI method.
         *
         * Resumes the creation of new Proposals.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        resumeProposals: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.resumeProposals(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_manager(address)void` ABI method.
         *
         * Sets the xGov Manager.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setXgovManager: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setXgovManager(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_payor(address)void` ABI method.
         *
         * Sets the xGov Payor.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setPayor: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setPayor(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_council(address)void` ABI method.
         *
         * Sets the xGov Council.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setXgovCouncil: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setXgovCouncil(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_subscriber(address)void` ABI method.
         *
         * Sets the xGov Subscriber.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setXgovSubscriber: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setXgovSubscriber(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_kyc_provider(address)void` ABI method.
         *
         * Sets the KYC provider.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setKycProvider: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setKycProvider(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_committee_manager(address)void` ABI method.
         *
         * Sets the Committee Manager.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setCommitteeManager: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setCommitteeManager(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_daemon(address)void` ABI method.
         *
         * Sets the xGov Daemon.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setXgovDaemon: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setXgovDaemon(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3]))void` ABI method.
         *
         * Sets the configuration of the xGov Registry.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        configXgovRegistry: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.configXgovRegistry(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `subscribe_xgov(address,pay)void` ABI method.
         *
         * Subscribes the sender to being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        subscribeXgov: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.subscribeXgov(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `unsubscribe_xgov(address)void` ABI method.
         *
         * Unsubscribes the designated address from being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        unsubscribeXgov: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.unsubscribeXgov(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `request_subscribe_xgov(address,address,uint64,pay)void` ABI method.
         *
         * Requests to subscribe to the xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        requestSubscribeXgov: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.requestSubscribeXgov(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `approve_subscribe_xgov(uint64)void` ABI method.
         *
         * Approves a subscribe request to xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        approveSubscribeXgov: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.approveSubscribeXgov(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `reject_subscribe_xgov(uint64)void` ABI method.
         *
         * Rejects a subscribe request to xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        rejectSubscribeXgov: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.rejectSubscribeXgov(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_voting_account(address,address)void` ABI method.
         *
         * Sets the Voting Address for the xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setVotingAccount: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setVotingAccount(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `subscribe_proposer(pay)void` ABI method.
         *
         * Subscribes the sender to being a Proposer.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        subscribeProposer: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.subscribeProposer(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `set_proposer_kyc(address,bool,uint64)void` ABI method.
         *
         * Sets a proposer's KYC status.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setProposerKyc: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setProposerKyc(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `declare_committee(byte[32],uint64,uint64)void` ABI method.
         *
         * Sets the xGov Committee in charge.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        declareCommittee: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.declareCommittee(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `open_proposal(pay)uint64` ABI method.
         *
         * Creates a new Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        openProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.openProposal(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `vote_proposal(uint64,address,uint64,uint64)void` ABI method.
         *
         * Votes on a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        voteProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.voteProposal(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `pay_grant_proposal(uint64)void` ABI method.
         *
         * Disburses the funds for an approved Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        payGrantProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.payGrantProposal(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `finalize_proposal(uint64)void` ABI method.
         *
         * Finalize a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        finalizeProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.finalizeProposal(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `drop_proposal(uint64)void` ABI method.
         *
         * Drops a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        dropProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.dropProposal(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `deposit_funds(pay)void` ABI method.
         *
         * Deposits xGov program funds into the xGov Treasury (xGov Registry Account).
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        depositFunds: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.depositFunds(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `withdraw_funds(uint64)void` ABI method.
         *
         * Remove xGov program funds from the xGov Treasury (xGov Registry Account).
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        withdrawFunds: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.withdrawFunds(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `withdraw_balance()void` ABI method.
         *
         * Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        withdrawBalance: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.withdrawBalance(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov Registry state.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getState: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.getState(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_xgov_box(address)(address,uint64,uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov box for the given address.
         *
         * @param params The params for the smart contract call
         * @returns The call result: The xGov box value
         */
        getXgovBox: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.getXgovBox(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_proposer_box(address)(bool,bool,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the Proposer box for the given address.
         *
         * @param params The params for the smart contract call
         * @returns The call result: The Proposer box value
         */
        getProposerBox: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.getProposerBox(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `is_proposal(uint64)void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        isProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.isProposal(params));
            return { ...result, return: result.return };
        },
    };
    /**
     * Clone this app client with different params
     *
     * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
     * @returns A new app client with the altered params
     */
    clone(params) {
        return new XGovRegistryClient(this.appClient.clone(params));
    }
    /**
     * Makes a readonly (simulated) call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the xGov Registry state.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getState(params = { args: [] }) {
        const result = await this.appClient.send.call(XGovRegistryParamsFactory.getState(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the XGovRegistry smart contract using the `get_xgov_box(address)(address,uint64,uint64,uint64)` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the xGov box for the given address.
     *
     * @param params The params for the smart contract call
     * @returns The call result: The xGov box value
     */
    async getXgovBox(params) {
        const result = await this.appClient.send.call(XGovRegistryParamsFactory.getXgovBox(params));
        return result.return;
    }
    /**
     * Makes a readonly (simulated) call to the XGovRegistry smart contract using the `get_proposer_box(address)(bool,bool,uint64)` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the Proposer box for the given address.
     *
     * @param params The params for the smart contract call
     * @returns The call result: The Proposer box value
     */
    async getProposerBox(params) {
        const result = await this.appClient.send.call(XGovRegistryParamsFactory.getProposerBox(params));
        return result.return;
    }
    /**
     * Methods to access state for the current XGovRegistry app
     */
    state = {
        /**
         * Methods to access global state for the current XGovRegistry app
         */
        global: {
            /**
             * Get all current keyed values from global state
             */
            getAll: async () => {
                const result = await this.appClient.state.global.getAll();
                return {
                    committeeId: new BinaryStateValue(result.committee_id),
                    committeeManager: new BinaryStateValue(result.committee_manager),
                    committeeMembers: result.committee_members,
                    committeeVotes: result.committee_votes,
                    daemonOpsFundingBps: result.daemon_ops_funding_bps,
                    discussionDurationLarge: result.discussion_duration_large,
                    discussionDurationMedium: result.discussion_duration_medium,
                    discussionDurationSmall: result.discussion_duration_small,
                    discussionDurationXlarge: result.discussion_duration_xlarge,
                    kycProvider: new BinaryStateValue(result.kyc_provider),
                    maxCommitteeSize: result.max_committee_size,
                    maxRequestedAmountLarge: result.max_requested_amount_large,
                    maxRequestedAmountMedium: result.max_requested_amount_medium,
                    maxRequestedAmountSmall: result.max_requested_amount_small,
                    minRequestedAmount: result.min_requested_amount,
                    openProposalFee: result.open_proposal_fee,
                    outstandingFunds: result.outstanding_funds,
                    pausedProposals: result.paused_proposals,
                    pausedRegistry: result.paused_registry,
                    pendingProposals: result.pending_proposals,
                    proposalCommitmentBps: result.proposal_commitment_bps,
                    proposerFee: result.proposer_fee,
                    quorumLarge: result.quorum_large,
                    quorumMedium: result.quorum_medium,
                    quorumSmall: result.quorum_small,
                    requestId: result.request_id,
                    votingDurationLarge: result.voting_duration_large,
                    votingDurationMedium: result.voting_duration_medium,
                    votingDurationSmall: result.voting_duration_small,
                    votingDurationXlarge: result.voting_duration_xlarge,
                    weightedQuorumLarge: result.weighted_quorum_large,
                    weightedQuorumMedium: result.weighted_quorum_medium,
                    weightedQuorumSmall: result.weighted_quorum_small,
                    xgovCouncil: new BinaryStateValue(result.xgov_council),
                    xgovDaemon: new BinaryStateValue(result.xgov_daemon),
                    xgovFee: result.xgov_fee,
                    xgovManager: new BinaryStateValue(result.xgov_manager),
                    xgovPayor: new BinaryStateValue(result.xgov_payor),
                    xgovSubscriber: new BinaryStateValue(result.xgov_subscriber),
                    xgovs: result.xgovs,
                };
            },
            /**
             * Get the current value of the committee_id key in global state
             */
            committeeId: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("committee_id"))); },
            /**
             * Get the current value of the committee_manager key in global state
             */
            committeeManager: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("committee_manager"))); },
            /**
             * Get the current value of the committee_members key in global state
             */
            committeeMembers: async () => { return (await this.appClient.state.global.getValue("committee_members")); },
            /**
             * Get the current value of the committee_votes key in global state
             */
            committeeVotes: async () => { return (await this.appClient.state.global.getValue("committee_votes")); },
            /**
             * Get the current value of the daemon_ops_funding_bps key in global state
             */
            daemonOpsFundingBps: async () => { return (await this.appClient.state.global.getValue("daemon_ops_funding_bps")); },
            /**
             * Get the current value of the discussion_duration_large key in global state
             */
            discussionDurationLarge: async () => { return (await this.appClient.state.global.getValue("discussion_duration_large")); },
            /**
             * Get the current value of the discussion_duration_medium key in global state
             */
            discussionDurationMedium: async () => { return (await this.appClient.state.global.getValue("discussion_duration_medium")); },
            /**
             * Get the current value of the discussion_duration_small key in global state
             */
            discussionDurationSmall: async () => { return (await this.appClient.state.global.getValue("discussion_duration_small")); },
            /**
             * Get the current value of the discussion_duration_xlarge key in global state
             */
            discussionDurationXlarge: async () => { return (await this.appClient.state.global.getValue("discussion_duration_xlarge")); },
            /**
             * Get the current value of the kyc_provider key in global state
             */
            kycProvider: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("kyc_provider"))); },
            /**
             * Get the current value of the max_committee_size key in global state
             */
            maxCommitteeSize: async () => { return (await this.appClient.state.global.getValue("max_committee_size")); },
            /**
             * Get the current value of the max_requested_amount_large key in global state
             */
            maxRequestedAmountLarge: async () => { return (await this.appClient.state.global.getValue("max_requested_amount_large")); },
            /**
             * Get the current value of the max_requested_amount_medium key in global state
             */
            maxRequestedAmountMedium: async () => { return (await this.appClient.state.global.getValue("max_requested_amount_medium")); },
            /**
             * Get the current value of the max_requested_amount_small key in global state
             */
            maxRequestedAmountSmall: async () => { return (await this.appClient.state.global.getValue("max_requested_amount_small")); },
            /**
             * Get the current value of the min_requested_amount key in global state
             */
            minRequestedAmount: async () => { return (await this.appClient.state.global.getValue("min_requested_amount")); },
            /**
             * Get the current value of the open_proposal_fee key in global state
             */
            openProposalFee: async () => { return (await this.appClient.state.global.getValue("open_proposal_fee")); },
            /**
             * Get the current value of the outstanding_funds key in global state
             */
            outstandingFunds: async () => { return (await this.appClient.state.global.getValue("outstanding_funds")); },
            /**
             * Get the current value of the paused_proposals key in global state
             */
            pausedProposals: async () => { return (await this.appClient.state.global.getValue("paused_proposals")); },
            /**
             * Get the current value of the paused_registry key in global state
             */
            pausedRegistry: async () => { return (await this.appClient.state.global.getValue("paused_registry")); },
            /**
             * Get the current value of the pending_proposals key in global state
             */
            pendingProposals: async () => { return (await this.appClient.state.global.getValue("pending_proposals")); },
            /**
             * Get the current value of the proposal_commitment_bps key in global state
             */
            proposalCommitmentBps: async () => { return (await this.appClient.state.global.getValue("proposal_commitment_bps")); },
            /**
             * Get the current value of the proposer_fee key in global state
             */
            proposerFee: async () => { return (await this.appClient.state.global.getValue("proposer_fee")); },
            /**
             * Get the current value of the quorum_large key in global state
             */
            quorumLarge: async () => { return (await this.appClient.state.global.getValue("quorum_large")); },
            /**
             * Get the current value of the quorum_medium key in global state
             */
            quorumMedium: async () => { return (await this.appClient.state.global.getValue("quorum_medium")); },
            /**
             * Get the current value of the quorum_small key in global state
             */
            quorumSmall: async () => { return (await this.appClient.state.global.getValue("quorum_small")); },
            /**
             * Get the current value of the request_id key in global state
             */
            requestId: async () => { return (await this.appClient.state.global.getValue("request_id")); },
            /**
             * Get the current value of the voting_duration_large key in global state
             */
            votingDurationLarge: async () => { return (await this.appClient.state.global.getValue("voting_duration_large")); },
            /**
             * Get the current value of the voting_duration_medium key in global state
             */
            votingDurationMedium: async () => { return (await this.appClient.state.global.getValue("voting_duration_medium")); },
            /**
             * Get the current value of the voting_duration_small key in global state
             */
            votingDurationSmall: async () => { return (await this.appClient.state.global.getValue("voting_duration_small")); },
            /**
             * Get the current value of the voting_duration_xlarge key in global state
             */
            votingDurationXlarge: async () => { return (await this.appClient.state.global.getValue("voting_duration_xlarge")); },
            /**
             * Get the current value of the weighted_quorum_large key in global state
             */
            weightedQuorumLarge: async () => { return (await this.appClient.state.global.getValue("weighted_quorum_large")); },
            /**
             * Get the current value of the weighted_quorum_medium key in global state
             */
            weightedQuorumMedium: async () => { return (await this.appClient.state.global.getValue("weighted_quorum_medium")); },
            /**
             * Get the current value of the weighted_quorum_small key in global state
             */
            weightedQuorumSmall: async () => { return (await this.appClient.state.global.getValue("weighted_quorum_small")); },
            /**
             * Get the current value of the xgov_council key in global state
             */
            xgovCouncil: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgov_council"))); },
            /**
             * Get the current value of the xgov_daemon key in global state
             */
            xgovDaemon: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgov_daemon"))); },
            /**
             * Get the current value of the xgov_fee key in global state
             */
            xgovFee: async () => { return (await this.appClient.state.global.getValue("xgov_fee")); },
            /**
             * Get the current value of the xgov_manager key in global state
             */
            xgovManager: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgov_manager"))); },
            /**
             * Get the current value of the xgov_payor key in global state
             */
            xgovPayor: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgov_payor"))); },
            /**
             * Get the current value of the xgov_subscriber key in global state
             */
            xgovSubscriber: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgov_subscriber"))); },
            /**
             * Get the current value of the xgovs key in global state
             */
            xgovs: async () => { return (await this.appClient.state.global.getValue("xgovs")); },
        },
    };
    newGroup() {
        const client = this;
        const composer = this.algorand.newGroup();
        let promiseChain = Promise.resolve();
        const resultMappers = [];
        return {
            /**
             * Add a pause_registry()void method call against the XGovRegistry contract
             */
            pauseRegistry(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.pauseRegistry(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a pause_proposals()void method call against the XGovRegistry contract
             */
            pauseProposals(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.pauseProposals(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a resume_registry()void method call against the XGovRegistry contract
             */
            resumeRegistry(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.resumeRegistry(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a resume_proposals()void method call against the XGovRegistry contract
             */
            resumeProposals(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.resumeProposals(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_xgov_manager(address)void method call against the XGovRegistry contract
             */
            setXgovManager(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setXgovManager(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_payor(address)void method call against the XGovRegistry contract
             */
            setPayor(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setPayor(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_xgov_council(address)void method call against the XGovRegistry contract
             */
            setXgovCouncil(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setXgovCouncil(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_xgov_subscriber(address)void method call against the XGovRegistry contract
             */
            setXgovSubscriber(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setXgovSubscriber(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_kyc_provider(address)void method call against the XGovRegistry contract
             */
            setKycProvider(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setKycProvider(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_committee_manager(address)void method call against the XGovRegistry contract
             */
            setCommitteeManager(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setCommitteeManager(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_xgov_daemon(address)void method call against the XGovRegistry contract
             */
            setXgovDaemon(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setXgovDaemon(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3]))void method call against the XGovRegistry contract
             */
            configXgovRegistry(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.configXgovRegistry(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a subscribe_xgov(address,pay)void method call against the XGovRegistry contract
             */
            subscribeXgov(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.subscribeXgov(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a unsubscribe_xgov(address)void method call against the XGovRegistry contract
             */
            unsubscribeXgov(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.unsubscribeXgov(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a request_subscribe_xgov(address,address,uint64,pay)void method call against the XGovRegistry contract
             */
            requestSubscribeXgov(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.requestSubscribeXgov(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a approve_subscribe_xgov(uint64)void method call against the XGovRegistry contract
             */
            approveSubscribeXgov(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.approveSubscribeXgov(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a reject_subscribe_xgov(uint64)void method call against the XGovRegistry contract
             */
            rejectSubscribeXgov(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.rejectSubscribeXgov(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_voting_account(address,address)void method call against the XGovRegistry contract
             */
            setVotingAccount(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setVotingAccount(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a subscribe_proposer(pay)void method call against the XGovRegistry contract
             */
            subscribeProposer(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.subscribeProposer(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a set_proposer_kyc(address,bool,uint64)void method call against the XGovRegistry contract
             */
            setProposerKyc(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setProposerKyc(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a declare_committee(byte[32],uint64,uint64)void method call against the XGovRegistry contract
             */
            declareCommittee(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.declareCommittee(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a open_proposal(pay)uint64 method call against the XGovRegistry contract
             */
            openProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.openProposal(params)));
                resultMappers.push((v) => client.decodeReturnValue('open_proposal(pay)uint64', v));
                return this;
            },
            /**
             * Add a vote_proposal(uint64,address,uint64,uint64)void method call against the XGovRegistry contract
             */
            voteProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.voteProposal(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a pay_grant_proposal(uint64)void method call against the XGovRegistry contract
             */
            payGrantProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.payGrantProposal(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a finalize_proposal(uint64)void method call against the XGovRegistry contract
             */
            finalizeProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.finalizeProposal(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a drop_proposal(uint64)void method call against the XGovRegistry contract
             */
            dropProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.dropProposal(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a deposit_funds(pay)void method call against the XGovRegistry contract
             */
            depositFunds(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.depositFunds(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a withdraw_funds(uint64)void method call against the XGovRegistry contract
             */
            withdrawFunds(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.withdrawFunds(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a withdraw_balance()void method call against the XGovRegistry contract
             */
            withdrawBalance(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.withdrawBalance(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64) method call against the XGovRegistry contract
             */
            getState(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getState(params)));
                resultMappers.push((v) => client.decodeReturnValue('get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)', v));
                return this;
            },
            /**
             * Add a get_xgov_box(address)(address,uint64,uint64,uint64) method call against the XGovRegistry contract
             */
            getXgovBox(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getXgovBox(params)));
                resultMappers.push((v) => client.decodeReturnValue('get_xgov_box(address)(address,uint64,uint64,uint64)', v));
                return this;
            },
            /**
             * Add a get_proposer_box(address)(bool,bool,uint64) method call against the XGovRegistry contract
             */
            getProposerBox(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getProposerBox(params)));
                resultMappers.push((v) => client.decodeReturnValue('get_proposer_box(address)(bool,bool,uint64)', v));
                return this;
            },
            /**
             * Add a is_proposal(uint64)void method call against the XGovRegistry contract
             */
            isProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.isProposal(params)));
                resultMappers.push(undefined);
                return this;
            },
            get update() {
                return {
                    updateXgovRegistry: (params) => {
                        promiseChain = promiseChain.then(async () => composer.addAppUpdateMethodCall(await client.params.update.updateXgovRegistry(params)));
                        resultMappers.push(undefined);
                        return this;
                    },
                };
            },
            /**
             * Add a clear state call to the XGovRegistry contract
             */
            clearState(params) {
                promiseChain = promiseChain.then(() => composer.addAppCall(client.params.clearState(params)));
                return this;
            },
            addTransaction(txn, signer) {
                promiseChain = promiseChain.then(() => composer.addTransaction(txn, signer));
                return this;
            },
            async composer() {
                await promiseChain;
                return composer;
            },
            async simulate(options) {
                await promiseChain;
                const result = await (!options ? composer.simulate() : composer.simulate(options));
                return {
                    ...result,
                    returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue)
                };
            },
            async send(params) {
                await promiseChain;
                const result = await composer.send(params);
                return {
                    ...result,
                    returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue)
                };
            }
        };
    }
}
