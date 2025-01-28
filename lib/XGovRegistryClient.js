import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "XGovRegistry", "structs": { "XGovRegistryConfig": [{ "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "coolDownDuration", "type": "uint64" }, { "name": "staleProposalDuration", "type": "uint64" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }], "TypedGlobalState": [{ "name": "xgovManager", "type": "address" }, { "name": "xgovPayor", "type": "address" }, { "name": "xgovReviewer", "type": "address" }, { "name": "xgovSubscriber", "type": "address" }, { "name": "kycProvider", "type": "address" }, { "name": "committeeManager", "type": "address" }, { "name": "committeePublisher", "type": "address" }, { "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "coolDownDuration", "type": "uint64" }, { "name": "staleProposalDuration", "type": "uint64" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }, { "name": "outstandingFunds", "type": "uint64" }, { "name": "pendingProposals", "type": "uint64" }, { "name": "committeeId", "type": "byte[36]" }, { "name": "committeeMembers", "type": "uint64" }, { "name": "committeeVotes", "type": "uint64" }] }, "methods": [{ "name": "create", "desc": "Create the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "set_xgov_manager", "desc": "Sets the xGov Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_payor", "desc": "Sets the xGov Payor.", "args": [{ "name": "payor", "type": "address", "desc": "Address of the new xGov Payor" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_reviewer", "desc": "Sets the xGov Reviewer.", "args": [{ "name": "reviewer", "type": "address", "desc": "Address of the new xGov Reviewer" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_subscriber", "desc": "Sets the xGov Subscriber.", "args": [{ "name": "subscriber", "type": "address", "desc": "Address of the new xGov Subscriber" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_kyc_provider", "desc": "Sets the KYC provider.", "args": [{ "name": "provider", "type": "address", "desc": "Address of the new KYC Provider" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_manager", "desc": "Sets the Committee Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_publisher", "desc": "Sets the Committee Publisher.", "args": [{ "name": "publisher", "type": "address", "desc": "Address of the new Committee Publisher" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "config_xgov_registry", "desc": "Sets the configuration of the xGov Registry.", "args": [{ "name": "config", "type": "(uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3])", "desc": "Configuration class containing the field data", "struct": "XGovRegistryConfig" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "update_xgov_registry", "desc": "Updates the xGov Registry contract.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["UpdateApplication"] } }, { "name": "subscribe_xgov", "desc": "Subscribes the sender to being an xGov.", "args": [{ "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov", "desc": "Unsubscribes the designated address from being an xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov to unsubscribe" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_xgov_app", "desc": "The App Creator subscribes the App to being an xGov.", "args": [{ "name": "app_id", "type": "uint64", "desc": "The id of the application to subscribe" }, { "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov_app", "desc": "Unsubscribes the designated App from being an xGov.", "args": [{ "name": "app_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "request_subscribe_xgov", "desc": "Requests to subscribe to the xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }, { "name": "owner_address", "type": "address", "desc": "The address of the xGov Address owner/controller (Voting Address)" }, { "name": "relation_type", "type": "uint64", "desc": "The type of relationship enum" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "approve_subscribe_xgov", "desc": "Approves a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to approve" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "reject_subscribe_xgov", "desc": "Rejects a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to reject" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_voting_account", "desc": "Sets the Voting Address for the xGov.", "args": [{ "name": "xgov_address", "type": "address" }, { "name": "voting_address", "type": "address", "desc": "The voting account address to delegate voting power to" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_proposer", "desc": "Subscribes the sender to being a Proposer.", "args": [{ "name": "payment", "type": "pay", "desc": "The payment transaction covering the Proposer fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_proposer_kyc", "desc": "Sets a proposer's KYC status.", "args": [{ "name": "proposer", "type": "address", "desc": "The address of the Proposer" }, { "name": "kyc_status", "type": "bool", "desc": "The new status of the Proposer" }, { "name": "kyc_expiring", "type": "uint64", "desc": "The expiration date as a unix timestamp of the time the KYC expires" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "declare_committee", "desc": "Sets the xGov Committee in charge.", "args": [{ "name": "cid", "type": "byte[36]" }, { "name": "size", "type": "uint64", "desc": "The size of the xGov Committee" }, { "name": "votes", "type": "uint64", "desc": "The voting power of the xGov Committee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "open_proposal", "desc": "Creates a new Proposal.", "args": [{ "name": "payment", "type": "pay", "desc": "payment for covering the proposal fee (includes child contract MBR)" }], "returns": { "type": "uint64" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote_proposal", "desc": "Votes on a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app being voted on" }, { "name": "xgov_address", "type": "address", "desc": "(arc4.Address): The address of the xGov being voted on behalf of" }, { "name": "approval_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of approvals votes allocated" }, { "name": "rejection_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of rejections votes allocated" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pay_grant_proposal", "desc": "Disburses the funds for an approved Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the approved Proposal" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "deposit_funds", "desc": "Deposits xGov program funds into the xGov Treasury (xGov Registry Account).", "args": [{ "name": "payment", "type": "pay", "desc": "the deposit transaction" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_funds", "desc": "Remove xGov program funds from the xGov Treasury (xGov Registry Account).", "args": [{ "name": "amount", "type": "uint64", "desc": "the amount to remove" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_state", "desc": "Returns the xGov Registry state.", "args": [], "returns": { "type": "(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)", "struct": "TypedGlobalState" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 31, "bytes": 8 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "committee_id": { "key": "Y29tbWl0dGVlX2lk", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_manager": { "key": "Y29tbWl0dGVlX21hbmFnZXI=", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_members": { "key": "Y29tbWl0dGVlX21lbWJlcnM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "committee_publisher": { "key": "Y29tbWl0dGVlX3B1Ymxpc2hlcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_votes": { "key": "Y29tbWl0dGVlX3ZvdGVz", "keyType": "AVMString", "valueType": "AVMUint64" }, "cool_down_duration": { "key": "Y29vbF9kb3duX2R1cmF0aW9u", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_large": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_medium": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0=", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_small": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_xlarge": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "kyc_provider": { "key": "a3ljX3Byb3ZpZGVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "max_requested_amount_large": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_medium": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVt", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_small": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGw=", "keyType": "AVMString", "valueType": "AVMUint64" }, "min_requested_amount": { "key": "bWluX3JlcXVlc3RlZF9hbW91bnQ=", "keyType": "AVMString", "valueType": "AVMUint64" }, "outstanding_funds": { "key": "b3V0c3RhbmRpbmdfZnVuZHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "pending_proposals": { "key": "cGVuZGluZ19wcm9wb3NhbHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_commitment_bps": { "key": "cHJvcG9zYWxfY29tbWl0bWVudF9icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_fee": { "key": "cHJvcG9zYWxfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_publishing_bps": { "key": "cHJvcG9zYWxfcHVibGlzaGluZ19icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposer_fee": { "key": "cHJvcG9zZXJfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_large": { "key": "cXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_medium": { "key": "cXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_small": { "key": "cXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "request_id": { "key": "cmVxdWVzdF9pZA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "stale_proposal_duration": { "key": "c3RhbGVfcHJvcG9zYWxfZHVyYXRpb24=", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_large": { "key": "dm90aW5nX2R1cmF0aW9uX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_medium": { "key": "dm90aW5nX2R1cmF0aW9uX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_small": { "key": "dm90aW5nX2R1cmF0aW9uX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_xlarge": { "key": "dm90aW5nX2R1cmF0aW9uX3hsYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_large": { "key": "d2VpZ2h0ZWRfcXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_medium": { "key": "d2VpZ2h0ZWRfcXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_small": { "key": "d2VpZ2h0ZWRfcXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_fee": { "key": "eGdvdl9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_manager": { "key": "eGdvdl9tYW5hZ2Vy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_payor": { "key": "eGdvdl9wYXlvcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_reviewer": { "key": "eGdvdl9yZXZpZXdlcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_subscriber": { "key": "eGdvdl9zdWJzY3JpYmVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgovs": { "key": "eGdvdnM=", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuYXBwcm92YWxfcHJvZ3JhbToKICAgIGludGNibG9jayAwIDEgNiAzMgogICAgYnl0ZWNibG9jayAweDc4Njc2Zjc2NzMgMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczIDB4NzggMHg3MCAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMgMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIgMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUgMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIgMHg3ODY3NmY3NjVmNzA2MTc5NmY3MiAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MiAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIgMHg3ODY3NmY3NjVmNjY2NTY1IDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1IDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQgMHgwMCAweDc4Njc2Zjc2NWY3MjY1NzY2OTY1Nzc2NTcyIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIgMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1IDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMgMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUgMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1IDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQgMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUgMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NSAweDYzNmY2ZjZjNWY2NDZmNzc2ZTVmNjQ3NTcyNjE3NDY5NmY2ZSAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1IDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQgMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUgMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczIDB4MTUxZjdjNzUgMHg3MiAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQgMHg3Mzc0NjE2YzY1NWY3MDcyNmY3MDZmNzM2MTZjNWY2NDc1NzI2MTc0Njk2ZjZlIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2OTY0IDB4NzM3NDYxNzQ3NTczCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYm56IG1haW5fYWZ0ZXJfaWZfZWxzZUAyCiAgICBjYWxsc3ViIF9faW5pdF9fCgptYWluX2FmdGVyX2lmX2Vsc2VAMjoKICAgIGNhbGxzdWIgX19wdXlhX2FyYzRfcm91dGVyX18KICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5fX2luaXRfXygpIC0+IHZvaWQ6Cl9faW5pdF9fOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzkKICAgIC8vIGRlZiBfX2luaXRfXyhzZWxmKSAtPiBOb25lOgogICAgcHJvdG8gMCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MC00MQogICAgLy8gIyBQcmVjb25kaXRpb25zCiAgICAvLyBhc3NlcnQgVHhuLmdsb2JhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuR0xPQkFMX0JZVEVTLCBlcnIuV1JPTkdfR0xPQkFMX0JZVEVTCiAgICB0eG4gR2xvYmFsTnVtQnl0ZVNsaWNlCiAgICBwdXNoaW50IDggLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBHbG9iYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDIKICAgIC8vIGFzc2VydCBUeG4uZ2xvYmFsX251bV91aW50ID09IGNmZy5HTE9CQUxfVUlOVFMsIGVyci5XUk9OR19HTE9CQUxfVUlOVFMKICAgIHR4biBHbG9iYWxOdW1VaW50CiAgICBwdXNoaW50IDMxIC8vIDMxCiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MwogICAgLy8gYXNzZXJ0IFR4bi5sb2NhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuTE9DQUxfQllURVMsIGVyci5XUk9OR19MT0NBTF9CWVRFUwogICAgdHhuIExvY2FsTnVtQnl0ZVNsaWNlCiAgICAhCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQKICAgIC8vIGFzc2VydCBUeG4ubG9jYWxfbnVtX3VpbnQgPT0gY2ZnLkxPQ0FMX1VJTlRTLCBlcnIuV1JPTkdfTE9DQUxfVUlOVFMKICAgIHR4biBMb2NhbE51bVVpbnQKICAgICEKICAgIGFzc2VydCAvLyBXcm9uZyBMb2NhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Ni00NwogICAgLy8gIyBJbml0aWFsaXplIGdsb2JhbCBzdGF0ZSB2YXJpYWJsZXMKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfTUFOQUdFUikKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ5CiAgICAvLyBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICBieXRlYyA3IC8vIDB4Nzg2NzZmNzY1ZjczNzU2MjczNjM3MjY5NjI2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ4LTUwCiAgICAvLyBzZWxmLnhnb3Zfc3Vic2NyaWJlciA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX1NVQlNDUklCRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MQogICAgLy8gc2VsZi54Z292X3BheW9yID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfUEFZT1IpCiAgICBieXRlYyA4IC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUyCiAgICAvLyBzZWxmLnhnb3ZfcmV2aWV3ZXIgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9SRVZJRVdFUikKICAgIGJ5dGVjIDE1IC8vIDB4Nzg2NzZmNzY1ZjcyNjU3NjY5NjU3NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0CiAgICAvLyBzZWxmLmt5Y19wcm92aWRlciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9LWUNfUFJPVklERVIpCiAgICBieXRlYyA5IC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NgogICAgLy8gYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9NQU5BR0VSCiAgICBieXRlYyAxMCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTUtNTcKICAgIC8vIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01BTkFHRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OQogICAgLy8gYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9QVUJMSVNIRVIKICAgIGJ5dGVjIDE2IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTgtNjAKICAgIC8vIHNlbGYuY29tbWl0dGVlX3B1Ymxpc2hlciA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfUFVCTElTSEVSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjIKICAgIC8vIHNlbGYueGdvdl9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9GRUUpCiAgICBieXRlYyAxMSAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjMKICAgIC8vIHNlbGYueGdvdnMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfWEdPVlMpCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NAogICAgLy8gc2VsZi5wcm9wb3Nlcl9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TRVJfRkVFKQogICAgYnl0ZWMgMTIgLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjUKICAgIC8vIHNlbGYucHJvcG9zYWxfZmVlID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0ZFRSkKICAgIGJ5dGVjIDYgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjcKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9QVUJMSVNISU5HX0JQUwogICAgYnl0ZWMgMTcgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjYtNjgKICAgIC8vIHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TQUxfUFVCTElTSElOR19CUFMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0NPTU1JVE1FTlRfQlBTCiAgICBieXRlYyAxOCAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OS03MQogICAgLy8gc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2JwcyA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9DT01NSVRNRU5UX0JQUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUlOX1JFUVVFU1RFRF9BTU9VTlQKICAgIGJ5dGVjIDQxIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczLTc1CiAgICAvLyBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50ID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01JTl9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzgKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9TTUFMTAogICAgYnl0ZWMgMTkgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzctNzkKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX01FRElVTQogICAgYnl0ZWMgMjAgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MC04MgogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9MQVJHRQogICAgYnl0ZWMgMjEgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMtODUKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIGJ5dGVjIDIyIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4Ny04OQogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTUVESVVNCiAgICBieXRlYyAyMyAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MC05MgogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9MQVJHRQogICAgYnl0ZWMgMjQgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzLTk1CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9MQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9YTEFSR0UKICAgIGJ5dGVjIDI1IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2LTk4CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fWExBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1NNQUxMCiAgICBieXRlYyAyNiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMC0xMDIKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9NRURJVU0KICAgIGJ5dGVjIDI3IC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDMtMTA1CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9MQVJHRQogICAgYnl0ZWMgMjggLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDYtMTA4CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fWExBUkdFCiAgICBieXRlYyAyOSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5LTExMQogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9YTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTQKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT09MX0RPV05fRFVSQVRJT04KICAgIGJ5dGVjIDMwIC8vIDB4NjM2ZjZmNmM1ZjY0NmY3NzZlNWY2NDc1NzI2MTc0Njk2ZjZlCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEzLTExNQogICAgLy8gc2VsZi5jb29sX2Rvd25fZHVyYXRpb24gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09PTF9ET1dOX0RVUkFUSU9OCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE3CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfU1RBTEVfUFJPUE9TQUxfRFVSQVRJT04KICAgIGJ5dGVjIDQyIC8vIDB4NzM3NDYxNmM2NTVmNzA3MjZmNzA2ZjczNjE2YzVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNi0xMTgKICAgIC8vIHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfU1RBTEVfUFJPUE9TQUxfRFVSQVRJT04KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjAKICAgIC8vIHNlbGYucXVvcnVtX3NtYWxsID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9TTUFMTCkKICAgIGJ5dGVjIDMxIC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMQogICAgLy8gc2VsZi5xdW9ydW1fbWVkaXVtID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9NRURJVU0pCiAgICBieXRlYyAzMiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMgogICAgLy8gc2VsZi5xdW9ydW1fbGFyZ2UgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUVVPUlVNX0xBUkdFKQogICAgYnl0ZWMgMzMgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX1NNQUxMCiAgICBieXRlYyAzNCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNC0xMjYKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyOAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9NRURJVU0KICAgIGJ5dGVjIDM1IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjctMTI5CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzMQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9MQVJHRQogICAgYnl0ZWMgMzYgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzAtMTMyCiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzQKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfT1VUU1RBTkRJTkdfRlVORFMpCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzcKICAgIC8vIHNlbGYuY29tbWl0dGVlX21lbWJlcnMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01FTUJFUlMpCiAgICBieXRlYyAzNyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2NTZkNjI2NTcyNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTM4CiAgICAvLyBzZWxmLmNvbW1pdHRlZV92b3RlcyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfVk9URVMpCiAgICBieXRlYyAzOCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDAKICAgIC8vIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUEVORElOR19QUk9QT1NBTFMpCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDIKICAgIC8vIHNlbGYucmVxdWVzdF9pZCA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9SRVFVRVNUX0lEKQogICAgYnl0ZWMgMTMgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX19wdXlhX2FyYzRfcm91dGVyX18oKSAtPiB1aW50NjQ6Cl9fcHV5YV9hcmM0X3JvdXRlcl9fOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgcHJvdG8gMCAxCiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogX19wdXlhX2FyYzRfcm91dGVyX19fYWZ0ZXJfaWZfZWxzZUAzMgogICAgcHVzaGJ5dGVzcyAweDRjNWM2MWJhIDB4ZDZjOWNjMWEgMHg1YzQ4NDA1NSAweDExY2Y5NzIwIDB4ZDQyMTZiNmUgMHhiYTg1MjBmMiAweDE2NzdiMzBlIDB4YWEzNDhkMGQgMHhhZTcyY2Q4YyAweDQ5NTZjMWFiIDB4YTA4MmNlZjggMHg3NjcyNTU1OSAweGU5NTUzZjhkIDB4MDRmOTMyMmIgMHg0NTA3NzM5MCAweDNjMzFiYzAyIDB4MGQyYzc4OTEgMHgwZGEyNzg4NSAweDdhNGZlZTQzIDB4NTJkZDEwZDcgMHgyZjRlZjQzNCAweDM0MzQ5ZGNjIDB4MTU4ZjhkZDYgMHhkYjI3YjlhZiAweGZkYzY5NWMyIDB4YmE5MGFiNTQgMHgwNzY0ZGU5NyAvLyBtZXRob2QgImNyZWF0ZSgpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfbWFuYWdlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF9wYXlvcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF94Z292X3Jldmlld2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3Zfc3Vic2NyaWJlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF9reWNfcHJvdmlkZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfY29tbWl0dGVlX21hbmFnZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgImNvbmZpZ194Z292X3JlZ2lzdHJ5KCh1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjRbM10sdWludDY0WzRdLHVpbnQ2NFs0XSx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbM10pKXZvaWQiLCBtZXRob2QgInVwZGF0ZV94Z292X3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJzdWJzY3JpYmVfeGdvdihhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292KGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3hnb3ZfYXBwKHVpbnQ2NCxhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292X2FwcCh1aW50NjQpdm9pZCIsIG1ldGhvZCAicmVxdWVzdF9zdWJzY3JpYmVfeGdvdihhZGRyZXNzLGFkZHJlc3MsdWludDY0LHBheSl2b2lkIiwgbWV0aG9kICJhcHByb3ZlX3N1YnNjcmliZV94Z292KHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZWplY3Rfc3Vic2NyaWJlX3hnb3YodWludDY0KXZvaWQiLCBtZXRob2QgInNldF92b3RpbmdfYWNjb3VudChhZGRyZXNzLGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3Byb3Bvc2VyKHBheSl2b2lkIiwgbWV0aG9kICJzZXRfcHJvcG9zZXJfa3ljKGFkZHJlc3MsYm9vbCx1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVjbGFyZV9jb21taXR0ZWUoYnl0ZVszNl0sdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJvcGVuX3Byb3Bvc2FsKHBheSl1aW50NjQiLCBtZXRob2QgInZvdGVfcHJvcG9zYWwodWludDY0LGFkZHJlc3MsdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJwYXlfZ3JhbnRfcHJvcG9zYWwodWludDY0KXZvaWQiLCBtZXRob2QgImRlcG9zaXRfZnVuZHMocGF5KXZvaWQiLCBtZXRob2QgIndpdGhkcmF3X2Z1bmRzKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJnZXRfc3RhdGUoKShhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbNF0sdWludDY0WzRdLHVpbnQ2NCx1aW50NjQsdWludDY0WzNdLHVpbnQ2NFszXSx1aW50NjQsdWludDY0LGJ5dGVbMzZdLHVpbnQ2NCx1aW50NjQpIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggX19wdXlhX2FyYzRfcm91dGVyX19fY3JlYXRlX3JvdXRlQDIgX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3hnb3ZfbWFuYWdlcl9yb3V0ZUAzIF9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9wYXlvcl9yb3V0ZUA0IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF94Z292X3Jldmlld2VyX3JvdXRlQDUgX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3hnb3Zfc3Vic2NyaWJlcl9yb3V0ZUA2IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9reWNfcHJvdmlkZXJfcm91dGVANyBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfY29tbWl0dGVlX21hbmFnZXJfcm91dGVAOCBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfY29tbWl0dGVlX3B1Ymxpc2hlcl9yb3V0ZUA5IF9fcHV5YV9hcmM0X3JvdXRlcl9fX2NvbmZpZ194Z292X3JlZ2lzdHJ5X3JvdXRlQDEwIF9fcHV5YV9hcmM0X3JvdXRlcl9fX3VwZGF0ZV94Z292X3JlZ2lzdHJ5X3JvdXRlQDExIF9fcHV5YV9hcmM0X3JvdXRlcl9fX3N1YnNjcmliZV94Z292X3JvdXRlQDEyIF9fcHV5YV9hcmM0X3JvdXRlcl9fX3Vuc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTMgX19wdXlhX2FyYzRfcm91dGVyX19fc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDE0IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3Vuc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDE1IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3JlcXVlc3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTYgX19wdXlhX2FyYzRfcm91dGVyX19fYXBwcm92ZV9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxNyBfX3B1eWFfYXJjNF9yb3V0ZXJfX19yZWplY3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTggX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3ZvdGluZ19hY2NvdW50X3JvdXRlQDE5IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3N1YnNjcmliZV9wcm9wb3Nlcl9yb3V0ZUAyMCBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfcHJvcG9zZXJfa3ljX3JvdXRlQDIxIF9fcHV5YV9hcmM0X3JvdXRlcl9fX2RlY2xhcmVfY29tbWl0dGVlX3JvdXRlQDIyIF9fcHV5YV9hcmM0X3JvdXRlcl9fX29wZW5fcHJvcG9zYWxfcm91dGVAMjMgX19wdXlhX2FyYzRfcm91dGVyX19fdm90ZV9wcm9wb3NhbF9yb3V0ZUAyNCBfX3B1eWFfYXJjNF9yb3V0ZXJfX19wYXlfZ3JhbnRfcHJvcG9zYWxfcm91dGVAMjUgX19wdXlhX2FyYzRfcm91dGVyX19fZGVwb3NpdF9mdW5kc19yb3V0ZUAyNiBfX3B1eWFfYXJjNF9yb3V0ZXJfX193aXRoZHJhd19mdW5kc19yb3V0ZUAyNyBfX3B1eWFfYXJjNF9yb3V0ZXJfX19nZXRfc3RhdGVfcm91dGVAMjgKICAgIGludGNfMCAvLyAwCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX2NyZWF0ZV9yb3V0ZUAyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoY3JlYXRlPSJyZXF1aXJlIikKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICAhCiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIGNyZWF0aW5nCiAgICBjYWxsc3ViIGNyZWF0ZQogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3hnb3ZfbWFuYWdlcl9yb3V0ZUAzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X21hbmFnZXIKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9wYXlvcl9yb3V0ZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjMxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9wYXlvcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3hnb3ZfcmV2aWV3ZXJfcm91dGVANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI0NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfeGdvdl9yZXZpZXdlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3hnb3Zfc3Vic2NyaWJlcl9yb3V0ZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjYxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X3N1YnNjcmliZXIKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9reWNfcHJvdmlkZXJfcm91dGVANzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjc2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfa3ljX3Byb3ZpZGVyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfY29tbWl0dGVlX21hbmFnZXJfcm91dGVAODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI5MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjkxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfY29tbWl0dGVlX21hbmFnZXIKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9jb21taXR0ZWVfcHVibGlzaGVyX3JvdXRlQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X2NvbW1pdHRlZV9wdWJsaXNoZXIKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX2NvbmZpZ194Z292X3JlZ2lzdHJ5X3JvdXRlQDEwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzIxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGNvbmZpZ194Z292X3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX191cGRhdGVfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGFsbG93X2FjdGlvbnM9WyJVcGRhdGVBcHBsaWNhdGlvbiJdKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgcHVzaGludCA0IC8vIFVwZGF0ZUFwcGxpY2F0aW9uCiAgICA9PQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgVXBkYXRlQXBwbGljYXRpb24KICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiB1cGRhdGVfeGdvdl9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzc5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzdWJzY3JpYmVfeGdvdgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fdW5zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDAzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB1bnN1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zdWJzY3JpYmVfeGdvdl9hcHBfcm91dGVAMTQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDI4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzdWJzY3JpYmVfeGdvdl9hcHAKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3Vuc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDE1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDYyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHVuc3Vic2NyaWJlX3hnb3ZfYXBwCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19yZXF1ZXN0X3N1YnNjcmliZV94Z292X3JvdXRlQDE2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDkwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMSAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ5MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgcmVxdWVzdF9zdWJzY3JpYmVfeGdvdgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fYXBwcm92ZV9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUyOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTI5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhcHByb3ZlX3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19yZWplY3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgcmVqZWN0X3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMTk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3ZvdGluZ19hY2NvdW50CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zdWJzY3JpYmVfcHJvcG9zZXJfcm91dGVAMjA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OTUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzdWJzY3JpYmVfcHJvcG9zZXIKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9wcm9wb3Nlcl9reWNfcm91dGVAMjE6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MjIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYyMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3Byb3Bvc2VyX2t5YwogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVjbGFyZV9jb21taXR0ZWUKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX29wZW5fcHJvcG9zYWxfcm91dGVAMjM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NzMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZAogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMSAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICBjYWxsc3ViIG9wZW5fcHJvcG9zYWwKICAgIGl0b2IKICAgIGJ5dGVjIDM5IC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX192b3RlX3Byb3Bvc2FsX3JvdXRlQDI0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMC0zOAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MzkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHZvdGVfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3BheV9ncmFudF9wcm9wb3NhbF9yb3V0ZUAyNToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBwYXlfZ3JhbnRfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX2RlcG9zaXRfZnVuZHNfcm91dGVAMjY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwLTM4CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODUxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkZXBvc2l0X2Z1bmRzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX193aXRoZHJhd19mdW5kc19yb3V0ZUAyNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg2OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODY4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB3aXRoZHJhd19mdW5kcwogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fZ2V0X3N0YXRlX3JvdXRlQDI4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkzCiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiBnZXRfc3RhdGUKICAgIGJ5dGVjIDM5IC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19hZnRlcl9pZl9lbHNlQDMyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAtMzgKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgaW50Y18wIC8vIDAKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5jcmVhdGUoKSAtPiB2b2lkOgpjcmVhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDgtMjA5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoY3JlYXRlPSJyZXF1aXJlIikKICAgIC8vIGRlZiBjcmVhdGUoc2VsZikgLT4gTm9uZToKICAgIHByb3RvIDAgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE0CiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IGFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgYnl0ZWMgNSAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgdHhuIFNlbmRlcgogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfeGdvdl9tYW5hZ2VyKG1hbmFnZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfeGdvdl9tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE2LTIxNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfeGdvdl9tYW5hZ2VyKHNlbGYsIG1hbmFnZXI6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjI4CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIyOQogICAgLy8gc2VsZi54Z292X21hbmFnZXIudmFsdWUgPSBtYW5hZ2VyCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfeGdvdl9tYW5hZ2VyKCkgLT4gdWludDY0Ogppc194Z292X21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNTktMTYwCiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIGlzX3hnb3ZfbWFuYWdlcihzZWxmKSAtPiBib29sOgogICAgcHJvdG8gMCAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNjEKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IHNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZQogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICA9PQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9wYXlvcihwYXlvcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF9wYXlvcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIzMS0yMzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3BheW9yKHNlbGYsIHBheW9yOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI0MwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNDQKICAgIC8vIHNlbGYueGdvdl9wYXlvci52YWx1ZSA9IHBheW9yCiAgICBieXRlYyA4IC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfeGdvdl9yZXZpZXdlcihyZXZpZXdlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X3Jldmlld2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ2LTI0NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfeGdvdl9yZXZpZXdlcihzZWxmLCByZXZpZXdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTgKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU5CiAgICAvLyBzZWxmLnhnb3ZfcmV2aWV3ZXIudmFsdWUgPSByZXZpZXdlcgogICAgYnl0ZWMgMTUgLy8gMHg3ODY3NmY3NjVmNzI2NTc2Njk2NTc3NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X3N1YnNjcmliZXIoc3Vic2NyaWJlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X3N1YnNjcmliZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjEtMjYyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X3N1YnNjcmliZXIoc2VsZiwgc3Vic2NyaWJlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzMKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjc0CiAgICAvLyBzZWxmLnhnb3Zfc3Vic2NyaWJlci52YWx1ZSA9IHN1YnNjcmliZXIKICAgIGJ5dGVjIDcgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfa3ljX3Byb3ZpZGVyKHByb3ZpZGVyOiBieXRlcykgLT4gdm9pZDoKc2V0X2t5Y19wcm92aWRlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3Ni0yNzcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2t5Y19wcm92aWRlcihzZWxmLCBwcm92aWRlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODgKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjg5CiAgICAvLyBzZWxmLmt5Y19wcm92aWRlci52YWx1ZSA9IHByb3ZpZGVyCiAgICBieXRlYyA5IC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X2NvbW1pdHRlZV9tYW5hZ2VyKG1hbmFnZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfY29tbWl0dGVlX21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyOTEtMjkyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9jb21taXR0ZWVfbWFuYWdlcihzZWxmLCBtYW5hZ2VyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwMwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDQKICAgIC8vIHNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUgPSBtYW5hZ2VyCiAgICBieXRlYyAxMCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfY29tbWl0dGVlX3B1Ymxpc2hlcihwdWJsaXNoZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwNi0zMDcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2NvbW1pdHRlZV9wdWJsaXNoZXIoc2VsZiwgcHVibGlzaGVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxOAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMTkKICAgIC8vIHNlbGYuY29tbWl0dGVlX3B1Ymxpc2hlci52YWx1ZSA9IHB1Ymxpc2hlcgogICAgYnl0ZWMgMTYgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjcwNzU2MjZjNjk3MzY4NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmNvbmZpZ194Z292X3JlZ2lzdHJ5KGNvbmZpZzogYnl0ZXMpIC0+IHZvaWQ6CmNvbmZpZ194Z292X3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzIxLTMyMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBjb25maWdfeGdvdl9yZWdpc3RyeShzZWxmLCBjb25maWc6IHR5cC5YR292UmVnaXN0cnlDb25maWcpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzNAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzUKICAgIC8vIGFzc2VydCBzZWxmLm5vX3BlbmRpbmdfcHJvcG9zYWxzKCksIGVyci5OT19QRU5ESU5HX1BST1BPU0FMUwogICAgY2FsbHN1YiBub19wZW5kaW5nX3Byb3Bvc2FscwogICAgYXNzZXJ0IC8vIENhbm5vdCBwZXJmb3JtIG9wZXJhdGlvbiB3aXRoIHBlbmRpbmcgcHJvcG9zYWxzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzcKICAgIC8vIHNlbGYueGdvdl9mZWUudmFsdWUgPSBjb25maWcueGdvdl9mZWUubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNjY2NTY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzM4CiAgICAvLyBzZWxmLnByb3Bvc2VyX2ZlZS52YWx1ZSA9IGNvbmZpZy5wcm9wb3Nlcl9mZWUubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgOCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMTIgLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzkKICAgIC8vIHNlbGYucHJvcG9zYWxfZmVlLnZhbHVlID0gY29uZmlnLnByb3Bvc2FsX2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAxNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgNiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0MAogICAgLy8gc2VsZi5wcm9wb3NhbF9wdWJsaXNoaW5nX2Jwcy52YWx1ZSA9IGNvbmZpZy5wcm9wb3NhbF9wdWJsaXNoaW5nX2Jwcy5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAyNCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMTcgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQxCiAgICAvLyBzZWxmLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzLnZhbHVlID0gY29uZmlnLnByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDMyIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAxOCAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDMKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgNDggMjQgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGV4dHJhY3QgMCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMTkgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ0CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsxXS5uYXRpdmUKICAgIGR1cAogICAgZXh0cmFjdCA4IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAyMCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0NQogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsyXS5uYXRpdmUKICAgIGV4dHJhY3QgMTYgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDIxIC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0NwogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgNzIgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGV4dHJhY3QgMCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjIgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0OAogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bS52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzFdLm5hdGl2ZQogICAgZHVwCiAgICBleHRyYWN0IDggOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDIzIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0OQogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bMl0ubmF0aXZlCiAgICBkdXAKICAgIGV4dHJhY3QgMTYgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDI0IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNTAKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblszXS5uYXRpdmUKICAgIGV4dHJhY3QgMjQgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDI1IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1MgogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDEwNCAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZXh0cmFjdCAwIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAyNiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1MwogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblsxXS5uYXRpdmUKICAgIGR1cAogICAgZXh0cmFjdCA4IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAyNyAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzU0CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bMl0ubmF0aXZlCiAgICBkdXAKICAgIGV4dHJhY3QgMTYgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDI4IC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzU1CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UudmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzNdLm5hdGl2ZQogICAgZXh0cmFjdCAyNCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjkgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1NwogICAgLy8gc2VsZi5jb29sX2Rvd25fZHVyYXRpb24udmFsdWUgPSBjb25maWcuY29vbF9kb3duX2R1cmF0aW9uLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDEzNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzAgLy8gMHg2MzZmNmY2YzVmNjQ2Zjc3NmU1ZjY0NzU3MjYxNzQ2OTZmNmUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNTkKICAgIC8vIHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlID0gY29uZmlnLnF1b3J1bVswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAxNTIgMjQgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGV4dHJhY3QgMCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzEgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjAKICAgIC8vIHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSA9IGNvbmZpZy5xdW9ydW1bMV0ubmF0aXZlCiAgICBkdXAKICAgIGV4dHJhY3QgOCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzIgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MQogICAgLy8gc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUgPSBjb25maWcucXVvcnVtWzJdLm5hdGl2ZQogICAgZXh0cmFjdCAxNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzMgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjMKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlID0gY29uZmlnLndlaWdodGVkX3F1b3J1bVswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAxNzYgMjQgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGV4dHJhY3QgMCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzQgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjQKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSA9IGNvbmZpZy53ZWlnaHRlZF9xdW9ydW1bMV0ubmF0aXZlCiAgICBkdXAKICAgIGV4dHJhY3QgOCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzUgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2NQogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUgPSBjb25maWcud2VpZ2h0ZWRfcXVvcnVtWzJdLm5hdGl2ZQogICAgZXh0cmFjdCAxNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMzYgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkubm9fcGVuZGluZ19wcm9wb3NhbHMoKSAtPiB1aW50NjQ6Cm5vX3BlbmRpbmdfcHJvcG9zYWxzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTcxLTE3MgogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiBub19wZW5kaW5nX3Byb3Bvc2FscyhzZWxmKSAtPiBib29sOgogICAgcHJvdG8gMCAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzMKICAgIC8vIHJldHVybiBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlID09IDAKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgIQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnVwZGF0ZV94Z292X3JlZ2lzdHJ5KCkgLT4gdm9pZDoKdXBkYXRlX3hnb3ZfcmVnaXN0cnk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjctMzY4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoYWxsb3dfYWN0aW9ucz1bIlVwZGF0ZUFwcGxpY2F0aW9uIl0pCiAgICAvLyBkZWYgdXBkYXRlX3hnb3ZfcmVnaXN0cnkoc2VsZikgLT4gTm9uZToKICAgIHByb3RvIDAgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzc3CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfeGdvdih2b3RpbmdfYWRkcmVzczogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzktMzgyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV94Z292KAogICAgLy8gICAgIHNlbGYsIHZvdGluZ19hZGRyZXNzOiBhcmM0LkFkZHJlc3MsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAyIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5NQogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjXzIgLy8gMHg3OAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBBbHJlYWR5IGFuIHhHb3YKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5Ni0zOTcKICAgIC8vICMgY2hlY2sgcGF5bWVudAogICAgLy8gYXNzZXJ0IHNlbGYudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQpLCBlcnIuSU5WQUxJRF9QQVlNRU5UCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgdmFsaWRfeGdvdl9wYXltZW50CiAgICBhc3NlcnQgLy8gSW52YWxpZCBwYXltZW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTktNDAwCiAgICAvLyAjIGNyZWF0ZSBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbVHhuLnNlbmRlcl0gPSB2b3RpbmdfYWRkcmVzcwogICAgYnl0ZWNfMiAvLyAweDc4CiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDAxCiAgICAvLyBzZWxmLnhnb3ZzLnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnZhbGlkX3hnb3ZfcGF5bWVudChwYXltZW50OiB1aW50NjQpIC0+IHVpbnQ2NDoKdmFsaWRfeGdvdl9wYXltZW50OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk0LTE5NQogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiB2YWxpZF94Z292X3BheW1lbnQoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IGJvb2w6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5NwogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5Ny0xOTgKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gYW5kIHBheW1lbnQuYW1vdW50ID09IHNlbGYueGdvdl9mZWUudmFsdWUKICAgIGJ6IHZhbGlkX3hnb3ZfcGF5bWVudF9ib29sX2ZhbHNlQDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5OAogICAgLy8gYW5kIHBheW1lbnQuYW1vdW50ID09IHNlbGYueGdvdl9mZWUudmFsdWUKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9mZWUgZXhpc3RzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk3LTE5OAogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgYnogdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfZmFsc2VAMwogICAgaW50Y18xIC8vIDEKICAgIGIgdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfbWVyZ2VANAoKdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCgp2YWxpZF94Z292X3BheW1lbnRfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk2LTE5OQogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICAgICBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgLy8gKQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnVuc3Vic2NyaWJlX3hnb3YoeGdvdl9hZGRyZXNzOiBieXRlcykgLT4gdm9pZDoKdW5zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwMy00MDQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgdW5zdWJzY3JpYmVfeGdvdihzZWxmLCB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDE1LTQxNgogICAgLy8gIyBlbnN1cmUgdGhlIHByb3ZpZGVkIGFkZHJlc3MgaXMgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwbiAyCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxNy00MTgKICAgIC8vICMgZ2V0IHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gdm90aW5nX2FkZHJlc3MgPSBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLm5hdGl2ZQogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjEKICAgIC8vIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICBmcmFtZV9kaWcgLTEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMgogICAgZnJhbWVfZGlnIDEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiB1bnN1YnNjcmliZV94Z292X2Jvb2xfZmFsc2VAMwoKdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCiAgICBiIHVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9tZXJnZUA0Cgp1bnN1YnNjcmliZV94Z292X2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCgp1bnN1YnNjcmliZV94Z292X2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxOS00MjIKICAgIC8vICMgZW5zdXJlIHRoZSBzZW5kZXIgaXMgdGhlIHhHb3Ygb3IgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjQtNDI1CiAgICAvLyAjIGRlbGV0ZSBib3gKICAgIC8vIGRlbCBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2RlbAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjYKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc3Vic2NyaWJlX3hnb3ZfYXBwKGFwcF9pZDogYnl0ZXMsIHZvdGluZ19hZGRyZXNzOiBieXRlcywgcGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfeGdvdl9hcHA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjgtNDM0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV94Z292X2FwcCgKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIGFwcF9pZDogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbiwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDMgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQ5CiAgICAvLyBhcHBfY3JlYXRvciA9IEFwcGxpY2F0aW9uKGFwcF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIGZyYW1lX2RpZyAtMwogICAgYnRvaQogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTAKICAgIC8vIGFwcF9hZGRyZXNzID0gQXBwbGljYXRpb24oYXBwX2lkLm5hdGl2ZSkuYWRkcmVzcwogICAgc3dhcAogICAgYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUyLTQ1MwogICAgLy8gIyBzZW5kZXIgbXVzdCBiZSB0aGUgY3JlYXRvciBvZiB0aGUgYXBwCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSBhcHBfY3JlYXRvciwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgdW5jb3ZlciAyCiAgICA9PQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDU0LTQ1NQogICAgLy8gIyBlbnN1cmUgdGhlIGFwcCBpcyBub3QgYWxyZWFkeSBhbiB4R292CiAgICAvLyBhc3NlcnQgYXBwX2FkZHJlc3Mgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjXzIgLy8gMHg3OAogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDU2LTQ1NwogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ1OQogICAgLy8gc2VsZi54Z292X2JveFthcHBfYWRkcmVzc10gPSB2b3RpbmdfYWRkcmVzcwogICAgZnJhbWVfZGlnIC0yCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjAKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudW5zdWJzY3JpYmVfeGdvdl9hcHAoYXBwX2lkOiBieXRlcykgLT4gdm9pZDoKdW5zdWJzY3JpYmVfeGdvdl9hcHA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjItNDYzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHVuc3Vic2NyaWJlX3hnb3ZfYXBwKHNlbGYsIGFwcF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3NAogICAgLy8gYXBwX2NyZWF0b3IgPSBBcHBsaWNhdGlvbihhcHBfaWQubmF0aXZlKS5jcmVhdG9yCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGR1cAogICAgYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDc1CiAgICAvLyBhcHBfYWRkcmVzcyA9IEFwcGxpY2F0aW9uKGFwcF9pZC5uYXRpdmUpLmFkZHJlc3MKICAgIHN3YXAKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3Ny00NzgKICAgIC8vICMgZW5zdXJlIHRoZSBwcm92aWRlZCBhcHAgaXMgYW4geEdvdgogICAgLy8gYXNzZXJ0IGFwcF9hZGRyZXNzIGluIHNlbGYueGdvdl9ib3gsIGVyci5VTkFVVEhPUklaRUQKICAgIGJ5dGVjXzIgLy8gMHg3OAogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGNvdmVyIDIKICAgIGR1cAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzktNDgwCiAgICAvLyAjIGdldCB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIHZvdGluZ19hZGRyZXNzID0gc2VsZi54Z292X2JveFthcHBfYWRkcmVzc10ubmF0aXZlCiAgICBib3hfZ2V0CiAgICBzd2FwCiAgICBjb3ZlciAyCiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ4MwogICAgLy8gYXBwX2NyZWF0b3IgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICB0eG4gU2VuZGVyCiAgICA9PQogICAgYm56IHVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfdHJ1ZUAyCiAgICBmcmFtZV9kaWcgMQogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJ6IHVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfZmFsc2VAMwoKdW5zdWJzY3JpYmVfeGdvdl9hcHBfYm9vbF90cnVlQDI6CiAgICBpbnRjXzEgLy8gMQogICAgYiB1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX21lcmdlQDQKCnVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCgp1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0ODEtNDg0CiAgICAvLyAjIGVuc3VyZSB0aGUgc2VuZGVyIGlzIHRoZSBhcHAgY3JlYXRvciBvciB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgYXBwX2NyZWF0b3IgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0ODYtNDg3CiAgICAvLyAjIGRlbGV0ZSBib3gKICAgIC8vIGRlbCBzZWxmLnhnb3ZfYm94W2FwcF9hZGRyZXNzXQogICAgZnJhbWVfZGlnIDAKICAgIGJveF9kZWwKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDg4CiAgICAvLyBzZWxmLnhnb3ZzLnZhbHVlIC09IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnJlcXVlc3Rfc3Vic2NyaWJlX3hnb3YoeGdvdl9hZGRyZXNzOiBieXRlcywgb3duZXJfYWRkcmVzczogYnl0ZXMsIHJlbGF0aW9uX3R5cGU6IGJ5dGVzLCBwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CnJlcXVlc3Rfc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTAtNDk3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHJlcXVlc3Rfc3Vic2NyaWJlX3hnb3YoCiAgICAvLyAgICAgc2VsZiwKICAgIC8vICAgICB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICBvd25lcl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsCiAgICAvLyAgICAgcmVsYXRpb25fdHlwZTogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24sCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byA0IDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxMi01MTMKICAgIC8vICMgZW5zdXJlIHRoZSB4Z292X2FkZHJlc3MgaXMgbm90IGFscmVhZHkgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjXzIgLy8gMHg3OAogICAgZnJhbWVfZGlnIC00CiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE1LTUxNgogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxOC01MTkKICAgIC8vICMgY3JlYXRlIHJlcXVlc3QgYm94CiAgICAvLyByaWQgPSBzZWxmLnJlcXVlc3RfaWQudmFsdWUKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMyAvLyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucmVxdWVzdF9pZCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUyMC01MjQKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgLy8gICAgIHhnb3ZfYWRkcj14Z292X2FkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcj1vd25lcl9hZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU9cmVsYXRpb25fdHlwZSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtNAogICAgZnJhbWVfZGlnIC0zCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjAKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgc3dhcAogICAgaXRvYgogICAgYnl0ZWMgNDAgLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjAtNTI0CiAgICAvLyBzZWxmLnJlcXVlc3RfYm94W3JpZF0gPSB0eXAuWEdvdlN1YnNjcmliZVJlcXVlc3RCb3hWYWx1ZSgKICAgIC8vICAgICB4Z292X2FkZHI9eGdvdl9hZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHI9b3duZXJfYWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlPXJlbGF0aW9uX3R5cGUsCiAgICAvLyApCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjYtNTI3CiAgICAvLyAjIGluY3JlbWVudCByZXF1ZXN0IGlkCiAgICAvLyBzZWxmLnJlcXVlc3RfaWQudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEzIC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2lkIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjIDEzIC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuYXBwcm92ZV9zdWJzY3JpYmVfeGdvdihyZXF1ZXN0X2lkOiBieXRlcykgLT4gdm9pZDoKYXBwcm92ZV9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUyOS01MzAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgYXBwcm92ZV9zdWJzY3JpYmVfeGdvdihzZWxmLCByZXF1ZXN0X2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQxCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X3N1YnNjcmliZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X3N1YnNjcmliZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0My01NDQKICAgIC8vICMgZ2V0IHRoZSByZXF1ZXN0CiAgICAvLyByZXF1ZXN0ID0gc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0uY29weSgpCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGl0b2IKICAgIGJ5dGVjIDQwIC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0NS01NDYKICAgIC8vICMgY3JlYXRlIHRoZSB4R292CiAgICAvLyBzZWxmLnhnb3ZfYm94W3JlcXVlc3QueGdvdl9hZGRyLm5hdGl2ZV0gPSByZXF1ZXN0Lm93bmVyX2FkZHIKICAgIGR1cAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGV4dHJhY3QgMzIgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDcKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDgtNTQ5CiAgICAvLyAjIGRlbGV0ZSB0aGUgcmVxdWVzdAogICAgLy8gZGVsIHNlbGYucmVxdWVzdF9ib3hbcmVxdWVzdF9pZC5uYXRpdmVdCiAgICBib3hfZGVsCiAgICBwb3AKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc194Z292X3N1YnNjcmliZXIoKSAtPiB1aW50NjQ6CmlzX3hnb3Zfc3Vic2NyaWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2My0xNjQKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgaXNfeGdvdl9zdWJzY3JpYmVyKHNlbGYpIC0+IGJvb2w6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2NQogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNyAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3Zfc3Vic2NyaWJlciBleGlzdHMKICAgID09CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVqZWN0X3N1YnNjcmliZV94Z292KHJlcXVlc3RfaWQ6IGJ5dGVzKSAtPiB2b2lkOgpyZWplY3Rfc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NTEtNTUyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHJlamVjdF9zdWJzY3JpYmVfeGdvdihzZWxmLCByZXF1ZXN0X2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTYzCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X3N1YnNjcmliZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X3N1YnNjcmliZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2NS01NjYKICAgIC8vICMgZGVsZXRlIHRoZSByZXF1ZXN0CiAgICAvLyBkZWwgc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0KICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgaXRvYgogICAgYnl0ZWMgNDAgLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICBib3hfZGVsCiAgICBwb3AKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfdm90aW5nX2FjY291bnQoeGdvdl9hZGRyZXNzOiBieXRlcywgdm90aW5nX2FkZHJlc3M6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfdm90aW5nX2FjY291bnQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjgtNTcxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF92b3RpbmdfYWNjb3VudCgKICAgIC8vICAgICBzZWxmLCB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcywgdm90aW5nX2FkZHJlc3M6IGFyYzQuQWRkcmVzcwogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODMtNTg0CiAgICAvLyAjIENoZWNrIGlmIHRoZSBzZW5kZXIgaXMgYW4geEdvdiBtZW1iZXIKICAgIC8vIG9sZF92b3RpbmdfYWRkcmVzcywgZXhpc3RzID0gc2VsZi54Z292X2JveC5tYXliZSh4Z292X2FkZHJlc3MubmF0aXZlKQogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODUKICAgIC8vIGFzc2VydCBleGlzdHMsIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4OQogICAgLy8gVHhuLnNlbmRlciA9PSBvbGRfdm90aW5nX2FkZHJlc3Mgb3IgVHhuLnNlbmRlciA9PSB4Z292X2FkZHJlc3MKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfdHJ1ZUAyCiAgICBmcmFtZV9kaWcgLTIKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDI6CiAgICBpbnRjXzEgLy8gMQogICAgYiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF9tZXJnZUA0CgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKCnNldF92b3RpbmdfYWNjb3VudF9ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODctNTkwCiAgICAvLyAjIENoZWNrIHRoYXQgdGhlIHNlbmRlciBpcyBlaXRoZXIgdGhlIHhHb3Ygb3IgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIFR4bi5zZW5kZXIgPT0gb2xkX3ZvdGluZ19hZGRyZXNzIG9yIFR4bi5zZW5kZXIgPT0geGdvdl9hZGRyZXNzCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OTItNTkzCiAgICAvLyAjIFVwZGF0ZSB0aGUgdm90aW5nIGFjY291bnQgaW4gdGhlIHhHb3YgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdID0gdm90aW5nX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAwCiAgICBmcmFtZV9kaWcgLTEKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfcHJvcG9zZXIocGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfcHJvcG9zZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OTUtNTk2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV9wcm9wb3NlcihzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjA5CiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBub3QgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5BTFJFQURZX1BST1BPU0VSCiAgICBieXRlY18zIC8vIDB4NzAKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhIHByb3Bvc2VyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTIKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTAtNjEzCiAgICAvLyAjIGNoZWNrIGZlZQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTQKICAgIC8vIGFzc2VydCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnByb3Bvc2VyX2ZlZS52YWx1ZSwgZXJyLldST05HX1BBWU1FTlRfQU1PVU5UCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEyIC8vIDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfZmVlIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBwYXltZW50IGFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjE2CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtUeG4uc2VuZGVyXSA9IHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxNi02MjAKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdID0gdHlwLlByb3Bvc2VyQm94VmFsdWUoCiAgICAvLyAgICAgYWN0aXZlX3Byb3Bvc2FsPWFyYzQuQm9vbChGYWxzZSksICAjIG5vcWE6IEZCVDAwMwogICAgLy8gICAgIGt5Y19zdGF0dXM9YXJjNC5Cb29sKEZhbHNlKSwgICMgbm9xYTogRkJUMDAzCiAgICAvLyAgICAga3ljX2V4cGlyaW5nPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgcHVzaGJ5dGVzIDB4MDAwMDAwMDAwMDAwMDAwMDAwCiAgICBib3hfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3Byb3Bvc2VyX2t5Yyhwcm9wb3NlcjogYnl0ZXMsIGt5Y19zdGF0dXM6IGJ5dGVzLCBreWNfZXhwaXJpbmc6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfcHJvcG9zZXJfa3ljOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjIyLTYyNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfcHJvcG9zZXJfa3ljKAogICAgLy8gICAgIHNlbGYsIHByb3Bvc2VyOiBhcmM0LkFkZHJlc3MsIGt5Y19zdGF0dXM6IGFyYzQuQm9vbCwga3ljX2V4cGlyaW5nOiBhcmM0LlVJbnQ2NAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MzktNjQwCiAgICAvLyAjIGNoZWNrIGlmIGt5YyBwcm92aWRlcgogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgPT0gc2VsZi5reWNfcHJvdmlkZXIudmFsdWUubmF0aXZlLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgOSAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmt5Y19wcm92aWRlciBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDEKICAgIC8vIGFzc2VydCBwcm9wb3Nlci5uYXRpdmUgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5QUk9QT1NFUl9ET0VTX05PVF9FWElTVAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBQcm9wb3NlciBkb2VzIG5vdCBleGlzdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjQzCiAgICAvLyBhY3RpdmVfcHJvcG9zYWwgPSBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmNvcHkoKS5hY3RpdmVfcHJvcG9zYWwKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgYnl0ZWMgMTQgLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDUtNjQ5CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdID0gdHlwLlByb3Bvc2VyQm94VmFsdWUoCiAgICAvLyAgICAgYWN0aXZlX3Byb3Bvc2FsPWFjdGl2ZV9wcm9wb3NhbCwKICAgIC8vICAgICBreWNfc3RhdHVzPWt5Y19zdGF0dXMsCiAgICAvLyAgICAga3ljX2V4cGlyaW5nPWt5Y19leHBpcmluZywKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtMgogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgaW50Y18xIC8vIDEKICAgIHN3YXAKICAgIHNldGJpdAogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kZWNsYXJlX2NvbW1pdHRlZShjaWQ6IGJ5dGVzLCBzaXplOiBieXRlcywgdm90ZXM6IGJ5dGVzKSAtPiB2b2lkOgpkZWNsYXJlX2NvbW1pdHRlZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1MS02NTQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgZGVjbGFyZV9jb21taXR0ZWUoCiAgICAvLyAgICAgc2VsZiwgY2lkOiBwdHlwLkNpZCwgc2l6ZTogYXJjNC5VSW50NjQsIHZvdGVzOiBhcmM0LlVJbnQ2NAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NjcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfY29tbWl0dGVlX21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X2NvbW1pdHRlZV9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NjkKICAgIC8vIHNlbGYuY29tbWl0dGVlX2lkLnZhbHVlID0gY2lkLmNvcHkoKQogICAgYnl0ZWMgNDMgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjY5NjQKICAgIGZyYW1lX2RpZyAtMwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3MAogICAgLy8gc2VsZi5jb21taXR0ZWVfbWVtYmVycy52YWx1ZSA9IHNpemUubmF0aXZlCiAgICBmcmFtZV9kaWcgLTIKICAgIGJ0b2kKICAgIGJ5dGVjIDM3IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3MQogICAgLy8gc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUgPSB2b3Rlcy5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgYnl0ZWMgMzggLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfeGdvdl9jb21taXR0ZWVfbWFuYWdlcigpIC0+IHVpbnQ2NDoKaXNfeGdvdl9jb21taXR0ZWVfbWFuYWdlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2Ny0xNjgKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgaXNfeGdvdl9jb21taXR0ZWVfbWFuYWdlcihzZWxmKSAtPiBib29sOgogICAgcHJvdG8gMCAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNjkKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IHNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTAgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICA9PQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5Lm9wZW5fcHJvcG9zYWwocGF5bWVudDogdWludDY0KSAtPiB1aW50NjQ6Cm9wZW5fcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NzMtNjc0CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIC8vIGRlZiBvcGVuX3Byb3Bvc2FsKHNlbGYsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uKSAtPiBVSW50NjQ6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5MC02OTEKICAgIC8vICMgQ2hlY2sgaWYgdGhlIGNhbGxlciBpcyBhIHJlZ2lzdGVyZWQgcHJvcG9zZXIKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyIGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuVU5BVVRIT1JJWkVECiAgICBieXRlY18zIC8vIDB4NzAKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OTMtNjk0CiAgICAvLyAjIENoZWNrIGlmIHRoZSBwcm9wb3NlciBhbHJlYWR5IGhhcyBhbiBhY3RpdmUgcHJvcG9zYWwKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wcm9wb3Nlcl9ib3hbCiAgICBieXRlY18zIC8vIDB4NzAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5NQogICAgLy8gVHhuLnNlbmRlcgogICAgdHhuIFNlbmRlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjkzLTY5NgogICAgLy8gIyBDaGVjayBpZiB0aGUgcHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucHJvcG9zZXJfYm94WwogICAgLy8gICAgIFR4bi5zZW5kZXIKICAgIC8vIF0uYWN0aXZlX3Byb3Bvc2FsLCBlcnIuQUxSRUFEWV9BQ1RJVkVfUFJPUE9TQUwKICAgIGNvbmNhdAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgYnl0ZWMgMTQgLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBieXRlYyAxNCAvLyAweDAwCiAgICA9PQogICAgYXNzZXJ0IC8vIFByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njk3CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF9reWMoVHhuLnNlbmRlciksIGVyci5JTlZBTElEX0tZQwogICAgdHhuIFNlbmRlcgogICAgY2FsbHN1YiB2YWxpZF9reWMKICAgIGFzc2VydCAvLyBJbnZhbGlkIEtZQwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njk5CiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMyksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDMgLy8gMwogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDMKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDEtNzA0CiAgICAvLyAjIEVuc3VyZSB0aGUgdHJhbnNhY3Rpb24gaGFzIHRoZSBjb3JyZWN0IHBheW1lbnQKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzA1CiAgICAvLyBhc3NlcnQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUsIGVyci5XUk9OR19QQVlNRU5UX0FNT1VOVAogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA2IC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfZmVlIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBwYXltZW50IGFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzIyCiAgICAvLyByZXMgPSBhcmM0LmFyYzRfY3JlYXRlKHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLCBUeG4uc2VuZGVyKQogICAgaXR4bl9iZWdpbgogICAgdHhuIFNlbmRlcgogICAgcHVzaGludCAyMCAvLyAyMAogICAgaXR4bl9maWVsZCBHbG9iYWxOdW1VaW50CiAgICBwdXNoaW50IDUgLy8gNQogICAgaXR4bl9maWVsZCBHbG9iYWxOdW1CeXRlU2xpY2UKICAgIGludGNfMSAvLyAxCiAgICBpdHhuX2ZpZWxkIEV4dHJhUHJvZ3JhbVBhZ2VzCiAgICBwdXNoYnl0ZXMgYmFzZTY0KENvRUJRdz09KQogICAgaXR4bl9maWVsZCBDbGVhclN0YXRlUHJvZ3JhbVBhZ2VzCiAgICBwdXNoYnl0ZXMgYmFzZTY0KENpQUVBQUVLRkNZYUFnQUFCbk4wWVhSMWN3QUlZMkYwWldkdmNua0ljSEp2Y0c5elpYSU5iRzlqYTJWa1gyRnRiM1Z1ZEJGamIyMXRhWFIwWldWZmJXVnRZbVZ5Y3c5eVpXZHBjM1J5ZVY5aGNIQmZhV1FQWTI5dGJXbDBkR1ZsWDNadmRHVnpEWFp2ZEdWa1gyMWxiV0psY25NSllYQndjbTkyWVd4ekNuSmxhbVZqZEdsdmJuTUZkR2wwYkdVRFkybGtGSE4xWW0xcGMzTnBiMjVmZEdsdFpYTjBZVzF3Qlc1MWJHeHpESFp2ZEdWeWMxOWpiM1Z1ZEE1aGMzTnBaMjVsWkY5MmIzUmxjd0ZXRm5admRHVmZiM0JsYm1sdVoxOTBhVzFsYzNSaGJYQU1ablZ1WkdsdVoxOTBlWEJsRUhKbGNYVmxjM1JsWkY5aGJXOTFiblFNWTI5dGJXbDBkR1ZsWDJsa0FRQVdabWx1WVd4cGVtRjBhVzl1WDNScGJXVnpkR0Z0Y0JOamIyMXRhWFIwWldWZmNIVmliR2x6YUdWeU1SaEFBQU9JQUFTSUFJRkRpZ0FBTVRXQkJSSkVNVFFsRWtReE54UkVNVFlVUkNjRU1nTm5Kd2NpWnljTUttY25EU3BuSnc0aVp5Y1lJbWNuRXlKbktTSm5LeUpuSnhRaVp5Y1ZJbWNuQlNKbkp4WXFaeWNHSW1jbkNDSm5Kd2tpWnljS0ltY25DeUpuSnc4aVo0QVNiV2xzWlhOMGIyNWxYMkZ3Y0hKdmRtVmtJbWNuRUNKbkp4RWlaNG1LQUFFeEcwRUEyWUlJQk14cFRxb0VFNytLZWdSQTM0b01CRi9OL2U0RUk5aTN6Z1IwNWxWK0JCaEJvTklFYzAyK3pEWWFBSTRJQUFJQUVnQTBBRVlBVWdCZUFIQUFqaUtKTVJrVVJERVlGRVEyR2dHSUFJd2ppVEVaRkVReEdFUXhGaU1KU1RnUUl4SkVOaG9CTmhvQ05ob0ROaG9FaUFCN0k0a3hHUlJFTVJoRU5ob0JOaG9DaUFKQUk0a3hHUlJFTVJoRWlBSmdJNGt4R1JSRU1SaEVpQUtlSTRreEdSUkVNUmhFTmhvQk5ob0NpQVBKSTRreEdSUkVNUmhFTmhvQk5ob0NOaG9EaUFRN2dBUVZIM3gxVEZDd0k0a3hHUlJFTVJoRWlBWTlJNGtpaVlvQkFESU5SQ2NFaS85bkp3Y3lEV2VKaWdVQWlBQkhpL3hYQWdDTC9oZUwveGRMQW92OVN3TkxBNGdBUzR6OWkvdExBWWdBOENjTVR3Tm5KdzJML1dkSmlBRTZKeFJQQW1jbkZVc0JaNGdBOXljRlRHY25EaklIWnlra1o0bUtBQUNJQUFoRUlpbGxSQlJFaVlvQUFURUFJaWNFWlVRU2lZb0VBWXY4aS8ySUFHR00vWXYrSkJKQUFBZUwvaVVTUVFBRUkwSUFBU0pFZ0JSdGFXNWZjbVZ4ZFdWemRHVmtYMkZ0YjNWdWRJZ0FSQ2dTUklBYWJXRjRYM0psY1hWbGMzUmxaRjloYlc5MWJuUmZiR0Z5WjJXSUFDSW9Fa1NMLzA4Q0QwU0wvdzlFaS8ySmlnSUJpLzRWZ1hzT1JJditLaE5FaS8rSmlnRUNJaWNIWlVTTC8yVW9URUFBR0lBVUFCSkZVbEk2VFdsemMybHVaeUJEYjI1bWFXZU1BWXNBaXdGUEEwOERpWW9DQUl2L2lBQWFpLzQ0QUNJbkJHVkVFa1NML2pnSE1nb1NSSXYrT0FnU1JJbUtBUUdBRjNCeWIzQnZjMkZzWDJOdmJXMXBkRzFsYm5SZlluQnppUCtPS0JKRWkvOU1pQUFCaVlvQ0FZditpLzhMZ1pCT0NvbUtBUUNBR20xaGVGOXlaWEYxWlhOMFpXUmZZVzF2ZFc1MFgzTnRZV3hzaVA5VktCSkVnQnR0WVhoZmNtVnhkV1Z6ZEdWa1gyRnRiM1Z1ZEY5dFpXUnBkVzJJL3pKTVRnSW9Fa1NML3c5QkFBWXJKR2RDQUJLTC80c0FEa0VBQmlzbFowSUFCQ3VCSVdlSmlnSUFpQUFYaS81WEFnQkppLytJL3VxTS95Y01UR2NuRFl2L1o0bUtBQUNJL21GRUlpbGxSQ1FTUkltS0FBQ0lBRFd4SWljRVpVUWlKd1ZsUkxJSXNnY2pzaEFpc2dHekp3d3FaeWNOS21jckltY25GQ0puSnhVaVp5Y0ZJbWNuRGlKbktTSm5pWW9BQUlqK0YwUWlLV1ZFSkJKRWlZb0FBSWdBVzRnQStDa2xaeWNZTWdkbmdBeHdjbTl3YjNOaGJGOW1aV1dJL25Vb0VrU0FGM0J5YjNCdmMyRnNYM0IxWW14cGMyaHBibWRmWW5CemlQNVdLQkpFc1NjWmlBRG1TUldCSUJKRVRnS0kvcjZ5Q0xJSEk3SVFJcklCczRtS0FBQ0kvYWRFSWlsbFJDUVNSRElISWljT1pVUUpJaXRsUklnQUF3OUVpWW9CQVNLTC95UVNRUUFqZ0Jsa2FYTmpkWE56YVc5dVgyUjFjbUYwYVc5dVgzTnRZV3hzaVAzdGpBQkNBRXVML3lVU1FRQWtnQnBrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDIxbFpHbDFiWWo5d293QVFnQWdnQmxrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDJ4aGNtZGxpUDJmakFDTEFDZ1NSRXlKaWdBQUp4YUlBQ2RKS2hORUp3YUkvWVVvRWtSSlJDY0lpUDE3S0JKRVNVUW5GazhEWnljR1R3Sm5Kd2hNWjRtS0FRRWlKd2RsUkl2L1pVU0ppZ0lBaUFCUGkvOFhpLzVMQVlnQVpvdi9KeGRRSnhLTC9sQk12eUluRUdWRUl3Z25FRXhuSWljUlpVUUlKeEZNWnlJbkVHVkVJaWNHWlVRU1FRQVZJaWNSWlVRaUp3aGxSQkpFS1lFWlp5Y1RNZ2RuaVlvQUFJZ0FDVVFpS1dWRUpSSkVpWW9BQVRFQUp4bUkvNFZKRllFZ0VrUVNpWW9DQUNjU2kvNVF2VVVCRkVTTC8wU0ppZ01CS2ttSUFIMUpLQk5CQUFXTEFvd0FpWXYrRjBtTUFJdi9GMG1NQVl2OVRnS0lBV1JKakFJb0UwRUFCWXNDakFDSkp4S0wvVkJKdmtSWEFBaEpnQUdBVUU4Q1RMOGlKd2xsUkNNSUp3bE1aeGVMQUVsT0FnbUxBVWxPQXdraUp3cGxSRThDQ0NjS1RHY2lKd3RsUkU4Q0NDY0xUR2NpSnc5bFJBZ25EMHhuS0l3QWlZb0FBU0lxaUFCa1JDSXBaVVNCR1JOQkFDQ0FHd0FaUlZKU09sZHliMjVuSUZCeWIzQnZjMkZzSUZOMFlYUjFjNHdBaVlnQVFrbE9Bb3dBakFFb0UwRUFBWW1MQVVBQUlJQWJBQmxGVWxJNlZtOTBhVzVuSUZCbGNtbHZaQ0JGZUhCcGNtVmtqQUNKS0l3QWlZb0FBVElOSWljSFpVUVNpWW9BQWpJSElpY1RaVVFKSWl0bFJJZ0FHRWxQQWt3b0UwRUFCQ0tNQUltTEFJc0NEaWlNQVl3QWlZb0JBb3YvSkJKQkFCdUFGWFp2ZEdsdVoxOWtkWEpoZEdsdmJsOXpiV0ZzYklqN2lJbUwveVVTUVFBY2dCWjJiM1JwYm1kZlpIVnlZWFJwYjI1ZmJXVmthWFZ0aVB0bGlZQVZkbTkwYVc1blgyUjFjbUYwYVc5dVgyeGhjbWRsaVB0S2lZb0RBU0luRW92OVVFbTlSUUZBQUJxQUZRQVRSVkpTT2xadmRHVnlJRzV2ZENCbWIzVnVaSXdBaVlzQnZreEpUZ0tNQUVTQlFGTW5GeUpQQWxRbkZ4TkJBQjZBR1FBWFJWSlNPbFp2ZEdWeUlHRnNjbVZoWkhrZ2RtOTBaV1NNQUltTEFGY0FDSXYraS84SUZxUkJBQm1BRkFBU1JWSlNPbFp2ZEdWeklHVjRZMlZsWkdWa2pBQ0pLSXdBaVlvQUFJZ0FlU0lyWlVTSUFKc2lKd1psUkV5SSt5SWlLMlZFaUFEa0lpY0taVVFpSnd0bFJBZ2lKdzlsUkFoT0FpSW5DR1ZFVElqNi8wd2lKd2xsUkE1QkFCMkxBSXNCRDBFQUZTSW5DbVZFSWljTFpVUU5RUUFIS1lFZVowSUFIaW1CS0dleElpY0VaVVFpSndWbFJMSUlzZ2Nqc2hBaXNnR3pKd1VpWjRtS0FBQWlLV1ZFZ1JrU1JJaitXU2dTUkVFQURpSW5DV1ZFSWljR1pVUVNRUUFFSTBJQUFTSkVpWW9CQVNLTC95UVNRUUFXZ0F4eGRXOXlkVzFmYzIxaGJHeUkrZmlNQUVJQU1Zdi9KUkpCQUJlQURYRjFiM0oxYlY5dFpXUnBkVzJJK2RxTUFFSUFFNEFNY1hWdmNuVnRYMnhoY21kbGlQbkVqQUNMQUNnU1JFeUppZ0VCSW92L0pCSkJBQitBRlhkbGFXZG9kR1ZrWDNGMWIzSjFiVjl6YldGc2JJajVsb3dBUWdCRGkvOGxFa0VBSUlBV2QyVnBaMmgwWldSZmNYVnZjblZ0WDIxbFpHbDFiWWo1YjR3QVFnQWNnQlYzWldsbmFIUmxaRjl4ZFc5eWRXMWZiR0Z5WjJXSStWQ01BSXNBS0JKRVRJaz0pCiAgICBpdHhuX2ZpZWxkIEFwcHJvdmFsUHJvZ3JhbVBhZ2VzCiAgICBwdXNoYnl0ZXMgMHhjYzY5NGVhYSAvLyBtZXRob2QgImNyZWF0ZShhZGRyZXNzKXZvaWQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGludGNfMiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICBpdHhuIENyZWF0ZWRBcHBsaWNhdGlvbklECiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjQtNzI1CiAgICAvLyAjIFVwZGF0ZSBwcm9wb3NlciBzdGF0ZQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbVHhuLnNlbmRlcl0uYWN0aXZlX3Byb3Bvc2FsID0gYXJjNC5Cb29sKFRydWUpICAjIG5vcWE6IEZCVDAwMwogICAgYnl0ZWNfMyAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18wIC8vIDAKICAgIGludGNfMSAvLyAxCiAgICBzZXRiaXQKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyNy03MzIKICAgIC8vICMgVHJhbnNmZXIgZnVuZHMgdG8gdGhlIG5ldyBQcm9wb3NhbCBBcHAKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1yZXMuY3JlYXRlZF9hcHAuYWRkcmVzcywKICAgIC8vICAgICBhbW91bnQ9c2VsZi5wcm9wb3NhbF9mZWUudmFsdWUgLSBwY2ZnLlBST1BPU0FMX01CUiwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyOQogICAgLy8gcmVjZWl2ZXI9cmVzLmNyZWF0ZWRfYXBwLmFkZHJlc3MsCiAgICBkdXAKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczMAogICAgLy8gYW1vdW50PXNlbGYucHJvcG9zYWxfZmVlLnZhbHVlIC0gcGNmZy5QUk9QT1NBTF9NQlIsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX2ZlZSBleGlzdHMKICAgIHB1c2hpbnQgMTAyMDAwMCAvLyAxMDIwMDAwCiAgICAtCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzI3LTcyOAogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzMxCiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzI3LTczMgogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXJlcy5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgLy8gICAgIGFtb3VudD1zZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSAtIHBjZmcuUFJPUE9TQUxfTUJSLAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczNC03MzUKICAgIC8vICMgSW5jcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzCiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM3CiAgICAvLyByZXR1cm4gcmVzLmNyZWF0ZWRfYXBwLmlkCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudmFsaWRfa3ljKGFkZHJlc3M6IGJ5dGVzKSAtPiB1aW50NjQ6CnZhbGlkX2t5YzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwMS0yMDIKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgdmFsaWRfa3ljKHNlbGYsIGFkZHJlc3M6IEFjY291bnQpIC0+IGJvb2w6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwNAogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIGdldGJpdAogICAgYnl0ZWMgMTQgLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDQtMjA1CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgYnogdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA1CiAgICAvLyBhbmQgc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX2V4cGlyaW5nLm5hdGl2ZSA+IEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgZXh0cmFjdCAxIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBnbG9iYWwgTGF0ZXN0VGltZXN0YW1wCiAgICA+CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDQtMjA1CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgYnogdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMwogICAgaW50Y18xIC8vIDEKICAgIGIgdmFsaWRfa3ljX2Jvb2xfbWVyZ2VANAoKdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCgp2YWxpZF9reWNfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAzLTIwNgogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gICAgIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIC8vICkKICAgIHN3YXAKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS52b3RlX3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcywgeGdvdl9hZGRyZXNzOiBieXRlcywgYXBwcm92YWxfdm90ZXM6IGJ5dGVzLCByZWplY3Rpb25fdm90ZXM6IGJ5dGVzKSAtPiB2b2lkOgp2b3RlX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM5LTc0NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB2b3RlX3Byb3Bvc2FsKAogICAgLy8gICAgIHNlbGYsCiAgICAvLyAgICAgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0LAogICAgLy8gICAgIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIGFwcHJvdmFsX3ZvdGVzOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICByZWplY3Rpb25fdm90ZXM6IGFyYzQuVUludDY0LAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gNCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjMtNzY0CiAgICAvLyAjIHZlcmlmeSBwcm9wb3NhbCBpZCBpcyBnZW51aW5lIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgc2VsZi5pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTQKICAgIGNhbGxzdWIgaXNfcHJvcG9zYWwKICAgIGFzc2VydCAvLyBJbnZhbGlkIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjgKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICBmcmFtZV9kaWcgLTQKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc2Ni03NjkKICAgIC8vICMgVmVyaWZ5IHRoZSBwcm9wb3NhbCBpcyBpbiB0aGUgdm90aW5nIHN0YXRlCiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgLy8gKQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjgKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICBieXRlYyA0NCAvLyAweDczNzQ2MTc0NzU3MwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzY2LTc2OQogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSB2b3Rpbmcgc3RhdGUKICAgIC8vIHN0YXR1cywgc3RhdHVzX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzAKICAgIC8vIGFzc2VydCBzdGF0dXMgPT0gVUludDY0KHBlbm0uU1RBVFVTX1ZPVElORyksIGVyci5QUk9QT1NBTF9JU19OT1RfVk9USU5HCiAgICBwdXNoaW50IDI1IC8vIDI1CiAgICA9PQogICAgYXNzZXJ0IC8vIFByb3Bvc2FsIGlzIG5vdCBpbiB2b3RpbmcgcGhhc2UKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3Mi03NzMKICAgIC8vICMgbWFrZSBzdXJlIHRoZXkncmUgdm90aW5nIG9uIGJlaGFsZiBvZiBhbiB4R292CiAgICAvLyB2b3RpbmdfYWRkcmVzcywgZXhpc3RzID0gc2VsZi54Z292X2JveC5tYXliZSh4Z292X2FkZHJlc3MubmF0aXZlKQogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgYm94X2dldAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzc0CiAgICAvLyBhc3NlcnQgZXhpc3RzLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzYtNzc3CiAgICAvLyAjIFZlcmlmeSB0aGUgY2FsbGVyIGlzIHVzaW5nIHRoZWlyIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSB2b3RpbmdfYWRkcmVzcy5uYXRpdmUsIGVyci5NVVNUX0JFX1ZPVElOR19BRERSRVNTCiAgICB0eG4gU2VuZGVyCiAgICA9PQogICAgYXNzZXJ0IC8vIE11c3QgYmUgdm90aW5nIGFkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3OS03ODYKICAgIC8vICMgQ2FsbCB0aGUgUHJvcG9zYWwgQXBwIHRvIHJlZ2lzdGVyIHRoZSB2b3RlCiAgICAvLyBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLnZvdGUsCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzLAogICAgLy8gICAgIGFwcHJvdmFsX3ZvdGVzLAogICAgLy8gICAgIHJlamVjdGlvbl92b3RlcywKICAgIC8vICAgICBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlLAogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHgxODQxYTBkMiAvLyBtZXRob2QgInZvdGUoYWRkcmVzcyx1aW50NjQsdWludDY0KXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTMKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTEKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBpbnRjXzIgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgMzkgLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBBUkM0IHByZWZpeCBpcyB2YWxpZAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmlzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcykgLT4gdWludDY0Ogppc19wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3NS0xNzYKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgaXNfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBib29sOgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzgKICAgIC8vIEFwcGxpY2F0aW9uKHByb3Bvc2FsX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzkKICAgIC8vID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzgtMTc5CiAgICAvLyBBcHBsaWNhdGlvbihwcm9wb3NhbF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIC8vID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzctMTgwCiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIEFwcGxpY2F0aW9uKHByb3Bvc2FsX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgLy8gICAgID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICkKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5wYXlfZ3JhbnRfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB2b2lkOgpwYXlfZ3JhbnRfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODgtNzg5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHBheV9ncmFudF9wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgwNS04MDYKICAgIC8vICMgVmVyaWZ5IHRoZSBjYWxsZXIgaXMgdGhlIHhHb3YgUGF5b3IKICAgIC8vIGFzc2VydCBhcmM0LkFkZHJlc3MoVHhuLnNlbmRlcikgPT0gc2VsZi54Z292X3BheW9yLnZhbHVlLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgOCAvLyAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9wYXlvciBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MDgtODA5CiAgICAvLyAjIFZlcmlmeSBwcm9wb3NhbF9pZCBpcyBhIGdlbnVpbmUgcHJvcG9zYWwgY3JlYXRlZCBieSB0aGlzIHJlZ2lzdHJ5CiAgICAvLyBhc3NlcnQgc2VsZi5pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgaXNfcHJvcG9zYWwKICAgIGFzc2VydCAvLyBJbnZhbGlkIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTMKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxMS04MTQKICAgIC8vICMgUmVhZCBwcm9wb3NhbCBzdGF0ZSBkaXJlY3RseSBmcm9tIHRoZSBQcm9wb3NhbCBBcHAncyBnbG9iYWwgc3RhdGUKICAgIC8vIHN0YXR1cywgc3RhdHVzX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxMwogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGJ5dGVjIDQ0IC8vIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTEtODE0CiAgICAvLyAjIFJlYWQgcHJvcG9zYWwgc3RhdGUgZGlyZWN0bHkgZnJvbSB0aGUgUHJvcG9zYWwgQXBwJ3MgZ2xvYmFsIHN0YXRlCiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgc3dhcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODE1LTgxNwogICAgLy8gcHJvcG9zZXJfYnl0ZXMsIHByb3Bvc2VyX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfYnl0ZXMoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgLy8gKQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTYKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIHB1c2hieXRlcyAweDcwNzI2ZjcwNmY3MzY1NzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxNS04MTcKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxOAogICAgLy8gcHJvcG9zZXIgPSBhcmM0LkFkZHJlc3MocHJvcG9zZXJfYnl0ZXMpCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIEFkZHJlc3MgbGVuZ3RoIGlzIDMyIGJ5dGVzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTktODIxCiAgICAvLyByZXF1ZXN0ZWRfYW1vdW50LCByZXF1ZXN0ZWRfYW1vdW50X2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgLy8gKQogICAgc3dhcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODIwCiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1JFUVVFU1RFRF9BTU9VTlQKICAgIHB1c2hieXRlcyAweDcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTktODIxCiAgICAvLyByZXF1ZXN0ZWRfYW1vdW50LCByZXF1ZXN0ZWRfYW1vdW50X2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgY292ZXIgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODIyLTgyNAogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSBhcHByb3ZlZCBzdGF0ZQogICAgLy8gIyBUT0RPOiBTd2l0Y2ggdG8gU1RBVFVTX01JTEVTVE9ORQogICAgLy8gYXNzZXJ0IHN0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfQVBQUk9WRUQpLCBlcnIuUFJPUE9TQUxfSVNfTk9UX0FQUFJPVkVECiAgICBzd2FwCiAgICBwdXNoaW50IDMwIC8vIDMwCiAgICA9PQogICAgYXNzZXJ0IC8vIFByb3Bvc2FsIGlzIG5vdCBhcHByb3ZlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI2CiAgICAvLyBhc3NlcnQgcHJvcG9zZXIubmF0aXZlIGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuV1JPTkdfUFJPUE9TRVIKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgZGlnIDEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBXcm9uZyBwcm9wb3NlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI4CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF9reWMocHJvcG9zZXIubmF0aXZlKSwgZXJyLklOVkFMSURfS1lDCiAgICBkaWcgMQogICAgY2FsbHN1YiB2YWxpZF9reWMKICAgIGFzc2VydCAvLyBJbnZhbGlkIEtZQwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMyCiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlID49IHJlcXVlc3RlZF9hbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgZGlnIDMKICAgID49CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzAtODMzCiAgICAvLyAjIFZlcmlmeSBzdWZmaWNpZW50IGZ1bmRzIGFyZSBhdmFpbGFibGUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSA+PSByZXF1ZXN0ZWRfYW1vdW50CiAgICAvLyApLCBlcnIuSU5TVUZGSUNJRU5UX1RSRUFTVVJZX0ZVTkRTCiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IHRyZWFzdXJ5IGZ1bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzUKICAgIC8vIHNlbGYuZGlzYnVyc2VfZnVuZHMocHJvcG9zZXIsIHJlcXVlc3RlZF9hbW91bnQpCiAgICBzd2FwCiAgICB1bmNvdmVyIDIKICAgIGNhbGxzdWIgZGlzYnVyc2VfZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0Mi04NDQKICAgIC8vICMgRGVjcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzIGNvdW50CiAgICAvLyAjIFRPRE86IG1pZ2h0IGhhcHBlbiBvbiBkZWNvbW1pc3Npb24gYXMgd2VsbAogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0Ni04NDcKICAgIC8vICMgVXBkYXRlIHByb3Bvc2VyJ3MgYWN0aXZlIHByb3Bvc2FsIHN0YXR1cwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXS5hY3RpdmVfcHJvcG9zYWwgPSBhcmM0LkJvb2woCiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0Ni04NDkKICAgIC8vICMgVXBkYXRlIHByb3Bvc2VyJ3MgYWN0aXZlIHByb3Bvc2FsIHN0YXR1cwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXS5hY3RpdmVfcHJvcG9zYWwgPSBhcmM0LkJvb2woCiAgICAvLyAgICAgRmFsc2UgICMgbm9xYTogRkJUMDAzCiAgICAvLyApCiAgICBpbnRjXzAgLy8gMAogICAgZHVwCiAgICBzZXRiaXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kaXNidXJzZV9mdW5kcyhyZWNpcGllbnQ6IGJ5dGVzLCBhbW91bnQ6IHVpbnQ2NCkgLT4gdm9pZDoKZGlzYnVyc2VfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODItMTgzCiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIGRpc2J1cnNlX2Z1bmRzKHNlbGYsIHJlY2lwaWVudDogYXJjNC5BZGRyZXNzLCBhbW91bnQ6IFVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg0LTE4OQogICAgLy8gIyBUcmFuc2ZlciB0aGUgZnVuZHMgdG8gdGhlIHJlY2VpdmVyCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9QWNjb3VudChyZWNpcGllbnQuYnl0ZXMpLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODYKICAgIC8vIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIGZyYW1lX2RpZyAtMgogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgIGZyYW1lX2RpZyAtMQogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIGZyYW1lX2RpZyAtMgogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg0LTE4NQogICAgLy8gIyBUcmFuc2ZlciB0aGUgZnVuZHMgdG8gdGhlIHJlY2VpdmVyCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODgKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODQtMTg5CiAgICAvLyAjIFRyYW5zZmVyIHRoZSBmdW5kcyB0byB0aGUgcmVjZWl2ZXIKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1BY2NvdW50KHJlY2lwaWVudC5ieXRlcyksCiAgICAvLyAgICAgYW1vdW50PWFtb3VudCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTEtMTkyCiAgICAvLyAjIFVwZGF0ZSB0aGUgb3V0c3RhbmRpbmcgZnVuZHMKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgLT0gYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVwb3NpdF9mdW5kcyhwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CmRlcG9zaXRfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTEtODUyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRlcG9zaXRfZnVuZHMoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg2NAogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg2My04NjUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODY2CiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlICs9IHBheW1lbnQuYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICArCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS53aXRoZHJhd19mdW5kcyhhbW91bnQ6IHVpbnQ2NCkgLT4gdm9pZDoKd2l0aGRyYXdfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjgtODY5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHdpdGhkcmF3X2Z1bmRzKHNlbGYsIGFtb3VudDogVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgzCiAgICAvLyBhc3NlcnQgYW1vdW50IDw9IHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUsIGVyci5JTlNVRkZJQ0lFTlRfRlVORFMKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgZnJhbWVfZGlnIC0xCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmdW5kcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg0CiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMiksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDIgLy8gMgogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODUKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgLT0gYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODctODkxCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODgKICAgIC8vIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9tYW5hZ2VyIGV4aXN0cwogICAgZnJhbWVfZGlnIC0xCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg3CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTAKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODctODkxCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmdldF9zdGF0ZSgpIC0+IGJ5dGVzOgpnZXRfc3RhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTMtODk0CiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIC8vIGRlZiBnZXRfc3RhdGUoc2VsZikgLT4gdHlwLlR5cGVkR2xvYmFsU3RhdGU6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMAogICAgLy8geGdvdl9tYW5hZ2VyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDEKICAgIC8vIHhnb3ZfcGF5b3I9c2VsZi54Z292X3BheW9yLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDggLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfcGF5b3IgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDIKICAgIC8vIHhnb3ZfcmV2aWV3ZXI9c2VsZi54Z292X3Jldmlld2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE1IC8vIDB4Nzg2NzZmNzY1ZjcyNjU3NjY5NjU3NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3Jldmlld2VyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTAzCiAgICAvLyB4Z292X3N1YnNjcmliZXI9c2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNyAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3Zfc3Vic2NyaWJlciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwNAogICAgLy8ga3ljX3Byb3ZpZGVyPXNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDkgLy8gMHg2Yjc5NjM1ZjcwNzI2Zjc2Njk2NDY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5reWNfcHJvdmlkZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDUKICAgIC8vIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTAgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDYKICAgIC8vIGNvbW1pdHRlZV9wdWJsaXNoZXI9c2VsZi5jb21taXR0ZWVfcHVibGlzaGVyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE2IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfcHVibGlzaGVyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTA3CiAgICAvLyB4Z292X2ZlZT1hcmM0LlVJbnQ2NChzZWxmLnhnb3ZfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMSAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwOAogICAgLy8gcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMiAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwOQogICAgLy8gcHJvcG9zYWxfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA2IC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfZmVlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTEwCiAgICAvLyBwcm9wb3NhbF9wdWJsaXNoaW5nX2Jwcz1hcmM0LlVJbnQ2NChzZWxmLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNyAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjcwNzU2MjZjNjk3MzY4Njk2ZTY3NWY2MjcwNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3NhbF9wdWJsaXNoaW5nX2JwcyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxMQogICAgLy8gcHJvcG9zYWxfY29tbWl0bWVudF9icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTggLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTIKICAgIC8vIG1pbl9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuVUludDY0KHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQxIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50IGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTE0CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxOSAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxNQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIwIC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTE2CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyMSAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxMy05MTcKICAgIC8vIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTkKICAgIC8vIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjIgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjAKICAgIC8vIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIzIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTIxCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI0IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTIyCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNSAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxOC05MjMKICAgIC8vIGRpc2N1c3Npb25fZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgdW5jb3ZlciAzCiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTI1CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjYgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjYKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjcgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjcKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyOCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyOAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyOSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyNC05MjkKICAgIC8vIHZvdGluZ19kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIHVuY292ZXIgMwogICAgdW5jb3ZlciAzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMAogICAgLy8gY29vbF9kb3duX2R1cmF0aW9uPWFyYzQuVUludDY0KHNlbGYuY29vbF9kb3duX2R1cmF0aW9uLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMCAvLyAweDYzNmY2ZjZjNWY2NDZmNzc2ZTVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvb2xfZG93bl9kdXJhdGlvbiBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMQogICAgLy8gc3RhbGVfcHJvcG9zYWxfZHVyYXRpb249YXJjNC5VSW50NjQoc2VsZi5zdGFsZV9wcm9wb3NhbF9kdXJhdGlvbi52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDIgLy8gMHg3Mzc0NjE2YzY1NWY3MDcyNmY3MDZmNzM2MTZjNWY2NDc1NzI2MTc0Njk2ZjZlCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzMKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMSAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzNAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzNQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMzIC8vIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTMyLTkzNgogICAgLy8gcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzgKICAgIC8vIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzOQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0MAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM2IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTM3LTk0MQogICAgLy8gd2VpZ2h0ZWRfcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDIKICAgIC8vIG91dHN0YW5kaW5nX2Z1bmRzPWFyYzQuVUludDY0KHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDMKICAgIC8vIHBlbmRpbmdfcHJvcG9zYWxzPWFyYzQuVUludDY0KHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDQKICAgIC8vIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDMgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfaWQgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDUKICAgIC8vIGNvbW1pdHRlZV9tZW1iZXJzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX21lbWJlcnMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM3IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQ2CiAgICAvLyBjb21taXR0ZWVfdm90ZXM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM4IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX3ZvdGVzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk5LTk0NwogICAgLy8gcmV0dXJuIHR5cC5UeXBlZEdsb2JhbFN0YXRlKAogICAgLy8gICAgIHhnb3ZfbWFuYWdlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIC8vICAgICB4Z292X3Jldmlld2VyPXNlbGYueGdvdl9yZXZpZXdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3N1YnNjcmliZXI9c2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUsCiAgICAvLyAgICAga3ljX3Byb3ZpZGVyPXNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLAogICAgLy8gICAgIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICAvLyAgICAgY29tbWl0dGVlX3B1Ymxpc2hlcj1zZWxmLmNvbW1pdHRlZV9wdWJsaXNoZXIudmFsdWUsCiAgICAvLyAgICAgeGdvdl9mZWU9YXJjNC5VSW50NjQoc2VsZi54Z292X2ZlZS52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIC8vICAgICBwcm9wb3NhbF9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUpLAogICAgLy8gICAgIG1pbl9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuVUludDY0KHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUpLAogICAgLy8gICAgIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgZGlzY3Vzc2lvbl9kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICB2b3RpbmdfZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICBjb29sX2Rvd25fZHVyYXRpb249YXJjNC5VSW50NjQoc2VsZi5jb29sX2Rvd25fZHVyYXRpb24udmFsdWUpLAogICAgLy8gICAgIHN0YWxlX3Byb3Bvc2FsX2R1cmF0aW9uPWFyYzQuVUludDY0KHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24udmFsdWUpLAogICAgLy8gICAgIHF1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIHdlaWdodGVkX3F1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIG91dHN0YW5kaW5nX2Z1bmRzPWFyYzQuVUludDY0KHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUpLAogICAgLy8gICAgIHBlbmRpbmdfcHJvcG9zYWxzPWFyYzQuVUludDY0KHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUpLAogICAgLy8gICAgIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICAvLyAgICAgY29tbWl0dGVlX21lbWJlcnM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfbWVtYmVycy52YWx1ZSksCiAgICAvLyAgICAgY29tbWl0dGVlX3ZvdGVzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX3ZvdGVzLnZhbHVlKSwKICAgIC8vICkKICAgIHVuY292ZXIgMjQKICAgIHVuY292ZXIgMjQKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDIyCiAgICBjb25jYXQKICAgIHVuY292ZXIgMjEKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyMAogICAgY29uY2F0CiAgICB1bmNvdmVyIDE5CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTgKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNwogICAgY29uY2F0CiAgICB1bmNvdmVyIDE2CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTUKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNAogICAgY29uY2F0CiAgICB1bmNvdmVyIDEzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTIKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMQogICAgY29uY2F0CiAgICB1bmNvdmVyIDEwCiAgICBjb25jYXQKICAgIHVuY292ZXIgOQogICAgY29uY2F0CiAgICB1bmNvdmVyIDgKICAgIGNvbmNhdAogICAgdW5jb3ZlciA3CiAgICBjb25jYXQKICAgIHVuY292ZXIgNgogICAgY29uY2F0CiAgICB1bmNvdmVyIDUKICAgIGNvbmNhdAogICAgdW5jb3ZlciA0CiAgICBjb25jYXQKICAgIHVuY292ZXIgMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICByZXRzdWIK", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuY2xlYXJfc3RhdGVfcHJvZ3JhbToKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
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
     * Constructs a no op call for the declare_committee(byte[36],uint64,uint64)void ABI method
     *
     * Sets the xGov Committee in charge.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static declareCommittee(params) {
        return {
            ...params,
            method: 'declare_committee(byte[36],uint64,uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.cid, params.args.size, params.args.votes],
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
     * Constructs a no op call for the get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64) ABI method
     *
     * Returns the xGov Registry state.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getState(params) {
        return {
            ...params,
            method: 'get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)',
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
         * Makes a call to the XGovRegistry smart contract using the `declare_committee(byte[36],uint64,uint64)void` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `declare_committee(byte[36],uint64,uint64)void` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `declare_committee(byte[36],uint64,uint64)void` ABI method.
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
         * Makes a call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)` ABI method.
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
     * Makes a readonly (simulated) call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)` ABI method.
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
            committeeId: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("committeeId"))); },
            /**
             * Get the current value of the committee_manager key in global state
             */
            committeeManager: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("committeeManager"))); },
            /**
             * Get the current value of the committee_members key in global state
             */
            committeeMembers: async () => { return (await this.appClient.state.global.getValue("committeeMembers")); },
            /**
             * Get the current value of the committee_publisher key in global state
             */
            committeePublisher: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("committeePublisher"))); },
            /**
             * Get the current value of the committee_votes key in global state
             */
            committeeVotes: async () => { return (await this.appClient.state.global.getValue("committeeVotes")); },
            /**
             * Get the current value of the cool_down_duration key in global state
             */
            coolDownDuration: async () => { return (await this.appClient.state.global.getValue("coolDownDuration")); },
            /**
             * Get the current value of the discussion_duration_large key in global state
             */
            discussionDurationLarge: async () => { return (await this.appClient.state.global.getValue("discussionDurationLarge")); },
            /**
             * Get the current value of the discussion_duration_medium key in global state
             */
            discussionDurationMedium: async () => { return (await this.appClient.state.global.getValue("discussionDurationMedium")); },
            /**
             * Get the current value of the discussion_duration_small key in global state
             */
            discussionDurationSmall: async () => { return (await this.appClient.state.global.getValue("discussionDurationSmall")); },
            /**
             * Get the current value of the discussion_duration_xlarge key in global state
             */
            discussionDurationXlarge: async () => { return (await this.appClient.state.global.getValue("discussionDurationXlarge")); },
            /**
             * Get the current value of the kyc_provider key in global state
             */
            kycProvider: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("kycProvider"))); },
            /**
             * Get the current value of the max_requested_amount_large key in global state
             */
            maxRequestedAmountLarge: async () => { return (await this.appClient.state.global.getValue("maxRequestedAmountLarge")); },
            /**
             * Get the current value of the max_requested_amount_medium key in global state
             */
            maxRequestedAmountMedium: async () => { return (await this.appClient.state.global.getValue("maxRequestedAmountMedium")); },
            /**
             * Get the current value of the max_requested_amount_small key in global state
             */
            maxRequestedAmountSmall: async () => { return (await this.appClient.state.global.getValue("maxRequestedAmountSmall")); },
            /**
             * Get the current value of the min_requested_amount key in global state
             */
            minRequestedAmount: async () => { return (await this.appClient.state.global.getValue("minRequestedAmount")); },
            /**
             * Get the current value of the outstanding_funds key in global state
             */
            outstandingFunds: async () => { return (await this.appClient.state.global.getValue("outstandingFunds")); },
            /**
             * Get the current value of the pending_proposals key in global state
             */
            pendingProposals: async () => { return (await this.appClient.state.global.getValue("pendingProposals")); },
            /**
             * Get the current value of the proposal_commitment_bps key in global state
             */
            proposalCommitmentBps: async () => { return (await this.appClient.state.global.getValue("proposalCommitmentBps")); },
            /**
             * Get the current value of the proposal_fee key in global state
             */
            proposalFee: async () => { return (await this.appClient.state.global.getValue("proposalFee")); },
            /**
             * Get the current value of the proposal_publishing_bps key in global state
             */
            proposalPublishingBps: async () => { return (await this.appClient.state.global.getValue("proposalPublishingBps")); },
            /**
             * Get the current value of the proposer_fee key in global state
             */
            proposerFee: async () => { return (await this.appClient.state.global.getValue("proposerFee")); },
            /**
             * Get the current value of the quorum_large key in global state
             */
            quorumLarge: async () => { return (await this.appClient.state.global.getValue("quorumLarge")); },
            /**
             * Get the current value of the quorum_medium key in global state
             */
            quorumMedium: async () => { return (await this.appClient.state.global.getValue("quorumMedium")); },
            /**
             * Get the current value of the quorum_small key in global state
             */
            quorumSmall: async () => { return (await this.appClient.state.global.getValue("quorumSmall")); },
            /**
             * Get the current value of the request_id key in global state
             */
            requestId: async () => { return (await this.appClient.state.global.getValue("requestId")); },
            /**
             * Get the current value of the stale_proposal_duration key in global state
             */
            staleProposalDuration: async () => { return (await this.appClient.state.global.getValue("staleProposalDuration")); },
            /**
             * Get the current value of the voting_duration_large key in global state
             */
            votingDurationLarge: async () => { return (await this.appClient.state.global.getValue("votingDurationLarge")); },
            /**
             * Get the current value of the voting_duration_medium key in global state
             */
            votingDurationMedium: async () => { return (await this.appClient.state.global.getValue("votingDurationMedium")); },
            /**
             * Get the current value of the voting_duration_small key in global state
             */
            votingDurationSmall: async () => { return (await this.appClient.state.global.getValue("votingDurationSmall")); },
            /**
             * Get the current value of the voting_duration_xlarge key in global state
             */
            votingDurationXlarge: async () => { return (await this.appClient.state.global.getValue("votingDurationXlarge")); },
            /**
             * Get the current value of the weighted_quorum_large key in global state
             */
            weightedQuorumLarge: async () => { return (await this.appClient.state.global.getValue("weightedQuorumLarge")); },
            /**
             * Get the current value of the weighted_quorum_medium key in global state
             */
            weightedQuorumMedium: async () => { return (await this.appClient.state.global.getValue("weightedQuorumMedium")); },
            /**
             * Get the current value of the weighted_quorum_small key in global state
             */
            weightedQuorumSmall: async () => { return (await this.appClient.state.global.getValue("weightedQuorumSmall")); },
            /**
             * Get the current value of the xgov_fee key in global state
             */
            xgovFee: async () => { return (await this.appClient.state.global.getValue("xgovFee")); },
            /**
             * Get the current value of the xgov_manager key in global state
             */
            xgovManager: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgovManager"))); },
            /**
             * Get the current value of the xgov_payor key in global state
             */
            xgovPayor: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgovPayor"))); },
            /**
             * Get the current value of the xgov_reviewer key in global state
             */
            xgovReviewer: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgovReviewer"))); },
            /**
             * Get the current value of the xgov_subscriber key in global state
             */
            xgovSubscriber: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("xgovSubscriber"))); },
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
             * Add a declare_committee(byte[36],uint64,uint64)void method call against the XGovRegistry contract
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
             * Add a get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64) method call against the XGovRegistry contract
             */
            getState(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getState(params)));
                resultMappers.push((v) => client.decodeReturnValue('get_state()(address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[36],uint64,uint64)', v));
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
