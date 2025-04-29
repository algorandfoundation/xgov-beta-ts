import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "XGovRegistry", "structs": { "XGovRegistryConfig": [{ "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "coolDownDuration", "type": "uint64" }, { "name": "staleProposalDuration", "type": "uint64" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }], "TypedGlobalState": [{ "name": "pausedRegistry", "type": "bool" }, { "name": "pausedProposals", "type": "bool" }, { "name": "xgovManager", "type": "address" }, { "name": "xgovPayor", "type": "address" }, { "name": "xgovReviewer", "type": "address" }, { "name": "xgovSubscriber", "type": "address" }, { "name": "kycProvider", "type": "address" }, { "name": "committeeManager", "type": "address" }, { "name": "committeePublisher", "type": "address" }, { "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "coolDownDuration", "type": "uint64" }, { "name": "staleProposalDuration", "type": "uint64" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }, { "name": "outstandingFunds", "type": "uint64" }, { "name": "pendingProposals", "type": "uint64" }, { "name": "committeeId", "type": "byte[32]" }, { "name": "committeeMembers", "type": "uint64" }, { "name": "committeeVotes", "type": "uint64" }] }, "methods": [{ "name": "create", "desc": "Create the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "pause_registry", "desc": "Pauses the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pause_proposals", "desc": "Pauses the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_registry", "desc": "Resumes the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_proposals", "desc": "Resumes the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_manager", "desc": "Sets the xGov Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_payor", "desc": "Sets the xGov Payor.", "args": [{ "name": "payor", "type": "address", "desc": "Address of the new xGov Payor" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_reviewer", "desc": "Sets the xGov Reviewer.", "args": [{ "name": "reviewer", "type": "address", "desc": "Address of the new xGov Reviewer" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_subscriber", "desc": "Sets the xGov Subscriber.", "args": [{ "name": "subscriber", "type": "address", "desc": "Address of the new xGov Subscriber" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_kyc_provider", "desc": "Sets the KYC provider.", "args": [{ "name": "provider", "type": "address", "desc": "Address of the new KYC Provider" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_manager", "desc": "Sets the Committee Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_publisher", "desc": "Sets the Committee Publisher.", "args": [{ "name": "publisher", "type": "address", "desc": "Address of the new Committee Publisher" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "config_xgov_registry", "desc": "Sets the configuration of the xGov Registry.", "args": [{ "name": "config", "type": "(uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3])", "desc": "Configuration class containing the field data", "struct": "XGovRegistryConfig" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "update_xgov_registry", "desc": "Updates the xGov Registry contract.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["UpdateApplication"] } }, { "name": "subscribe_xgov", "desc": "Subscribes the sender to being an xGov.", "args": [{ "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov", "desc": "Unsubscribes the designated address from being an xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov to unsubscribe" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_xgov_app", "desc": "The App Creator subscribes the App to being an xGov.", "args": [{ "name": "app_id", "type": "uint64", "desc": "The id of the application to subscribe" }, { "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov_app", "desc": "Unsubscribes the designated App from being an xGov.", "args": [{ "name": "app_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "request_subscribe_xgov", "desc": "Requests to subscribe to the xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }, { "name": "owner_address", "type": "address", "desc": "The address of the xGov Address owner/controller (Voting Address)" }, { "name": "relation_type", "type": "uint64", "desc": "The type of relationship enum" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "approve_subscribe_xgov", "desc": "Approves a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to approve" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "reject_subscribe_xgov", "desc": "Rejects a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to reject" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_voting_account", "desc": "Sets the Voting Address for the xGov.", "args": [{ "name": "xgov_address", "type": "address" }, { "name": "voting_address", "type": "address", "desc": "The voting account address to delegate voting power to" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_proposer", "desc": "Subscribes the sender to being a Proposer.", "args": [{ "name": "payment", "type": "pay", "desc": "The payment transaction covering the Proposer fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_proposer_kyc", "desc": "Sets a proposer's KYC status.", "args": [{ "name": "proposer", "type": "address", "desc": "The address of the Proposer" }, { "name": "kyc_status", "type": "bool", "desc": "The new status of the Proposer" }, { "name": "kyc_expiring", "type": "uint64", "desc": "The expiration date as a unix timestamp of the time the KYC expires" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "declare_committee", "desc": "Sets the xGov Committee in charge.", "args": [{ "name": "committee_id", "type": "byte[32]", "desc": "The ID of the xGov Committee" }, { "name": "size", "type": "uint64", "desc": "The size of the xGov Committee" }, { "name": "votes", "type": "uint64", "desc": "The voting power of the xGov Committee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "open_proposal", "desc": "Creates a new Proposal.", "args": [{ "name": "payment", "type": "pay", "desc": "payment for covering the proposal fee (includes child contract MBR)" }], "returns": { "type": "uint64" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote_proposal", "desc": "Votes on a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app being voted on" }, { "name": "xgov_address", "type": "address", "desc": "(arc4.Address): The address of the xGov being voted on behalf of" }, { "name": "approval_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of approvals votes allocated" }, { "name": "rejection_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of rejections votes allocated" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pay_grant_proposal", "desc": "Disburses the funds for an approved Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the approved Proposal" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "deposit_funds", "desc": "Deposits xGov program funds into the xGov Treasury (xGov Registry Account).", "args": [{ "name": "payment", "type": "pay", "desc": "the deposit transaction" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_funds", "desc": "Remove xGov program funds from the xGov Treasury (xGov Registry Account).", "args": [{ "name": "amount", "type": "uint64", "desc": "the amount to remove" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_state", "desc": "Returns the xGov Registry state.", "args": [], "returns": { "type": "(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)", "struct": "TypedGlobalState" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 36, "bytes": 28 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "committee_id": { "key": "Y29tbWl0dGVlX2lk", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_manager": { "key": "Y29tbWl0dGVlX21hbmFnZXI=", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_members": { "key": "Y29tbWl0dGVlX21lbWJlcnM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "committee_publisher": { "key": "Y29tbWl0dGVlX3B1Ymxpc2hlcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_votes": { "key": "Y29tbWl0dGVlX3ZvdGVz", "keyType": "AVMString", "valueType": "AVMUint64" }, "cool_down_duration": { "key": "Y29vbF9kb3duX2R1cmF0aW9u", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_large": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_medium": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0=", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_small": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_xlarge": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "kyc_provider": { "key": "a3ljX3Byb3ZpZGVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "max_requested_amount_large": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_medium": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVt", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_small": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGw=", "keyType": "AVMString", "valueType": "AVMUint64" }, "min_requested_amount": { "key": "bWluX3JlcXVlc3RlZF9hbW91bnQ=", "keyType": "AVMString", "valueType": "AVMUint64" }, "outstanding_funds": { "key": "b3V0c3RhbmRpbmdfZnVuZHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_proposals": { "key": "cGF1c2VkX3Byb3Bvc2Fscw==", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_registry": { "key": "cGF1c2VkX3JlZ2lzdHJ5", "keyType": "AVMString", "valueType": "AVMUint64" }, "pending_proposals": { "key": "cGVuZGluZ19wcm9wb3NhbHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_commitment_bps": { "key": "cHJvcG9zYWxfY29tbWl0bWVudF9icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_fee": { "key": "cHJvcG9zYWxfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_publishing_bps": { "key": "cHJvcG9zYWxfcHVibGlzaGluZ19icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposer_fee": { "key": "cHJvcG9zZXJfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_large": { "key": "cXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_medium": { "key": "cXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_small": { "key": "cXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "request_id": { "key": "cmVxdWVzdF9pZA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "stale_proposal_duration": { "key": "c3RhbGVfcHJvcG9zYWxfZHVyYXRpb24=", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_large": { "key": "dm90aW5nX2R1cmF0aW9uX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_medium": { "key": "dm90aW5nX2R1cmF0aW9uX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_small": { "key": "dm90aW5nX2R1cmF0aW9uX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_xlarge": { "key": "dm90aW5nX2R1cmF0aW9uX3hsYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_large": { "key": "d2VpZ2h0ZWRfcXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_medium": { "key": "d2VpZ2h0ZWRfcXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_small": { "key": "d2VpZ2h0ZWRfcXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_fee": { "key": "eGdvdl9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_manager": { "key": "eGdvdl9tYW5hZ2Vy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_payor": { "key": "eGdvdl9wYXlvcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_reviewer": { "key": "eGdvdl9yZXZpZXdlcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_subscriber": { "key": "eGdvdl9zdWJzY3JpYmVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgovs": { "key": "eGdvdnM=", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX19hbGdvcHlfZW50cnlwb2ludF93aXRoX2luaXQoKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMCAxIDggMTYKICAgIGJ5dGVjYmxvY2sgMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkgMHg3ODY3NmY3NjczIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MyAweDc4IDB4NzAgMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyIDB4MDAgMHgwMDAwMDAwMDAwMDAwMDAwIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMgMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUgMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIgMHg3ODY3NmY3NjVmNzA2MTc5NmY3MiAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MiAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIgMHg3ODY3NmY3NjVmNjY2NTY1IDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1IDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQgMHgxNTFmN2M3NSAweDc4Njc2Zjc2NWY3MjY1NzY2OTY1Nzc2NTcyIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIgMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1IDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMgMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUgMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1IDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQgMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUgMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NSAweDYzNmY2ZjZjNWY2NDZmNzc2ZTVmNjQ3NTcyNjE3NDY5NmY2ZSAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1IDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQgMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUgMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczIDB4NzIgMHg2ZDY5NmU1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0IDB4NzM3NDYxNmM2NTVmNzA3MjZmNzA2ZjczNjE2YzVmNjQ3NTcyNjE3NDY5NmY2ZSAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NCAweDczNzQ2MTc0NzU3MwogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGJueiBtYWluX2FmdGVyX2lmX2Vsc2VAMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDEtNDIKICAgIC8vICMgUHJlY29uZGl0aW9ucwogICAgLy8gYXNzZXJ0IFR4bi5nbG9iYWxfbnVtX2J5dGVfc2xpY2UgPT0gY2ZnLkdMT0JBTF9CWVRFUywgZXJyLldST05HX0dMT0JBTF9CWVRFUwogICAgdHhuIEdsb2JhbE51bUJ5dGVTbGljZQogICAgcHVzaGludCAyOCAvLyAyOAogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBHbG9iYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDMKICAgIC8vIGFzc2VydCBUeG4uZ2xvYmFsX251bV91aW50ID09IGNmZy5HTE9CQUxfVUlOVFMsIGVyci5XUk9OR19HTE9CQUxfVUlOVFMKICAgIHR4biBHbG9iYWxOdW1VaW50CiAgICBwdXNoaW50IDM2IC8vIDM2CiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NAogICAgLy8gYXNzZXJ0IFR4bi5sb2NhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuTE9DQUxfQllURVMsIGVyci5XUk9OR19MT0NBTF9CWVRFUwogICAgdHhuIExvY2FsTnVtQnl0ZVNsaWNlCiAgICAhCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUKICAgIC8vIGFzc2VydCBUeG4ubG9jYWxfbnVtX3VpbnQgPT0gY2ZnLkxPQ0FMX1VJTlRTLCBlcnIuV1JPTkdfTE9DQUxfVUlOVFMKICAgIHR4biBMb2NhbE51bVVpbnQKICAgICEKICAgIGFzc2VydCAvLyBXcm9uZyBMb2NhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Ny00OAogICAgLy8gIyBJbml0aWFsaXplIGdsb2JhbCBzdGF0ZSB2YXJpYWJsZXMKICAgIC8vIHNlbGYucGF1c2VkX3JlZ2lzdHJ5ID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BBVVNFRF9SRUdJU1RSWSkKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDkKICAgIC8vIHNlbGYucGF1c2VkX3Byb3Bvc2FscyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QQVVTRURfUFJPUE9TQUxTKQogICAgYnl0ZWMgOSAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxCiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX01BTkFHRVIpCiAgICBieXRlYyA2IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MwogICAgLy8gYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfU1VCU0NSSUJFUgogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTItNTQKICAgIC8vIHNlbGYueGdvdl9zdWJzY3JpYmVyID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfU1VCU0NSSUJFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1CiAgICAvLyBzZWxmLnhnb3ZfcGF5b3IgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9QQVlPUikKICAgIGJ5dGVjIDEyIC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2CiAgICAvLyBzZWxmLnhnb3ZfcmV2aWV3ZXIgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9SRVZJRVdFUikKICAgIGJ5dGVjIDE5IC8vIDB4Nzg2NzZmNzY1ZjcyNjU3NjY5NjU3NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4CiAgICAvLyBzZWxmLmt5Y19wcm92aWRlciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9LWUNfUFJPVklERVIpCiAgICBieXRlYyAxMyAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjAKICAgIC8vIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfTUFOQUdFUgogICAgYnl0ZWMgMTQgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU5LTYxCiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tYW5hZ2VyID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9NQU5BR0VSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjMKICAgIC8vIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfUFVCTElTSEVSCiAgICBieXRlYyAyMCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzA3NTYyNmM2OTczNjg2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYyLTY0CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9wdWJsaXNoZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX1BVQkxJU0hFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY2CiAgICAvLyBzZWxmLnhnb3ZfZmVlID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfRkVFKQogICAgYnl0ZWMgMTUgLy8gMHg3ODY3NmY3NjVmNjY2NTY1CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3CiAgICAvLyBzZWxmLnhnb3ZzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1hHT1ZTKQogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjgKICAgIC8vIHNlbGYucHJvcG9zZXJfZmVlID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0VSX0ZFRSkKICAgIGJ5dGVjIDE2IC8vIDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5CiAgICAvLyBzZWxmLnByb3Bvc2FsX2ZlZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9GRUUpCiAgICBieXRlYyAxMCAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX1BVQkxJU0hJTkdfQlBTCiAgICBieXRlYyAyMSAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjcwNzU2MjZjNjk3MzY4Njk2ZTY3NWY2MjcwNzMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MC03MgogICAgLy8gc2VsZi5wcm9wb3NhbF9wdWJsaXNoaW5nX2JwcyA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9QVUJMSVNISU5HX0JQUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TQUxfQ09NTUlUTUVOVF9CUFMKICAgIGJ5dGVjIDIyIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczLTc1CiAgICAvLyBzZWxmLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0NPTU1JVE1FTlRfQlBTCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzgKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NSU5fUkVRVUVTVEVEX0FNT1VOVAogICAgYnl0ZWMgNDQgLy8gMHg2ZDY5NmU1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzctNzkKICAgIC8vIHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUlOX1JFUVVFU1RFRF9BTU9VTlQKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX1NNQUxMCiAgICBieXRlYyAyMyAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MS04MwogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTUVESVVNCiAgICBieXRlYyAyNCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0LTg2CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9NRURJVU0KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX0xBUkdFCiAgICBieXRlYyAyNSAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4Ny04OQogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9MQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9TTUFMTAogICAgYnl0ZWMgMjYgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxLTkzCiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9NRURJVU0KICAgIGJ5dGVjIDI3IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0LTk2CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTgKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX0xBUkdFCiAgICBieXRlYyAyOCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTctOTkKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX0xBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9YTEFSR0UKICAgIGJ5dGVjIDI5IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMC0xMDIKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9YTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDUKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fU01BTEwKICAgIGJ5dGVjIDMwIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA0LTEwNgogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1NNQUxMCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX01FRElVTQogICAgYnl0ZWMgMzEgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNy0xMDkKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX0xBUkdFCiAgICBieXRlYyAzMiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMC0xMTIKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9MQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9YTEFSR0UKICAgIGJ5dGVjIDMzIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTMtMTE1CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1hMQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExOAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0NPT0xfRE9XTl9EVVJBVElPTgogICAgYnl0ZWMgMzQgLy8gMHg2MzZmNmY2YzVmNjQ2Zjc3NmU1ZjY0NzU3MjYxNzQ2OTZmNmUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTctMTE5CiAgICAvLyBzZWxmLmNvb2xfZG93bl9kdXJhdGlvbiA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT09MX0RPV05fRFVSQVRJT04KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjEKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9TVEFMRV9QUk9QT1NBTF9EVVJBVElPTgogICAgYnl0ZWMgNDUgLy8gMHg3Mzc0NjE2YzY1NWY3MDcyNmY3MDZmNzM2MTZjNWY2NDc1NzI2MTc0Njk2ZjZlCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIwLTEyMgogICAgLy8gc2VsZi5zdGFsZV9wcm9wb3NhbF9kdXJhdGlvbiA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9TVEFMRV9QUk9QT1NBTF9EVVJBVElPTgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNAogICAgLy8gc2VsZi5xdW9ydW1fc21hbGwgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUVVPUlVNX1NNQUxMKQogICAgYnl0ZWMgMzUgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI1CiAgICAvLyBzZWxmLnF1b3J1bV9tZWRpdW0gPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUVVPUlVNX01FRElVTSkKICAgIGJ5dGVjIDM2IC8vIDB4NzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI2CiAgICAvLyBzZWxmLnF1b3J1bV9sYXJnZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9RVU9SVU1fTEFSR0UpCiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjkKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fU01BTEwKICAgIGJ5dGVjIDM4IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI4LTEzMAogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX1NNQUxMCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTMyCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX01FRElVTQogICAgYnl0ZWMgMzkgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzMS0xMzMKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTM1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX0xBUkdFCiAgICBieXRlYyA0MCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzNC0xMzYKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9MQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzOAogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9PVVRTVEFORElOR19GVU5EUykKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE0MQogICAgLy8gc2VsZi5jb21taXR0ZWVfbWVtYmVycyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfTUVNQkVSUykKICAgIGJ5dGVjIDQxIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDIKICAgIC8vIHNlbGYuY29tbWl0dGVlX3ZvdGVzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9WT1RFUykKICAgIGJ5dGVjIDQyIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE0NAogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QRU5ESU5HX1BST1BPU0FMUykKICAgIGJ5dGVjIDUgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE0NgogICAgLy8gc2VsZi5yZXF1ZXN0X2lkID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1JFUVVFU1RfSUQpCiAgICBieXRlYyAxNyAvLyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKCm1haW5fYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIE51bUFwcEFyZ3MKICAgIGJ6IG1haW5fYWZ0ZXJfaWZfZWxzZUAzNgogICAgcHVzaGJ5dGVzcyAweDRjNWM2MWJhIDB4ODZmN2UwZTYgMHgzOWUyNmQ4YSAweDk4MzUyZTg2IDB4ZmE0ZWQ2ZTIgMHhkNmM5Y2MxYSAweDVjNDg0MDU1IDB4MTFjZjk3MjAgMHhkNDIxNmI2ZSAweGJhODUyMGYyIDB4MTY3N2IzMGUgMHhhYTM0OGQwZCAweGFlNzJjZDhjIDB4NDk1NmMxYWIgMHhhMDgyY2VmOCAweDc2NzI1NTU5IDB4ZTk1NTNmOGQgMHgwNGY5MzIyYiAweDQ1MDc3MzkwIDB4M2MzMWJjMDIgMHgwZDJjNzg5MSAweDBkYTI3ODg1IDB4N2E0ZmVlNDMgMHg1MmRkMTBkNyAweGQ0ZDM3YTY0IDB4MzQzNDlkY2MgMHgxNThmOGRkNiAweGRiMjdiOWFmIDB4ZmRjNjk1YzIgMHhiYTkwYWI1NCAweDIxYmI3ZTM2IC8vIG1ldGhvZCAiY3JlYXRlKCl2b2lkIiwgbWV0aG9kICJwYXVzZV9yZWdpc3RyeSgpdm9pZCIsIG1ldGhvZCAicGF1c2VfcHJvcG9zYWxzKCl2b2lkIiwgbWV0aG9kICJyZXN1bWVfcmVnaXN0cnkoKXZvaWQiLCBtZXRob2QgInJlc3VtZV9wcm9wb3NhbHMoKXZvaWQiLCBtZXRob2QgInNldF94Z292X21hbmFnZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfcGF5b3IoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfeGdvdl9yZXZpZXdlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF94Z292X3N1YnNjcmliZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfa3ljX3Byb3ZpZGVyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X2NvbW1pdHRlZV9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X2NvbW1pdHRlZV9wdWJsaXNoZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJjb25maWdfeGdvdl9yZWdpc3RyeSgodWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0WzNdLHVpbnQ2NFs0XSx1aW50NjRbNF0sdWludDY0LHVpbnQ2NCx1aW50NjRbM10sdWludDY0WzNdKSl2b2lkIiwgbWV0aG9kICJ1cGRhdGVfeGdvdl9yZWdpc3RyeSgpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3hnb3YoYWRkcmVzcyxwYXkpdm9pZCIsIG1ldGhvZCAidW5zdWJzY3JpYmVfeGdvdihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInN1YnNjcmliZV94Z292X2FwcCh1aW50NjQsYWRkcmVzcyxwYXkpdm9pZCIsIG1ldGhvZCAidW5zdWJzY3JpYmVfeGdvdl9hcHAodWludDY0KXZvaWQiLCBtZXRob2QgInJlcXVlc3Rfc3Vic2NyaWJlX3hnb3YoYWRkcmVzcyxhZGRyZXNzLHVpbnQ2NCxwYXkpdm9pZCIsIG1ldGhvZCAiYXBwcm92ZV9zdWJzY3JpYmVfeGdvdih1aW50NjQpdm9pZCIsIG1ldGhvZCAicmVqZWN0X3N1YnNjcmliZV94Z292KHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJzZXRfdm90aW5nX2FjY291bnQoYWRkcmVzcyxhZGRyZXNzKXZvaWQiLCBtZXRob2QgInN1YnNjcmliZV9wcm9wb3NlcihwYXkpdm9pZCIsIG1ldGhvZCAic2V0X3Byb3Bvc2VyX2t5YyhhZGRyZXNzLGJvb2wsdWludDY0KXZvaWQiLCBtZXRob2QgImRlY2xhcmVfY29tbWl0dGVlKGJ5dGVbMzJdLHVpbnQ2NCx1aW50NjQpdm9pZCIsIG1ldGhvZCAib3Blbl9wcm9wb3NhbChwYXkpdWludDY0IiwgbWV0aG9kICJ2b3RlX3Byb3Bvc2FsKHVpbnQ2NCxhZGRyZXNzLHVpbnQ2NCx1aW50NjQpdm9pZCIsIG1ldGhvZCAicGF5X2dyYW50X3Byb3Bvc2FsKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJkZXBvc2l0X2Z1bmRzKHBheSl2b2lkIiwgbWV0aG9kICJ3aXRoZHJhd19mdW5kcyh1aW50NjQpdm9pZCIsIG1ldGhvZCAiZ2V0X3N0YXRlKCkoYm9vbCxib29sLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0WzNdLHVpbnQ2NFs0XSx1aW50NjRbNF0sdWludDY0LHVpbnQ2NCx1aW50NjRbM10sdWludDY0WzNdLHVpbnQ2NCx1aW50NjQsYnl0ZVszMl0sdWludDY0LHVpbnQ2NCkiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBtYWluX2NyZWF0ZV9yb3V0ZUA1IG1haW5fcGF1c2VfcmVnaXN0cnlfcm91dGVANiBtYWluX3BhdXNlX3Byb3Bvc2Fsc19yb3V0ZUA3IG1haW5fcmVzdW1lX3JlZ2lzdHJ5X3JvdXRlQDggbWFpbl9yZXN1bWVfcHJvcG9zYWxzX3JvdXRlQDkgbWFpbl9zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDEwIG1haW5fc2V0X3BheW9yX3JvdXRlQDExIG1haW5fc2V0X3hnb3ZfcmV2aWV3ZXJfcm91dGVAMTIgbWFpbl9zZXRfeGdvdl9zdWJzY3JpYmVyX3JvdXRlQDEzIG1haW5fc2V0X2t5Y19wcm92aWRlcl9yb3V0ZUAxNCBtYWluX3NldF9jb21taXR0ZWVfbWFuYWdlcl9yb3V0ZUAxNSBtYWluX3NldF9jb21taXR0ZWVfcHVibGlzaGVyX3JvdXRlQDE2IG1haW5fY29uZmlnX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTcgbWFpbl91cGRhdGVfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxOCBtYWluX3N1YnNjcmliZV94Z292X3JvdXRlQDE5IG1haW5fdW5zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMCBtYWluX3N1YnNjcmliZV94Z292X2FwcF9yb3V0ZUAyMSBtYWluX3Vuc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDIyIG1haW5fcmVxdWVzdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMyBtYWluX2FwcHJvdmVfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjQgbWFpbl9yZWplY3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjUgbWFpbl9zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMjYgbWFpbl9zdWJzY3JpYmVfcHJvcG9zZXJfcm91dGVAMjcgbWFpbl9zZXRfcHJvcG9zZXJfa3ljX3JvdXRlQDI4IG1haW5fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjkgbWFpbl9vcGVuX3Byb3Bvc2FsX3JvdXRlQDMwIG1haW5fdm90ZV9wcm9wb3NhbF9yb3V0ZUAzMSBtYWluX3BheV9ncmFudF9wcm9wb3NhbF9yb3V0ZUAzMiBtYWluX2RlcG9zaXRfZnVuZHNfcm91dGVAMzMgbWFpbl93aXRoZHJhd19mdW5kc19yb3V0ZUAzNCBtYWluX2dldF9zdGF0ZV9yb3V0ZUAzNQoKbWFpbl9hZnRlcl9pZl9lbHNlQDM2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgaW50Y18wIC8vIDAKICAgIHJldHVybgoKbWFpbl9nZXRfc3RhdGVfcm91dGVAMzU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChyZWFkb25seT1UcnVlKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIGdldF9zdGF0ZQogICAgYnl0ZWMgMTggLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fd2l0aGRyYXdfZnVuZHNfcm91dGVAMzQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgd2l0aGRyYXdfZnVuZHMKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZGVwb3NpdF9mdW5kc19yb3V0ZUAzMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGRlcG9zaXRfZnVuZHMKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcGF5X2dyYW50X3Byb3Bvc2FsX3JvdXRlQDMyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODU2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHBheV9ncmFudF9wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl92b3RlX3Byb3Bvc2FsX3JvdXRlQDMxOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzk4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3OTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHZvdGVfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fb3Blbl9wcm9wb3NhbF9yb3V0ZUAzMDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzQzCiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIGNhbGxzdWIgb3Blbl9wcm9wb3NhbAogICAgaXRvYgogICAgYnl0ZWMgMTggLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVjbGFyZV9jb21taXR0ZWUKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3Byb3Bvc2VyX2t5Y19yb3V0ZUAyODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjkxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfcHJvcG9zZXJfa3ljCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3N1YnNjcmliZV9wcm9wb3Nlcl9yb3V0ZUAyNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY2MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NjIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV9wcm9wb3NlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMjY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3ZvdGluZ19hY2NvdW50CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3JlamVjdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyNToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjE1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZWplY3Rfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fYXBwcm92ZV9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyNDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTg5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhcHByb3ZlX3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3JlcXVlc3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZXF1ZXN0X3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3Vuc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDIyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHVuc3Vic2NyaWJlX3hnb3ZfYXBwCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3N1YnNjcmliZV94Z292X2FwcF9yb3V0ZUAyMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV94Z292X2FwcAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl91bnN1YnNjcmliZV94Z292X3JvdXRlQDIwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHVuc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDIxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzdWJzY3JpYmVfeGdvdgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl91cGRhdGVfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGFsbG93X2FjdGlvbnM9WyJVcGRhdGVBcHBsaWNhdGlvbiJdKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgcHVzaGludCA0IC8vIFVwZGF0ZUFwcGxpY2F0aW9uCiAgICA9PQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgVXBkYXRlQXBwbGljYXRpb24KICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiB1cGRhdGVfeGdvdl9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9jb25maWdfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzYzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBjb25maWdfeGdvdl9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfY29tbWl0dGVlX3B1Ymxpc2hlcl9yb3V0ZUAxNjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfY29tbWl0dGVlX21hbmFnZXJfcm91dGVAMTU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X2NvbW1pdHRlZV9tYW5hZ2VyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF9reWNfcHJvdmlkZXJfcm91dGVAMTQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxOAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X2t5Y19wcm92aWRlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfeGdvdl9zdWJzY3JpYmVyX3JvdXRlQDEzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X3N1YnNjcmliZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3hnb3ZfcmV2aWV3ZXJfcm91dGVAMTI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI4OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3ZfcmV2aWV3ZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3BheW9yX3JvdXRlQDExOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjczCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9wYXlvcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDEwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X21hbmFnZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVzdW1lX3Byb3Bvc2Fsc19yb3V0ZUA5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHJlc3VtZV9wcm9wb3NhbHMKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVzdW1lX3JlZ2lzdHJ5X3JvdXRlQDg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNDAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgcmVzdW1lX3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3BhdXNlX3Byb3Bvc2Fsc19yb3V0ZUA3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjMxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHBhdXNlX3Byb3Bvc2FscwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9wYXVzZV9yZWdpc3RyeV9yb3V0ZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjIyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHBhdXNlX3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2NyZWF0ZV9yb3V0ZUA1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoY3JlYXRlPSJyZXF1aXJlIikKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICAhCiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIGNyZWF0aW5nCiAgICBjYWxsc3ViIGNyZWF0ZQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc194Z292X21hbmFnZXIoKSAtPiB1aW50NjQ6CmlzX3hnb3ZfbWFuYWdlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2NwogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfbWFuYWdlciBleGlzdHMKICAgID09CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfeGdvdl9zdWJzY3JpYmVyKCkgLT4gdWludDY0Ogppc194Z292X3N1YnNjcmliZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzEKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IHNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlLm5hdGl2ZQogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDExIC8vIDB4Nzg2NzZmNzY1ZjczNzU2MjczNjM3MjY5NjI2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9zdWJzY3JpYmVyIGV4aXN0cwogICAgPT0KICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc19wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMpIC0+IHVpbnQ2NDoKaXNfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODEtMTgyCiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIGlzX3Byb3Bvc2FsKHNlbGYsIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg0CiAgICAvLyBBcHBsaWNhdGlvbihwcm9wb3NhbF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg1CiAgICAvLyA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg0LTE4NQogICAgLy8gQXBwbGljYXRpb24ocHJvcG9zYWxfaWQubmF0aXZlKS5jcmVhdG9yCiAgICAvLyA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTgzLTE4NgogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBBcHBsaWNhdGlvbihwcm9wb3NhbF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIC8vICAgICA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQ6IHVpbnQ2NCkgLT4gdWludDY0Ogp2YWxpZF94Z292X3BheW1lbnQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDAtMjAxCiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIHZhbGlkX3hnb3ZfcGF5bWVudChzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAzCiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAzLTIwNAogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgYnogdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA0CiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNSAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDMtMjA0CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICBieiB2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzCiAgICBpbnRjXzEgLy8gMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAyLTIwNQogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICAgICBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgLy8gKQogICAgcmV0c3ViCgp2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwMi0yMDUKICAgIC8vIHJldHVybiAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyAgICAgYW5kIHBheW1lbnQuYW1vdW50ID09IHNlbGYueGdvdl9mZWUudmFsdWUKICAgIC8vICkKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS52YWxpZF9reWMoYWRkcmVzczogYnl0ZXMpIC0+IHVpbnQ2NDoKdmFsaWRfa3ljOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA3LTIwOAogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiB2YWxpZF9reWMoc2VsZiwgYWRkcmVzczogQWNjb3VudCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjEwCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgYnl0ZWMgNCAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgZ2V0Yml0CiAgICBieXRlYyA3IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjEwLTIxMQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGJ6IHZhbGlkX2t5Y19ib29sX2ZhbHNlQDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIxMQogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICBleHRyYWN0X3VpbnQ2NAogICAgZ2xvYmFsIExhdGVzdFRpbWVzdGFtcAogICAgPgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjEwLTIxMQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGJ6IHZhbGlkX2t5Y19ib29sX2ZhbHNlQDMKICAgIGludGNfMSAvLyAxCgp2YWxpZF9reWNfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA5LTIxMgogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gICAgIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIC8vICkKICAgIHN3YXAKICAgIHJldHN1YgoKdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIHZhbGlkX2t5Y19ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuY3JlYXRlKCkgLT4gdm9pZDoKY3JlYXRlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjIwCiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IGFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgdHhuIFNlbmRlcgogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5wYXVzZV9yZWdpc3RyeSgpIC0+IHZvaWQ6CnBhdXNlX3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjI4CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIyOQogICAgLy8gc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUgPSBVSW50NjQoMSkKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGludGNfMSAvLyAxCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnBhdXNlX3Byb3Bvc2FscygpIC0+IHZvaWQ6CnBhdXNlX3Byb3Bvc2FsczoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIzNwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzgKICAgIC8vIHNlbGYucGF1c2VkX3Byb3Bvc2Fscy52YWx1ZSA9IFVJbnQ2NCgxKQogICAgYnl0ZWMgOSAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBpbnRjXzEgLy8gMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5yZXN1bWVfcmVnaXN0cnkoKSAtPiB2b2lkOgpyZXN1bWVfcmVnaXN0cnk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNDYKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ3CiAgICAvLyBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSA9IFVJbnQ2NCgwKQogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVzdW1lX3Byb3Bvc2FscygpIC0+IHZvaWQ6CnJlc3VtZV9wcm9wb3NhbHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTUKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU2CiAgICAvLyBzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUgPSBVSW50NjQoMCkKICAgIGJ5dGVjIDkgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3ZfbWFuYWdlcihtYW5hZ2VyOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3ZfbWFuYWdlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI1OC0yNTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3hnb3ZfbWFuYWdlcihzZWxmLCBtYW5hZ2VyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3MAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzEKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlID0gbWFuYWdlcgogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9wYXlvcihwYXlvcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF9wYXlvcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3My0yNzQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3BheW9yKHNlbGYsIHBheW9yOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI4NQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODYKICAgIC8vIHNlbGYueGdvdl9wYXlvci52YWx1ZSA9IHBheW9yCiAgICBieXRlYyAxMiAvLyAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3ZfcmV2aWV3ZXIocmV2aWV3ZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfeGdvdl9yZXZpZXdlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI4OC0yODkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3hnb3ZfcmV2aWV3ZXIoc2VsZiwgcmV2aWV3ZXI6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAwCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwMQogICAgLy8gc2VsZi54Z292X3Jldmlld2VyLnZhbHVlID0gcmV2aWV3ZXIKICAgIGJ5dGVjIDE5IC8vIDB4Nzg2NzZmNzY1ZjcyNjU3NjY5NjU3NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfeGdvdl9zdWJzY3JpYmVyKHN1YnNjcmliZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfeGdvdl9zdWJzY3JpYmVyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAzLTMwNAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfeGdvdl9zdWJzY3JpYmVyKHNlbGYsIHN1YnNjcmliZXI6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzE1CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxNgogICAgLy8gc2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUgPSBzdWJzY3JpYmVyCiAgICBieXRlYyAxMSAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9reWNfcHJvdmlkZXIocHJvdmlkZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfa3ljX3Byb3ZpZGVyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzE4LTMxOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfa3ljX3Byb3ZpZGVyKHNlbGYsIHByb3ZpZGVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzMAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzEKICAgIC8vIHNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlID0gcHJvdmlkZXIKICAgIGJ5dGVjIDEzIC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X2NvbW1pdHRlZV9tYW5hZ2VyKG1hbmFnZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfY29tbWl0dGVlX21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzMtMzM0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9jb21taXR0ZWVfbWFuYWdlcihzZWxmLCBtYW5hZ2VyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0NQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDYKICAgIC8vIHNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUgPSBtYW5hZ2VyCiAgICBieXRlYyAxNCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfY29tbWl0dGVlX3B1Ymxpc2hlcihwdWJsaXNoZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0OC0zNDkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2NvbW1pdHRlZV9wdWJsaXNoZXIoc2VsZiwgcHVibGlzaGVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjEKICAgIC8vIHNlbGYuY29tbWl0dGVlX3B1Ymxpc2hlci52YWx1ZSA9IHB1Ymxpc2hlcgogICAgYnl0ZWMgMjAgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjcwNzU2MjZjNjk3MzY4NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmNvbmZpZ194Z292X3JlZ2lzdHJ5KGNvbmZpZzogYnl0ZXMpIC0+IHZvaWQ6CmNvbmZpZ194Z292X3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzYzLTM2NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBjb25maWdfeGdvdl9yZWdpc3RyeShzZWxmLCBjb25maWc6IHR5cC5YR292UmVnaXN0cnlDb25maWcpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3NgogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzkKICAgIC8vIHJldHVybiBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlID09IDAKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA1IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgIQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzc3CiAgICAvLyBhc3NlcnQgc2VsZi5ub19wZW5kaW5nX3Byb3Bvc2FscygpLCBlcnIuTk9fUEVORElOR19QUk9QT1NBTFMKICAgIGFzc2VydCAvLyBDYW5ub3QgcGVyZm9ybSBvcGVyYXRpb24gd2l0aCBwZW5kaW5nIHByb3Bvc2FscwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzc5CiAgICAvLyBzZWxmLnhnb3ZfZmVlLnZhbHVlID0gY29uZmlnLnhnb3ZfZmVlLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDE1IC8vIDB4Nzg2NzZmNzY1ZjY2NjU2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM4MAogICAgLy8gc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUgPSBjb25maWcucHJvcG9zZXJfZmVlLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBpbnRjXzIgLy8gOAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDE2IC8vIDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgxCiAgICAvLyBzZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSA9IGNvbmZpZy5wcm9wb3NhbF9mZWUubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGludGNfMyAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDEwIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgyCiAgICAvLyBzZWxmLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzLnZhbHVlID0gY29uZmlnLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBwdXNoaW50IDI0IC8vIDI0CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjEgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgzCiAgICAvLyBzZWxmLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzLnZhbHVlID0gY29uZmlnLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBwdXNoaW50IDMyIC8vIDMyCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjIgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzg1CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsLnZhbHVlID0gY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDQ4IDI0IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDIzIC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM4NgogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMV0ubmF0aXZlCiAgICBkdXAKICAgIGludGNfMiAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjQgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODcKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMl0ubmF0aXZlCiAgICBpbnRjXzMgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNSAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODkKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDcyIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDI2IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTAKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18yIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNyAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTEKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzJdLm5hdGl2ZQogICAgZHVwCiAgICBpbnRjXzMgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyOCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzkyCiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bM10ubmF0aXZlCiAgICBwdXNoaW50IDI0IC8vIDI0CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk0CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMTA0IDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDMwIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk1CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzFdLm5hdGl2ZQogICAgZHVwCiAgICBpbnRjXzIgLy8gOAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDMxIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTYKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblsyXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18zIC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzIgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTcKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bM10ubmF0aXZlCiAgICBwdXNoaW50IDI0IC8vIDI0CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzMgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5OQogICAgLy8gc2VsZi5jb29sX2Rvd25fZHVyYXRpb24udmFsdWUgPSBjb25maWcuY29vbF9kb3duX2R1cmF0aW9uLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBwdXNoaW50IDEzNiAvLyAxMzYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNCAvLyAweDYzNmY2ZjZjNWY2NDZmNzc2ZTVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwMQogICAgLy8gc2VsZi5xdW9ydW1fc21hbGwudmFsdWUgPSBjb25maWcucXVvcnVtWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDE1MiAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNSAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwMgogICAgLy8gc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlID0gY29uZmlnLnF1b3J1bVsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18yIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDAzCiAgICAvLyBzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSA9IGNvbmZpZy5xdW9ydW1bMl0ubmF0aXZlCiAgICBpbnRjXzMgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwNQogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUgPSBjb25maWcud2VpZ2h0ZWRfcXVvcnVtWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDE3NiAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzOCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwNgogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlID0gY29uZmlnLndlaWdodGVkX3F1b3J1bVsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18yIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzOSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDA3CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZS52YWx1ZSA9IGNvbmZpZy53ZWlnaHRlZF9xdW9ydW1bMl0ubmF0aXZlCiAgICBpbnRjXzMgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyA0MCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS51cGRhdGVfeGdvdl9yZWdpc3RyeSgpIC0+IHZvaWQ6CnVwZGF0ZV94Z292X3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDE5CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfeGdvdih2b3RpbmdfYWRkcmVzczogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjEtNDI0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV94Z292KAogICAgLy8gICAgIHNlbGYsIHZvdGluZ19hZGRyZXNzOiBhcmM0LkFkZHJlc3MsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAyIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQzNwogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzkKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyIG5vdCBpbiBzZWxmLnhnb3ZfYm94LCBlcnIuQUxSRUFEWV9YR09WCiAgICBieXRlY18zIC8vIDB4NzgKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhbiB4R292CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDAtNDQxCiAgICAvLyAjIGNoZWNrIHBheW1lbnQKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX3hnb3ZfcGF5bWVudChwYXltZW50KSwgZXJyLklOVkFMSURfUEFZTUVOVAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIHZhbGlkX3hnb3ZfcGF5bWVudAogICAgYXNzZXJ0IC8vIEludmFsaWQgcGF5bWVudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQzLTQ0OAogICAgLy8gIyBjcmVhdGUgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W1R4bi5zZW5kZXJdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQ2CiAgICAvLyB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA4IC8vIDB4MDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQzLTQ0OAogICAgLy8gIyBjcmVhdGUgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W1R4bi5zZW5kZXJdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQ3CiAgICAvLyBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgYnl0ZWMgOCAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0My00NDgKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9dm90aW5nX2FkZHJlc3MsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0My00NDQKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICBieXRlY18zIC8vIDB4NzgKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQzLTQ0OAogICAgLy8gIyBjcmVhdGUgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W1R4bi5zZW5kZXJdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0OQogICAgLy8gc2VsZi54Z292cy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlY18xIC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS51bnN1YnNjcmliZV94Z292KHhnb3ZfYWRkcmVzczogYnl0ZXMpIC0+IHZvaWQ6CnVuc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTEtNDUyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHVuc3Vic2NyaWJlX3hnb3Yoc2VsZiwgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ2MwogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjUtNDY2CiAgICAvLyAjIGVuc3VyZSB0aGUgcHJvdmlkZWQgYWRkcmVzcyBpcyBhbiB4R292CiAgICAvLyBhc3NlcnQgeGdvdl9hZGRyZXNzLm5hdGl2ZSBpbiBzZWxmLnhnb3ZfYm94LCBlcnIuVU5BVVRIT1JJWkVECiAgICBieXRlY18zIC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBkdXBuIDIKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDY3LTQ2OAogICAgLy8gIyBnZXQgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyB2b3RpbmdfYWRkcmVzcyA9IHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0udm90aW5nX2FkZHJlc3MubmF0aXZlCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIGV4dHJhY3QgMCAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3MQogICAgLy8geGdvdl9hZGRyZXNzLm5hdGl2ZSA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIGZyYW1lX2RpZyAtMQogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJueiB1bnN1YnNjcmliZV94Z292X2Jvb2xfdHJ1ZUAyCiAgICBmcmFtZV9kaWcgMQogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJ6IHVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9mYWxzZUAzCgp1bnN1YnNjcmliZV94Z292X2Jvb2xfdHJ1ZUAyOgogICAgaW50Y18xIC8vIDEKCnVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDY5LTQ3MgogICAgLy8gIyBlbnN1cmUgdGhlIHNlbmRlciBpcyB0aGUgeEdvdiBvciB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzLm5hdGl2ZSA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIC8vICksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3NC00NzUKICAgIC8vICMgZGVsZXRlIGJveAogICAgLy8gZGVsIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0KICAgIGZyYW1lX2RpZyAwCiAgICBib3hfZGVsCiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3NgogICAgLy8gc2VsZi54Z292cy52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlY18xIC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKdW5zdWJzY3JpYmVfeGdvdl9ib29sX2ZhbHNlQDM6CiAgICBpbnRjXzAgLy8gMAogICAgYiB1bnN1YnNjcmliZV94Z292X2Jvb2xfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfeGdvdl9hcHAoYXBwX2lkOiBieXRlcywgdm90aW5nX2FkZHJlc3M6IGJ5dGVzLCBwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CnN1YnNjcmliZV94Z292X2FwcDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3OC00ODQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc3Vic2NyaWJlX3hnb3ZfYXBwKAogICAgLy8gICAgIHNlbGYsCiAgICAvLyAgICAgYXBwX2lkOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uLAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTkKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTAxCiAgICAvLyBhcHBfY3JlYXRvciA9IEFwcGxpY2F0aW9uKGFwcF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIGZyYW1lX2RpZyAtMwogICAgYnRvaQogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MDIKICAgIC8vIGFwcF9hZGRyZXNzID0gQXBwbGljYXRpb24oYXBwX2lkLm5hdGl2ZSkuYWRkcmVzcwogICAgc3dhcAogICAgYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTA0LTUwNQogICAgLy8gIyBzZW5kZXIgbXVzdCBiZSB0aGUgY3JlYXRvciBvZiB0aGUgYXBwCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSBhcHBfY3JlYXRvciwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgdW5jb3ZlciAyCiAgICA9PQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTA2LTUwNwogICAgLy8gIyBlbnN1cmUgdGhlIGFwcCBpcyBub3QgYWxyZWFkeSBhbiB4R292CiAgICAvLyBhc3NlcnQgYXBwX2FkZHJlc3Mgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjXzMgLy8gMHg3OAogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTA4LTUwOQogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxMS01MTUKICAgIC8vIHNlbGYueGdvdl9ib3hbYXBwX2FkZHJlc3NdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTEzCiAgICAvLyB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA4IC8vIDB4MDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTExLTUxNQogICAgLy8gc2VsZi54Z292X2JveFthcHBfYWRkcmVzc10gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MTQKICAgIC8vIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA4IC8vIDB4MDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTExLTUxNQogICAgLy8gc2VsZi54Z292X2JveFthcHBfYWRkcmVzc10gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgY29uY2F0CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MTYKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudW5zdWJzY3JpYmVfeGdvdl9hcHAoYXBwX2lkOiBieXRlcykgLT4gdm9pZDoKdW5zdWJzY3JpYmVfeGdvdl9hcHA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MTgtNTE5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHVuc3Vic2NyaWJlX3hnb3ZfYXBwKHNlbGYsIGFwcF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUzMAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MzIKICAgIC8vIGFwcF9jcmVhdG9yID0gQXBwbGljYXRpb24oYXBwX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBkdXAKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUzMwogICAgLy8gYXBwX2FkZHJlc3MgPSBBcHBsaWNhdGlvbihhcHBfaWQubmF0aXZlKS5hZGRyZXNzCiAgICBzd2FwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MzUtNTM2CiAgICAvLyAjIGVuc3VyZSB0aGUgcHJvdmlkZWQgYXBwIGlzIGFuIHhHb3YKICAgIC8vIGFzc2VydCBhcHBfYWRkcmVzcyBpbiBzZWxmLnhnb3ZfYm94LCBlcnIuVU5BVVRIT1JJWkVECiAgICBieXRlY18zIC8vIDB4NzgKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBjb3ZlciAyCiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTM3LTUzOAogICAgLy8gIyBnZXQgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyB2b3RpbmdfYWRkcmVzcyA9IHNlbGYueGdvdl9ib3hbYXBwX2FkZHJlc3NdLnZvdGluZ19hZGRyZXNzLm5hdGl2ZQogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBzd2FwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDEKICAgIC8vIGFwcF9jcmVhdG9yID09IFR4bi5zZW5kZXIgb3Igdm90aW5nX2FkZHJlc3MgPT0gVHhuLnNlbmRlcgogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJueiB1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX3RydWVAMgogICAgZnJhbWVfZGlnIDEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiB1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX2ZhbHNlQDMKCnVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfdHJ1ZUAyOgogICAgaW50Y18xIC8vIDEKCnVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUzOS01NDIKICAgIC8vICMgZW5zdXJlIHRoZSBzZW5kZXIgaXMgdGhlIGFwcCBjcmVhdG9yIG9yIHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBhcHBfY3JlYXRvciA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIC8vICksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0NC01NDUKICAgIC8vICMgZGVsZXRlIGJveAogICAgLy8gZGVsIHNlbGYueGdvdl9ib3hbYXBwX2FkZHJlc3NdCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2RlbAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDYKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCnVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIHVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5yZXF1ZXN0X3N1YnNjcmliZV94Z292KHhnb3ZfYWRkcmVzczogYnl0ZXMsIG93bmVyX2FkZHJlc3M6IGJ5dGVzLCByZWxhdGlvbl90eXBlOiBieXRlcywgcGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpyZXF1ZXN0X3N1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ4LTU1NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiByZXF1ZXN0X3N1YnNjcmliZV94Z292KAogICAgLy8gICAgIHNlbGYsCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU6IGFyYzQuVUludDY0LAogICAgLy8gICAgIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uLAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gNCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzAKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTcyLTU3MwogICAgLy8gIyBlbnN1cmUgdGhlIHhnb3ZfYWRkcmVzcyBpcyBub3QgYWxyZWFkeSBhbiB4R292CiAgICAvLyBhc3NlcnQgeGdvdl9hZGRyZXNzLm5hdGl2ZSBub3QgaW4gc2VsZi54Z292X2JveCwgZXJyLkFMUkVBRFlfWEdPVgogICAgYnl0ZWNfMyAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTQKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhbiB4R292CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzUtNTc2CiAgICAvLyAjIGNoZWNrIHBheW1lbnQKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX3hnb3ZfcGF5bWVudChwYXltZW50KSwgZXJyLklOVkFMSURfUEFZTUVOVAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIHZhbGlkX3hnb3ZfcGF5bWVudAogICAgYXNzZXJ0IC8vIEludmFsaWQgcGF5bWVudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTc4LTU3OQogICAgLy8gIyBjcmVhdGUgcmVxdWVzdCBib3gKICAgIC8vIHJpZCA9IHNlbGYucmVxdWVzdF9pZC52YWx1ZQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE3IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2lkIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTgwLTU4NAogICAgLy8gc2VsZi5yZXF1ZXN0X2JveFtyaWRdID0gdHlwLlhHb3ZTdWJzY3JpYmVSZXF1ZXN0Qm94VmFsdWUoCiAgICAvLyAgICAgeGdvdl9hZGRyPXhnb3ZfYWRkcmVzcywKICAgIC8vICAgICBvd25lcl9hZGRyPW93bmVyX2FkZHJlc3MsCiAgICAvLyAgICAgcmVsYXRpb25fdHlwZT1yZWxhdGlvbl90eXBlLAogICAgLy8gKQogICAgZnJhbWVfZGlnIC00CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZnJhbWVfZGlnIC0yCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4MAogICAgLy8gc2VsZi5yZXF1ZXN0X2JveFtyaWRdID0gdHlwLlhHb3ZTdWJzY3JpYmVSZXF1ZXN0Qm94VmFsdWUoCiAgICBzd2FwCiAgICBpdG9iCiAgICBieXRlYyA0MyAvLyAweDcyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4MC01ODQKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgLy8gICAgIHhnb3ZfYWRkcj14Z292X2FkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcj1vd25lcl9hZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU9cmVsYXRpb25fdHlwZSwKICAgIC8vICkKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4Ni01ODcKICAgIC8vICMgaW5jcmVtZW50IHJlcXVlc3QgaWQKICAgIC8vIHNlbGYucmVxdWVzdF9pZC52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTcgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnJlcXVlc3RfaWQgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWMgMTcgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5hcHByb3ZlX3N1YnNjcmliZV94Z292KHJlcXVlc3RfaWQ6IGJ5dGVzKSAtPiB2b2lkOgphcHByb3ZlX3N1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTg5LTU5MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBhcHByb3ZlX3N1YnNjcmliZV94Z292KHNlbGYsIHJlcXVlc3RfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDEKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3Zfc3Vic2NyaWJlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3Zfc3Vic2NyaWJlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjAzLTYwNAogICAgLy8gIyBnZXQgdGhlIHJlcXVlc3QKICAgIC8vIHJlcXVlc3QgPSBzZWxmLnJlcXVlc3RfYm94W3JlcXVlc3RfaWQubmF0aXZlXS5jb3B5KCkKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgaXRvYgogICAgYnl0ZWMgNDMgLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnJlcXVlc3RfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjA3CiAgICAvLyB2b3RpbmdfYWRkcmVzcz1yZXF1ZXN0Lm93bmVyX2FkZHIsCiAgICBkdXAKICAgIGV4dHJhY3QgMzIgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDgKICAgIC8vIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIGJ5dGVjIDggLy8gMHgwMDAwMDAwMDAwMDAwMDAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDUtNjEwCiAgICAvLyAjIGNyZWF0ZSB0aGUgeEdvdgogICAgLy8gc2VsZi54Z292X2JveFtyZXF1ZXN0Lnhnb3ZfYWRkci5uYXRpdmVdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz1yZXF1ZXN0Lm93bmVyX2FkZHIsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwOQogICAgLy8gbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIGJ5dGVjIDggLy8gMHgwMDAwMDAwMDAwMDAwMDAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDUtNjEwCiAgICAvLyAjIGNyZWF0ZSB0aGUgeEdvdgogICAgLy8gc2VsZi54Z292X2JveFtyZXF1ZXN0Lnhnb3ZfYWRkci5uYXRpdmVdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz1yZXF1ZXN0Lm93bmVyX2FkZHIsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwNS02MDYKICAgIC8vICMgY3JlYXRlIHRoZSB4R292CiAgICAvLyBzZWxmLnhnb3ZfYm94W3JlcXVlc3QueGdvdl9hZGRyLm5hdGl2ZV0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnl0ZWNfMyAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwNS02MTAKICAgIC8vICMgY3JlYXRlIHRoZSB4R292CiAgICAvLyBzZWxmLnhnb3ZfYm94W3JlcXVlc3QueGdvdl9hZGRyLm5hdGl2ZV0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXJlcXVlc3Qub3duZXJfYWRkciwKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxMQogICAgLy8gc2VsZi54Z292cy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlY18xIC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxMi02MTMKICAgIC8vICMgZGVsZXRlIHRoZSByZXF1ZXN0CiAgICAvLyBkZWwgc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0KICAgIGJveF9kZWwKICAgIHBvcAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnJlamVjdF9zdWJzY3JpYmVfeGdvdihyZXF1ZXN0X2lkOiBieXRlcykgLT4gdm9pZDoKcmVqZWN0X3N1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjE1LTYxNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiByZWplY3Rfc3Vic2NyaWJlX3hnb3Yoc2VsZiwgcmVxdWVzdF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYyNwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9zdWJzY3JpYmVyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9zdWJzY3JpYmVyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MjktNjMwCiAgICAvLyAjIGRlbGV0ZSB0aGUgcmVxdWVzdAogICAgLy8gZGVsIHNlbGYucmVxdWVzdF9ib3hbcmVxdWVzdF9pZC5uYXRpdmVdCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGl0b2IKICAgIGJ5dGVjIDQzIC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgYm94X2RlbAogICAgcG9wCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3ZvdGluZ19hY2NvdW50KHhnb3ZfYWRkcmVzczogYnl0ZXMsIHZvdGluZ19hZGRyZXNzOiBieXRlcykgLT4gdm9pZDoKc2V0X3ZvdGluZ19hY2NvdW50OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjMyLTYzNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfdm90aW5nX2FjY291bnQoCiAgICAvLyAgICAgc2VsZiwgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsIHZvdGluZ19hZGRyZXNzOiBhcmM0LkFkZHJlc3MKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjQ3CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY0OS02NTAKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHNlbmRlciBpcyBhbiB4R292IG1lbWJlcgogICAgLy8gZXhpc3RzID0geGdvdl9hZGRyZXNzLm5hdGl2ZSBpbiBzZWxmLnhnb3ZfYm94CiAgICBieXRlY18zIC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBkdXBuIDIKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjUxCiAgICAvLyBhc3NlcnQgZXhpc3RzLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NTIKICAgIC8vIHhnb3ZfYm94ID0gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5jb3B5KCkKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU2CiAgICAvLyBUeG4uc2VuZGVyID09IHhnb3ZfYm94LnZvdGluZ19hZGRyZXNzLm5hdGl2ZSBvciBUeG4uc2VuZGVyID09IHhnb3ZfYWRkcmVzcwogICAgdHhuIFNlbmRlcgogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgPT0KICAgIGJueiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDIKICAgIGZyYW1lX2RpZyAtMgogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJ6IHNldF92b3RpbmdfYWNjb3VudF9ib29sX2ZhbHNlQDMKCnNldF92b3RpbmdfYWNjb3VudF9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU0LTY1NwogICAgLy8gIyBDaGVjayB0aGF0IHRoZSBzZW5kZXIgaXMgZWl0aGVyIHRoZSB4R292IG9yIHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBUeG4uc2VuZGVyID09IHhnb3ZfYm94LnZvdGluZ19hZGRyZXNzLm5hdGl2ZSBvciBUeG4uc2VuZGVyID09IHhnb3ZfYWRkcmVzcwogICAgLy8gKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU5LTY2MAogICAgLy8gIyBVcGRhdGUgdGhlIHZvdGluZyBhY2NvdW50IGluIHRoZSB4R292IGJveAogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS52b3RpbmdfYWRkcmVzcyA9IHZvdGluZ19hZGRyZXNzCiAgICBmcmFtZV9kaWcgMAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgcmVwbGFjZTIgMAogICAgYm94X3B1dAogICAgcmV0c3ViCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIGIgc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfcHJvcG9zZXIocGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfcHJvcG9zZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NjItNjYzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV9wcm9wb3NlcihzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njc2CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3OAogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgbm90IGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuQUxSRUFEWV9QUk9QT1NFUgogICAgYnl0ZWMgNCAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYSBwcm9wb3NlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjgxCiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njc5LTY4MgogICAgLy8gIyBjaGVjayBmZWUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjgzCiAgICAvLyBhc3NlcnQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUsIGVyci5XUk9OR19QQVlNRU5UX0FNT1VOVAogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNiAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2ZlZSBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgcGF5bWVudCBhbW91bnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4NQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuUHJvcG9zZXJCb3hWYWx1ZSgKICAgIGJ5dGVjIDQgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2ODUtNjg5CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtUeG4uc2VuZGVyXSA9IHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgLy8gICAgIGFjdGl2ZV9wcm9wb3NhbD1hcmM0LkJvb2woRmFsc2UpLCAgIyBub3FhOiBGQlQwMDMKICAgIC8vICAgICBreWNfc3RhdHVzPWFyYzQuQm9vbChGYWxzZSksICAjIG5vcWE6IEZCVDAwMwogICAgLy8gICAgIGt5Y19leHBpcmluZz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIHB1c2hieXRlcyAweDAwMDAwMDAwMDAwMDAwMDAwMAogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9wcm9wb3Nlcl9reWMocHJvcG9zZXI6IGJ5dGVzLCBreWNfc3RhdHVzOiBieXRlcywga3ljX2V4cGlyaW5nOiBieXRlcykgLT4gdm9pZDoKc2V0X3Byb3Bvc2VyX2t5YzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5MS02OTQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3Byb3Bvc2VyX2t5YygKICAgIC8vICAgICBzZWxmLCBwcm9wb3NlcjogYXJjNC5BZGRyZXNzLCBreWNfc3RhdHVzOiBhcmM0LkJvb2wsIGt5Y19leHBpcmluZzogYXJjNC5VSW50NjQKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDMgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzA4LTcwOQogICAgLy8gIyBjaGVjayBpZiBreWMgcHJvdmlkZXIKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLm5hdGl2ZSwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEzIC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYua3ljX3Byb3ZpZGVyIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcxMAogICAgLy8gYXNzZXJ0IHByb3Bvc2VyLm5hdGl2ZSBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlBST1BPU0VSX0RPRVNfTk9UX0VYSVNUCiAgICBieXRlYyA0IC8vIDB4NzAKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFByb3Bvc2VyIGRvZXMgbm90IGV4aXN0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTIKICAgIC8vIGFjdGl2ZV9wcm9wb3NhbCA9IHNlbGYucHJvcG9zZXJfYm94W3Byb3Bvc2VyLm5hdGl2ZV0uY29weSgpLmFjdGl2ZV9wcm9wb3NhbAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICBieXRlYyA3IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzE0LTcxOAogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXSA9IHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgLy8gICAgIGFjdGl2ZV9wcm9wb3NhbD1hY3RpdmVfcHJvcG9zYWwsCiAgICAvLyAgICAga3ljX3N0YXR1cz1reWNfc3RhdHVzLAogICAgLy8gICAgIGt5Y19leHBpcmluZz1reWNfZXhwaXJpbmcsCiAgICAvLyApCiAgICBmcmFtZV9kaWcgLTIKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGludGNfMSAvLyAxCiAgICBzd2FwCiAgICBzZXRiaXQKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBib3hfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVjbGFyZV9jb21taXR0ZWUoY29tbWl0dGVlX2lkOiBieXRlcywgc2l6ZTogYnl0ZXMsIHZvdGVzOiBieXRlcykgLT4gdm9pZDoKZGVjbGFyZV9jb21taXR0ZWU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjAtNzIzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRlY2xhcmVfY29tbWl0dGVlKAogICAgLy8gICAgIHNlbGYsIGNvbW1pdHRlZV9pZDogY3R5cC5CeXRlczMyLCBzaXplOiBhcmM0LlVJbnQ2NCwgdm90ZXM6IGFyYzQuVUludDY0CiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAzIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3NQogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi5jb21taXR0ZWVfbWFuYWdlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfbWFuYWdlciBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MzYKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfY29tbWl0dGVlX21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM5CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9pZC52YWx1ZSA9IGNvbW1pdHRlZV9pZC5jb3B5KCkKICAgIGJ5dGVjIDQ2IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2OTY0CiAgICBmcmFtZV9kaWcgLTMKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NDAKICAgIC8vIHNlbGYuY29tbWl0dGVlX21lbWJlcnMudmFsdWUgPSBzaXplLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0yCiAgICBidG9pCiAgICBieXRlYyA0MSAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2NTZkNjI2NTcyNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NDEKICAgIC8vIHNlbGYuY29tbWl0dGVlX3ZvdGVzLnZhbHVlID0gdm90ZXMubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGJ5dGVjIDQyIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5Lm9wZW5fcHJvcG9zYWwocGF5bWVudDogdWludDY0KSAtPiB1aW50NjQ6Cm9wZW5fcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NDMtNzQ0CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIC8vIGRlZiBvcGVuX3Byb3Bvc2FsKHNlbGYsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uKSAtPiBVSW50NjQ6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc2MAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjEKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcHJvcG9zYWxzLnZhbHVlLCBlcnIuUEFVU0VEX1BST1BPU0FMUwogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDkgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9wcm9wb3NhbHMgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gQ3JlYXRpb24gb2YgcHJvcG9zYWxzIGlzIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzYzLTc2NAogICAgLy8gIyBDaGVjayBpZiB0aGUgY2FsbGVyIGlzIGEgcmVnaXN0ZXJlZCBwcm9wb3NlcgogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5VTkFVVEhPUklaRUQKICAgIGJ5dGVjIDQgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc2Ni03NjcKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnByb3Bvc2VyX2JveFsKICAgIGJ5dGVjIDQgLy8gMHg3MAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzY4CiAgICAvLyBUeG4uc2VuZGVyCiAgICB0eG4gU2VuZGVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjYtNzY5CiAgICAvLyAjIENoZWNrIGlmIHRoZSBwcm9wb3NlciBhbHJlYWR5IGhhcyBhbiBhY3RpdmUgcHJvcG9zYWwKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wcm9wb3Nlcl9ib3hbCiAgICAvLyAgICAgVHhuLnNlbmRlcgogICAgLy8gXS5hY3RpdmVfcHJvcG9zYWwsIGVyci5BTFJFQURZX0FDVElWRV9QUk9QT1NBTAogICAgY29uY2F0CiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICBieXRlYyA3IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgYnl0ZWMgNyAvLyAweDAwCiAgICA9PQogICAgYXNzZXJ0IC8vIFByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzcwCiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF9reWMoVHhuLnNlbmRlciksIGVyci5JTlZBTElEX0tZQwogICAgdHhuIFNlbmRlcgogICAgY2FsbHN1YiB2YWxpZF9reWMKICAgIGFzc2VydCAvLyBJbnZhbGlkIEtZQwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzcyCiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMyksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDMgLy8gMwogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzYKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzQtNzc3CiAgICAvLyAjIEVuc3VyZSB0aGUgdHJhbnNhY3Rpb24gaGFzIHRoZSBjb3JyZWN0IHBheW1lbnQKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzc4CiAgICAvLyBhc3NlcnQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUsIGVyci5XUk9OR19QQVlNRU5UX0FNT1VOVAogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX2ZlZSBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgcGF5bWVudCBhbW91bnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4MC03ODEKICAgIC8vICMgQ3JlYXRlIHRoZSBQcm9wb3NhbCBBcHAKICAgIC8vIHJlcyA9IGFyYzQuYXJjNF9jcmVhdGUocHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwsIFR4bi5zZW5kZXIpCiAgICBpdHhuX2JlZ2luCiAgICB0eG4gU2VuZGVyCiAgICBwdXNoaW50IDE5IC8vIDE5CiAgICBpdHhuX2ZpZWxkIEdsb2JhbE51bVVpbnQKICAgIHB1c2hpbnQgMyAvLyAzCiAgICBpdHhuX2ZpZWxkIEdsb2JhbE51bUJ5dGVTbGljZQogICAgaW50Y18xIC8vIDEKICAgIGl0eG5fZmllbGQgRXh0cmFQcm9ncmFtUGFnZXMKICAgIHB1c2hieXRlcyBiYXNlNjQoQ29FQlF3PT0pCiAgICBpdHhuX2ZpZWxkIENsZWFyU3RhdGVQcm9ncmFtUGFnZXMKICAgIHB1c2hieXRlcyBiYXNlNjQoQ2lBRkFBRUtGSkJPSmg0R2MzUmhkSFZ6QWdBQUFBaHdjbTl3YjNObGNoQm1kVzVrYVc1blgyTmhkR1ZuYjNKNUFVMFBjbVZuYVhOMGNubGZZWEJ3WDJsa0VXTnZiVzFwZEhSbFpWOXRaVzFpWlhKekVtTnZiMnhmWkc5M2JsOXpkR0Z5ZEY5MGN3eDJiM1JsY25OZlkyOTFiblFQWTI5dGJXbDBkR1ZsWDNadmRHVnpEWFp2ZEdWa1gyMWxiV0psY25NSllYQndjbTkyWVd4ekNuSmxhbVZqZEdsdmJuTU9ZWE56YVdkdVpXUmZkbTkwWlhNTmJHOWphMlZrWDJGdGIzVnVkQVZ1ZFd4c2N4UnpkV0p0YVhOemFXOXVYM1JwYldWemRHRnRjQloyYjNSbFgyOXdaVzVwYm1kZmRHbHRaWE4wWVcxd0RHTnZiVzFwZEhSbFpWOXBaQVFWSDN4MUFRQUZkR2wwYkdVV1ptbHVZV3hwZW1GMGFXOXVYM1JwYldWemRHRnRjQVZtYjJOMWN3eG1kVzVrYVc1blgzUjVjR1VRY21WeGRXVnpkR1ZrWDJGdGIzVnVkQUZXR3dBWlJWSlNPbGR5YjI1bklGQnliM0J2YzJGc0lGTjBZWFIxY3hOamIyMXRhWFIwWldWZmNIVmliR2x6YUdWeU1SaEFBR3N4TllFREVrUXhOSUVURWtReE54UkVNVFlVUkNzeUEyY25CaUpuSnhZcVp5Y1JJbWNuRnlKbkp4SWlaeWdpWnljRUltY25HQ0puSnhraVp5Y2FJbWNuRHlKbkp4TXFaeWNISW1jbkNpSm5Kd3NpWnljTUltY25EU0puSnhBaVp5Y0lJbWNuQ1NKbkp3NGlaekViUVFCcGdnNEV6R2xPcWdRZXc0VS9CSEZEbVU4RVg4Mzk3Z1FqMkxmT0JIVG1WWDRFR0VHZzBnUnpUYjdNQkNFdG53Y0VpbDVNZ0FRcXdac0ZCSnlFRTNJRUgrdVYyZ1REbzUvTU5ob0FqZzRBNXdERkFMTUFwd0NiQUlrQWJ3QmpBRklBUVFBeUFDWUFFd0FDSWtNeEdSUkVNUmhFaUFvREp4Uk1VTEFqUXpFWmdRVVNSREVZUklnSnhpY1VURkN3STBNeEdSUkVNUmhFaUFrQUkwTXhHUlJFTVJoRU5ob0JpQWh1STBNeEdSUkVNUmhFaUFnb0p4Uk1VTEFqUXpFWkZFUXhHRVEyR2dFaVU0Z0h6Q05ETVJrVVJERVlSSWdHWGlORE1Sa1VSREVZUkRZYUFUWWFBallhQTRnRTlTY1VURkN3STBNeEdSUkVNUmhFTmhvQk5ob0NpQVNBSTBNeEdSUkVNUmhFaUFOY0kwTXhHUlJFTVJoRWlBTTZJME14R1JSRU1SaEVOaG9CTmhvQ2lBTHBJME14R1JSRU1SaEVNUllqQ1VrNEVDTVNSRFlhQVRZYUFqWWFBellhQklnQmt5TkRNUmtVUkRFWUZFUTJHZ0dJQVhNalE0b0FBaUlxTWdjaUp4SmxSQWtpSndSbFRFbFBBa1FrRWtFQU9JQVZkbTkwYVc1blgyUjFjbUYwYVc5dVgzTnRZV3hzaUFDZGpBQ01BWXNBS1JOQkFBZ2lpd0NNQVl3QWlZc0Npd0VPS1l3QmpBQ0ppd01sRWtFQUlvQVdkbTkwYVc1blgyUjFjbUYwYVc5dVgyMWxaR2wxYllnQVhZd0FqQUZDLzcyQUZYWnZkR2x1WjE5a2RYSmhkR2x2Ymw5c1lYSm5aWWdBUEl3QWpBRkMvNXlJQUlwRUlpaGxSQ1FTUkltS0FRR0FGM0J5YjNCdmMyRnNYMk52YlcxcGRHMWxiblJmWW5CemlBQUtLUkpFaS84TElRUUtpWW9CQWlJbkJtVkVpLzlsS1V4QUFCaUFGQUFTUlZKU09rMXBjM05wYm1jZ1EyOXVabWxuakFHTEFJc0JUd05QQTRtS0FRRWlKd1psUkl2L1pVU0pnQTl3WVhWelpXUmZjbVZuYVhOMGNubUkvNjRwRWtRVVJJa3hBQ0lyWlVRU2lURUFKeDJJLzhwSkZZRWdFa1FTaVRJTklpY0daVVFTaVlvQ0FMR0wvN0lJaS82eUJ5T3lFQ0t5QWJPSmlnRUFJaWNQWlVTTC8weUkvOTRuRHlKbmlZb0JBRElOUkN1TC8yY25CaklOWjRtS0JRQXFpUCtJaVArZlJDSW9aVVFVUkl2OFZ3SUFqUHlML1JkSmkvNFhUSXY4RllGN0RrU0wvQ29UUkNRU1FBQUhpd0VsRWtFQStDTkVnQlJ0YVc1ZmNtVnhkV1Z6ZEdWa1gyRnRiM1Z1ZElqKy9pa1NSSUFhYldGNFgzSmxjWFZsYzNSbFpGOWhiVzkxYm5SZmJHRnlaMldJL3R3cEVrU0xBa2xQQXc5RVNVOENEa1JKaVA2Z2kvczRBQ0lyWlVRU1JJdjdPQWN5Q2hKRWkvczRDQkpFSnhhTC9HZUFHbTFoZUY5eVpYRjFaWE4wWldSZllXMXZkVzUwWDNOdFlXeHNpUDZOS1JKRWdCdHRZWGhmY21WeGRXVnpkR1ZrWDJGdGIzVnVkRjl0WldScGRXMkkvbXBNakFBcEVrUU9RUUFvSndRa1p5Y1ppd0ZuSnhxTEFrbE9BbWVML3hjbkdFeG5pUDRjSnc5TVp5Y1JNZ2RuS0NSbmlZc0Npd0FPUVFBSEp3UWxaMEwvelNjRWdTRm5Rdi9GSWtML0JZb0NBSWorVllqOTM0ditJbGxKUkl2L0p4VVRRUUFPSndXOFNJditWd0lBSndWTXY0a25CYjFFSndXOVJJc0FDQ2NGVE5PTC9sY0NBQ2NGVGdLN2lZaitHWWo5b3lJclpVU0kvbDBuQmJ4SUtJRkdaNG1LQUFBaWlQMy9pUDJKTWdjaUp4RmxSQWtpSndSbFRFbFBBa1FrRWtFQXFvQVpaR2x6WTNWemMybHZibDlrZFhKaGRHbHZibDl6YldGc2JJajlpb3dBaXdBcEVrU0xBUTVFSnhPSS9hdEpLaE5FSndlSS9YRXBFa1JKUkNjS2lQMW5LUkpFU1VRbkUwOERaeWNIVHdKbkp3cE1aeWdsWnljWE1nZG5nQXh3Y205d2IzTmhiRjltWldXSS9Uc3BFa1FuQmIxRkFVU0FGM0J5YjNCdmMyRnNYM0IxWW14cGMyaHBibWRmWW5CemlQMFdLUkpFSngySS9UOUpGWUVnRWtST0Fnc2hCQXFJL1hlSml3SWxFa0VBSklBYVpHbHpZM1Z6YzJsdmJsOWtkWEpoZEdsdmJsOXRaV1JwZFcySS9OaU1BRUwvUzRBWlpHbHpZM1Z6YzJsdmJsOWtkWEpoZEdsdmJsOXNZWEpuWllqOHRZd0FRdjhvaWdJQWlQMEtSQ0lvWlVRbEVrU0wveGNuRzR2K1VFbTlSUUVVUkVzQlJJdi9KeFZRdnlJbkNXVkVJd2duQ1V4bklpY09aVVFJSnc1TVp5SW5DV1ZFSWljSFpVUVNRUUFWSWljT1pVUWlKd3BsUkJKRUtJRVpaeWNTTWdkbmlZb0RBU0pIQWlwSEFvajhoSWo4c2tRaUtHVkVnUmtUUVFEK0p4eU1BSXNBS1JOQkFBR0ppLzRYakFPTC94ZU1CU2NiaS8xUVNZd0J2VVVCUUFCeGdCVUFFMFZTVWpwV2IzUmxjaUJ1YjNRZ1ptOTFibVNNQUlzQUtSTkJBQUdKaXdGSnZrUkpWd0FJZ0FHQVVFOENUTDhpSnd0bFJDTUlKd3RNWnlKYml3TkpUZ0lKaXdWSlRnTUpJaWNNWlVSUEFnZ25ERXhuSWljTlpVUlBBZ2duRFV4bklpY1FaVVFJSnhCTVp5bU1BSW1MQWI1TVNVNENqQUpFZ1VCVEp4VWlUd0pVSnhVVFFRQWdnQmtBRjBWU1VqcFdiM1JsY2lCaGJISmxZV1I1SUhadmRHVmtqQUJDLzIrTEFsY0FDSXNEaXdVSUZxUkJBQnVBRkFBU1JWSlNPbFp2ZEdWeklHVjRZMlZsWkdWa2pBQkMvMFVwakFCQy96K0krbVZKVGdLTUFJd0VLUk5BL3ZlTEJFQUFJb0FiQUJsRlVsSTZWbTkwYVc1bklGQmxjbWx2WkNCRmVIQnBjbVZrakFCQy90QXBqQUJDL3NxS0FBQWlLa2NEaVBzeUlpaGxSSUVaRWtTSStoY3BFa1JCQUE0aUp3dGxSQ0luQjJWRUVrRUJOU05FSWljRVpVeEpUZ0tNQVVRa0VrRUE3NEFNY1hWdmNuVnRYM050WVd4c2lQcXlqQUNMQUNrU1JDSW5CMlZFQ3lFRUNvd0NJaWNFWlV4SlRnS01BVVFrRWtFQWRvQVZkMlZwWjJoMFpXUmZjWFZ2Y25WdFgzTnRZV3hzaVBwMmpBQ0xBQ2tTUkNJbkRHVkVJaWNOWlVRSUlpY1FaVVFJakFRaUp3cGxSQXNoQkFxTUF5SW5DMlZFaXdJUFFRQWJpd1NMQXc5QkFCTWlKd3hsUkNJbkRXVkVEVUVBQlNpQkhtZUpLSUVvWnlJclpVU0krcXduQ0RJSFo0bUxBU1VTUVFBZ2dCWjNaV2xuYUhSbFpGOXhkVzl5ZFcxZmJXVmthWFZ0aVBuNGpBQkMvMytBRlhkbGFXZG9kR1ZrWDNGMWIzSjFiVjlzWVhKblpZajUyWXdBUXY5Z2l3RWxFa0VBRjRBTmNYVnZjblZ0WDIxbFpHbDFiWWo1dTR3QVF2OEdnQXh4ZFc5eWRXMWZiR0Z5WjJXSSthV01BRUwrOENKQy9zaUtBUUF4QUlBTmVHZHZkbDl5WlhacFpYZGxjb2o1dGtrVmdTQVNSQkpFSWlobFJJRWVFa1NMLzBFQUZTaUJQR2NpSndabFJISUlSSWo1N1NjSU1nZG5pU2lCTFdlSmlnQUJJb2o1dmtRaUtHVkVnUzBUUVFBaUp4eU1BSXNBS1JOQkFBU0xBRXlKS0lFeVp5SXJaVVNJK2JZbkNESUhaeWxNaVNtTUFFTC8zSW9CQUNJcVNZajVjMFFpS0dWRWdUSVNRQUFVSWlobFJJRThFa0FBQ2lJb1pVU0JLQkpCQUZjalJJdi9JbG1NQVNLTUFvc0Npd0VNUVFCRGkvOVhBZ0NMQW9FZ0M0RWdXQ2NiVEZCSmpBQzlSUUZCQUNBaUp3bGxSQ01KSndsTVp5SW5EbVZFaXdCSlRnSytSQ0piQ1NjT1RHZThTSXNDSXdpTUFrTC90WWtpUXYrbWlnQUFLb2o0OGtRaUtHVkVRUUFuSWlobFJDUVNRQUFlSWlobFJJRXlFa0FBRkNJb1pVU0JQQkpBQUFvaUtHVkVnU2dTUVFCN0kwUWlLR1ZFUVFBK0lpaGxSQ1FUUVFBMWdCSmpiMjlzWDJSdmQyNWZaSFZ5WVhScGIyNkkrRHBNakFBcEVrUWlKd2hsUkVFQVFESUhJaWNJWlVTTEFBZ1BRUUF5STBRaUp3bGxSQlJFSndXOFNDSW9aVVFrRWtFQUJ5SXJaVVNJK0kwaUp3WmxSSElJUkRJS2N3QkVpUGhwS0lGR1o0a2lRdi9MSWtML2dvb0FBU0tJK0V4RUlpaGxSSUZHRTBFQUVpY2NqQUNMQUNrVFFRQUVpd0JNaVNsTWlTbU1BRUwvN0NJclpVUWlKd1psUkJZaUp4WmxSRWtWRmxjR0FreFFJaWNSWlVRV0lpY1haVVFXSWljU1pVUVdJaWhsUkJZaUp3UmxSQllpSnhobFJCWkprNEVJRGtSWEJ3RWlKeGxsUkJZaUp4cGxSQllpSnc5bFJCWWlKeE5sUkNJbkIyVkVGaUluQ21WRUZpSW5DMlZFRmlJbkRHVkVGaUluRFdWRUZpSW5FR1ZFRmlJbkNHVkVGazhUVHhOUWdBSUF3MUJQRVZCUEVGQlBEMUJQRGxCUERWQlBERkJQQzFCUENsQlBDVkJQQ0ZCUEIxQlBCbEJQQlZCUEJGQlBBMUJQQWxCTVVFeFFpUT09KQogICAgaXR4bl9maWVsZCBBcHByb3ZhbFByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIDB4Y2M2OTRlYWEgLy8gbWV0aG9kICJjcmVhdGUoYWRkcmVzcyl2b2lkIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBDcmVhdGVkQXBwbGljYXRpb25JRAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzgzLTc4NAogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIgc3RhdGUKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbChUcnVlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjIDQgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBpbnRjXzEgLy8gMQogICAgc2V0Yml0CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODYtNzkxCiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9cmVzLmNyZWF0ZWRfYXBwLmFkZHJlc3MsCiAgICAvLyAgICAgYW1vdW50PXNlbGYucHJvcG9zYWxfZmVlLnZhbHVlIC0gcGNmZy5QUk9QT1NBTF9NQlIsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODgKICAgIC8vIHJlY2VpdmVyPXJlcy5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODkKICAgIC8vIGFtb3VudD1zZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSAtIHBjZmcuUFJPUE9TQUxfTUJSLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEwIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfZmVlIGV4aXN0cwogICAgcHVzaGludCA4OTE1MDAgLy8gODkxNTAwCiAgICAtCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg2LTc4NwogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzkwCiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg2LTc5MQogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXJlcy5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgLy8gICAgIGFtb3VudD1zZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSAtIHBjZmcuUFJPUE9TQUxfTUJSLAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5My03OTQKICAgIC8vICMgSW5jcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzCiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA1IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjIDUgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzk2CiAgICAvLyByZXR1cm4gcmVzLmNyZWF0ZWRfYXBwLmlkCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudm90ZV9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMsIHhnb3ZfYWRkcmVzczogYnl0ZXMsIGFwcHJvdmFsX3ZvdGVzOiBieXRlcywgcmVqZWN0aW9uX3ZvdGVzOiBieXRlcykgLT4gdm9pZDoKdm90ZV9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5OC04MDUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgdm90ZV9wcm9wb3NhbCgKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICBhcHByb3ZhbF92b3RlczogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgcmVqZWN0aW9uX3ZvdGVzOiBhcmM0LlVJbnQ2NCwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODIyCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNC04MjUKICAgIC8vICMgdmVyaWZ5IHByb3Bvc2FsIGlkIGlzIGdlbnVpbmUgcHJvcG9zYWwKICAgIC8vIGFzc2VydCBzZWxmLmlzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkKSwgZXJyLklOVkFMSURfUFJPUE9TQUwKICAgIGZyYW1lX2RpZyAtNAogICAgY2FsbHN1YiBpc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyOQogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGZyYW1lX2RpZyAtNAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI3LTgzMAogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSB2b3Rpbmcgc3RhdGUKICAgIC8vIHN0YXR1cywgc3RhdHVzX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyOQogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGJ5dGVjIDQ3IC8vIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MjctODMwCiAgICAvLyAjIFZlcmlmeSB0aGUgcHJvcG9zYWwgaXMgaW4gdGhlIHZvdGluZyBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzMQogICAgLy8gYXNzZXJ0IHN0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfVk9USU5HKSwgZXJyLlBST1BPU0FMX0lTX05PVF9WT1RJTkcKICAgIHB1c2hpbnQgMjUgLy8gMjUKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgaXMgbm90IGluIHZvdGluZyBwaGFzZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMzLTgzNAogICAgLy8gIyBtYWtlIHN1cmUgdGhleSdyZSB2b3Rpbmcgb24gYmVoYWxmIG9mIGFuIHhHb3YKICAgIC8vIGV4aXN0cyA9IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveAogICAgYnl0ZWNfMyAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzNQogICAgLy8gYXNzZXJ0IGV4aXN0cywgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM2CiAgICAvLyB4Z292X2JveCA9IHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0uY29weSgpCiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM4CiAgICAvLyB4Z292X2JveC52b3RlZF9wcm9wb3NhbHMubmF0aXZlICsgVUludDY0KDEpCiAgICBkdXAKICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgIGV4dHJhY3RfdWludDY0CiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM3LTgzOQogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS52b3RlZF9wcm9wb3NhbHMgPSBhcmM0LlVJbnQ2NCgKICAgIC8vICAgICB4Z292X2JveC52b3RlZF9wcm9wb3NhbHMubmF0aXZlICsgVUludDY0KDEpCiAgICAvLyApCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzcKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0udm90ZWRfcHJvcG9zYWxzID0gYXJjNC5VSW50NjQoCiAgICBkaWcgMgogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzctODM5CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLnZvdGVkX3Byb3Bvc2FscyA9IGFyYzQuVUludDY0KAogICAgLy8gICAgIHhnb3ZfYm94LnZvdGVkX3Byb3Bvc2Fscy5uYXRpdmUgKyBVSW50NjQoMSkKICAgIC8vICkKICAgIHN3YXAKICAgIHJlcGxhY2UyIDMyCiAgICBkaWcgMgogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQxCiAgICAvLyBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgZ2xvYmFsIExhdGVzdFRpbWVzdGFtcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQwLTg0MgogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5sYXN0X3ZvdGVfdGltZXN0YW1wID0gYXJjNC5VSW50NjQoCiAgICAvLyAgICAgR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIC8vICkKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0MAogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5sYXN0X3ZvdGVfdGltZXN0YW1wID0gYXJjNC5VSW50NjQoCiAgICBkaWcgMgogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NDAtODQyCiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLmxhc3Rfdm90ZV90aW1lc3RhbXAgPSBhcmM0LlVJbnQ2NCgKICAgIC8vICAgICBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgLy8gKQogICAgc3dhcAogICAgcmVwbGFjZTIgNDAKICAgIHVuY292ZXIgMgogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQ0LTg0NQogICAgLy8gIyBWZXJpZnkgdGhlIGNhbGxlciBpcyB1c2luZyB0aGVpciB2b3RpbmcgYWRkcmVzcwogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgPT0geGdvdl9ib3gudm90aW5nX2FkZHJlc3MubmF0aXZlLCBlcnIuTVVTVF9CRV9WT1RJTkdfQUREUkVTUwogICAgdHhuIFNlbmRlcgogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgPT0KICAgIGFzc2VydCAvLyBNdXN0IGJlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NDctODU0CiAgICAvLyAjIENhbGwgdGhlIFByb3Bvc2FsIEFwcCB0byByZWdpc3RlciB0aGUgdm90ZQogICAgLy8gYXJjNC5hYmlfY2FsbCgKICAgIC8vICAgICBwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbC52b3RlLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcywKICAgIC8vICAgICBhcHByb3ZhbF92b3RlcywKICAgIC8vICAgICByZWplY3Rpb25fdm90ZXMsCiAgICAvLyAgICAgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZSwKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4MTg0MWEwZDIgLy8gbWV0aG9kICJ2b3RlKGFkZHJlc3MsdWludDY0LHVpbnQ2NClzdHJpbmciCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0zCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0yCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0xCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZXh0cmFjdCAwIDQKICAgIGJ5dGVjIDE4IC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gbG9nIHZhbHVlIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGFuIEFCSSByZXR1cm4KICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5wYXlfZ3JhbnRfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB2b2lkOgpwYXlfZ3JhbnRfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTYtODU3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHBheV9ncmFudF9wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3My04NzQKICAgIC8vICMgVmVyaWZ5IHRoZSBjYWxsZXIgaXMgdGhlIHhHb3YgUGF5b3IKICAgIC8vIGFzc2VydCBhcmM0LkFkZHJlc3MoVHhuLnNlbmRlcikgPT0gc2VsZi54Z292X3BheW9yLnZhbHVlLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTIgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfcGF5b3IgZXhpc3RzCiAgICA9PQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODc2LTg3NwogICAgLy8gIyBWZXJpZnkgcHJvcG9zYWxfaWQgaXMgYSBnZW51aW5lIHByb3Bvc2FsIGNyZWF0ZWQgYnkgdGhpcyByZWdpc3RyeQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfcHJvcG9zYWwocHJvcG9zYWxfaWQpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIGlzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgxCiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzktODgyCiAgICAvLyAjIFJlYWQgcHJvcG9zYWwgc3RhdGUgZGlyZWN0bHkgZnJvbSB0aGUgUHJvcG9zYWwgQXBwJ3MgZ2xvYmFsIHN0YXRlCiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgLy8gKQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODEKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICBieXRlYyA0NyAvLyAweDczNzQ2MTc0NzU3MwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODc5LTg4MgogICAgLy8gIyBSZWFkIHByb3Bvc2FsIHN0YXRlIGRpcmVjdGx5IGZyb20gdGhlIFByb3Bvc2FsIEFwcCdzIGdsb2JhbCBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIHN3YXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4My04ODUKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg0CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICBwdXNoYnl0ZXMgMHg3MDcyNmY3MDZmNzM2NTcyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODMtODg1CiAgICAvLyBwcm9wb3Nlcl9ieXRlcywgcHJvcG9zZXJfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF9ieXRlcygKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODYKICAgIC8vIHByb3Bvc2VyID0gYXJjNC5BZGRyZXNzKHByb3Bvc2VyX2J5dGVzKQogICAgZHVwCiAgICBsZW4KICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4Ny04ODkKICAgIC8vIHJlcXVlc3RlZF9hbW91bnQsIHJlcXVlc3RlZF9hbW91bnRfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBkaWcgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg4CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1JFUVVFU1RFRF9BTU9VTlQKICAgIHB1c2hieXRlcyAweDcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODctODg5CiAgICAvLyByZXF1ZXN0ZWRfYW1vdW50LCByZXF1ZXN0ZWRfYW1vdW50X2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgY292ZXIgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkwLTg5MgogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSBhcHByb3ZlZCBzdGF0ZQogICAgLy8gIyBUT0RPOiBTd2l0Y2ggdG8gU1RBVFVTX01JTEVTVE9ORQogICAgLy8gYXNzZXJ0IHN0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfQVBQUk9WRUQpLCBlcnIuUFJPUE9TQUxfSVNfTk9UX0FQUFJPVkVECiAgICB1bmNvdmVyIDMKICAgIHB1c2hpbnQgMzAgLy8gMzAKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgaXMgbm90IGFwcHJvdmVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTQKICAgIC8vIGFzc2VydCBwcm9wb3Nlci5uYXRpdmUgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5XUk9OR19QUk9QT1NFUgogICAgYnl0ZWMgNCAvLyAweDcwCiAgICBkaWcgMQogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFdyb25nIHByb3Bvc2VyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTYKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX2t5Yyhwcm9wb3Nlci5uYXRpdmUpLCBlcnIuSU5WQUxJRF9LWUMKICAgIGRpZyAxCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDAKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgPj0gcmVxdWVzdGVkX2Ftb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBkaWcgNAogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5OC05MDEKICAgIC8vICMgVmVyaWZ5IHN1ZmZpY2llbnQgZnVuZHMgYXJlIGF2YWlsYWJsZQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlID49IHJlcXVlc3RlZF9hbW91bnQKICAgIC8vICksIGVyci5JTlNVRkZJQ0lFTlRfVFJFQVNVUllfRlVORFMKICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgdHJlYXN1cnkgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5MC0xOTUKICAgIC8vICMgVHJhbnNmZXIgdGhlIGZ1bmRzIHRvIHRoZSByZWNlaXZlcgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgZGlnIDMKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICBzd2FwCiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTAtMTkxCiAgICAvLyAjIFRyYW5zZmVyIHRoZSBmdW5kcyB0byB0aGUgcmVjZWl2ZXIKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIGludGNfMSAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5NAogICAgLy8gZmVlPTAsCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5MC0xOTUKICAgIC8vICMgVHJhbnNmZXIgdGhlIGZ1bmRzIHRvIHRoZSByZWNlaXZlcgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5Ny0xOTgKICAgIC8vICMgVXBkYXRlIHRoZSBvdXRzdGFuZGluZyBmdW5kcwogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSAtPSBhbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgdW5jb3ZlciAzCiAgICAtCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwNQogICAgLy8gYXJjNC5hYmlfY2FsbChwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbC5mdW5kLCBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlKQogICAgaXR4bl9iZWdpbgogICAgc3dhcAogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHg4YTVlNGM4MCAvLyBtZXRob2QgImZ1bmQoKXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgMTggLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBsb2cgdmFsdWUgaXMgbm90IHRoZSByZXN1bHQgb2YgYW4gQUJJIHJldHVybgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTA3LTkwOQogICAgLy8gIyBEZWNyZW1lbnQgcGVuZGluZyBwcm9wb3NhbHMgY291bnQKICAgIC8vICMgVE9ETzogbWlnaHQgaGFwcGVuIG9uIGRlY29tbWlzc2lvbiBhcyB3ZWxsCiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlIC09IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA1IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGJ5dGVjIDUgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTExLTkxMgogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbCgKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTExLTkxNAogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbCgKICAgIC8vICAgICBGYWxzZSAgIyBub3FhOiBGQlQwMDMKICAgIC8vICkKICAgIGludGNfMCAvLyAwCiAgICBkdXAKICAgIHNldGJpdAogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmRlcG9zaXRfZnVuZHMocGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpkZXBvc2l0X2Z1bmRzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTE2LTkxNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBkZXBvc2l0X2Z1bmRzKHNlbGYsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjkKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjgtOTMwCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gKSwgZXJyLldST05HX1JFQ0VJVkVSCiAgICBhc3NlcnQgLy8gV3JvbmcgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMQogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSArPSBwYXltZW50LmFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgKwogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkud2l0aGRyYXdfZnVuZHMoYW1vdW50OiB1aW50NjQpIC0+IHZvaWQ6CndpdGhkcmF3X2Z1bmRzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTMzLTkzNAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB3aXRoZHJhd19mdW5kcyhzZWxmLCBhbW91bnQ6IFVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQ3CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0OAogICAgLy8gYXNzZXJ0IGFtb3VudCA8PSBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlLCBlcnIuSU5TVUZGSUNJRU5UX0ZVTkRTCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0OQogICAgLy8gYXNzZXJ0IFR4bi5mZWUgPj0gKEdsb2JhbC5taW5fdHhuX2ZlZSAqIDIpLCBlcnIuSU5TVUZGSUNJRU5UX0ZFRQogICAgdHhuIEZlZQogICAgZ2xvYmFsIE1pblR4bkZlZQogICAgcHVzaGludCAyIC8vIDIKICAgICoKICAgID49CiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IGZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTUwCiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlIC09IGFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIC0KICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTUyLTk1NgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTUzCiAgICAvLyByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfbWFuYWdlciBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIGl0eG5fZmllbGQgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1MgogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTU1CiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTUyLTk1NgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5nZXRfc3RhdGUoKSAtPiBieXRlczoKZ2V0X3N0YXRlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY1CiAgICAvLyBwYXVzZWRfcmVnaXN0cnk9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUpKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgYnl0ZWMgNyAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2NgogICAgLy8gcGF1c2VkX3Byb3Bvc2Fscz1hcmM0LkJvb2woYm9vbChzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUpKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA5IC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcHJvcG9zYWxzIGV4aXN0cwogICAgYnl0ZWMgNyAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2NwogICAgLy8geGdvdl9tYW5hZ2VyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NjgKICAgIC8vIHhnb3ZfcGF5b3I9c2VsZi54Z292X3BheW9yLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEyIC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3BheW9yIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY5CiAgICAvLyB4Z292X3Jldmlld2VyPXNlbGYueGdvdl9yZXZpZXdlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxOSAvLyAweDc4Njc2Zjc2NWY3MjY1NzY2OTY1Nzc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9yZXZpZXdlciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3MAogICAgLy8geGdvdl9zdWJzY3JpYmVyPXNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDExIC8vIDB4Nzg2NzZmNzY1ZjczNzU2MjczNjM3MjY5NjI2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9zdWJzY3JpYmVyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTcxCiAgICAvLyBreWNfcHJvdmlkZXI9c2VsZi5reWNfcHJvdmlkZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTMgLy8gMHg2Yjc5NjM1ZjcwNzI2Zjc2Njk2NDY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5reWNfcHJvdmlkZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzIKICAgIC8vIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTQgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzMKICAgIC8vIGNvbW1pdHRlZV9wdWJsaXNoZXI9c2VsZi5jb21taXR0ZWVfcHVibGlzaGVyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIwIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfcHVibGlzaGVyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTc0CiAgICAvLyB4Z292X2ZlZT1hcmM0LlVJbnQ2NChzZWxmLnhnb3ZfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNSAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3NQogICAgLy8gcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNiAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3NgogICAgLy8gcHJvcG9zYWxfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3NwogICAgLy8gcHJvcG9zYWxfcHVibGlzaGluZ19icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9wdWJsaXNoaW5nX2Jwcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjEgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzgKICAgIC8vIHByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIyIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTc5CiAgICAvLyBtaW5fcmVxdWVzdGVkX2Ftb3VudD1hcmM0LlVJbnQ2NChzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50LnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0NCAvLyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4MQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjMgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODIKICAgIC8vIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4MwogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjUgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODAtOTg0CiAgICAvLyBtYXhfcmVxdWVzdGVkX2Ftb3VudD1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlLnZhbHVlKSwKICAgIC8vICksCiAgICBjb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTg2CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI2IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTg3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNyAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4OAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyOCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4OQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODUtOTkwCiAgICAvLyBkaXNjdXNzaW9uX2R1cmF0aW9uPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFs0XV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIHVuY292ZXIgMwogICAgdW5jb3ZlciAzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk5MgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMwIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTkzCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMxIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTk0CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzIgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTUKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzMgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTEtOTk2CiAgICAvLyB2b3RpbmdfZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIC8vICksCiAgICB1bmNvdmVyIDMKICAgIHVuY292ZXIgMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTcKICAgIC8vIGNvb2xfZG93bl9kdXJhdGlvbj1hcmM0LlVJbnQ2NChzZWxmLmNvb2xfZG93bl9kdXJhdGlvbi52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzQgLy8gMHg2MzZmNmY2YzVmNjQ2Zjc3NmU1ZjY0NzU3MjYxNzQ2OTZmNmUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb29sX2Rvd25fZHVyYXRpb24gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTgKICAgIC8vIHN0YWxlX3Byb3Bvc2FsX2R1cmF0aW9uPWFyYzQuVUludDY0KHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQ1IC8vIDB4NzM3NDYxNmM2NTVmNzA3MjZmNzA2ZjczNjE2YzVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnN0YWxlX3Byb3Bvc2FsX2R1cmF0aW9uIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwMAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM1IC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwMQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMDIKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk5OS0xMDAzCiAgICAvLyBxdW9ydW09YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMDUKICAgIC8vIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzOCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMDYKICAgIC8vIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzkgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDA3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDAgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDA0LTEwMDgKICAgIC8vIHdlaWdodGVkX3F1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICksCiAgICBjb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwOQogICAgLy8gb3V0c3RhbmRpbmdfZnVuZHM9YXJjNC5VSW50NjQoc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMTAKICAgIC8vIHBlbmRpbmdfcHJvcG9zYWxzPWFyYzQuVUludDY0KHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDExCiAgICAvLyBjb21taXR0ZWVfaWQ9c2VsZi5jb21taXR0ZWVfaWQudmFsdWUuY29weSgpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQ2IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2OTY0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX2lkIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxMgogICAgLy8gY29tbWl0dGVlX21lbWJlcnM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfbWVtYmVycy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDEgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21lbWJlcnMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDEzCiAgICAvLyBjb21taXR0ZWVfdm90ZXM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQyIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX3ZvdGVzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY0LTEwMTQKICAgIC8vIHJldHVybiB0eXAuVHlwZWRHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBwYXVzZWRfcmVnaXN0cnk9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUpKSwKICAgIC8vICAgICBwYXVzZWRfcHJvcG9zYWxzPWFyYzQuQm9vbChib29sKHNlbGYucGF1c2VkX3Byb3Bvc2Fscy52YWx1ZSkpLAogICAgLy8gICAgIHhnb3ZfbWFuYWdlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIC8vICAgICB4Z292X3Jldmlld2VyPXNlbGYueGdvdl9yZXZpZXdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3N1YnNjcmliZXI9c2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUsCiAgICAvLyAgICAga3ljX3Byb3ZpZGVyPXNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLAogICAgLy8gICAgIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICAvLyAgICAgY29tbWl0dGVlX3B1Ymxpc2hlcj1zZWxmLmNvbW1pdHRlZV9wdWJsaXNoZXIudmFsdWUsCiAgICAvLyAgICAgeGdvdl9mZWU9YXJjNC5VSW50NjQoc2VsZi54Z292X2ZlZS52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIC8vICAgICBwcm9wb3NhbF9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUpLAogICAgLy8gICAgIG1pbl9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuVUludDY0KHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUpLAogICAgLy8gICAgIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgZGlzY3Vzc2lvbl9kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICB2b3RpbmdfZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICBjb29sX2Rvd25fZHVyYXRpb249YXJjNC5VSW50NjQoc2VsZi5jb29sX2Rvd25fZHVyYXRpb24udmFsdWUpLAogICAgLy8gICAgIHN0YWxlX3Byb3Bvc2FsX2R1cmF0aW9uPWFyYzQuVUludDY0KHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24udmFsdWUpLAogICAgLy8gICAgIHF1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIHdlaWdodGVkX3F1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIG91dHN0YW5kaW5nX2Z1bmRzPWFyYzQuVUludDY0KHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUpLAogICAgLy8gICAgIHBlbmRpbmdfcHJvcG9zYWxzPWFyYzQuVUludDY0KHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUpLAogICAgLy8gICAgIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICAvLyAgICAgY29tbWl0dGVlX21lbWJlcnM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfbWVtYmVycy52YWx1ZSksCiAgICAvLyAgICAgY29tbWl0dGVlX3ZvdGVzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX3ZvdGVzLnZhbHVlKSwKICAgIC8vICkKICAgIHVuY292ZXIgMjUKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIHVuY292ZXIgMjYKICAgIGludGNfMSAvLyAxCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgdW5jb3ZlciAyNQogICAgY29uY2F0CiAgICB1bmNvdmVyIDI0CiAgICBjb25jYXQKICAgIHVuY292ZXIgMjMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyMgogICAgY29uY2F0CiAgICB1bmNvdmVyIDIxCiAgICBjb25jYXQKICAgIHVuY292ZXIgMjAKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxOQogICAgY29uY2F0CiAgICB1bmNvdmVyIDE4CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTcKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNgogICAgY29uY2F0CiAgICB1bmNvdmVyIDE1CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTQKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDEyCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTEKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMAogICAgY29uY2F0CiAgICB1bmNvdmVyIDkKICAgIGNvbmNhdAogICAgdW5jb3ZlciA4CiAgICBjb25jYXQKICAgIHVuY292ZXIgNwogICAgY29uY2F0CiAgICB1bmNvdmVyIDYKICAgIGNvbmNhdAogICAgdW5jb3ZlciA1CiAgICBjb25jYXQKICAgIHVuY292ZXIgNAogICAgY29uY2F0CiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgcmV0c3ViCg==", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
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
     * Constructs a no op call for the set_xgov_reviewer(address)void ABI method
     *
     * Sets the xGov Reviewer.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setXgovReviewer(params) {
        return {
            ...params,
            method: 'set_xgov_reviewer(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.reviewer],
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
     * Constructs a no op call for the set_committee_publisher(address)void ABI method
     *
     * Sets the Committee Publisher.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static setCommitteePublisher(params) {
        return {
            ...params,
            method: 'set_committee_publisher(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.publisher],
        };
    }
    /**
     * Constructs a no op call for the config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3]))void ABI method
     *
     * Sets the configuration of the xGov Registry.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static configXgovRegistry(params) {
        return {
            ...params,
            method: 'config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3]))void',
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
     * Constructs a no op call for the subscribe_xgov_app(uint64,address,pay)void ABI method
     *
     * The App Creator subscribes the App to being an xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static subscribeXgovApp(params) {
        return {
            ...params,
            method: 'subscribe_xgov_app(uint64,address,pay)void',
            args: Array.isArray(params.args) ? params.args : [params.args.appId, params.args.votingAddress, params.args.payment],
        };
    }
    /**
     * Constructs a no op call for the unsubscribe_xgov_app(uint64)void ABI method
     *
     * Unsubscribes the designated App from being an xGov.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static unsubscribeXgovApp(params) {
        return {
            ...params,
            method: 'unsubscribe_xgov_app(uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.appId],
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
     * Constructs a no op call for the get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64) ABI method
     *
     * Returns the xGov Registry state.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getState(params) {
        return {
            ...params,
            method: 'get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)',
            args: Array.isArray(params.args) ? params.args : [],
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
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_reviewer(address)void` ABI method.
         *
         * Sets the xGov Reviewer.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setXgovReviewer: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setXgovReviewer(params));
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
         * Makes a call to the XGovRegistry smart contract using the `set_committee_publisher(address)void` ABI method.
         *
         * Sets the Committee Publisher.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        setCommitteePublisher: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.setCommitteePublisher(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3]))void` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `subscribe_xgov_app(uint64,address,pay)void` ABI method.
         *
         * The App Creator subscribes the App to being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        subscribeXgovApp: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.subscribeXgovApp(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `unsubscribe_xgov_app(uint64)void` ABI method.
         *
         * Unsubscribes the designated App from being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        unsubscribeXgovApp: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.unsubscribeXgovApp(params));
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
         * Makes a call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_reviewer(address)void` ABI method.
         *
         * Sets the xGov Reviewer.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setXgovReviewer: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setXgovReviewer(params));
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
         * Makes a call to the XGovRegistry smart contract using the `set_committee_publisher(address)void` ABI method.
         *
         * Sets the Committee Publisher.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        setCommitteePublisher: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.setCommitteePublisher(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3]))void` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `subscribe_xgov_app(uint64,address,pay)void` ABI method.
         *
         * The App Creator subscribes the App to being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        subscribeXgovApp: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.subscribeXgovApp(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `unsubscribe_xgov_app(uint64)void` ABI method.
         *
         * Unsubscribes the designated App from being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        unsubscribeXgovApp: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.unsubscribeXgovApp(params));
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
         * Makes a call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `set_xgov_reviewer(address)void` ABI method.
         *
         * Sets the xGov Reviewer.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setXgovReviewer: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setXgovReviewer(params));
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
         * Makes a call to the XGovRegistry smart contract using the `set_committee_publisher(address)void` ABI method.
         *
         * Sets the Committee Publisher.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        setCommitteePublisher: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.setCommitteePublisher(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3]))void` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `subscribe_xgov_app(uint64,address,pay)void` ABI method.
         *
         * The App Creator subscribes the App to being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        subscribeXgovApp: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.subscribeXgovApp(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `unsubscribe_xgov_app(uint64)void` ABI method.
         *
         * Unsubscribes the designated App from being an xGov.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        unsubscribeXgovApp: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.unsubscribeXgovApp(params));
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
         * Makes a call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
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
     * Makes a readonly (simulated) call to the XGovRegistry smart contract using the `get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
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
                    committeePublisher: new BinaryStateValue(result.committee_publisher),
                    committeeVotes: result.committee_votes,
                    coolDownDuration: result.cool_down_duration,
                    discussionDurationLarge: result.discussion_duration_large,
                    discussionDurationMedium: result.discussion_duration_medium,
                    discussionDurationSmall: result.discussion_duration_small,
                    discussionDurationXlarge: result.discussion_duration_xlarge,
                    kycProvider: new BinaryStateValue(result.kyc_provider),
                    maxRequestedAmountLarge: result.max_requested_amount_large,
                    maxRequestedAmountMedium: result.max_requested_amount_medium,
                    maxRequestedAmountSmall: result.max_requested_amount_small,
                    minRequestedAmount: result.min_requested_amount,
                    outstandingFunds: result.outstanding_funds,
                    pausedProposals: result.paused_proposals,
                    pausedRegistry: result.paused_registry,
                    pendingProposals: result.pending_proposals,
                    proposalCommitmentBps: result.proposal_commitment_bps,
                    proposalFee: result.proposal_fee,
                    proposalPublishingBps: result.proposal_publishing_bps,
                    proposerFee: result.proposer_fee,
                    quorumLarge: result.quorum_large,
                    quorumMedium: result.quorum_medium,
                    quorumSmall: result.quorum_small,
                    requestId: result.request_id,
                    staleProposalDuration: result.stale_proposal_duration,
                    votingDurationLarge: result.voting_duration_large,
                    votingDurationMedium: result.voting_duration_medium,
                    votingDurationSmall: result.voting_duration_small,
                    votingDurationXlarge: result.voting_duration_xlarge,
                    weightedQuorumLarge: result.weighted_quorum_large,
                    weightedQuorumMedium: result.weighted_quorum_medium,
                    weightedQuorumSmall: result.weighted_quorum_small,
                    xgovFee: result.xgov_fee,
                    xgovManager: new BinaryStateValue(result.xgov_manager),
                    xgovPayor: new BinaryStateValue(result.xgov_payor),
                    xgovReviewer: new BinaryStateValue(result.xgov_reviewer),
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
             * Get the current value of the committee_publisher key in global state
             */
            committeePublisher: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("committee_publisher"))); },
            /**
             * Get the current value of the committee_votes key in global state
             */
            committeeVotes: async () => { return (await this.appClient.state.global.getValue("committee_votes")); },
            /**
             * Get the current value of the cool_down_duration key in global state
             */
            coolDownDuration: async () => { return (await this.appClient.state.global.getValue("cool_down_duration")); },
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
             * Get the current value of the proposal_fee key in global state
             */
            proposalFee: async () => { return (await this.appClient.state.global.getValue("proposal_fee")); },
            /**
             * Get the current value of the proposal_publishing_bps key in global state
             */
            proposalPublishingBps: async () => { return (await this.appClient.state.global.getValue("proposal_publishing_bps")); },
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
             * Get the current value of the stale_proposal_duration key in global state
             */
            staleProposalDuration: async () => { return (await this.appClient.state.global.getValue("stale_proposal_duration")); },
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
             * Get the current value of the xgov_reviewer key in global state
             */
            xgovReviewer: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgov_reviewer"))); },
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
             * Add a set_xgov_reviewer(address)void method call against the XGovRegistry contract
             */
            setXgovReviewer(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setXgovReviewer(params)));
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
             * Add a set_committee_publisher(address)void method call against the XGovRegistry contract
             */
            setCommitteePublisher(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.setCommitteePublisher(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a config_xgov_registry((uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3]))void method call against the XGovRegistry contract
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
             * Add a subscribe_xgov_app(uint64,address,pay)void method call against the XGovRegistry contract
             */
            subscribeXgovApp(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.subscribeXgovApp(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a unsubscribe_xgov_app(uint64)void method call against the XGovRegistry contract
             */
            unsubscribeXgovApp(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.unsubscribeXgovApp(params)));
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
             * Add a get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64) method call against the XGovRegistry contract
             */
            getState(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getState(params)));
                resultMappers.push((v) => client.decodeReturnValue('get_state()(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)', v));
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
