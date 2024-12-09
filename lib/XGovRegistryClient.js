import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "XGovRegistry", "structs": { "XGovRegistryConfig": [{ "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "coolDownDuration", "type": "uint64" }, { "name": "staleProposalDuration", "type": "uint64" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }], "TypedGlobalState": [{ "name": "xgovManager", "type": "address" }, { "name": "xgovPayor", "type": "address" }, { "name": "kycProvider", "type": "address" }, { "name": "committeeManager", "type": "address" }, { "name": "committeePublisher", "type": "address" }, { "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "coolDownDuration", "type": "uint64" }, { "name": "staleProposalDuration", "type": "uint64" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }, { "name": "outstandingFunds", "type": "uint64" }, { "name": "pendingProposals", "type": "uint64" }, { "name": "committeeId", "type": "byte[32]" }, { "name": "committeeMembers", "type": "uint64" }, { "name": "committeeVotes", "type": "uint64" }] }, "methods": [{ "name": "create", "desc": "Create the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "set_xgov_manager", "desc": "Sets the xGov Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_payor", "desc": "Sets the xGov Payor.", "args": [{ "name": "payor", "type": "address", "desc": "Address of the new xGov Payor" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_reviewer", "desc": "Sets the xGov Reviewer.", "args": [{ "name": "reviewer", "type": "address", "desc": "Address of the new xGov Reviewer" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_subscriber", "desc": "Sets the xGov Subscriber.", "args": [{ "name": "subscriber", "type": "address", "desc": "Address of the new xGov Subscriber" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_kyc_provider", "desc": "Sets the KYC provider.", "args": [{ "name": "provider", "type": "address", "desc": "Address of the new KYC Provider" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_manager", "desc": "Sets the Committee Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_publisher", "desc": "Sets the Committee Publisher.", "args": [{ "name": "publisher", "type": "address", "desc": "Address of the new Committee Publisher" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "config_xgov_registry", "desc": "Sets the configuration of the xGov Registry.", "args": [{ "name": "config", "type": "(uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3])", "desc": "Configuration class containing the field data", "struct": "XGovRegistryConfig" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "update_xgov_registry", "desc": "Updates the xGov Registry contract", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["UpdateApplication"] } }, { "name": "subscribe_xgov", "desc": "Subscribes the sender to being an xGov", "args": [{ "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xgov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the signup fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov", "desc": "Unsubscribes the designated address from being an xGov", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov to unsubscribe" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_xgov_app", "desc": "Subscribes the app to being an xGov", "args": [{ "name": "app_id", "type": "uint64", "desc": "The id of the application to subscribe" }, { "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xgov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the signup fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov_app", "desc": "Unsubscribes the designated app from being an xGov", "args": [{ "name": "app_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "request_subscribe_xgov", "desc": "Requests to subscribe to the xGov", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }, { "name": "owner_address", "type": "address", "desc": "The address of the owner / voting address" }, { "name": "relation_type", "type": "uint64", "desc": "The type of relationship enum" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xgov signup fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "approve_subscribe_xgov", "desc": "Approves a request to subscribe to xGov", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to approve" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "reject_subscribe_xgov", "desc": "Rejects a request to subscribe to xGov", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to reject" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_voting_account", "desc": "Sets the voting address for the xGov", "args": [{ "name": "xgov_address", "type": "address" }, { "name": "voting_address", "type": "address", "desc": "The voting account address to delegate voting power to" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_proposer", "desc": "Subscribes the sender to being a Proposer", "args": [{ "name": "payment", "type": "pay", "desc": "The payment transaction covering the proposer fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_proposer_kyc", "desc": "Sets a proposer's KYC status", "args": [{ "name": "proposer", "type": "address", "desc": "The address of the Proposer" }, { "name": "kyc_status", "type": "bool", "desc": "The new status of the Proposer" }, { "name": "kyc_expiring", "type": "uint64", "desc": "The expiration date as a unix timestamp of the time the KYC expires" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "declare_committee", "desc": "Sets the xGov Committee in charge", "args": [{ "name": "cid", "type": "byte[32]" }, { "name": "size", "type": "uint64", "desc": "The size of the xGov Committee" }, { "name": "votes", "type": "uint64", "desc": "The voting power of the xGov Committee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "open_proposal", "desc": "Creates a new Proposal", "args": [{ "name": "payment", "type": "pay", "desc": "payment for covering the proposal fee (includes child contract MBR)" }], "returns": { "type": "uint64" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote_proposal", "desc": "Votes on a proposal", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application id of the proposal app being voted on" }, { "name": "xgov_address", "type": "address", "desc": "(arc4.Address): The address of the xgov being voted on behalf of" }, { "name": "approval_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of approvals from the xgov allocated" }, { "name": "rejection_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of rejections from the xgov allocated" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pay_grant_proposal", "desc": "Disburses the funds for an approved proposal", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the approved proposal" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "deposit_funds", "desc": "Tracks deposits to the xGov Treasury (xGov Registry Account)", "args": [{ "name": "payment", "type": "pay", "desc": "the deposit transaction" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_funds", "desc": "Remove funds from the xGov Treasury (xGov Registry Account)", "args": [{ "name": "amount", "type": "uint64", "desc": "the amount to remove" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_state", "desc": "Returns the xGov Registry state", "args": [], "returns": { "type": "(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)", "struct": "TypedGlobalState" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 31, "bytes": 8 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "committee_id": { "key": "Y29tbWl0dGVlX2lk", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_manager": { "key": "Y29tbWl0dGVlX21hbmFnZXI=", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_members": { "key": "Y29tbWl0dGVlX21lbWJlcnM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "committee_publisher": { "key": "Y29tbWl0dGVlX3B1Ymxpc2hlcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_votes": { "key": "Y29tbWl0dGVlX3ZvdGVz", "keyType": "AVMString", "valueType": "AVMUint64" }, "cool_down_duration": { "key": "Y29vbF9kb3duX2R1cmF0aW9u", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_large": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_medium": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0=", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_small": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_xlarge": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "kyc_provider": { "key": "a3ljX3Byb3ZpZGVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "max_requested_amount_large": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_medium": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVt", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_small": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGw=", "keyType": "AVMString", "valueType": "AVMUint64" }, "min_requested_amount": { "key": "bWluX3JlcXVlc3RlZF9hbW91bnQ=", "keyType": "AVMString", "valueType": "AVMUint64" }, "outstanding_funds": { "key": "b3V0c3RhbmRpbmdfZnVuZHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "pending_proposals": { "key": "cGVuZGluZ19wcm9wb3NhbHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_commitment_bps": { "key": "cHJvcG9zYWxfY29tbWl0bWVudF9icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_fee": { "key": "cHJvcG9zYWxfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_publishing_bps": { "key": "cHJvcG9zYWxfcHVibGlzaGluZ19icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposer_fee": { "key": "cHJvcG9zZXJfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_large": { "key": "cXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_medium": { "key": "cXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_small": { "key": "cXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "request_id": { "key": "cmVxdWVzdF9pZA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "stale_proposal_duration": { "key": "c3RhbGVfcHJvcG9zYWxfZHVyYXRpb24=", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_large": { "key": "dm90aW5nX2R1cmF0aW9uX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_medium": { "key": "dm90aW5nX2R1cmF0aW9uX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_small": { "key": "dm90aW5nX2R1cmF0aW9uX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_xlarge": { "key": "dm90aW5nX2R1cmF0aW9uX3hsYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_large": { "key": "d2VpZ2h0ZWRfcXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_medium": { "key": "d2VpZ2h0ZWRfcXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_small": { "key": "d2VpZ2h0ZWRfcXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_fee": { "key": "eGdvdl9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_manager": { "key": "eGdvdl9tYW5hZ2Vy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_payor": { "key": "eGdvdl9wYXlvcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_reviewer": { "key": "eGdvdl9yZXZpZXdlcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_subscriber": { "key": "eGdvdl9zdWJzY3JpYmVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgovs": { "key": "eGdvdnM=", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuYXBwcm92YWxfcHJvZ3JhbToKICAgIGludGNibG9jayAwIDEgNiAzMgogICAgYnl0ZWNibG9jayAweDc4Njc2Zjc2NzMgMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczIDB4NzggMHg3MCAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMgMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIgMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUgMHg3ODY3NmY3NjVmNzA2MTc5NmY3MiAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MiAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIgMHg3ODY3NmY3NjVmNjY2NTY1IDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1IDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQgMHgwMCAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MiAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzA3NTYyNmM2OTczNjg2NTcyIDB4NzA3MjZmNzA2ZjczNjE2YzVmNzA3NTYyNmM2OTczNjg2OTZlNjc1ZjYyNzA3MyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmM2MTcyNjc2NSAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZCAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1IDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NSAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1IDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUgMHg2MzZmNmY2YzVmNjQ2Zjc3NmU1ZjY0NzU3MjYxNzQ2OTZmNmUgMHg3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMgMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZCAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NSAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1IDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MyAweDcyIDB4Nzg2NzZmNzY1ZjcyNjU3NjY5NjU3NzY1NzIgMHg2ZDY5NmU1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0IDB4NzM3NDYxNmM2NTVmNzA3MjZmNzA2ZjczNjE2YzVmNjQ3NTcyNjE3NDY5NmY2ZSAweDE1MWY3Yzc1IDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2OTY0IDB4NzM3NDYxNzQ3NTczCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYm56IG1haW5fYWZ0ZXJfaWZfZWxzZUAyCiAgICBjYWxsc3ViIF9faW5pdF9fCgptYWluX2FmdGVyX2lmX2Vsc2VAMjoKICAgIGNhbGxzdWIgX19wdXlhX2FyYzRfcm91dGVyX18KICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5fX2luaXRfXygpIC0+IHZvaWQ6Cl9faW5pdF9fOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDAKICAgIC8vIGRlZiBfX2luaXRfXyhzZWxmKSAtPiBOb25lOgogICAgcHJvdG8gMCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MS00MgogICAgLy8gIyBQcmVjb25kaXRpb25zCiAgICAvLyBhc3NlcnQgVHhuLmdsb2JhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuR0xPQkFMX0JZVEVTLCBlcnIuV1JPTkdfR0xPQkFMX0JZVEVTCiAgICB0eG4gR2xvYmFsTnVtQnl0ZVNsaWNlCiAgICBwdXNoaW50IDggLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBHbG9iYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDMKICAgIC8vIGFzc2VydCBUeG4uZ2xvYmFsX251bV91aW50ID09IGNmZy5HTE9CQUxfVUlOVFMsIGVyci5XUk9OR19HTE9CQUxfVUlOVFMKICAgIHR4biBHbG9iYWxOdW1VaW50CiAgICBwdXNoaW50IDMxIC8vIDMxCiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NAogICAgLy8gYXNzZXJ0IFR4bi5sb2NhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuTE9DQUxfQllURVMsIGVyci5XUk9OR19MT0NBTF9CWVRFUwogICAgdHhuIExvY2FsTnVtQnl0ZVNsaWNlCiAgICAhCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUKICAgIC8vIGFzc2VydCBUeG4ubG9jYWxfbnVtX3VpbnQgPT0gY2ZnLkxPQ0FMX1VJTlRTLCBlcnIuV1JPTkdfTE9DQUxfVUlOVFMKICAgIHR4biBMb2NhbE51bVVpbnQKICAgICEKICAgIGFzc2VydCAvLyBXcm9uZyBMb2NhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Ny00OAogICAgLy8gIyBJbml0aWFsaXplIGdsb2JhbCBzdGF0ZSB2YXJpYWJsZXMKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfTUFOQUdFUikKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwCiAgICAvLyBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICBieXRlYyAxNCAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OS01MQogICAgLy8gc2VsZi54Z292X3N1YnNjcmliZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTIKICAgIC8vIHNlbGYueGdvdl9wYXlvciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX1BBWU9SKQogICAgYnl0ZWMgNyAvLyAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MwogICAgLy8gc2VsZi54Z292X3Jldmlld2VyID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfUkVWSUVXRVIpCiAgICBieXRlYyAzOSAvLyAweDc4Njc2Zjc2NWY3MjY1NzY2OTY1Nzc2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NQogICAgLy8gc2VsZi5reWNfcHJvdmlkZXIgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfS1lDX1BST1ZJREVSKQogICAgYnl0ZWMgOCAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTcKICAgIC8vIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfTUFOQUdFUgogICAgYnl0ZWMgOSAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTYtNTgKICAgIC8vIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01BTkFHRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MAogICAgLy8gYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9QVUJMSVNIRVIKICAgIGJ5dGVjIDE1IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTktNjEKICAgIC8vIHNlbGYuY29tbWl0dGVlX3B1Ymxpc2hlciA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfUFVCTElTSEVSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjMKICAgIC8vIHNlbGYueGdvdl9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9GRUUpCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjQKICAgIC8vIHNlbGYueGdvdnMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfWEdPVlMpCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NQogICAgLy8gc2VsZi5wcm9wb3Nlcl9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TRVJfRkVFKQogICAgYnl0ZWMgMTEgLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjYKICAgIC8vIHNlbGYucHJvcG9zYWxfZmVlID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0ZFRSkKICAgIGJ5dGVjIDYgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjgKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9QVUJMSVNISU5HX0JQUwogICAgYnl0ZWMgMTYgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjctNjkKICAgIC8vIHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TQUxfUFVCTElTSElOR19CUFMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0NPTU1JVE1FTlRfQlBTCiAgICBieXRlYyAxNyAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MC03MgogICAgLy8gc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2JwcyA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9DT01NSVRNRU5UX0JQUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUlOX1JFUVVFU1RFRF9BTU9VTlQKICAgIGJ5dGVjIDQwIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0LTc2CiAgICAvLyBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50ID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01JTl9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzkKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9TTUFMTAogICAgYnl0ZWMgMTggLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzgtODAKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX01FRElVTQogICAgYnl0ZWMgMTkgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MS04MwogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODUKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9MQVJHRQogICAgYnl0ZWMgMjAgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQtODYKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIGJ5dGVjIDIxIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OC05MAogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTUVESVVNCiAgICBieXRlYyAyMiAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MS05MwogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9MQVJHRQogICAgYnl0ZWMgMjMgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0LTk2CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9MQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9YTEFSR0UKICAgIGJ5dGVjIDI0IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3LTk5CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fWExBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAyCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1NNQUxMCiAgICBieXRlYyAyNSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMS0xMDMKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9NRURJVU0KICAgIGJ5dGVjIDI2IC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQtMTA2CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9MQVJHRQogICAgYnl0ZWMgMjcgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDctMTA5CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTEKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fWExBUkdFCiAgICBieXRlYyAyOCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwLTExMgogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9YTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTUKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT09MX0RPV05fRFVSQVRJT04KICAgIGJ5dGVjIDI5IC8vIDB4NjM2ZjZmNmM1ZjY0NmY3NzZlNWY2NDc1NzI2MTc0Njk2ZjZlCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0LTExNgogICAgLy8gc2VsZi5jb29sX2Rvd25fZHVyYXRpb24gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09PTF9ET1dOX0RVUkFUSU9OCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE4CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfU1RBTEVfUFJPUE9TQUxfRFVSQVRJT04KICAgIGJ5dGVjIDQxIC8vIDB4NzM3NDYxNmM2NTVmNzA3MjZmNzA2ZjczNjE2YzVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNy0xMTkKICAgIC8vIHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfU1RBTEVfUFJPUE9TQUxfRFVSQVRJT04KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjEKICAgIC8vIHNlbGYucXVvcnVtX3NtYWxsID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9TTUFMTCkKICAgIGJ5dGVjIDMwIC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMgogICAgLy8gc2VsZi5xdW9ydW1fbWVkaXVtID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9NRURJVU0pCiAgICBieXRlYyAzMSAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMwogICAgLy8gc2VsZi5xdW9ydW1fbGFyZ2UgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUVVPUlVNX0xBUkdFKQogICAgYnl0ZWMgMzIgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI2CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX1NNQUxMCiAgICBieXRlYyAzMyAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyNS0xMjcKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9TTUFMTAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyOQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9NRURJVU0KICAgIGJ5dGVjIDM0IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjgtMTMwCiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzMgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9MQVJHRQogICAgYnl0ZWMgMzUgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzEtMTMzCiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzUKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfT1VUU1RBTkRJTkdfRlVORFMpCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzgKICAgIC8vIHNlbGYuY29tbWl0dGVlX21lbWJlcnMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01FTUJFUlMpCiAgICBieXRlYyAzNiAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2NTZkNjI2NTcyNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTM5CiAgICAvLyBzZWxmLmNvbW1pdHRlZV92b3RlcyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfVk9URVMpCiAgICBieXRlYyAzNyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDEKICAgIC8vIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUEVORElOR19QUk9QT1NBTFMpCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNDMKICAgIC8vIHNlbGYucmVxdWVzdF9pZCA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9SRVFVRVNUX0lEKQogICAgYnl0ZWMgMTIgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX19wdXlhX2FyYzRfcm91dGVyX18oKSAtPiB1aW50NjQ6Cl9fcHV5YV9hcmM0X3JvdXRlcl9fOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgcHJvdG8gMCAxCiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogX19wdXlhX2FyYzRfcm91dGVyX19fYWZ0ZXJfaWZfZWxzZUAzMgogICAgcHVzaGJ5dGVzcyAweDRjNWM2MWJhIDB4ZDZjOWNjMWEgMHg1YzQ4NDA1NSAweDExY2Y5NzIwIDB4ZDQyMTZiNmUgMHhiYTg1MjBmMiAweDE2NzdiMzBlIDB4YWEzNDhkMGQgMHhhZTcyY2Q4YyAweDQ5NTZjMWFiIDB4YTA4MmNlZjggMHg3NjcyNTU1OSAweGU5NTUzZjhkIDB4MDRmOTMyMmIgMHg0NTA3NzM5MCAweDNjMzFiYzAyIDB4MGQyYzc4OTEgMHgwZGEyNzg4NSAweDdhNGZlZTQzIDB4NTJkZDEwZDcgMHhkNGQzN2E2NCAweDM0MzQ5ZGNjIDB4MTU4ZjhkZDYgMHhkYjI3YjlhZiAweGZkYzY5NWMyIDB4YmE5MGFiNTQgMHg2ZjczMjI2OSAvLyBtZXRob2QgImNyZWF0ZSgpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfbWFuYWdlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF9wYXlvcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF94Z292X3Jldmlld2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3Zfc3Vic2NyaWJlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF9reWNfcHJvdmlkZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfY29tbWl0dGVlX21hbmFnZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgImNvbmZpZ194Z292X3JlZ2lzdHJ5KCh1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjRbM10sdWludDY0WzRdLHVpbnQ2NFs0XSx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbM10pKXZvaWQiLCBtZXRob2QgInVwZGF0ZV94Z292X3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJzdWJzY3JpYmVfeGdvdihhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292KGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3hnb3ZfYXBwKHVpbnQ2NCxhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292X2FwcCh1aW50NjQpdm9pZCIsIG1ldGhvZCAicmVxdWVzdF9zdWJzY3JpYmVfeGdvdihhZGRyZXNzLGFkZHJlc3MsdWludDY0LHBheSl2b2lkIiwgbWV0aG9kICJhcHByb3ZlX3N1YnNjcmliZV94Z292KHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZWplY3Rfc3Vic2NyaWJlX3hnb3YodWludDY0KXZvaWQiLCBtZXRob2QgInNldF92b3RpbmdfYWNjb3VudChhZGRyZXNzLGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3Byb3Bvc2VyKHBheSl2b2lkIiwgbWV0aG9kICJzZXRfcHJvcG9zZXJfa3ljKGFkZHJlc3MsYm9vbCx1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVjbGFyZV9jb21taXR0ZWUoYnl0ZVszMl0sdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJvcGVuX3Byb3Bvc2FsKHBheSl1aW50NjQiLCBtZXRob2QgInZvdGVfcHJvcG9zYWwodWludDY0LGFkZHJlc3MsdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJwYXlfZ3JhbnRfcHJvcG9zYWwodWludDY0KXZvaWQiLCBtZXRob2QgImRlcG9zaXRfZnVuZHMocGF5KXZvaWQiLCBtZXRob2QgIndpdGhkcmF3X2Z1bmRzKHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJnZXRfc3RhdGUoKShhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0WzNdLHVpbnQ2NFs0XSx1aW50NjRbNF0sdWludDY0LHVpbnQ2NCx1aW50NjRbM10sdWludDY0WzNdLHVpbnQ2NCx1aW50NjQsYnl0ZVszMl0sdWludDY0LHVpbnQ2NCkiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBfX3B1eWFfYXJjNF9yb3V0ZXJfX19jcmVhdGVfcm91dGVAMiBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDMgX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3BheW9yX3JvdXRlQDQgX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3hnb3ZfcmV2aWV3ZXJfcm91dGVANSBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfeGdvdl9zdWJzY3JpYmVyX3JvdXRlQDYgX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X2t5Y19wcm92aWRlcl9yb3V0ZUA3IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9jb21taXR0ZWVfbWFuYWdlcl9yb3V0ZUA4IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9jb21taXR0ZWVfcHVibGlzaGVyX3JvdXRlQDkgX19wdXlhX2FyYzRfcm91dGVyX19fY29uZmlnX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTAgX19wdXlhX2FyYzRfcm91dGVyX19fdXBkYXRlX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTEgX19wdXlhX2FyYzRfcm91dGVyX19fc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTIgX19wdXlhX2FyYzRfcm91dGVyX19fdW5zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxMyBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zdWJzY3JpYmVfeGdvdl9hcHBfcm91dGVAMTQgX19wdXlhX2FyYzRfcm91dGVyX19fdW5zdWJzY3JpYmVfeGdvdl9hcHBfcm91dGVAMTUgX19wdXlhX2FyYzRfcm91dGVyX19fcmVxdWVzdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxNiBfX3B1eWFfYXJjNF9yb3V0ZXJfX19hcHByb3ZlX3N1YnNjcmliZV94Z292X3JvdXRlQDE3IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3JlamVjdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxOCBfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMTkgX19wdXlhX2FyYzRfcm91dGVyX19fc3Vic2NyaWJlX3Byb3Bvc2VyX3JvdXRlQDIwIF9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9wcm9wb3Nlcl9reWNfcm91dGVAMjEgX19wdXlhX2FyYzRfcm91dGVyX19fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjIgX19wdXlhX2FyYzRfcm91dGVyX19fb3Blbl9wcm9wb3NhbF9yb3V0ZUAyMyBfX3B1eWFfYXJjNF9yb3V0ZXJfX192b3RlX3Byb3Bvc2FsX3JvdXRlQDI0IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3BheV9ncmFudF9wcm9wb3NhbF9yb3V0ZUAyNSBfX3B1eWFfYXJjNF9yb3V0ZXJfX19kZXBvc2l0X2Z1bmRzX3JvdXRlQDI2IF9fcHV5YV9hcmM0X3JvdXRlcl9fX3dpdGhkcmF3X2Z1bmRzX3JvdXRlQDI3IF9fcHV5YV9hcmM0X3JvdXRlcl9fX2dldF9zdGF0ZV9yb3V0ZUAyOAogICAgaW50Y18wIC8vIDAKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fY3JlYXRlX3JvdXRlQDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChjcmVhdGU9InJlcXVpcmUiKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gY3JlYXRpbmcKICAgIGNhbGxzdWIgY3JlYXRlCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIyMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3ZfbWFuYWdlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3BheW9yX3JvdXRlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIzNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3BheW9yCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfeGdvdl9yZXZpZXdlcl9yb3V0ZUA1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNDkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X3Jldmlld2VyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zZXRfeGdvdl9zdWJzY3JpYmVyX3JvdXRlQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI2MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3Zfc3Vic2NyaWJlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X2t5Y19wcm92aWRlcl9yb3V0ZUA3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjc3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9reWNfcHJvdmlkZXIKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF9jb21taXR0ZWVfbWFuYWdlcl9yb3V0ZUA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjkxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyOTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9jb21taXR0ZWVfbWFuYWdlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X2NvbW1pdHRlZV9wdWJsaXNoZXJfcm91dGVAOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzA1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fY29uZmlnX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgY29uZmlnX3hnb3ZfcmVnaXN0cnkKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3VwZGF0ZV94Z292X3JlZ2lzdHJ5X3JvdXRlQDExOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzY0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoYWxsb3dfYWN0aW9ucz1bIlVwZGF0ZUFwcGxpY2F0aW9uIl0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICBwdXNoaW50IDQgLy8gVXBkYXRlQXBwbGljYXRpb24KICAgID09CiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBVcGRhdGVBcHBsaWNhdGlvbgogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHVwZGF0ZV94Z292X3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX191bnN1YnNjcmliZV94Z292X3JvdXRlQDEzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHVuc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3N1YnNjcmliZV94Z292X2FwcF9yb3V0ZUAxNDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV94Z292X2FwcAogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fdW5zdWJzY3JpYmVfeGdvdl9hcHBfcm91dGVAMTU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ1NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgdW5zdWJzY3JpYmVfeGdvdl9hcHAKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3JlcXVlc3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0ODIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDgyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZXF1ZXN0X3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19hcHByb3ZlX3N1YnNjcmliZV94Z292X3JvdXRlQDE3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTIwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGFwcHJvdmVfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3JlamVjdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZWplY3Rfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3NldF92b3RpbmdfYWNjb3VudF9yb3V0ZUAxOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTU3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfdm90aW5nX2FjY291bnQKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3N1YnNjcmliZV9wcm9wb3Nlcl9yb3V0ZUAyMDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV9wcm9wb3NlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fc2V0X3Byb3Bvc2VyX2t5Y19yb3V0ZUAyMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjA5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfcHJvcG9zZXJfa3ljCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19kZWNsYXJlX2NvbW1pdHRlZV9yb3V0ZUAyMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjM3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkZWNsYXJlX2NvbW1pdHRlZQogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fb3Blbl9wcm9wb3NhbF9yb3V0ZUAyMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU4CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIGNhbGxzdWIgb3Blbl9wcm9wb3NhbAogICAgaXRvYgogICAgYnl0ZWMgNDIgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3ZvdGVfcHJvcG9zYWxfcm91dGVAMjQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxLTM5CiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgdm90ZV9wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fcGF5X2dyYW50X3Byb3Bvc2FsX3JvdXRlQDI1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzcxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHBheV9ncmFudF9wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fZGVwb3NpdF9mdW5kc19yb3V0ZUAyNjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzEtMzkKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGRlcG9zaXRfZnVuZHMKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX3dpdGhkcmF3X2Z1bmRzX3JvdXRlQDI3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQ4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NDgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHdpdGhkcmF3X2Z1bmRzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19nZXRfc3RhdGVfcm91dGVAMjg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChyZWFkb25seT1UcnVlKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIGdldF9zdGF0ZQogICAgYnl0ZWMgNDIgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX2FmdGVyX2lmX2Vsc2VAMzI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMS0zOQogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICBpbnRjXzAgLy8gMAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmNyZWF0ZSgpIC0+IHZvaWQ6CmNyZWF0ZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwOS0yMTAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChjcmVhdGU9InJlcXVpcmUiKQogICAgLy8gZGVmIGNyZWF0ZShzZWxmKSAtPiBOb25lOgogICAgcHJvdG8gMCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTkKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlID0gYXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICB0eG4gU2VuZGVyCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X21hbmFnZXIobWFuYWdlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjEtMjIyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjMzCiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IG1hbmFnZXIKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc194Z292X21hbmFnZXIoKSAtPiB1aW50NjQ6CmlzX3hnb3ZfbWFuYWdlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2MC0xNjEKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgaXNfeGdvdl9tYW5hZ2VyKHNlbGYpIC0+IGJvb2w6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2MgogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNSAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfbWFuYWdlciBleGlzdHMKICAgID09CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3BheW9yKHBheW9yOiBieXRlcykgLT4gdm9pZDoKc2V0X3BheW9yOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjM1LTIzNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfcGF5b3Ioc2VsZiwgcGF5b3I6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ2CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI0NwogICAgLy8gc2VsZi54Z292X3BheW9yLnZhbHVlID0gcGF5b3IKICAgIGJ5dGVjIDcgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X3Jldmlld2VyKHJldmlld2VyOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3ZfcmV2aWV3ZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNDktMjUwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X3Jldmlld2VyKHNlbGYsIHJldmlld2VyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI2MAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjEKICAgIC8vIHNlbGYueGdvdl9yZXZpZXdlci52YWx1ZSA9IHJldmlld2VyCiAgICBieXRlYyAzOSAvLyAweDc4Njc2Zjc2NWY3MjY1NzY2OTY1Nzc2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3Zfc3Vic2NyaWJlcihzdWJzY3JpYmVyOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3Zfc3Vic2NyaWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI2My0yNjQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3hnb3Zfc3Vic2NyaWJlcihzZWxmLCBzdWJzY3JpYmVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3NAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzUKICAgIC8vIHNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlID0gc3Vic2NyaWJlcgogICAgYnl0ZWMgMTQgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfa3ljX3Byb3ZpZGVyKHByb3ZpZGVyOiBieXRlcykgLT4gdm9pZDoKc2V0X2t5Y19wcm92aWRlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3Ny0yNzgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2t5Y19wcm92aWRlcihzZWxmLCBwcm92aWRlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODgKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjg5CiAgICAvLyBzZWxmLmt5Y19wcm92aWRlci52YWx1ZSA9IHByb3ZpZGVyCiAgICBieXRlYyA4IC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X2NvbW1pdHRlZV9tYW5hZ2VyKG1hbmFnZXI6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfY29tbWl0dGVlX21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyOTEtMjkyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9jb21taXR0ZWVfbWFuYWdlcihzZWxmLCBtYW5hZ2VyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwMgogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDMKICAgIC8vIHNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUgPSBtYW5hZ2VyCiAgICBieXRlYyA5IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDYxNmU2MTY3NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9jb21taXR0ZWVfcHVibGlzaGVyKHB1Ymxpc2hlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF9jb21taXR0ZWVfcHVibGlzaGVyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzA1LTMwNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfY29tbWl0dGVlX3B1Ymxpc2hlcihzZWxmLCBwdWJsaXNoZXI6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzE2CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxNwogICAgLy8gc2VsZi5jb21taXR0ZWVfcHVibGlzaGVyLnZhbHVlID0gcHVibGlzaGVyCiAgICBieXRlYyAxNSAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzA3NTYyNmM2OTczNjg2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuY29uZmlnX3hnb3ZfcmVnaXN0cnkoY29uZmlnOiBieXRlcykgLT4gdm9pZDoKY29uZmlnX3hnb3ZfcmVnaXN0cnk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMTktMzIwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGNvbmZpZ194Z292X3JlZ2lzdHJ5KHNlbGYsIGNvbmZpZzogdHlwLlhHb3ZSZWdpc3RyeUNvbmZpZykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzMxCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzMgogICAgLy8gYXNzZXJ0IHNlbGYubm9fcGVuZGluZ19wcm9wb3NhbHMoKSwgZXJyLk5PX1BFTkRJTkdfUFJPUE9TQUxTCiAgICBjYWxsc3ViIG5vX3BlbmRpbmdfcHJvcG9zYWxzCiAgICBhc3NlcnQgLy8gQ2Fubm90IHBlcmZvcm0gb3BlcmF0aW9uIHdpdGggcGVuZGluZyBwcm9wb3NhbHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzNAogICAgLy8gc2VsZi54Z292X2ZlZS52YWx1ZSA9IGNvbmZpZy54Z292X2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAwIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzUKICAgIC8vIHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlID0gY29uZmlnLnByb3Bvc2VyX2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCA4IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAxMSAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzNgogICAgLy8gc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUgPSBjb25maWcucHJvcG9zYWxfZmVlLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDE2IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyA2IC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzM3CiAgICAvLyBzZWxmLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzLnZhbHVlID0gY29uZmlnLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDI0IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAxNiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjcwNzU2MjZjNjk3MzY4Njk2ZTY3NWY2MjcwNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzgKICAgIC8vIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUgPSBjb25maWcucHJvcG9zYWxfY29tbWl0bWVudF9icHMubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMzIgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDE3IC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0MAogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCA0OCAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZXh0cmFjdCAwIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAxOCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDEKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtLnZhbHVlID0gY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzFdLm5hdGl2ZQogICAgZHVwCiAgICBleHRyYWN0IDggOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDE5IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQyCiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlLnZhbHVlID0gY29uZmlnLm1heF9yZXF1ZXN0ZWRfYW1vdW50WzJdLm5hdGl2ZQogICAgZXh0cmFjdCAxNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjAgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ0CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCA3MiAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZXh0cmFjdCAwIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAyMSAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ1CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bMV0ubmF0aXZlCiAgICBkdXAKICAgIGV4dHJhY3QgOCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjIgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ2CiAgICAvLyBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblsyXS5uYXRpdmUKICAgIGR1cAogICAgZXh0cmFjdCAxNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjMgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0NwogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzNdLm5hdGl2ZQogICAgZXh0cmFjdCAyNCA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjQgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ5CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMTA0IDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBleHRyYWN0IDAgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDI1IC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzUwCiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzFdLm5hdGl2ZQogICAgZHVwCiAgICBleHRyYWN0IDggOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGJ5dGVjIDI2IC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNTEKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblsyXS5uYXRpdmUKICAgIGR1cAogICAgZXh0cmFjdCAxNiA4IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnRvaQogICAgYnl0ZWMgMjcgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNTIKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bM10ubmF0aXZlCiAgICBleHRyYWN0IDI0IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAyOCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzU0CiAgICAvLyBzZWxmLmNvb2xfZG93bl9kdXJhdGlvbi52YWx1ZSA9IGNvbmZpZy5jb29sX2Rvd25fZHVyYXRpb24ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMTM2IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAyOSAvLyAweDYzNmY2ZjZjNWY2NDZmNzc2ZTVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1NgogICAgLy8gc2VsZi5xdW9ydW1fc21hbGwudmFsdWUgPSBjb25maWcucXVvcnVtWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDE1MiAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZXh0cmFjdCAwIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAzMCAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1NwogICAgLy8gc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlID0gY29uZmlnLnF1b3J1bVsxXS5uYXRpdmUKICAgIGR1cAogICAgZXh0cmFjdCA4IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAzMSAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzU4CiAgICAvLyBzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSA9IGNvbmZpZy5xdW9ydW1bMl0ubmF0aXZlCiAgICBleHRyYWN0IDE2IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAzMiAvLyAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MAogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUgPSBjb25maWcud2VpZ2h0ZWRfcXVvcnVtWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDE3NiAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZXh0cmFjdCAwIDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAzMyAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MQogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlID0gY29uZmlnLndlaWdodGVkX3F1b3J1bVsxXS5uYXRpdmUKICAgIGR1cAogICAgZXh0cmFjdCA4IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAzNCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzYyCiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZS52YWx1ZSA9IGNvbmZpZy53ZWlnaHRlZF9xdW9ydW1bMl0ubmF0aXZlCiAgICBleHRyYWN0IDE2IDggLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBidG9pCiAgICBieXRlYyAzNSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5ub19wZW5kaW5nX3Byb3Bvc2FscygpIC0+IHVpbnQ2NDoKbm9fcGVuZGluZ19wcm9wb3NhbHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzItMTczCiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIG5vX3BlbmRpbmdfcHJvcG9zYWxzKHNlbGYpIC0+IGJvb2w6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3NAogICAgLy8gcmV0dXJuIHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUgPT0gMAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgZXhpc3RzCiAgICAhCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudXBkYXRlX3hnb3ZfcmVnaXN0cnkoKSAtPiB2b2lkOgp1cGRhdGVfeGdvdl9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2NC0zNjUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChhbGxvd19hY3Rpb25zPVsiVXBkYXRlQXBwbGljYXRpb24iXSkKICAgIC8vIGRlZiB1cGRhdGVfeGdvdl9yZWdpc3RyeShzZWxmKSAtPiBOb25lOgogICAgcHJvdG8gMCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzMKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnN1YnNjcmliZV94Z292KHZvdGluZ19hZGRyZXNzOiBieXRlcywgcGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3NS0zNzgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc3Vic2NyaWJlX3hnb3YoCiAgICAvLyAgICAgc2VsZiwgdm90aW5nX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24KICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzkwCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBub3QgaW4gc2VsZi54Z292X2JveCwgZXJyLkFMUkVBRFlfWEdPVgogICAgYnl0ZWNfMiAvLyAweDc4CiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geGdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzkxLTM5MgogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5NC0zOTUKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHZvdGluZ19hZGRyZXNzCiAgICBieXRlY18yIC8vIDB4NzgKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgZnJhbWVfZGlnIC0yCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTYKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQ6IHVpbnQ2NCkgLT4gdWludDY0Ogp2YWxpZF94Z292X3BheW1lbnQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTUtMTk2CiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIHZhbGlkX3hnb3ZfcGF5bWVudChzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk4CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk4LTE5OQogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgYnogdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTk5CiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTgtMTk5CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICBieiB2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzCiAgICBpbnRjXzEgLy8gMQogICAgYiB2YWxpZF94Z292X3BheW1lbnRfYm9vbF9tZXJnZUA0Cgp2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKCnZhbGlkX3hnb3ZfcGF5bWVudF9ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTctMjAwCiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gICAgIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICAvLyApCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudW5zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzKSAtPiB2b2lkOgp1bnN1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk4LTM5OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB1bnN1YnNjcmliZV94Z292KHNlbGYsIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MDktNDEwCiAgICAvLyAjIGVuc3VyZSB0aGUgcHJvdmlkZWQgYWRkcmVzcyBpcyBhbiB4Z292CiAgICAvLyBhc3NlcnQgeGdvdl9hZGRyZXNzLm5hdGl2ZSBpbiBzZWxmLnhnb3ZfYm94LCBlcnIuVU5BVVRIT1JJWkVECiAgICBieXRlY18yIC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBkdXBuIDIKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDExLTQxMgogICAgLy8gIyBnZXQgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyB2b3RpbmdfYWRkcmVzcyA9IHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0ubmF0aXZlCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxNQogICAgLy8geGdvdl9hZGRyZXNzLm5hdGl2ZSA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIGZyYW1lX2RpZyAtMQogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJueiB1bnN1YnNjcmliZV94Z292X2Jvb2xfdHJ1ZUAyCiAgICBmcmFtZV9kaWcgMQogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJ6IHVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9mYWxzZUAzCgp1bnN1YnNjcmliZV94Z292X2Jvb2xfdHJ1ZUAyOgogICAgaW50Y18xIC8vIDEKICAgIGIgdW5zdWJzY3JpYmVfeGdvdl9ib29sX21lcmdlQDQKCnVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKCnVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDEzLTQxNgogICAgLy8gIyBlbnN1cmUgdGhlIHNlbmRlciBpcyB0aGUgeGdvdiBvciB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzLm5hdGl2ZSA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIC8vICksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxOC00MTkKICAgIC8vICMgZGVsZXRlIGJveAogICAgLy8gZGVsIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0KICAgIGZyYW1lX2RpZyAwCiAgICBib3hfZGVsCiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyMAogICAgLy8gc2VsZi54Z292cy52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfeGdvdl9hcHAoYXBwX2lkOiBieXRlcywgdm90aW5nX2FkZHJlc3M6IGJ5dGVzLCBwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CnN1YnNjcmliZV94Z292X2FwcDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyMi00MjgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc3Vic2NyaWJlX3hnb3ZfYXBwKAogICAgLy8gICAgIHNlbGYsCiAgICAvLyAgICAgYXBwX2lkOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uLAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDIKICAgIC8vIGFwcF9jcmVhdG9yID0gQXBwbGljYXRpb24oYXBwX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgZnJhbWVfZGlnIC0zCiAgICBidG9pCiAgICBkdXAKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MwogICAgLy8gYXBwX2FkZHJlc3MgPSBBcHBsaWNhdGlvbihhcHBfaWQubmF0aXZlKS5hZGRyZXNzCiAgICBzd2FwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDUtNDQ2CiAgICAvLyAjIHNlbmRlciBtdXN0IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBhcHAKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IGFwcF9jcmVhdG9yLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICB1bmNvdmVyIDIKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDctNDQ4CiAgICAvLyAjIGVuc3VyZSB0aGUgYXBwIGlzIG5vdCBhbHJlYWR5IGFuIHhnb3YKICAgIC8vIGFzc2VydCBhcHBfYWRkcmVzcyBub3QgaW4gc2VsZi54Z292X2JveCwgZXJyLkFMUkVBRFlfWEdPVgogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGR1cAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhbiB4Z292CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDktNDUwCiAgICAvLyAjIGNoZWNrIHBheW1lbnQKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX3hnb3ZfcGF5bWVudChwYXltZW50KSwgZXJyLklOVkFMSURfUEFZTUVOVAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIHZhbGlkX3hnb3ZfcGF5bWVudAogICAgYXNzZXJ0IC8vIEludmFsaWQgcGF5bWVudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUyCiAgICAvLyBzZWxmLnhnb3ZfYm94W2FwcF9hZGRyZXNzXSA9IHZvdGluZ19hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTIKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ1MwogICAgLy8gc2VsZi54Z292cy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS51bnN1YnNjcmliZV94Z292X2FwcChhcHBfaWQ6IGJ5dGVzKSAtPiB2b2lkOgp1bnN1YnNjcmliZV94Z292X2FwcDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ1NS00NTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgdW5zdWJzY3JpYmVfeGdvdl9hcHAoc2VsZiwgYXBwX2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDY2CiAgICAvLyBhcHBfY3JlYXRvciA9IEFwcGxpY2F0aW9uKGFwcF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjcKICAgIC8vIGFwcF9hZGRyZXNzID0gQXBwbGljYXRpb24oYXBwX2lkLm5hdGl2ZSkuYWRkcmVzcwogICAgc3dhcAogICAgYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDY5LTQ3MAogICAgLy8gIyBlbnN1cmUgdGhlIHByb3ZpZGVkIGFwcCBpcyBhbiB4Z292CiAgICAvLyBhc3NlcnQgYXBwX2FkZHJlc3MgaW4gc2VsZi54Z292X2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGR1cAogICAgY292ZXIgMgogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3MS00NzIKICAgIC8vICMgZ2V0IHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gdm90aW5nX2FkZHJlc3MgPSBzZWxmLnhnb3ZfYm94W2FwcF9hZGRyZXNzXS5uYXRpdmUKICAgIGJveF9nZXQKICAgIHN3YXAKICAgIGNvdmVyIDIKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDc1CiAgICAvLyBhcHBfY3JlYXRvciA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogdW5zdWJzY3JpYmVfeGdvdl9hcHBfYm9vbF90cnVlQDIKICAgIGZyYW1lX2RpZyAxCiAgICB0eG4gU2VuZGVyCiAgICA9PQogICAgYnogdW5zdWJzY3JpYmVfeGdvdl9hcHBfYm9vbF9mYWxzZUAzCgp1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCiAgICBiIHVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfbWVyZ2VANAoKdW5zdWJzY3JpYmVfeGdvdl9hcHBfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKCnVuc3Vic2NyaWJlX3hnb3ZfYXBwX2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3My00NzYKICAgIC8vICMgZW5zdXJlIHRoZSBzZW5kZXIgaXMgdGhlIGFwcCBjcmVhdG9yIG9yIHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBhcHBfY3JlYXRvciA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIC8vICksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3OC00NzkKICAgIC8vICMgZGVsZXRlIGJveAogICAgLy8gZGVsIHNlbGYueGdvdl9ib3hbYXBwX2FkZHJlc3NdCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2RlbAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0ODAKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVxdWVzdF9zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzLCBvd25lcl9hZGRyZXNzOiBieXRlcywgcmVsYXRpb25fdHlwZTogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKcmVxdWVzdF9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ4Mi00ODkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcmVxdWVzdF9zdWJzY3JpYmVfeGdvdigKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbiwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTAzLTUwNAogICAgLy8gIyBlbnN1cmUgdGhlIHhnb3ZfYWRkcmVzcyBpcyBub3QgYWxyZWFkeSBhbiB4Z292CiAgICAvLyBhc3NlcnQgeGdvdl9hZGRyZXNzLm5hdGl2ZSBub3QgaW4gc2VsZi54Z292X2JveCwgZXJyLkFMUkVBRFlfWEdPVgogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTQKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhbiB4Z292CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MDYtNTA3CiAgICAvLyAjIGNoZWNrIHBheW1lbnQKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX3hnb3ZfcGF5bWVudChwYXltZW50KSwgZXJyLklOVkFMSURfUEFZTUVOVAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIHZhbGlkX3hnb3ZfcGF5bWVudAogICAgYXNzZXJ0IC8vIEludmFsaWQgcGF5bWVudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTA5LTUxMAogICAgLy8gIyBjcmVhdGUgcmVxdWVzdCBib3gKICAgIC8vIHJpZCA9IHNlbGYucmVxdWVzdF9pZC52YWx1ZQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEyIC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2lkIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTExLTUxNQogICAgLy8gc2VsZi5yZXF1ZXN0X2JveFtyaWRdID0gdHlwLlhHb3ZTdWJzY3JpYmVSZXF1ZXN0Qm94VmFsdWUoCiAgICAvLyAgICAgeGdvdl9hZGRyPXhnb3ZfYWRkcmVzcywKICAgIC8vICAgICBvd25lcl9hZGRyPW93bmVyX2FkZHJlc3MsCiAgICAvLyAgICAgcmVsYXRpb25fdHlwZT1yZWxhdGlvbl90eXBlLAogICAgLy8gKQogICAgZnJhbWVfZGlnIC00CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZnJhbWVfZGlnIC0yCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxMQogICAgLy8gc2VsZi5yZXF1ZXN0X2JveFtyaWRdID0gdHlwLlhHb3ZTdWJzY3JpYmVSZXF1ZXN0Qm94VmFsdWUoCiAgICBzd2FwCiAgICBpdG9iCiAgICBieXRlYyAzOCAvLyAweDcyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxMS01MTUKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgLy8gICAgIHhnb3ZfYWRkcj14Z292X2FkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcj1vd25lcl9hZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU9cmVsYXRpb25fdHlwZSwKICAgIC8vICkKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxNy01MTgKICAgIC8vICMgaW5jcmVtZW50IHJlcXVlc3QgaWQKICAgIC8vIHNlbGYucmVxdWVzdF9pZC52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTIgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnJlcXVlc3RfaWQgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWMgMTIgLy8gMHg3MjY1NzE3NTY1NzM3NDVmNjk2NAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5hcHByb3ZlX3N1YnNjcmliZV94Z292KHJlcXVlc3RfaWQ6IGJ5dGVzKSAtPiB2b2lkOgphcHByb3ZlX3N1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTIwLTUyMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBhcHByb3ZlX3N1YnNjcmliZV94Z292KHNlbGYsIHJlcXVlc3RfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MzEKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3Zfc3Vic2NyaWJlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3Zfc3Vic2NyaWJlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTMzLTUzNAogICAgLy8gIyBnZXQgdGhlIHJlcXVlc3QKICAgIC8vIHJlcXVlc3QgPSBzZWxmLnJlcXVlc3RfYm94W3JlcXVlc3RfaWQubmF0aXZlXS5jb3B5KCkKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgaXRvYgogICAgYnl0ZWMgMzggLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnJlcXVlc3RfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTM1LTUzNgogICAgLy8gIyBjcmVhdGUgdGhlIHhnb3YKICAgIC8vIHNlbGYueGdvdl9ib3hbcmVxdWVzdC54Z292X2FkZHIubmF0aXZlXSA9IHJlcXVlc3Qub3duZXJfYWRkcgogICAgZHVwCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBieXRlY18yIC8vIDB4NzgKICAgIHN3YXAKICAgIGNvbmNhdAogICAgc3dhcAogICAgZXh0cmFjdCAzMiAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUzNwogICAgLy8gc2VsZi54Z292cy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlY18wIC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUzOC01MzkKICAgIC8vICMgZGVsZXRlIHRoZSByZXF1ZXN0CiAgICAvLyBkZWwgc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0KICAgIGJveF9kZWwKICAgIHBvcAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmlzX3hnb3Zfc3Vic2NyaWJlcigpIC0+IHVpbnQ2NDoKaXNfeGdvdl9zdWJzY3JpYmVyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTY0LTE2NQogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiBpc194Z292X3N1YnNjcmliZXIoc2VsZikgLT4gYm9vbDoKICAgIHByb3RvIDAgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTY2CiAgICAvLyByZXR1cm4gVHhuLnNlbmRlciA9PSBzZWxmLnhnb3Zfc3Vic2NyaWJlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNCAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3Zfc3Vic2NyaWJlciBleGlzdHMKICAgID09CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVqZWN0X3N1YnNjcmliZV94Z292KHJlcXVlc3RfaWQ6IGJ5dGVzKSAtPiB2b2lkOgpyZWplY3Rfc3Vic2NyaWJlX3hnb3Y6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDEtNTQyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHJlamVjdF9zdWJzY3JpYmVfeGdvdihzZWxmLCByZXF1ZXN0X2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTUyCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X3N1YnNjcmliZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X3N1YnNjcmliZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1NC01NTUKICAgIC8vICMgZGVsZXRlIHRoZSByZXF1ZXN0CiAgICAvLyBkZWwgc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0KICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgaXRvYgogICAgYnl0ZWMgMzggLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICBib3hfZGVsCiAgICBwb3AKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfdm90aW5nX2FjY291bnQoeGdvdl9hZGRyZXNzOiBieXRlcywgdm90aW5nX2FkZHJlc3M6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfdm90aW5nX2FjY291bnQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NTctNTYwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF92b3RpbmdfYWNjb3VudCgKICAgIC8vICAgICBzZWxmLCB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcywgdm90aW5nX2FkZHJlc3M6IGFyYzQuQWRkcmVzcwogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzEtNTcyCiAgICAvLyAjIENoZWNrIGlmIHRoZSBzZW5kZXIgaXMgYW4geEdvdiBtZW1iZXIKICAgIC8vIG9sZF92b3RpbmdfYWRkcmVzcywgZXhpc3RzID0gc2VsZi54Z292X2JveC5tYXliZSh4Z292X2FkZHJlc3MubmF0aXZlKQogICAgYnl0ZWNfMiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzMKICAgIC8vIGFzc2VydCBleGlzdHMsIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3NwogICAgLy8gVHhuLnNlbmRlciA9PSBvbGRfdm90aW5nX2FkZHJlc3Mgb3IgVHhuLnNlbmRlciA9PSB4Z292X2FkZHJlc3MKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfdHJ1ZUAyCiAgICBmcmFtZV9kaWcgLTIKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDI6CiAgICBpbnRjXzEgLy8gMQogICAgYiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF9tZXJnZUA0CgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKCnNldF92b3RpbmdfYWNjb3VudF9ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzUtNTc4CiAgICAvLyAjIENoZWNrIHRoYXQgdGhlIHNlbmRlciBpcyBlaXRoZXIgdGhlIHhnb3Ygb3IgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIFR4bi5zZW5kZXIgPT0gb2xkX3ZvdGluZ19hZGRyZXNzIG9yIFR4bi5zZW5kZXIgPT0geGdvdl9hZGRyZXNzCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODAtNTgxCiAgICAvLyAjIFVwZGF0ZSB0aGUgdm90aW5nIGFjY291bnQgaW4gdGhlIHhHb3YgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdID0gdm90aW5nX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAwCiAgICBmcmFtZV9kaWcgLTEKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfcHJvcG9zZXIocGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfcHJvcG9zZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODMtNTg0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV9wcm9wb3NlcihzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk2CiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBub3QgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5BTFJFQURZX1BST1BPU0VSCiAgICBieXRlY18zIC8vIDB4NzAKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gQWxyZWFkeSBhIHByb3Bvc2VyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OTkKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OTctNjAwCiAgICAvLyAjIGNoZWNrIGZlZQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDEKICAgIC8vIGFzc2VydCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnByb3Bvc2VyX2ZlZS52YWx1ZSwgZXJyLldST05HX1BBWU1FTlRfQU1PVU5UCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDExIC8vIDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfZmVlIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBwYXltZW50IGFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjAzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtUeG4uc2VuZGVyXSA9IHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwMy02MDcKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdID0gdHlwLlByb3Bvc2VyQm94VmFsdWUoCiAgICAvLyAgICAgYWN0aXZlX3Byb3Bvc2FsPWFyYzQuQm9vbChGYWxzZSksICAjIG5vcWE6IEZCVDAwMwogICAgLy8gICAgIGt5Y19zdGF0dXM9YXJjNC5Cb29sKEZhbHNlKSwgICMgbm9xYTogRkJUMDAzCiAgICAvLyAgICAga3ljX2V4cGlyaW5nPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgcHVzaGJ5dGVzIDB4MDAwMDAwMDAwMDAwMDAwMDAwCiAgICBib3hfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3Byb3Bvc2VyX2t5Yyhwcm9wb3NlcjogYnl0ZXMsIGt5Y19zdGF0dXM6IGJ5dGVzLCBreWNfZXhwaXJpbmc6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfcHJvcG9zZXJfa3ljOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjA5LTYxMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfcHJvcG9zZXJfa3ljKAogICAgLy8gICAgIHNlbGYsIHByb3Bvc2VyOiBhcmM0LkFkZHJlc3MsIGt5Y19zdGF0dXM6IGFyYzQuQm9vbCwga3ljX2V4cGlyaW5nOiBhcmM0LlVJbnQ2NAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MjUtNjI2CiAgICAvLyAjIGNoZWNrIGlmIGt5YyBwcm92aWRlcgogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgPT0gc2VsZi5reWNfcHJvdmlkZXIudmFsdWUubmF0aXZlLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgOCAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmt5Y19wcm92aWRlciBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MjcKICAgIC8vIGFzc2VydCBwcm9wb3Nlci5uYXRpdmUgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5QUk9QT1NFUl9ET0VTX05PVF9FWElTVAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBQcm9wb3NlciBkb2VzIG5vdCBleGlzdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjI5CiAgICAvLyBhY3RpdmVfcHJvcG9zYWwgPSBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmNvcHkoKS5hY3RpdmVfcHJvcG9zYWwKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgYnl0ZWMgMTMgLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MzEtNjM1CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdID0gdHlwLlByb3Bvc2VyQm94VmFsdWUoCiAgICAvLyAgICAgYWN0aXZlX3Byb3Bvc2FsPWFjdGl2ZV9wcm9wb3NhbCwKICAgIC8vICAgICBreWNfc3RhdHVzPWt5Y19zdGF0dXMsCiAgICAvLyAgICAga3ljX2V4cGlyaW5nPWt5Y19leHBpcmluZywKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtMgogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgaW50Y18xIC8vIDEKICAgIHN3YXAKICAgIHNldGJpdAogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kZWNsYXJlX2NvbW1pdHRlZShjaWQ6IGJ5dGVzLCBzaXplOiBieXRlcywgdm90ZXM6IGJ5dGVzKSAtPiB2b2lkOgpkZWNsYXJlX2NvbW1pdHRlZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzNy02NDAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgZGVjbGFyZV9jb21taXR0ZWUoCiAgICAvLyAgICAgc2VsZiwgY2lkOiBwdHlwLkNvbW1pdHRlZUlkLCBzaXplOiBhcmM0LlVJbnQ2NCwgdm90ZXM6IGFyYzQuVUludDY0CiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAzIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1MgogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9jb21taXR0ZWVfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfY29tbWl0dGVlX21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1NAogICAgLy8gc2VsZi5jb21taXR0ZWVfaWQudmFsdWUgPSBjaWQuY29weSgpCiAgICBieXRlYyA0MyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NAogICAgZnJhbWVfZGlnIC0zCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU1CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlID0gc2l6ZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMgogICAgYnRvaQogICAgYnl0ZWMgMzYgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU2CiAgICAvLyBzZWxmLmNvbW1pdHRlZV92b3Rlcy52YWx1ZSA9IHZvdGVzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBieXRlYyAzNyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc194Z292X2NvbW1pdHRlZV9tYW5hZ2VyKCkgLT4gdWludDY0Ogppc194Z292X2NvbW1pdHRlZV9tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTY4LTE2OQogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiBpc194Z292X2NvbW1pdHRlZV9tYW5hZ2VyKHNlbGYpIC0+IGJvb2w6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3MAogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi5jb21taXR0ZWVfbWFuYWdlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA5IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV9tYW5hZ2VyIGV4aXN0cwogICAgPT0KICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5vcGVuX3Byb3Bvc2FsKHBheW1lbnQ6IHVpbnQ2NCkgLT4gdWludDY0OgpvcGVuX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU4LTY1OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICAvLyBkZWYgb3Blbl9wcm9wb3NhbChzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gVUludDY0OgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NzQtNjc1CiAgICAvLyAjIENoZWNrIGlmIHRoZSBjYWxsZXIgaXMgYSByZWdpc3RlcmVkIHByb3Bvc2VyCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njc3LTY3OAogICAgLy8gIyBDaGVjayBpZiB0aGUgcHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucHJvcG9zZXJfYm94WwogICAgYnl0ZWNfMyAvLyAweDcwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NzkKICAgIC8vIFR4bi5zZW5kZXIKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3Ny02ODAKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnByb3Bvc2VyX2JveFsKICAgIC8vICAgICBUeG4uc2VuZGVyCiAgICAvLyBdLmFjdGl2ZV9wcm9wb3NhbCwgZXJyLkFMUkVBRFlfQUNUSVZFX1BST1BPU0FMCiAgICBjb25jYXQKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGJ5dGVjIDEzIC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgYnl0ZWMgMTMgLy8gMHgwMAogICAgPT0KICAgIGFzc2VydCAvLyBQcm9wb3NlciBhbHJlYWR5IGhhcyBhbiBhY3RpdmUgcHJvcG9zYWwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4MQogICAgLy8gYXNzZXJ0IHNlbGYudmFsaWRfa3ljKFR4bi5zZW5kZXIpLCBlcnIuSU5WQUxJRF9LWUMKICAgIHR4biBTZW5kZXIKICAgIGNhbGxzdWIgdmFsaWRfa3ljCiAgICBhc3NlcnQgLy8gSW52YWxpZCBLWUMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4MwogICAgLy8gYXNzZXJ0IFR4bi5mZWUgPj0gKEdsb2JhbC5taW5fdHhuX2ZlZSAqIDMpLCBlcnIuSU5TVUZGSUNJRU5UX0ZFRQogICAgdHhuIEZlZQogICAgZ2xvYmFsIE1pblR4bkZlZQogICAgcHVzaGludCAzIC8vIDMKICAgICoKICAgID49CiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IGZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njg3CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njg1LTY4OAogICAgLy8gIyBFbnN1cmUgdGhlIHRyYW5zYWN0aW9uIGhhcyB0aGUgY29ycmVjdCBwYXltZW50CiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gKSwgZXJyLldST05HX1JFQ0VJVkVSCiAgICBhc3NlcnQgLy8gV3JvbmcgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4OQogICAgLy8gYXNzZXJ0IHBheW1lbnQuYW1vdW50ID09IHNlbGYucHJvcG9zYWxfZmVlLnZhbHVlLCBlcnIuV1JPTkdfUEFZTUVOVF9BTU9VTlQKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX2ZlZSBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgcGF5bWVudCBhbW91bnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5NS03MDUKICAgIC8vIHByb3Bvc2FsX2FwcCA9IGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWxNb2NrLmNyZWF0ZSwKICAgIC8vICAgICBUeG4uc2VuZGVyLAogICAgLy8gICAgIGFwcHJvdmFsX3Byb2dyYW09Y29tcGlsZWQuYXBwcm92YWxfcHJvZ3JhbSwKICAgIC8vICAgICBjbGVhcl9zdGF0ZV9wcm9ncmFtPWNvbXBpbGVkLmNsZWFyX3N0YXRlX3Byb2dyYW0sCiAgICAvLyAgICAgZ2xvYmFsX251bV9ieXRlcz1wY2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICBnbG9iYWxfbnVtX3VpbnQ9cGNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgbG9jYWxfbnVtX2J5dGVzPXBjZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgbG9jYWxfbnVtX3VpbnQ9cGNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuY3JlYXRlZF9hcHAKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5NwogICAgLy8gVHhuLnNlbmRlciwKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcwMQogICAgLy8gZ2xvYmFsX251bV91aW50PXBjZmcuR0xPQkFMX1VJTlRTLAogICAgcHVzaGludCAxOCAvLyAxOAogICAgaXR4bl9maWVsZCBHbG9iYWxOdW1VaW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDAKICAgIC8vIGdsb2JhbF9udW1fYnl0ZXM9cGNmZy5HTE9CQUxfQllURVMsCiAgICBwdXNoaW50IDUgLy8gNQogICAgaXR4bl9maWVsZCBHbG9iYWxOdW1CeXRlU2xpY2UKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5MS02OTMKICAgIC8vICMgQ3JlYXRlIHRoZSBQcm9wb3NhbCBBcHAKICAgIC8vICMgVE9ETzogcmVwbGFjZSB0aGUgcHJvcG9zYWwgbW9jayBjb250cmFjdCB3aXRoIHRoZSByZWFsIG9uZQogICAgLy8gY29tcGlsZWQgPSBjb21waWxlX2NvbnRyYWN0KHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsTW9jaykKICAgIHB1c2hieXRlcyBiYXNlNjQoQ29FQlF3PT0pCiAgICBpdHhuX2ZpZWxkIENsZWFyU3RhdGVQcm9ncmFtUGFnZXMKICAgIHB1c2hieXRlcyBiYXNlNjQoQ2lBQ0FBRW1DQUFJY0hKdmNHOXpaWElQY21WbmFYTjBjbmxmWVhCd1gybGtCbk4wWVhSMWN4QnlaWEYxWlhOMFpXUmZZVzF2ZFc1MERHTnZiVzFwZEhSbFpWOXBaQkZqYjIxdGFYUjBaV1ZmYldWdFltVnljdzlqYjIxdGFYUjBaV1ZmZG05MFpYTXhHRUFBQTRnQUJJZ0F1a09LQUFBcE1nTm5LaUpuZ0FWMGFYUnNaU2huZ0FOamFXUW9aNEFVYzNWaWJXbHpjMmx2Ymw5MGFXMWxjM1JoYlhBaVo0QVdabWx1WVd4cGVtRjBhVzl1WDNScGJXVnpkR0Z0Y0NKbkt5Sm5nQWhqWVhSbFoyOXllU0puZ0F4bWRXNWthVzVuWDNSNWNHVWlaeWNFSW1lQURXeHZZMnRsWkY5aGJXOTFiblFpWnljRktHY25CaUpuSndjaVo0QU5kbTkwWldSZmJXVnRZbVZ5Y3lKbmdBbGhjSEJ5YjNaaGJITWlaNEFLY21WcVpXTjBhVzl1Y3lKbmlZb0FBVEViUVFDTWdnWUV6R2xPcWdRVGxNdzhCTk41RWxNRUFscVlCQVRwU2tSTkJMdU9IV2cyR2dDT0JnQUNBQklBSWdBeUFFa0FVaUtKTVJrVVJERVlGRVEyR2dHSUFFMGppVEVaRkVReEdFUTJHZ0VYaUFCSkk0a3hHUlJFTVJoRU5ob0JGNGdBUVNPSk1Sa1VSREVZUkRZYUFUWWFBaGMyR2dNWGlBQXpJNGt4R1JSRU1SaEVJNGt4R1JSRU1SaEVJNGtpaVlvQkFDbUwvMmNxTWcxbmlZb0JBQ3VMLzJlSmlnRUFKd1NMLzJlSmlnTUFKd1dML1djbkJvditaeWNIaS85bmlRPT0pCiAgICBpdHhuX2ZpZWxkIEFwcHJvdmFsUHJvZ3JhbVBhZ2VzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OTUtNzA1CiAgICAvLyBwcm9wb3NhbF9hcHAgPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsTW9jay5jcmVhdGUsCiAgICAvLyAgICAgVHhuLnNlbmRlciwKICAgIC8vICAgICBhcHByb3ZhbF9wcm9ncmFtPWNvbXBpbGVkLmFwcHJvdmFsX3Byb2dyYW0sCiAgICAvLyAgICAgY2xlYXJfc3RhdGVfcHJvZ3JhbT1jb21waWxlZC5jbGVhcl9zdGF0ZV9wcm9ncmFtLAogICAgLy8gICAgIGdsb2JhbF9udW1fYnl0ZXM9cGNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgZ2xvYmFsX251bV91aW50PXBjZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgIGxvY2FsX251bV9ieXRlcz1wY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgIGxvY2FsX251bV91aW50PXBjZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLmNyZWF0ZWRfYXBwCiAgICBwdXNoYnl0ZXMgMHhjYzY5NGVhYSAvLyBtZXRob2QgImNyZWF0ZShhZGRyZXNzKXZvaWQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGludGNfMiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDQKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OTUtNzA1CiAgICAvLyBwcm9wb3NhbF9hcHAgPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsTW9jay5jcmVhdGUsCiAgICAvLyAgICAgVHhuLnNlbmRlciwKICAgIC8vICAgICBhcHByb3ZhbF9wcm9ncmFtPWNvbXBpbGVkLmFwcHJvdmFsX3Byb2dyYW0sCiAgICAvLyAgICAgY2xlYXJfc3RhdGVfcHJvZ3JhbT1jb21waWxlZC5jbGVhcl9zdGF0ZV9wcm9ncmFtLAogICAgLy8gICAgIGdsb2JhbF9udW1fYnl0ZXM9cGNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgZ2xvYmFsX251bV91aW50PXBjZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgIGxvY2FsX251bV9ieXRlcz1wY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgIGxvY2FsX251bV91aW50PXBjZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLmNyZWF0ZWRfYXBwCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBDcmVhdGVkQXBwbGljYXRpb25JRAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzA3LTcwOAogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIgc3RhdGUKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbChUcnVlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBpbnRjXzEgLy8gMQogICAgc2V0Yml0CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTAtNzE1CiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9cHJvcG9zYWxfYXBwLmFkZHJlc3MsCiAgICAvLyAgICAgYW1vdW50PXNlbGYucHJvcG9zYWxfZmVlLnZhbHVlIC0gcGNmZy5QUk9QT1NBTF9NQlIsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTIKICAgIC8vIHJlY2VpdmVyPXByb3Bvc2FsX2FwcC5hZGRyZXNzLAogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTMKICAgIC8vIGFtb3VudD1zZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSAtIHBjZmcuUFJPUE9TQUxfTUJSLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDYgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3NhbF9mZWUgZXhpc3RzCiAgICBwdXNoaW50IDk2MzAwMCAvLyA5NjMwMDAKICAgIC0KICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTAtNzExCiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTQKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTAtNzE1CiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9cHJvcG9zYWxfYXBwLmFkZHJlc3MsCiAgICAvLyAgICAgYW1vdW50PXNlbGYucHJvcG9zYWxfZmVlLnZhbHVlIC0gcGNmZy5QUk9QT1NBTF9NQlIsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzE3LTcxOAogICAgLy8gIyBJbmNyZW1lbnQgcGVuZGluZyBwcm9wb3NhbHMKICAgIC8vIHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjAKICAgIC8vIHJldHVybiBwcm9wb3NhbF9hcHAuaWQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS52YWxpZF9reWMoYWRkcmVzczogYnl0ZXMpIC0+IHVpbnQ2NDoKdmFsaWRfa3ljOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAyLTIwMwogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiB2YWxpZF9reWMoc2VsZiwgYWRkcmVzczogQWNjb3VudCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA1CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgZ2V0Yml0CiAgICBieXRlYyAxMyAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwNS0yMDYKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19zdGF0dXMubmF0aXZlCiAgICAvLyBhbmQgc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX2V4cGlyaW5nLm5hdGl2ZSA+IEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICBieiB2YWxpZF9reWNfYm9vbF9mYWxzZUAzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDYKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGZyYW1lX2RpZyAwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBleHRyYWN0IDEgOCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ0b2kKICAgIGdsb2JhbCBMYXRlc3RUaW1lc3RhbXAKICAgID4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwNS0yMDYKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19zdGF0dXMubmF0aXZlCiAgICAvLyBhbmQgc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX2V4cGlyaW5nLm5hdGl2ZSA+IEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICBieiB2YWxpZF9reWNfYm9vbF9mYWxzZUAzCiAgICBpbnRjXzEgLy8gMQogICAgYiB2YWxpZF9reWNfYm9vbF9tZXJnZUA0Cgp2YWxpZF9reWNfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKCnZhbGlkX2t5Y19ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDQtMjA3CiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19zdGF0dXMubmF0aXZlCiAgICAvLyAgICAgYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgLy8gKQogICAgc3dhcAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnZvdGVfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzLCB4Z292X2FkZHJlc3M6IGJ5dGVzLCBhcHByb3ZhbF92b3RlczogYnl0ZXMsIHJlamVjdGlvbl92b3RlczogYnl0ZXMpIC0+IHZvaWQ6CnZvdGVfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjItNzI5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHZvdGVfcHJvcG9zYWwoCiAgICAvLyAgICAgc2VsZiwKICAgIC8vICAgICBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsCiAgICAvLyAgICAgYXBwcm92YWxfdm90ZXM6IGFyYzQuVUludDY0LAogICAgLy8gICAgIHJlamVjdGlvbl92b3RlczogYXJjNC5VSW50NjQsCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byA0IDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0NS03NDYKICAgIC8vICMgdmVyaWZ5IHByb3Bvc2FsIGlkIGlzIGdlbnVpbmUgcHJvcG9zYWwKICAgIC8vIGFzc2VydCBzZWxmLmlzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkKSwgZXJyLklOVkFMSURfUFJPUE9TQUwKICAgIGZyYW1lX2RpZyAtNAogICAgY2FsbHN1YiBpc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1MAogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGZyYW1lX2RpZyAtNAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzQ4LTc1MQogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSB2b3Rpbmcgc3RhdGUKICAgIC8vIHN0YXR1cywgc3RhdHVzX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1MAogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGJ5dGVjIDQ0IC8vIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NDgtNzUxCiAgICAvLyAjIFZlcmlmeSB0aGUgcHJvcG9zYWwgaXMgaW4gdGhlIHZvdGluZyBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1MgogICAgLy8gYXNzZXJ0IHN0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfVk9USU5HKSwgZXJyLlBST1BPU0FMX0lTX05PVF9WT1RJTkcKICAgIHB1c2hpbnQgMjUgLy8gMjUKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgaXMgbm90IGluIHZvdGluZyBwaGFzZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzU0LTc1NQogICAgLy8gIyBtYWtlIHN1cmUgdGhleSdyZSB2b3Rpbmcgb24gYmVoYWxmIG9mIGFuIHhnb3YKICAgIC8vIHZvdGluZ19hZGRyZXNzLCBleGlzdHMgPSBzZWxmLnhnb3ZfYm94Lm1heWJlKHhnb3ZfYWRkcmVzcy5uYXRpdmUpCiAgICBieXRlY18yIC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICBib3hfZ2V0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTYKICAgIC8vIGFzc2VydCBleGlzdHMsIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1OC03NTkKICAgIC8vICMgVmVyaWZ5IHRoZSBjYWxsZXIgaXMgdXNpbmcgdGhlaXIgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHZvdGluZ19hZGRyZXNzLm5hdGl2ZSwgZXJyLk1VU1RfQkVfVk9USU5HX0FERFJFU1MKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBhc3NlcnQgLy8gTXVzdCBiZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzYxLTc2OQogICAgLy8gIyBDYWxsIHRoZSBQcm9wb3NhbCBBcHAgdG8gcmVnaXN0ZXIgdGhlIHZvdGUKICAgIC8vICMgVE9ETzogc3dpdGNoIHRvIFByb3Bvc2FsIGNvbnRyYWN0CiAgICAvLyBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsTW9jay52b3RlLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcywKICAgIC8vICAgICBhcHByb3ZhbF92b3RlcywKICAgIC8vICAgICByZWplY3Rpb25fdm90ZXMsCiAgICAvLyAgICAgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZSwKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4YmI4ZTFkNjggLy8gbWV0aG9kICJ2b3RlKGFkZHJlc3MsdWludDY0LHVpbnQ2NCl2b2lkIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGZyYW1lX2RpZyAtMwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGZyYW1lX2RpZyAtMgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGZyYW1lX2RpZyAtMQogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGludGNfMiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB1aW50NjQ6CmlzX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTc2LTE3NwogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiBpc19wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IGJvb2w6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3OQogICAgLy8gQXBwbGljYXRpb24ocHJvcG9zYWxfaWQubmF0aXZlKS5jcmVhdG9yCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE4MAogICAgLy8gPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3OS0xODAKICAgIC8vIEFwcGxpY2F0aW9uKHByb3Bvc2FsX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgLy8gPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3OC0xODEKICAgIC8vIHJldHVybiAoCiAgICAvLyAgICAgQXBwbGljYXRpb24ocHJvcG9zYWxfaWQubmF0aXZlKS5jcmVhdG9yCiAgICAvLyAgICAgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gKQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnBheV9ncmFudF9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMpIC0+IHZvaWQ6CnBheV9ncmFudF9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3MS03NzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcGF5X2dyYW50X3Byb3Bvc2FsKHNlbGYsIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg3LTc4OAogICAgLy8gIyBWZXJpZnkgdGhlIGNhbGxlciBpcyB0aGUgeEdvdiBQYXlvcgogICAgLy8gYXNzZXJ0IGFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSA9PSBzZWxmLnhnb3ZfcGF5b3IudmFsdWUsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA3IC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3BheW9yIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5MC03OTEKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLmlzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkKSwgZXJyLklOVkFMSURfUFJPUE9TQUwKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiBpc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5NQogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzkzLTc5NgogICAgLy8gIyBSZWFkIHByb3Bvc2FsIHN0YXRlIGRpcmVjdGx5IGZyb20gdGhlIFByb3Bvc2FsIEFwcCdzIGdsb2JhbCBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzk1CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgYnl0ZWMgNDQgLy8gMHg3Mzc0NjE3NDc1NzMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5My03OTYKICAgIC8vICMgUmVhZCBwcm9wb3NhbCBzdGF0ZSBkaXJlY3RseSBmcm9tIHRoZSBQcm9wb3NhbCBBcHAncyBnbG9iYWwgc3RhdGUKICAgIC8vIHN0YXR1cywgc3RhdHVzX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgcG9wCiAgICBzd2FwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3OTctNzk5CiAgICAvLyBwcm9wb3Nlcl9ieXRlcywgcHJvcG9zZXJfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF9ieXRlcygKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICAvLyApCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5OAogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgcHVzaGJ5dGVzIDB4NzA3MjZmNzA2ZjczNjU3MgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzk3LTc5OQogICAgLy8gcHJvcG9zZXJfYnl0ZXMsIHByb3Bvc2VyX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfYnl0ZXMoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODAwCiAgICAvLyBwcm9wb3NlciA9IGFyYzQuQWRkcmVzcyhwcm9wb3Nlcl9ieXRlcykKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgwMS04MDMKICAgIC8vIHJlcXVlc3RlZF9hbW91bnQsIHJlcXVlc3RlZF9hbW91bnRfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBkaWcgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODAyCiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1JFUVVFU1RFRF9BTU9VTlQKICAgIHB1c2hieXRlcyAweDcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MDEtODAzCiAgICAvLyByZXF1ZXN0ZWRfYW1vdW50LCByZXF1ZXN0ZWRfYW1vdW50X2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgY292ZXIgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODA0LTgwNgogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSBhcHByb3ZlZCBzdGF0ZQogICAgLy8gIyBUT0RPOiBTd2l0Y2ggdG8gU1RBVFVTX01JTEVTVE9ORQogICAgLy8gYXNzZXJ0IHN0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfQVBQUk9WRUQpLCBlcnIuUFJPUE9TQUxfSVNfTk9UX0FQUFJPVkVECiAgICB1bmNvdmVyIDMKICAgIHB1c2hpbnQgMzAgLy8gMzAKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgaXMgbm90IGFwcHJvdmVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MDgKICAgIC8vIGFzc2VydCBwcm9wb3Nlci5uYXRpdmUgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5XUk9OR19QUk9QT1NFUgogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBkaWcgMQogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFdyb25nIHByb3Bvc2VyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTAKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX2t5Yyhwcm9wb3Nlci5uYXRpdmUpLCBlcnIuSU5WQUxJRF9LWUMKICAgIGRpZyAxCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MTQKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgPj0gcmVxdWVzdGVkX2Ftb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBkaWcgNAogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxMi04MTUKICAgIC8vICMgVmVyaWZ5IHN1ZmZpY2llbnQgZnVuZHMgYXJlIGF2YWlsYWJsZQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlID49IHJlcXVlc3RlZF9hbW91bnQKICAgIC8vICksIGVyci5JTlNVRkZJQ0lFTlRfVFJFQVNVUllfRlVORFMKICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgdHJlYXN1cnkgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxNwogICAgLy8gc2VsZi5kaXNidXJzZV9mdW5kcyhwcm9wb3NlciwgcmVxdWVzdGVkX2Ftb3VudCkKICAgIHN3YXAKICAgIHVuY292ZXIgMwogICAgY2FsbHN1YiBkaXNidXJzZV9mdW5kcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODE5LTgyMQogICAgLy8gYXJjNC5hYmlfY2FsbCgKICAgIC8vICAgICBwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbE1vY2sucmVsZWFzZV9mdW5kcywgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZQogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgc3dhcAogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHhlOTRhNDQ0ZCAvLyBtZXRob2QgInJlbGVhc2VfZnVuZHMoKXZvaWQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaW50Y18yIC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyMy04MjUKICAgIC8vICMgRGVjcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzIGNvdW50CiAgICAvLyAjIFRPRE86IG1pZ2h0IGhhcHBlbiBvbiBkZWNvbW1pc3Npb24gYXMgd2VsbAogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNy04MjgKICAgIC8vICMgVXBkYXRlIHByb3Bvc2VyJ3MgYWN0aXZlIHByb3Bvc2FsIHN0YXR1cwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXS5hY3RpdmVfcHJvcG9zYWwgPSBhcmM0LkJvb2woCiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNy04MzAKICAgIC8vICMgVXBkYXRlIHByb3Bvc2VyJ3MgYWN0aXZlIHByb3Bvc2FsIHN0YXR1cwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXS5hY3RpdmVfcHJvcG9zYWwgPSBhcmM0LkJvb2woCiAgICAvLyAgICAgRmFsc2UgICMgbm9xYTogRkJUMDAzCiAgICAvLyApCiAgICBpbnRjXzAgLy8gMAogICAgZHVwCiAgICBzZXRiaXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kaXNidXJzZV9mdW5kcyhyZWNpcGllbnQ6IGJ5dGVzLCBhbW91bnQ6IHVpbnQ2NCkgLT4gdm9pZDoKZGlzYnVyc2VfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODMtMTg0CiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIGRpc2J1cnNlX2Z1bmRzKHNlbGYsIHJlY2lwaWVudDogYXJjNC5BZGRyZXNzLCBhbW91bnQ6IFVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg1LTE5MAogICAgLy8gIyBUcmFuc2ZlciB0aGUgZnVuZHMgdG8gdGhlIHJlY2VpdmVyCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9QWNjb3VudChyZWNpcGllbnQuYnl0ZXMpLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODcKICAgIC8vIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIGZyYW1lX2RpZyAtMgogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgIGZyYW1lX2RpZyAtMQogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIGZyYW1lX2RpZyAtMgogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg1LTE4NgogICAgLy8gIyBUcmFuc2ZlciB0aGUgZnVuZHMgdG8gdGhlIHJlY2VpdmVyCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODkKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODUtMTkwCiAgICAvLyAjIFRyYW5zZmVyIHRoZSBmdW5kcyB0byB0aGUgcmVjZWl2ZXIKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1BY2NvdW50KHJlY2lwaWVudC5ieXRlcyksCiAgICAvLyAgICAgYW1vdW50PWFtb3VudCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTItMTkzCiAgICAvLyAjIFVwZGF0ZSB0aGUgb3V0c3RhbmRpbmcgZnVuZHMKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgLT0gYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVwb3NpdF9mdW5kcyhwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CmRlcG9zaXRfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzItODMzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRlcG9zaXRfZnVuZHMoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0NAogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0My04NDUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQ2CiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlICs9IHBheW1lbnQuYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICArCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS53aXRoZHJhd19mdW5kcyhhbW91bnQ6IHVpbnQ2NCkgLT4gdm9pZDoKd2l0aGRyYXdfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NDgtODQ5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHdpdGhkcmF3X2Z1bmRzKHNlbGYsIGFtb3VudDogVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjEKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODYyCiAgICAvLyBhc3NlcnQgYW1vdW50IDw9IHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUsIGVyci5JTlNVRkZJQ0lFTlRfRlVORFMKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgZnJhbWVfZGlnIC0xCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmdW5kcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODYzCiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMiksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDIgLy8gMgogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjQKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgLT0gYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjYtODcwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjcKICAgIC8vIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9tYW5hZ2VyIGV4aXN0cwogICAgZnJhbWVfZGlnIC0xCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODY2CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjkKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjYtODcwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmdldF9zdGF0ZSgpIC0+IGJ5dGVzOgpnZXRfc3RhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzItODczCiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIC8vIGRlZiBnZXRfc3RhdGUoc2VsZikgLT4gdHlwLlR5cGVkR2xvYmFsU3RhdGU6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3NwogICAgLy8geGdvdl9tYW5hZ2VyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzgKICAgIC8vIHhnb3ZfcGF5b3I9c2VsZi54Z292X3BheW9yLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDcgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfcGF5b3IgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzkKICAgIC8vIGt5Y19wcm92aWRlcj1zZWxmLmt5Y19wcm92aWRlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA4IC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYua3ljX3Byb3ZpZGVyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgwCiAgICAvLyBjb21taXR0ZWVfbWFuYWdlcj1zZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDkgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODEKICAgIC8vIGNvbW1pdHRlZV9wdWJsaXNoZXI9c2VsZi5jb21taXR0ZWVfcHVibGlzaGVyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE1IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MDc1NjI2YzY5NzM2ODY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfcHVibGlzaGVyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgyCiAgICAvLyB4Z292X2ZlZT1hcmM0LlVJbnQ2NChzZWxmLnhnb3ZfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4MwogICAgLy8gcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMSAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4NAogICAgLy8gcHJvcG9zYWxfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA2IC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfZmVlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg1CiAgICAvLyBwcm9wb3NhbF9wdWJsaXNoaW5nX2Jwcz1hcmM0LlVJbnQ2NChzZWxmLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjcwNzU2MjZjNjk3MzY4Njk2ZTY3NWY2MjcwNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3NhbF9wdWJsaXNoaW5nX2JwcyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4NgogICAgLy8gcHJvcG9zYWxfY29tbWl0bWVudF9icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTcgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODcKICAgIC8vIG1pbl9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuVUludDY0KHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQwIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50IGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg5CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxOCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5MAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE5IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkxCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyMCAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4OC04OTIKICAgIC8vIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTQKICAgIC8vIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjEgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTUKICAgIC8vIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIyIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk2CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIzIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5My04OTgKICAgIC8vIGRpc2N1c3Npb25fZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgdW5jb3ZlciAzCiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTAwCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjUgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDEKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjYgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDIKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNyAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMwogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyOCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5OS05MDQKICAgIC8vIHZvdGluZ19kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIHVuY292ZXIgMwogICAgdW5jb3ZlciAzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwNQogICAgLy8gY29vbF9kb3duX2R1cmF0aW9uPWFyYzQuVUludDY0KHNlbGYuY29vbF9kb3duX2R1cmF0aW9uLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyOSAvLyAweDYzNmY2ZjZjNWY2NDZmNzc2ZTVmNjQ3NTcyNjE3NDY5NmY2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvb2xfZG93bl9kdXJhdGlvbiBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwNgogICAgLy8gc3RhbGVfcHJvcG9zYWxfZHVyYXRpb249YXJjNC5VSW50NjQoc2VsZi5zdGFsZV9wcm9wb3NhbF9kdXJhdGlvbi52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDEgLy8gMHg3Mzc0NjE2YzY1NWY3MDcyNmY3MDZmNzM2MTZjNWY2NDc1NzI2MTc0Njk2ZjZlCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuc3RhbGVfcHJvcG9zYWxfZHVyYXRpb24gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDgKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMCAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwOQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMSAvLyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxMAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMyIC8vIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucXVvcnVtX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTA3LTkxMQogICAgLy8gcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTMKICAgIC8vIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMyAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxNAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxNQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM1IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTEyLTkxNgogICAgLy8gd2VpZ2h0ZWRfcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTcKICAgIC8vIG91dHN0YW5kaW5nX2Z1bmRzPWFyYzQuVUludDY0KHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTgKICAgIC8vIHBlbmRpbmdfcHJvcG9zYWxzPWFyYzQuVUludDY0KHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTkKICAgIC8vIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDMgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfaWQgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjAKICAgIC8vIGNvbW1pdHRlZV9tZW1iZXJzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX21lbWJlcnMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM2IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTIxCiAgICAvLyBjb21taXR0ZWVfdm90ZXM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM3IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX3ZvdGVzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODc2LTkyMgogICAgLy8gcmV0dXJuIHR5cC5UeXBlZEdsb2JhbFN0YXRlKAogICAgLy8gICAgIHhnb3ZfbWFuYWdlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIC8vICAgICBreWNfcHJvdmlkZXI9c2VsZi5reWNfcHJvdmlkZXIudmFsdWUsCiAgICAvLyAgICAgY29tbWl0dGVlX21hbmFnZXI9c2VsZi5jb21taXR0ZWVfbWFuYWdlci52YWx1ZSwKICAgIC8vICAgICBjb21taXR0ZWVfcHVibGlzaGVyPXNlbGYuY29tbWl0dGVlX3B1Ymxpc2hlci52YWx1ZSwKICAgIC8vICAgICB4Z292X2ZlZT1hcmM0LlVJbnQ2NChzZWxmLnhnb3ZfZmVlLnZhbHVlKSwKICAgIC8vICAgICBwcm9wb3Nlcl9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX2ZlZT1hcmM0LlVJbnQ2NChzZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zYWxfcHVibGlzaGluZ19icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9wdWJsaXNoaW5nX2Jwcy52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zYWxfY29tbWl0bWVudF9icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSksCiAgICAvLyAgICAgbWluX3JlcXVlc3RlZF9hbW91bnQ9YXJjNC5VSW50NjQoc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudC52YWx1ZSksCiAgICAvLyAgICAgbWF4X3JlcXVlc3RlZF9hbW91bnQ9YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICBkaXNjdXNzaW9uX2R1cmF0aW9uPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFs0XV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIHZvdGluZ19kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIGNvb2xfZG93bl9kdXJhdGlvbj1hcmM0LlVJbnQ2NChzZWxmLmNvb2xfZG93bl9kdXJhdGlvbi52YWx1ZSksCiAgICAvLyAgICAgc3RhbGVfcHJvcG9zYWxfZHVyYXRpb249YXJjNC5VSW50NjQoc2VsZi5zdGFsZV9wcm9wb3NhbF9kdXJhdGlvbi52YWx1ZSksCiAgICAvLyAgICAgcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgd2VpZ2h0ZWRfcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgb3V0c3RhbmRpbmdfZnVuZHM9YXJjNC5VSW50NjQoc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSksCiAgICAvLyAgICAgcGVuZGluZ19wcm9wb3NhbHM9YXJjNC5VSW50NjQoc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSksCiAgICAvLyAgICAgY29tbWl0dGVlX2lkPXNlbGYuY29tbWl0dGVlX2lkLnZhbHVlLmNvcHkoKSwKICAgIC8vICAgICBjb21taXR0ZWVfbWVtYmVycz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlKSwKICAgIC8vICAgICBjb21taXR0ZWVfdm90ZXM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUpLAogICAgLy8gKQogICAgdW5jb3ZlciAyMgogICAgdW5jb3ZlciAyMgogICAgY29uY2F0CiAgICB1bmNvdmVyIDIxCiAgICBjb25jYXQKICAgIHVuY292ZXIgMjAKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxOQogICAgY29uY2F0CiAgICB1bmNvdmVyIDE4CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTcKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNgogICAgY29uY2F0CiAgICB1bmNvdmVyIDE1CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTQKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDEyCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTEKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMAogICAgY29uY2F0CiAgICB1bmNvdmVyIDkKICAgIGNvbmNhdAogICAgdW5jb3ZlciA4CiAgICBjb25jYXQKICAgIHVuY292ZXIgNwogICAgY29uY2F0CiAgICB1bmNvdmVyIDYKICAgIGNvbmNhdAogICAgdW5jb3ZlciA1CiAgICBjb25jYXQKICAgIHVuY292ZXIgNAogICAgY29uY2F0CiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgcmV0c3ViCg==", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuY2xlYXJfc3RhdGVfcHJvZ3JhbToKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
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
     * Subscribes the sender to being an xGov
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
     * Unsubscribes the designated address from being an xGov
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
     * Subscribes the app to being an xGov
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
     * Unsubscribes the designated app from being an xGov
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
     * Requests to subscribe to the xGov
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
     * Approves a request to subscribe to xGov
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
     * Rejects a request to subscribe to xGov
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
     * Sets the voting address for the xGov
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
     * Subscribes the sender to being a Proposer
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
     * Sets a proposer's KYC status
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
     * Sets the xGov Committee in charge
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static declareCommittee(params) {
        return {
            ...params,
            method: 'declare_committee(byte[32],uint64,uint64)void',
            args: Array.isArray(params.args) ? params.args : [params.args.cid, params.args.size, params.args.votes],
        };
    }
    /**
     * Constructs a no op call for the open_proposal(pay)uint64 ABI method
     *
     * Creates a new Proposal
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
     * Votes on a proposal
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
     * Disburses the funds for an approved proposal
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
     * Tracks deposits to the xGov Treasury (xGov Registry Account)
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
     * Remove funds from the xGov Treasury (xGov Registry Account)
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
     * Constructs a no op call for the get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64) ABI method
     *
     * Returns the xGov Registry state
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getState(params) {
        return {
            ...params,
            method: 'get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)',
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
            createParams: params.createParams?.method ? XGovRegistryParamsFactory.create._resolveByMethod(params.createParams) : params.createParams,
            updateParams: params.updateParams?.method ? XGovRegistryParamsFactory.update._resolveByMethod(params.updateParams) : params.updateParams,
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
             * Updates the xGov Registry contract
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
             * Updates the xGov Registry contract
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
         * Subscribes the sender to being an xGov
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
         * Unsubscribes the designated address from being an xGov
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
         * Subscribes the app to being an xGov
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
         * Unsubscribes the designated app from being an xGov
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
         * Requests to subscribe to the xGov
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
         * Approves a request to subscribe to xGov
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
         * Rejects a request to subscribe to xGov
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
         * Sets the voting address for the xGov
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
         * Subscribes the sender to being a Proposer
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
         * Sets a proposer's KYC status
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
         * Sets the xGov Committee in charge
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
         * Creates a new Proposal
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
         * Votes on a proposal
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
         * Disburses the funds for an approved proposal
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
         * Tracks deposits to the xGov Treasury (xGov Registry Account)
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
         * Remove funds from the xGov Treasury (xGov Registry Account)
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        withdrawFunds: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.withdrawFunds(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov Registry state
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
             * Updates the xGov Registry contract
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
         * Subscribes the sender to being an xGov
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
         * Unsubscribes the designated address from being an xGov
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
         * Subscribes the app to being an xGov
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
         * Unsubscribes the designated app from being an xGov
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
         * Requests to subscribe to the xGov
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
         * Approves a request to subscribe to xGov
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
         * Rejects a request to subscribe to xGov
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
         * Sets the voting address for the xGov
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
         * Subscribes the sender to being a Proposer
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
         * Sets a proposer's KYC status
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
         * Sets the xGov Committee in charge
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
         * Creates a new Proposal
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
         * Votes on a proposal
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
         * Disburses the funds for an approved proposal
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
         * Tracks deposits to the xGov Treasury (xGov Registry Account)
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
         * Remove funds from the xGov Treasury (xGov Registry Account)
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        withdrawFunds: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.withdrawFunds(params));
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov Registry state
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
             * Updates the xGov Registry contract
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
         * Subscribes the sender to being an xGov
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
         * Unsubscribes the designated address from being an xGov
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
         * Subscribes the app to being an xGov
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
         * Unsubscribes the designated app from being an xGov
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
         * Requests to subscribe to the xGov
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
         * Approves a request to subscribe to xGov
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
         * Rejects a request to subscribe to xGov
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
         * Sets the voting address for the xGov
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
         * Subscribes the sender to being a Proposer
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
         * Sets a proposer's KYC status
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
         * Sets the xGov Committee in charge
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
         * Creates a new Proposal
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
         * Votes on a proposal
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
         * Disburses the funds for an approved proposal
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
         * Tracks deposits to the xGov Treasury (xGov Registry Account)
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
         * Remove funds from the xGov Treasury (xGov Registry Account)
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        withdrawFunds: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.withdrawFunds(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the xGov Registry state
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
     * Makes a readonly (simulated) call to the XGovRegistry smart contract using the `get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the xGov Registry state
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
             * Add a get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64) method call against the XGovRegistry contract
             */
            getState(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getState(params)));
                resultMappers.push((v) => client.decodeReturnValue('get_state()(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64,uint64,uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)', v));
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
                const result = await composer.simulate(options);
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
