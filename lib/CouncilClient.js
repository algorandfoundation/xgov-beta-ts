import { getArc56ReturnValue } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "name": "Council", "structs": {}, "methods": [{ "name": "create", "args": [{ "type": "uint64", "name": "registry_id", "desc": "The application ID of the XGovRegistry contract." }], "returns": { "type": "void" }, "actions": { "create": ["NoOp"], "call": [] }, "readonly": false, "desc": "Create a new council contract.", "events": [], "recommendations": {} }, { "name": "update_council", "args": [], "returns": { "type": "void" }, "actions": { "create": [], "call": ["UpdateApplication"] }, "readonly": false, "desc": "Update the council contract.", "events": [], "recommendations": {} }, { "name": "add_member", "args": [{ "type": "address", "name": "address", "desc": "The address of the member to add." }], "returns": { "type": "void" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Add a member to the council.", "events": [], "recommendations": {} }, { "name": "remove_member", "args": [{ "type": "address", "name": "address", "desc": "The address of the member to remove." }], "returns": { "type": "void" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Remove a member from the council.", "events": [], "recommendations": {} }, { "name": "vote", "args": [{ "type": "uint64", "name": "proposal_id", "desc": "The ID of the proposal to vote on." }, { "type": "bool", "name": "block", "desc": "Whether or not to block the proposal." }], "returns": { "type": "void" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Cast a vote on a proposal.", "events": [], "recommendations": {} }, { "name": "op_up", "args": [], "returns": { "type": "void" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "events": [], "recommendations": {} }], "arcs": [22, 28], "networks": {}, "state": { "schema": { "global": { "ints": 2, "bytes": 0 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "registry_app_id": { "keyType": "AVMBytes", "valueType": "AVMUint64", "key": "cmVnaXN0cnlfYXBwX2lk" }, "member_count": { "keyType": "AVMBytes", "valueType": "AVMUint64", "key": "bWVtYmVyX2NvdW50" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": { "members": { "keyType": "address", "valueType": "byte[0]", "prefix": "TQ==" }, "votes": { "keyType": "uint64", "valueType": "(address,bool)[]", "prefix": "Vg==" } } } }, "bareActions": { "create": [], "call": [] }, "sourceInfo": { "approval": { "sourceInfo": [{ "pc": [570], "errorMessage": "Address length is 32 bytes" }, { "pc": [339], "errorMessage": "Invalid proposal" }, { "pc": [167], "errorMessage": "Invalid registry ID" }, { "pc": [565], "errorMessage": "Missing Config" }, { "pc": [86], "errorMessage": "OnCompletion must be NoOp" }, { "pc": [152], "errorMessage": "OnCompletion must be UpdateApplication && can only call when not creating" }, { "pc": [179, 193, 228], "errorMessage": "Unauthorized" }, { "pc": [202], "errorMessage": "Voter Already Assigned" }, { "pc": [421], "errorMessage": "Voter already voted" }, { "pc": [236, 287], "errorMessage": "Voter not found" }, { "pc": [50], "errorMessage": "Wrong Global Bytes allocation" }, { "pc": [55], "errorMessage": "Wrong Global UInts allocation" }, { "pc": [59], "errorMessage": "Wrong Local Bytes allocation" }, { "pc": [63], "errorMessage": "Wrong Local UInts allocation" }, { "pc": [343], "errorMessage": "Wrong Proposal Status or finalized" }, { "pc": [209, 242, 367], "errorMessage": "check self.member_count exists" }, { "pc": [305, 549], "errorMessage": "check self.registry_app_id exists" }, { "pc": [463], "errorMessage": "check self.votes entry exists" }, { "pc": [276], "errorMessage": "invalid number of bytes for arc4.bool" }, { "pc": [189, 224], "errorMessage": "invalid number of bytes for arc4.static_array<arc4.uint8, 32>" }, { "pc": [164, 263], "errorMessage": "invalid number of bytes for arc4.uint64" }, { "pc": [472], "errorMessage": "max array length exceeded" }], "pcOffsetMethod": "none" }, "clear": { "sourceInfo": [], "pcOffsetMethod": "none" } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuYXBwcm92YWxfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIGludGNibG9jayAwIDEgMiAzMgogICAgYnl0ZWNibG9jayAweDZkNjU2ZDYyNjU3MjVmNjM2Zjc1NmU3NCAweDcyNjU2NzY5NzM3NDcyNzk1ZjYxNzA3MDVmNjk2NCAweDRkIDB4MDAKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBibnogbWFpbl9hZnRlcl9pZl9lbHNlQDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjQwCiAgICAvLyBUeG4uZ2xvYmFsX251bV9ieXRlX3NsaWNlID09IGNvdW5jaWxfY2ZnLkdMT0JBTF9CWVRFUwogICAgdHhuIEdsb2JhbE51bUJ5dGVTbGljZQogICAgIQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MzktNDEKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgVHhuLmdsb2JhbF9udW1fYnl0ZV9zbGljZSA9PSBjb3VuY2lsX2NmZy5HTE9CQUxfQllURVMKICAgIC8vICksIGVyci5XUk9OR19HTE9CQUxfQllURVMKICAgIGFzc2VydCAvLyBXcm9uZyBHbG9iYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NDIKICAgIC8vIGFzc2VydCBUeG4uZ2xvYmFsX251bV91aW50ID09IGNvdW5jaWxfY2ZnLkdMT0JBTF9VSU5UUywgZXJyLldST05HX0dMT0JBTF9VSU5UUwogICAgdHhuIEdsb2JhbE51bVVpbnQKICAgIGludGNfMiAvLyAyCiAgICA9PQogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBVSW50cyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo0NAogICAgLy8gVHhuLmxvY2FsX251bV9ieXRlX3NsaWNlID09IGNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTCiAgICB0eG4gTG9jYWxOdW1CeXRlU2xpY2UKICAgICEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjQzLTQ1CiAgICAvLyBhc3NlcnQgKAogICAgLy8gICAgIFR4bi5sb2NhbF9udW1fYnl0ZV9zbGljZSA9PSBjb3VuY2lsX2NmZy5MT0NBTF9CWVRFUwogICAgLy8gKSwgZXJyLldST05HX0xPQ0FMX0JZVEVTCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgQnl0ZXMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NDYKICAgIC8vIGFzc2VydCBUeG4ubG9jYWxfbnVtX3VpbnQgPT0gY291bmNpbF9jZmcuTE9DQUxfVUlOVFMsIGVyci5XUk9OR19MT0NBTF9VSU5UUwogICAgdHhuIExvY2FsTnVtVWludAogICAgIQogICAgYXNzZXJ0IC8vIFdyb25nIExvY2FsIFVJbnRzIGFsbG9jYXRpb24KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjUwCiAgICAvLyBrZXk9Y291bmNpbF9jZmcuR1NfS0VZX1JFR0lTVFJZX0FQUF9JRCwKICAgIGJ5dGVjXzEgLy8gMHg3MjY1Njc2OTczNzQ3Mjc5NWY2MTcwNzA1ZjY5NjQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjQ5CiAgICAvLyBVSW50NjQoKSwKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo0OC01MQogICAgLy8gc2VsZi5yZWdpc3RyeV9hcHBfaWQgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwKICAgIC8vICAgICBrZXk9Y291bmNpbF9jZmcuR1NfS0VZX1JFR0lTVFJZX0FQUF9JRCwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo1NQogICAgLy8ga2V5PWNvdW5jaWxfY2ZnLkdTX0tFWV9NRU1CRVJfQ09VTlQsCiAgICBieXRlY18wIC8vIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo1NAogICAgLy8gVUludDY0KCksCiAgICBpbnRjXzAgLy8gMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NTMtNTYKICAgIC8vIHNlbGYubWVtYmVyX2NvdW50ID0gR2xvYmFsU3RhdGUoCiAgICAvLyAgICAgVUludDY0KCksCiAgICAvLyAgICAga2V5PWNvdW5jaWxfY2ZnLkdTX0tFWV9NRU1CRVJfQ09VTlQsCiAgICAvLyApCiAgICBhcHBfZ2xvYmFsX3B1dAoKbWFpbl9hZnRlcl9pZl9lbHNlQDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyOS0zNwogICAgLy8gY2xhc3MgQ291bmNpbCgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y291bmNpbF9jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y291bmNpbF9jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jb3VuY2lsX2NmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y291bmNpbF9jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICBwdXNoYnl0ZXMgMHgwNzhlZjI5NSAvLyBtZXRob2QgInVwZGF0ZV9jb3VuY2lsKCl2b2lkIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggbWFpbl91cGRhdGVfY291bmNpbF9yb3V0ZUA0CgptYWluX3N3aXRjaF9jYXNlX25leHRANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjI5LTM3CiAgICAvLyBjbGFzcyBDb3VuY2lsKAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jb3VuY2lsX2NmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jb3VuY2lsX2NmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jb3VuY2lsX2NmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gbXVzdCBiZSBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYnogbWFpbl9jcmVhdGVfTm9PcEAxMgogICAgcHVzaGJ5dGVzcyAweDE5ZDcwMmZhIDB4OTJlYmY2ZGUgMHhmN2Y0NDgxZiAweGRiZDgzZGQ5IC8vIG1ldGhvZCAiYWRkX21lbWJlcihhZGRyZXNzKXZvaWQiLCBtZXRob2QgInJlbW92ZV9tZW1iZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJ2b3RlKHVpbnQ2NCxib29sKXZvaWQiLCBtZXRob2QgIm9wX3VwKCl2b2lkIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggYWRkX21lbWJlciByZW1vdmVfbWVtYmVyIHZvdGUgbWFpbl9vcF91cF9yb3V0ZUAxMAogICAgZXJyCgptYWluX29wX3VwX3JvdXRlQDEwOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MjE5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKbWFpbl9jcmVhdGVfTm9PcEAxMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjI5LTM3CiAgICAvLyBjbGFzcyBDb3VuY2lsKAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jb3VuY2lsX2NmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jb3VuY2lsX2NmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jb3VuY2lsX2NmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHB1c2hieXRlcyAweDI0MGQyZjY3IC8vIG1ldGhvZCAiY3JlYXRlKHVpbnQ2NCl2b2lkIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggY3JlYXRlCiAgICBlcnIKCm1haW5fdXBkYXRlX2NvdW5jaWxfcm91dGVANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5Ojk3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoYWxsb3dfYWN0aW9ucz1bIlVwZGF0ZUFwcGxpY2F0aW9uIl0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICBwdXNoaW50IDQgLy8gVXBkYXRlQXBwbGljYXRpb24KICAgID09CiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgJiYKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gbXVzdCBiZSBVcGRhdGVBcHBsaWNhdGlvbiAmJiBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBiIHVwZGF0ZV9jb3VuY2lsCgoKLy8gc21hcnRfY29udHJhY3RzLmNvdW5jaWwuY29udHJhY3QuQ291bmNpbC5jcmVhdGVbcm91dGluZ10oKSAtPiB2b2lkOgpjcmVhdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo4MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGNyZWF0ZT0icmVxdWlyZSIpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgcHVzaGludCA4IC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo5MgogICAgLy8gYXNzZXJ0IHJlZ2lzdHJ5X2lkID4gMCwgZXJyLklOVkFMSURfUkVHSVNUUllfSUQKICAgIGR1cAogICAgYXNzZXJ0IC8vIEludmFsaWQgcmVnaXN0cnkgSUQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5Ojk0CiAgICAvLyBzZWxmLnJlZ2lzdHJ5X2FwcF9pZC52YWx1ZSA9IHJlZ2lzdHJ5X2lkCiAgICBieXRlY18xIC8vIDB4NzI2NTY3Njk3Mzc0NzI3OTVmNjE3MDcwNWY2OTY0CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6OTUKICAgIC8vIHNlbGYubWVtYmVyX2NvdW50LnZhbHVlID0gVUludDY0KDApCiAgICBieXRlY18wIC8vIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0CiAgICBpbnRjXzAgLy8gMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjgwCiAgICAvLyBAYXJjNC5hYmltZXRob2QoY3JlYXRlPSJyZXF1aXJlIikKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBzbWFydF9jb250cmFjdHMuY291bmNpbC5jb250cmFjdC5Db3VuY2lsLnVwZGF0ZV9jb3VuY2lsW3JvdXRpbmddKCkgLT4gdm9pZDoKdXBkYXRlX2NvdW5jaWw6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDYKICAgIC8vIGFzc2VydCBzZWxmLmlzX21hbmFnZXIoKSwgZXJyLlVOQVVUSE9SSVpFRAogICAgY2FsbHN1YiBpc19tYW5hZ2VyCiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo5NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGFsbG93X2FjdGlvbnM9WyJVcGRhdGVBcHBsaWNhdGlvbiJdKQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5jb3VuY2lsLmNvbnRyYWN0LkNvdW5jaWwuYWRkX21lbWJlcltyb3V0aW5nXSgpIC0+IHZvaWQ6CmFkZF9tZW1iZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjEyMQogICAgLy8gYXNzZXJ0IHNlbGYuaXNfbWFuYWdlcigpLCBlcnIuVU5BVVRIT1JJWkVECiAgICBjYWxsc3ViIGlzX21hbmFnZXIKICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjEyMgogICAgLy8gYXNzZXJ0IGFkZHJlc3MubmF0aXZlIG5vdCBpbiBzZWxmLm1lbWJlcnMsIGVyci5WT1RFUl9BTFJFQURZX0FTU0lHTkVECiAgICBieXRlY18yIC8vIDB4NGQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBWb3RlciBBbHJlYWR5IEFzc2lnbmVkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMjQKICAgIC8vIHNlbGYubWVtYmVyc1thZGRyZXNzLm5hdGl2ZV0gPSB0eXAuRW1wdHkoKQogICAgcHVzaGJ5dGVzIDB4CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMjUKICAgIC8vIHNlbGYubWVtYmVyX2NvdW50LnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWVtYmVyX2NvdW50IGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjXzAgLy8gMHg2ZDY1NmQ2MjY1NzI1ZjYzNmY3NTZlNzQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzLmNvdW5jaWwuY29udHJhY3QuQ291bmNpbC5yZW1vdmVfbWVtYmVyW3JvdXRpbmddKCkgLT4gdm9pZDoKcmVtb3ZlX21lbWJlcjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjEyNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTQwCiAgICAvLyBhc3NlcnQgc2VsZi5pc19tYW5hZ2VyKCksIGVyci5VTkFVVEhPUklaRUQKICAgIGNhbGxzdWIgaXNfbWFuYWdlcgogICAgYXNzZXJ0IC8vIFVuYXV0aG9yaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTQxCiAgICAvLyBhc3NlcnQgYWRkcmVzcy5uYXRpdmUgaW4gc2VsZi5tZW1iZXJzLCBlcnIuVk9URVJfTk9UX0ZPVU5ECiAgICBieXRlY18yIC8vIDB4NGQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBWb3RlciBub3QgZm91bmQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE0MwogICAgLy8gZGVsIHNlbGYubWVtYmVyc1thZGRyZXNzLm5hdGl2ZV0KICAgIGJveF9kZWwKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTQ0CiAgICAvLyBzZWxmLm1lbWJlcl9jb3VudC52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDZkNjU2ZDYyNjU3MjVmNjM2Zjc1NmU3NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1lbWJlcl9jb3VudCBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlY18wIC8vIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTI3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5jb3VuY2lsLmNvbnRyYWN0LkNvdW5jaWwudm90ZVtyb3V0aW5nXSgpIC0+IHZvaWQ6CnZvdGU6CiAgICBwdXNoYnl0ZXMgIiIKICAgIGR1cG4gNAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTQ2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwbiAyCiAgICBsZW4KICAgIHB1c2hpbnQgOCAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgZHVwCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGNvdmVyIDIKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzEgLy8gMQogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5ib29sCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICBzd2FwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNjIKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyIGluIHNlbGYubWVtYmVycywgZXJyLlZPVEVSX05PVF9GT1VORAogICAgYnl0ZWNfMiAvLyAweDRkCiAgICB0eG4gU2VuZGVyCiAgICBjb25jYXQKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYXNzZXJ0IC8vIFZvdGVyIG5vdCBmb3VuZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTY0CiAgICAvLyBpZiBwcm9wb3NhbF9pZCBub3QgaW4gc2VsZi52b3RlczoKICAgIGl0b2IKICAgIHB1c2hieXRlcyAweDU2CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGR1cAogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBibnogdm90ZV9lbHNlX2JvZHlANAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTY1LTE3MQogICAgLy8gIyB3ZSBkb250IG5lZWQgYW55IGVycm9yIGhhbmRsaW5nIGhlcmUKICAgIC8vICMgaWYgaXRzIGludmFsaWQgdGhlIHRyYW5zYWN0aW9uIHdpbGwgZmFpbAogICAgLy8gYXJjNC5hYmlfY2FsbCgKICAgIC8vICAgICByZWdpc3RyeV9jb250cmFjdC5YR292UmVnaXN0cnkuaXNfcHJvcG9zYWwsCiAgICAvLyAgICAgYXJjNC5VSW50NjQocHJvcG9zYWxfaWQpLAogICAgLy8gICAgIGFwcF9pZD1zZWxmLnJlZ2lzdHJ5X2FwcF9pZC52YWx1ZSwKICAgIC8vICkKICAgIGl0eG5fYmVnaW4KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3MAogICAgLy8gYXBwX2lkPXNlbGYucmVnaXN0cnlfYXBwX2lkLnZhbHVlLAogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzEgLy8gMHg3MjY1Njc2OTczNzQ3Mjc5NWY2MTcwNzA1ZjY5NjQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5yZWdpc3RyeV9hcHBfaWQgZXhpc3RzCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE2NS0xNzEKICAgIC8vICMgd2UgZG9udCBuZWVkIGFueSBlcnJvciBoYW5kbGluZyBoZXJlCiAgICAvLyAjIGlmIGl0cyBpbnZhbGlkIHRoZSB0cmFuc2FjdGlvbiB3aWxsIGZhaWwKICAgIC8vIGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcmVnaXN0cnlfY29udHJhY3QuWEdvdlJlZ2lzdHJ5LmlzX3Byb3Bvc2FsLAogICAgLy8gICAgIGFyYzQuVUludDY0KHByb3Bvc2FsX2lkKSwKICAgIC8vICAgICBhcHBfaWQ9c2VsZi5yZWdpc3RyeV9hcHBfaWQudmFsdWUsCiAgICAvLyApCiAgICBwdXNoYnl0ZXMgMHgyNjk4MzIwMCAvLyBtZXRob2QgImlzX3Byb3Bvc2FsKHVpbnQ2NCl2b2lkIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGRpZyA0CiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMCAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3My0xNzUKICAgIC8vIHN0YXR1cywgZXhpc3RzID0gQXBwR2xvYmFsLmdldF9leF91aW50NjQoCiAgICAvLyAgICAgcHJvcG9zYWxfaWQsIEJ5dGVzKHByb3Bvc2FsX2NmZy5HU19LRVlfU1RBVFVTKQogICAgLy8gKQogICAgZGlnIDMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3NAogICAgLy8gcHJvcG9zYWxfaWQsIEJ5dGVzKHByb3Bvc2FsX2NmZy5HU19LRVlfU1RBVFVTKQogICAgcHVzaGJ5dGVzIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNzMtMTc1CiAgICAvLyBzdGF0dXMsIGV4aXN0cyA9IEFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLCBCeXRlcyhwcm9wb3NhbF9jZmcuR1NfS0VZX1NUQVRVUykKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNzcKICAgIC8vIGFzc2VydCBleGlzdHMsIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTc4CiAgICAvLyBhc3NlcnQgc3RhdHVzID09IHByb3Bvc2FsX2VubS5TVEFUVVNfQVBQUk9WRUQsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMKICAgIHB1c2hpbnQgMzAgLy8gMzAKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTgyCiAgICAvLyBhZGRyZXNzPWFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSwKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE4MS0xODQKICAgIC8vIHR5cC5Db3VuY2lsVm90ZSgKICAgIC8vICAgICBhZGRyZXNzPWFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSwKICAgIC8vICAgICBibG9jaz1hcmM0LkJvb2woYmxvY2spLAogICAgLy8gKQogICAgZGlnIDMKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTgwLTE4NQogICAgLy8gc2VsZi52b3Rlc1twcm9wb3NhbF9pZF0gPSBhcmM0LkR5bmFtaWNBcnJheSgKICAgIC8vICAgICB0eXAuQ291bmNpbFZvdGUoCiAgICAvLyAgICAgICAgIGFkZHJlc3M9YXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICAgICAgICBibG9jaz1hcmM0LkJvb2woYmxvY2spLAogICAgLy8gICAgICkKICAgIC8vICkKICAgIHB1c2hieXRlcyAweDAwMDEKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZGlnIDEKICAgIGR1cAogICAgYm94X2RlbAogICAgcG9wCiAgICBzd2FwCiAgICBib3hfcHV0Cgp2b3RlX2FmdGVyX2lmX2Vsc2VAMTY6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgp2b3RlX2Vsc2VfYm9keUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTg4CiAgICAvLyBoYWxmX3BsdXNfb25lID0gKHNlbGYubWVtYmVyX2NvdW50LnZhbHVlIC8vIDIpICsgMQogICAgaW50Y18wIC8vIDAKICAgIGJ5dGVjXzAgLy8gMHg2ZDY1NmQ2MjY1NzI1ZjYzNmY3NTZlNzQKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5tZW1iZXJfY291bnQgZXhpc3RzCiAgICBpbnRjXzIgLy8gMgogICAgLwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ1cnkgOAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTg5CiAgICAvLyBhcHByb3ZhbHMgPSBVSW50NjQoMCkgaWYgYmxvY2sgZWxzZSBVSW50NjQoMSkKICAgIGRpZyAxCiAgICAhCiAgICBkdXAKICAgIGJ1cnkgMTEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE5MAogICAgLy8gcmVqZWN0aW9ucyA9IFVJbnQ2NCgwKSBpZiBub3QgYmxvY2sgZWxzZSBVSW50NjQoMSkKICAgICEKICAgIGJ1cnkgNgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTkyCiAgICAvLyBmb3IgaSBpbiB1cmFuZ2Uoc2VsZi52b3Rlc1twcm9wb3NhbF9pZF0ubGVuZ3RoKToKICAgIGR1cAogICAgaW50Y18wIC8vIDAKICAgIGludGNfMiAvLyAyCiAgICBib3hfZXh0cmFjdAogICAgYnRvaQogICAgYnVyeSA5CiAgICBpbnRjXzAgLy8gMAogICAgYnVyeSA3Cgp2b3RlX2Zvcl9oZWFkZXJANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE5MgogICAgLy8gZm9yIGkgaW4gdXJhbmdlKHNlbGYudm90ZXNbcHJvcG9zYWxfaWRdLmxlbmd0aCk6CiAgICBkaWcgNgogICAgZGlnIDkKICAgIDwKICAgIGJ6IHZvdGVfYWZ0ZXJfZm9yQDExCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxOTQKICAgIC8vIFR4bi5zZW5kZXIgIT0gc2VsZi52b3Rlc1twcm9wb3NhbF9pZF1baV0uYWRkcmVzcwogICAgZGlnIDYKICAgIHB1c2hpbnQgMzMgLy8gMzMKICAgICoKICAgIGludGNfMiAvLyAyCiAgICArCiAgICBkaWcgMQogICAgc3dhcAogICAgcHVzaGludCAzMyAvLyAzMwogICAgYm94X2V4dHJhY3QKICAgIGR1cAogICAgZXh0cmFjdCAwIDMyCiAgICB0eG4gU2VuZGVyCiAgICAhPQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTkzLTE5NQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBUeG4uc2VuZGVyICE9IHNlbGYudm90ZXNbcHJvcG9zYWxfaWRdW2ldLmFkZHJlc3MKICAgIC8vICksIGVyci5WT1RFUl9BTFJFQURZX1ZPVEVECiAgICBhc3NlcnQgLy8gVm90ZXIgYWxyZWFkeSB2b3RlZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTk3CiAgICAvLyBpZiBzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXVtpXS5ibG9jazoKICAgIHB1c2hpbnQgMjU2IC8vIDI1NgogICAgZ2V0Yml0CiAgICBieXRlY18zIC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICB1bmNvdmVyIDIKICAgIHNldGJpdAogICAgYnl0ZWNfMyAvLyAweDAwCiAgICAhPQogICAgYnogdm90ZV9lbHNlX2JvZHlAOAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTk4CiAgICAvLyByZWplY3Rpb25zICs9IDEKICAgIGRpZyA1CiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnVyeSA2Cgp2b3RlX2FmdGVyX2lmX2Vsc2VAOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE5MgogICAgLy8gZm9yIGkgaW4gdXJhbmdlKHNlbGYudm90ZXNbcHJvcG9zYWxfaWRdLmxlbmd0aCk6CiAgICBkaWcgNgogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ1cnkgNwogICAgYiB2b3RlX2Zvcl9oZWFkZXJANQoKdm90ZV9lbHNlX2JvZHlAODoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjIwMAogICAgLy8gYXBwcm92YWxzICs9IDEKICAgIGRpZyA5CiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgYnVyeSAxMAogICAgYiB2b3RlX2FmdGVyX2lmX2Vsc2VAOQoKdm90ZV9hZnRlcl9mb3JAMTE6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyMDIKICAgIC8vIHNlbGYudm90ZXNbcHJvcG9zYWxfaWRdLmFwcGVuZCgKICAgIGR1cG4gMgogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90ZXMgZW50cnkgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyMDQKICAgIC8vIGFkZHJlc3M9YXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgdHhuIFNlbmRlcgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MjAzLTIwNgogICAgLy8gdHlwLkNvdW5jaWxWb3RlKAogICAgLy8gICAgIGFkZHJlc3M9YXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICAgIGJsb2NrPWFyYzQuQm9vbChibG9jayksCiAgICAvLyApCiAgICBkaWcgNQogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyMDItMjA3CiAgICAvLyBzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXS5hcHBlbmQoCiAgICAvLyAgICAgdHlwLkNvdW5jaWxWb3RlKAogICAgLy8gICAgICAgICBhZGRyZXNzPWFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSwKICAgIC8vICAgICAgICAgYmxvY2s9YXJjNC5Cb29sKGJsb2NrKSwKICAgIC8vICAgICApCiAgICAvLyApCiAgICBkaWcgMQogICAgc3dhcAogICAgY29uY2F0IC8vIG9uIGVycm9yOiBtYXggYXJyYXkgbGVuZ3RoIGV4Y2VlZGVkCiAgICBzd2FwCiAgICBpbnRjXzAgLy8gMAogICAgZXh0cmFjdF91aW50MTYKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBpdG9iCiAgICBleHRyYWN0IDYgMgogICAgcmVwbGFjZTIgMAogICAgZGlnIDEKICAgIGJveF9kZWwKICAgIHBvcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MjA5CiAgICAvLyBpZiBhcHByb3ZhbHMgPj0gaGFsZl9wbHVzX29uZSBvciByZWplY3Rpb25zID49IGhhbGZfcGx1c19vbmU6CiAgICBkaWcgOQogICAgZGlnIDgKICAgID49CiAgICBibnogdm90ZV9pZl9ib2R5QDEzCiAgICBkaWcgNQogICAgZGlnIDgKICAgID49CiAgICBieiB2b3RlX2FmdGVyX2lmX2Vsc2VAMTYKCnZvdGVfaWZfYm9keUAxMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjIxMC0yMTEKICAgIC8vICMgdGhpcyB3aWxsIGFsbG93IHRoZSBwcm9wb3NhbCB0byBiZSByZXZpZXdlZAogICAgLy8gYmxvY2sgPSByZWplY3Rpb25zID49IGhhbGZfcGx1c19vbmUKICAgIGRpZyA1CiAgICBkaWcgOAogICAgPj0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjIxMy0yMTUKICAgIC8vIGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwucmV2aWV3LCBibG9jaywgYXBwX2lkPXByb3Bvc2FsX2lkCiAgICAvLyApCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyMTQKICAgIC8vIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLnJldmlldywgYmxvY2ssIGFwcF9pZD1wcm9wb3NhbF9pZAogICAgYnl0ZWNfMyAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIGRpZyA0CiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjIxMy0yMTUKICAgIC8vIGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwucmV2aWV3LCBibG9jaywgYXBwX2lkPXByb3Bvc2FsX2lkCiAgICAvLyApCiAgICBwdXNoYnl0ZXMgMHgyMTJkOWYwNyAvLyBtZXRob2QgInJldmlldyhib29sKXZvaWQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIHB1c2hpbnQgNiAvLyBhcHBsCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICBpbnRjXzAgLy8gMAogICAgaXR4bl9maWVsZCBGZWUKICAgIGl0eG5fc3VibWl0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyMTcKICAgIC8vIGRlbCBzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXQogICAgZHVwCiAgICBib3hfZGVsCiAgICBwb3AKICAgIGIgdm90ZV9hZnRlcl9pZl9lbHNlQDE2CgoKLy8gc21hcnRfY29udHJhY3RzLmNvdW5jaWwuY29udHJhY3QuQ291bmNpbC5pc19tYW5hZ2VyKCkgLT4gdWludDY0Ogppc19tYW5hZ2VyOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NzYKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IEFjY291bnQoCiAgICB0eG4gU2VuZGVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo2OQogICAgLy8gc2VsZi5yZWdpc3RyeV9hcHBfaWQudmFsdWUsIGdsb2JhbF9zdGF0ZV9rZXkKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18xIC8vIDB4NzI2NTY3Njk3Mzc0NzI3OTVmNjE3MDcwNWY2OTY0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYucmVnaXN0cnlfYXBwX2lkIGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NzcKICAgIC8vIHNlbGYuZ2V0X2J5dGVzX2Zyb21fcmVnaXN0cnlfY29uZmlnKEJ5dGVzKHJlZ19jZmcuR1NfS0VZX1hHT1ZfTUFOQUdFUikpCiAgICBwdXNoYnl0ZXMgMHg3ODY3NmY3NjVmNmQ2MTZlNjE2NzY1NzIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjY4LTcwCiAgICAvLyB2YWx1ZSwgZXhpc3RzID0gQXBwR2xvYmFsLmdldF9leF9ieXRlcygKICAgIC8vICAgICBzZWxmLnJlZ2lzdHJ5X2FwcF9pZC52YWx1ZSwgZ2xvYmFsX3N0YXRlX2tleQogICAgLy8gKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjcxCiAgICAvLyBhc3NlcnQgZXhpc3RzLCBlcnIuTUlTU0lOR19DT05GSUcKICAgIGFzc2VydCAvLyBNaXNzaW5nIENvbmZpZwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NzYtNzgKICAgIC8vIHJldHVybiBUeG4uc2VuZGVyID09IEFjY291bnQoCiAgICAvLyAgICAgc2VsZi5nZXRfYnl0ZXNfZnJvbV9yZWdpc3RyeV9jb25maWcoQnl0ZXMocmVnX2NmZy5HU19LRVlfWEdPVl9NQU5BR0VSKSkKICAgIC8vICkKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gQWRkcmVzcyBsZW5ndGggaXMgMzIgYnl0ZXMKICAgID09CiAgICByZXRzdWIK", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "byteCode": { "approval": "CiAEAAECICYEDG1lbWJlcl9jb3VudA9yZWdpc3RyeV9hcHBfaWQBTQEAMRhAABcxNRREMTQkEkQxNxREMTYURCkiZygiZ4AEB47ylTYaAI4BAD0xGRREMRhBACaCBAQZ1wL6BJLr9t4E9/RIHwTb2D3ZNhoAjgQANwBaAHsAAQAjQ4AEJA0vZzYaAI4BAA0AMRmBBBIxGBBEQgAUNhoBSRWBCBJEF0lEKUxnKCJnI0OIAW1EI0M2GgFJFSUSRIgBX0QqTFBJvUUBFESAAL8iKGVEIwgoTGcjQzYaAUkVJRJEiAE8RCpMUEm9RQFEvEgiKGVEIwkoTGcjQ4AARwQ2GgFHAhWBCBJEF0k2GgJJTgJJFSMSRCJTTCoxAFC9RQFEFoABVkxQSb1FAUAAP7EiKWVEshiABCaYMgCyGksEshqBBrIQIrIBs0sDgAZzdGF0dXNlRIEeEkQxAEsDUIACAAFMUEsBSbxITL8jQyIoZUQkCiMIRQhLARRJRQsURQZJIiS6F0UJIkUHSwZLCQxBADtLBoEhCyQISwFMgSG6SVcAIDEAE0SBgAJTKyJPAlQrE0EAD0sFIwhFBksGIwhFB0L/xksJIwhFCkL/7kcCvkQxAEsFUEsBTFBMIlkjCBZXBgJcAEsBvEi/SwlLCA9AAAhLBUsID0H/cUsFSwgPsSsiTwJUSwSyGIAEIS2fB7IashqBBrIQIrIBs0m8SEL/SjEAIillRIAMeGdvdl9tYW5hZ2VyZURJFSUSRBKJ", "clear": "CoEBQw==" }, "events": [], "templateVariables": {} };
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
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the Council smart contract
 */
export class CouncilParamsFactory {
    /**
     * Gets available create ABI call param factories
     */
    static get create() {
        return {
            _resolveByMethod(params) {
                switch (params.method) {
                    case 'create':
                    case 'create(uint64)void':
                        return CouncilParamsFactory.create.create(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs create ABI call params for the Council smart contract using the create(uint64)void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            create(params) {
                return {
                    ...params,
                    method: 'create(uint64)void',
                    args: Array.isArray(params.args) ? params.args : [params.args.registryId],
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
                    case 'update_council':
                    case 'update_council()void':
                        return CouncilParamsFactory.update.updateCouncil(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs update ABI call params for the Council smart contract using the update_council()void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            updateCouncil(params) {
                return {
                    ...params,
                    method: 'update_council()void',
                    args: Array.isArray(params.args) ? params.args : [],
                };
            },
        };
    }
    /**
     * Constructs a no op call for the add_member(address)void ABI method
     *
     * Add a member to the council.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static addMember(params) {
        return {
            ...params,
            method: 'add_member(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.address],
        };
    }
    /**
     * Constructs a no op call for the remove_member(address)void ABI method
     *
     * Remove a member from the council.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static removeMember(params) {
        return {
            ...params,
            method: 'remove_member(address)void',
            args: Array.isArray(params.args) ? params.args : [params.args.address],
        };
    }
    /**
     * Constructs a no op call for the vote(uint64,bool)void ABI method
     *
     * Cast a vote on a proposal.
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static vote(params) {
        return {
            ...params,
            method: 'vote(uint64,bool)void',
            args: Array.isArray(params.args) ? params.args : [params.args.proposalId, params.args.block],
        };
    }
    /**
     * Constructs a no op call for the op_up()void ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static opUp(params) {
        return {
            ...params,
            method: 'op_up()void',
            args: Array.isArray(params.args) ? params.args : [],
        };
    }
}
/**
 * A factory to create and deploy one or more instance of the Council smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class CouncilFactory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    appFactory;
    /**
     * Creates a new instance of `CouncilFactory`
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
        return new CouncilClient(this.appFactory.getAppClientById(params));
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
        return new CouncilClient(await this.appFactory.getAppClientByCreatorAndName(params));
    }
    /**
     * Idempotently deploys the Council smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    async deploy(params = {}) {
        const result = await this.appFactory.deploy({
            ...params,
            createParams: params.createParams?.method ? CouncilParamsFactory.create._resolveByMethod(params.createParams) : params.createParams ? params.createParams : undefined,
            updateParams: params.updateParams?.method ? CouncilParamsFactory.update._resolveByMethod(params.updateParams) : params.updateParams ? params.updateParams : undefined,
        });
        return { result: result.result, appClient: new CouncilClient(result.appClient) };
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
             * Creates a new instance of the Council smart contract using the create(uint64)void ABI method.
             *
             * Create a new council contract.
             *
             * @param params The params for the smart contract call
             * @returns The create params
             */
            create: (params) => {
                return this.appFactory.params.create(CouncilParamsFactory.create.create(params));
            },
        },
        /**
         * Gets available deployUpdate methods
         */
        deployUpdate: {
            /**
             * Updates an existing instance of the Council smart contract using the update_council()void ABI method.
             *
             * Update the council contract.
             *
             * @param params The params for the smart contract call
             * @returns The deployUpdate params
             */
            updateCouncil: (params = { args: [] }) => {
                return this.appFactory.params.deployUpdate(CouncilParamsFactory.update.updateCouncil(params));
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
             * Creates a new instance of the Council smart contract using the create(uint64)void ABI method.
             *
             * Create a new council contract.
             *
             * @param params The params for the smart contract call
             * @returns The create transaction
             */
            create: (params) => {
                return this.appFactory.createTransaction.create(CouncilParamsFactory.create.create(params));
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
             * Creates a new instance of the Council smart contract using an ABI method call using the create(uint64)void ABI method.
             *
             * Create a new council contract.
             *
             * @param params The params for the smart contract call
             * @returns The create result
             */
            create: async (params) => {
                const result = await this.appFactory.send.create(CouncilParamsFactory.create.create(params));
                return { result: { ...result.result, return: result.result.return }, appClient: new CouncilClient(result.appClient) };
            },
        },
    };
}
/**
 * A client to make calls to the Council smart contract
 */
export class CouncilClient {
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
     * Returns a new `CouncilClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static async fromCreatorAndName(params) {
        return new CouncilClient(await _AppClient.fromCreatorAndName({ ...params, appSpec: APP_SPEC }));
    }
    /**
     * Returns an `CouncilClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static async fromNetwork(params) {
        return new CouncilClient(await _AppClient.fromNetwork({ ...params, appSpec: APP_SPEC }));
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
             * Updates an existing instance of the Council smart contract using the `update_council()void` ABI method.
             *
             * Update the council contract.
             *
             * @param params The params for the smart contract call
             * @returns The update params
             */
            updateCouncil: (params = { args: [] }) => {
                return this.appClient.params.update(CouncilParamsFactory.update.updateCouncil(params));
            },
        },
        /**
         * Makes a clear_state call to an existing instance of the Council smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.params.bare.clearState(params);
        },
        /**
         * Makes a call to the Council smart contract using the `add_member(address)void` ABI method.
         *
         * Add a member to the council.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        addMember: (params) => {
            return this.appClient.params.call(CouncilParamsFactory.addMember(params));
        },
        /**
         * Makes a call to the Council smart contract using the `remove_member(address)void` ABI method.
         *
         * Remove a member from the council.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        removeMember: (params) => {
            return this.appClient.params.call(CouncilParamsFactory.removeMember(params));
        },
        /**
         * Makes a call to the Council smart contract using the `vote(uint64,bool)void` ABI method.
         *
         * Cast a vote on a proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        vote: (params) => {
            return this.appClient.params.call(CouncilParamsFactory.vote(params));
        },
        /**
         * Makes a call to the Council smart contract using the `op_up()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        opUp: (params = { args: [] }) => {
            return this.appClient.params.call(CouncilParamsFactory.opUp(params));
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
             * Updates an existing instance of the Council smart contract using the `update_council()void` ABI method.
             *
             * Update the council contract.
             *
             * @param params The params for the smart contract call
             * @returns The update transaction
             */
            updateCouncil: (params = { args: [] }) => {
                return this.appClient.createTransaction.update(CouncilParamsFactory.update.updateCouncil(params));
            },
        },
        /**
         * Makes a clear_state call to an existing instance of the Council smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.createTransaction.bare.clearState(params);
        },
        /**
         * Makes a call to the Council smart contract using the `add_member(address)void` ABI method.
         *
         * Add a member to the council.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        addMember: (params) => {
            return this.appClient.createTransaction.call(CouncilParamsFactory.addMember(params));
        },
        /**
         * Makes a call to the Council smart contract using the `remove_member(address)void` ABI method.
         *
         * Remove a member from the council.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        removeMember: (params) => {
            return this.appClient.createTransaction.call(CouncilParamsFactory.removeMember(params));
        },
        /**
         * Makes a call to the Council smart contract using the `vote(uint64,bool)void` ABI method.
         *
         * Cast a vote on a proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        vote: (params) => {
            return this.appClient.createTransaction.call(CouncilParamsFactory.vote(params));
        },
        /**
         * Makes a call to the Council smart contract using the `op_up()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        opUp: (params = { args: [] }) => {
            return this.appClient.createTransaction.call(CouncilParamsFactory.opUp(params));
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
             * Updates an existing instance of the Council smart contract using the `update_council()void` ABI method.
             *
             * Update the council contract.
             *
             * @param params The params for the smart contract call
             * @returns The update result
             */
            updateCouncil: async (params = { args: [] }) => {
                const result = await this.appClient.send.update(CouncilParamsFactory.update.updateCouncil(params));
                return { ...result, return: result.return };
            },
        },
        /**
         * Makes a clear_state call to an existing instance of the Council smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.send.bare.clearState(params);
        },
        /**
         * Makes a call to the Council smart contract using the `add_member(address)void` ABI method.
         *
         * Add a member to the council.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        addMember: async (params) => {
            const result = await this.appClient.send.call(CouncilParamsFactory.addMember(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Council smart contract using the `remove_member(address)void` ABI method.
         *
         * Remove a member from the council.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        removeMember: async (params) => {
            const result = await this.appClient.send.call(CouncilParamsFactory.removeMember(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Council smart contract using the `vote(uint64,bool)void` ABI method.
         *
         * Cast a vote on a proposal.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        vote: async (params) => {
            const result = await this.appClient.send.call(CouncilParamsFactory.vote(params));
            return { ...result, return: result.return };
        },
        /**
         * Makes a call to the Council smart contract using the `op_up()void` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        opUp: async (params = { args: [] }) => {
            const result = await this.appClient.send.call(CouncilParamsFactory.opUp(params));
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
        return new CouncilClient(this.appClient.clone(params));
    }
    /**
     * Methods to access state for the current Council app
     */
    state = {
        /**
         * Methods to access global state for the current Council app
         */
        global: {
            /**
             * Get all current keyed values from global state
             */
            getAll: async () => {
                const result = await this.appClient.state.global.getAll();
                return {
                    registryAppId: result.registry_app_id,
                    memberCount: result.member_count,
                };
            },
            /**
             * Get the current value of the registry_app_id key in global state
             */
            registryAppId: async () => { return (await this.appClient.state.global.getValue("registry_app_id")); },
            /**
             * Get the current value of the member_count key in global state
             */
            memberCount: async () => { return (await this.appClient.state.global.getValue("member_count")); },
        },
        /**
         * Methods to access box state for the current Council app
         */
        box: {
            /**
             * Get all current keyed values from box state
             */
            getAll: async () => {
                const result = await this.appClient.state.box.getAll();
                return {};
            },
            /**
             * Get values from the members map in box state
             */
            members: {
                /**
                 * Get all current values of the members map in box state
                 */
                getMap: async () => { return (await this.appClient.state.box.getMap("members")); },
                /**
                 * Get a current value of the members map by key from box state
                 */
                value: async (key) => { return await this.appClient.state.box.getMapValue("members", key); },
            },
            /**
             * Get values from the votes map in box state
             */
            votes: {
                /**
                 * Get all current values of the votes map in box state
                 */
                getMap: async () => { return (await this.appClient.state.box.getMap("votes")); },
                /**
                 * Get a current value of the votes map by key from box state
                 */
                value: async (key) => { return await this.appClient.state.box.getMapValue("votes", key); },
            },
        },
    };
    newGroup() {
        const client = this;
        const composer = this.algorand.newGroup();
        let promiseChain = Promise.resolve();
        const resultMappers = [];
        return {
            /**
             * Add a add_member(address)void method call against the Council contract
             */
            addMember(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.addMember(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a remove_member(address)void method call against the Council contract
             */
            removeMember(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.removeMember(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a vote(uint64,bool)void method call against the Council contract
             */
            vote(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.vote(params)));
                resultMappers.push(undefined);
                return this;
            },
            /**
             * Add a op_up()void method call against the Council contract
             */
            opUp(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.opUp(params)));
                resultMappers.push(undefined);
                return this;
            },
            get update() {
                return {
                    updateCouncil: (params) => {
                        promiseChain = promiseChain.then(async () => composer.addAppUpdateMethodCall(await client.params.update.updateCouncil(params)));
                        resultMappers.push(undefined);
                        return this;
                    },
                };
            },
            /**
             * Add a clear state call to the Council contract
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
