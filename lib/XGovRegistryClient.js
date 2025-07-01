import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "XGovRegistry", "structs": { "XGovRegistryConfig": [{ "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "openProposalFee", "type": "uint64" }, { "name": "daemonOpsFundingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }], "TypedGlobalState": [{ "name": "pausedRegistry", "type": "bool" }, { "name": "pausedProposals", "type": "bool" }, { "name": "xgovManager", "type": "address" }, { "name": "xgovPayor", "type": "address" }, { "name": "xgovCouncil", "type": "address" }, { "name": "xgovSubscriber", "type": "address" }, { "name": "kycProvider", "type": "address" }, { "name": "committeeManager", "type": "address" }, { "name": "xgovDaemon", "type": "address" }, { "name": "xgovFee", "type": "uint64" }, { "name": "proposerFee", "type": "uint64" }, { "name": "openProposalFee", "type": "uint64" }, { "name": "daemonOpsFundingBps", "type": "uint64" }, { "name": "proposalCommitmentBps", "type": "uint64" }, { "name": "minRequestedAmount", "type": "uint64" }, { "name": "maxRequestedAmount", "type": "uint64[3]" }, { "name": "discussionDuration", "type": "uint64[4]" }, { "name": "votingDuration", "type": "uint64[4]" }, { "name": "quorum", "type": "uint64[3]" }, { "name": "weightedQuorum", "type": "uint64[3]" }, { "name": "outstandingFunds", "type": "uint64" }, { "name": "pendingProposals", "type": "uint64" }, { "name": "committeeId", "type": "byte[32]" }, { "name": "committeeMembers", "type": "uint64" }, { "name": "committeeVotes", "type": "uint64" }] }, "methods": [{ "name": "create", "desc": "Create the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "pause_registry", "desc": "Pauses the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pause_proposals", "desc": "Pauses the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_registry", "desc": "Resumes the xGov Registry non-administrative methods.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "resume_proposals", "desc": "Resumes the creation of new Proposals.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_manager", "desc": "Sets the xGov Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_payor", "desc": "Sets the xGov Payor.", "args": [{ "name": "payor", "type": "address", "desc": "Address of the new xGov Payor" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_council", "desc": "Sets the xGov Council.", "args": [{ "name": "council", "type": "address", "desc": "Address of the new xGov Council" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_subscriber", "desc": "Sets the xGov Subscriber.", "args": [{ "name": "subscriber", "type": "address", "desc": "Address of the new xGov Subscriber" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_kyc_provider", "desc": "Sets the KYC provider.", "args": [{ "name": "provider", "type": "address", "desc": "Address of the new KYC Provider" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_committee_manager", "desc": "Sets the Committee Manager.", "args": [{ "name": "manager", "type": "address", "desc": "Address of the new xGov Manager" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_xgov_daemon", "desc": "Sets the xGov Daemon.", "args": [{ "name": "xgov_daemon", "type": "address", "desc": "Address of the new xGov Daemon" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "config_xgov_registry", "desc": "Sets the configuration of the xGov Registry.", "args": [{ "name": "config", "type": "(uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3])", "desc": "Configuration class containing the field data", "struct": "XGovRegistryConfig" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "update_xgov_registry", "desc": "Updates the xGov Registry contract.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["UpdateApplication"] } }, { "name": "subscribe_xgov", "desc": "Subscribes the sender to being an xGov.", "args": [{ "name": "voting_address", "type": "address", "desc": "The address of the voting account for the xGov" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "unsubscribe_xgov", "desc": "Unsubscribes the designated address from being an xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov to unsubscribe" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "request_subscribe_xgov", "desc": "Requests to subscribe to the xGov.", "args": [{ "name": "xgov_address", "type": "address", "desc": "The address of the xGov" }, { "name": "owner_address", "type": "address", "desc": "The address of the xGov Address owner/controller (Voting Address)" }, { "name": "relation_type", "type": "uint64", "desc": "The type of relationship enum" }, { "name": "payment", "type": "pay", "desc": "The payment transaction covering the xGov fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "approve_subscribe_xgov", "desc": "Approves a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to approve" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "reject_subscribe_xgov", "desc": "Rejects a subscribe request to xGov.", "args": [{ "name": "request_id", "type": "uint64", "desc": "The ID of the request to reject" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_voting_account", "desc": "Sets the Voting Address for the xGov.", "args": [{ "name": "xgov_address", "type": "address" }, { "name": "voting_address", "type": "address", "desc": "The voting account address to delegate voting power to" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "subscribe_proposer", "desc": "Subscribes the sender to being a Proposer.", "args": [{ "name": "payment", "type": "pay", "desc": "The payment transaction covering the Proposer fee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "set_proposer_kyc", "desc": "Sets a proposer's KYC status.", "args": [{ "name": "proposer", "type": "address", "desc": "The address of the Proposer" }, { "name": "kyc_status", "type": "bool", "desc": "The new status of the Proposer" }, { "name": "kyc_expiring", "type": "uint64", "desc": "The expiration date as a unix timestamp of the time the KYC expires" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "declare_committee", "desc": "Sets the xGov Committee in charge.", "args": [{ "name": "committee_id", "type": "byte[32]", "desc": "The ID of the xGov Committee" }, { "name": "size", "type": "uint64", "desc": "The size of the xGov Committee" }, { "name": "votes", "type": "uint64", "desc": "The voting power of the xGov Committee" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "open_proposal", "desc": "Creates a new Proposal.", "args": [{ "name": "payment", "type": "pay", "desc": "payment for covering the proposal fee (includes child contract MBR)" }], "returns": { "type": "uint64" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote_proposal", "desc": "Votes on a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app being voted on" }, { "name": "xgov_address", "type": "address", "desc": "(arc4.Address): The address of the xGov being voted on behalf of" }, { "name": "approval_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of approvals votes allocated" }, { "name": "rejection_votes", "type": "uint64", "desc": "(arc4.UInt64): The number of rejections votes allocated" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "pay_grant_proposal", "desc": "Disburses the funds for an approved Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the approved Proposal" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "decommission_proposal", "desc": "Decommissions a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app to decommission" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "drop_proposal", "desc": "Drops a Proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The application ID of the Proposal app to drop" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "deposit_funds", "desc": "Deposits xGov program funds into the xGov Treasury (xGov Registry Account).", "args": [{ "name": "payment", "type": "pay", "desc": "the deposit transaction" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_funds", "desc": "Remove xGov program funds from the xGov Treasury (xGov Registry Account).", "args": [{ "name": "amount", "type": "uint64", "desc": "the amount to remove" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "withdraw_balance", "desc": "Withdraw outstanding Algos, excluding MBR and outstanding funds, from the xGov Registry.", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "get_state", "desc": "Returns the xGov Registry state.", "args": [], "returns": { "type": "(bool,bool,address,address,address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64[3],uint64[4],uint64[4],uint64[3],uint64[3],uint64,uint64,byte[32],uint64,uint64)", "struct": "TypedGlobalState" }, "events": [], "readonly": true, "actions": { "create": [], "call": ["NoOp"] } }, { "name": "is_proposal", "args": [{ "name": "proposal_id", "type": "uint64" }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 36, "bytes": 28 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "committee_id": { "key": "Y29tbWl0dGVlX2lk", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_manager": { "key": "Y29tbWl0dGVlX21hbmFnZXI=", "keyType": "AVMString", "valueType": "AVMBytes" }, "committee_members": { "key": "Y29tbWl0dGVlX21lbWJlcnM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "committee_votes": { "key": "Y29tbWl0dGVlX3ZvdGVz", "keyType": "AVMString", "valueType": "AVMUint64" }, "daemon_ops_funding_bps": { "key": "ZGFlbW9uX29wZXJhdGlvbl9mdW5kaW5nX2Jwcw==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_large": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_medium": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0=", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_small": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "discussion_duration_xlarge": { "key": "ZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "kyc_provider": { "key": "a3ljX3Byb3ZpZGVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "max_committee_size": { "key": "bWF4X2NvbW1pdHRlZV9zaXpl", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_large": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2U=", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_medium": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVt", "keyType": "AVMString", "valueType": "AVMUint64" }, "max_requested_amount_small": { "key": "bWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGw=", "keyType": "AVMString", "valueType": "AVMUint64" }, "min_requested_amount": { "key": "bWluX3JlcXVlc3RlZF9hbW91bnQ=", "keyType": "AVMString", "valueType": "AVMUint64" }, "open_proposal_fee": { "key": "b3Blbl9wcm9wb3NhbF9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "outstanding_funds": { "key": "b3V0c3RhbmRpbmdfZnVuZHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_proposals": { "key": "cGF1c2VkX3Byb3Bvc2Fscw==", "keyType": "AVMString", "valueType": "AVMUint64" }, "paused_registry": { "key": "cGF1c2VkX3JlZ2lzdHJ5", "keyType": "AVMString", "valueType": "AVMUint64" }, "pending_proposals": { "key": "cGVuZGluZ19wcm9wb3NhbHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposal_commitment_bps": { "key": "cHJvcG9zYWxfY29tbWl0bWVudF9icHM=", "keyType": "AVMString", "valueType": "AVMUint64" }, "proposer_fee": { "key": "cHJvcG9zZXJfZmVl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_large": { "key": "cXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_medium": { "key": "cXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "quorum_small": { "key": "cXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "request_id": { "key": "cmVxdWVzdF9pZA==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_large": { "key": "dm90aW5nX2R1cmF0aW9uX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_medium": { "key": "dm90aW5nX2R1cmF0aW9uX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_small": { "key": "dm90aW5nX2R1cmF0aW9uX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "voting_duration_xlarge": { "key": "dm90aW5nX2R1cmF0aW9uX3hsYXJnZQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_large": { "key": "d2VpZ2h0ZWRfcXVvcnVtX2xhcmdl", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_medium": { "key": "d2VpZ2h0ZWRfcXVvcnVtX21lZGl1bQ==", "keyType": "AVMString", "valueType": "AVMUint64" }, "weighted_quorum_small": { "key": "d2VpZ2h0ZWRfcXVvcnVtX3NtYWxs", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_council": { "key": "eGdvdl9jb3VuY2ls", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_daemon": { "key": "eGdvdl9kYWVtb24=", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_fee": { "key": "eGdvdl9mZWU=", "keyType": "AVMString", "valueType": "AVMUint64" }, "xgov_manager": { "key": "eGdvdl9tYW5hZ2Vy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_payor": { "key": "eGdvdl9wYXlvcg==", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgov_subscriber": { "key": "eGdvdl9zdWJzY3JpYmVy", "keyType": "AVMString", "valueType": "AVMBytes" }, "xgovs": { "key": "eGdvdnM=", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuX19hbGdvcHlfZW50cnlwb2ludF93aXRoX2luaXQoKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMCAxIDQgMTYKICAgIGJ5dGVjYmxvY2sgMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkgMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczIDB4NzAgMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyIDB4Nzg2NzZmNzY3MyAweDc4IDB4MTUxZjdjNzUgMHgwMCAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczIDB4NmY3MDY1NmU1ZjcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NSAweDc4Njc2Zjc2NWY3Mzc1NjI3MzYzNzI2OTYyNjU3MiAweDc4Njc2Zjc2NWY3MDYxNzk2ZjcyIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDYxNmU2MTY3NjU3MiAweDc4Njc2Zjc2NWY2NDYxNjU2ZDZmNmUgMHg3ODY3NmY3NjVmNjY2NTY1IDB4NzA3MjZmNzA2ZjczNjU3MjVmNjY2NTY1IDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQgMHgwMDAwMDAwMDAwMDAwMDAwICJXcm9uZyBQcm9wb3NhbCBTdGF0dXMiICJFUlI6IiAweDc4Njc2Zjc2NWY2MzZmNzU2ZTYzNjk2YyAweDY0NjE2NTZkNmY2ZTVmNmY3MDY1NzI2MTc0Njk2ZjZlNWY2Njc1NmU2NDY5NmU2NzVmNjI3MDczIDB4NzA3MjZmNzA2ZjczNjE2YzVmNjM2ZjZkNmQ2OTc0NmQ2NTZlNzQ1ZjYyNzA3MyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQgMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmM2MTcyNjc2NSAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZCAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1IDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NSAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1IDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUgMHg3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMgMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZCAweDcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NSAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1IDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNzY2Zjc0NjU3MyAweDZkNjE3ODVmNjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MzY5N2E2NSAweDcyIDB4NzA3MjZmNzA2ZjczNjU3MiAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NCAweDczNzQ2MTc0NzU3MyAiTWlzc2luZyBDb25maWciIFRNUExfZW50cm9weQogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGJueiBtYWluX2FmdGVyX2lmX2Vsc2VAMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTItNTMKICAgIC8vICMgUHJlY29uZGl0aW9ucwogICAgLy8gYXNzZXJ0IFR4bi5nbG9iYWxfbnVtX2J5dGVfc2xpY2UgPT0gY2ZnLkdMT0JBTF9CWVRFUywgZXJyLldST05HX0dMT0JBTF9CWVRFUwogICAgdHhuIEdsb2JhbE51bUJ5dGVTbGljZQogICAgcHVzaGludCAyOCAvLyAyOAogICAgPT0KICAgIGFzc2VydCAvLyBXcm9uZyBHbG9iYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTQKICAgIC8vIGFzc2VydCBUeG4uZ2xvYmFsX251bV91aW50ID09IGNmZy5HTE9CQUxfVUlOVFMsIGVyci5XUk9OR19HTE9CQUxfVUlOVFMKICAgIHR4biBHbG9iYWxOdW1VaW50CiAgICBwdXNoaW50IDM2IC8vIDM2CiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NQogICAgLy8gYXNzZXJ0IFR4bi5sb2NhbF9udW1fYnl0ZV9zbGljZSA9PSBjZmcuTE9DQUxfQllURVMsIGVyci5XUk9OR19MT0NBTF9CWVRFUwogICAgdHhuIExvY2FsTnVtQnl0ZVNsaWNlCiAgICAhCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTYKICAgIC8vIGFzc2VydCBUeG4ubG9jYWxfbnVtX3VpbnQgPT0gY2ZnLkxPQ0FMX1VJTlRTLCBlcnIuV1JPTkdfTE9DQUxfVUlOVFMKICAgIHR4biBMb2NhbE51bVVpbnQKICAgICEKICAgIGFzc2VydCAvLyBXcm9uZyBMb2NhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1OC01OQogICAgLy8gIyBJbml0aWFsaXplIGdsb2JhbCBzdGF0ZSB2YXJpYWJsZXMKICAgIC8vIHNlbGYucGF1c2VkX3JlZ2lzdHJ5ID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BBVVNFRF9SRUdJU1RSWSkKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjAKICAgIC8vIHNlbGYucGF1c2VkX3Byb3Bvc2FscyA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QQVVTRURfUFJPUE9TQUxTKQogICAgYnl0ZWMgOSAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYyCiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlciA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX01BTkFHRVIpCiAgICBieXRlYyA0IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NAogICAgLy8gYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfU1VCU0NSSUJFUgogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjMtNjUKICAgIC8vIHNlbGYueGdvdl9zdWJzY3JpYmVyID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX1hHT1ZfU1VCU0NSSUJFUgogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY2CiAgICAvLyBzZWxmLnhnb3ZfcGF5b3IgPSBHbG9iYWxTdGF0ZShhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9QQVlPUikKICAgIGJ5dGVjIDEyIC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3CiAgICAvLyBzZWxmLnhnb3ZfY291bmNpbCA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX0NPVU5DSUwpCiAgICBieXRlYyAyMiAvLyAweDc4Njc2Zjc2NWY2MzZmNzU2ZTYzNjk2YwogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjkKICAgIC8vIHNlbGYua3ljX3Byb3ZpZGVyID0gR2xvYmFsU3RhdGUoYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX0tZQ19QUk9WSURFUikKICAgIGJ5dGVjIDEzIC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MQogICAgLy8gYXJjNC5BZGRyZXNzKCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9NQU5BR0VSCiAgICBieXRlYyAxNCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzAtNzIKICAgIC8vIHNlbGYuY29tbWl0dGVlX21hbmFnZXIgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBhcmM0LkFkZHJlc3MoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX01BTkFHRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MwogICAgLy8gc2VsZi54Z292X2RhZW1vbiA9IEdsb2JhbFN0YXRlKGFyYzQuQWRkcmVzcygpLCBrZXk9Y2ZnLkdTX0tFWV9YR09WX0RBRU1PTikKICAgIGJ5dGVjIDE1IC8vIDB4Nzg2NzZmNzY1ZjY0NjE2NTZkNmY2ZQogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzUKICAgIC8vIHNlbGYueGdvdl9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfWEdPVl9GRUUpCiAgICBieXRlYyAxNiAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzYKICAgIC8vIHNlbGYueGdvdnMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfWEdPVlMpCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY3MwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NwogICAgLy8gc2VsZi5wcm9wb3Nlcl9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TRVJfRkVFKQogICAgYnl0ZWMgMTcgLy8gMHg3MDcyNmY3MDZmNzM2NTcyNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzgKICAgIC8vIHNlbGYub3Blbl9wcm9wb3NhbF9mZWUgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfT1BFTl9QUk9QT1NBTF9GRUUpCiAgICBieXRlYyAxMCAvLyAweDZmNzA2NTZlNWY3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODAKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9EQUVNT05fT1BTX0ZVTkRJTkdfQlBTCiAgICBieXRlYyAyMyAvLyAweDY0NjE2NTZkNmY2ZTVmNmY3MDY1NzI2MTc0Njk2ZjZlNWY2Njc1NmU2NDY5NmU2NzVmNjI3MDczCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzktODEKICAgIC8vIHNlbGYuZGFlbW9uX29wc19mdW5kaW5nX2JwcyA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9EQUVNT05fT1BTX0ZVTkRJTkdfQlBTCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9QUk9QT1NBTF9DT01NSVRNRU5UX0JQUwogICAgYnl0ZWMgMjQgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODItODQKICAgIC8vIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUFJPUE9TQUxfQ09NTUlUTUVOVF9CUFMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NwogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01JTl9SRVFVRVNURURfQU1PVU5UCiAgICBieXRlYyAyNSAvLyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4Ni04OAogICAgLy8gc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NSU5fUkVRVUVTVEVEX0FNT1VOVAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfU01BTEwKICAgIGJ5dGVjIDI2IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwLTkyCiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX1NNQUxMCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTQKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9NQVhfUkVRVUVTVEVEX0FNT1VOVF9NRURJVU0KICAgIGJ5dGVjIDI3IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTMtOTUKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX01FRElVTQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX1JFUVVFU1RFRF9BTU9VTlRfTEFSR0UKICAgIGJ5dGVjIDI4IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2LTk4CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X2xhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9SRVFVRVNURURfQU1PVU5UX0xBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9TTUFMTAogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMC0xMDIKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX1NNQUxMCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA0CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9NRURJVU0KICAgIGJ5dGVjIDMwIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMy0xMDUKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0gPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfRElTQ1VTU0lPTl9EVVJBVElPTl9NRURJVU0KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDcKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX0xBUkdFCiAgICBieXRlYyAzMSAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2LTEwOAogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0RJU0NVU1NJT05fRFVSQVRJT05fTEFSR0UKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX1hMQVJHRQogICAgYnl0ZWMgMzIgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5LTExMQogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9ESVNDVVNTSU9OX0RVUkFUSU9OX1hMQVJHRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNAogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9TTUFMTAogICAgYnl0ZWMgMzMgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTMtMTE1CiAgICAvLyBzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTcKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTUVESVVNCiAgICBieXRlYyAzNCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE2LTExOAogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1ZPVElOR19EVVJBVElPTl9NRURJVU0KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjAKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fTEFSR0UKICAgIGJ5dGVjIDM1IC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE5LTEyMQogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX0xBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTIzCiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfVk9USU5HX0RVUkFUSU9OX1hMQVJHRQogICAgYnl0ZWMgMzYgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEyMi0xMjQKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZSA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9WT1RJTkdfRFVSQVRJT05fWExBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTI2CiAgICAvLyBzZWxmLnF1b3J1bV9zbWFsbCA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9RVU9SVU1fU01BTEwpCiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjcKICAgIC8vIHNlbGYucXVvcnVtX21lZGl1bSA9IEdsb2JhbFN0YXRlKFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9RVU9SVU1fTUVESVVNKQogICAgYnl0ZWMgMzggLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMjgKICAgIC8vIHNlbGYucXVvcnVtX2xhcmdlID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1FVT1JVTV9MQVJHRSkKICAgIGJ5dGVjIDM5IC8vIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEzMQogICAgLy8gVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9TTUFMTAogICAgYnl0ZWMgNDAgLy8gMHg3NzY1Njk2NzY4NzQ2NTY0NWY3MTc1NmY3Mjc1NmQ1ZjczNmQ2MTZjNmMKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzAtMTMyCiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fU01BTEwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzQKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTUVESVVNCiAgICBieXRlYyA0MSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTMzLTEzNQogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1dFSUdIVEVEX1FVT1JVTV9NRURJVU0KICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMzcKICAgIC8vIFVJbnQ2NCgpLCBrZXk9Y2ZnLkdTX0tFWV9XRUlHSFRFRF9RVU9SVU1fTEFSR0UKICAgIGJ5dGVjIDQyIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTM2LTEzOAogICAgLy8gc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfV0VJR0hURURfUVVPUlVNX0xBUkdFCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTQwCiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX09VVFNUQU5ESU5HX0ZVTkRTKQogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTQzCiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX0NPTU1JVFRFRV9NRU1CRVJTKQogICAgYnl0ZWMgNDMgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjU2ZDYyNjU3MjczCiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE0NAogICAgLy8gc2VsZi5jb21taXR0ZWVfdm90ZXMgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfQ09NTUlUVEVFX1ZPVEVTKQogICAgYnl0ZWMgNDQgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTQ2CiAgICAvLyBzZWxmLnBlbmRpbmdfcHJvcG9zYWxzID0gR2xvYmFsU3RhdGUoVUludDY0KCksIGtleT1jZmcuR1NfS0VZX1BFTkRJTkdfUFJPUE9TQUxTKQogICAgYnl0ZWNfMyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTQ4CiAgICAvLyBzZWxmLnJlcXVlc3RfaWQgPSBHbG9iYWxTdGF0ZShVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfUkVRVUVTVF9JRCkKICAgIGJ5dGVjIDE4IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTY4CiAgICAvLyBVSW50NjQoKSwga2V5PWNmZy5HU19LRVlfTUFYX0NPTU1JVFRFRV9TSVpFCiAgICBieXRlYyA0NSAvLyAweDZkNjE3ODVmNjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MzY5N2E2NQogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE2Ny0xNjkKICAgIC8vIHNlbGYubWF4X2NvbW1pdHRlZV9zaXplID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksIGtleT1jZmcuR1NfS0VZX01BWF9DT01NSVRURUVfU0laRQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKCm1haW5fYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIE51bUFwcEFyZ3MKICAgIGJ6IG1haW5fYWZ0ZXJfaWZfZWxzZUAzOAogICAgcHVzaGJ5dGVzcyAweDRjNWM2MWJhIDB4ODZmN2UwZTYgMHgzOWUyNmQ4YSAweDk4MzUyZTg2IDB4ZmE0ZWQ2ZTIgMHhkNmM5Y2MxYSAweDVjNDg0MDU1IDB4MzdkNmFkZjEgMHhkNDIxNmI2ZSAweGJhODUyMGYyIDB4MTY3N2IzMGUgMHg4NGI3ZDI2OCAweDY1M2EwYmRiIDB4NDk1NmMxYWIgMHhhMDgyY2VmOCAweDc2NzI1NTU5IDB4NDUwNzczOTAgMHgzYzMxYmMwMiAweDBkMmM3ODkxIDB4MGRhMjc4ODUgMHg3YTRmZWU0MyAweDUyZGQxMGQ3IDB4ZDRkMzdhNjQgMHgzNDM0OWRjYyAweDE1OGY4ZGQ2IDB4ZGIyN2I5YWYgMHg5MTNlYzdkYiAweDY1NjEwYTlmIDB4ZmRjNjk1YzIgMHhiYTkwYWI1NCAweGIzYjU4NDgyIDB4MDBiM2NlZjUgMHgyNjk4MzIwMCAvLyBtZXRob2QgImNyZWF0ZSgpdm9pZCIsIG1ldGhvZCAicGF1c2VfcmVnaXN0cnkoKXZvaWQiLCBtZXRob2QgInBhdXNlX3Byb3Bvc2Fscygpdm9pZCIsIG1ldGhvZCAicmVzdW1lX3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJyZXN1bWVfcHJvcG9zYWxzKCl2b2lkIiwgbWV0aG9kICJzZXRfeGdvdl9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3BheW9yKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfY291bmNpbChhZGRyZXNzKXZvaWQiLCBtZXRob2QgInNldF94Z292X3N1YnNjcmliZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJzZXRfa3ljX3Byb3ZpZGVyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X2NvbW1pdHRlZV9tYW5hZ2VyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic2V0X3hnb3ZfZGFlbW9uKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAiY29uZmlnX3hnb3ZfcmVnaXN0cnkoKHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbNF0sdWludDY0WzRdLHVpbnQ2NFszXSx1aW50NjRbM10pKXZvaWQiLCBtZXRob2QgInVwZGF0ZV94Z292X3JlZ2lzdHJ5KCl2b2lkIiwgbWV0aG9kICJzdWJzY3JpYmVfeGdvdihhZGRyZXNzLHBheSl2b2lkIiwgbWV0aG9kICJ1bnN1YnNjcmliZV94Z292KGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAicmVxdWVzdF9zdWJzY3JpYmVfeGdvdihhZGRyZXNzLGFkZHJlc3MsdWludDY0LHBheSl2b2lkIiwgbWV0aG9kICJhcHByb3ZlX3N1YnNjcmliZV94Z292KHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJyZWplY3Rfc3Vic2NyaWJlX3hnb3YodWludDY0KXZvaWQiLCBtZXRob2QgInNldF92b3RpbmdfYWNjb3VudChhZGRyZXNzLGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAic3Vic2NyaWJlX3Byb3Bvc2VyKHBheSl2b2lkIiwgbWV0aG9kICJzZXRfcHJvcG9zZXJfa3ljKGFkZHJlc3MsYm9vbCx1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVjbGFyZV9jb21taXR0ZWUoYnl0ZVszMl0sdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJvcGVuX3Byb3Bvc2FsKHBheSl1aW50NjQiLCBtZXRob2QgInZvdGVfcHJvcG9zYWwodWludDY0LGFkZHJlc3MsdWludDY0LHVpbnQ2NCl2b2lkIiwgbWV0aG9kICJwYXlfZ3JhbnRfcHJvcG9zYWwodWludDY0KXZvaWQiLCBtZXRob2QgImRlY29tbWlzc2lvbl9wcm9wb3NhbCh1aW50NjQpdm9pZCIsIG1ldGhvZCAiZHJvcF9wcm9wb3NhbCh1aW50NjQpdm9pZCIsIG1ldGhvZCAiZGVwb3NpdF9mdW5kcyhwYXkpdm9pZCIsIG1ldGhvZCAid2l0aGRyYXdfZnVuZHModWludDY0KXZvaWQiLCBtZXRob2QgIndpdGhkcmF3X2JhbGFuY2UoKXZvaWQiLCBtZXRob2QgImdldF9zdGF0ZSgpKGJvb2wsYm9vbCxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLGFkZHJlc3MsYWRkcmVzcyxhZGRyZXNzLHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NCx1aW50NjQsdWludDY0LHVpbnQ2NFszXSx1aW50NjRbNF0sdWludDY0WzRdLHVpbnQ2NFszXSx1aW50NjRbM10sdWludDY0LHVpbnQ2NCxieXRlWzMyXSx1aW50NjQsdWludDY0KSIsIG1ldGhvZCAiaXNfcHJvcG9zYWwodWludDY0KXZvaWQiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBtYWluX2NyZWF0ZV9yb3V0ZUA1IG1haW5fcGF1c2VfcmVnaXN0cnlfcm91dGVANiBtYWluX3BhdXNlX3Byb3Bvc2Fsc19yb3V0ZUA3IG1haW5fcmVzdW1lX3JlZ2lzdHJ5X3JvdXRlQDggbWFpbl9yZXN1bWVfcHJvcG9zYWxzX3JvdXRlQDkgbWFpbl9zZXRfeGdvdl9tYW5hZ2VyX3JvdXRlQDEwIG1haW5fc2V0X3BheW9yX3JvdXRlQDExIG1haW5fc2V0X3hnb3ZfY291bmNpbF9yb3V0ZUAxMiBtYWluX3NldF94Z292X3N1YnNjcmliZXJfcm91dGVAMTMgbWFpbl9zZXRfa3ljX3Byb3ZpZGVyX3JvdXRlQDE0IG1haW5fc2V0X2NvbW1pdHRlZV9tYW5hZ2VyX3JvdXRlQDE1IG1haW5fc2V0X3hnb3ZfZGFlbW9uX3JvdXRlQDE2IG1haW5fY29uZmlnX3hnb3ZfcmVnaXN0cnlfcm91dGVAMTcgbWFpbl91cGRhdGVfeGdvdl9yZWdpc3RyeV9yb3V0ZUAxOCBtYWluX3N1YnNjcmliZV94Z292X3JvdXRlQDE5IG1haW5fdW5zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMCBtYWluX3JlcXVlc3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjEgbWFpbl9hcHByb3ZlX3N1YnNjcmliZV94Z292X3JvdXRlQDIyIG1haW5fcmVqZWN0X3N1YnNjcmliZV94Z292X3JvdXRlQDIzIG1haW5fc2V0X3ZvdGluZ19hY2NvdW50X3JvdXRlQDI0IG1haW5fc3Vic2NyaWJlX3Byb3Bvc2VyX3JvdXRlQDI1IG1haW5fc2V0X3Byb3Bvc2VyX2t5Y19yb3V0ZUAyNiBtYWluX2RlY2xhcmVfY29tbWl0dGVlX3JvdXRlQDI3IG1haW5fb3Blbl9wcm9wb3NhbF9yb3V0ZUAyOCBtYWluX3ZvdGVfcHJvcG9zYWxfcm91dGVAMjkgbWFpbl9wYXlfZ3JhbnRfcHJvcG9zYWxfcm91dGVAMzAgbWFpbl9kZWNvbW1pc3Npb25fcHJvcG9zYWxfcm91dGVAMzEgbWFpbl9kcm9wX3Byb3Bvc2FsX3JvdXRlQDMyIG1haW5fZGVwb3NpdF9mdW5kc19yb3V0ZUAzMyBtYWluX3dpdGhkcmF3X2Z1bmRzX3JvdXRlQDM0IG1haW5fd2l0aGRyYXdfYmFsYW5jZV9yb3V0ZUAzNSBtYWluX2dldF9zdGF0ZV9yb3V0ZUAzNiBtYWluX2lzX3Byb3Bvc2FsX3JvdXRlQDM3CgptYWluX2FmdGVyX2lmX2Vsc2VAMzg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICBpbnRjXzAgLy8gMAogICAgcmV0dXJuCgptYWluX2lzX3Byb3Bvc2FsX3JvdXRlQDM3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE1MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE1MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgaXNfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZ2V0X3N0YXRlX3JvdXRlQDM2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA5NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHJlYWRvbmx5PVRydWUpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgZ2V0X3N0YXRlCiAgICBieXRlYyA3IC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3dpdGhkcmF3X2JhbGFuY2Vfcm91dGVAMzU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDY4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHdpdGhkcmF3X2JhbGFuY2UKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fd2l0aGRyYXdfZnVuZHNfcm91dGVAMzQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB3aXRoZHJhd19mdW5kcwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9kZXBvc2l0X2Z1bmRzX3JvdXRlQDMzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAyNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDI2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBkZXBvc2l0X2Z1bmRzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2Ryb3BfcHJvcG9zYWxfcm91dGVAMzI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk4MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZHJvcF9wcm9wb3NhbAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9kZWNvbW1pc3Npb25fcHJvcG9zYWxfcm91dGVAMzE6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkzMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVjb21taXNzaW9uX3Byb3Bvc2FsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3BheV9ncmFudF9wcm9wb3NhbF9yb3V0ZUAzMDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg3MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODcwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBwYXlfZ3JhbnRfcHJvcG9zYWwKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fdm90ZV9wcm9wb3NhbF9yb3V0ZUAyOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzg3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiB2b3RlX3Byb3Bvc2FsCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX29wZW5fcHJvcG9zYWxfcm91dGVAMjg6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MjgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZAogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18xIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMSAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyOAogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICBjYWxsc3ViIG9wZW5fcHJvcG9zYWwKICAgIGl0b2IKICAgIGJ5dGVjIDcgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fZGVjbGFyZV9jb21taXR0ZWVfcm91dGVAMjc6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcwMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVjbGFyZV9jb21taXR0ZWUKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3Byb3Bvc2VyX2t5Y19yb3V0ZUAyNjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjcxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfcHJvcG9zZXJfa3ljCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3N1YnNjcmliZV9wcm9wb3Nlcl9yb3V0ZUAyNToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY0MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV9wcm9wb3NlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfdm90aW5nX2FjY291bnRfcm91dGVAMjQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MTIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYxMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3ZvdGluZ19hY2NvdW50CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3JlamVjdF9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU5NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZWplY3Rfc3Vic2NyaWJlX3hnb3YKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fYXBwcm92ZV9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAyMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTY5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhcHByb3ZlX3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3JlcXVlc3Rfc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjE6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDMKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18xIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTI4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiByZXF1ZXN0X3N1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3Vuc3Vic2NyaWJlX3hnb3Zfcm91dGVAMjA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MDEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUwMQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgdW5zdWJzY3JpYmVfeGdvdgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zdWJzY3JpYmVfeGdvdl9yb3V0ZUAxOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBkdXAKICAgIGd0eG5zIFR5cGVFbnVtCiAgICBpbnRjXzEgLy8gcGF5CiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgcGF5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NzEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHN1YnNjcmliZV94Z292CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3VwZGF0ZV94Z292X3JlZ2lzdHJ5X3JvdXRlQDE4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDU5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoYWxsb3dfYWN0aW9ucz1bIlVwZGF0ZUFwcGxpY2F0aW9uIl0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICBpbnRjXzIgLy8gVXBkYXRlQXBwbGljYXRpb24KICAgID09CiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBVcGRhdGVBcHBsaWNhdGlvbgogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHVwZGF0ZV94Z292X3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2NvbmZpZ194Z292X3JlZ2lzdHJ5X3JvdXRlQDE3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDEwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MTAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGNvbmZpZ194Z292X3JlZ2lzdHJ5CiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF94Z292X2RhZW1vbl9yb3V0ZUAxNjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM5NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfeGdvdl9kYWVtb24KICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X2NvbW1pdHRlZV9tYW5hZ2VyX3JvdXRlQDE1OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozODAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9jb21taXR0ZWVfbWFuYWdlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfa3ljX3Byb3ZpZGVyX3JvdXRlQDE0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzY1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0Mi01MAogICAgLy8gY2xhc3MgWEdvdlJlZ2lzdHJ5KAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y2ZnLkdMT0JBTF9VSU5UUywKICAgIC8vICAgICAgICAgbG9jYWxfYnl0ZXM9Y2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHNldF9reWNfcHJvdmlkZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fc2V0X3hnb3Zfc3Vic2NyaWJlcl9yb3V0ZUAxMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDItNTAKICAgIC8vIGNsYXNzIFhHb3ZSZWdpc3RyeSgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y2ZnLkdMT0JBTF9CWVRFUywKICAgIC8vICAgICAgICAgZ2xvYmFsX3VpbnRzPWNmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y2ZnLkxPQ0FMX1VJTlRTLAogICAgLy8gICAgICksCiAgICAvLyApOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzUwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBzZXRfeGdvdl9zdWJzY3JpYmVyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF94Z292X2NvdW5jaWxfcm91dGVAMTI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMzNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3ZfY291bmNpbAogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9zZXRfcGF5b3Jfcm91dGVAMTE6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMyMAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3BheW9yCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3NldF94Z292X21hbmFnZXJfcm91dGVAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyLTUwCiAgICAvLyBjbGFzcyBYR292UmVnaXN0cnkoCiAgICAvLyAgICAgQVJDNENvbnRyYWN0LAogICAgLy8gICAgIHN0YXRlX3RvdGFscz1TdGF0ZVRvdGFscygKICAgIC8vICAgICAgICAgZ2xvYmFsX2J5dGVzPWNmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jZmcuTE9DQUxfQllURVMsCiAgICAvLyAgICAgICAgIGxvY2FsX3VpbnRzPWNmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgc2V0X3hnb3ZfbWFuYWdlcgogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9yZXN1bWVfcHJvcG9zYWxzX3JvdXRlQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyOTYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgcmVzdW1lX3Byb3Bvc2FscwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9yZXN1bWVfcmVnaXN0cnlfcm91dGVAODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI4NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiByZXN1bWVfcmVnaXN0cnkKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcGF1c2VfcHJvcG9zYWxzX3JvdXRlQDc6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgcGF1c2VfcHJvcG9zYWxzCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX3BhdXNlX3JlZ2lzdHJ5X3JvdXRlQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgcGF1c2VfcmVnaXN0cnkKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fY3JlYXRlX3JvdXRlQDU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChjcmVhdGU9InJlcXVpcmUiKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gY3JlYXRpbmcKICAgIGNhbGxzdWIgY3JlYXRlCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmlzX3hnb3ZfbWFuYWdlcigpIC0+IHVpbnQ2NDoKaXNfeGdvdl9tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTc3CiAgICAvLyByZXR1cm4gVHhuLnNlbmRlciA9PSBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9tYW5hZ2VyIGV4aXN0cwogICAgPT0KICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc194Z292X3N1YnNjcmliZXIoKSAtPiB1aW50NjQ6CmlzX3hnb3Zfc3Vic2NyaWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE4MQogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUubmF0aXZlCiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3N1YnNjcmliZXIgZXhpc3RzCiAgICA9PQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5Ll9pc19wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMpIC0+IHVpbnQ2NDoKX2lzX3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTkxLTE5MgogICAgLy8gQHN1YnJvdXRpbmUKICAgIC8vIGRlZiBfaXNfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBib29sOgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTQKICAgIC8vIEFwcGxpY2F0aW9uKHByb3Bvc2FsX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICBhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTUKICAgIC8vID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTQtMTk1CiAgICAvLyBBcHBsaWNhdGlvbihwcm9wb3NhbF9pZC5uYXRpdmUpLmNyZWF0b3IKICAgIC8vID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxOTMtMTk2CiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIEFwcGxpY2F0aW9uKHByb3Bvc2FsX2lkLm5hdGl2ZSkuY3JlYXRvcgogICAgLy8gICAgID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICkKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS52YWxpZF94Z292X3BheW1lbnQocGF5bWVudDogdWludDY0KSAtPiB1aW50NjQ6CnZhbGlkX3hnb3ZfcGF5bWVudDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIxMC0yMTEKICAgIC8vIEBzdWJyb3V0aW5lCiAgICAvLyBkZWYgdmFsaWRfeGdvdl9wYXltZW50KHNlbGYsIHBheW1lbnQ6IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uKSAtPiBib29sOgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTMKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTMtMjE0CiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICBieiB2YWxpZF94Z292X3BheW1lbnRfYm9vbF9mYWxzZUAzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTQKICAgIC8vIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE2IC8vIDB4Nzg2NzZmNzY1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfZmVlIGV4aXN0cwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIxMy0yMTQKICAgIC8vIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gYW5kIHBheW1lbnQuYW1vdW50ID09IHNlbGYueGdvdl9mZWUudmFsdWUKICAgIGJ6IHZhbGlkX3hnb3ZfcGF5bWVudF9ib29sX2ZhbHNlQDMKICAgIGludGNfMSAvLyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTItMjE1CiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIHBheW1lbnQucmVjZWl2ZXIgPT0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcwogICAgLy8gICAgIGFuZCBwYXltZW50LmFtb3VudCA9PSBzZWxmLnhnb3ZfZmVlLnZhbHVlCiAgICAvLyApCiAgICByZXRzdWIKCnZhbGlkX3hnb3ZfcGF5bWVudF9ib29sX2ZhbHNlQDM6CiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjEyLTIxNQogICAgLy8gcmV0dXJuICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICAgICBhbmQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi54Z292X2ZlZS52YWx1ZQogICAgLy8gKQogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnZhbGlkX2t5YyhhZGRyZXNzOiBieXRlcykgLT4gdWludDY0Ogp2YWxpZF9reWM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTctMjE4CiAgICAvLyBAc3Vicm91dGluZQogICAgLy8gZGVmIHZhbGlkX2t5YyhzZWxmLCBhZGRyZXNzOiBBY2NvdW50KSAtPiBib29sOgogICAgcHJvdG8gMSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjAKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19zdGF0dXMubmF0aXZlCiAgICBieXRlY18yIC8vIDB4NzAKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICBnZXRiaXQKICAgIGJ5dGVjIDggLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjAtMjIxCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgYnogdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjIxCiAgICAvLyBhbmQgc2VsZi5wcm9wb3Nlcl9ib3hbYWRkcmVzc10ua3ljX2V4cGlyaW5nLm5hdGl2ZSA+IEdsb2JhbC5sYXRlc3RfdGltZXN0YW1wCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zZXJfYm94IGVudHJ5IGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgIGV4dHJhY3RfdWludDY0CiAgICBnbG9iYWwgTGF0ZXN0VGltZXN0YW1wCiAgICA+CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMjAtMjIxCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFthZGRyZXNzXS5reWNfc3RhdHVzLm5hdGl2ZQogICAgLy8gYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgYnogdmFsaWRfa3ljX2Jvb2xfZmFsc2VAMwogICAgaW50Y18xIC8vIDEKCnZhbGlkX2t5Y19ib29sX21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMTktMjIyCiAgICAvLyByZXR1cm4gKAogICAgLy8gICAgIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19zdGF0dXMubmF0aXZlCiAgICAvLyAgICAgYW5kIHNlbGYucHJvcG9zZXJfYm94W2FkZHJlc3NdLmt5Y19leHBpcmluZy5uYXRpdmUgPiBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgLy8gKQogICAgc3dhcAogICAgcmV0c3ViCgp2YWxpZF9reWNfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIGIgdmFsaWRfa3ljX2Jvb2xfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5jcmVhdGUoKSAtPiB2b2lkOgpjcmVhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjYKICAgIC8vIHNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlID0gYXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpCiAgICBieXRlYyA0IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICB0eG4gU2VuZGVyCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTczCiAgICAvLyByZXR1cm4gVGVtcGxhdGVWYXJbQnl0ZXNdKCJlbnRyb3B5IikgICMgdHJpY2sgdG8gYWxsb3cgZnJlc2ggZGVwbG95bWVudAogICAgYnl0ZWMgNTEgLy8gVE1QTF9lbnRyb3B5CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNjcKICAgIC8vIGFzc2VydCBzZWxmLmVudHJvcHkoKSA9PSBUZW1wbGF0ZVZhcltCeXRlc10oImVudHJvcHkiKQogICAgZHVwCiAgICA9PQogICAgYXNzZXJ0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucGF1c2VfcmVnaXN0cnkoKSAtPiB2b2lkOgpwYXVzZV9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI3NQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNzYKICAgIC8vIHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlID0gVUludDY0KDEpCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBpbnRjXzEgLy8gMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5wYXVzZV9wcm9wb3NhbHMoKSAtPiB2b2lkOgpwYXVzZV9wcm9wb3NhbHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyODQKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mjg1CiAgICAvLyBzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUgPSBVSW50NjQoMSkKICAgIGJ5dGVjIDkgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgaW50Y18xIC8vIDEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVzdW1lX3JlZ2lzdHJ5KCkgLT4gdm9pZDoKcmVzdW1lX3JlZ2lzdHJ5OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjkzCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI5NAogICAgLy8gc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUgPSBVSW50NjQoMCkKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnJlc3VtZV9wcm9wb3NhbHMoKSAtPiB2b2lkOgpyZXN1bWVfcHJvcG9zYWxzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzAyCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjMwMwogICAgLy8gc2VsZi5wYXVzZWRfcHJvcG9zYWxzLnZhbHVlID0gVUludDY0KDApCiAgICBieXRlYyA5IC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGludGNfMCAvLyAwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X21hbmFnZXIobWFuYWdlcjogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X21hbmFnZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMDUtMzA2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMTcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzE4CiAgICAvLyBzZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSA9IG1hbmFnZXIKICAgIGJ5dGVjIDQgLy8gMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfcGF5b3IocGF5b3I6IGJ5dGVzKSAtPiB2b2lkOgpzZXRfcGF5b3I6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMjAtMzIxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF9wYXlvcihzZWxmLCBwYXlvcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzMzCiAgICAvLyBzZWxmLnhnb3ZfcGF5b3IudmFsdWUgPSBwYXlvcgogICAgYnl0ZWMgMTIgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF94Z292X2NvdW5jaWwoY291bmNpbDogYnl0ZXMpIC0+IHZvaWQ6CnNldF94Z292X2NvdW5jaWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozMzUtMzM2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHNldF94Z292X2NvdW5jaWwoc2VsZiwgY291bmNpbDogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNDcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzQ4CiAgICAvLyBzZWxmLnhnb3ZfY291bmNpbC52YWx1ZSA9IGNvdW5jaWwKICAgIGJ5dGVjIDIyIC8vIDB4Nzg2NzZmNzY1ZjYzNmY3NTZlNjM2OTZjCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3Zfc3Vic2NyaWJlcihzdWJzY3JpYmVyOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3Zfc3Vic2NyaWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM1MC0zNTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3hnb3Zfc3Vic2NyaWJlcihzZWxmLCBzdWJzY3JpYmVyOiBhcmM0LkFkZHJlc3MpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2MgogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNjMKICAgIC8vIHNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlID0gc3Vic2NyaWJlcgogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zZXRfa3ljX3Byb3ZpZGVyKHByb3ZpZGVyOiBieXRlcykgLT4gdm9pZDoKc2V0X2t5Y19wcm92aWRlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjM2NS0zNjYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X2t5Y19wcm92aWRlcihzZWxmLCBwcm92aWRlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozNzcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzc4CiAgICAvLyBzZWxmLmt5Y19wcm92aWRlci52YWx1ZSA9IHByb3ZpZGVyCiAgICBieXRlYyAxMyAvLyAweDZiNzk2MzVmNzA3MjZmNzY2OTY0NjU3MgogICAgZnJhbWVfZGlnIC0xCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9jb21taXR0ZWVfbWFuYWdlcihtYW5hZ2VyOiBieXRlcykgLT4gdm9pZDoKc2V0X2NvbW1pdHRlZV9tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzgwLTM4MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfY29tbWl0dGVlX21hbmFnZXIoc2VsZiwgbWFuYWdlcjogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTozOTIKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MzkzCiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlID0gbWFuYWdlcgogICAgYnl0ZWMgMTQgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjZkNjE2ZTYxNjc2NTcyCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3hnb3ZfZGFlbW9uKHhnb3ZfZGFlbW9uOiBieXRlcykgLT4gdm9pZDoKc2V0X3hnb3ZfZGFlbW9uOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Mzk1LTM5NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfeGdvdl9kYWVtb24oc2VsZiwgeGdvdl9kYWVtb246IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDA3CiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQwOAogICAgLy8gc2VsZi54Z292X2RhZW1vbi52YWx1ZSA9IHhnb3ZfZGFlbW9uCiAgICBieXRlYyAxNSAvLyAweDc4Njc2Zjc2NWY2NDYxNjU2ZDZmNmUKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5jb25maWdfeGdvdl9yZWdpc3RyeShjb25maWc6IGJ5dGVzKSAtPiB2b2lkOgpjb25maWdfeGdvdl9yZWdpc3RyeToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQxMC00MTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgY29uZmlnX3hnb3ZfcmVnaXN0cnkoc2VsZiwgY29uZmlnOiB0eXAuWEdvdlJlZ2lzdHJ5Q29uZmlnKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MjMKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTg5CiAgICAvLyByZXR1cm4gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSA9PSAwCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgICEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyNAogICAgLy8gYXNzZXJ0IHNlbGYubm9fcGVuZGluZ19wcm9wb3NhbHMoKSwgZXJyLk5PX1BFTkRJTkdfUFJPUE9TQUxTCiAgICBhc3NlcnQgLy8gQ2Fubm90IHBlcmZvcm0gb3BlcmF0aW9uIHdpdGggcGVuZGluZyBwcm9wb3NhbHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQyNwogICAgLy8gY29uZmlnLm9wZW5fcHJvcG9zYWxfZmVlLm5hdGl2ZSwgY29uZmlnLmRhZW1vbl9vcHNfZnVuZGluZ19icHMubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGludGNfMyAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGZyYW1lX2RpZyAtMQogICAgcHVzaGludCAyNCAvLyAyNAogICAgZXh0cmFjdF91aW50NjQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIyOAogICAgLy8gcmV0dXJuIGFtb3VudCAqIGZyYWN0aW9uX2luX2JwcyAvLyBCUFMKICAgIGR1cDIKICAgICoKICAgIHB1c2hpbnQgMTAwMDAgLy8gMTAwMDAKICAgIC8KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjI0NwogICAgLy8gVUludDY0KE1BWF9NQlJfUEVSX0FQUCArIE1BWF9NQlJfUEVSX0JPWCArIEFDQ09VTlRfTUJSKSArIGRhZW1vbl9vcHNfZnVuZGluZwogICAgcHVzaGludCAxNjgzNTMwMCAvLyAxNjgzNTMwMAogICAgKwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjUwCiAgICAvLyBhc3NlcnQgb3Blbl9wcm9wb3NhbF9mZWUgPiB0b19zdWJzdHJhY3QsIGVyci5JTlZBTElEX09QRU5fUFJPUE9TQUxfRkVFCiAgICBkaWcgMgogICAgZGlnIDEKICAgID4KICAgIGFzc2VydCAvLyBJbnZhbGlkIG9wZW4gcHJvcG9zYWwgZmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyNTIKICAgIC8vIG1icl9hdmFpbGFibGVfZm9yX2NvbW1pdHRlZSA9IG9wZW5fcHJvcG9zYWxfZmVlIC0gdG9fc3Vic3RyYWN0CiAgICBkaWcgMgogICAgc3dhcAogICAgLQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU0LTI1NgogICAgLy8gcGVyX3ZvdGVyX21iciA9ICgKICAgIC8vICAgICBVSW50NjQocGNmZy5WT1RFUl9CT1hfS0VZX1NJWkUgKyBwY2ZnLlZPVEVSX0JPWF9WQUxVRV9TSVpFKQogICAgLy8gKSAqIFBFUl9CWVRFX0lOX0JPWF9NQlIgKyBQRVJfQk9YX01CUgogICAgcHVzaGludCAxOTMwMCAvLyAxOTMwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MjU4CiAgICAvLyBzZWxmLm1heF9jb21taXR0ZWVfc2l6ZS52YWx1ZSA9IG1icl9hdmFpbGFibGVfZm9yX2NvbW1pdHRlZSAvLyBwZXJfdm90ZXJfbWJyCiAgICAvCiAgICBieXRlYyA0NSAvLyAweDZkNjE3ODVmNjM2ZjZkNmQ2OTc0NzQ2NTY1NWY3MzY5N2E2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQzMAogICAgLy8gc2VsZi54Z292X2ZlZS52YWx1ZSA9IGNvbmZpZy54Z292X2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAxNiAvLyAweDc4Njc2Zjc2NWY2NjY1NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzEKICAgIC8vIHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlID0gY29uZmlnLnByb3Bvc2VyX2ZlZS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgcHVzaGludCA4IC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAxNyAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQzMgogICAgLy8gc2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZS52YWx1ZSA9IGNvbmZpZy5vcGVuX3Byb3Bvc2FsX2ZlZS5uYXRpdmUKICAgIGJ5dGVjIDEwIC8vIDB4NmY3MDY1NmU1ZjcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgdW5jb3ZlciAyCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDMzCiAgICAvLyBzZWxmLmRhZW1vbl9vcHNfZnVuZGluZ19icHMudmFsdWUgPSBjb25maWcuZGFlbW9uX29wc19mdW5kaW5nX2Jwcy5uYXRpdmUKICAgIGJ5dGVjIDIzIC8vIDB4NjQ2MTY1NmQ2ZjZlNWY2ZjcwNjU3MjYxNzQ2OTZmNmU1ZjY2NzU2ZTY0Njk2ZTY3NWY2MjcwNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzQKICAgIC8vIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMudmFsdWUgPSBjb25maWcucHJvcG9zYWxfY29tbWl0bWVudF9icHMubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNCAvLyAweDcwNzI2ZjcwNmY3MzYxNmM1ZjYzNmY2ZDZkNjk3NDZkNjU2ZTc0NWY2MjcwNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzYKICAgIC8vIHNlbGYubWluX3JlcXVlc3RlZF9hbW91bnQudmFsdWUgPSBjb25maWcubWluX3JlcXVlc3RlZF9hbW91bnQubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIHB1c2hpbnQgNDAgLy8gNDAKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNSAvLyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0MzcKICAgIC8vIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUgPSBjb25maWcubWF4X3JlcXVlc3RlZF9hbW91bnRbMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgNDggMjQgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGludGNfMCAvLyAwCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjYgLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDM4CiAgICAvLyBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X21lZGl1bS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsxXS5uYXRpdmUKICAgIGR1cAogICAgcHVzaGludCA4IC8vIDgKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAyNyAvLyAweDZkNjE3ODVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQ1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQzOQogICAgLy8gc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSA9IGNvbmZpZy5tYXhfcmVxdWVzdGVkX2Ftb3VudFsyXS5uYXRpdmUKICAgIGludGNfMyAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDI4IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MQogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgNzIgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGludGNfMCAvLyAwCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMjkgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzM2ZDYxNmM2YwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MgogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bS52YWx1ZSA9IGNvbmZpZy5kaXNjdXNzaW9uX2R1cmF0aW9uWzFdLm5hdGl2ZQogICAgZHVwCiAgICBwdXNoaW50IDggLy8gOAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDMwIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0MwogICAgLy8gc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlLnZhbHVlID0gY29uZmlnLmRpc2N1c3Npb25fZHVyYXRpb25bMl0ubmF0aXZlCiAgICBkdXAKICAgIGludGNfMyAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDMxIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDQKICAgIC8vIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UudmFsdWUgPSBjb25maWcuZGlzY3Vzc2lvbl9kdXJhdGlvblszXS5uYXRpdmUKICAgIHB1c2hpbnQgMjQgLy8gMjQKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzMiAvLyAweDY0Njk3MzYzNzU3MzczNjk2ZjZlNWY2NDc1NzI2MTc0Njk2ZjZlNWY3ODZjNjE3MjY3NjUKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDYKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblswXS5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgZXh0cmFjdCAxMDQgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICBkdXAKICAgIGludGNfMCAvLyAwCiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzMgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NDcKICAgIC8vIHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSA9IGNvbmZpZy52b3RpbmdfZHVyYXRpb25bMV0ubmF0aXZlCiAgICBkdXAKICAgIHB1c2hpbnQgOCAvLyA4CiAgICBleHRyYWN0X3VpbnQ2NAogICAgYnl0ZWMgMzQgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZkNjU2NDY5NzU2ZAogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0OAogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25fbGFyZ2UudmFsdWUgPSBjb25maWcudm90aW5nX2R1cmF0aW9uWzJdLm5hdGl2ZQogICAgZHVwCiAgICBpbnRjXzMgLy8gMTYKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ0OQogICAgLy8gc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlID0gY29uZmlnLnZvdGluZ19kdXJhdGlvblszXS5uYXRpdmUKICAgIHB1c2hpbnQgMjQgLy8gMjQKICAgIGV4dHJhY3RfdWludDY0CiAgICBieXRlYyAzNiAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUxCiAgICAvLyBzZWxmLnF1b3J1bV9zbWFsbC52YWx1ZSA9IGNvbmZpZy5xdW9ydW1bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMTM2IDI0IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDM3IC8vIDB4NzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDUyCiAgICAvLyBzZWxmLnF1b3J1bV9tZWRpdW0udmFsdWUgPSBjb25maWcucXVvcnVtWzFdLm5hdGl2ZQogICAgZHVwCiAgICBwdXNoaW50IDggLy8gOAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDM4IC8vIDB4NzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTMKICAgIC8vIHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlID0gY29uZmlnLnF1b3J1bVsyXS5uYXRpdmUKICAgIGludGNfMyAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDM5IC8vIDB4NzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDU1CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbC52YWx1ZSA9IGNvbmZpZy53ZWlnaHRlZF9xdW9ydW1bMF0ubmF0aXZlCiAgICBmcmFtZV9kaWcgLTEKICAgIGV4dHJhY3QgMTYwIDI0IC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgZHVwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDQwIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDU2CiAgICAvLyBzZWxmLndlaWdodGVkX3F1b3J1bV9tZWRpdW0udmFsdWUgPSBjb25maWcud2VpZ2h0ZWRfcXVvcnVtWzFdLm5hdGl2ZQogICAgZHVwCiAgICBwdXNoaW50IDggLy8gOAogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDQxIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2ZDY1NjQ2OTc1NmQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NTcKICAgIC8vIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlID0gY29uZmlnLndlaWdodGVkX3F1b3J1bVsyXS5uYXRpdmUKICAgIGludGNfMyAvLyAxNgogICAgZXh0cmFjdF91aW50NjQKICAgIGJ5dGVjIDQyIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY2YzYxNzI2NzY1CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnVwZGF0ZV94Z292X3JlZ2lzdHJ5KCkgLT4gdm9pZDoKdXBkYXRlX3hnb3ZfcmVnaXN0cnk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0NjkKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnN1YnNjcmliZV94Z292KHZvdGluZ19hZGRyZXNzOiBieXRlcywgcGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ3MS00NzQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc3Vic2NyaWJlX3hnb3YoCiAgICAvLyAgICAgc2VsZiwgdm90aW5nX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24KICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDg3CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ4OQogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjIDYgLy8gMHg3OAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBBbHJlYWR5IGFuIHhHb3YKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ5MC00OTEKICAgIC8vICMgY2hlY2sgcGF5bWVudAogICAgLy8gYXNzZXJ0IHNlbGYudmFsaWRfeGdvdl9wYXltZW50KHBheW1lbnQpLCBlcnIuSU5WQUxJRF9QQVlNRU5UCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgdmFsaWRfeGdvdl9wYXltZW50CiAgICBhc3NlcnQgLy8gSW52YWxpZCBwYXltZW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTMtNDk4CiAgICAvLyAjIGNyZWF0ZSBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgZnJhbWVfZGlnIC0yCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTYKICAgIC8vIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIGJ5dGVjIDE5IC8vIDB4MDAwMDAwMDAwMDAwMDAwMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDkzLTQ5OAogICAgLy8gIyBjcmVhdGUgYm94CiAgICAvLyBzZWxmLnhnb3ZfYm94W1R4bi5zZW5kZXJdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz12b3RpbmdfYWRkcmVzcywKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NDk3CiAgICAvLyBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgYnl0ZWMgMTkgLy8gMHgwMDAwMDAwMDAwMDAwMDAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTMtNDk4CiAgICAvLyAjIGNyZWF0ZSBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXZvdGluZ19hZGRyZXNzLAogICAgLy8gICAgIHZvdGVkX3Byb3Bvc2Fscz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICAgICBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgLy8gKQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTMtNDk0CiAgICAvLyAjIGNyZWF0ZSBib3gKICAgIC8vIHNlbGYueGdvdl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgYnl0ZWMgNiAvLyAweDc4CiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjQ5My00OTgKICAgIC8vICMgY3JlYXRlIGJveAogICAgLy8gc2VsZi54Z292X2JveFtUeG4uc2VuZGVyXSA9IHR5cC5YR292Qm94VmFsdWUoCiAgICAvLyAgICAgdm90aW5nX2FkZHJlc3M9dm90aW5nX2FkZHJlc3MsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo0OTkKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnl0ZWMgNSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkudW5zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzKSAtPiB2b2lkOgp1bnN1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTAxLTUwMgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiB1bnN1YnNjcmliZV94Z292KHNlbGYsIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MTMKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTE1LTUxNgogICAgLy8gIyBlbnN1cmUgdGhlIHByb3ZpZGVkIGFkZHJlc3MgaXMgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWMgNiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwbiAyCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxNy01MTgKICAgIC8vICMgZ2V0IHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gdm90aW5nX2FkZHJlc3MgPSBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLnZvdGluZ19hZGRyZXNzLm5hdGl2ZQogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICBleHRyYWN0IDAgMzIgLy8gb24gZXJyb3I6IEluZGV4IGFjY2VzcyBpcyBvdXQgb2YgYm91bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjEKICAgIC8vIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICBmcmFtZV9kaWcgLTEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBibnogdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMgogICAgZnJhbWVfZGlnIDEKICAgIHR4biBTZW5kZXIKICAgID09CiAgICBieiB1bnN1YnNjcmliZV94Z292X2Jvb2xfZmFsc2VAMwoKdW5zdWJzY3JpYmVfeGdvdl9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCgp1bnN1YnNjcmliZV94Z292X2Jvb2xfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUxOS01MjIKICAgIC8vICMgZW5zdXJlIHRoZSBzZW5kZXIgaXMgdGhlIHhHb3Ygb3IgdGhlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcy5uYXRpdmUgPT0gVHhuLnNlbmRlciBvciB2b3RpbmdfYWRkcmVzcyA9PSBUeG4uc2VuZGVyCiAgICAvLyApLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjQtNTI1CiAgICAvLyAjIGRlbGV0ZSBib3gKICAgIC8vIGRlbCBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdCiAgICBmcmFtZV9kaWcgMAogICAgYm94X2RlbAogICAgcG9wCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1MjYKICAgIC8vIHNlbGYueGdvdnMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDUgLy8gMHg3ODY3NmY3NjczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdnMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWMgNSAvLyAweDc4Njc2Zjc2NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCnVuc3Vic2NyaWJlX3hnb3ZfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIGIgdW5zdWJzY3JpYmVfeGdvdl9ib29sX21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucmVxdWVzdF9zdWJzY3JpYmVfeGdvdih4Z292X2FkZHJlc3M6IGJ5dGVzLCBvd25lcl9hZGRyZXNzOiBieXRlcywgcmVsYXRpb25fdHlwZTogYnl0ZXMsIHBheW1lbnQ6IHVpbnQ2NCkgLT4gdm9pZDoKcmVxdWVzdF9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjUyOC01MzUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgcmVxdWVzdF9zdWJzY3JpYmVfeGdvdigKICAgIC8vICAgICBzZWxmLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzczogYXJjNC5BZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHJlc3M6IGFyYzQuQWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlOiBhcmM0LlVJbnQ2NCwKICAgIC8vICAgICBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbiwKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDQgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTUwCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1Mi01NTMKICAgIC8vICMgZW5zdXJlIHRoZSB4Z292X2FkZHJlc3MgaXMgbm90IGFscmVhZHkgYW4geEdvdgogICAgLy8gYXNzZXJ0IHhnb3ZfYWRkcmVzcy5uYXRpdmUgbm90IGluIHNlbGYueGdvdl9ib3gsIGVyci5BTFJFQURZX1hHT1YKICAgIGJ5dGVjIDYgLy8gMHg3OAogICAgZnJhbWVfZGlnIC00CiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYW4geEdvdgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTU1LTU1NgogICAgLy8gIyBjaGVjayBwYXltZW50CiAgICAvLyBhc3NlcnQgc2VsZi52YWxpZF94Z292X3BheW1lbnQocGF5bWVudCksIGVyci5JTlZBTElEX1BBWU1FTlQKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiB2YWxpZF94Z292X3BheW1lbnQKICAgIGFzc2VydCAvLyBJbnZhbGlkIHBheW1lbnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU1OC01NTkKICAgIC8vICMgY3JlYXRlIHJlcXVlc3QgYm94CiAgICAvLyByaWQgPSBzZWxmLnJlcXVlc3RfaWQudmFsdWUKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxOCAvLyAweDcyNjU3MTc1NjU3Mzc0NWY2OTY0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucmVxdWVzdF9pZCBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2MC01NjQKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgLy8gICAgIHhnb3ZfYWRkcj14Z292X2FkZHJlc3MsCiAgICAvLyAgICAgb3duZXJfYWRkcj1vd25lcl9hZGRyZXNzLAogICAgLy8gICAgIHJlbGF0aW9uX3R5cGU9cmVsYXRpb25fdHlwZSwKICAgIC8vICkKICAgIGZyYW1lX2RpZyAtNAogICAgZnJhbWVfZGlnIC0zCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjAKICAgIC8vIHNlbGYucmVxdWVzdF9ib3hbcmlkXSA9IHR5cC5YR292U3Vic2NyaWJlUmVxdWVzdEJveFZhbHVlKAogICAgc3dhcAogICAgaXRvYgogICAgYnl0ZWMgNDYgLy8gMHg3MgogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjAtNTY0CiAgICAvLyBzZWxmLnJlcXVlc3RfYm94W3JpZF0gPSB0eXAuWEdvdlN1YnNjcmliZVJlcXVlc3RCb3hWYWx1ZSgKICAgIC8vICAgICB4Z292X2FkZHI9eGdvdl9hZGRyZXNzLAogICAgLy8gICAgIG93bmVyX2FkZHI9b3duZXJfYWRkcmVzcywKICAgIC8vICAgICByZWxhdGlvbl90eXBlPXJlbGF0aW9uX3R5cGUsCiAgICAvLyApCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1NjYtNTY3CiAgICAvLyAjIGluY3JlbWVudCByZXF1ZXN0IGlkCiAgICAvLyBzZWxmLnJlcXVlc3RfaWQudmFsdWUgKz0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE4IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2lkIGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjIDE4IC8vIDB4NzI2NTcxNzU2NTczNzQ1ZjY5NjQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuYXBwcm92ZV9zdWJzY3JpYmVfeGdvdihyZXF1ZXN0X2lkOiBieXRlcykgLT4gdm9pZDoKYXBwcm92ZV9zdWJzY3JpYmVfeGdvdjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU2OS01NzAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgYXBwcm92ZV9zdWJzY3JpYmVfeGdvdihzZWxmLCByZXF1ZXN0X2lkOiBhcmM0LlVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTgxCiAgICAvLyBhc3NlcnQgc2VsZi5pc194Z292X3N1YnNjcmliZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc194Z292X3N1YnNjcmliZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4My01ODQKICAgIC8vICMgZ2V0IHRoZSByZXF1ZXN0CiAgICAvLyByZXF1ZXN0ID0gc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0uY29weSgpCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGl0b2IKICAgIGJ5dGVjIDQ2IC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZXF1ZXN0X2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4NwogICAgLy8gdm90aW5nX2FkZHJlc3M9cmVxdWVzdC5vd25lcl9hZGRyLAogICAgZHVwCiAgICBleHRyYWN0IDMyIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTg4CiAgICAvLyB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICBieXRlYyAxOSAvLyAweDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4NS01OTAKICAgIC8vICMgY3JlYXRlIHRoZSB4R292CiAgICAvLyBzZWxmLnhnb3ZfYm94W3JlcXVlc3QueGdvdl9hZGRyLm5hdGl2ZV0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXJlcXVlc3Qub3duZXJfYWRkciwKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTg5CiAgICAvLyBsYXN0X3ZvdGVfdGltZXN0YW1wPWFyYzQuVUludDY0KDApLAogICAgYnl0ZWMgMTkgLy8gMHgwMDAwMDAwMDAwMDAwMDAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo1ODUtNTkwCiAgICAvLyAjIGNyZWF0ZSB0aGUgeEdvdgogICAgLy8gc2VsZi54Z292X2JveFtyZXF1ZXN0Lnhnb3ZfYWRkci5uYXRpdmVdID0gdHlwLlhHb3ZCb3hWYWx1ZSgKICAgIC8vICAgICB2b3RpbmdfYWRkcmVzcz1yZXF1ZXN0Lm93bmVyX2FkZHIsCiAgICAvLyAgICAgdm90ZWRfcHJvcG9zYWxzPWFyYzQuVUludDY0KDApLAogICAgLy8gICAgIGxhc3Rfdm90ZV90aW1lc3RhbXA9YXJjNC5VSW50NjQoMCksCiAgICAvLyApCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4NS01ODYKICAgIC8vICMgY3JlYXRlIHRoZSB4R292CiAgICAvLyBzZWxmLnhnb3ZfYm94W3JlcXVlc3QueGdvdl9hZGRyLm5hdGl2ZV0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgYnl0ZWMgNiAvLyAweDc4CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU4NS01OTAKICAgIC8vICMgY3JlYXRlIHRoZSB4R292CiAgICAvLyBzZWxmLnhnb3ZfYm94W3JlcXVlc3QueGdvdl9hZGRyLm5hdGl2ZV0gPSB0eXAuWEdvdkJveFZhbHVlKAogICAgLy8gICAgIHZvdGluZ19hZGRyZXNzPXJlcXVlc3Qub3duZXJfYWRkciwKICAgIC8vICAgICB2b3RlZF9wcm9wb3NhbHM9YXJjNC5VSW50NjQoMCksCiAgICAvLyAgICAgbGFzdF92b3RlX3RpbWVzdGFtcD1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU5MQogICAgLy8gc2VsZi54Z292cy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNSAvLyAweDc4Njc2Zjc2NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292cyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlYyA1IC8vIDB4Nzg2NzZmNzY3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjU5Mi01OTMKICAgIC8vICMgZGVsZXRlIHRoZSByZXF1ZXN0CiAgICAvLyBkZWwgc2VsZi5yZXF1ZXN0X2JveFtyZXF1ZXN0X2lkLm5hdGl2ZV0KICAgIGJveF9kZWwKICAgIHBvcAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnJlamVjdF9zdWJzY3JpYmVfeGdvdihyZXF1ZXN0X2lkOiBieXRlcykgLT4gdm9pZDoKcmVqZWN0X3N1YnNjcmliZV94Z292OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NTk1LTU5NgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiByZWplY3Rfc3Vic2NyaWJlX3hnb3Yoc2VsZiwgcmVxdWVzdF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYwNwogICAgLy8gYXNzZXJ0IHNlbGYuaXNfeGdvdl9zdWJzY3JpYmVyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfeGdvdl9zdWJzY3JpYmVyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MDktNjEwCiAgICAvLyAjIGRlbGV0ZSB0aGUgcmVxdWVzdAogICAgLy8gZGVsIHNlbGYucmVxdWVzdF9ib3hbcmVxdWVzdF9pZC5uYXRpdmVdCiAgICBmcmFtZV9kaWcgLTEKICAgIGJ0b2kKICAgIGl0b2IKICAgIGJ5dGVjIDQ2IC8vIDB4NzIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgYm94X2RlbAogICAgcG9wCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuc2V0X3ZvdGluZ19hY2NvdW50KHhnb3ZfYWRkcmVzczogYnl0ZXMsIHZvdGluZ19hZGRyZXNzOiBieXRlcykgLT4gdm9pZDoKc2V0X3ZvdGluZ19hY2NvdW50OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjEyLTYxNQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBzZXRfdm90aW5nX2FjY291bnQoCiAgICAvLyAgICAgc2VsZiwgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsIHZvdGluZ19hZGRyZXNzOiBhcmM0LkFkZHJlc3MKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjI3CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjYyOS02MzAKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHNlbmRlciBpcyBhbiB4R292IG1lbWJlcgogICAgLy8gZXhpc3RzID0geGdvdl9hZGRyZXNzLm5hdGl2ZSBpbiBzZWxmLnhnb3ZfYm94CiAgICBieXRlYyA2IC8vIDB4NzgKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBkdXBuIDIKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjMxCiAgICAvLyBhc3NlcnQgZXhpc3RzLCBlcnIuVU5BVVRIT1JJWkVECiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2MzIKICAgIC8vIHhnb3ZfYm94ID0gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5jb3B5KCkKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjM2CiAgICAvLyBUeG4uc2VuZGVyID09IHhnb3ZfYm94LnZvdGluZ19hZGRyZXNzLm5hdGl2ZSBvciBUeG4uc2VuZGVyID09IHhnb3ZfYWRkcmVzcwogICAgdHhuIFNlbmRlcgogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgPT0KICAgIGJueiBzZXRfdm90aW5nX2FjY291bnRfYm9vbF90cnVlQDIKICAgIGZyYW1lX2RpZyAtMgogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGJ6IHNldF92b3RpbmdfYWNjb3VudF9ib29sX2ZhbHNlQDMKCnNldF92b3RpbmdfYWNjb3VudF9ib29sX3RydWVAMjoKICAgIGludGNfMSAvLyAxCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjM0LTYzNwogICAgLy8gIyBDaGVjayB0aGF0IHRoZSBzZW5kZXIgaXMgZWl0aGVyIHRoZSB4R292IG9yIHRoZSB2b3RpbmcgYWRkcmVzcwogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBUeG4uc2VuZGVyID09IHhnb3ZfYm94LnZvdGluZ19hZGRyZXNzLm5hdGl2ZSBvciBUeG4uc2VuZGVyID09IHhnb3ZfYWRkcmVzcwogICAgLy8gKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjM5LTY0MAogICAgLy8gIyBVcGRhdGUgdGhlIHZvdGluZyBhY2NvdW50IGluIHRoZSB4R292IGJveAogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS52b3RpbmdfYWRkcmVzcyA9IHZvdGluZ19hZGRyZXNzCiAgICBmcmFtZV9kaWcgMAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2JveCBlbnRyeSBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgcmVwbGFjZTIgMAogICAgYm94X3B1dAogICAgcmV0c3ViCgpzZXRfdm90aW5nX2FjY291bnRfYm9vbF9mYWxzZUAzOgogICAgaW50Y18wIC8vIDAKICAgIGIgc2V0X3ZvdGluZ19hY2NvdW50X2Jvb2xfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5zdWJzY3JpYmVfcHJvcG9zZXIocGF5bWVudDogdWludDY0KSAtPiB2b2lkOgpzdWJzY3JpYmVfcHJvcG9zZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NDItNjQzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHN1YnNjcmliZV9wcm9wb3NlcihzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU2CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY1OAogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgbm90IGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuQUxSRUFEWV9QUk9QT1NFUgogICAgYnl0ZWNfMiAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgIQogICAgYXNzZXJ0IC8vIEFscmVhZHkgYSBwcm9wb3NlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjYxCiAgICAvLyBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgUmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjU5LTY2MgogICAgLy8gIyBjaGVjayBmZWUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICAvLyApLCBlcnIuV1JPTkdfUkVDRUlWRVIKICAgIGFzc2VydCAvLyBXcm9uZyBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NjYzCiAgICAvLyBhc3NlcnQgcGF5bWVudC5hbW91bnQgPT0gc2VsZi5wcm9wb3Nlcl9mZWUudmFsdWUsIGVyci5XUk9OR19QQVlNRU5UX0FNT1VOVAogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNyAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2ZlZSBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgcGF5bWVudCBhbW91bnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY2NQogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbVHhuLnNlbmRlcl0gPSB0eXAuUHJvcG9zZXJCb3hWYWx1ZSgKICAgIGJ5dGVjXzIgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2NjUtNjY5CiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtUeG4uc2VuZGVyXSA9IHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgLy8gICAgIGFjdGl2ZV9wcm9wb3NhbD1hcmM0LkJvb2woRmFsc2UpLCAgIyBub3FhOiBGQlQwMDMKICAgIC8vICAgICBreWNfc3RhdHVzPWFyYzQuQm9vbChGYWxzZSksICAjIG5vcWE6IEZCVDAwMwogICAgLy8gICAgIGt5Y19leHBpcmluZz1hcmM0LlVJbnQ2NCgwKSwKICAgIC8vICkKICAgIHB1c2hieXRlcyAweDAwMDAwMDAwMDAwMDAwMDAwMAogICAgYm94X3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnNldF9wcm9wb3Nlcl9reWMocHJvcG9zZXI6IGJ5dGVzLCBreWNfc3RhdHVzOiBieXRlcywga3ljX2V4cGlyaW5nOiBieXRlcykgLT4gdm9pZDoKc2V0X3Byb3Bvc2VyX2t5YzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY3MS02NzQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgc2V0X3Byb3Bvc2VyX2t5YygKICAgIC8vICAgICBzZWxmLCBwcm9wb3NlcjogYXJjNC5BZGRyZXNzLCBreWNfc3RhdHVzOiBhcmM0LkJvb2wsIGt5Y19leHBpcmluZzogYXJjNC5VSW50NjQKICAgIC8vICkgLT4gTm9uZToKICAgIHByb3RvIDMgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njg4LTY4OQogICAgLy8gIyBjaGVjayBpZiBreWMgcHJvdmlkZXIKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHNlbGYua3ljX3Byb3ZpZGVyLnZhbHVlLm5hdGl2ZSwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEzIC8vIDB4NmI3OTYzNWY3MDcyNmY3NjY5NjQ2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYua3ljX3Byb3ZpZGVyIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjY5MAogICAgLy8gYXNzZXJ0IHByb3Bvc2VyLm5hdGl2ZSBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlBST1BPU0VSX0RPRVNfTk9UX0VYSVNUCiAgICBieXRlY18yIC8vIDB4NzAKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFByb3Bvc2VyIGRvZXMgbm90IGV4aXN0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo2OTIKICAgIC8vIGFjdGl2ZV9wcm9wb3NhbCA9IHNlbGYucHJvcG9zZXJfYm94W3Byb3Bvc2VyLm5hdGl2ZV0uY29weSgpLmFjdGl2ZV9wcm9wb3NhbAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Njk0LTY5OAogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXSA9IHR5cC5Qcm9wb3NlckJveFZhbHVlKAogICAgLy8gICAgIGFjdGl2ZV9wcm9wb3NhbD1hY3RpdmVfcHJvcG9zYWwsCiAgICAvLyAgICAga3ljX3N0YXR1cz1reWNfc3RhdHVzLAogICAgLy8gICAgIGt5Y19leHBpcmluZz1reWNfZXhwaXJpbmcsCiAgICAvLyApCiAgICBmcmFtZV9kaWcgLTIKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGludGNfMSAvLyAxCiAgICBzd2FwCiAgICBzZXRiaXQKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBib3hfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVjbGFyZV9jb21taXR0ZWUoY29tbWl0dGVlX2lkOiBieXRlcywgc2l6ZTogYnl0ZXMsIHZvdGVzOiBieXRlcykgLT4gdm9pZDoKZGVjbGFyZV9jb21taXR0ZWU6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MDAtNzAzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRlY2xhcmVfY29tbWl0dGVlKAogICAgLy8gICAgIHNlbGYsIGNvbW1pdHRlZV9pZDogY3R5cC5CeXRlczMyLCBzaXplOiBhcmM0LlVJbnQ2NCwgdm90ZXM6IGFyYzQuVUludDY0CiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byAzIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjE4NQogICAgLy8gcmV0dXJuIFR4bi5zZW5kZXIgPT0gc2VsZi5jb21taXR0ZWVfbWFuYWdlci52YWx1ZS5uYXRpdmUKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2MTZlNjE2NzY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfbWFuYWdlciBleGlzdHMKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3MTgKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfY29tbWl0dGVlX21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzIxCiAgICAvLyBzaXplLm5hdGl2ZSA8PSBzZWxmLm1heF9jb21taXR0ZWVfc2l6ZS52YWx1ZQogICAgZnJhbWVfZGlnIC0yCiAgICBidG9pCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDUgLy8gMHg2ZDYxNzg1ZjYzNmY2ZDZkNjk3NDc0NjU2NTVmNzM2OTdhNjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tYXhfY29tbWl0dGVlX3NpemUgZXhpc3RzCiAgICBkaWcgMQogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyMC03MjIKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgc2l6ZS5uYXRpdmUgPD0gc2VsZi5tYXhfY29tbWl0dGVlX3NpemUudmFsdWUKICAgIC8vICksIGVyci5DT01NSVRURUVfU0laRV9UT09fTEFSR0UKICAgIGFzc2VydCAvLyBDb21taXR0ZWUgc2l6ZSBpcyB0b28gbGFyZ2UKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyNAogICAgLy8gc2VsZi5jb21taXR0ZWVfaWQudmFsdWUgPSBjb21taXR0ZWVfaWQuY29weSgpCiAgICBieXRlYyA0OCAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNjk2NAogICAgZnJhbWVfZGlnIC0zCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzI1CiAgICAvLyBzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlID0gc2l6ZS5uYXRpdmUKICAgIGJ5dGVjIDQzIC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDY1NmQ2MjY1NzI3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyNgogICAgLy8gc2VsZi5jb21taXR0ZWVfdm90ZXMudmFsdWUgPSB2b3Rlcy5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgYnl0ZWMgNDQgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkub3Blbl9wcm9wb3NhbChwYXltZW50OiB1aW50NjQpIC0+IHVpbnQ2NDoKb3Blbl9wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjcyOC03MjkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZAogICAgLy8gZGVmIG9wZW5fcHJvcG9zYWwoc2VsZiwgcGF5bWVudDogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IFVJbnQ2NDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzQ1CiAgICAvLyBhc3NlcnQgbm90IHNlbGYucGF1c2VkX3JlZ2lzdHJ5LnZhbHVlLCBlcnIuUEFVU0VEX1JFR0lTVFJZCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDcwNjE3NTczNjU2NDVmNzI2NTY3Njk3Mzc0NzI3OQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnBhdXNlZF9yZWdpc3RyeSBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBSZWdpc3RyeSdzIG5vbi1hZG1pbiBtZXRob2RzIGFyZSBwYXVzZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc0NgogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUsIGVyci5QQVVTRURfUFJPUE9TQUxTCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgOSAvLyAweDcwNjE3NTczNjU2NDVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3Byb3Bvc2FscyBleGlzdHMKICAgICEKICAgIGFzc2VydCAvLyBDcmVhdGlvbiBvZiBwcm9wb3NhbHMgaXMgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NDgtNzQ5CiAgICAvLyAjIENoZWNrIGlmIHRoZSBjYWxsZXIgaXMgYSByZWdpc3RlcmVkIHByb3Bvc2VyCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBpbiBzZWxmLnByb3Bvc2VyX2JveCwgZXJyLlVOQVVUSE9SSVpFRAogICAgYnl0ZWNfMiAvLyAweDcwCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzUxLTc1MgogICAgLy8gIyBDaGVjayBpZiB0aGUgcHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgbm90IHNlbGYucHJvcG9zZXJfYm94WwogICAgYnl0ZWNfMiAvLyAweDcwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTMKICAgIC8vIFR4bi5zZW5kZXIKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1MS03NTQKICAgIC8vICMgQ2hlY2sgaWYgdGhlIHByb3Bvc2VyIGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBwcm9wb3NhbAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnByb3Bvc2VyX2JveFsKICAgIC8vICAgICBUeG4uc2VuZGVyCiAgICAvLyBdLmFjdGl2ZV9wcm9wb3NhbCwgZXJyLkFMUkVBRFlfQUNUSVZFX1BST1BPU0FMCiAgICBjb25jYXQKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIGJ5dGVjIDggLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBieXRlYyA4IC8vIDB4MDAKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zZXIgYWxyZWFkeSBoYXMgYW4gYWN0aXZlIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTUKICAgIC8vIGFzc2VydCBzZWxmLnZhbGlkX2t5YyhUeG4uc2VuZGVyKSwgZXJyLklOVkFMSURfS1lDCiAgICB0eG4gU2VuZGVyCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NTcKICAgIC8vIGFzc2VydCBUeG4uZmVlID49IChHbG9iYWwubWluX3R4bl9mZWUgKiAzKSwgZXJyLklOU1VGRklDSUVOVF9GRUUKICAgIHR4biBGZWUKICAgIGdsb2JhbCBNaW5UeG5GZWUKICAgIHB1c2hpbnQgMyAvLyAzCiAgICAqCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc2MQogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc1OS03NjIKICAgIC8vICMgRW5zdXJlIHRoZSB0cmFuc2FjdGlvbiBoYXMgdGhlIGNvcnJlY3QgcGF5bWVudAogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjMKICAgIC8vIGFzc2VydCBwYXltZW50LmFtb3VudCA9PSBzZWxmLm9wZW5fcHJvcG9zYWxfZmVlLnZhbHVlLCBlcnIuV1JPTkdfUEFZTUVOVF9BTU9VTlQKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTAgLy8gMHg2ZjcwNjU2ZTVmNzA3MjZmNzA2ZjczNjE2YzVmNjY2NTY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3Blbl9wcm9wb3NhbF9mZWUgZXhpc3RzCiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIHBheW1lbnQgYW1vdW50CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NjUKICAgIC8vIG1icl9iZWZvcmUgPSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLmJhbGFuY2UKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBhY2N0X3BhcmFtc19nZXQgQWNjdEJhbGFuY2UKICAgIGFzc2VydCAvLyBhY2NvdW50IGZ1bmRlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzY3LTc2OAogICAgLy8gIyBDcmVhdGUgdGhlIFByb3Bvc2FsIEFwcAogICAgLy8gcmVzID0gYXJjNC5hcmM0X2NyZWF0ZShwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbCwgVHhuLnNlbmRlcikKICAgIGl0eG5fYmVnaW4KICAgIHR4biBTZW5kZXIKICAgIHB1c2hpbnQgMTggLy8gMTgKICAgIGl0eG5fZmllbGQgR2xvYmFsTnVtVWludAogICAgcHVzaGludCAzIC8vIDMKICAgIGl0eG5fZmllbGQgR2xvYmFsTnVtQnl0ZVNsaWNlCiAgICBpbnRjXzEgLy8gMQogICAgaXR4bl9maWVsZCBFeHRyYVByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIGJhc2U2NChDb0VCUXc9PSkKICAgIGl0eG5fZmllbGQgQ2xlYXJTdGF0ZVByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIGJhc2U2NChDaUFGQUFFS0ZKQk9KaDBDQUFBR2MzUmhkSFZ6QUFod2NtOXdiM05sY2hCbWRXNWthVzVuWDJOaGRHVm5iM0o1QVUwUGNtVm5hWE4wY25sZllYQndYMmxrRVdOdmJXMXBkSFJsWlY5dFpXMWlaWEp6REhadmRHVnljMTlqYjNWdWRBOWpiMjF0YVhSMFpXVmZkbTkwWlhNTmRtOTBaV1JmYldWdFltVnljd2xoY0hCeWIzWmhiSE1LY21WcVpXTjBhVzl1Y3c1aGMzTnBaMjVsWkY5MmIzUmxjdzFzYjJOclpXUmZZVzF2ZFc1MEJXNTFiR3h6QkJVZmZIVVVjM1ZpYldsemMybHZibDkwYVcxbGMzUmhiWEFXZG05MFpWOXZjR1Z1YVc1blgzUnBiV1Z6ZEdGdGNBeGpiMjF0YVhSMFpXVmZhV1FCQUJzQUdVVlNVanBYY205dVp5QlFjbTl3YjNOaGJDQlRkR0YwZFhNRmRHbDBiR1VXWm1sdVlXeHBlbUYwYVc5dVgzUnBiV1Z6ZEdGdGNBVm1iMk4xY3d4bWRXNWthVzVuWDNSNWNHVVFjbVZ4ZFdWemRHVmtYMkZ0YjNWdWRBRldDM2huYjNaZlpHRmxiVzl1TVJoQUFHY3hOWUVERWtReE5JRVNFa1F4TnhSRU1UWVVSQ3N5QTJjbkJpSm5KeFlxWnljUkltY25GeUpuSnhJaVp5a2laeWNFSW1jbkdDSm5KeGtpWnljYUltY25EaUpuSnhNcVp5Y0hJbWNuQ1NKbkp3b2laeWNMSW1jbkRDSm5KdzhpWnljSUltY25EU0puTVJ0QkFIQ0NEd1RNYVU2cUJCN0RoVDhFY1VPWlR3UnpjVElhQkNQWXQ4NEVEWnF3MXdRWVFhRFNCSE5OdnN3RUlTMmZCd1NLWGt5QUJDckJtd1VFYWV6MG9nUWtONDA4Qkpwd1ovb0UyOWc5MlRZYUFJNFBBUElBMEFDK0FLMEFvUUNTQUhnQWJBQmJBRW9BT3dBcUFCd0FDd0FDSWtNeEdSUkVNUmhFSTBNeEdSUkVNUmhFaUFxZUp4Qk1VTEFqUXpFWmdRVVNSREVZUklnS2ZpTkRNUmtVUkRFWVJJZ0p3Q2NRVEZDd0kwTXhHUlJFTVJoRU5ob0JpQWozSTBNeEdSUkVNUmhFaUFpMkp4Qk1VTEFqUXpFWkZFUXhHRVEyR2dFaVU0Z0lZQ05ETVJrVVJERVlSSWdHOXlORE1Sa1VSREVZUkRZYUFUWWFBallhQTRnRmtTY1FURkN3STBNeEdSUkVNUmhFTmhvQmlBVEhJME14R1JSRU1SaEVpQVBFSTBNeEdSUkVNUmhFaUFPQUp4Qk1VTEFqUXpFWkZFUXhHRVEyR2dFMkdnS0lBeW9qUXpFWkZFUXhHRVF4RmlNSlNUZ1FJeEpFTmhvQk5ob0NOaG9ETmhvRWlBSFVJME14R1JSRU1SZ1VSRFlhQVlnQmlTTkRpZ0FDSWlveUJ5SW5FbVZFQ1NJbkJHVk1TVThDUkNRU1FRQTRnQlYyYjNScGJtZGZaSFZ5WVhScGIyNWZjMjFoYkd5SUFKMk1BSXdCaXdBb0UwRUFDQ0tMQUl3QmpBQ0ppd0tMQVE0b2pBR01BSW1MQXlVU1FRQWlnQloyYjNScGJtZGZaSFZ5WVhScGIyNWZiV1ZrYVhWdGlBQmRqQUNNQVVML3ZZQVZkbTkwYVc1blgyUjFjbUYwYVc5dVgyeGhjbWRsaUFBOGpBQ01BVUwvbklnQWlrUWlLV1ZFSkJKRWlZb0JBWUFYY0hKdmNHOXpZV3hmWTI5dGJXbDBiV1Z1ZEY5aWNIT0lBQW9vRWtTTC93c2hCQXFKaWdFQ0lpY0daVVNMLzJVb1RFQUFHSUFVQUJKRlVsSTZUV2x6YzJsdVp5QkRiMjVtYVdlTUFZc0Fpd0ZQQTA4RGlZb0JBU0luQm1WRWkvOWxSSW1BRDNCaGRYTmxaRjl5WldkcGMzUnllWWovcmlnU1JCUkVpVEVBSWl0bFJCS0pNUUFuSElqL3lra1ZnU0FTUkJLSk1nMGlKd1psUkJLSmlnSUFzWXYvc2dpTC9ySUhJN0lRSXJJQnM0bUtBUUFpSnc1bFJJdi9USWovM2ljT0ltZUppZ0VBaS84NEdESUlFa1NML3prYUFEWWFBQkpFaVlvQkFESU5SQ3VMLzJjbkJqSU5aeWNUaVA5b1NTb1RSQ2NIaVA4dUtCSkVTVVFuQ1lqL0pDZ1NSRWxFSnhOUEEyY25CMDhDWnljSlRHZUppZ1VBS29qL1I0ai9Ya1FpS1dWRUZFU0wvRmNDQUl6OGkvMFhTWXYrRjB5TC9CV0JldzVFaS93cUUwUWtFa0FBQjRzQkpSSkJBUGdqUklBVWJXbHVYM0psY1hWbGMzUmxaRjloYlc5MWJuU0kvcjBvRWtTQUdtMWhlRjl5WlhGMVpYTjBaV1JmWVcxdmRXNTBYMnhoY21kbGlQNmJLQkpFaXdKSlR3TVBSRWxQQWc1RVNZaitYNHY3T0FBaUsyVkVFa1NMK3pnSE1nb1NSSXY3T0FnU1JDY1dpL3huZ0JwdFlYaGZjbVZ4ZFdWemRHVmtYMkZ0YjNWdWRGOXpiV0ZzYklqK1RDZ1NSSUFiYldGNFgzSmxjWFZsYzNSbFpGOWhiVzkxYm5SZmJXVmthWFZ0aVA0cFRJd0FLQkpFRGtFQUtDY0VKR2NuR1lzQlp5Y2Fpd0pKVGdKbmkvOFhKeGhNWjRqOTJ5Y09UR2NuRVRJSFp5a2taNG1MQW9zQURrRUFCeWNFSldkQy84MG5CSUVoWjBML3hTSkMvd1dLQWdDSS9oU0kvWjZML2lKWlNVU0wveWNVRTBFQURpY0Z2RWlML2xjQ0FDY0ZUTCtKSndXOVJDY0Z2VVNMQUFnbkJVelRpLzVYQWdBbkJVNEN1NG1LQUFFaWlQNEZSQ0lwWlVRa0UwRUFJU2NWakFDTEFDZ1RRUUFFaXdCTWlTSXJaVVNJL2dJbkJieElLWUZHWnloTWlTaU1BRUwvM1lvQUFDS0kvWnlJL1NZeUJ5SW5FV1ZFQ1NJbkJHVk1TVThDUkNRU1FRQ0pnQmxrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDNOdFlXeHNpUDBuakFDTEFDZ1NSSXNCRGtRcEpXY25GeklIWjRBUmIzQmxibDl3Y205d2IzTmhiRjltWldXSS9QNG9Fa1FuQmIxRkFVU0FIR1JoWlcxdmJsOXZjR1Z5WVhScGIyNWZablZ1WkdsdVoxOWljSE9JL05Rb0VrUW5ISWo4L1VrVmdTQVNSRTRDQ3lFRUNvajlOWW1MQWlVU1FRQWtnQnBrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDIxbFpHbDFiWWo4bG93QVF2OXNnQmxrYVhOamRYTnphVzl1WDJSMWNtRjBhVzl1WDJ4aGNtZGxpUHh6akFCQy8wbUtBUUFxUndLSS9NVkVJaWxsUkNVU1JERVdRQUNaTWdTTUFTT01BSXNBaXdFTVFRQU5pd0JKaVB6aUl3aU1BRUwvNjR2L0lsbU1BaUtNQUlzQWl3SU1RUUJyaS85WEFnQ0xBSUVvQzRFb1dFbFhBQ0JNZ1NCYkp4dFBBbEJKdlVVQkZFUkxBVVJMQVJZbkZGQy9JaWNJWlVRakNDY0lUR2NpSncxbFJBZ25EVXhuSWljSVpVUWlKd2RsUkJKQkFCVWlKdzFsUkNJbkNXVkVFa1FwZ1Jsbkp4SXlCMmVMQUNNSWpBQkMvNDJKSW9qOFdrTC9mSW9EQVNKSEFpcEhBb2o4RzBRaUtXVkVnUmtUUVFEK0p4V01BSXNBS0JOQkFBR0ppLzRYakFPTC94ZU1CU2NiaS8xUVNZd0J2VVVCUUFCeGdCVUFFMFZTVWpwV2IzUmxjaUJ1YjNRZ1ptOTFibVNNQUlzQUtCTkJBQUdKaXdGSnZrUkpWd0FJZ0FHQVVFOENUTDhpSndwbFJDTUlKd3BNWnlKYml3TkpUZ0lKaXdWSlRnTUpJaWNMWlVSUEFnZ25DMHhuSWljTVpVUlBBZ2duREV4bklpY1BaVVFJSnc5TVp5aU1BSW1MQWI1TVNVNENqQUpFZ1VCVEp4UWlUd0pVSnhRVFFRQWdnQmtBRjBWU1VqcFdiM1JsY2lCaGJISmxZV1I1SUhadmRHVmtqQUJDLzIrTEFsY0FDSXNEaXdVSUZxUkJBQnVBRkFBU1JWSlNPbFp2ZEdWeklHVjRZMlZsWkdWa2pBQkMvMFVvakFCQy96K0krYzVKVGdLTUFJd0VLQk5BL3ZlTEJFQUFJb0FiQUJsRlVsSTZWbTkwYVc1bklGQmxjbWx2WkNCRmVIQnBjbVZrakFCQy90QW9qQUJDL3NxS0FBQWlLa2NEaVBxYklpbGxSSUVaRWtTSStZQW9Fa1JCQUE0aUp3cGxSQ0luQjJWRUVrRUJNQ05FSWljRVpVeEpUZ0tNQVVRa0VrRUE2b0FNY1hWdmNuVnRYM050WVd4c2lQb2JqQUNMQUNnU1JDSW5CMlZFQ3lFRUNvd0NJaWNFWlV4SlRnS01BVVFrRWtFQWNZQVZkMlZwWjJoMFpXUmZjWFZ2Y25WdFgzTnRZV3hzaVBuZmpBQ0xBQ2dTUkNJbkMyVkVJaWNNWlVRSUlpY1BaVVFJakFRaUp3bGxSQXNoQkFxTUF5SW5DbVZFaXdJUFFRQWJpd1NMQXc5QkFCTWlKd3RsUkNJbkRHVkVEVUVBQlNtQkhtZUpLWUVvWnlJclpVU0kraFdKaXdFbEVrRUFJSUFXZDJWcFoyaDBaV1JmY1hWdmNuVnRYMjFsWkdsMWJZajVab3dBUXYrRWdCVjNaV2xuYUhSbFpGOXhkVzl5ZFcxZmJHRnlaMldJK1VlTUFFTC9aWXNCSlJKQkFCZUFEWEYxYjNKMWJWOXRaV1JwZFcySStTbU1BRUwvQzRBTWNYVnZjblZ0WDJ4aGNtZGxpUGtUakFCQy92VWlRdjdOaWdFQU1RQ0FESGhuYjNaZlkyOTFibU5wYklqNUpVa1ZnU0FTUkJKRUlpbGxSSUVlRWtTTC8wRUFFQ21CUEdjaUp3WmxSSElJUklqNVhJa3BnUzFuaVlvQUFTS0krVEpFSWlsbFJJRXRFMEVBSFNjVmpBQ0xBQ2dUUVFBRWl3Qk1pU21CTW1jaUsyVkVpUGtxS0V5SktJd0FRdi9oaWdFQUlpcEhBNGo0NjBRaUtXVkVnVElTUUFBZElpbGxSSUU4RWtBQUV5SXBaVVNCS0JKQUFBa2lLV1ZFSlJKQkFIOGpSREVXUUFCeE1nU01CQ09NQW9zQ2l3UU1RUUFOaXdKSmlQam1Jd2lNQWtMLzY0di9JbG1NQVNLTUE0c0Rpd0VNUVFCRGkvOVhBZ0NMQTRFZ0M0RWdXQ2NiVEZCSmpBQzlSUUZCQUNBaUp3aGxSQ01KSndoTVp5SW5EV1ZFaXdCSlRnSytSQ0piQ1NjTlRHZThTSXNESXdpTUEwTC90WWtpaVBpR1F2K2tJa0wvZm9vQUFTS0krRWhFSWlsbFJFRUFuU0lwWlVRa0UwRUFsQ0lwWlVTQk1oTkJBSW9pS1dWRWdUd1RRUUNBSWlsbFJJRW9FMEVBZGljVmpBQ0xBQ2dUUVFBRWl3Qk1pU0luQ0dWRVFRQTBnREFBTGtWU1VqcFVhR1Z5WlNCaGNtVWdkbTkwWlhKeklHRnpjMmxuYm1Wa0lIUnZJSFJvYVhNZ2NISnZjRzl6WVd4TWlTY0Z2RWdpS1dWRUpCSkJBQWNpSzJWRWlQZlhJaWNHWlVSeUNFUXlDbk1BUklqM3N5bUJSbWNvVElrb2pBQkMvNGlJOTR0RUlpbGxSSUZHRWtTSklpdGxSQ0luQm1WRUZpSW5GbVZFU1JVV1Z3WUNURkFpSnhGbFJCWWlKeGRsUkJZaUp4SmxSQllpS1dWRUZpSW5CR1ZFRmlJbkdHVkVGa21UZ1FnT1JGY0hBU0luR1dWRUZpSW5HbVZFRmlJbkRtVkVGaUluRTJWRUlpY0haVVFXSWljSlpVUVdJaWNLWlVRV0lpY0xaVVFXSWljTVpVUVdJaWNQWlVRV1R4SlBFbENBQWdDN1VFOFFVRThQVUU4T1VFOE5VRThNVUU4TFVFOEtVRThKVUU4SVVFOEhVRThHVUU4RlVFOEVVRThEVUU4Q1VFeFFURkNKKQogICAgaXR4bl9maWVsZCBBcHByb3ZhbFByb2dyYW1QYWdlcwogICAgcHVzaGJ5dGVzIDB4Y2M2OTRlYWEgLy8gbWV0aG9kICJjcmVhdGUoYWRkcmVzcyl2b2lkIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBDcmVhdGVkQXBwbGljYXRpb25JRAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzcwCiAgICAvLyBtYnJfYWZ0ZXIgPSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLmJhbGFuY2UKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBhY2N0X3BhcmFtc19nZXQgQWNjdEJhbGFuY2UKICAgIGFzc2VydCAvLyBhY2NvdW50IGZ1bmRlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6NzcyLTc3MwogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIgc3RhdGUKICAgIC8vIHNlbGYucHJvcG9zZXJfYm94W1R4bi5zZW5kZXJdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbChUcnVlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzIgLy8gMHg3MAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIGludGNfMCAvLyAwCiAgICBpbnRjXzEgLy8gMQogICAgc2V0Yml0CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzUtNzgwCiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwLCBleGNsdWRpbmcgdGhlIE1CUiBuZWVkZWQgZm9yIHRoZSBQcm9wb3NhbCBBcHAKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1yZXMuY3JlYXRlZF9hcHAuYWRkcmVzcywKICAgIC8vICAgICBhbW91bnQ9c2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZS52YWx1ZSAtIChtYnJfYWZ0ZXIgLSBtYnJfYmVmb3JlKSwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc3NwogICAgLy8gcmVjZWl2ZXI9cmVzLmNyZWF0ZWRfYXBwLmFkZHJlc3MsCiAgICBkaWcgMQogICAgYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzc4CiAgICAvLyBhbW91bnQ9c2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZS52YWx1ZSAtIChtYnJfYWZ0ZXIgLSBtYnJfYmVmb3JlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxMCAvLyAweDZmNzA2NTZlNWY3MDcyNmY3MDZmNzM2MTZjNWY2NjY1NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZSBleGlzdHMKICAgIHVuY292ZXIgMgogICAgdW5jb3ZlciA0CiAgICAtCiAgICAtCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6Nzc1LTc3NgogICAgLy8gIyBUcmFuc2ZlciBmdW5kcyB0byB0aGUgbmV3IFByb3Bvc2FsIEFwcCwgZXhjbHVkaW5nIHRoZSBNQlIgbmVlZGVkIGZvciB0aGUgUHJvcG9zYWwgQXBwCiAgICAvLyBpdHhuLlBheW1lbnQoCiAgICBpbnRjXzEgLy8gcGF5CiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzkKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3NzUtNzgwCiAgICAvLyAjIFRyYW5zZmVyIGZ1bmRzIHRvIHRoZSBuZXcgUHJvcG9zYWwgQXBwLCBleGNsdWRpbmcgdGhlIE1CUiBuZWVkZWQgZm9yIHRoZSBQcm9wb3NhbCBBcHAKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1yZXMuY3JlYXRlZF9hcHAuYWRkcmVzcywKICAgIC8vICAgICBhbW91bnQ9c2VsZi5vcGVuX3Byb3Bvc2FsX2ZlZS52YWx1ZSAtIChtYnJfYWZ0ZXIgLSBtYnJfYmVmb3JlKSwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODItNzgzCiAgICAvLyAjIEluY3JlbWVudCBwZW5kaW5nIHByb3Bvc2FscwogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSArPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBieXRlY18zIC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojc4NQogICAgLy8gcmV0dXJuIHJlcy5jcmVhdGVkX2FwcC5pZAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLnhnb3ZfcmVnaXN0cnkuY29udHJhY3QuWEdvdlJlZ2lzdHJ5LnZvdGVfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzLCB4Z292X2FkZHJlc3M6IGJ5dGVzLCBhcHByb3ZhbF92b3RlczogYnl0ZXMsIHJlamVjdGlvbl92b3RlczogYnl0ZXMpIC0+IHZvaWQ6CnZvdGVfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo3ODctNzk0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHZvdGVfcHJvcG9zYWwoCiAgICAvLyAgICAgc2VsZiwKICAgIC8vICAgICBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQsCiAgICAvLyAgICAgeGdvdl9hZGRyZXNzOiBhcmM0LkFkZHJlc3MsCiAgICAvLyAgICAgYXBwcm92YWxfdm90ZXM6IGFyYzQuVUludDY0LAogICAgLy8gICAgIHJlamVjdGlvbl92b3RlczogYXJjNC5VSW50NjQsCiAgICAvLyApIC0+IE5vbmU6CiAgICBwcm90byA0IDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgxOAogICAgLy8gYXNzZXJ0IG5vdCBzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSwgZXJyLlBBVVNFRF9SRUdJU1RSWQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICAhCiAgICBhc3NlcnQgLy8gUmVnaXN0cnkncyBub24tYWRtaW4gbWV0aG9kcyBhcmUgcGF1c2VkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MjAtODIxCiAgICAvLyAjIHZlcmlmeSBwcm9wb3NhbCBpZCBpcyBnZW51aW5lIHByb3Bvc2FsCiAgICAvLyBhc3NlcnQgc2VsZi5faXNfcHJvcG9zYWwocHJvcG9zYWxfaWQpLCBlcnIuSU5WQUxJRF9QUk9QT1NBTAogICAgZnJhbWVfZGlnIC00CiAgICBjYWxsc3ViIF9pc19wcm9wb3NhbAogICAgYXNzZXJ0IC8vIEludmFsaWQgcHJvcG9zYWwKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNQogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGZyYW1lX2RpZyAtNAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODIzLTgyNgogICAgLy8gIyBWZXJpZnkgdGhlIHByb3Bvc2FsIGlzIGluIHRoZSB2b3Rpbmcgc3RhdGUKICAgIC8vIHN0YXR1cywgc3RhdHVzX2V4aXN0cyA9IG9wLkFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICAvLyApCiAgICBkdXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNQogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIGJ5dGVjIDQ5IC8vIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MjMtODI2CiAgICAvLyAjIFZlcmlmeSB0aGUgcHJvcG9zYWwgaXMgaW4gdGhlIHZvdGluZyBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgyNwogICAgLy8gYXNzZXJ0IHN0YXR1cyA9PSBVSW50NjQocGVubS5TVEFUVVNfVk9USU5HKSwgZXJyLlBST1BPU0FMX0lTX05PVF9WT1RJTkcKICAgIHB1c2hpbnQgMjUgLy8gMjUKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgaXMgbm90IGluIHZvdGluZyBwaGFzZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODI5LTgzMAogICAgLy8gIyBtYWtlIHN1cmUgdGhleSdyZSB2b3Rpbmcgb24gYmVoYWxmIG9mIGFuIHhHb3YKICAgIC8vIGV4aXN0cyA9IHhnb3ZfYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi54Z292X2JveAogICAgYnl0ZWMgNiAvLyAweDc4CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzMQogICAgLy8gYXNzZXJ0IGV4aXN0cywgZXJyLlVOQVVUSE9SSVpFRAogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMyCiAgICAvLyB4Z292X2JveCA9IHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0uY29weSgpCiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfYm94IGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM0CiAgICAvLyB4Z292X2JveC52b3RlZF9wcm9wb3NhbHMubmF0aXZlICsgVUludDY0KDEpCiAgICBkdXAKICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgIGV4dHJhY3RfdWludDY0CiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODMzLTgzNQogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS52b3RlZF9wcm9wb3NhbHMgPSBhcmM0LlVJbnQ2NCgKICAgIC8vICAgICB4Z292X2JveC52b3RlZF9wcm9wb3NhbHMubmF0aXZlICsgVUludDY0KDEpCiAgICAvLyApCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzMKICAgIC8vIHNlbGYueGdvdl9ib3hbeGdvdl9hZGRyZXNzLm5hdGl2ZV0udm90ZWRfcHJvcG9zYWxzID0gYXJjNC5VSW50NjQoCiAgICBkaWcgMgogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzMtODM1CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLnZvdGVkX3Byb3Bvc2FscyA9IGFyYzQuVUludDY0KAogICAgLy8gICAgIHhnb3ZfYm94LnZvdGVkX3Byb3Bvc2Fscy5uYXRpdmUgKyBVSW50NjQoMSkKICAgIC8vICkKICAgIHN3YXAKICAgIHJlcGxhY2UyIDMyCiAgICBkaWcgMgogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM3CiAgICAvLyBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgZ2xvYmFsIExhdGVzdFRpbWVzdGFtcAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODM2LTgzOAogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5sYXN0X3ZvdGVfdGltZXN0YW1wID0gYXJjNC5VSW50NjQoCiAgICAvLyAgICAgR2xvYmFsLmxhdGVzdF90aW1lc3RhbXAKICAgIC8vICkKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjgzNgogICAgLy8gc2VsZi54Z292X2JveFt4Z292X2FkZHJlc3MubmF0aXZlXS5sYXN0X3ZvdGVfdGltZXN0YW1wID0gYXJjNC5VSW50NjQoCiAgICBkaWcgMgogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9ib3ggZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4MzYtODM4CiAgICAvLyBzZWxmLnhnb3ZfYm94W3hnb3ZfYWRkcmVzcy5uYXRpdmVdLmxhc3Rfdm90ZV90aW1lc3RhbXAgPSBhcmM0LlVJbnQ2NCgKICAgIC8vICAgICBHbG9iYWwubGF0ZXN0X3RpbWVzdGFtcAogICAgLy8gKQogICAgc3dhcAogICAgcmVwbGFjZTIgNDAKICAgIHVuY292ZXIgMgogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODQwLTg0MQogICAgLy8gIyBWZXJpZnkgdGhlIGNhbGxlciBpcyB1c2luZyB0aGVpciB2b3RpbmcgYWRkcmVzcwogICAgLy8gYXNzZXJ0IFR4bi5zZW5kZXIgPT0geGdvdl9ib3gudm90aW5nX2FkZHJlc3MubmF0aXZlLCBlcnIuTVVTVF9CRV9WT1RJTkdfQUREUkVTUwogICAgdHhuIFNlbmRlcgogICAgc3dhcAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgPT0KICAgIGFzc2VydCAvLyBNdXN0IGJlIHZvdGluZyBhZGRyZXNzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NDMtODUwCiAgICAvLyAjIENhbGwgdGhlIFByb3Bvc2FsIEFwcCB0byByZWdpc3RlciB0aGUgdm90ZQogICAgLy8gZXJyb3IsIHR4ID0gYXJjNC5hYmlfY2FsbCgKICAgIC8vICAgICBwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbC52b3RlLAogICAgLy8gICAgIHhnb3ZfYWRkcmVzcywKICAgIC8vICAgICBhcHByb3ZhbF92b3RlcywKICAgIC8vICAgICByZWplY3Rpb25fdm90ZXMsCiAgICAvLyAgICAgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZSwKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4MTg0MWEwZDIgLy8gbWV0aG9kICJ2b3RlKGFkZHJlc3MsdWludDY0LHVpbnQ2NClzdHJpbmciCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0zCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0yCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIC0xCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwbiAyCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgNyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTIKICAgIC8vIGlmIGVycm9yLm5hdGl2ZS5zdGFydHN3aXRoKGVyci5BUkNfNjVfUFJFRklYKToKICAgIGV4dHJhY3QgNiAwCiAgICBkdXAKICAgIGxlbgogICAgZHVwCiAgICBpbnRjXzIgLy8gNAogICAgPAogICAgYnogdm90ZV9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDMKICAgIGludGNfMCAvLyAwCgp2b3RlX3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg1MgogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgYnogdm90ZV9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDEzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTMKICAgIC8vIGVycm9yX3dpdGhvdXRfcHJlZml4ID0gU3RyaW5nLmZyb21fYnl0ZXMoZXJyb3IubmF0aXZlLmJ5dGVzWzQ6XSkKICAgIGludGNfMiAvLyA0CiAgICBmcmFtZV9kaWcgMgogICAgZHVwCiAgICBjb3ZlciAyCiAgICA+PQogICAgaW50Y18yIC8vIDQKICAgIGRpZyAyCiAgICB1bmNvdmVyIDIKICAgIHNlbGVjdAogICAgZnJhbWVfZGlnIDEKICAgIHN3YXAKICAgIHVuY292ZXIgMgogICAgc3Vic3RyaW5nMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODU1CiAgICAvLyBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICBieXRlYyAyMCAvLyAiV3JvbmcgUHJvcG9zYWwgU3RhdHVzIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODU3CiAgICAvLyBjYXNlIGVyci5NSVNTSU5HX0NPTkZJRzoKICAgIGJ5dGVjIDUwIC8vICJNaXNzaW5nIENvbmZpZyIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg1OQogICAgLy8gY2FzZSBlcnIuVk9URVJfTk9UX0ZPVU5EOgogICAgcHVzaGJ5dGVzcyAiVm90ZXIgbm90IGZvdW5kIiAiVm90ZXIgYWxyZWFkeSB2b3RlZCIgIlZvdGVzIGV4Y2VlZGVkIiAiVm90aW5nIFBlcmlvZCBFeHBpcmVkIiAvLyAiVm90ZXIgbm90IGZvdW5kIiwgIlZvdGVyIGFscmVhZHkgdm90ZWQiLCAiVm90ZXMgZXhjZWVkZWQiLCAiVm90aW5nIFBlcmlvZCBFeHBpcmVkIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODU0LTg2OAogICAgLy8gbWF0Y2ggZXJyb3Jfd2l0aG91dF9wcmVmaXg6CiAgICAvLyAgICAgY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLk1JU1NJTkdfQ09ORklHOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5NSVNTSU5HX0NPTkZJRyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuVk9URVJfTk9UX0ZPVU5EOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RFUl9OT1RfRk9VTkQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLlZPVEVSX0FMUkVBRFlfVk9URUQ6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVSX0FMUkVBRFlfVk9URUQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLlZPVEVTX0VYQ0VFREVEOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RFU19FWENFRURFRCAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuVk9USU5HX1BFUklPRF9FWFBJUkVEOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RJTkdfUEVSSU9EX0VYUElSRUQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgXzoKICAgIC8vICAgICAgICAgYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgdW5jb3ZlciA2CiAgICBtYXRjaCB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANiB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzFANyB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzJAOCB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzNAOSB2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzRAMTAgdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV81QDExCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjgKICAgIC8vIGFzc2VydCBGYWxzZSwgIlVua25vd24gZXJyb3IiICAjIG5vcWEKICAgIGVyciAvLyBVbmtub3duIGVycm9yCgp2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzVAMTE6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjYKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLlZPVElOR19QRVJJT0RfRVhQSVJFRCAgIyBub3FhCiAgICBlcnIgLy8gVm90aW5nIFBlcmlvZCBFeHBpcmVkCgp2b3RlX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzRAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjQKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVTX0VYQ0VFREVEICAjIG5vcWEKICAgIGVyciAvLyBWb3RlcyBleGNlZWRlZAoKdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8zQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NjIKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLlZPVEVSX0FMUkVBRFlfVk9URUQgICMgbm9xYQogICAgZXJyIC8vIFZvdGVyIGFscmVhZHkgdm90ZWQKCnZvdGVfcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMkA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODYwCiAgICAvLyBhc3NlcnQgRmFsc2UsIGVyci5WT1RFUl9OT1RfRk9VTkQgICMgbm9xYQogICAgZXJyIC8vIFZvdGVyIG5vdCBmb3VuZAoKdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8xQDc6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTgKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLk1JU1NJTkdfQ09ORklHICAjIG5vcWEKICAgIGVyciAvLyBNaXNzaW5nIENvbmZpZwoKdm90ZV9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4NTYKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICBlcnIgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzCgp2b3RlX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAMTM6CiAgICByZXRzdWIKCnZvdGVfcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODUyCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMAogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDIxIC8vICJFUlI6IgogICAgPT0KICAgIGIgdm90ZV9wcm9wb3NhbF90ZXJuYXJ5X21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkucGF5X2dyYW50X3Byb3Bvc2FsKHByb3Bvc2FsX2lkOiBieXRlcykgLT4gdm9pZDoKcGF5X2dyYW50X3Byb3Bvc2FsOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODcwLTg3MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBwYXlfZ3JhbnRfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4ODgtODg5CiAgICAvLyAjIFZlcmlmeSB0aGUgY2FsbGVyIGlzIHRoZSB4R292IFBheW9yCiAgICAvLyBhc3NlcnQgYXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpID09IHNlbGYueGdvdl9wYXlvci52YWx1ZSwgZXJyLlVOQVVUSE9SSVpFRAogICAgdHhuIFNlbmRlcgogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEyIC8vIDB4Nzg2NzZmNzY1ZjcwNjE3OTZmNzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3BheW9yIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5MS04OTIKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk2CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTQtODk3CiAgICAvLyAjIFJlYWQgcHJvcG9zYWwgc3RhdGUgZGlyZWN0bHkgZnJvbSB0aGUgUHJvcG9zYWwgQXBwJ3MgZ2xvYmFsIHN0YXRlCiAgICAvLyBzdGF0dXMsIHN0YXR1c19leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1NUQVRVUwogICAgLy8gKQogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo4OTYKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfU1RBVFVTCiAgICBieXRlYyA0OSAvLyAweDczNzQ2MTc0NzU3MwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk0LTg5NwogICAgLy8gIyBSZWFkIHByb3Bvc2FsIHN0YXRlIGRpcmVjdGx5IGZyb20gdGhlIFByb3Bvc2FsIEFwcCdzIGdsb2JhbCBzdGF0ZQogICAgLy8gc3RhdHVzLCBzdGF0dXNfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9TVEFUVVMKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIHN3YXAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5OC05MDAKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6ODk5CiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICBieXRlYyA0NyAvLyAweDcwNzI2ZjcwNmY3MzY1NzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojg5OC05MDAKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMQogICAgLy8gcHJvcG9zZXIgPSBhcmM0LkFkZHJlc3MocHJvcG9zZXJfYnl0ZXMpCiAgICBkdXAKICAgIGxlbgogICAgcHVzaGludCAzMiAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBBZGRyZXNzIGxlbmd0aCBpcyAzMiBieXRlcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTAyLTkwNAogICAgLy8gcmVxdWVzdGVkX2Ftb3VudCwgcmVxdWVzdGVkX2Ftb3VudF9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1JFUVVFU1RFRF9BTU9VTlQKICAgIC8vICkKICAgIGRpZyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDMKICAgIC8vIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUkVRVUVTVEVEX0FNT1VOVAogICAgcHVzaGJ5dGVzIDB4NzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkwMi05MDQKICAgIC8vIHJlcXVlc3RlZF9hbW91bnQsIHJlcXVlc3RlZF9hbW91bnRfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9SRVFVRVNURURfQU1PVU5UCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgcG9wCiAgICBjb3ZlciAyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MDUtOTA2CiAgICAvLyAjIFZlcmlmeSB0aGUgcHJvcG9zYWwgaXMgaW4gdGhlIHJldmlld2VkIHN0YXRlCiAgICAvLyBhc3NlcnQgc3RhdHVzID09IFVJbnQ2NChwZW5tLlNUQVRVU19SRVZJRVdFRCksIGVyci5QUk9QT1NBTF9XQVNfTk9UX1JFVklFV0VECiAgICB1bmNvdmVyIDMKICAgIHB1c2hpbnQgNDUgLy8gNDUKICAgID09CiAgICBhc3NlcnQgLy8gUHJvcG9zYWwgd2FzIG5vdCByZXZpZXdlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTA4CiAgICAvLyBhc3NlcnQgcHJvcG9zZXIubmF0aXZlIGluIHNlbGYucHJvcG9zZXJfYm94LCBlcnIuV1JPTkdfUFJPUE9TRVIKICAgIGJ5dGVjXzIgLy8gMHg3MAogICAgZGlnIDEKICAgIGNvbmNhdAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBhc3NlcnQgLy8gV3JvbmcgcHJvcG9zZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxMAogICAgLy8gYXNzZXJ0IHNlbGYudmFsaWRfa3ljKHByb3Bvc2VyLm5hdGl2ZSksIGVyci5JTlZBTElEX0tZQwogICAgZHVwCiAgICBjYWxsc3ViIHZhbGlkX2t5YwogICAgYXNzZXJ0IC8vIEludmFsaWQgS1lDCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MTQKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgPj0gcmVxdWVzdGVkX2Ftb3VudAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg2Zjc1NzQ3Mzc0NjE2ZTY0Njk2ZTY3NWY2Njc1NmU2NDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMgZXhpc3RzCiAgICBkaWcgMwogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxMi05MTUKICAgIC8vICMgVmVyaWZ5IHN1ZmZpY2llbnQgZnVuZHMgYXJlIGF2YWlsYWJsZQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlID49IHJlcXVlc3RlZF9hbW91bnQKICAgIC8vICksIGVyci5JTlNVRkZJQ0lFTlRfVFJFQVNVUllfRlVORFMKICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgdHJlYXN1cnkgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwMC0yMDUKICAgIC8vICMgVHJhbnNmZXIgdGhlIGZ1bmRzIHRvIHRoZSByZWNlaXZlcgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgZGlnIDIKICAgIGl0eG5fZmllbGQgQW1vdW50CiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToyMDAtMjAxCiAgICAvLyAjIFRyYW5zZmVyIHRoZSBmdW5kcyB0byB0aGUgcmVjZWl2ZXIKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIGludGNfMSAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwNAogICAgLy8gZmVlPTAsCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwMC0yMDUKICAgIC8vICMgVHJhbnNmZXIgdGhlIGZ1bmRzIHRvIHRoZSByZWNlaXZlcgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPUFjY291bnQocmVjaXBpZW50LmJ5dGVzKSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjIwNy0yMDgKICAgIC8vICMgVXBkYXRlIHRoZSBvdXRzdGFuZGluZyBmdW5kcwogICAgLy8gc2VsZi5vdXRzdGFuZGluZ19mdW5kcy52YWx1ZSAtPSBhbW91bnQKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgdW5jb3ZlciAyCiAgICAtCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkxOS05MjEKICAgIC8vIGVycm9yLCB0eCA9IGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwuZnVuZCwgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZQogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICBwdXNoYnl0ZXMgMHg4YTVlNGM4MCAvLyBtZXRob2QgImZ1bmQoKXN0cmluZyIKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBMYXN0TG9nCiAgICBkdXBuIDIKICAgIGV4dHJhY3QgMCA0CiAgICBieXRlYyA3IC8vIDB4MTUxZjdjNzUKICAgID09CiAgICBhc3NlcnQgLy8gYXBwbGljYXRpb24gbG9nIHZhbHVlIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGFuIEFCSSByZXR1cm4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyMwogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgZXh0cmFjdCA2IDAKICAgIGR1cAogICAgbGVuCiAgICBkdXAKICAgIGludGNfMiAvLyA0CiAgICA8CiAgICBieiBwYXlfZ3JhbnRfcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzCiAgICBpbnRjXzAgLy8gMAoKcGF5X2dyYW50X3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyMwogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgYnogcGF5X2dyYW50X3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAOAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTI0CiAgICAvLyBlcnJvcl93aXRob3V0X3ByZWZpeCA9IFN0cmluZy5mcm9tX2J5dGVzKGVycm9yLm5hdGl2ZS5ieXRlc1s0Ol0pCiAgICBpbnRjXzIgLy8gNAogICAgZnJhbWVfZGlnIDIKICAgIGR1cAogICAgY292ZXIgMgogICAgPj0KICAgIGludGNfMiAvLyA0CiAgICBkaWcgMgogICAgdW5jb3ZlciAyCiAgICBzZWxlY3QKICAgIGZyYW1lX2RpZyAxCiAgICBzd2FwCiAgICB1bmNvdmVyIDIKICAgIHN1YnN0cmluZzMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyNgogICAgLy8gY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgYnl0ZWMgMjAgLy8gIldyb25nIFByb3Bvc2FsIFN0YXR1cyIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyNS05MjkKICAgIC8vIG1hdGNoIGVycm9yX3dpdGhvdXRfcHJlZml4OgogICAgLy8gICAgIGNhc2UgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUzoKICAgIC8vICAgICAgICAgYXNzZXJ0IEZhbHNlLCBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTICAjIG5vcWEKICAgIC8vICAgICBjYXNlIF86CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgIlVua25vd24gZXJyb3IiICAjIG5vcWEKICAgIHN3YXAKICAgIG1hdGNoIHBheV9ncmFudF9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDYKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjkyOQogICAgLy8gYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgZXJyIC8vIFVua25vd24gZXJyb3IKCnBheV9ncmFudF9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8wQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MjcKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICBlcnIgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzCgpwYXlfZ3JhbnRfcHJvcG9zYWxfYWZ0ZXJfaWZfZWxzZUA4OgogICAgcmV0c3ViCgpwYXlfZ3JhbnRfcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTIzCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMAogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDIxIC8vICJFUlI6IgogICAgPT0KICAgIGIgcGF5X2dyYW50X3Byb3Bvc2FsX3Rlcm5hcnlfbWVyZ2VANAoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS5kZWNvbW1pc3Npb25fcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB2b2lkOgpkZWNvbW1pc3Npb25fcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5MzEtOTMyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRlY29tbWlzc2lvbl9wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk0OAogICAgLy8gYXNzZXJ0IGFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSA9PSBzZWxmLnhnb3ZfZGFlbW9uLnZhbHVlLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTUgLy8gMHg3ODY3NmY3NjVmNjQ2MTY1NmQ2ZjZlCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9kYWVtb24gZXhpc3RzCiAgICA9PQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTUwLTk1MQogICAgLy8gIyBWZXJpZnkgcHJvcG9zYWxfaWQgaXMgYSBnZW51aW5lIHByb3Bvc2FsIGNyZWF0ZWQgYnkgdGhpcyByZWdpc3RyeQogICAgLy8gYXNzZXJ0IHNlbGYuX2lzX3Byb3Bvc2FsKHByb3Bvc2FsX2lkKSwgZXJyLklOVkFMSURfUFJPUE9TQUwKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiBfaXNfcHJvcG9zYWwKICAgIGFzc2VydCAvLyBJbnZhbGlkIHByb3Bvc2FsCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NTMtOTU1CiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLmRlY29tbWlzc2lvbiwgYXBwX2lkPXByb3Bvc2FsX2lkLm5hdGl2ZQogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTU0CiAgICAvLyBwcm9wb3NhbF9jb250cmFjdC5Qcm9wb3NhbC5kZWNvbW1pc3Npb24sIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgZHVwCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1My05NTUKICAgIC8vIGVycm9yLCB0eCA9IGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwuZGVjb21taXNzaW9uLCBhcHBfaWQ9cHJvcG9zYWxfaWQubmF0aXZlCiAgICAvLyApCiAgICBwdXNoYnl0ZXMgMHg2OWVjZjRhMiAvLyBtZXRob2QgImRlY29tbWlzc2lvbigpc3RyaW5nIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIHB1c2hpbnQgNiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICBpdHhuIExhc3RMb2cKICAgIGR1cG4gMgogICAgZXh0cmFjdCAwIDQKICAgIGJ5dGVjIDcgLy8gMHgxNTFmN2M3NQogICAgPT0KICAgIGFzc2VydCAvLyBhcHBsaWNhdGlvbiBsb2cgdmFsdWUgaXMgbm90IHRoZSByZXN1bHQgb2YgYW4gQUJJIHJldHVybgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTU3CiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBleHRyYWN0IDYgMAogICAgZHVwCiAgICBsZW4KICAgIGR1cAogICAgaW50Y18yIC8vIDQKICAgIDwKICAgIGJ6IGRlY29tbWlzc2lvbl9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDMKICAgIGludGNfMCAvLyAwCgpkZWNvbW1pc3Npb25fcHJvcG9zYWxfdGVybmFyeV9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTU3CiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBieiBkZWNvbW1pc3Npb25fcHJvcG9zYWxfYWZ0ZXJfaWZfZWxzZUAxMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTU4CiAgICAvLyBlcnJvcl93aXRob3V0X3ByZWZpeCA9IFN0cmluZy5mcm9tX2J5dGVzKGVycm9yLm5hdGl2ZS5ieXRlc1s0Ol0pCiAgICBpbnRjXzIgLy8gNAogICAgZnJhbWVfZGlnIDMKICAgIGR1cAogICAgY292ZXIgMgogICAgPj0KICAgIGludGNfMiAvLyA0CiAgICBkaWcgMgogICAgdW5jb3ZlciAyCiAgICBzZWxlY3QKICAgIGZyYW1lX2RpZyAyCiAgICBzd2FwCiAgICB1bmNvdmVyIDIKICAgIHN1YnN0cmluZzMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2MAogICAgLy8gY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgYnl0ZWMgMjAgLy8gIldyb25nIFByb3Bvc2FsIFN0YXR1cyIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2MgogICAgLy8gY2FzZSBlcnIuTUlTU0lOR19DT05GSUc6CiAgICBieXRlYyA1MCAvLyAiTWlzc2luZyBDb25maWciCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NjQKICAgIC8vIGNhc2UgZXJyLlZPVEVSU19BU1NJR05FRDoKICAgIHB1c2hieXRlcyAiVGhlcmUgYXJlIHZvdGVycyBhc3NpZ25lZCB0byB0aGlzIHByb3Bvc2FsIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTU5LTk2NwogICAgLy8gbWF0Y2ggZXJyb3Jfd2l0aG91dF9wcmVmaXg6CiAgICAvLyAgICAgY2FzZSBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMgICMgbm9xYQogICAgLy8gICAgIGNhc2UgZXJyLk1JU1NJTkdfQ09ORklHOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5NSVNTSU5HX0NPTkZJRyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBlcnIuVk9URVJTX0FTU0lHTkVEOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsIGVyci5WT1RFUlNfQVNTSUdORUQgICMgbm9xYQogICAgLy8gICAgIGNhc2UgXzoKICAgIC8vICAgICAgICAgYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgdW5jb3ZlciAzCiAgICBtYXRjaCBkZWNvbW1pc3Npb25fcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMEA2IGRlY29tbWlzc2lvbl9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8xQDcgZGVjb21taXNzaW9uX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzJAOAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY3CiAgICAvLyBhc3NlcnQgRmFsc2UsICJVbmtub3duIGVycm9yIiAgIyBub3FhCiAgICBlcnIgLy8gVW5rbm93biBlcnJvcgoKZGVjb21taXNzaW9uX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzJAODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2NQogICAgLy8gYXNzZXJ0IEZhbHNlLCBlcnIuVk9URVJTX0FTU0lHTkVEICAjIG5vcWEKICAgIGVyciAvLyBUaGVyZSBhcmUgdm90ZXJzIGFzc2lnbmVkIHRvIHRoaXMgcHJvcG9zYWwKCmRlY29tbWlzc2lvbl9wcm9wb3NhbF9zd2l0Y2hfY2FzZV8xQDc6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NjMKICAgIC8vIGFzc2VydCBGYWxzZSwgZXJyLk1JU1NJTkdfQ09ORklHICAjIG5vcWEKICAgIGVyciAvLyBNaXNzaW5nIENvbmZpZwoKZGVjb21taXNzaW9uX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk2MQogICAgLy8gYXNzZXJ0IEZhbHNlLCBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTICAjIG5vcWEKICAgIGVyciAvLyBXcm9uZyBQcm9wb3NhbCBTdGF0dXMKCmRlY29tbWlzc2lvbl9wcm9wb3NhbF9hZnRlcl9pZl9lbHNlQDEwOgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTY5LTk3MAogICAgLy8gIyBEZWNyZW1lbnQgcGVuZGluZyBwcm9wb3NhbHMgY291bnQKICAgIC8vIHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUgLT0gMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzMgLy8gMHg3MDY1NmU2NDY5NmU2NzVmNzA3MjZmNzA2ZjczNjE2YzczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGVuZGluZ19wcm9wb3NhbHMgZXhpc3RzCiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgYnl0ZWNfMyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5NzItOTc0CiAgICAvLyBwcm9wb3Nlcl9ieXRlcywgcHJvcG9zZXJfZXhpc3RzID0gb3AuQXBwR2xvYmFsLmdldF9leF9ieXRlcygKICAgIC8vICAgICBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICAvLyApCiAgICBmcmFtZV9kaWcgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTczCiAgICAvLyBwcm9wb3NhbF9pZC5uYXRpdmUsIHBjZmcuR1NfS0VZX1BST1BPU0VSCiAgICBieXRlYyA0NyAvLyAweDcwNzI2ZjcwNmY3MzY1NzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3Mi05NzQKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3NQogICAgLy8gcHJvcG9zZXIgPSBhcmM0LkFkZHJlc3MocHJvcG9zZXJfYnl0ZXMpCiAgICBkdXAKICAgIGxlbgogICAgcHVzaGludCAzMiAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBBZGRyZXNzIGxlbmd0aCBpcyAzMiBieXRlcwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTc3LTk3OAogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlci5uYXRpdmVdLmFjdGl2ZV9wcm9wb3NhbCA9IGFyYzQuQm9vbCgKICAgIGJ5dGVjXzIgLy8gMHg3MAogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2JveCBlbnRyeSBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk3Ny05ODAKICAgIC8vICMgVXBkYXRlIHByb3Bvc2VyJ3MgYWN0aXZlIHByb3Bvc2FsIHN0YXR1cwogICAgLy8gc2VsZi5wcm9wb3Nlcl9ib3hbcHJvcG9zZXIubmF0aXZlXS5hY3RpdmVfcHJvcG9zYWwgPSBhcmM0LkJvb2woCiAgICAvLyAgICAgRmFsc2UgICMgbm9xYTogRkJUMDAzCiAgICAvLyApCiAgICBpbnRjXzAgLy8gMAogICAgZHVwCiAgICBzZXRiaXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKZGVjb21taXNzaW9uX3Byb3Bvc2FsX3Rlcm5hcnlfZmFsc2VAMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5Ojk1NwogICAgLy8gaWYgZXJyb3IubmF0aXZlLnN0YXJ0c3dpdGgoZXJyLkFSQ182NV9QUkVGSVgpOgogICAgZnJhbWVfZGlnIDEKICAgIGV4dHJhY3QgNiA0CiAgICBieXRlYyAyMSAvLyAiRVJSOiIKICAgID09CiAgICBiIGRlY29tbWlzc2lvbl9wcm9wb3NhbF90ZXJuYXJ5X21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZHJvcF9wcm9wb3NhbChwcm9wb3NhbF9pZDogYnl0ZXMpIC0+IHZvaWQ6CmRyb3BfcHJvcG9zYWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5ODItOTgzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGRyb3BfcHJvcG9zYWwoc2VsZiwgcHJvcG9zYWxfaWQ6IGFyYzQuVUludDY0KSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weTo5OTcKICAgIC8vIGFzc2VydCBub3Qgc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUsIGVyci5QQVVTRURfUkVHSVNUUlkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NzA2MTc1NzM2NTY0NWY3MjY1Njc2OTczNzQ3Mjc5CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucGF1c2VkX3JlZ2lzdHJ5IGV4aXN0cwogICAgIQogICAgYXNzZXJ0IC8vIFJlZ2lzdHJ5J3Mgbm9uLWFkbWluIG1ldGhvZHMgYXJlIHBhdXNlZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6OTk5LTEwMDAKICAgIC8vICMgVmVyaWZ5IHByb3Bvc2FsX2lkIGlzIGEgZ2VudWluZSBwcm9wb3NhbCBjcmVhdGVkIGJ5IHRoaXMgcmVnaXN0cnkKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwMwogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgZnJhbWVfZGlnIC0xCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDAyLTEwMDQKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGR1cAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwMwogICAgLy8gcHJvcG9zYWxfaWQubmF0aXZlLCBwY2ZnLkdTX0tFWV9QUk9QT1NFUgogICAgYnl0ZWMgNDcgLy8gMHg3MDcyNmY3MDZmNzM2NTcyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDAyLTEwMDQKICAgIC8vIHByb3Bvc2VyX2J5dGVzLCBwcm9wb3Nlcl9leGlzdHMgPSBvcC5BcHBHbG9iYWwuZ2V0X2V4X2J5dGVzKAogICAgLy8gICAgIHByb3Bvc2FsX2lkLm5hdGl2ZSwgcGNmZy5HU19LRVlfUFJPUE9TRVIKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBwb3AKICAgIGR1cAogICAgY292ZXIgMgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwNQogICAgLy8gcHJvcG9zZXIgPSBBY2NvdW50KHByb3Bvc2VyX2J5dGVzKQogICAgZHVwCiAgICBsZW4KICAgIHB1c2hpbnQgMzIgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMDcKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHByb3Bvc2VyLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICA9PQogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAwOS0xMDExCiAgICAvLyBlcnJvciwgdHggPSBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLmRyb3AsIGFwcF9pZD1wcm9wb3NhbF9pZC5uYXRpdmUKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGJ5dGVzIDB4NzM3MTMyMWEgLy8gbWV0aG9kICJkcm9wKClzdHJpbmciCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwbiAyCiAgICBleHRyYWN0IDAgNAogICAgYnl0ZWMgNyAvLyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIGFwcGxpY2F0aW9uIGxvZyB2YWx1ZSBpcyBub3QgdGhlIHJlc3VsdCBvZiBhbiBBQkkgcmV0dXJuCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDEzCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBleHRyYWN0IDYgMAogICAgZHVwCiAgICBsZW4KICAgIGR1cAogICAgaW50Y18yIC8vIDQKICAgIDwKICAgIGJ6IGRyb3BfcHJvcG9zYWxfdGVybmFyeV9mYWxzZUAzCiAgICBpbnRjXzAgLy8gMAoKZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X21lcmdlQDQ6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDEzCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBieiBkcm9wX3Byb3Bvc2FsX2FmdGVyX2lmX2Vsc2VAOAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxNAogICAgLy8gZXJyb3Jfd2l0aG91dF9wcmVmaXggPSBTdHJpbmcuZnJvbV9ieXRlcyhlcnJvci5uYXRpdmUuYnl0ZXNbNDpdKQogICAgaW50Y18yIC8vIDQKICAgIGZyYW1lX2RpZyAzCiAgICBkdXAKICAgIGNvdmVyIDIKICAgID49CiAgICBpbnRjXzIgLy8gNAogICAgZGlnIDIKICAgIHVuY292ZXIgMgogICAgc2VsZWN0CiAgICBmcmFtZV9kaWcgMgogICAgc3dhcAogICAgdW5jb3ZlciAyCiAgICBzdWJzdHJpbmczCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDE2CiAgICAvLyBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICBieXRlYyAyMCAvLyAiV3JvbmcgUHJvcG9zYWwgU3RhdHVzIgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxNS0xMDE5CiAgICAvLyBtYXRjaCBlcnJvcl93aXRob3V0X3ByZWZpeDoKICAgIC8vICAgICBjYXNlIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVM6CiAgICAvLyAgICAgICAgIGFzc2VydCBGYWxzZSwgZXJyLldST05HX1BST1BPU0FMX1NUQVRVUyAgIyBub3FhCiAgICAvLyAgICAgY2FzZSBfOgogICAgLy8gICAgICAgICBhc3NlcnQgRmFsc2UsICJVbmtub3duIGVycm9yIiAgIyBub3FhCiAgICBzd2FwCiAgICBtYXRjaCBkcm9wX3Byb3Bvc2FsX3N3aXRjaF9jYXNlXzBANgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxOQogICAgLy8gYXNzZXJ0IEZhbHNlLCAiVW5rbm93biBlcnJvciIgICMgbm9xYQogICAgZXJyIC8vIFVua25vd24gZXJyb3IKCmRyb3BfcHJvcG9zYWxfc3dpdGNoX2Nhc2VfMEA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAxNwogICAgLy8gYXNzZXJ0IEZhbHNlLCBlcnIuV1JPTkdfUFJPUE9TQUxfU1RBVFVTICAjIG5vcWEKICAgIGVyciAvLyBXcm9uZyBQcm9wb3NhbCBTdGF0dXMKCmRyb3BfcHJvcG9zYWxfYWZ0ZXJfaWZfZWxzZUA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAyMS0xMDIyCiAgICAvLyAjIERlY3JlbWVudCBwZW5kaW5nIHByb3Bvc2FscyBjb3VudAogICAgLy8gc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlY18zIC8vIDB4NzA2NTZlNjQ2OTZlNjc1ZjcwNzI2ZjcwNmY3MzYxNmM3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMjMtMTAyNAogICAgLy8gIyBVcGRhdGUgcHJvcG9zZXIncyBhY3RpdmUgcHJvcG9zYWwgc3RhdHVzCiAgICAvLyBzZWxmLnByb3Bvc2VyX2JveFtwcm9wb3Nlcl0uYWN0aXZlX3Byb3Bvc2FsID0gYXJjNC5Cb29sKEZhbHNlKSAgIyBub3FhOiBGQlQwMDMKICAgIGJ5dGVjXzIgLy8gMHg3MAogICAgZnJhbWVfZGlnIDAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfZ2V0CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wcm9wb3Nlcl9ib3ggZW50cnkgZXhpc3RzCiAgICBpbnRjXzAgLy8gMAogICAgZHVwCiAgICBzZXRiaXQKICAgIGJveF9wdXQKICAgIHJldHN1YgoKZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X2ZhbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDEzCiAgICAvLyBpZiBlcnJvci5uYXRpdmUuc3RhcnRzd2l0aChlcnIuQVJDXzY1X1BSRUZJWCk6CiAgICBmcmFtZV9kaWcgMQogICAgZXh0cmFjdCA2IDQKICAgIGJ5dGVjIDIxIC8vICJFUlI6IgogICAgPT0KICAgIGIgZHJvcF9wcm9wb3NhbF90ZXJuYXJ5X21lcmdlQDQKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZGVwb3NpdF9mdW5kcyhwYXltZW50OiB1aW50NjQpIC0+IHZvaWQ6CmRlcG9zaXRfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDI2LTEwMjcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgZGVwb3NpdF9mdW5kcyhzZWxmLCBwYXltZW50OiBndHhuLlBheW1lbnRUcmFuc2FjdGlvbikgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTAzOQogICAgLy8gcGF5bWVudC5yZWNlaXZlciA9PSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIFJlY2VpdmVyCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgPT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwMzgtMTA0MAogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBwYXltZW50LnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MKICAgIC8vICksIGVyci5XUk9OR19SRUNFSVZFUgogICAgYXNzZXJ0IC8vIFdyb25nIFJlY2VpdmVyCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQxCiAgICAvLyBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlICs9IHBheW1lbnQuYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgQW1vdW50CiAgICArCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS53aXRoZHJhd19mdW5kcyhhbW91bnQ6IHVpbnQ2NCkgLT4gdm9pZDoKd2l0aGRyYXdfZnVuZHM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDQzLTEwNDQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBkZWYgd2l0aGRyYXdfZnVuZHMoc2VsZiwgYW1vdW50OiBVSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNTcKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA1OAogICAgLy8gYXNzZXJ0IGFtb3VudCA8PSBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlLCBlcnIuSU5TVUZGSUNJRU5UX0ZVTkRTCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgZnVuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNTkKICAgIC8vIGFzc2VydCBUeG4uZmVlID49IChHbG9iYWwubWluX3R4bl9mZWUgKiAyKSwgZXJyLklOU1VGRklDSUVOVF9GRUUKICAgIHR4biBGZWUKICAgIGdsb2JhbCBNaW5UeG5GZWUKICAgIHB1c2hpbnQgMiAvLyAyCiAgICAqCiAgICA+PQogICAgYXNzZXJ0IC8vIEluc3VmZmljaWVudCBmZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjAKICAgIC8vIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUgLT0gYW1vdW50CiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5vdXRzdGFuZGluZ19mdW5kcyBleGlzdHMKICAgIGZyYW1lX2RpZyAtMQogICAgLQogICAgYnl0ZWNfMSAvLyAweDZmNzU3NDczNzQ2MTZlNjQ2OTZlNjc1ZjY2NzU2ZTY0NzMKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDYyLTEwNjYKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICAvLyAgICAgYW1vdW50PWFtb3VudCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjMKICAgIC8vIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9tYW5hZ2VyIGV4aXN0cwogICAgZnJhbWVfZGlnIC0xCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2MgogICAgLy8gaXR4bi5QYXltZW50KAogICAgaW50Y18xIC8vIHBheQogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA2NQogICAgLy8gZmVlPTAsCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwNjItMTA2NgogICAgLy8gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIC8vICAgICBhbW91bnQ9YW1vdW50LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9zdWJtaXQKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy54Z292X3JlZ2lzdHJ5LmNvbnRyYWN0LlhHb3ZSZWdpc3RyeS53aXRoZHJhd19iYWxhbmNlKCkgLT4gdm9pZDoKd2l0aGRyYXdfYmFsYW5jZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODAKICAgIC8vIGFzc2VydCBzZWxmLmlzX3hnb3ZfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX3hnb3ZfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4MQogICAgLy8gYXNzZXJ0IFR4bi5mZWUgPj0gKEdsb2JhbC5taW5fdHhuX2ZlZSAqIDIpLCBlcnIuSU5TVUZGSUNJRU5UX0ZFRQogICAgdHhuIEZlZQogICAgZ2xvYmFsIE1pblR4bkZlZQogICAgcHVzaGludCAyIC8vIDIKICAgICoKICAgID49CiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IGZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4NQogICAgLy8gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5iYWxhbmNlCiAgICBnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwogICAgYWNjdF9wYXJhbXNfZ2V0IEFjY3RCYWxhbmNlCiAgICBhc3NlcnQgLy8gYWNjb3VudCBmdW5kZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwODYKICAgIC8vIC0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5taW5fYmFsYW5jZQogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgIGFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQogICAgYXNzZXJ0IC8vIGFjY291bnQgZnVuZGVkCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDg1LTEwODYKICAgIC8vIEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MuYmFsYW5jZQogICAgLy8gLSBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLm1pbl9iYWxhbmNlCiAgICAtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDg3CiAgICAvLyAtIHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTA4NS0xMDg3CiAgICAvLyBHbG9iYWwuY3VycmVudF9hcHBsaWNhdGlvbl9hZGRyZXNzLmJhbGFuY2UKICAgIC8vIC0gR2xvYmFsLmN1cnJlbnRfYXBwbGljYXRpb25fYWRkcmVzcy5taW5fYmFsYW5jZQogICAgLy8gLSBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlCiAgICAtCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDkwCiAgICAvLyBhc3NlcnQgYW1vdW50ID4gMCwgZXJyLklOU1VGRklDSUVOVF9GVU5EUwogICAgZHVwCiAgICBhc3NlcnQgLy8gSW5zdWZmaWNpZW50IGZ1bmRzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDkxLTEwOTUKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICAvLyAgICAgYW1vdW50PWFtb3VudCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOTIKICAgIC8vIHJlY2VpdmVyPXNlbGYueGdvdl9tYW5hZ2VyLnZhbHVlLm5hdGl2ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9tYW5hZ2VyIGV4aXN0cwogICAgaXR4bl9maWVsZCBSZWNlaXZlcgogICAgaXR4bl9maWVsZCBBbW91bnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOTEKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIGludGNfMSAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjEwOTQKICAgIC8vIGZlZT0wLAogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMDkxLTEwOTUKICAgIC8vIGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZS5uYXRpdmUsCiAgICAvLyAgICAgYW1vdW50PWFtb3VudCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuZ2V0X3N0YXRlKCkgLT4gYnl0ZXM6CmdldF9zdGF0ZToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDQKICAgIC8vIHBhdXNlZF9yZWdpc3RyeT1hcmM0LkJvb2woYm9vbChzZWxmLnBhdXNlZF9yZWdpc3RyeS52YWx1ZSkpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg3MDYxNzU3MzY1NjQ1ZjcyNjU2NzY5NzM3NDcyNzkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcmVnaXN0cnkgZXhpc3RzCiAgICBieXRlYyA4IC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwNQogICAgLy8gcGF1c2VkX3Byb3Bvc2Fscz1hcmM0LkJvb2woYm9vbChzZWxmLnBhdXNlZF9wcm9wb3NhbHMudmFsdWUpKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA5IC8vIDB4NzA2MTc1NzM2NTY0NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wYXVzZWRfcHJvcG9zYWxzIGV4aXN0cwogICAgYnl0ZWMgOCAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMDYKICAgIC8vIHhnb3ZfbWFuYWdlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0IC8vIDB4Nzg2NzZmNzY1ZjZkNjE2ZTYxNjc2NTcyCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYueGdvdl9tYW5hZ2VyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEwNwogICAgLy8geGdvdl9wYXlvcj1zZWxmLnhnb3ZfcGF5b3IudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTIgLy8gMHg3ODY3NmY3NjVmNzA2MTc5NmY3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfcGF5b3IgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTA4CiAgICAvLyB4Z292X2NvdW5jaWw9c2VsZi54Z292X2NvdW5jaWwudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjIgLy8gMHg3ODY3NmY3NjVmNjM2Zjc1NmU2MzY5NmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2NvdW5jaWwgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTA5CiAgICAvLyB4Z292X3N1YnNjcmliZXI9c2VsZi54Z292X3N1YnNjcmliZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTEgLy8gMHg3ODY3NmY3NjVmNzM3NTYyNzM2MzcyNjk2MjY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X3N1YnNjcmliZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTEwCiAgICAvLyBreWNfcHJvdmlkZXI9c2VsZi5reWNfcHJvdmlkZXIudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMTMgLy8gMHg2Yjc5NjM1ZjcwNzI2Zjc2Njk2NDY1NzIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5reWNfcHJvdmlkZXIgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTExCiAgICAvLyBjb21taXR0ZWVfbWFuYWdlcj1zZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE0IC8vIDB4NjM2ZjZkNmQ2OTc0NzQ2NTY1NWY2ZDYxNmU2MTY3NjU3MgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmNvbW1pdHRlZV9tYW5hZ2VyIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExMgogICAgLy8geGdvdl9kYWVtb249c2VsZi54Z292X2RhZW1vbi52YWx1ZSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNSAvLyAweDc4Njc2Zjc2NWY2NDYxNjU2ZDZmNmUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi54Z292X2RhZW1vbiBleGlzdHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMTMKICAgIC8vIHhnb3ZfZmVlPWFyYzQuVUludDY0KHNlbGYueGdvdl9mZWUudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDE2IC8vIDB4Nzg2NzZmNzY1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnhnb3ZfZmVlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExNAogICAgLy8gcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAxNyAvLyAweDcwNzI2ZjcwNmY3MzY1NzI1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnByb3Bvc2VyX2ZlZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMTUKICAgIC8vIG9wZW5fcHJvcG9zYWxfZmVlPWFyYzQuVUludDY0KHNlbGYub3Blbl9wcm9wb3NhbF9mZWUudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDEwIC8vIDB4NmY3MDY1NmU1ZjcwNzI2ZjcwNmY3MzYxNmM1ZjY2NjU2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm9wZW5fcHJvcG9zYWxfZmVlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExNgogICAgLy8gZGFlbW9uX29wc19mdW5kaW5nX2Jwcz1hcmM0LlVJbnQ2NChzZWxmLmRhZW1vbl9vcHNfZnVuZGluZ19icHMudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDIzIC8vIDB4NjQ2MTY1NmQ2ZjZlNWY2ZjcwNjU3MjYxNzQ2OTZmNmU1ZjY2NzU2ZTY0Njk2ZTY3NWY2MjcwNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kYWVtb25fb3BzX2Z1bmRpbmdfYnBzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTExNwogICAgLy8gcHJvcG9zYWxfY29tbWl0bWVudF9icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjQgLy8gMHg3MDcyNmY3MDZmNzM2MTZjNWY2MzZmNmQ2ZDY5NzQ2ZDY1NmU3NDVmNjI3MDczCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucHJvcG9zYWxfY29tbWl0bWVudF9icHMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTE4CiAgICAvLyBtaW5fcmVxdWVzdGVkX2Ftb3VudD1hcmM0LlVJbnQ2NChzZWxmLm1pbl9yZXF1ZXN0ZWRfYW1vdW50LnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAyNSAvLyAweDZkNjk2ZTVmNzI2NTcxNzU2NTczNzQ2NTY0NWY2MTZkNmY3NTZlNzQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMjAKICAgIC8vIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI2IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1heF9yZXF1ZXN0ZWRfYW1vdW50X3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEyMQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI3IC8vIDB4NmQ2MTc4NWY3MjY1NzE3NTY1NzM3NDY1NjQ1ZjYxNmQ2Zjc1NmU3NDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEyMgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMjggLy8gMHg2ZDYxNzg1ZjcyNjU3MTc1NjU3Mzc0NjU2NDVmNjE2ZDZmNzU2ZTc0NWY2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTE5LTExMjMKICAgIC8vIG1heF9yZXF1ZXN0ZWRfYW1vdW50PWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI1CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDI5IC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjczNmQ2MTZjNmMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEyNgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzAgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI3CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMxIC8vIDB4NjQ2OTczNjM3NTczNzM2OTZmNmU1ZjY0NzU3MjYxNzQ2OTZmNmU1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX2xhcmdlIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEyOAogICAgLy8gYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzIgLy8gMHg2NDY5NzM2Mzc1NzM3MzY5NmY2ZTVmNjQ3NTcyNjE3NDY5NmY2ZTVmNzg2YzYxNzI2NzY1CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl94bGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTI0LTExMjkKICAgIC8vIGRpc2N1c3Npb25fZHVyYXRpb249YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzRdXSgKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi5kaXNjdXNzaW9uX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICAvLyApLAogICAgdW5jb3ZlciAzCiAgICB1bmNvdmVyIDMKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEzMQogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDMzIC8vIDB4NzY2Zjc0Njk2ZTY3NWY2NDc1NzI2MTc0Njk2ZjZlNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTEzMgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNCAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMzMKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNSAvLyAweDc2NmY3NDY5NmU2NzVmNjQ3NTcyNjE3NDY5NmY2ZTVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMzQKICAgIC8vIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3hsYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzYgLy8gMHg3NjZmNzQ2OTZlNjc1ZjY0NzU3MjYxNzQ2OTZmNmU1Zjc4NmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTMwLTExMzUKICAgIC8vIHZvdGluZ19kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl94bGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIHVuY292ZXIgMwogICAgdW5jb3ZlciAzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMzcKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyAzNyAvLyAweDcxNzU2ZjcyNzU2ZDVmNzM2ZDYxNmM2YwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9zbWFsbCBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExMzgKICAgIC8vIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzggLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZkNjU2NDY5NzU2ZAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnF1b3J1bV9tZWRpdW0gZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTM5CiAgICAvLyBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9sYXJnZS52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgMzkgLy8gMHg3MTc1NmY3Mjc1NmQ1ZjZjNjE3MjY3NjUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5xdW9ydW1fbGFyZ2UgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTM2LTExNDAKICAgIC8vIHF1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX3NtYWxsLnZhbHVlKSwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICksCiAgICBjb3ZlciAyCiAgICBjb25jYXQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0MgogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjIDQwIC8vIDB4Nzc2NTY5Njc2ODc0NjU2NDVmNzE3NTZmNzI3NTZkNWY3MzZkNjE2YzZjCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX3NtYWxsIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0MwogICAgLy8gYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbWVkaXVtLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MSAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmQ2NTY0Njk3NTZkCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNDQKICAgIC8vIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MiAvLyAweDc3NjU2OTY3Njg3NDY1NjQ1ZjcxNzU2ZjcyNzU2ZDVmNmM2MTcyNjc2NQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLndlaWdodGVkX3F1b3J1bV9sYXJnZSBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNDEtMTE0NQogICAgLy8gd2VpZ2h0ZWRfcXVvcnVtPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFszXV0oCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fc21hbGwudmFsdWUpLAogICAgLy8gICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgYXJjNC5VSW50NjQoc2VsZi53ZWlnaHRlZF9xdW9ydW1fbGFyZ2UudmFsdWUpLAogICAgLy8gKSwKICAgIGNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTQ2CiAgICAvLyBvdXRzdGFuZGluZ19mdW5kcz1hcmM0LlVJbnQ2NChzZWxmLm91dHN0YW5kaW5nX2Z1bmRzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NmY3NTc0NzM3NDYxNmU2NDY5NmU2NzVmNjY3NTZlNjQ3MwogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm91dHN0YW5kaW5nX2Z1bmRzIGV4aXN0cwogICAgaXRvYgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVnaXN0cnkvY29udHJhY3QucHk6MTE0NwogICAgLy8gcGVuZGluZ19wcm9wb3NhbHM9YXJjNC5VSW50NjQoc2VsZi5wZW5kaW5nX3Byb3Bvc2Fscy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMyAvLyAweDcwNjU2ZTY0Njk2ZTY3NWY3MDcyNmY3MDZmNzM2MTZjNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5wZW5kaW5nX3Byb3Bvc2FscyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNDgKICAgIC8vIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDggLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfaWQgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTQ5CiAgICAvLyBjb21taXR0ZWVfbWVtYmVycz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV9tZW1iZXJzLnZhbHVlKSwKICAgIGludGNfMCAvLyAwCiAgICBieXRlYyA0MyAvLyAweDYzNmY2ZDZkNjk3NDc0NjU2NTVmNmQ2NTZkNjI2NTcyNzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfbWVtYmVycyBleGlzdHMKICAgIGl0b2IKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNTAKICAgIC8vIGNvbW1pdHRlZV92b3Rlcz1hcmM0LlVJbnQ2NChzZWxmLmNvbW1pdHRlZV92b3Rlcy52YWx1ZSksCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWMgNDQgLy8gMHg2MzZmNmQ2ZDY5NzQ3NDY1NjU1Zjc2NmY3NDY1NzMKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5jb21taXR0ZWVfdm90ZXMgZXhpc3RzCiAgICBpdG9iCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWdpc3RyeS9jb250cmFjdC5weToxMTAzLTExNTEKICAgIC8vIHJldHVybiB0eXAuVHlwZWRHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBwYXVzZWRfcmVnaXN0cnk9YXJjNC5Cb29sKGJvb2woc2VsZi5wYXVzZWRfcmVnaXN0cnkudmFsdWUpKSwKICAgIC8vICAgICBwYXVzZWRfcHJvcG9zYWxzPWFyYzQuQm9vbChib29sKHNlbGYucGF1c2VkX3Byb3Bvc2Fscy52YWx1ZSkpLAogICAgLy8gICAgIHhnb3ZfbWFuYWdlcj1zZWxmLnhnb3ZfbWFuYWdlci52YWx1ZSwKICAgIC8vICAgICB4Z292X3BheW9yPXNlbGYueGdvdl9wYXlvci52YWx1ZSwKICAgIC8vICAgICB4Z292X2NvdW5jaWw9c2VsZi54Z292X2NvdW5jaWwudmFsdWUsCiAgICAvLyAgICAgeGdvdl9zdWJzY3JpYmVyPXNlbGYueGdvdl9zdWJzY3JpYmVyLnZhbHVlLAogICAgLy8gICAgIGt5Y19wcm92aWRlcj1zZWxmLmt5Y19wcm92aWRlci52YWx1ZSwKICAgIC8vICAgICBjb21taXR0ZWVfbWFuYWdlcj1zZWxmLmNvbW1pdHRlZV9tYW5hZ2VyLnZhbHVlLAogICAgLy8gICAgIHhnb3ZfZGFlbW9uPXNlbGYueGdvdl9kYWVtb24udmFsdWUsCiAgICAvLyAgICAgeGdvdl9mZWU9YXJjNC5VSW50NjQoc2VsZi54Z292X2ZlZS52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zZXJfZmVlPWFyYzQuVUludDY0KHNlbGYucHJvcG9zZXJfZmVlLnZhbHVlKSwKICAgIC8vICAgICBvcGVuX3Byb3Bvc2FsX2ZlZT1hcmM0LlVJbnQ2NChzZWxmLm9wZW5fcHJvcG9zYWxfZmVlLnZhbHVlKSwKICAgIC8vICAgICBkYWVtb25fb3BzX2Z1bmRpbmdfYnBzPWFyYzQuVUludDY0KHNlbGYuZGFlbW9uX29wc19mdW5kaW5nX2Jwcy52YWx1ZSksCiAgICAvLyAgICAgcHJvcG9zYWxfY29tbWl0bWVudF9icHM9YXJjNC5VSW50NjQoc2VsZi5wcm9wb3NhbF9jb21taXRtZW50X2Jwcy52YWx1ZSksCiAgICAvLyAgICAgbWluX3JlcXVlc3RlZF9hbW91bnQ9YXJjNC5VSW50NjQoc2VsZi5taW5fcmVxdWVzdGVkX2Ftb3VudC52YWx1ZSksCiAgICAvLyAgICAgbWF4X3JlcXVlc3RlZF9hbW91bnQ9YXJjNC5TdGF0aWNBcnJheVthcmM0LlVJbnQ2NCwgdC5MaXRlcmFsWzNdXSgKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYubWF4X3JlcXVlc3RlZF9hbW91bnRfbWVkaXVtLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi5tYXhfcmVxdWVzdGVkX2Ftb3VudF9sYXJnZS52YWx1ZSksCiAgICAvLyAgICAgKSwKICAgIC8vICAgICBkaXNjdXNzaW9uX2R1cmF0aW9uPWFyYzQuU3RhdGljQXJyYXlbYXJjNC5VSW50NjQsIHQuTGl0ZXJhbFs0XV0oCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYuZGlzY3Vzc2lvbl9kdXJhdGlvbl9tZWRpdW0udmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25fbGFyZ2UudmFsdWUpLAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLmRpc2N1c3Npb25fZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIHZvdGluZ19kdXJhdGlvbj1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbNF1dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnZvdGluZ19kdXJhdGlvbl9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYudm90aW5nX2R1cmF0aW9uX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICAgICAgYXJjNC5VSW50NjQoc2VsZi52b3RpbmdfZHVyYXRpb25feGxhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIHF1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLnF1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYucXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIHdlaWdodGVkX3F1b3J1bT1hcmM0LlN0YXRpY0FycmF5W2FyYzQuVUludDY0LCB0LkxpdGVyYWxbM11dKAogICAgLy8gICAgICAgICBhcmM0LlVJbnQ2NChzZWxmLndlaWdodGVkX3F1b3J1bV9zbWFsbC52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX21lZGl1bS52YWx1ZSksCiAgICAvLyAgICAgICAgIGFyYzQuVUludDY0KHNlbGYud2VpZ2h0ZWRfcXVvcnVtX2xhcmdlLnZhbHVlKSwKICAgIC8vICAgICApLAogICAgLy8gICAgIG91dHN0YW5kaW5nX2Z1bmRzPWFyYzQuVUludDY0KHNlbGYub3V0c3RhbmRpbmdfZnVuZHMudmFsdWUpLAogICAgLy8gICAgIHBlbmRpbmdfcHJvcG9zYWxzPWFyYzQuVUludDY0KHNlbGYucGVuZGluZ19wcm9wb3NhbHMudmFsdWUpLAogICAgLy8gICAgIGNvbW1pdHRlZV9pZD1zZWxmLmNvbW1pdHRlZV9pZC52YWx1ZS5jb3B5KCksCiAgICAvLyAgICAgY29tbWl0dGVlX21lbWJlcnM9YXJjNC5VSW50NjQoc2VsZi5jb21taXR0ZWVfbWVtYmVycy52YWx1ZSksCiAgICAvLyAgICAgY29tbWl0dGVlX3ZvdGVzPWFyYzQuVUludDY0KHNlbGYuY29tbWl0dGVlX3ZvdGVzLnZhbHVlKSwKICAgIC8vICkKICAgIHVuY292ZXIgMjMKICAgIGludGNfMCAvLyAwCiAgICBnZXRiaXQKICAgIHVuY292ZXIgMjQKICAgIGludGNfMSAvLyAxCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgdW5jb3ZlciAyMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDIyCiAgICBjb25jYXQKICAgIHVuY292ZXIgMjEKICAgIGNvbmNhdAogICAgdW5jb3ZlciAyMAogICAgY29uY2F0CiAgICB1bmNvdmVyIDE5CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTgKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNwogICAgY29uY2F0CiAgICB1bmNvdmVyIDE2CiAgICBjb25jYXQKICAgIHVuY292ZXIgMTUKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxNAogICAgY29uY2F0CiAgICB1bmNvdmVyIDEzCiAgICBjb25jYXQKICAgIHVuY292ZXIgMTIKICAgIGNvbmNhdAogICAgdW5jb3ZlciAxMQogICAgY29uY2F0CiAgICB1bmNvdmVyIDEwCiAgICBjb25jYXQKICAgIHVuY292ZXIgOQogICAgY29uY2F0CiAgICB1bmNvdmVyIDgKICAgIGNvbmNhdAogICAgdW5jb3ZlciA3CiAgICBjb25jYXQKICAgIHVuY292ZXIgNgogICAgY29uY2F0CiAgICB1bmNvdmVyIDUKICAgIGNvbmNhdAogICAgdW5jb3ZlciA0CiAgICBjb25jYXQKICAgIHVuY292ZXIgMwogICAgY29uY2F0CiAgICB1bmNvdmVyIDIKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMueGdvdl9yZWdpc3RyeS5jb250cmFjdC5YR292UmVnaXN0cnkuaXNfcHJvcG9zYWwocHJvcG9zYWxfaWQ6IGJ5dGVzKSAtPiB2b2lkOgppc19wcm9wb3NhbDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNTMtMTE1NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBpc19wcm9wb3NhbChzZWxmLCBwcm9wb3NhbF9pZDogYXJjNC5VSW50NjQpIC0+IE5vbmU6CiAgICBwcm90byAxIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlZ2lzdHJ5L2NvbnRyYWN0LnB5OjExNTUKICAgIC8vIGFzc2VydCBzZWxmLl9pc19wcm9wb3NhbChwcm9wb3NhbF9pZCksIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgX2lzX3Byb3Bvc2FsCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgcmV0c3ViCg==", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
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
