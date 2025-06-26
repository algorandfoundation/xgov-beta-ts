import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "XGovRegistry", "structs": { "XGovRegistryConfig": [{ "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }], "TypedGlobalState": [{ "name": "pausedRegistry", "type": "bool" }, { "name": "pausedProposals", "type": "bool" }, { "name": "xgovManager", "type": "address" }, { "name": "xgovPayor", "type": "address" }, { "name": "xgovCouncil", "type": "address" }, { "name": "xgovSubscriber", "type": "address" }, { "name": "kycProvider", "type": "address" }, { "name": "committeeManager", "type": "address" }, { "name": "xgovDaemon", "type": "address" }, { "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "proposalFee", "type": "uint64" }, { "name": "proposalPublishingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }, { "name": "outstandingFunds", "type": "uint64" }, { "name": "pendingProposals", "type": "uint64" }, { "name": "committeeId", "type": "byte[32]" }, { "name": "committeeMembers", "type": "uint64" }, { "name": "committeeVotes", "type": "uint64" }] }, "methods": [{ "name": "create", "desc": "Create the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "pause_registry", "desc": "Pauses the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pause_proposals", "desc": "Pauses the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_registry", "desc": "Resumes the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_proposals", "desc": "Resumes the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_manager", "desc": "Sets the xGov Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_payor", "desc": "Sets the xGov Payor.", "args": [{ "name": "payor", "type": "address", "desc": "Address of the new xGov Payor" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_council", "desc": "Sets the xGov Council.", "args": [{ "name": "council", "type": "address", "desc": "Address of the new xGov Council" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_subscriber", "desc": "Sets the xGov Subscriber.", "args": [{ "name": "subscriber", "type": "address", "desc": "Address of the new xGov Subscriber" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_kyc_provider", "desc": "Sets the KYC provider.", "args": [{ "name": "provider", "type": "address", "desc": "Address of the new KYC Provider" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_manager", "desc": "Sets the Committee Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_daemon", "desc": "Sets the xGov Daemon.", "args": [{ "name": "xgov_daemon", "type": "address", "desc": "Address of the new xGov Daemon" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "config_xgov_registry", "desc": "Sets the configuration of the xGov Registry.", "args": [{ "name": "config", "type": "(uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3])", "desc": "Configuration class containing the field data", "struct": "XGovRegistryConfig" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "update_xgov_registry", "desc": "Updates the xGov Registry contract.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["UpdateApplication"] } }, { "name": "subscribe_xgov", "desc": "Subscribes the sender to being an xGov.", "args": [{ "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov", "desc": "Unsubscribes the designated address from being an xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov to unsubscribe" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_xgov_app", "desc": "The App Creator subscribes the App to being an xGov.", "args": [{ "name": "app_id", "type": "uint64", "desc": "The id of the application to subscribe" }, { "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov_app", "desc": "Unsubscribes the designated App from being an xGov.", "args": [{ "name": "app_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "request_subscribe_xgov", "desc": "Requests to subscribe to the xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }, { "name": "owner_address", "type": "address", "desc": "The address of the xGov Address owner/controller (Voting Address)" }, { "name": "relation_type", "type": "uint64", "desc": "The type of relationship enum" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "approve_subscribe_xgov", "desc": "Approves a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to approve" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "reject_subscribe_xgov", "desc": "Rejects a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to reject" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_voting_account", "desc": "Sets the Voting Address for the xGov.", "args": [{ "name": "xgov_address", "type": "address" }, { "name": "voting_address", "type": "address", "desc": "The voting account address to delegate voting power to" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_proposer", "desc": "Subscribes the sender to being a Proposer.", "args": [{ "name": "payment", "type": "pay", "desc": "The payment transaction covering the Proposer fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_proposer_kyc", "desc": "Sets a proposer's KYC status.", "args": [{ "name": "proposer", "type": "address", "desc": "The address of the Proposer" }, { "name": "kyc_status", "type": "bool", "desc": "The new status of the Proposer" }, { "name": "kyc_expiring", "type": "uint64", "desc": "The expiration date as a unix timestamp of the time the KYC expires" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "declare_committee", "desc": "Sets the xGov Committee in charge.", "args": [{ "name": "committee_id", "type": "byte[32]", "desc": "The ID of the xGov Committee" }, { "name": "size", "type": "uint64", "desc": "The size of the xGov Committee" }, { "name": "votes", "type": "uint64", "desc": "The voting power of the xGov Committee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "open_proposal", "desc": "Creates a new Proposal.", "args": [{ "name": "payment", "type": "pay", "desc": "payment for covering the proposal fee (includes child contract MBR)" }], "returns": { "type": "uint64" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote_proposal", "desc": "Votes on a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app being voted on" }, { "name": "xgov_address", "type": "address", "desc": "(arc4.Address): The address of the xGov being voted on behalf of" }, { "name": "approval_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of approvals votes allocated" }, { "name": "rejection_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of rejections votes allocated" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pay_grant_proposal", "desc": "Disburses the funds for an approved Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the approved Proposal" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "decommission_proposal", "desc": "Decommissions a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app to decommission" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "drop_proposal", "desc": "Drops a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app to drop" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "deposit_funds", "desc": "Deposits xGov program funds into the xGov Treasury (xGov Registry Account).", "args": [{ "name": "payment", "type": "pay", "desc": "the deposit transaction" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_funds", "desc": "Remove xGov program funds from the xGov Treasury (xGov Registry Account).", "args": [{ "name": "amount", "type": "uint64", "desc": "the amount to remove" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_balance", "desc": "Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_state", "desc": "Returns the xGov Registry state.", "args": [], "returns": { "type": "(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)", "struct": "TypedGlobalState" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }, { "name": "is_proposal", "args": [{ "name": "proposal_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 36, "bytes": 28 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "committee_id": { "key": "Y29tbWl0dGVlX2lk", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_manager": { "key": "Y29tbWl0dGVlX21hbmFnZXI=", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_members": { "key": "Y29tbWl0dGVlX21lbWJlcnM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "committee_votes": { "key": "Y29tbWl0dGVlX3ZvdGVz", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_large": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_medium": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0=", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_small": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_xlarge": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "kyc_provider": { "key": "a3ljX3Byb3ZpZGVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "max_requested_amount_large": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_medium": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVt", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_small": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGw=", "keyType": "AVMString", "valueType": "AVMUint64" }, "min_requested_amount": { "key": "bWluX3JlcXVlc3RlZF9hbW91bnQ=", "keyType": "AVMString", "valueType": "AVMUint64" }, "outstanding_funds": { "key": "b3V0c3RhbmRpbmdfZnVuZHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_proposals": { "key": "cGF1c2VkX3Byb3Bvc2Fscw==", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_registry": { "key": "cGF1c2VkX3JlZ2lzdHJ5", "keyType": "AVMString", "valueType": "AVMUint64" }, "pending_proposals": { "key": "cGVuZGluZ19wcm9wb3NhbHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_commitment_bps": { "key": "cHJvcG9zYWxfY29tbWl0bWVudF9icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_fee": { "key": "cHJvcG9zYWxfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_publishing_bps": { "key": "cHJvcG9zYWxfcHVibGlzaGluZ19icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposer_fee": { "key": "cHJvcG9zZXJfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_large": { "key": "cXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_medium": { "key": "cXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_small": { "key": "cXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "request_id": { "key": "cmVxdWVzdF9pZA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_large": { "key": "dm90aW5nX2R1cmF0aW9uX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_medium": { "key": "dm90aW5nX2R1cmF0aW9uX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_small": { "key": "dm90aW5nX2R1cmF0aW9uX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_xlarge": { "key": "dm90aW5nX2R1cmF0aW9uX3hsYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_large": { "key": "d2VpZ2h0ZWRfcXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_medium": { "key": "d2VpZ2h0ZWRfcXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_small": { "key": "d2VpZ2h0ZWRfcXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_council": { "key": "eGdvdl9jb3VuY2ls", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_daemon": { "key": "eGdvdl9kYWVtb24=", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_fee": { "key": "eGdvdl9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_manager": { "key": "eGdvdl9tYW5hZ2Vy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_payor": { "key": "eGdvdl9wYXlvcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_subscriber": { "key": "eGdvdl9zdWJzY3JpYmVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgovs": { "key": "eGdvdnM=", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX19hbGdvcHlfZW50cnlwb2ludF93aXRoX2luaXQoKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMCAxIDQgOAogICAgYnl0ZWNibG9jayAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OSAweDc4Njc2Zjc2NzMgMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczIDB4NzAgMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczIDB4NzggMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIgMHgxNTFmN2M3NSAweDAwIDB4MDAwMDAwMDAwMDAwMDAwMCAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1IDB4Nzg2NzZmNzY1ZjczNzU2MjczNjM3MjY5NjI2NTcyIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIgMHg2Yjc5NjM1ZjcwNzI2Zjc2Njk2NDY1NzIgMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyIDB4Nzg2NzZmNzY1ZjY0NjE2NTZkNmY2ZSAweDc4Njc2Zjc2NWY2NjY1NjUgMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUgMHg3MjY1NzE3NTY1NzM3NDVmNjk2NCAweDc4Njc2Zjc2NWY2MzZmNzU2ZTYzNjk2YyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjcwNzU2MjZjNjk3MzY4Njk2ZTY3NWY2MjcwNzMgMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NCAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjczNmQ2MTZjNmMgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1IDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMgMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUgMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1IDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQgMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUgMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NSAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YyAweDcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1IDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQgMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUgMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3NjZmNzQ2NTczIDB4NzIgMHg3MDcyNmY3MDZmNzM2NTcyIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2OTY0IDB4NzM3NDYxNzQ3NTczICJXcm9uZyBQcm9wb3NhbCBTdGF0dXMiICJFUlI6IiBUTVBMX2VudHJvcHkKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBibnogbWFpbl9hZnRlcl9pZl9lbHNlQDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0LTQ1CiAgICAvLyAjIFByZWNvbmRpdGlvbnMKICAgIC8vIGFzc2VydCBUeG4uZ2xvYmFsX251bV9ieXRlX3NsaWNlID09IGNmZy5HTE9CQUxfQllURVMsIGVyci5XUk9OR19HTE9CQUxfQllURVMKICAgIHR4biBHbG9iYWxOdW1CeXRlU2xpY2UKICAgIHB1c2hpbnQgMjggLy8gMjgKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgR2xvYmFsIEJ5dGVzIGFsbG9jYXRpb24KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ2CiAgICAvLyBhc3NlcnQgVHhuLmdsb2JhbF9udW1fdWludCA9PSBjZmcuR0xPQkFMX1VJTlRTLCBlcnIuV1JPTkdfR0xPQkFMX1VJTlRTCiAgICB0eG4gR2xvYmFsTnVtVWludAogICAgcHVzaGludCAzNiAvLyAzNgogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBHbG9iYWwgVUludHMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDcKICAgIC8vIGFzc2VydCBUeG4ubG9jYWxfbnVtX2J5dGVfc2xpY2UgPT0gY2ZnLkxPQ0FMX0JZVEVTLCBlcnIuV1JPTkdfTE9DQUxfQllURVMKICAgIHR4biBMb2NhbE51bUJ5dGVTbGljZQogICAgIQogICAgYXNzZXJ0IC8vIFdyb25nIExvY2FsIEJ5dGVzIGFsbG9jYXRpb24KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ4CiAgICAvLyBhc3NlcnQgVHhuLmxvY2FsX251bV91aW50ID09IGNmZy5MT0NBTF9VSU5UUywgZXJyLldST05HX0xPQ0FMX1VJTlRTCiAgICB0eG4gTG9jYWxOdW1VaW50CiAgICAhCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgVUludHMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTAtNTEKICAgIC8vICMgSW5pdGlhbGl6ZSBnbG9iYWwgc3RhdGUgdmFyaWFibGVzCiAgICAvLyBzZWxmLnBhdXNlZF9yZWdpc3RyeSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QQVVTRURfUkVHSVNUUlkpCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUyCiAgICAvLyBzZWxmLnBhdXNlZF9wcm9wb3NhbHMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUEFVU0VEX1BST1BPU0FMUykKICAgIGJ5dGVjIDEwIC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfTUFOQUdFUikKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2CiAgICAvLyBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICBieXRlYyAxMiAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NS01NwogICAgLy8gc2VsZi54Z292X3N1YnNjcmliZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9TVUJTQ1JJQkVSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTgKICAgIC8vIHNlbGYueGdvdl9wYXlvciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX1BBWU9SKQogICAgYnl0ZWMgMTMgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTkKICAgIC8vIHNlbGYueGdvdl9jb3VuY2lsID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfQ09VTkNJTCkKICAgIGJ5dGVjIDIwIC8vIDB4Nzg2NzZmNzY1ZjYzNmY3NTZlNjM2OTZjCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MQogICAgLy8gc2VsZi5reWNfcHJvdmlkZXIgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfS1lDX1BST1ZJREVSKQogICAgYnl0ZWMgMTQgLy8gMHg2Yjc5NjM1ZjcwNzI2Zjc2Njk2NDY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzCiAgICAvLyBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01BTkFHRVIKICAgIGJ5dGVjIDE1IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDYxNmU2MTY3NjU3MgogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2Mi02NAogICAgLy8gc2VsZi5jb21taXR0ZWVfbWFuYWdlciA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9DT01NSVRURUVfTUFOQUdFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1CiAgICAvLyBzZWxmLnhnb3ZfZGFlbW9uID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfREFFTU9OKQogICAgYnl0ZWMgMTYgLy8gMHg3ODY3NmY3NjVmNjQ2MTY1NmQ2ZjZlCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NwogICAgLy8gc2VsZi54Z292X2ZlZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX0ZFRSkKICAgIGJ5dGVjIDE3IC8vIDB4Nzg2NzZmNzY1ZjY2NjU2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OAogICAgLy8gc2VsZi54Z292cyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WUykKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5CiAgICAvLyBzZWxmLnByb3Bvc2VyX2ZlZSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NFUl9GRUUpCiAgICBieXRlYyAxOCAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MAogICAgLy8gc2VsZi5wcm9wb3NhbF9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TQUxfRkVFKQogICAgYnl0ZWMgMTEgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzIKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9QVUJMSVNISU5HX0JQUwogICAgYnl0ZWMgMjEgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY3MDc1NjI2YzY5NzM2ODY5NmU2NzVmNjI3MDczCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzEtNzMKICAgIC8vIHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TQUxfUFVCTElTSElOR19CUFMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BST1BPU0FMX0NPTU1JVE1FTlRfQlBTCiAgICBieXRlYyAyMiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NC03NgogICAgLy8gc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2JwcyA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9DT01NSVRNRU5UX0JQUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUlOX1JFUVVFU1RFRF9BTU9VTlQKICAgIGJ5dGVjIDIzIC8vIDB4NmQ2OTZlNWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4LTgwCiAgICAvLyBzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50ID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01JTl9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9TTUFMTAogICAgYnl0ZWMgMjQgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODItODQKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX01FRElVTQogICAgYnl0ZWMgMjUgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NS04NwogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTUVESVVNCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9MQVJHRQogICAgYnl0ZWMgMjYgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgtOTAKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIGJ5dGVjIDI3IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5Mi05NAogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTUVESVVNCiAgICBieXRlYyAyOCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NS05NwogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk5CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9MQVJHRQogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4LTEwMAogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDIKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX1hMQVJHRQogICAgYnl0ZWMgMzAgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxLTEwMwogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX1hMQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNgogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9TTUFMTAogICAgYnl0ZWMgMzEgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDUtMTA3CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDkKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTUVESVVNCiAgICBieXRlYyAzMiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4LTExMAogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9NRURJVU0KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTIKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTEFSR0UKICAgIGJ5dGVjIDMzIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExLTExMwogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX0xBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE1CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1hMQVJHRQogICAgYnl0ZWMgMzQgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNC0xMTYKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fWExBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE4CiAgICAvLyBzZWxmLnF1b3J1bV9zbWFsbCA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9RVU9SVU1fU01BTEwpCiAgICBieXRlYyAzNSAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTkKICAgIC8vIHNlbGYucXVvcnVtX21lZGl1bSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9RVU9SVU1fTUVESVVNKQogICAgYnl0ZWMgMzYgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjAKICAgIC8vIHNlbGYucXVvcnVtX2xhcmdlID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9MQVJHRSkKICAgIGJ5dGVjIDM3IC8vIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9TTUFMTAogICAgYnl0ZWMgMzggLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjItMTI0CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjYKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTUVESVVNCiAgICBieXRlYyAzOSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI1LTEyNwogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9NRURJVU0KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjkKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTEFSR0UKICAgIGJ5dGVjIDQwIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI4LTEzMAogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX0xBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTMyCiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX09VVFNUQU5ESU5HX0ZVTkRTKQogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTM1CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9NRU1CRVJTKQogICAgYnl0ZWMgNDEgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzNgogICAgLy8gc2VsZi5jb21taXR0ZWVfdm90ZXMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX1ZPVEVTKQogICAgYnl0ZWMgNDIgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTM4CiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BFTkRJTkdfUFJPUE9TQUxTKQogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTQwCiAgICAvLyBzZWxmLnJlcXVlc3RfaWQgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUkVRVUVTVF9JRCkKICAgIGJ5dGVjIDE5IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAoKbWFpbl9hZnRlcl9pZl9lbHNlQDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogbWFpbl9hZnRlcl9pZl9lbHNlQDQwCiAgICBwdXNoYnl0ZXNzIDB4NGM1YzYxYmEgMHg4NmY3ZTBlNiAweDM5ZTI2ZDhhIDB4OTgzNTJlODYgMHhmYTRlZDZlMiAweGQ2YzljYzFhIDB4NWM0ODQwNTUgMHgzN2Q2YWRmMSAweGQ0MjE2YjZlIDB4YmE4NTIwZjIgMHgxNjc3YjMwZSAweDg0YjdkMjY4IDB4NjUzYTBiZGIgMHg0OTU2YzFhYiAweGEwODJjZWY4IDB4NzY3MjU1NTkgMHhlOTU1M2Y4ZCAweDA0ZjkzMjJiIDB4NDUwNzczOTAgMHgzYzMxYmMwMiAweDBkMmM3ODkxIDB4MGRhMjc4ODUgMHg3YTRmZWU0MyAweDUyZGQxMGQ3IDB4ZDRkMzdhNjQgMHgzNDM0OWRjYyAweDE1OGY4ZGQ2IDB4ZGIyN2I5YWYgMHg5MTNlYzdkYiAweDY1NjEwYTlmIDB4ZmRjNjk1YzIgMHhiYTkwYWI1NCAweGIzYjU4NDgyIDB4MDBiM2NlZjUgMHgyNjk4MzIwMCAvLyBtZXRob2QgImNyZWF0ZSgpdm9pZCIsIG1ldGhvZCAicGF1c2VfcmVnaXN0cnkoKXZvaWQiLCBtZXRob2QgInBhdXNlX3Byb3Bvc2Fscygpdm9pZCIsIG1ldGhvZCAicmVzdW1lX3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJyZXN1bWVfcHJvcG9zYWxzKCl2b2lkIiwgbWV0aG9kICJzZXRfeGdvdl9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3BheW9yKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfY291bmNpbChhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF94Z292X3N1YnNjcmliZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfa3ljX3Byb3ZpZGVyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X2NvbW1pdHRlZV9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfZGFlbW9uKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAiY29uZmlnX3hnb3ZfcmVnaXN0cnkoKHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbNF0sdWludDY0WzRdLHVpbnQ2NFszXSx1aW50NjRbM10pKXZvaWQiLCBtZXRob2QgInVwZGF0ZV94Z292X3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJzdWJzY3JpYmVfeGdvdihhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292KGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3hnb3ZfYXBwKHVpbnQ2NCxhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292X2FwcCh1aW50NjQpdm9pZCIsIG1ldGhvZCAicmVxdWVzdF9zdWJzY3JpYmVfeGdvdihhZGRyZXNzLGFkZHJlc3MsdWludDY0LHBheSl2b2lkIiwgbWV0aG9kICJhcHByb3ZlX3N1YnNjcmliZV94Z292KHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZWplY3Rfc3Vic2NyaWJlX3hnb3YodWludDY0KXZvaWQiLCBtZXRob2QgInNldF92b3RpbmdfYWNjb3VudChhZGRyZXNzLGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3Byb3Bvc2VyKHBheSl2b2lkIiwgbWV0aG9kICJzZXRfcHJvcG9zZXJfa3ljKGFkZHJlc3MsYm9vbCx1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVjbGFyZV9jb21taXR0ZWUoYnl0ZVszMl0sdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJvcGVuX3Byb3Bvc2FsKHBheSl1aW50NjQiLCBtZXRob2QgInZvdGVfcHJvcG9zYWwodWludDY0LGFkZHJlc3MsdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJwYXlfZ3JhbnRfcHJvcG9zYWwodWludDY0KXZvaWQiLCBtZXRob2QgImRlY29tbWlzc2lvbl9wcm9wb3NhbCh1aW50NjQpdm9pZCIsIG1ldGhvZCAiZHJvcF9wcm9wb3NhbCh1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVwb3NpdF9mdW5kcyhwYXkpdm9pZCIsIG1ldGhvZCAid2l0aGRyYXdfZnVuZHModWludDY0KXZvaWQiLCBtZXRob2QgIndpdGhkcmF3X2JhbGFuY2UoKXZvaWQiLCBtZXRob2QgImdldF9zdGF0ZSgpKGJvb2wsYm9vbCxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbNF0sdWludDY0WzRdLHVpbnQ2NFszXSx1aW50NjRbM10sdWludDY0LHVpbnQ2NCxieXRlWzMyXSx1aW50NjQsdWludDY0KSIsIG1ldGhvZCAiaXNfcHJvcG9zYWwodWludDY0KXZvaWQiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBtYWluX2NyZWF0ZV9yb3V0ZUA1IG1haW5fcGF1c2VfcmVnaXN0cnlfcm91dGVANiBtYWluX3BhdXNlX3Byb3Bvc2Fsc19yb3V0ZUA3IG1haW5fcmVzdW1lX3JlZ2lzdHJ5X3JvdXRlQDggbWFpbl9yZXN1bWVfcHJvcG9zYWxzX3JvdXRlQDkgbWFpbl9zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDEwIG1haW5fc2V0X3BheW9yX3JvdXRlQDExIG1haW5fc2V0X3hnb3ZfY291bmNpbF9yb3V0ZUAxMiBtYWluX3NldF94Z292X3N1YnNjcmliZXJfcm91dGVAMTMgbWFpbl9zZXRfa3ljX3Byb3ZpZGVyX3JvdXRlQDE0IG1haW5fc2V0X2NvbW1pdHRlZV9tYW5hZ2VyX3JvdXRlQDE1IG1haW5fc2V0X3hnb3ZfZGFlbW9uX3JvdXRlQDE2IG1haW5fY29uZmlnX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTcgbWFpbl91cGRhdGVfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxOCBtYWluX3N1YnNjcmliZV94Z292X3JvdXRlQDE5IG1haW5fdW5zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMCBtYWluX3N1YnNjcmliZV94Z292X2FwcF9yb3V0ZUAyMSBtYWluX3Vuc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDIyIG1haW5fcmVxdWVzdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMyBtYWluX2FwcHJvdmVfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjQgbWFpbl9yZWplY3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjUgbWFpbl9zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMjYgbWFpbl9zdWJzY3JpYmVfcHJvcG9zZXJfcm91dGVAMjcgbWFpbl9zZXRfcHJvcG9zZXJfa3ljX3JvdXRlQDI4IG1haW5fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjkgbWFpbl9vcGVuX3Byb3Bvc2FsX3JvdXRlQDMwIG1haW5fdm90ZV9wcm9wb3NhbF9yb3V0ZUAzMSBtYWluX3BheV9ncmFudF9wcm9wb3NhbF9yb3V0ZUAzMiBtYWluX2RlY29tbWlzc2lvbl9wcm9wb3NhbF9yb3V0ZUAzMyBtYWluX2Ryb3BfcHJvcG9zYWxfcm91dGVAMzQgbWFpbl9kZXBvc2l0X2Z1bmRzX3JvdXRlQDM1IG1haW5fd2l0aGRyYXdfZnVuZHNfcm91dGVAMzYgbWFpbl93aXRoZHJhd19iYWxhbmNlX3JvdXRlQDM3IG1haW5fZ2V0X3N0YXRlX3JvdXRlQDM4IG1haW5faXNfcHJvcG9zYWxfcm91dGVAMzkKCm1haW5fYWZ0ZXJfaWZfZWxzZUA0MDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIGludGNfMCAvLyAwCiAgICByZXR1cm4KCm1haW5faXNfcHJvcG9zYWxfcm91dGVAMzk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBpc19wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9nZXRfc3RhdGVfcm91dGVAMzg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDcwCiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiBnZXRfc3RhdGUKICAgIGJ5dGVjIDcgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fd2l0aGRyYXdfYmFsYW5jZV9yb3V0ZUAzNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNDEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgd2l0aGRyYXdfYmFsYW5jZQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl93aXRoZHJhd19mdW5kc19yb3V0ZUAzNjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHdpdGhkcmF3X2Z1bmRzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2RlcG9zaXRfZnVuZHNfcm91dGVAMzU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTk5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkZXBvc2l0X2Z1bmRzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2Ryb3BfcHJvcG9zYWxfcm91dGVAMzQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NTUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZHJvcF9wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9kZWNvbW1pc3Npb25fcHJvcG9zYWxfcm91dGVAMzM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwNAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVjb21taXNzaW9uX3Byb3Bvc2FsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3BheV9ncmFudF9wcm9wb3NhbF9yb3V0ZUAzMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg1NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODU0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBwYXlfZ3JhbnRfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fdm90ZV9wcm9wb3NhbF9yb3V0ZUAzMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzk2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB2b3RlX3Byb3Bvc2FsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX29wZW5fcHJvcG9zYWxfcm91dGVAMzA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NDEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZAogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMSAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICBjYWxsc3ViIG9wZW5fcHJvcG9zYWwKICAgIGl0b2IKICAgIGJ5dGVjIDcgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcxOAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVjbGFyZV9jb21taXR0ZWUKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3Byb3Bvc2VyX2t5Y19yb3V0ZUAyODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njg5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfcHJvcG9zZXJfa3ljCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3N1YnNjcmliZV9wcm9wb3Nlcl9yb3V0ZUAyNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY2MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NjAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV9wcm9wb3NlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMjY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MzAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3ZvdGluZ19hY2NvdW50CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3JlamVjdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyNToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjEzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZWplY3Rfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fYXBwcm92ZV9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyNDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTg3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhcHByb3ZlX3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3JlcXVlc3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZXF1ZXN0X3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3Vuc3Vic2NyaWJlX3hnb3ZfYXBwX3JvdXRlQDIyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHVuc3Vic2NyaWJlX3hnb3ZfYXBwCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3N1YnNjcmliZV94Z292X2FwcF9yb3V0ZUAyMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV94Z292X2FwcAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl91bnN1YnNjcmliZV94Z292X3JvdXRlQDIwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQ5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHVuc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc3Vic2NyaWJlX3hnb3Zfcm91dGVAMTk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDE5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzdWJzY3JpYmVfeGdvdgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl91cGRhdGVfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGFsbG93X2FjdGlvbnM9WyJVcGRhdGVBcHBsaWNhdGlvbiJdKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgaW50Y18yIC8vIFVwZGF0ZUFwcGxpY2F0aW9uCiAgICA9PQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgVXBkYXRlQXBwbGljYXRpb24KICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiB1cGRhdGVfeGdvdl9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9jb25maWdfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxNzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzYyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBjb25maWdfeGdvdl9yZWdpc3RyeQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfeGdvdl9kYWVtb25fcm91dGVAMTY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3ZfZGFlbW9uCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF9jb21taXR0ZWVfbWFuYWdlcl9yb3V0ZUAxNToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzMyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfY29tbWl0dGVlX21hbmFnZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X2t5Y19wcm92aWRlcl9yb3V0ZUAxNDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQtNDIKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzE3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfa3ljX3Byb3ZpZGVyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF94Z292X3N1YnNjcmliZXJfcm91dGVAMTM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM0LTQyCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3Zfc3Vic2NyaWJlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfeGdvdl9jb3VuY2lsX3JvdXRlQDEyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjg3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X2NvdW5jaWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3BheW9yX3JvdXRlQDExOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjcyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9wYXlvcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDEwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNC00MgogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF94Z292X21hbmFnZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVzdW1lX3Byb3Bvc2Fsc19yb3V0ZUA5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHJlc3VtZV9wcm9wb3NhbHMKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVzdW1lX3JlZ2lzdHJ5X3JvdXRlQDg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMzkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgcmVzdW1lX3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3BhdXNlX3Byb3Bvc2Fsc19yb3V0ZUA3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjMwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHBhdXNlX3Byb3Bvc2FscwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9wYXVzZV9yZWdpc3RyeV9yb3V0ZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjIxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHBhdXNlX3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2NyZWF0ZV9yb3V0ZUA1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjEyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoY3JlYXRlPSJyZXF1aXJlIikKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICAhCiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIGNyZWF0aW5nCiAgICBjYWxsc3ViIGNyZWF0ZQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc194Z292X21hbmFnZXIoKSAtPiB1aW50NjQ6CmlzX3hnb3ZfbWFuYWdlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2NQogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfbWFuYWdlciBleGlzdHMKICAgID09CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfeGdvdl9zdWJzY3JpYmVyKCkgLT4gdWludDY0Ogppc194Z292X3N1YnNjcmliZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNjkKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IHNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlLm5hdGl2ZQogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEyIC8vIDB4Nzg2NzZmNzY1ZjczNzU2MjczNjM3MjY5NjI2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9zdWJzY3JpYmVyIGV4aXN0cwogICAgPT0KICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5faXNfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB1aW50NjQ6Cl9pc19wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE3OS0xODAKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgX2lzX3Byb3Bvc2FsKHNlbGYsIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTgyCiAgICAvLyBBcHBsaWNhdGlvbihwcm9wb3NhbF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTgzCiAgICAvLyA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTgyLTE4MwogICAgLy8gQXBwbGljYXRpb24ocHJvcG9zYWxfaWQubmF0aXZlKS5jcmVhdG9yCiAgICAvLyA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTgxLTE4NAogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBBcHBsaWNhdGlvbihwcm9wb3NhbF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIC8vICAgICA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQ6IHVpbnQ2NCkgLT4gdWludDY0Ogp2YWxpZF94Z292X3BheW1lbnQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTgtMTk5CiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIHZhbGlkX3hnb3ZfcGF5bWVudChzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAxCiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAxLTIwMgogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgYnogdmFsaWRfeGdvdl9wYXltZW50X2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAyCiAgICAvLyBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNyAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2ZlZSBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDEtMjAyCiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICBieiB2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzCiAgICBpbnRjXzEgLy8gMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjAwLTIwMwogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICAgICBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgLy8gKQogICAgcmV0c3ViCgp2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwMC0yMDMKICAgIC8vIHJldHVybiAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyAgICAgYW5kIHBheW1lbnQuYW1vdW50ID09IHNlbGYueGdvdl9mZWUudmFsdWUKICAgIC8vICkKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS52YWxpZF9reWMoYWRkcmVzczogYnl0ZXMpIC0+IHVpbnQ2NDoKdmFsaWRfa3ljOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA1LTIwNgogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiB2YWxpZF9reWMoc2VsZiwgYWRkcmVzczogQWNjb3VudCkgLT4gYm9vbDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA4CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgZ2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA4LTIwOQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGJ6IHZhbGlkX2t5Y19ib29sX2ZhbHNlQDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwOQogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICBleHRyYWN0X3VpbnQ2NAogICAgZ2xvYmFsIExhdGVzdFRpbWVzdGFtcAogICAgPgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA4LTIwOQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX3N0YXR1cy5uYXRpdmUKICAgIC8vIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIGJ6IHZhbGlkX2t5Y19ib29sX2ZhbHNlQDMKICAgIGludGNfMSAvLyAxCgp2YWxpZF9reWNfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjA3LTIxMAogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gICAgIGFuZCBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfZXhwaXJpbmcubmF0aXZlID4gR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIC8vICkKICAgIHN3YXAKICAgIHJldHN1YgoKdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIHZhbGlkX2t5Y19ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuY3JlYXRlKCkgLT4gdm9pZDoKY3JlYXRlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE4CiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IGFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgdHhuIFNlbmRlcgogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2MQogICAgLy8gcmV0dXJuIFRlbXBsYXRlVmFyW0J5dGVzXSgiZW50cm9weSIpICAjIHRyaWNrIHRvIGFsbG93IGZyZXNoIGRlcGxveW1lbnQKICAgIGJ5dGVjIDQ5IC8vIFRNUExfZW50cm9weQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjE5CiAgICAvLyBhc3NlcnQgc2VsZi5lbnRyb3B5KCkgPT0gVGVtcGxhdGVWYXJbQnl0ZXNdKCJlbnRyb3B5IikKICAgIGR1cAogICAgPT0KICAgIGFzc2VydAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnBhdXNlX3JlZ2lzdHJ5KCkgLT4gdm9pZDoKcGF1c2VfcmVnaXN0cnk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjI4CiAgICAvLyBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSA9IFVJbnQ2NCgxKQogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgaW50Y18xIC8vIDEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucGF1c2VfcHJvcG9zYWxzKCkgLT4gdm9pZDoKcGF1c2VfcHJvcG9zYWxzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjM2CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIzNwogICAgLy8gc2VsZi5wYXVzZWRfcHJvcG9zYWxzLnZhbHVlID0gVUludDY0KDEpCiAgICBieXRlYyAxMCAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBpbnRjXzEgLy8gMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5yZXN1bWVfcmVnaXN0cnkoKSAtPiB2b2lkOgpyZXN1bWVfcmVnaXN0cnk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNDUKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjQ2CiAgICAvLyBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSA9IFVJbnQ2NCgwKQogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVzdW1lX3Byb3Bvc2FscygpIC0+IHZvaWQ6CnJlc3VtZV9wcm9wb3NhbHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTQKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU1CiAgICAvLyBzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUgPSBVSW50NjQoMCkKICAgIGJ5dGVjIDEwIC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X21hbmFnZXIobWFuYWdlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTctMjU4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjkKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjcwCiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IG1hbmFnZXIKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfcGF5b3IocGF5b3I6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfcGF5b3I6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzItMjczCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9wYXlvcihzZWxmLCBwYXlvcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODQKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjg1CiAgICAvLyBzZWxmLnhnb3ZfcGF5b3IudmFsdWUgPSBwYXlvcgogICAgYnl0ZWMgMTMgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X2NvdW5jaWwoY291bmNpbDogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X2NvdW5jaWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODctMjg4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X2NvdW5jaWwoc2VsZiwgY291bmNpbDogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyOTkKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAwCiAgICAvLyBzZWxmLnhnb3ZfY291bmNpbC52YWx1ZSA9IGNvdW5jaWwKICAgIGJ5dGVjIDIwIC8vIDB4Nzg2NzZmNzY1ZjYzNmY3NTZlNjM2OTZjCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3Zfc3Vic2NyaWJlcihzdWJzY3JpYmVyOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3Zfc3Vic2NyaWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwMi0zMDMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3hnb3Zfc3Vic2NyaWJlcihzZWxmLCBzdWJzY3JpYmVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxNAogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMTUKICAgIC8vIHNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlID0gc3Vic2NyaWJlcgogICAgYnl0ZWMgMTIgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfa3ljX3Byb3ZpZGVyKHByb3ZpZGVyOiBieXRlcykgLT4gdm9pZDoKc2V0X2t5Y19wcm92aWRlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMxNy0zMTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2t5Y19wcm92aWRlcihzZWxmLCBwcm92aWRlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjkKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzMwCiAgICAvLyBzZWxmLmt5Y19wcm92aWRlci52YWx1ZSA9IHByb3ZpZGVyCiAgICBieXRlYyAxNCAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9jb21taXR0ZWVfbWFuYWdlcihtYW5hZ2VyOiBieXRlcykgLT4gdm9pZDoKc2V0X2NvbW1pdHRlZV9tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzMyLTMzMwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfY29tbWl0dGVlX21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDQKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ1CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlID0gbWFuYWdlcgogICAgYnl0ZWMgMTUgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3ZfZGFlbW9uKHhnb3ZfZGFlbW9uOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3ZfZGFlbW9uOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ3LTM0OAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfeGdvdl9kYWVtb24oc2VsZiwgeGdvdl9kYWVtb246IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzU5CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MAogICAgLy8gc2VsZi54Z292X2RhZW1vbi52YWx1ZSA9IHhnb3ZfZGFlbW9uCiAgICBieXRlYyAxNiAvLyAweDc4Njc2Zjc2NWY2NDYxNjU2ZDZmNmUKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5jb25maWdfeGdvdl9yZWdpc3RyeShjb25maWc6IGJ5dGVzKSAtPiB2b2lkOgpjb25maWdfeGdvdl9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2Mi0zNjMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgY29uZmlnX3hnb3ZfcmVnaXN0cnkoc2VsZiwgY29uZmlnOiB0eXAuWEdvdlJlZ2lzdHJ5Q29uZmlnKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzUKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTc3CiAgICAvLyByZXR1cm4gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSA9PSAwCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgICEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3NgogICAgLy8gYXNzZXJ0IHNlbGYubm9fcGVuZGluZ19wcm9wb3NhbHMoKSwgZXJyLk5PX1BFTkRJTkdfUFJPUE9TQUxTCiAgICBhc3NlcnQgLy8gQ2Fubm90IHBlcmZvcm0gb3BlcmF0aW9uIHdpdGggcGVuZGluZyBwcm9wb3NhbHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM3OAogICAgLy8gc2VsZi54Z292X2ZlZS52YWx1ZSA9IGNvbmZpZy54Z292X2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAxNyAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzkKICAgIC8vIHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlID0gY29uZmlnLnByb3Bvc2VyX2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAxOCAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM4MAogICAgLy8gc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUgPSBjb25maWcucHJvcG9zYWxfZmVlLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMTEgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODEKICAgIC8vIHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMudmFsdWUgPSBjb25maWcucHJvcG9zYWxfcHVibGlzaGluZ19icHMubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIHB1c2hpbnQgMjQgLy8gMjQKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyMSAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjcwNzU2MjZjNjk3MzY4Njk2ZTY3NWY2MjcwNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODIKICAgIC8vIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUgPSBjb25maWcucHJvcG9zYWxfY29tbWl0bWVudF9icHMubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyMiAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODQKICAgIC8vIHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUgPSBjb25maWcubWluX3JlcXVlc3RlZF9hbW91bnQubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIHB1c2hpbnQgNDAgLy8gNDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyMyAvLyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODUKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgNDggMjQgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGludGNfMCAvLyAwCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjQgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzg2CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNSAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM4NwogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsyXS5uYXRpdmUKICAgIHB1c2hpbnQgMTYgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNiAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODkKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDcyIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDI3IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTAKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyOCAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTEKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzJdLm5hdGl2ZQogICAgZHVwCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5MgogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzNdLm5hdGl2ZQogICAgcHVzaGludCAyNCAvLyAyNAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDMwIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5NAogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDEwNCAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzMSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5NQogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzMiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk2CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bMl0ubmF0aXZlCiAgICBkdXAKICAgIHB1c2hpbnQgMTYgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzMyAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5NwogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblszXS5uYXRpdmUKICAgIHB1c2hpbnQgMjQgLy8gMjQKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk5CiAgICAvLyBzZWxmLnF1b3J1bV9zbWFsbC52YWx1ZSA9IGNvbmZpZy5xdW9ydW1bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMTM2IDI0IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDM1IC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDAwCiAgICAvLyBzZWxmLnF1b3J1bV9tZWRpdW0udmFsdWUgPSBjb25maWcucXVvcnVtWzFdLm5hdGl2ZQogICAgZHVwCiAgICBpbnRjXzMgLy8gOAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDM2IC8vIDB4NzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MDEKICAgIC8vIHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlID0gY29uZmlnLnF1b3J1bVsyXS5uYXRpdmUKICAgIHB1c2hpbnQgMTYgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwMwogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUgPSBjb25maWcud2VpZ2h0ZWRfcXVvcnVtWzBdLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBleHRyYWN0IDE2MCAyNCAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzOCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwNAogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlID0gY29uZmlnLndlaWdodGVkX3F1b3J1bVsxXS5uYXRpdmUKICAgIGR1cAogICAgaW50Y18zIC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzOSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDA1CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZS52YWx1ZSA9IGNvbmZpZy53ZWlnaHRlZF9xdW9ydW1bMl0ubmF0aXZlCiAgICBwdXNoaW50IDE2IC8vIDE2CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgNDAgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudXBkYXRlX3hnb3ZfcmVnaXN0cnkoKSAtPiB2b2lkOgp1cGRhdGVfeGdvdl9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxNwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc3Vic2NyaWJlX3hnb3Yodm90aW5nX2FkZHJlc3M6IGJ5dGVzLCBwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CnN1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDE5LTQyMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzdWJzY3JpYmVfeGdvdigKICAgIC8vICAgICBzZWxmLCB2b3RpbmdfYWRkcmVzczogYXJjNC5BZGRyZXNzLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbgogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzUKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDM3CiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBub3QgaW4gc2VsZi54Z292X2JveCwgZXJyLkFMUkVBRFlfWEdPVgogICAgYnl0ZWMgNSAvLyAweDc4CiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDM4LTQzOQogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MS00NDYKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9dm90aW5nX2FkZHJlc3MsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBmcmFtZV9kaWcgLTIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0NAogICAgLy8gdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgYnl0ZWMgOSAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MS00NDYKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9dm90aW5nX2FkZHJlc3MsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0NQogICAgLy8gbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIGJ5dGVjIDkgLy8gMHgwMDAwMDAwMDAwMDAwMDAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDEtNDQ2CiAgICAvLyAjIGNyZWF0ZSBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDEtNDQyCiAgICAvLyAjIGNyZWF0ZSBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgYnl0ZWMgNSAvLyAweDc4CiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MS00NDYKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9dm90aW5nX2FkZHJlc3MsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDcKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudW5zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzKSAtPiB2b2lkOgp1bnN1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDQ5LTQ1MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB1bnN1YnNjcmliZV94Z292KHNlbGYsIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjEKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDYzLTQ2NAogICAgLy8gIyBlbnN1cmUgdGhlIHByb3ZpZGVkIGFkZHJlc3MgaXMgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWMgNSAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwbiAyCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ2NS00NjYKICAgIC8vICMgZ2V0IHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gdm90aW5nX2FkZHJlc3MgPSBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLnZvdGluZ19hZGRyZXNzLm5hdGl2ZQogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjkKICAgIC8vIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICBmcmFtZV9kaWcgLTEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMgogICAgZnJhbWVfZGlnIDEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiB1bnN1YnNjcmliZV94Z292X2Jvb2xfZmFsc2VAMwoKdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCgp1bnN1YnNjcmliZV94Z292X2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ2Ny00NzAKICAgIC8vICMgZW5zdXJlIHRoZSBzZW5kZXIgaXMgdGhlIHhHb3Ygb3IgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzItNDczCiAgICAvLyAjIGRlbGV0ZSBib3gKICAgIC8vIGRlbCBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2RlbAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzQKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCnVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIGIgdW5zdWJzY3JpYmVfeGdvdl9ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc3Vic2NyaWJlX3hnb3ZfYXBwKGFwcF9pZDogYnl0ZXMsIHZvdGluZ19hZGRyZXNzOiBieXRlcywgcGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfeGdvdl9hcHA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzYtNDgyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV94Z292X2FwcCgKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIGFwcF9pZDogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbiwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDMgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDk3CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ5OQogICAgLy8gYXBwX2NyZWF0b3IgPSBBcHBsaWNhdGlvbihhcHBfaWQubmF0aXZlKS5jcmVhdG9yCiAgICBmcmFtZV9kaWcgLTMKICAgIGJ0b2kKICAgIGR1cAogICAgYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTAwCiAgICAvLyBhcHBfYWRkcmVzcyA9IEFwcGxpY2F0aW9uKGFwcF9pZC5uYXRpdmUpLmFkZHJlc3MKICAgIHN3YXAKICAgIGFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwMi01MDMKICAgIC8vICMgc2VuZGVyIG11c3QgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGFwcAogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgPT0gYXBwX2NyZWF0b3IsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgIHVuY292ZXIgMgogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwNC01MDUKICAgIC8vICMgZW5zdXJlIHRoZSBhcHAgaXMgbm90IGFscmVhZHkgYW4geEdvdgogICAgLy8gYXNzZXJ0IGFwcF9hZGRyZXNzIG5vdCBpbiBzZWxmLnhnb3ZfYm94LCBlcnIuQUxSRUFEWV9YR09WCiAgICBieXRlYyA1IC8vIDB4NzgKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBBbHJlYWR5IGFuIHhHb3YKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwNi01MDcKICAgIC8vICMgY2hlY2sgcGF5bWVudAogICAgLy8gYXNzZXJ0IHNlbGYudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQpLCBlcnIuSU5WQUxJRF9QQVlNRU5UCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgdmFsaWRfeGdvdl9wYXltZW50CiAgICBhc3NlcnQgLy8gSW52YWxpZCBwYXltZW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MDktNTEzCiAgICAvLyBzZWxmLnhnb3ZfYm94W2FwcF9hZGRyZXNzXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9dm90aW5nX2FkZHJlc3MsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBmcmFtZV9kaWcgLTIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxMQogICAgLy8gdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgYnl0ZWMgOSAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwOS01MTMKICAgIC8vIHNlbGYueGdvdl9ib3hbYXBwX2FkZHJlc3NdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTEyCiAgICAvLyBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgYnl0ZWMgOSAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwOS01MTMKICAgIC8vIHNlbGYueGdvdl9ib3hbYXBwX2FkZHJlc3NdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE0CiAgICAvLyBzZWxmLnhnb3ZzLnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4Nzg2NzZmNzY3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnVuc3Vic2NyaWJlX3hnb3ZfYXBwKGFwcF9pZDogYnl0ZXMpIC0+IHZvaWQ6CnVuc3Vic2NyaWJlX3hnb3ZfYXBwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE2LTUxNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB1bnN1YnNjcmliZV94Z292X2FwcChzZWxmLCBhcHBfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjgKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTMwCiAgICAvLyBhcHBfY3JlYXRvciA9IEFwcGxpY2F0aW9uKGFwcF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MzEKICAgIC8vIGFwcF9hZGRyZXNzID0gQXBwbGljYXRpb24oYXBwX2lkLm5hdGl2ZSkuYWRkcmVzcwogICAgc3dhcAogICAgYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTMzLTUzNAogICAgLy8gIyBlbnN1cmUgdGhlIHByb3ZpZGVkIGFwcCBpcyBhbiB4R292CiAgICAvLyBhc3NlcnQgYXBwX2FkZHJlc3MgaW4gc2VsZi54Z292X2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWMgNSAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGR1cAogICAgY292ZXIgMgogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUzNS01MzYKICAgIC8vICMgZ2V0IHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gdm90aW5nX2FkZHJlc3MgPSBzZWxmLnhnb3ZfYm94W2FwcF9hZGRyZXNzXS52b3RpbmdfYWRkcmVzcy5uYXRpdmUKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgc3dhcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTM5CiAgICAvLyBhcHBfY3JlYXRvciA9PSBUeG4uc2VuZGVyIG9yIHZvdGluZ19hZGRyZXNzID09IFR4bi5zZW5kZXIKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogdW5zdWJzY3JpYmVfeGdvdl9hcHBfYm9vbF90cnVlQDIKICAgIGZyYW1lX2RpZyAxCiAgICB0eG4gU2VuZGVyCiAgICA9PQogICAgYnogdW5zdWJzY3JpYmVfeGdvdl9hcHBfYm9vbF9mYWxzZUAzCgp1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCgp1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MzctNTQwCiAgICAvLyAjIGVuc3VyZSB0aGUgc2VuZGVyIGlzIHRoZSBhcHAgY3JlYXRvciBvciB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgYXBwX2NyZWF0b3IgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NDItNTQzCiAgICAvLyAjIGRlbGV0ZSBib3gKICAgIC8vIGRlbCBzZWxmLnhnb3ZfYm94W2FwcF9hZGRyZXNzXQogICAgZnJhbWVfZGlnIDAKICAgIGJveF9kZWwKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQ0CiAgICAvLyBzZWxmLnhnb3ZzLnZhbHVlIC09IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4Nzg2NzZmNzY3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgp1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX2ZhbHNlQDM6CiAgICBpbnRjXzAgLy8gMAogICAgYiB1bnN1YnNjcmliZV94Z292X2FwcF9ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVxdWVzdF9zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzLCBvd25lcl9hZGRyZXNzOiBieXRlcywgcmVsYXRpb25fdHlwZTogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKcmVxdWVzdF9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU0Ni01NTMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcmVxdWVzdF9zdWJzY3JpYmVfeGdvdigKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbiwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTY4CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3MC01NzEKICAgIC8vICMgZW5zdXJlIHRoZSB4Z292X2FkZHJlc3MgaXMgbm90IGFscmVhZHkgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjIDUgLy8gMHg3OAogICAgZnJhbWVfZGlnIC00CiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTczLTU3NAogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3Ni01NzcKICAgIC8vICMgY3JlYXRlIHJlcXVlc3QgYm94CiAgICAvLyByaWQgPSBzZWxmLnJlcXVlc3RfaWQudmFsdWUKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxOSAvLyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucmVxdWVzdF9pZCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU3OC01ODIKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgLy8gICAgIHhnb3ZfYWRkcj14Z292X2FkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcj1vd25lcl9hZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU9cmVsYXRpb25fdHlwZSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtNAogICAgZnJhbWVfZGlnIC0zCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzgKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgc3dhcAogICAgaXRvYgogICAgYnl0ZWMgNDMgLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NzgtNTgyCiAgICAvLyBzZWxmLnJlcXVlc3RfYm94W3JpZF0gPSB0eXAuWEdvdlN1YnNjcmliZVJlcXVlc3RCb3hWYWx1ZSgKICAgIC8vICAgICB4Z292X2FkZHI9eGdvdl9hZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHI9b3duZXJfYWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlPXJlbGF0aW9uX3R5cGUsCiAgICAvLyApCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODQtNTg1CiAgICAvLyAjIGluY3JlbWVudCByZXF1ZXN0IGlkCiAgICAvLyBzZWxmLnJlcXVlc3RfaWQudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE5IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2lkIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjIDE5IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuYXBwcm92ZV9zdWJzY3JpYmVfeGdvdihyZXF1ZXN0X2lkOiBieXRlcykgLT4gdm9pZDoKYXBwcm92ZV9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4Ny01ODgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgYXBwcm92ZV9zdWJzY3JpYmVfeGdvdihzZWxmLCByZXF1ZXN0X2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk5CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X3N1YnNjcmliZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X3N1YnNjcmliZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwMS02MDIKICAgIC8vICMgZ2V0IHRoZSByZXF1ZXN0CiAgICAvLyByZXF1ZXN0ID0gc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0uY29weSgpCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGl0b2IKICAgIGJ5dGVjIDQzIC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwNQogICAgLy8gdm90aW5nX2FkZHJlc3M9cmVxdWVzdC5vd25lcl9hZGRyLAogICAgZHVwCiAgICBleHRyYWN0IDMyIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjA2CiAgICAvLyB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA5IC8vIDB4MDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjAzLTYwOAogICAgLy8gIyBjcmVhdGUgdGhlIHhHb3YKICAgIC8vIHNlbGYueGdvdl9ib3hbcmVxdWVzdC54Z292X2FkZHIubmF0aXZlXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9cmVxdWVzdC5vd25lcl9hZGRyLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDcKICAgIC8vIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyA5IC8vIDB4MDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjAzLTYwOAogICAgLy8gIyBjcmVhdGUgdGhlIHhHb3YKICAgIC8vIHNlbGYueGdvdl9ib3hbcmVxdWVzdC54Z292X2FkZHIubmF0aXZlXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9cmVxdWVzdC5vd25lcl9hZGRyLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDMtNjA0CiAgICAvLyAjIGNyZWF0ZSB0aGUgeEdvdgogICAgLy8gc2VsZi54Z292X2JveFtyZXF1ZXN0Lnhnb3ZfYWRkci5uYXRpdmVdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIHN3YXAKICAgIGV4dHJhY3QgMCAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGJ5dGVjIDUgLy8gMHg3OAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDMtNjA4CiAgICAvLyAjIGNyZWF0ZSB0aGUgeEdvdgogICAgLy8gc2VsZi54Z292X2JveFtyZXF1ZXN0Lnhnb3ZfYWRkci5uYXRpdmVdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz1yZXF1ZXN0Lm93bmVyX2FkZHIsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDkKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWNfMSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTAtNjExCiAgICAvLyAjIGRlbGV0ZSB0aGUgcmVxdWVzdAogICAgLy8gZGVsIHNlbGYucmVxdWVzdF9ib3hbcmVxdWVzdF9pZC5uYXRpdmVdCiAgICBib3hfZGVsCiAgICBwb3AKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5yZWplY3Rfc3Vic2NyaWJlX3hnb3YocmVxdWVzdF9pZDogYnl0ZXMpIC0+IHZvaWQ6CnJlamVjdF9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxMy02MTQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcmVqZWN0X3N1YnNjcmliZV94Z292KHNlbGYsIHJlcXVlc3RfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MjUKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3Zfc3Vic2NyaWJlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3Zfc3Vic2NyaWJlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjI3LTYyOAogICAgLy8gIyBkZWxldGUgdGhlIHJlcXVlc3QKICAgIC8vIGRlbCBzZWxmLnJlcXVlc3RfYm94W3JlcXVlc3RfaWQubmF0aXZlXQogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBpdG9iCiAgICBieXRlYyA0MyAvLyAweDcyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGJveF9kZWwKICAgIHBvcAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF92b3RpbmdfYWNjb3VudCh4Z292X2FkZHJlc3M6IGJ5dGVzLCB2b3RpbmdfYWRkcmVzczogYnl0ZXMpIC0+IHZvaWQ6CnNldF92b3RpbmdfYWNjb3VudDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYzMC02MzMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3ZvdGluZ19hY2NvdW50KAogICAgLy8gICAgIHNlbGYsIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzLCB2b3RpbmdfYWRkcmVzczogYXJjNC5BZGRyZXNzCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAyIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY0NQogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDctNjQ4CiAgICAvLyAjIENoZWNrIGlmIHRoZSBzZW5kZXIgaXMgYW4geEdvdiBtZW1iZXIKICAgIC8vIGV4aXN0cyA9IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveAogICAgYnl0ZWMgNSAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgZHVwbiAyCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY0OQogICAgLy8gYXNzZXJ0IGV4aXN0cywgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjUwCiAgICAvLyB4Z292X2JveCA9IHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0uY29weSgpCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1NAogICAgLy8gVHhuLnNlbmRlciA9PSB4Z292X2JveC52b3RpbmdfYWRkcmVzcy5uYXRpdmUgb3IgVHhuLnNlbmRlciA9PSB4Z292X2FkZHJlc3MKICAgIHR4biBTZW5kZXIKICAgIHN3YXAKICAgIGV4dHJhY3QgMCAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgID09CiAgICBibnogc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfdHJ1ZUAyCiAgICBmcmFtZV9kaWcgLTIKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDI6CiAgICBpbnRjXzEgLy8gMQoKc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1Mi02NTUKICAgIC8vICMgQ2hlY2sgdGhhdCB0aGUgc2VuZGVyIGlzIGVpdGhlciB0aGUgeEdvdiBvciB0aGUgdm90aW5nIGFkZHJlc3MKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgVHhuLnNlbmRlciA9PSB4Z292X2JveC52b3RpbmdfYWRkcmVzcy5uYXRpdmUgb3IgVHhuLnNlbmRlciA9PSB4Z292X2FkZHJlc3MKICAgIC8vICksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1Ny02NTgKICAgIC8vICMgVXBkYXRlIHRoZSB2b3RpbmcgYWNjb3VudCBpbiB0aGUgeEdvdiBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0udm90aW5nX2FkZHJlc3MgPSB2b3RpbmdfYWRkcmVzcwogICAgZnJhbWVfZGlnIDAKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIHJlcGxhY2UyIDAKICAgIGJveF9wdXQKICAgIHJldHN1YgoKc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfZmFsc2VAMzoKICAgIGludGNfMCAvLyAwCiAgICBiIHNldF92b3RpbmdfYWNjb3VudF9ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc3Vic2NyaWJlX3Byb3Bvc2VyKHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKc3Vic2NyaWJlX3Byb3Bvc2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjYwLTY2MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzdWJzY3JpYmVfcHJvcG9zZXIoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3NAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NzYKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyIG5vdCBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLkFMUkVBRFlfUFJPUE9TRVIKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBBbHJlYWR5IGEgcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3OQogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3Ny02ODAKICAgIC8vICMgY2hlY2sgZmVlCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gKSwgZXJyLldST05HX1JFQ0VJVkVSCiAgICBhc3NlcnQgLy8gV3JvbmcgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY4MQogICAgLy8gYXNzZXJ0IHBheW1lbnQuYW1vdW50ID09IHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlLCBlcnIuV1JPTkdfUEFZTUVOVF9BTU9VTlQKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTggLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9mZWUgZXhpc3RzCiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIHBheW1lbnQgYW1vdW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2ODMKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdID0gdHlwLlByb3Bvc2VyQm94VmFsdWUoCiAgICBieXRlY18zIC8vIDB4NzAKICAgIHR4biBTZW5kZXIKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjgzLTY4NwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuUHJvcG9zZXJCb3hWYWx1ZSgKICAgIC8vICAgICBhY3RpdmVfcHJvcG9zYWw9YXJjNC5Cb29sKEZhbHNlKSwgICMgbm9xYTogRkJUMDAzCiAgICAvLyAgICAga3ljX3N0YXR1cz1hcmM0LkJvb2woRmFsc2UpLCAgIyBub3FhOiBGQlQwMDMKICAgIC8vICAgICBreWNfZXhwaXJpbmc9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBwdXNoYnl0ZXMgMHgwMDAwMDAwMDAwMDAwMDAwMDAKICAgIGJveF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfcHJvcG9zZXJfa3ljKHByb3Bvc2VyOiBieXRlcywga3ljX3N0YXR1czogYnl0ZXMsIGt5Y19leHBpcmluZzogYnl0ZXMpIC0+IHZvaWQ6CnNldF9wcm9wb3Nlcl9reWM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2ODktNjkyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9wcm9wb3Nlcl9reWMoCiAgICAvLyAgICAgc2VsZiwgcHJvcG9zZXI6IGFyYzQuQWRkcmVzcywga3ljX3N0YXR1czogYXJjNC5Cb29sLCBreWNfZXhwaXJpbmc6IGFyYzQuVUludDY0CiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAzIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcwNi03MDcKICAgIC8vICMgY2hlY2sgaWYga3ljIHByb3ZpZGVyCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSBzZWxmLmt5Y19wcm92aWRlci52YWx1ZS5uYXRpdmUsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNCAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmt5Y19wcm92aWRlciBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDgKICAgIC8vIGFzc2VydCBwcm9wb3Nlci5uYXRpdmUgaW4gc2VsZi5wcm9wb3Nlcl9ib3gsIGVyci5QUk9QT1NFUl9ET0VTX05PVF9FWElTVAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBQcm9wb3NlciBkb2VzIG5vdCBleGlzdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzEwCiAgICAvLyBhY3RpdmVfcHJvcG9zYWwgPSBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmNvcHkoKS5hY3RpdmVfcHJvcG9zYWwKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18wIC8vIDAKICAgIGdldGJpdAogICAgYnl0ZWMgOCAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcxMi03MTYKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W3Byb3Bvc2VyLm5hdGl2ZV0gPSB0eXAuUHJvcG9zZXJCb3hWYWx1ZSgKICAgIC8vICAgICBhY3RpdmVfcHJvcG9zYWw9YWN0aXZlX3Byb3Bvc2FsLAogICAgLy8gICAgIGt5Y19zdGF0dXM9a3ljX3N0YXR1cywKICAgIC8vICAgICBreWNfZXhwaXJpbmc9a3ljX2V4cGlyaW5nLAogICAgLy8gKQogICAgZnJhbWVfZGlnIC0yCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICBpbnRjXzEgLy8gMQogICAgc3dhcAogICAgc2V0Yml0CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmRlY2xhcmVfY29tbWl0dGVlKGNvbW1pdHRlZV9pZDogYnl0ZXMsIHNpemU6IGJ5dGVzLCB2b3RlczogYnl0ZXMpIC0+IHZvaWQ6CmRlY2xhcmVfY29tbWl0dGVlOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzE4LTcyMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBkZWNsYXJlX2NvbW1pdHRlZSgKICAgIC8vICAgICBzZWxmLCBjb21taXR0ZWVfaWQ6IGN0eXAuQnl0ZXMzMiwgc2l6ZTogYXJjNC5VSW50NjQsIHZvdGVzOiBhcmM0LlVJbnQ2NAogICAgLy8gKSAtPiBOb25lOgogICAgcHJvdG8gMyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxNzMKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IHNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTUgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM0CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X2NvbW1pdHRlZV9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjczNwogICAgLy8gc2VsZi5jb21taXR0ZWVfaWQudmFsdWUgPSBjb21taXR0ZWVfaWQuY29weSgpCiAgICBieXRlYyA0NSAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NAogICAgZnJhbWVfZGlnIC0zCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM4CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlID0gc2l6ZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMgogICAgYnRvaQogICAgYnl0ZWMgNDEgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzM5CiAgICAvLyBzZWxmLmNvbW1pdHRlZV92b3Rlcy52YWx1ZSA9IHZvdGVzLm5hdGl2ZQogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBieXRlYyA0MiAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5vcGVuX3Byb3Bvc2FsKHBheW1lbnQ6IHVpbnQ2NCkgLT4gdWludDY0OgpvcGVuX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzQxLTc0MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICAvLyBkZWYgb3Blbl9wcm9wb3NhbChzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gVUludDY0OgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTgKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzU5CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3Byb3Bvc2Fscy52YWx1ZSwgZXJyLlBBVVNFRF9QUk9QT1NBTFMKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3Byb3Bvc2FscyBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBDcmVhdGlvbiBvZiBwcm9wb3NhbHMgaXMgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjEtNzYyCiAgICAvLyAjIENoZWNrIGlmIHRoZSBjYWxsZXIgaXMgYSByZWdpc3RlcmVkIHByb3Bvc2VyCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzY0LTc2NQogICAgLy8gIyBDaGVjayBpZiB0aGUgcHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucHJvcG9zZXJfYm94WwogICAgYnl0ZWNfMyAvLyAweDcwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjYKICAgIC8vIFR4bi5zZW5kZXIKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc2NC03NjcKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnByb3Bvc2VyX2JveFsKICAgIC8vICAgICBUeG4uc2VuZGVyCiAgICAvLyBdLmFjdGl2ZV9wcm9wb3NhbCwgZXJyLkFMUkVBRFlfQUNUSVZFX1BST1BPU0FMCiAgICBjb25jYXQKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGJ5dGVjIDggLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjgKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX2t5YyhUeG4uc2VuZGVyKSwgZXJyLklOVkFMSURfS1lDCiAgICB0eG4gU2VuZGVyCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzAKICAgIC8vIGFzc2VydCBUeG4uZmVlID49IChHbG9iYWwubWluX3R4bl9mZWUgKiAzKSwgZXJyLklOU1VGRklDSUVOVF9GRUUKICAgIHR4biBGZWUKICAgIGdsb2JhbCBNaW5UeG5GZWUKICAgIHB1c2hpbnQgMyAvLyAzCiAgICAqCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3NAogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3Mi03NzUKICAgIC8vICMgRW5zdXJlIHRoZSB0cmFuc2FjdGlvbiBoYXMgdGhlIGNvcnJlY3QgcGF5bWVudAogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzYKICAgIC8vIGFzc2VydCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSwgZXJyLldST05HX1BBWU1FTlRfQU1PVU5UCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDExIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfZmVlIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBwYXltZW50IGFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzc4LTc3OQogICAgLy8gIyBDcmVhdGUgdGhlIFByb3Bvc2FsIEFwcAogICAgLy8gcmVzID0gYXJjNC5hcmM0X2NyZWF0ZShwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbCwgVHhuLnNlbmRlcikKICAgIGl0eG5fYmVnaW4KICAgIHR4biBTZW5kZXIKICAgIHB1c2hpbnQgMTggLy8gMTgKICAgIGl0eG5fZmllbGQgR2xvYmFsTnVtVWludAogICAgcHVzaGludCAzIC8vIDMKICAgIGl0eG5fZmllbGQgR2xvYmFsTnVtQnl0ZVNsaWNlCiAgICBpbnRjXzEgLy8gMQogICAgaXR4bl9maWVsZCBFeHRyYVByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIGJhc2U2NChDb0VCUXc9PSkKICAgIGl0eG5fZmllbGQgQ2xlYXJTdGF0ZVByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIGJhc2U2NChDaUFGQUFFS0ZKQk9KaDBDQUFBR2MzUmhkSFZ6QUFod2NtOXdiM05sY2hCbWRXNWthVzVuWDJOaGRHVm5iM0o1QVUwUGNtVm5hWE4wY25sZllYQndYMmxrRVdOdmJXMXBkSFJsWlY5dFpXMWlaWEp6REhadmRHVnljMTlqYjNWdWRBOWpiMjF0YVhSMFpXVmZkbTkwWlhNTmRtOTBaV1JmYldWdFltVnljd2xoY0hCeWIzWmhiSE1LY21WcVpXTjBhVzl1Y3c1aGMzTnBaMjVsWkY5MmIzUmxjdzFzYjJOclpXUmZZVzF2ZFc1MEJXNTFiR3h6QkJVZmZIVVVjM1ZpYldsemMybHZibDkwYVcxbGMzUmhiWEFXZG05MFpWOXZjR1Z1YVc1blgzUnBiV1Z6ZEdGdGNBeGpiMjF0YVhSMFpXVmZhV1FCQUJzQUdVVlNVanBYY205dVp5QlFjbTl3YjNOaGJDQlRkR0YwZFhNRmRHbDBiR1VXWm1sdVlXeHBlbUYwYVc5dVgzUnBiV1Z6ZEdGdGNBVm1iMk4xY3d4bWRXNWthVzVuWDNSNWNHVVFjbVZ4ZFdWemRHVmtYMkZ0YjNWdWRBRldDM2huYjNaZlpHRmxiVzl1TVJoQUFHY3hOWUVERWtReE5JRVNFa1F4TnhSRU1UWVVSQ3N5QTJjbkJpSm5KeFlxWnljUkltY25GeUpuSnhJaVp5a2laeWNFSW1jbkdDSm5KeGtpWnljYUltY25EaUpuSnhNcVp5Y0hJbWNuQ1NKbkp3b2laeWNMSW1jbkRDSm5KdzhpWnljSUltY25EU0puTVJ0QkFIZUNFQVRNYVU2cUJCN0RoVDhFY1VPWlR3UnpjVElhQkNQWXQ4NEVkT1pWZmdRTm1yRFhCQmhCb05JRWMwMit6QVFoTFo4SEJJcGVUSUFFS3NHYkJRUnA3UFNpQkNRM2pUd0VtbkJuK2dUYjJEM1pOaG9BamhBQkJBRGlBTkFBdndDekFLRUFrZ0I0QUd3QVd3QktBRHNBS2dBY0FBc0FBaUpETVJrVVJERVlSQ05ETVJrVVJERVlSSWdLeENjUVRGQ3dJME14R1lFRkVrUXhHRVNJQ3FRalF6RVpGRVF4R0VTSUNlWW5FRXhRc0NORE1Sa1VSREVZUkRZYUFZZ0pIU05ETVJrVVJERVlSSWdJM0NjUVRGQ3dJME14R1JSRU1SaEVOaG9CSWxPSUNJWWpRekVaRkVReEdFU0lCeDBqUXpFWkZFUXhHRVEyR2dFMkdnSTJHZ09JQmJjbkVFeFFzQ05ETVJrVVJERVlSRFlhQVlnRlBpTkRNUmtVUkRFWVJEWWFBVFlhQW9nRkhDTkRNUmtVUkRFWVJJZ0RwU05ETVJrVVJERVlSSWdEWVNjUVRGQ3dJME14R1JSRU1SaEVOaG9CTmhvQ2lBTUxJME14R1JSRU1SaEVNUllqQ1VrNEVDTVNSRFlhQVRZYUFqWWFBellhQklnQnRTTkRNUmtVUkRFWUZFUTJHZ0dJQVpValE0b0FBaUlxTWdjaUp4SmxSQWtpSndSbFRFbFBBa1FrRWtFQU9JQVZkbTkwYVc1blgyUjFjbUYwYVc5dVgzTnRZV3hzaUFDcGpBQ01BWXNBS0JOQkFBZ2lpd0NNQVl3QWlZc0Npd0VPS0l3QmpBQ0ppd01sRWtFQUlvQVdkbTkwYVc1blgyUjFjbUYwYVc5dVgyMWxaR2wxYllnQWFZd0FqQUZDLzcyQUZYWnZkR2x1WjE5a2RYSmhkR2x2Ymw5c1lYSm5aWWdBU0l3QWpBRkMvNXlJQUo1RUlpbGxSQ1VTUkltSUFJcEVJaWxsUkNRU1JJbUtBUUdBRjNCeWIzQnZjMkZzWDJOdmJXMXBkRzFsYm5SZlluQnppQUFLS0JKRWkvOExJUVFLaVlvQkFpSW5CbVZFaS85bEtFeEFBQmlBRkFBU1JWSlNPazFwYzNOcGJtY2dRMjl1Wm1sbmpBR0xBSXNCVHdOUEE0bUtBUUVpSndabFJJdi9aVVNKZ0E5d1lYVnpaV1JmY21WbmFYTjBjbm1JLzY0b0VrUVVSSWt4QUNJclpVUVNpVEVBSnh5SS84cEpGWUVnRWtRU2lUSU5JaWNHWlVRU2lZb0NBTEdMLzdJSWkvNnlCeU95RUNLeUFiT0ppZ0VBSWljT1pVU0wvMHlJLzk0bkRpSm5pWW9CQUl2L09CZ3lDQkpFaS84NUdnQTJHZ0FTUkltS0FRQXlEVVFyaS85bkp3WXlEV2VKaWdVQUtvai9jb2ovaVVRaUtXVkVGRVNML0ZjQ0FJejhpLzBYU1l2K0YweUwvQldCZXc1RWkvd3FFMFFrRWtBQUI0c0JKUkpCQVBnalJJQVViV2x1WDNKbGNYVmxjM1JsWkY5aGJXOTFiblNJL3Vnb0VrU0FHbTFoZUY5eVpYRjFaWE4wWldSZllXMXZkVzUwWDJ4aGNtZGxpUDdHS0JKRWl3SkpUd01QUkVsUEFnNUVTWWoraW92N09BQWlLMlZFRWtTTCt6Z0hNZ29TUkl2N09BZ1NSQ2NXaS94bmdCcHRZWGhmY21WeGRXVnpkR1ZrWDJGdGIzVnVkRjl6YldGc2JJaitkeWdTUklBYmJXRjRYM0psY1hWbGMzUmxaRjloYlc5MWJuUmZiV1ZrYVhWdGlQNVVUSXdBS0JKRURrRUFLQ2NFSkdjbkdZc0JaeWNhaXdKSlRnSm5pLzhYSnhoTVo0aitCaWNPVEdjbkVUSUhaeWtrWjRtTEFvc0FEa0VBQnljRUpXZEMvODBuQklFaFowTC94U0pDL3dXS0FnQ0kvaitJL2NtTC9pSlpTVVNML3ljVUUwRUFEaWNGdkVpTC9sY0NBQ2NGVEwrSkp3VzlSQ2NGdlVTTEFBZ25CVXpUaS81WEFnQW5CVTRDdTRtS0FBRWlpUDR3UkNJcFpVUWtFMEVBSVNjVmpBQ0xBQ2dUUVFBRWl3Qk1pU0lyWlVTSS9pMG5CYnhJS1lGR1p5aE1pU2lNQUVMLzNZb0FBQ0tJL2NlSS9WRXlCeUluRVdWRUNTSW5CR1ZNU1U4Q1JDUVNRUUNxZ0Jsa2FYTmpkWE56YVc5dVgyUjFjbUYwYVc5dVgzTnRZV3hzaVAxU2pBQ0xBQ2dTUklzQkRrUW5FNGo5YzBrcUUwUW5CNGo5T1NnU1JFbEVKd21JL1M4b0VrUkpSQ2NUVHdObkp3ZFBBbWNuQ1V4bktTVm5KeGN5QjJlQURIQnliM0J2YzJGc1gyWmxaWWo5QXlnU1JDY0Z2VVVCUklBWGNISnZjRzl6WVd4ZmNIVmliR2x6YUdsdVoxOWljSE9JL040b0VrUW5ISWo5QjBrVmdTQVNSRTRDQ3lFRUNvajlQNG1MQWlVU1FRQWtnQnBrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDIxbFpHbDFiWWo4b0l3QVF2OUxnQmxrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDJ4aGNtZGxpUHg5akFCQy95aUtBZ0FuRzR2K1VFbTlSUUVVUkl2L1JJdi9GaWNVVUw4aUp3aGxSQ01JSndoTVp5SW5EV1ZFaS84SUp3MU1aeUluQ0dWRUlpY0haVVFTUVFBVklpY05aVVFpSndsbFJCSkVLWUVaWnljU01nZG5pWW9DQUlqNzNvdi9GNHYrVElqL25vbUtBUUFxUndLSSs4c3hGa0FBVURJRWpBRWpqQUNMQUlzQkRFRUFEWXNBU1lqOGtTTUlqQUJDLyt1TC95SlpqQUlpakFDTEFJc0NERUVBSW92L1Z3SUFpd0JKVGdLQktBdUJLRmhKVndBZ1RJRWdXNGovUnlNSWpBQkMvOWFKSW9qOFVrTC94WW9EQVNKSEFpcEhBb2o4RTBRaUtXVkVnUmtUUVFEK0p4V01BSXNBS0JOQkFBR0ppLzRYakFPTC94ZU1CU2NiaS8xUVNZd0J2VVVCUUFCeGdCVUFFMFZTVWpwV2IzUmxjaUJ1YjNRZ1ptOTFibVNNQUlzQUtCTkJBQUdKaXdGSnZrUkpWd0FJZ0FHQVVFOENUTDhpSndwbFJDTUlKd3BNWnlKYml3TkpUZ0lKaXdWSlRnTUpJaWNMWlVSUEFnZ25DMHhuSWljTVpVUlBBZ2duREV4bklpY1BaVVFJSnc5TVp5aU1BSW1MQWI1TVNVNENqQUpFZ1VCVEp4UWlUd0pVSnhRVFFRQWdnQmtBRjBWU1VqcFdiM1JsY2lCaGJISmxZV1I1SUhadmRHVmtqQUJDLzIrTEFsY0FDSXNEaXdVSUZxUkJBQnVBRkFBU1JWSlNPbFp2ZEdWeklHVjRZMlZsWkdWa2pBQkMvMFVvakFCQy96K0krYnBKVGdLTUFJd0VLQk5BL3ZlTEJFQUFJb0FiQUJsRlVsSTZWbTkwYVc1bklGQmxjbWx2WkNCRmVIQnBjbVZrakFCQy90QW9qQUJDL3NxS0FBQWlLa2NEaVBxVElpbGxSSUVaRWtTSStXd29Fa1JCQUE0aUp3cGxSQ0luQjJWRUVrRUJNQ05FSWljRVpVeEpUZ0tNQVVRa0VrRUE2b0FNY1hWdmNuVnRYM050WVd4c2lQb1RqQUNMQUNnU1JDSW5CMlZFQ3lFRUNvd0NJaWNFWlV4SlRnS01BVVFrRWtFQWNZQVZkMlZwWjJoMFpXUmZjWFZ2Y25WdFgzTnRZV3hzaVBuWGpBQ0xBQ2dTUkNJbkMyVkVJaWNNWlVRSUlpY1BaVVFJakFRaUp3bGxSQXNoQkFxTUF5SW5DbVZFaXdJUFFRQWJpd1NMQXc5QkFCTWlKd3RsUkNJbkRHVkVEVUVBQlNtQkhtZUpLWUVvWnlJclpVU0krZzJKaXdFbEVrRUFJSUFXZDJWcFoyaDBaV1JmY1hWdmNuVnRYMjFsWkdsMWJZajVYb3dBUXYrRWdCVjNaV2xuYUhSbFpGOXhkVzl5ZFcxZmJHRnlaMldJK1QrTUFFTC9aWXNCSlJKQkFCZUFEWEYxYjNKMWJWOXRaV1JwZFcySStTR01BRUwvQzRBTWNYVnZjblZ0WDJ4aGNtZGxpUGtMakFCQy92VWlRdjdOaWdFQU1RQ0FESGhuYjNaZlkyOTFibU5wYklqNUhVa1ZnU0FTUkJKRUlpbGxSSUVlRWtTTC8wRUFFQ21CUEdjaUp3WmxSSElJUklqNVZJa3BnUzFuaVlvQUFTS0krU3BFSWlsbFJJRXRFMEVBSFNjVmpBQ0xBQ2dUUVFBRWl3Qk1pU21CTW1jaUsyVkVpUGtpS0V5SktJd0FRdi9oaWdFQUlpcEhBNGo0NDBRaUtXVkVnVElTUUFBZElpbGxSSUU4RWtBQUV5SXBaVVNCS0JKQUFBa2lLV1ZFSlJKQkFIOGpSREVXUUFCeE1nU01CQ09NQW9zQ2l3UU1RUUFOaXdKSmlQamVJd2lNQWtMLzY0di9JbG1NQVNLTUE0c0Rpd0VNUVFCRGkvOVhBZ0NMQTRFZ0M0RWdXQ2NiVEZCSmpBQzlSUUZCQUNBaUp3aGxSQ01KSndoTVp5SW5EV1ZFaXdCSlRnSytSQ0piQ1NjTlRHZThTSXNESXdpTUEwTC90WWtpaVBoK1F2K2tJa0wvZm9vQUFTS0krRUJFSWlsbFJFRUFuU0lwWlVRa0UwRUFsQ0lwWlVTQk1oTkJBSW9pS1dWRWdUd1RRUUNBSWlsbFJJRW9FMEVBZGljVmpBQ0xBQ2dUUVFBRWl3Qk1pU0luQ0dWRVFRQTBnREFBTGtWU1VqcFVhR1Z5WlNCaGNtVWdkbTkwWlhKeklHRnpjMmxuYm1Wa0lIUnZJSFJvYVhNZ2NISnZjRzl6WVd4TWlTY0Z2RWdpS1dWRUpCSkJBQWNpSzJWRWlQZlBJaWNHWlVSeUNFUXlDbk1BUklqM3F5bUJSbWNvVElrb2pBQkMvNGlJOTRORUlpbGxSSUZHRWtTSklpdGxSQ0luQm1WRUZpSW5GbVZFU1JVV1Z3WUNURkFpSnhGbFJCWWlKeGRsUkJZaUp4SmxSQllpS1dWRUZpSW5CR1ZFRmlJbkdHVkVGa21UZ1FnT1JGY0hBU0luR1dWRUZpSW5HbVZFRmlJbkRtVkVGaUluRTJWRUlpY0haVVFXSWljSlpVUVdJaWNLWlVRV0lpY0xaVVFXSWljTVpVUVdJaWNQWlVRV1R4SlBFbENBQWdDN1VFOFFVRThQVUU4T1VFOE5VRThNVUU4TFVFOEtVRThKVUU4SVVFOEhVRThHVUU4RlVFOEVVRThEVUU4Q1VFeFFURkNKKQogICAgaXR4bl9maWVsZCBBcHByb3ZhbFByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIDB4Y2M2OTRlYWEgLy8gbWV0aG9kICJjcmVhdGUoYWRkcmVzcyl2b2lkIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBDcmVhdGVkQXBwbGljYXRpb25JRAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzgxLTc4MgogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIgc3RhdGUKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbChUcnVlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBpbnRjXzEgLy8gMQogICAgc2V0Yml0CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODQtNzg5CiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9cmVzLmNyZWF0ZWRfYXBwLmFkZHJlc3MsCiAgICAvLyAgICAgYW1vdW50PXNlbGYucHJvcG9zYWxfZmVlLnZhbHVlIC0gcGNmZy5QUk9QT1NBTF9NQlIsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODYKICAgIC8vIHJlY2VpdmVyPXJlcy5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgZHVwCiAgICBhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODcKICAgIC8vIGFtb3VudD1zZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSAtIHBjZmcuUFJPUE9TQUxfTUJSLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDExIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfZmVlIGV4aXN0cwogICAgcHVzaGludCA4NjMwMDAgLy8gODYzMDAwCiAgICAtCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg0LTc4NQogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg4CiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg0LTc4OQogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcAogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXJlcy5jcmVhdGVkX2FwcC5hZGRyZXNzLAogICAgLy8gICAgIGFtb3VudD1zZWxmLnByb3Bvc2FsX2ZlZS52YWx1ZSAtIHBjZmcuUFJPUE9TQUxfTUJSLAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5MS03OTIKICAgIC8vICMgSW5jcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzCiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzk0CiAgICAvLyByZXR1cm4gcmVzLmNyZWF0ZWRfYXBwLmlkCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudm90ZV9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMsIHhnb3ZfYWRkcmVzczogYnl0ZXMsIGFwcHJvdmFsX3ZvdGVzOiBieXRlcywgcmVqZWN0aW9uX3ZvdGVzOiBieXRlcykgLT4gdm9pZDoKdm90ZV9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc5Ni04MDMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgdm90ZV9wcm9wb3NhbCgKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHByb3Bvc2FsX2lkOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICB4Z292X2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICBhcHByb3ZhbF92b3RlczogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgcmVqZWN0aW9uX3ZvdGVzOiBhcmM0LlVJbnQ2NCwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODIwCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyMi04MjMKICAgIC8vICMgdmVyaWZ5IHByb3Bvc2FsIGlkIGlzIGdlbnVpbmUgcHJvcG9zYWwKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTQKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI3CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgZnJhbWVfZGlnIC00CiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MjUtODI4CiAgICAvLyAjIFZlcmlmeSB0aGUgcHJvcG9zYWwgaXMgaW4gdGhlIHZvdGluZyBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI3CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgYnl0ZWMgNDYgLy8gMHg3Mzc0NjE3NDc1NzMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNS04MjgKICAgIC8vICMgVmVyaWZ5IHRoZSBwcm9wb3NhbCBpcyBpbiB0aGUgdm90aW5nIHN0YXRlCiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI5CiAgICAvLyBhc3NlcnQgc3RhdHVzID09IFVJbnQ2NChwZW5tLlNUQVRVU19WT1RJTkcpLCBlcnIuUFJPUE9TQUxfSVNfTk9UX1ZPVElORwogICAgcHVzaGludCAyNSAvLyAyNQogICAgPT0KICAgIGFzc2VydCAvLyBQcm9wb3NhbCBpcyBub3QgaW4gdm90aW5nIHBoYXNlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzEtODMyCiAgICAvLyAjIG1ha2Ugc3VyZSB0aGV5J3JlIHZvdGluZyBvbiBiZWhhbGYgb2YgYW4geEdvdgogICAgLy8gZXhpc3RzID0geGdvdl9hZGRyZXNzLm5hdGl2ZSBpbiBzZWxmLnhnb3ZfYm94CiAgICBieXRlYyA1IC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMzCiAgICAvLyBhc3NlcnQgZXhpc3RzLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzQKICAgIC8vIHhnb3ZfYm94ID0gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5jb3B5KCkKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzYKICAgIC8vIHhnb3ZfYm94LnZvdGVkX3Byb3Bvc2Fscy5uYXRpdmUgKyBVSW50NjQoMSkKICAgIGR1cAogICAgcHVzaGludCAzMiAvLyAzMgogICAgZXh0cmFjdF91aW50NjQKICAgIGludGNfMSAvLyAxCiAgICArCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzUtODM3CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLnZvdGVkX3Byb3Bvc2FscyA9IGFyYzQuVUludDY0KAogICAgLy8gICAgIHhnb3ZfYm94LnZvdGVkX3Byb3Bvc2Fscy5uYXRpdmUgKyBVSW50NjQoMSkKICAgIC8vICkKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzNQogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS52b3RlZF9wcm9wb3NhbHMgPSBhcmM0LlVJbnQ2NCgKICAgIGRpZyAyCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzNS04MzcKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0udm90ZWRfcHJvcG9zYWxzID0gYXJjNC5VSW50NjQoCiAgICAvLyAgICAgeGdvdl9ib3gudm90ZWRfcHJvcG9zYWxzLm5hdGl2ZSArIFVJbnQ2NCgxKQogICAgLy8gKQogICAgc3dhcAogICAgcmVwbGFjZTIgMzIKICAgIGRpZyAyCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzkKICAgIC8vIEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICBnbG9iYWwgTGF0ZXN0VGltZXN0YW1wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzgtODQwCiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLmxhc3Rfdm90ZV90aW1lc3RhbXAgPSBhcmM0LlVJbnQ2NCgKICAgIC8vICAgICBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgLy8gKQogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM4CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLmxhc3Rfdm90ZV90aW1lc3RhbXAgPSBhcmM0LlVJbnQ2NCgKICAgIGRpZyAyCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzOC04NDAKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0ubGFzdF92b3RlX3RpbWVzdGFtcCA9IGFyYzQuVUludDY0KAogICAgLy8gICAgIEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICAvLyApCiAgICBzd2FwCiAgICByZXBsYWNlMiA0MAogICAgdW5jb3ZlciAyCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NDItODQzCiAgICAvLyAjIFZlcmlmeSB0aGUgY2FsbGVyIGlzIHVzaW5nIHRoZWlyIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSB4Z292X2JveC52b3RpbmdfYWRkcmVzcy5uYXRpdmUsIGVyci5NVVNUX0JFX1ZPVElOR19BRERSRVNTCiAgICB0eG4gU2VuZGVyCiAgICBzd2FwCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICA9PQogICAgYXNzZXJ0IC8vIE11c3QgYmUgdm90aW5nIGFkZHJlc3MKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg0NS04NTIKICAgIC8vICMgQ2FsbCB0aGUgUHJvcG9zYWwgQXBwIHRvIHJlZ2lzdGVyIHRoZSB2b3RlCiAgICAvLyBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLnZvdGUsCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzLAogICAgLy8gICAgIGFwcHJvdmFsX3ZvdGVzLAogICAgLy8gICAgIHJlamVjdGlvbl92b3RlcywKICAgIC8vICAgICBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlLAogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHgxODQxYTBkMiAvLyBtZXRob2QgInZvdGUoYWRkcmVzcyx1aW50NjQsdWludDY0KXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTMKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBmcmFtZV9kaWcgLTEKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgNyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucGF5X2dyYW50X3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcykgLT4gdm9pZDoKcGF5X2dyYW50X3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODU0LTg1NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBwYXlfZ3JhbnRfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzEtODcyCiAgICAvLyAjIFZlcmlmeSB0aGUgY2FsbGVyIGlzIHRoZSB4R292IFBheW9yCiAgICAvLyBhc3NlcnQgYXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpID09IHNlbGYueGdvdl9wYXlvci52YWx1ZSwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEzIC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3BheW9yIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3NC04NzUKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODc5CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzctODgwCiAgICAvLyAjIFJlYWQgcHJvcG9zYWwgc3RhdGUgZGlyZWN0bHkgZnJvbSB0aGUgUHJvcG9zYWwgQXBwJ3MgZ2xvYmFsIHN0YXRlCiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgLy8gKQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NzkKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICBieXRlYyA0NiAvLyAweDczNzQ2MTc0NzU3MwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODc3LTg4MAogICAgLy8gIyBSZWFkIHByb3Bvc2FsIHN0YXRlIGRpcmVjdGx5IGZyb20gdGhlIFByb3Bvc2FsIEFwcCdzIGdsb2JhbCBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIHN3YXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4MS04ODMKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODgyCiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICBieXRlYyA0NCAvLyAweDcwNzI2ZjcwNmY3MzY1NzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4MS04ODMKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4NAogICAgLy8gcHJvcG9zZXIgPSBhcmM0LkFkZHJlc3MocHJvcG9zZXJfYnl0ZXMpCiAgICBkdXAKICAgIGxlbgogICAgcHVzaGludCAzMiAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBBZGRyZXNzIGxlbmd0aCBpcyAzMiBieXRlcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODg1LTg4NwogICAgLy8gcmVxdWVzdGVkX2Ftb3VudCwgcmVxdWVzdGVkX2Ftb3VudF9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1JFUVVFU1RFRF9BTU9VTlQKICAgIC8vICkKICAgIGRpZyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODYKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgcHVzaGJ5dGVzIDB4NzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg4NS04ODcKICAgIC8vIHJlcXVlc3RlZF9hbW91bnQsIHJlcXVlc3RlZF9hbW91bnRfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgcG9wCiAgICBjb3ZlciAyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODgtODg5CiAgICAvLyAjIFZlcmlmeSB0aGUgcHJvcG9zYWwgaXMgaW4gdGhlIHJldmlld2VkIHN0YXRlCiAgICAvLyBhc3NlcnQgc3RhdHVzID09IFVJbnQ2NChwZW5tLlNUQVRVU19SRVZJRVdFRCksIGVyci5QUk9QT1NBTF9XQVNfTk9UX1JFVklFV0VECiAgICB1bmNvdmVyIDMKICAgIHB1c2hpbnQgNDUgLy8gNDUKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgd2FzIG5vdCByZXZpZXdlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODkxCiAgICAvLyBhc3NlcnQgcHJvcG9zZXIubmF0aXZlIGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuV1JPTkdfUFJPUE9TRVIKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgZGlnIDEKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBhc3NlcnQgLy8gV3JvbmcgcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5MwogICAgLy8gYXNzZXJ0IHNlbGYudmFsaWRfa3ljKHByb3Bvc2VyLm5hdGl2ZSksIGVyci5JTlZBTElEX0tZQwogICAgZHVwCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTcKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgPj0gcmVxdWVzdGVkX2Ftb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBkaWcgMwogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5NS04OTgKICAgIC8vICMgVmVyaWZ5IHN1ZmZpY2llbnQgZnVuZHMgYXJlIGF2YWlsYWJsZQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlID49IHJlcXVlc3RlZF9hbW91bnQKICAgIC8vICksIGVyci5JTlNVRkZJQ0lFTlRfVFJFQVNVUllfRlVORFMKICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgdHJlYXN1cnkgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE4OC0xOTMKICAgIC8vICMgVHJhbnNmZXIgdGhlIGZ1bmRzIHRvIHRoZSByZWNlaXZlcgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgZGlnIDIKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxODgtMTg5CiAgICAvLyAjIFRyYW5zZmVyIHRoZSBmdW5kcyB0byB0aGUgcmVjZWl2ZXIKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIGludGNfMSAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5MgogICAgLy8gZmVlPTAsCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE4OC0xOTMKICAgIC8vICMgVHJhbnNmZXIgdGhlIGZ1bmRzIHRvIHRoZSByZWNlaXZlcgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE5NS0xOTYKICAgIC8vICMgVXBkYXRlIHRoZSBvdXRzdGFuZGluZyBmdW5kcwogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSAtPSBhbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgdW5jb3ZlciAyCiAgICAtCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMgogICAgLy8gYXJjNC5hYmlfY2FsbChwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbC5mdW5kLCBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlKQogICAgaXR4bl9iZWdpbgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHg4YTVlNGM4MCAvLyBtZXRob2QgImZ1bmQoKXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgNyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVjb21taXNzaW9uX3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcykgLT4gdm9pZDoKZGVjb21taXNzaW9uX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTA0LTkwNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBkZWNvbW1pc3Npb25fcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjEKICAgIC8vIGFzc2VydCBhcmM0LkFkZHJlc3MoVHhuLnNlbmRlcikgPT0gc2VsZi54Z292X2RhZW1vbi52YWx1ZSwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE2IC8vIDB4Nzg2NzZmNzY1ZjY0NjE2NTZkNmY2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfZGFlbW9uIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyMy05MjQKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTI2LTkyOAogICAgLy8gZXJyb3IsIHR4ID0gYXJjNC5hYmlfY2FsbCgKICAgIC8vICAgICBwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbC5kZWNvbW1pc3Npb24sIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyNwogICAgLy8gcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwuZGVjb21taXNzaW9uLCBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGR1cAogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjYtOTI4CiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLmRlY29tbWlzc2lvbiwgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZQogICAgLy8gKQogICAgcHVzaGJ5dGVzIDB4NjllY2Y0YTIgLy8gbWV0aG9kICJkZWNvbW1pc3Npb24oKXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBkdXBuIDIKICAgIGV4dHJhY3QgMCA0CiAgICBieXRlYyA3IC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gbG9nIHZhbHVlIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGFuIEFCSSByZXR1cm4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMAogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgZXh0cmFjdCA2IDAKICAgIGR1cAogICAgbGVuCiAgICBkdXAKICAgIGludGNfMiAvLyA0CiAgICA8CiAgICBieiBkZWNvbW1pc3Npb25fcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzCiAgICBpbnRjXzAgLy8gMAoKZGVjb21taXNzaW9uX3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMAogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgYnogZGVjb21taXNzaW9uX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAMTAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMQogICAgLy8gZXJyb3Jfd2l0aG91dF9wcmVmaXggPSBTdHJpbmcuZnJvbV9ieXRlcyhlcnJvci5uYXRpdmUuYnl0ZXNbNDpdKQogICAgaW50Y18yIC8vIDQKICAgIGZyYW1lX2RpZyAzCiAgICBkdXAKICAgIGNvdmVyIDIKICAgID49CiAgICBpbnRjXzIgLy8gNAogICAgZGlnIDIKICAgIHVuY292ZXIgMgogICAgc2VsZWN0CiAgICBmcmFtZV9kaWcgMgogICAgc3dhcAogICAgdW5jb3ZlciAyCiAgICBzdWJzdHJpbmczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzMKICAgIC8vIGNhc2UgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUzoKICAgIGJ5dGVjIDQ3IC8vICJXcm9uZyBQcm9wb3NhbCBTdGF0dXMiCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzUKICAgIC8vIGNhc2UgZXJyLk1JU1NJTkdfQ09ORklHOgogICAgcHVzaGJ5dGVzcyAiTWlzc2luZyBDb25maWciICJUaGVyZSBhcmUgdm90ZXJzIGFzc2lnbmVkIHRvIHRoaXMgcHJvcG9zYWwiIC8vICJNaXNzaW5nIENvbmZpZyIsICJUaGVyZSBhcmUgdm90ZXJzIGFzc2lnbmVkIHRvIHRoaXMgcHJvcG9zYWwiCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzItOTQwCiAgICAvLyBtYXRjaCBlcnJvcl93aXRob3V0X3ByZWZpeDoKICAgIC8vICAgICBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuTUlTU0lOR19DT05GSUc6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLk1JU1NJTkdfQ09ORklHICAjIG5vcWEKICAgIC8vICAgICBjYXNlIGVyci5WT1RFUlNfQVNTSUdORUQ6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVSU19BU1NJR05FRCAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBfOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsICJVbmtub3duIGVycm9yIiAgIyBub3FhCiAgICB1bmNvdmVyIDMKICAgIG1hdGNoIGRlY29tbWlzc2lvbl9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDYgZGVjb21taXNzaW9uX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzFANyBkZWNvbW1pc3Npb25fcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMkA4CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDAKICAgIC8vIGFzc2VydCBGYWxzZSwgIlVua25vd24gZXJyb3IiICAjIG5vcWEKICAgIGVyciAvLyBVbmtub3duIGVycm9yCgpkZWNvbW1pc3Npb25fcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMkA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTM4CiAgICAvLyBhc3NlcnQgRmFsc2UsIGVyci5WT1RFUlNfQVNTSUdORUQgICMgbm9xYQogICAgZXJyIC8vIFRoZXJlIGFyZSB2b3RlcnMgYXNzaWduZWQgdG8gdGhpcyBwcm9wb3NhbAoKZGVjb21taXNzaW9uX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzFANzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzNgogICAgLy8gYXNzZXJ0IEZhbHNlLCBlcnIuTUlTU0lOR19DT05GSUcgICMgbm9xYQogICAgZXJyIC8vIE1pc3NpbmcgQ29uZmlnCgpkZWNvbW1pc3Npb25fcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMEA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTM0CiAgICAvLyBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgZXJyIC8vIFdyb25nIFByb3Bvc2FsIFN0YXR1cwoKZGVjb21taXNzaW9uX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDItOTQzCiAgICAvLyAjIERlY3JlbWVudCBwZW5kaW5nIHByb3Bvc2FscyBjb3VudAogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0NS05NDcKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGZyYW1lX2RpZyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NDYKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIGJ5dGVjIDQ0IC8vIDB4NzA3MjZmNzA2ZjczNjU3MgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQ1LTk0NwogICAgLy8gcHJvcG9zZXJfYnl0ZXMsIHByb3Bvc2VyX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfYnl0ZXMoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQ4CiAgICAvLyBwcm9wb3NlciA9IGFyYzQuQWRkcmVzcyhwcm9wb3Nlcl9ieXRlcykKICAgIGR1cAogICAgbGVuCiAgICBwdXNoaW50IDMyIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIEFkZHJlc3MgbGVuZ3RoIGlzIDMyIGJ5dGVzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NTAtOTUxCiAgICAvLyAjIFVwZGF0ZSBwcm9wb3NlcidzIGFjdGl2ZSBwcm9wb3NhbCBzdGF0dXMKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W3Byb3Bvc2VyLm5hdGl2ZV0uYWN0aXZlX3Byb3Bvc2FsID0gYXJjNC5Cb29sKAogICAgYnl0ZWNfMyAvLyAweDcwCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGR1cAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTUwLTk1MwogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbCgKICAgIC8vICAgICBGYWxzZSAgIyBub3FhOiBGQlQwMDMKICAgIC8vICkKICAgIGludGNfMCAvLyAwCiAgICBkdXAKICAgIHNldGJpdAogICAgYm94X3B1dAogICAgcmV0c3ViCgpkZWNvbW1pc3Npb25fcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTMwCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMQogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDQ4IC8vICJFUlI6IgogICAgPT0KICAgIGIgZGVjb21taXNzaW9uX3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kcm9wX3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcykgLT4gdm9pZDoKZHJvcF9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1NS05NTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgZHJvcF9wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3MAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzItOTczCiAgICAvLyAjIFZlcmlmeSBwcm9wb3NhbF9pZCBpcyBhIGdlbnVpbmUgcHJvcG9zYWwgY3JlYXRlZCBieSB0aGlzIHJlZ2lzdHJ5CiAgICAvLyBhc3NlcnQgc2VsZi5faXNfcHJvcG9zYWwocHJvcG9zYWxfaWQpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIF9pc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3NgogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzUtOTc3CiAgICAvLyBwcm9wb3Nlcl9ieXRlcywgcHJvcG9zZXJfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF9ieXRlcygKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICAvLyApCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3NgogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgYnl0ZWMgNDQgLy8gMHg3MDcyNmY3MDZmNzM2NTcyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzUtOTc3CiAgICAvLyBwcm9wb3Nlcl9ieXRlcywgcHJvcG9zZXJfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF9ieXRlcygKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgcG9wCiAgICBkdXAKICAgIGNvdmVyIDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3OAogICAgLy8gcHJvcG9zZXIgPSBBY2NvdW50KHByb3Bvc2VyX2J5dGVzKQogICAgZHVwCiAgICBsZW4KICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4MAogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgPT0gcHJvcG9zZXIsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODItOTg0CiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLmRyb3AsIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4NzM3MTMyMWEgLy8gbWV0aG9kICJkcm9wKClzdHJpbmciCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwbiAyCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgNyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODYKICAgIC8vIGlmIGVycm9yLm5hdGl2ZS5zdGFydHN3aXRoKGVyci5BUkNfNjVfUFJFRklYKToKICAgIGV4dHJhY3QgNiAwCiAgICBkdXAKICAgIGxlbgogICAgZHVwCiAgICBpbnRjXzIgLy8gNAogICAgPAogICAgYnogZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDMKICAgIGludGNfMCAvLyAwCgpkcm9wX3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4NgogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgYnogZHJvcF9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDgKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4NwogICAgLy8gZXJyb3Jfd2l0aG91dF9wcmVmaXggPSBTdHJpbmcuZnJvbV9ieXRlcyhlcnJvci5uYXRpdmUuYnl0ZXNbNDpdKQogICAgaW50Y18yIC8vIDQKICAgIGZyYW1lX2RpZyAzCiAgICBkdXAKICAgIGNvdmVyIDIKICAgID49CiAgICBpbnRjXzIgLy8gNAogICAgZGlnIDIKICAgIHVuY292ZXIgMgogICAgc2VsZWN0CiAgICBmcmFtZV9kaWcgMgogICAgc3dhcAogICAgdW5jb3ZlciAyCiAgICBzdWJzdHJpbmczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODkKICAgIC8vIGNhc2UgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUzoKICAgIGJ5dGVjIDQ3IC8vICJXcm9uZyBQcm9wb3NhbCBTdGF0dXMiCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODgtOTkyCiAgICAvLyBtYXRjaCBlcnJvcl93aXRob3V0X3ByZWZpeDoKICAgIC8vICAgICBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBfOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsICJVbmtub3duIGVycm9yIiAgIyBub3FhCiAgICBzd2FwCiAgICBtYXRjaCBkcm9wX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTkyCiAgICAvLyBhc3NlcnQgRmFsc2UsICJVbmtub3duIGVycm9yIiAgIyBub3FhCiAgICBlcnIgLy8gVW5rbm93biBlcnJvcgoKZHJvcF9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTAKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICBlcnIgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzCgpkcm9wX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk5NC05OTUKICAgIC8vICMgRGVjcmVtZW50IHBlbmRpbmcgcHJvcG9zYWxzIGNvdW50CiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlIC09IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGJ5dGVjIDQgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTk2LTk5NwogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlcl0uYWN0aXZlX3Byb3Bvc2FsID0gYXJjNC5Cb29sKEZhbHNlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzMgLy8gMHg3MAogICAgZnJhbWVfZGlnIDAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzAgLy8gMAogICAgZHVwCiAgICBzZXRiaXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODYKICAgIC8vIGlmIGVycm9yLm5hdGl2ZS5zdGFydHN3aXRoKGVyci5BUkNfNjVfUFJFRklYKToKICAgIGZyYW1lX2RpZyAxCiAgICBleHRyYWN0IDYgNAogICAgYnl0ZWMgNDggLy8gIkVSUjoiCiAgICA9PQogICAgYiBkcm9wX3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kZXBvc2l0X2Z1bmRzKHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKZGVwb3NpdF9mdW5kczoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk5OS0xMDAwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRlcG9zaXRfZnVuZHMoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMTIKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDExLTEwMTMKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxNAogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSArPSBwYXltZW50LmFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgKwogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkud2l0aGRyYXdfZnVuZHMoYW1vdW50OiB1aW50NjQpIC0+IHZvaWQ6CndpdGhkcmF3X2Z1bmRzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxNi0xMDE3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHdpdGhkcmF3X2Z1bmRzKHNlbGYsIGFtb3VudDogVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDMwCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMzEKICAgIC8vIGFzc2VydCBhbW91bnQgPD0gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSwgZXJyLklOU1VGRklDSUVOVF9GVU5EUwogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgID49CiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IGZ1bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDMyCiAgICAvLyBhc3NlcnQgVHhuLmZlZSA+PSAoR2xvYmFsLm1pbl90eG5fZmVlICogMiksIGVyci5JTlNVRkZJQ0lFTlRfRkVFCiAgICB0eG4gRmVlCiAgICBnbG9iYWwgTWluVHhuRmVlCiAgICBwdXNoaW50IDIgLy8gMgogICAgKgogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDMzCiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlIC09IGFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBmcmFtZV9kaWcgLTEKICAgIC0KICAgIGJ5dGVjXzIgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAzNS0xMDM5CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDM2CiAgICAvLyByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfbWFuYWdlciBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIGl0eG5fZmllbGQgUmVjZWl2ZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMzUKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIGludGNfMSAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMzgKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDM1LTEwMzkKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICAvLyAgICAgYW1vdW50PWFtb3VudCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkud2l0aGRyYXdfYmFsYW5jZSgpIC0+IHZvaWQ6CndpdGhkcmF3X2JhbGFuY2U6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDUzCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNTQKICAgIC8vIGFzc2VydCBUeG4uZmVlID49IChHbG9iYWwubWluX3R4bl9mZWUgKiAyKSwgZXJyLklOU1VGRklDSUVOVF9GRUUKICAgIHR4biBGZWUKICAgIGdsb2JhbCBNaW5UeG5GZWUKICAgIHB1c2hpbnQgMiAvLyAyCiAgICAqCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNTgKICAgIC8vIEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MuYmFsYW5jZQogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgIGFjY3RfcGFyYW1zX2dldCBBY2N0QmFsYW5jZQogICAgYXNzZXJ0IC8vIGFjY291bnQgZnVuZGVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDU5CiAgICAvLyAtIEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MubWluX2JhbGFuY2UKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBhY2N0X3BhcmFtc19nZXQgQWNjdE1pbkJhbGFuY2UKICAgIGFzc2VydCAvLyBhY2NvdW50IGZ1bmRlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA1OC0xMDU5CiAgICAvLyBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLmJhbGFuY2UKICAgIC8vIC0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5taW5fYmFsYW5jZQogICAgLQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2MAogICAgLy8gLSBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMiAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNTgtMTA2MAogICAgLy8gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5iYWxhbmNlCiAgICAvLyAtIEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MubWluX2JhbGFuY2UKICAgIC8vIC0gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZQogICAgLQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2MwogICAgLy8gYXNzZXJ0IGFtb3VudCA+IDAsIGVyci5JTlNVRkZJQ0lFTlRfRlVORFMKICAgIGR1cAogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmdW5kcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2NC0xMDY4CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDY1CiAgICAvLyByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNiAvLyAweDc4Njc2Zjc2NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfbWFuYWdlciBleGlzdHMKICAgIGl0eG5fZmllbGQgUmVjZWl2ZXIKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDY0CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDY3CiAgICAvLyBmZWU9MCwKICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2NC0xMDY4CiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICAvLyAgICAgcmVjZWl2ZXI9c2VsZi54Z292X21hbmFnZXIudmFsdWUubmF0aXZlLAogICAgLy8gICAgIGFtb3VudD1hbW91bnQsCiAgICAvLyAgICAgZmVlPTAsCiAgICAvLyApLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmdldF9zdGF0ZSgpIC0+IGJ5dGVzOgpnZXRfc3RhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDc3CiAgICAvLyBwYXVzZWRfcmVnaXN0cnk9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUpKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgYnl0ZWMgOCAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNzgKICAgIC8vIHBhdXNlZF9wcm9wb3NhbHM9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcHJvcG9zYWxzLnZhbHVlKSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9wcm9wb3NhbHMgZXhpc3RzCiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA3OQogICAgLy8geGdvdl9tYW5hZ2VyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDYgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDgwCiAgICAvLyB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMyAvLyAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9wYXlvciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODEKICAgIC8vIHhnb3ZfY291bmNpbD1zZWxmLnhnb3ZfY291bmNpbC52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyMCAvLyAweDc4Njc2Zjc2NWY2MzZmNzU2ZTYzNjk2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfY291bmNpbCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODIKICAgIC8vIHhnb3Zfc3Vic2NyaWJlcj1zZWxmLnhnb3Zfc3Vic2NyaWJlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMiAvLyAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3Zfc3Vic2NyaWJlciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODMKICAgIC8vIGt5Y19wcm92aWRlcj1zZWxmLmt5Y19wcm92aWRlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNCAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmt5Y19wcm92aWRlciBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODQKICAgIC8vIGNvbW1pdHRlZV9tYW5hZ2VyPXNlbGYuY29tbWl0dGVlX21hbmFnZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTUgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDg1CiAgICAvLyB4Z292X2RhZW1vbj1zZWxmLnhnb3ZfZGFlbW9uLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE2IC8vIDB4Nzg2NzZmNzY1ZjY0NjE2NTZkNmY2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfZGFlbW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4NgogICAgLy8geGdvdl9mZWU9YXJjNC5VSW50NjQoc2VsZi54Z292X2ZlZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTcgLy8gMHg3ODY3NmY3NjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9mZWUgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDg3CiAgICAvLyBwcm9wb3Nlcl9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE4IC8vIDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfZmVlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4OAogICAgLy8gcHJvcG9zYWxfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMSAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODkKICAgIC8vIHByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIxIC8vIDB4NzA3MjZmNzA2ZjczNjE2YzVmNzA3NTYyNmM2OTczNjg2OTZlNjc1ZjYyNzA3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5MAogICAgLy8gcHJvcG9zYWxfY29tbWl0bWVudF9icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjIgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDkxCiAgICAvLyBtaW5fcmVxdWVzdGVkX2Ftb3VudD1hcmM0LlVJbnQ2NChzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50LnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyMyAvLyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOTMKICAgIC8vIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI0IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5NAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI1IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5NQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjYgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDkyLTEwOTYKICAgIC8vIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDk4CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI3IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5OQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjggLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAwCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI5IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwMQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzAgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDk3LTExMDIKICAgIC8vIGRpc2N1c3Npb25fZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgdW5jb3ZlciAzCiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwNAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMxIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwNQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDYKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzMyAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDcKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzQgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAzLTExMDgKICAgIC8vIHZvdGluZ19kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIHVuY292ZXIgMwogICAgdW5jb3ZlciAzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMTAKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNSAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMTEKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzYgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTEyCiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzcgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5xdW9ydW1fbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTA5LTExMTMKICAgIC8vIHF1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICksCiAgICBjb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExNQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDM4IC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExNgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzOSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMTcKICAgIC8vIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MCAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMTQtMTExOAogICAgLy8gd2VpZ2h0ZWRfcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTE5CiAgICAvLyBvdXRzdGFuZGluZ19mdW5kcz1hcmM0LlVJbnQ2NChzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18yIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEyMAogICAgLy8gcGVuZGluZ19wcm9wb3NhbHM9YXJjNC5VSW50NjQoc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNCAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMjEKICAgIC8vIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDUgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfaWQgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTIyCiAgICAvLyBjb21taXR0ZWVfbWVtYmVycz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MSAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2NTZkNjI2NTcyNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfbWVtYmVycyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMjMKICAgIC8vIGNvbW1pdHRlZV92b3Rlcz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV92b3Rlcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDIgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfdm90ZXMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDc2LTExMjQKICAgIC8vIHJldHVybiB0eXAuVHlwZWRHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBwYXVzZWRfcmVnaXN0cnk9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUpKSwKICAgIC8vICAgICBwYXVzZWRfcHJvcG9zYWxzPWFyYzQuQm9vbChib29sKHNlbGYucGF1c2VkX3Byb3Bvc2Fscy52YWx1ZSkpLAogICAgLy8gICAgIHhnb3ZfbWFuYWdlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIC8vICAgICB4Z292X2NvdW5jaWw9c2VsZi54Z292X2NvdW5jaWwudmFsdWUsCiAgICAvLyAgICAgeGdvdl9zdWJzY3JpYmVyPXNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlLAogICAgLy8gICAgIGt5Y19wcm92aWRlcj1zZWxmLmt5Y19wcm92aWRlci52YWx1ZSwKICAgIC8vICAgICBjb21taXR0ZWVfbWFuYWdlcj1zZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlLAogICAgLy8gICAgIHhnb3ZfZGFlbW9uPXNlbGYueGdvdl9kYWVtb24udmFsdWUsCiAgICAvLyAgICAgeGdvdl9mZWU9YXJjNC5VSW50NjQoc2VsZi54Z292X2ZlZS52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIC8vICAgICBwcm9wb3NhbF9mZWU9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9mZWUudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX3B1Ymxpc2hpbmdfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfcHVibGlzaGluZ19icHMudmFsdWUpLAogICAgLy8gICAgIHByb3Bvc2FsX2NvbW1pdG1lbnRfYnBzPWFyYzQuVUludDY0KHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUpLAogICAgLy8gICAgIG1pbl9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuVUludDY0KHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUpLAogICAgLy8gICAgIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICksCiAgICAvLyAgICAgZGlzY3Vzc2lvbl9kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICB2b3RpbmdfZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICBxdW9ydW09YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICB3ZWlnaHRlZF9xdW9ydW09YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICBvdXRzdGFuZGluZ19mdW5kcz1hcmM0LlVJbnQ2NChzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlKSwKICAgIC8vICAgICBwZW5kaW5nX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NChzZWxmLnBlbmRpbmdfcHJvcG9zYWxzLnZhbHVlKSwKICAgIC8vICAgICBjb21taXR0ZWVfaWQ9c2VsZi5jb21taXR0ZWVfaWQudmFsdWUuY29weSgpLAogICAgLy8gICAgIGNvbW1pdHRlZV9tZW1iZXJzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX21lbWJlcnMudmFsdWUpLAogICAgLy8gICAgIGNvbW1pdHRlZV92b3Rlcz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV92b3Rlcy52YWx1ZSksCiAgICAvLyApCiAgICB1bmNvdmVyIDIzCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICB1bmNvdmVyIDI0CiAgICBpbnRjXzEgLy8gMQogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIHVuY292ZXIgMjMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyMgogICAgY29uY2F0CiAgICB1bmNvdmVyIDIxCiAgICBjb25jYXQKICAgIHVuY292ZXIgMjAKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxOQogICAgY29uY2F0CiAgICB1bmNvdmVyIDE4CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTcKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNgogICAgY29uY2F0CiAgICB1bmNvdmVyIDE1CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTQKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDEyCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTEKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMAogICAgY29uY2F0CiAgICB1bmNvdmVyIDkKICAgIGNvbmNhdAogICAgdW5jb3ZlciA4CiAgICBjb25jYXQKICAgIHVuY292ZXIgNwogICAgY29uY2F0CiAgICB1bmNvdmVyIDYKICAgIGNvbmNhdAogICAgdW5jb3ZlciA1CiAgICBjb25jYXQKICAgIHVuY292ZXIgNAogICAgY29uY2F0CiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmlzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcykgLT4gdm9pZDoKaXNfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI2LTExMjcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgaXNfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI4CiAgICAvLyBhc3NlcnQgc2VsZi5faXNfcHJvcG9zYWwocHJvcG9zYWxfaWQpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIF9pc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIHJldHN1Ygo=", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
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
     * Constructs a no op call for the decommission_proposal(uint64)void ABI method
     *
     * Decommissions a Proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static decommissionProposal(params) {
        return {
            ...params,
            method: 'decommission_proposal(uint64)void',
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
         * Makes a call to the XGovRegistry smart contract using the `decommission_proposal(uint64)void` ABI method.
         *
         * Decommissions a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        decommissionProposal: (params) => {
            return this.appClient.params.call(XGovRegistryParamsFactory.decommissionProposal(params));
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
         * Makes a call to the XGovRegistry smart contract using the `decommission_proposal(uint64)void` ABI method.
         *
         * Decommissions a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        decommissionProposal: (params) => {
            return this.appClient.createTransaction.call(XGovRegistryParamsFactory.decommissionProposal(params));
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
         * Makes a call to the XGovRegistry smart contract using the `decommission_proposal(uint64)void` ABI method.
         *
         * Decommissions a Proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        decommissionProposal: async (params) => {
            const result = await this.appClient.send.call(XGovRegistryParamsFactory.decommissionProposal(params));
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
             * Add a decommission_proposal(uint64)void method call against the XGovRegistry contract
             */
            decommissionProposal(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.decommissionProposal(params)));
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
