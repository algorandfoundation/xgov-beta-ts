import { getArc56ReturnValue } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "arcs": [], "name": "Council", "structs": {}, "methods": [{ "name": "create", "desc": "Create a new council contract.", "args": [{ "name": "admin", "type": "account", "desc": "The address of the admin who can manage the council." }, { "name": "registry_id", "type": "uint64", "desc": "The application ID of the XGovRegistry contract." }], "returns": { "type": "void" }, "events": [], "actions": { "create": ["NoOp"], "call": [] } }, { "name": "add_member", "desc": "Add a member to the council.", "args": [{ "name": "address", "type": "address", "desc": "The address of the member to add." }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "remove_member", "desc": "Remove a member from the council.", "args": [{ "name": "address", "type": "address", "desc": "The address of the member to remove." }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "vote", "desc": "Cast a vote on a proposal.", "args": [{ "name": "proposal_id", "type": "uint64", "desc": "The ID of the proposal to vote on." }, { "name": "block", "type": "bool", "desc": "Whether or not to block the proposal." }], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }, { "name": "op_up", "args": [], "returns": { "type": "void" }, "events": [], "actions": { "create": [], "call": ["NoOp"] } }], "state": { "schema": { "global": { "ints": 2, "bytes": 1 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "admin": { "key": "YWRtaW4=", "keyType": "AVMString", "valueType": "AVMBytes" }, "member_count": { "key": "bWVtYmVyX2NvdW50", "keyType": "AVMString", "valueType": "AVMUint64" }, "registry_app_id": { "key": "cmVnaXN0cnlfYXBwX2lk", "keyType": "AVMString", "valueType": "AVMUint64" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBzbWFydF9jb250cmFjdHMuY291bmNpbC5jb250cmFjdC5Db3VuY2lsLl9fYWxnb3B5X2VudHJ5cG9pbnRfd2l0aF9pbml0KCkgLT4gdWludDY0OgptYWluOgogICAgaW50Y2Jsb2NrIDAgMSAzMyAyCiAgICBieXRlY2Jsb2NrIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0IDB4MDAgMHg3MjY1Njc2OTczNzQ3Mjc5NWY2MTcwNzA1ZjY5NjQgMHg2MTY0NmQ2OTZlIDB4NGQKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBibnogbWFpbl9hZnRlcl9pZl9lbHNlQDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjM4CiAgICAvLyBUeG4uZ2xvYmFsX251bV9ieXRlX3NsaWNlID09IGNvdW5jaWxfY2ZnLkdMT0JBTF9CWVRFUwogICAgdHhuIEdsb2JhbE51bUJ5dGVTbGljZQogICAgaW50Y18xIC8vIDEKICAgID09CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTozNy0zOQogICAgLy8gYXNzZXJ0ICgKICAgIC8vICAgICBUeG4uZ2xvYmFsX251bV9ieXRlX3NsaWNlID09IGNvdW5jaWxfY2ZnLkdMT0JBTF9CWVRFUwogICAgLy8gKSwgZXJyLldST05HX0dMT0JBTF9CWVRFUwogICAgYXNzZXJ0IC8vIFdyb25nIEdsb2JhbCBCeXRlcyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo0MAogICAgLy8gYXNzZXJ0IFR4bi5nbG9iYWxfbnVtX3VpbnQgPT0gY291bmNpbF9jZmcuR0xPQkFMX1VJTlRTLCBlcnIuV1JPTkdfR0xPQkFMX1VJTlRTCiAgICB0eG4gR2xvYmFsTnVtVWludAogICAgaW50Y18zIC8vIDIKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgR2xvYmFsIFVJbnRzIGFsbG9jYXRpb24KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjQyCiAgICAvLyBUeG4ubG9jYWxfbnVtX2J5dGVfc2xpY2UgPT0gY291bmNpbF9jZmcuTE9DQUxfQllURVMKICAgIHR4biBMb2NhbE51bUJ5dGVTbGljZQogICAgIQogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NDEtNDMKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgVHhuLmxvY2FsX251bV9ieXRlX3NsaWNlID09IGNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTCiAgICAvLyApLCBlcnIuV1JPTkdfTE9DQUxfQllURVMKICAgIGFzc2VydCAvLyBXcm9uZyBMb2NhbCBCeXRlcyBhbGxvY2F0aW9uCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo0NAogICAgLy8gYXNzZXJ0IFR4bi5sb2NhbF9udW1fdWludCA9PSBjb3VuY2lsX2NmZy5MT0NBTF9VSU5UUywgZXJyLldST05HX0xPQ0FMX1VJTlRTCiAgICB0eG4gTG9jYWxOdW1VaW50CiAgICAhCiAgICBhc3NlcnQgLy8gV3JvbmcgTG9jYWwgVUludHMgYWxsb2NhdGlvbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NTMKICAgIC8vIGtleT1jb3VuY2lsX2NmZy5HU19LRVlfUkVHSVNUUllfQVBQX0lELAogICAgYnl0ZWNfMiAvLyAweDcyNjU2NzY5NzM3NDcyNzk1ZjYxNzA3MDVmNjk2NAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NTIKICAgIC8vIFVJbnQ2NCgpLAogICAgaW50Y18wIC8vIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjUxLTU0CiAgICAvLyBzZWxmLnJlZ2lzdHJ5X2FwcF9pZCA9IEdsb2JhbFN0YXRlKAogICAgLy8gICAgIFVJbnQ2NCgpLAogICAgLy8gICAgIGtleT1jb3VuY2lsX2NmZy5HU19LRVlfUkVHSVNUUllfQVBQX0lELAogICAgLy8gKQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjU4CiAgICAvLyBrZXk9Y291bmNpbF9jZmcuR1NfS0VZX01FTUJFUl9DT1VOVCwKICAgIGJ5dGVjXzAgLy8gMHg2ZDY1NmQ2MjY1NzI1ZjYzNmY3NTZlNzQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjU3CiAgICAvLyBVSW50NjQoKSwKICAgIGludGNfMCAvLyAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo1Ni01OQogICAgLy8gc2VsZi5tZW1iZXJfY291bnQgPSBHbG9iYWxTdGF0ZSgKICAgIC8vICAgICBVSW50NjQoKSwKICAgIC8vICAgICBrZXk9Y291bmNpbF9jZmcuR1NfS0VZX01FTUJFUl9DT1VOVCwKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfcHV0CgptYWluX2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjI3LTM1CiAgICAvLyBjbGFzcyBDb3VuY2lsKAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jb3VuY2lsX2NmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jb3VuY2lsX2NmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jb3VuY2lsX2NmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4biBOdW1BcHBBcmdzCiAgICBieiBtYWluX2FmdGVyX2lmX2Vsc2VAMTAKICAgIHB1c2hieXRlc3MgMHgwOGIzY2VmNiAweDE5ZDcwMmZhIDB4OTJlYmY2ZGUgMHhmN2Y0NDgxZiAweGRiZDgzZGQ5IC8vIG1ldGhvZCAiY3JlYXRlKGFjY291bnQsdWludDY0KXZvaWQiLCBtZXRob2QgImFkZF9tZW1iZXIoYWRkcmVzcyl2b2lkIiwgbWV0aG9kICJyZW1vdmVfbWVtYmVyKGFkZHJlc3Mpdm9pZCIsIG1ldGhvZCAidm90ZSh1aW50NjQsYm9vbCl2b2lkIiwgbWV0aG9kICJvcF91cCgpdm9pZCIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIG1hdGNoIG1haW5fY3JlYXRlX3JvdXRlQDUgbWFpbl9hZGRfbWVtYmVyX3JvdXRlQDYgbWFpbl9yZW1vdmVfbWVtYmVyX3JvdXRlQDcgbWFpbl92b3RlX3JvdXRlQDggbWFpbl9vcF91cF9yb3V0ZUA5CgptYWluX2FmdGVyX2lmX2Vsc2VAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyNy0zNQogICAgLy8gY2xhc3MgQ291bmNpbCgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y291bmNpbF9jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y291bmNpbF9jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jb3VuY2lsX2NmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y291bmNpbF9jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICBpbnRjXzAgLy8gMAogICAgcmV0dXJuCgptYWluX29wX3VwX3JvdXRlQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxOTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fdm90ZV9yb3V0ZUA4OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTI2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyNy0zNQogICAgLy8gY2xhc3MgQ291bmNpbCgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y291bmNpbF9jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y291bmNpbF9jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jb3VuY2lsX2NmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y291bmNpbF9jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBidG9pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBpbnRjXzAgLy8gMAogICAgZ2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMjYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHZvdGUKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fcmVtb3ZlX21lbWJlcl9yb3V0ZUA3OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTA3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToyNy0zNQogICAgLy8gY2xhc3MgQ291bmNpbCgKICAgIC8vICAgICBBUkM0Q29udHJhY3QsCiAgICAvLyAgICAgc3RhdGVfdG90YWxzPVN0YXRlVG90YWxzKAogICAgLy8gICAgICAgICBnbG9iYWxfYnl0ZXM9Y291bmNpbF9jZmcuR0xPQkFMX0JZVEVTLAogICAgLy8gICAgICAgICBnbG9iYWxfdWludHM9Y291bmNpbF9jZmcuR0xPQkFMX1VJTlRTLAogICAgLy8gICAgICAgICBsb2NhbF9ieXRlcz1jb3VuY2lsX2NmZy5MT0NBTF9CWVRFUywKICAgIC8vICAgICAgICAgbG9jYWxfdWludHM9Y291bmNpbF9jZmcuTE9DQUxfVUlOVFMsCiAgICAvLyAgICAgKSwKICAgIC8vICk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDcKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHJlbW92ZV9tZW1iZXIKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCm1haW5fYWRkX21lbWJlcl9yb3V0ZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6ODgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjI3LTM1CiAgICAvLyBjbGFzcyBDb3VuY2lsKAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jb3VuY2lsX2NmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jb3VuY2lsX2NmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jb3VuY2lsX2NmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5Ojg4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhZGRfbWVtYmVyCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgptYWluX2NyZWF0ZV9yb3V0ZUA1OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NjkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChjcmVhdGU9InJlcXVpcmUiKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjI3LTM1CiAgICAvLyBjbGFzcyBDb3VuY2lsKAogICAgLy8gICAgIEFSQzRDb250cmFjdCwKICAgIC8vICAgICBzdGF0ZV90b3RhbHM9U3RhdGVUb3RhbHMoCiAgICAvLyAgICAgICAgIGdsb2JhbF9ieXRlcz1jb3VuY2lsX2NmZy5HTE9CQUxfQllURVMsCiAgICAvLyAgICAgICAgIGdsb2JhbF91aW50cz1jb3VuY2lsX2NmZy5HTE9CQUxfVUlOVFMsCiAgICAvLyAgICAgICAgIGxvY2FsX2J5dGVzPWNvdW5jaWxfY2ZnLkxPQ0FMX0JZVEVTLAogICAgLy8gICAgICAgICBsb2NhbF91aW50cz1jb3VuY2lsX2NmZy5MT0NBTF9VSU5UUywKICAgIC8vICAgICApLAogICAgLy8gKToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGJ0b2kKICAgIHR4bmFzIEFjY291bnRzCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo2OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKGNyZWF0ZT0icmVxdWlyZSIpCiAgICBjYWxsc3ViIGNyZWF0ZQogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5jb3VuY2lsLmNvbnRyYWN0LkNvdW5jaWwuY3JlYXRlKGFkbWluOiBieXRlcywgcmVnaXN0cnlfaWQ6IHVpbnQ2NCkgLT4gdm9pZDoKY3JlYXRlOgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6NjktNzAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChjcmVhdGU9InJlcXVpcmUiKQogICAgLy8gZGVmIGNyZWF0ZShzZWxmLCBhZG1pbjogQWNjb3VudCwgcmVnaXN0cnlfaWQ6IFVJbnQ2NCkgLT4gTm9uZToKICAgIHByb3RvIDIgMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6ODIKICAgIC8vIGFzc2VydCByZWdpc3RyeV9pZCA+IDAsIGVyci5JTlZBTElEX1JFR0lTVFJZX0lECiAgICBmcmFtZV9kaWcgLTEKICAgIGFzc2VydCAvLyBJbnZhbGlkIHJlZ2lzdHJ5IElECiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo4NAogICAgLy8gc2VsZi5hZG1pbi52YWx1ZSA9IGFkbWluCiAgICBieXRlY18zIC8vIDB4NjE2NDZkNjk2ZQogICAgZnJhbWVfZGlnIC0yCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6ODUKICAgIC8vIHNlbGYucmVnaXN0cnlfYXBwX2lkLnZhbHVlID0gcmVnaXN0cnlfaWQKICAgIGJ5dGVjXzIgLy8gMHg3MjY1Njc2OTczNzQ3Mjc5NWY2MTcwNzA1ZjY5NjQKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5Ojg2CiAgICAvLyBzZWxmLm1lbWJlcl9jb3VudC52YWx1ZSA9IFVJbnQ2NCgwKQogICAgYnl0ZWNfMCAvLyAweDZkNjU2ZDYyNjU3MjVmNjM2Zjc1NmU3NAogICAgaW50Y18wIC8vIDAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMuY291bmNpbC5jb250cmFjdC5Db3VuY2lsLmFkZF9tZW1iZXIoYWRkcmVzczogYnl0ZXMpIC0+IHZvaWQ6CmFkZF9tZW1iZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weTo4OC04OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBhZGRfbWVtYmVyKHNlbGYsIGFkZHJlc3M6IGFyYzQuQWRkcmVzcykgLT4gTm9uZToKICAgIHByb3RvIDEgMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTAxCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciA9PSBzZWxmLmFkbWluLnZhbHVlLCBlcnIuVU5BVVRIT1JJWkVECiAgICB0eG4gU2VuZGVyCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMyAvLyAweDYxNjQ2ZDY5NmUKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5hZG1pbiBleGlzdHMKICAgID09CiAgICBhc3NlcnQgLy8gVW5hdXRob3JpemVkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDIKICAgIC8vIGFzc2VydCBhZGRyZXNzLm5hdGl2ZSBub3QgaW4gc2VsZi5tZW1iZXJzLCBlcnIuVk9URVJfQUxSRUFEWV9BU1NJR05FRAogICAgYnl0ZWMgNCAvLyAweDRkCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBWb3RlciBBbHJlYWR5IEFzc2lnbmVkCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDQKICAgIC8vIHNlbGYubWVtYmVyc1thZGRyZXNzLm5hdGl2ZV0gPSB0eXAuRW1wdHkoKQogICAgcHVzaGJ5dGVzIDB4CiAgICBib3hfcHV0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDUKICAgIC8vIHNlbGYubWVtYmVyX2NvdW50LnZhbHVlICs9IDEKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18wIC8vIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYubWVtYmVyX2NvdW50IGV4aXN0cwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGJ5dGVjXzAgLy8gMHg2ZDY1NmQ2MjY1NzI1ZjYzNmY3NTZlNzQKICAgIHN3YXAKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMuY291bmNpbC5jb250cmFjdC5Db3VuY2lsLnJlbW92ZV9tZW1iZXIoYWRkcmVzczogYnl0ZXMpIC0+IHZvaWQ6CnJlbW92ZV9tZW1iZXI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMDctMTA4CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHJlbW92ZV9tZW1iZXIoc2VsZiwgYWRkcmVzczogYXJjNC5BZGRyZXNzKSAtPiBOb25lOgogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMjAKICAgIC8vIGFzc2VydCBUeG4uc2VuZGVyID09IHNlbGYuYWRtaW4udmFsdWUsIGVyci5VTkFVVEhPUklaRUQKICAgIHR4biBTZW5kZXIKICAgIGludGNfMCAvLyAwCiAgICBieXRlY18zIC8vIDB4NjE2NDZkNjk2ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmFkbWluIGV4aXN0cwogICAgPT0KICAgIGFzc2VydCAvLyBVbmF1dGhvcml6ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjEyMQogICAgLy8gYXNzZXJ0IGFkZHJlc3MubmF0aXZlIGluIHNlbGYubWVtYmVycywgZXJyLlZPVEVSX05PVF9GT1VORAogICAgYnl0ZWMgNCAvLyAweDRkCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBWb3RlciBub3QgZm91bmQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjEyMwogICAgLy8gZGVsIHNlbGYubWVtYmVyc1thZGRyZXNzLm5hdGl2ZV0KICAgIGJveF9kZWwKICAgIHBvcAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTI0CiAgICAvLyBzZWxmLm1lbWJlcl9jb3VudC52YWx1ZSAtPSAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDZkNjU2ZDYyNjU3MjVmNjM2Zjc1NmU3NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1lbWJlcl9jb3VudCBleGlzdHMKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICBieXRlY18wIC8vIDB4NmQ2NTZkNjI2NTcyNWY2MzZmNzU2ZTc0CiAgICBzd2FwCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLmNvdW5jaWwuY29udHJhY3QuQ291bmNpbC52b3RlKHByb3Bvc2FsX2lkOiB1aW50NjQsIGJsb2NrOiB1aW50NjQpIC0+IHZvaWQ6CnZvdGU6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxMjYtMTI3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHZvdGUoc2VsZiwgcHJvcG9zYWxfaWQ6IFVJbnQ2NCwgYmxvY2s6IGJvb2wpIC0+IE5vbmU6ICAjIG5vcWE6IEZCVDAwMQogICAgcHJvdG8gMiAwCiAgICBwdXNoYnl0ZXMgIiIKICAgIGR1cG4gNAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTQyCiAgICAvLyBhc3NlcnQgVHhuLnNlbmRlciBpbiBzZWxmLm1lbWJlcnMsIGVyci5WT1RFUl9OT1RfRk9VTkQKICAgIGJ5dGVjIDQgLy8gMHg0ZAogICAgdHhuIFNlbmRlcgogICAgY29uY2F0CiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGFzc2VydCAvLyBWb3RlciBub3QgZm91bmQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE0NAogICAgLy8gaWYgcHJvcG9zYWxfaWQgbm90IGluIHNlbGYudm90ZXM6CiAgICBmcmFtZV9kaWcgLTIKICAgIGl0b2IKICAgIGR1cAogICAgcHVzaGJ5dGVzIDB4NTYKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICBib3hfbGVuCiAgICBidXJ5IDEKICAgIGJueiB2b3RlX2Vsc2VfYm9keUAzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNDUtMTUxCiAgICAvLyAjIHdlIGRvbnQgbmVlZCBhbnkgZXJyb3IgaGFuZGxpbmcgaGVyZQogICAgLy8gIyBpZiBpdHMgaW52YWxpZCB0aGUgdHJhbnNhY3Rpb24gd2lsbCBmYWlsCiAgICAvLyBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHJlZ2lzdHJ5X2NvbnRyYWN0LlhHb3ZSZWdpc3RyeS5pc19wcm9wb3NhbCwKICAgIC8vICAgICBhcmM0LlVJbnQ2NChwcm9wb3NhbF9pZCksCiAgICAvLyAgICAgYXBwX2lkPXNlbGYucmVnaXN0cnlfYXBwX2lkLnZhbHVlLAogICAgLy8gKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTUwCiAgICAvLyBhcHBfaWQ9c2VsZi5yZWdpc3RyeV9hcHBfaWQudmFsdWUsCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMiAvLyAweDcyNjU2NzY5NzM3NDcyNzk1ZjYxNzA3MDVmNjk2NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnJlZ2lzdHJ5X2FwcF9pZCBleGlzdHMKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTQ1LTE1MQogICAgLy8gIyB3ZSBkb250IG5lZWQgYW55IGVycm9yIGhhbmRsaW5nIGhlcmUKICAgIC8vICMgaWYgaXRzIGludmFsaWQgdGhlIHRyYW5zYWN0aW9uIHdpbGwgZmFpbAogICAgLy8gYXJjNC5hYmlfY2FsbCgKICAgIC8vICAgICByZWdpc3RyeV9jb250cmFjdC5YR292UmVnaXN0cnkuaXNfcHJvcG9zYWwsCiAgICAvLyAgICAgYXJjNC5VSW50NjQocHJvcG9zYWxfaWQpLAogICAgLy8gICAgIGFwcF9pZD1zZWxmLnJlZ2lzdHJ5X2FwcF9pZC52YWx1ZSwKICAgIC8vICkKICAgIHB1c2hieXRlcyAweDI2OTgzMjAwIC8vIG1ldGhvZCAiaXNfcHJvcG9zYWwodWludDY0KXZvaWQiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgZnJhbWVfZGlnIDUKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTUzLTE1NQogICAgLy8gc3RhdHVzLCBleGlzdHMgPSBBcHBHbG9iYWwuZ2V0X2V4X3VpbnQ2NCgKICAgIC8vICAgICBwcm9wb3NhbF9pZCwgQnl0ZXMocHJvcG9zYWxfY2ZnLkdTX0tFWV9TVEFUVVMpCiAgICAvLyApCiAgICBmcmFtZV9kaWcgLTIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE1NAogICAgLy8gcHJvcG9zYWxfaWQsIEJ5dGVzKHByb3Bvc2FsX2NmZy5HU19LRVlfU1RBVFVTKQogICAgcHVzaGJ5dGVzIDB4NzM3NDYxNzQ3NTczCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNTMtMTU1CiAgICAvLyBzdGF0dXMsIGV4aXN0cyA9IEFwcEdsb2JhbC5nZXRfZXhfdWludDY0KAogICAgLy8gICAgIHByb3Bvc2FsX2lkLCBCeXRlcyhwcm9wb3NhbF9jZmcuR1NfS0VZX1NUQVRVUykKICAgIC8vICkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNTcKICAgIC8vIGFzc2VydCBleGlzdHMsIGVyci5JTlZBTElEX1BST1BPU0FMCiAgICBhc3NlcnQgLy8gSW52YWxpZCBwcm9wb3NhbAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTU4CiAgICAvLyBhc3NlcnQgc3RhdHVzID09IHByb3Bvc2FsX2VubS5TVEFUVVNfQVBQUk9WRUQsIGVyci5XUk9OR19QUk9QT1NBTF9TVEFUVVMKICAgIHB1c2hpbnQgMzAgLy8gMzAKICAgID09CiAgICBhc3NlcnQgLy8gV3JvbmcgUHJvcG9zYWwgU3RhdHVzIG9yIGZpbmFsaXplZAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTYyCiAgICAvLyBhZGRyZXNzPWFyYzQuQWRkcmVzcyhUeG4uc2VuZGVyKSwKICAgIHR4biBTZW5kZXIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE2MwogICAgLy8gYmxvY2s9YXJjNC5Cb29sKGJsb2NrKSwKICAgIGJ5dGVjXzEgLy8gMHgwMAogICAgaW50Y18wIC8vIDAKICAgIGZyYW1lX2RpZyAtMQogICAgc2V0Yml0CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNjEtMTY0CiAgICAvLyB0eXAuQ291bmNpbFZvdGUoCiAgICAvLyAgICAgYWRkcmVzcz1hcmM0LkFkZHJlc3MoVHhuLnNlbmRlciksCiAgICAvLyAgICAgYmxvY2s9YXJjNC5Cb29sKGJsb2NrKSwKICAgIC8vICkKICAgIGNvbmNhdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTYwLTE2NQogICAgLy8gc2VsZi52b3Rlc1twcm9wb3NhbF9pZF0gPSBhcmM0LkR5bmFtaWNBcnJheSgKICAgIC8vICAgICB0eXAuQ291bmNpbFZvdGUoCiAgICAvLyAgICAgICAgIGFkZHJlc3M9YXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICAgICAgICBibG9jaz1hcmM0LkJvb2woYmxvY2spLAogICAgLy8gICAgICkKICAgIC8vICkKICAgIHB1c2hieXRlcyAweDAwMDEKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZnJhbWVfZGlnIDYKICAgIGR1cAogICAgYm94X2RlbAogICAgcG9wCiAgICBzd2FwCiAgICBib3hfcHV0Cgp2b3RlX2FmdGVyX2lmX2Vsc2VAMTU6CiAgICByZXRzdWIKCnZvdGVfZWxzZV9ib2R5QDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNjgKICAgIC8vIGhhbGZfcGx1c19vbmUgPSAoc2VsZi5tZW1iZXJfY291bnQudmFsdWUgLy8gMikgKyAxCiAgICBpbnRjXzAgLy8gMAogICAgYnl0ZWNfMCAvLyAweDZkNjU2ZDYyNjU3MjVmNjM2Zjc1NmU3NAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLm1lbWJlcl9jb3VudCBleGlzdHMKICAgIGludGNfMyAvLyAyCiAgICAvCiAgICBpbnRjXzEgLy8gMQogICAgKwogICAgZnJhbWVfYnVyeSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNjkKICAgIC8vIGFwcHJvdmFscyA9IFVJbnQ2NCgwKSBpZiBibG9jayBlbHNlIFVJbnQ2NCgxKQogICAgZnJhbWVfZGlnIC0xCiAgICAhCiAgICBkdXAKICAgIGZyYW1lX2J1cnkgMAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTcwCiAgICAvLyByZWplY3Rpb25zID0gVUludDY0KDApIGlmIG5vdCBibG9jayBlbHNlIFVJbnQ2NCgxKQogICAgIQogICAgZnJhbWVfYnVyeSAzCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNzIKICAgIC8vIGZvciBpIGluIHVyYW5nZShzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXS5sZW5ndGgpOgogICAgZnJhbWVfZGlnIDYKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGVzIGVudHJ5IGV4aXN0cwogICAgaW50Y18wIC8vIDAKICAgIGV4dHJhY3RfdWludDE2CiAgICBmcmFtZV9idXJ5IDQKICAgIGludGNfMCAvLyAwCiAgICBmcmFtZV9idXJ5IDIKCnZvdGVfZm9yX2hlYWRlckA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTcyCiAgICAvLyBmb3IgaSBpbiB1cmFuZ2Uoc2VsZi52b3Rlc1twcm9wb3NhbF9pZF0ubGVuZ3RoKToKICAgIGZyYW1lX2RpZyAyCiAgICBmcmFtZV9kaWcgNAogICAgPAogICAgYnogdm90ZV9hZnRlcl9mb3JAMTAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3NAogICAgLy8gVHhuLnNlbmRlciAhPSBzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXVtpXS5hZGRyZXNzCiAgICBmcmFtZV9kaWcgNgogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIGNoZWNrIHNlbGYudm90ZXMgZW50cnkgZXhpc3RzCiAgICBleHRyYWN0IDIgMAogICAgZnJhbWVfZGlnIDIKICAgIGludGNfMiAvLyAzMwogICAgKgogICAgaW50Y18yIC8vIDMzCiAgICBleHRyYWN0MyAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIGR1cAogICAgZXh0cmFjdCAwIDMyIC8vIG9uIGVycm9yOiBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgdHhuIFNlbmRlcgogICAgIT0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3My0xNzUKICAgIC8vIGFzc2VydCAoCiAgICAvLyAgICAgVHhuLnNlbmRlciAhPSBzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXVtpXS5hZGRyZXNzCiAgICAvLyApLCBlcnIuVk9URVJfQUxSRUFEWV9WT1RFRAogICAgYXNzZXJ0IC8vIFZvdGVyIGFscmVhZHkgdm90ZWQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3NwogICAgLy8gaWYgc2VsZi52b3Rlc1twcm9wb3NhbF9pZF1baV0uYmxvY2s6CiAgICBwdXNoaW50IDI1NiAvLyAyNTYKICAgIGdldGJpdAogICAgYnl0ZWNfMSAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgdW5jb3ZlciAyCiAgICBzZXRiaXQKICAgIGJ5dGVjXzEgLy8gMHgwMAogICAgIT0KICAgIGJ6IHZvdGVfZWxzZV9ib2R5QDcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE3OAogICAgLy8gcmVqZWN0aW9ucyArPSAxCiAgICBmcmFtZV9kaWcgMwogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGZyYW1lX2J1cnkgMwoKdm90ZV9hZnRlcl9pZl9lbHNlQDg6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxNzIKICAgIC8vIGZvciBpIGluIHVyYW5nZShzZWxmLnZvdGVzW3Byb3Bvc2FsX2lkXS5sZW5ndGgpOgogICAgZnJhbWVfZGlnIDIKICAgIGludGNfMSAvLyAxCiAgICArCiAgICBmcmFtZV9idXJ5IDIKICAgIGIgdm90ZV9mb3JfaGVhZGVyQDQKCnZvdGVfZWxzZV9ib2R5QDc6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxODAKICAgIC8vIGFwcHJvdmFscyArPSAxCiAgICBmcmFtZV9kaWcgMAogICAgaW50Y18xIC8vIDEKICAgICsKICAgIGZyYW1lX2J1cnkgMAogICAgYiB2b3RlX2FmdGVyX2lmX2Vsc2VAOAoKdm90ZV9hZnRlcl9mb3JAMTA6CiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxODIKICAgIC8vIHNlbGYudm90ZXNbcHJvcG9zYWxfaWRdLmFwcGVuZCgKICAgIGZyYW1lX2RpZyA2CiAgICBkdXAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLnZvdGVzIGVudHJ5IGV4aXN0cwogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTgyLTE4NwogICAgLy8gc2VsZi52b3Rlc1twcm9wb3NhbF9pZF0uYXBwZW5kKAogICAgLy8gICAgIHR5cC5Db3VuY2lsVm90ZSgKICAgIC8vICAgICAgICAgYWRkcmVzcz1hcmM0LkFkZHJlc3MoVHhuLnNlbmRlciksCiAgICAvLyAgICAgICAgIGJsb2NrPWFyYzQuQm9vbChibG9jayksCiAgICAvLyAgICAgKQogICAgLy8gKQogICAgZXh0cmFjdCAyIDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE4NAogICAgLy8gYWRkcmVzcz1hcmM0LkFkZHJlc3MoVHhuLnNlbmRlciksCiAgICB0eG4gU2VuZGVyCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxODUKICAgIC8vIGJsb2NrPWFyYzQuQm9vbChibG9jayksCiAgICBieXRlY18xIC8vIDB4MDAKICAgIGludGNfMCAvLyAwCiAgICBmcmFtZV9kaWcgLTEKICAgIHNldGJpdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTgzLTE4NgogICAgLy8gdHlwLkNvdW5jaWxWb3RlKAogICAgLy8gICAgIGFkZHJlc3M9YXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICAgIGJsb2NrPWFyYzQuQm9vbChibG9jayksCiAgICAvLyApCiAgICBjb25jYXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE4Mi0xODcKICAgIC8vIHNlbGYudm90ZXNbcHJvcG9zYWxfaWRdLmFwcGVuZCgKICAgIC8vICAgICB0eXAuQ291bmNpbFZvdGUoCiAgICAvLyAgICAgICAgIGFkZHJlc3M9YXJjNC5BZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICAgICAgICBibG9jaz1hcmM0LkJvb2woYmxvY2spLAogICAgLy8gICAgICkKICAgIC8vICkKICAgIGNvbmNhdAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyAzMwogICAgLwogICAgaXRvYgogICAgZXh0cmFjdCA2IDIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZGlnIDEKICAgIGJveF9kZWwKICAgIHBvcAogICAgYm94X3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTg5CiAgICAvLyBpZiBhcHByb3ZhbHMgPj0gaGFsZl9wbHVzX29uZSBvciByZWplY3Rpb25zID49IGhhbGZfcGx1c19vbmU6CiAgICBmcmFtZV9kaWcgMAogICAgZnJhbWVfZGlnIDEKICAgID49CiAgICBibnogdm90ZV9pZl9ib2R5QDEyCiAgICBmcmFtZV9kaWcgMwogICAgZnJhbWVfZGlnIDEKICAgID49CiAgICBieiB2b3RlX2FmdGVyX2lmX2Vsc2VAMTUKCnZvdGVfaWZfYm9keUAxMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE5MC0xOTEKICAgIC8vICMgdGhpcyB3aWxsIGFsbG93IHRoZSBwcm9wb3NhbCB0byBiZSByZXZpZXdlZAogICAgLy8gYmxvY2sgPSByZWplY3Rpb25zID49IGhhbGZfcGx1c19vbmUKICAgIGZyYW1lX2RpZyAzCiAgICBmcmFtZV9kaWcgMQogICAgPj0KICAgIGZyYW1lX2J1cnkgLTEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9jb3VuY2lsL2NvbnRyYWN0LnB5OjE5My0xOTUKICAgIC8vIGFyYzQuYWJpX2NhbGwoCiAgICAvLyAgICAgcHJvcG9zYWxfY29udHJhY3QuUHJvcG9zYWwucmV2aWV3LCBibG9jaywgYXBwX2lkPXByb3Bvc2FsX2lkCiAgICAvLyApCiAgICBpdHhuX2JlZ2luCiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxOTQKICAgIC8vIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLnJldmlldywgYmxvY2ssIGFwcF9pZD1wcm9wb3NhbF9pZAogICAgYnl0ZWNfMSAvLyAweDAwCiAgICBpbnRjXzAgLy8gMAogICAgZnJhbWVfZGlnIC0xCiAgICBzZXRiaXQKICAgIGZyYW1lX2RpZyAtMgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECiAgICAvLyBzbWFydF9jb250cmFjdHMvY291bmNpbC9jb250cmFjdC5weToxOTMtMTk1CiAgICAvLyBhcmM0LmFiaV9jYWxsKAogICAgLy8gICAgIHByb3Bvc2FsX2NvbnRyYWN0LlByb3Bvc2FsLnJldmlldywgYmxvY2ssIGFwcF9pZD1wcm9wb3NhbF9pZAogICAgLy8gKQogICAgcHVzaGJ5dGVzIDB4MjEyZDlmMDcgLy8gbWV0aG9kICJyZXZpZXcoYm9vbCl2b2lkIgogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCiAgICBwdXNoaW50IDYgLy8gYXBwbAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgaW50Y18wIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICBpdHhuX3N1Ym1pdAogICAgLy8gc21hcnRfY29udHJhY3RzL2NvdW5jaWwvY29udHJhY3QucHk6MTk3CiAgICAvLyBkZWwgc2VsZi52b3Rlc1twcm9wb3NhbF9pZF0KICAgIGZyYW1lX2RpZyA2CiAgICBib3hfZGVsCiAgICBwb3AKICAgIHJldHN1Ygo=", "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K" }, "bareActions": { "create": [], "call": [] } };
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
                    case 'create(account,uint64)void':
                        return CouncilParamsFactory.create.create(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs create ABI call params for the Council smart contract using the create(account,uint64)void ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            create(params) {
                return {
                    ...params,
                    method: 'create(account,uint64)void',
                    args: Array.isArray(params.args) ? params.args : [params.args.admin, params.args.registryId],
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
             * Creates a new instance of the Council smart contract using the create(account,uint64)void ABI method.
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
             * Creates a new instance of the Council smart contract using the create(account,uint64)void ABI method.
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
             * Creates a new instance of the Council smart contract using an ABI method call using the create(account,uint64)void ABI method.
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
                    admin: new BinaryStateValue(result.admin),
                    memberCount: result.member_count,
                    registryAppId: result.registry_app_id,
                };
            },
            /**
             * Get the current value of the admin key in global state
             */
            admin: async () => { return new BinaryStateValue((await this.appClient.state.global.getValue("admin"))); },
            /**
             * Get the current value of the member_count key in global state
             */
            memberCount: async () => { return (await this.appClient.state.global.getValue("member_count")); },
            /**
             * Get the current value of the registry_app_id key in global state
             */
            registryAppId: async () => { return (await this.appClient.state.global.getValue("registry_app_id")); },
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
