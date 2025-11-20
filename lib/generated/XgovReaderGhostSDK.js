import { getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { AppClient as _AppClient, } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory as _AppFactory } from '@algorandfoundation/algokit-utils/types/app-factory';
export const APP_SPEC = { "name": "XgovReader", "structs": { "ShortProposalState": [{ "name": "openTimestamp", "type": "uint64" }, { "name": "proposer", "type": "address" }, { "name": "requestedAmount", "type": "uint64" }, { "name": "status", "type": "uint64" }, { "name": "title", "type": "string" }] }, "methods": [{ "name": "getShortProposalState", "args": [{ "type": "uint64", "name": "appId" }], "returns": { "type": "(uint64,address,uint64,uint64,string)", "struct": "ShortProposalState" }, "actions": { "create": ["NoOp"], "call": ["NoOp"] }, "readonly": true, "events": [], "recommendations": {} }], "arcs": [22, 28], "networks": {}, "state": { "schema": { "global": { "ints": 0, "bytes": 0 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": {}, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "bareActions": { "create": [], "call": [] }, "sourceInfo": { "approval": { "sourceInfo": [{ "pc": [21], "errorMessage": "OnCompletion must be NoOp" }, { "pc": [37], "errorMessage": "invalid number of bytes for arc4.uint64" }], "pcOffsetMethod": "none" }, "clear": { "sourceInfo": [], "pcOffsetMethod": "none" } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MTIKICAgIC8vIGV4cG9ydCBjbGFzcyBYZ292UmVhZGVyIGV4dGVuZHMgQ29udHJhY3QgewogICAgcHVzaGJ5dGVzIDB4NTE2OTllYWYgLy8gbWV0aG9kICJnZXRTaG9ydFByb3Bvc2FsU3RhdGUodWludDY0KSh1aW50NjQsYWRkcmVzcyx1aW50NjQsdWludDY0LHN0cmluZykiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBtYWluX2dldFNob3J0UHJvcG9zYWxTdGF0ZV9yb3V0ZUAyCiAgICBlcnIKCm1haW5fZ2V0U2hvcnRQcm9wb3NhbFN0YXRlX3JvdXRlQDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoxMwogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlLCBvbkNyZWF0ZTogImFsbG93IiB9KQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBtdXN0IGJlIE5vT3AKICAgIGIgZ2V0U2hvcnRQcm9wb3NhbFN0YXRlCgoKLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6Olhnb3ZSZWFkZXIuZ2V0U2hvcnRQcm9wb3NhbFN0YXRlW3JvdXRpbmddKCkgLT4gdm9pZDoKZ2V0U2hvcnRQcm9wb3NhbFN0YXRlOgogICAgaW50Y18wIC8vIDAKICAgIHB1c2hieXRlcyAiIgogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoxMwogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlLCBvbkNyZWF0ZTogImFsbG93IiB9KQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIHB1c2hpbnQgOCAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MTUKICAgIC8vIGNvbnN0IFtvcGVuVGltZXN0YW1wLCBvcGVuVGltZXN0YW1wRXhpc3RzXSA9IG9wLkFwcEdsb2JhbC5nZXRFeFVpbnQ2NChhcHBJZCwgQnl0ZXNgb3Blbl90aW1lc3RhbXBgKTsKICAgIGR1cAogICAgcHVzaGJ5dGVzICJvcGVuX3RpbWVzdGFtcCIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoxNgogICAgLy8gY29uc3QgW3Byb3Bvc2VyQnl0ZXMsIHByb3Bvc2VyRXhpc3RzXSA9IG9wLkFwcEdsb2JhbC5nZXRFeEJ5dGVzKGFwcElkLCBCeXRlc2Bwcm9wb3NlcmApOwogICAgZGlnIDIKICAgIHB1c2hieXRlcyAicHJvcG9zZXIiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgY292ZXIgMwogICAgY292ZXIgNAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MTcKICAgIC8vIGNvbnN0IFtyZXF1ZXN0ZWRBbW91bnQsIHJlcXVlc3RlZEFtb3VudEV4aXN0c10gPSBvcC5BcHBHbG9iYWwuZ2V0RXhVaW50NjQoYXBwSWQsIEJ5dGVzYHJlcXVlc3RlZF9hbW91bnRgKTsKICAgIGRpZyAzCiAgICBwdXNoYnl0ZXMgInJlcXVlc3RlZF9hbW91bnQiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgY292ZXIgNQogICAgY292ZXIgNAogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MTgKICAgIC8vIGNvbnN0IFtzdGF0dXMsIHN0YXR1c0V4aXN0c10gPSBvcC5BcHBHbG9iYWwuZ2V0RXhVaW50NjQoYXBwSWQsIEJ5dGVzYHN0YXR1c2ApOwogICAgZGlnIDMKICAgIHB1c2hieXRlcyAic3RhdHVzIgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGNvdmVyIDUKICAgIGNvdmVyIDQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlYWRlci9jb250cmFjdC5hbGdvLnRzOjE5CiAgICAvLyBjb25zdCBbdGl0bGVCeXRlcywgdGl0bGVFeGlzdHNdID0gb3AuQXBwR2xvYmFsLmdldEV4Qnl0ZXMoYXBwSWQsIEJ5dGVzYHRpdGxlYCk7CiAgICB1bmNvdmVyIDMKICAgIHB1c2hieXRlcyAidGl0bGUiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgY292ZXIgNAogICAgY292ZXIgMwogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MjEKICAgIC8vIG9wZW5fdGltZXN0YW1wOiBvcGVuVGltZXN0YW1wRXhpc3RzID8gb3BlblRpbWVzdGFtcCA6IDAsCiAgICBpbnRjXzAgLy8gMAogICAgY292ZXIgMgogICAgc2VsZWN0CiAgICBzd2FwCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoyMgogICAgLy8gcHJvcG9zZXI6IHByb3Bvc2VyRXhpc3RzID8gQWNjb3VudChwcm9wb3NlckJ5dGVzKSA6IEdsb2JhbC56ZXJvQWRkcmVzcywKICAgIGJ6IGdldFNob3J0UHJvcG9zYWxTdGF0ZV90ZXJuYXJ5X2ZhbHNlQDMKICAgIGRpZyA3CiAgICBidXJ5IDExCgpnZXRTaG9ydFByb3Bvc2FsU3RhdGVfdGVybmFyeV9tZXJnZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MjMKICAgIC8vIHJlcXVlc3RlZF9hbW91bnQ6IHJlcXVlc3RlZEFtb3VudEV4aXN0cyA/IHJlcXVlc3RlZEFtb3VudCA6IDAsCiAgICBpbnRjXzAgLy8gMAogICAgZGlnIDYKICAgIGRpZyA4CiAgICBzZWxlY3QKICAgIGJ1cnkgMTAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy94Z292X3JlYWRlci9jb250cmFjdC5hbGdvLnRzOjI0CiAgICAvLyBzdGF0dXM6IHN0YXR1c0V4aXN0cyA/IHN0YXR1cyA6IDAsCiAgICBpbnRjXzAgLy8gMAogICAgZGlnIDQKICAgIGRpZyA2CiAgICBzZWxlY3QKICAgIGJ1cnkgOQogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MjUKICAgIC8vIHRpdGxlOiB0aXRsZUV4aXN0cyA/IFN0cmluZyh0aXRsZUJ5dGVzKSA6ICIiLAogICAgZGlnIDIKICAgIGJ6IGdldFNob3J0UHJvcG9zYWxTdGF0ZV90ZXJuYXJ5X2ZhbHNlQDYKICAgIGRpZyAxCgpnZXRTaG9ydFByb3Bvc2FsU3RhdGVfdGVybmFyeV9tZXJnZUA3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MjAtMjYKICAgIC8vIGNvbnN0IHNob3J0U3RhdGU6IFNob3J0UHJvcG9zYWxTdGF0ZSA9IHsKICAgIC8vICAgb3Blbl90aW1lc3RhbXA6IG9wZW5UaW1lc3RhbXBFeGlzdHMgPyBvcGVuVGltZXN0YW1wIDogMCwKICAgIC8vICAgcHJvcG9zZXI6IHByb3Bvc2VyRXhpc3RzID8gQWNjb3VudChwcm9wb3NlckJ5dGVzKSA6IEdsb2JhbC56ZXJvQWRkcmVzcywKICAgIC8vICAgcmVxdWVzdGVkX2Ftb3VudDogcmVxdWVzdGVkQW1vdW50RXhpc3RzID8gcmVxdWVzdGVkQW1vdW50IDogMCwKICAgIC8vICAgc3RhdHVzOiBzdGF0dXNFeGlzdHMgPyBzdGF0dXMgOiAwLAogICAgLy8gICB0aXRsZTogdGl0bGVFeGlzdHMgPyBTdHJpbmcodGl0bGVCeXRlcykgOiAiIiwKICAgIC8vIH07CiAgICBkaWcgMQogICAgaXRvYgogICAgZGlnIDEyCiAgICBjb25jYXQKICAgIGRpZyAxMQogICAgaXRvYgogICAgY29uY2F0CiAgICBkaWcgMTAKICAgIGl0b2IKICAgIGNvbmNhdAogICAgc3dhcAogICAgZHVwCiAgICBsZW4KICAgIGl0b2IKICAgIGV4dHJhY3QgNiAyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIHN3YXAKICAgIHB1c2hieXRlcyAweDAwM2EKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoyNwogICAgLy8gbG9nKGVuY29kZUFyYzQoc2hvcnRTdGF0ZSkpOwogICAgbG9nCiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoxMwogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlLCBvbkNyZWF0ZTogImFsbG93IiB9KQogICAgcHVzaGJ5dGVzIGJhc2UzMihDVVBYWTVJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTVBQUFBKQogICAgbG9nCiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCgpnZXRTaG9ydFByb3Bvc2FsU3RhdGVfdGVybmFyeV9mYWxzZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3hnb3ZfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MjUKICAgIC8vIHRpdGxlOiB0aXRsZUV4aXN0cyA/IFN0cmluZyh0aXRsZUJ5dGVzKSA6ICIiLAogICAgcHVzaGJ5dGVzICIiCiAgICBiIGdldFNob3J0UHJvcG9zYWxTdGF0ZV90ZXJuYXJ5X21lcmdlQDcKCmdldFNob3J0UHJvcG9zYWxTdGF0ZV90ZXJuYXJ5X2ZhbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMveGdvdl9yZWFkZXIvY29udHJhY3QuYWxnby50czoyMgogICAgLy8gcHJvcG9zZXI6IHByb3Bvc2VyRXhpc3RzID8gQWNjb3VudChwcm9wb3NlckJ5dGVzKSA6IEdsb2JhbC56ZXJvQWRkcmVzcywKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgYnVyeSAxMQogICAgYiBnZXRTaG9ydFByb3Bvc2FsU3RhdGVfdGVybmFyeV9tZXJnZUA0Cg==", "clear": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==" }, "byteCode": { "approval": "CyABAIAEUWmerzYaAI4BAAEAMRkUREIAACKAAEk2GgFJFYEIEkQXSYAOb3Blbl90aW1lc3RhbXBlSwKACHByb3Bvc2VyZU4DTgRLA4AQcmVxdWVzdGVkX2Ftb3VudGVOBU4ESwOABnN0YXR1c2VOBU4ETwOABXRpdGxlZU4ETgMiTgJNTEEAhksHRQsiSwZLCE1FCiJLBEsGTUUJSwJBAGhLAUsBFksMUEsLFlBLChZQTEkVFlcGAkxQTIACADpQTFCwgEAVH3x1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOgAAsIEBQ4AAQv+VMgNFC0L/dw==", "clear": "C4EBQw==" }, "events": [], "templateVariables": {} };
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
 * Converts the ABI tuple representation of a ShortProposalState to the struct representation
 */
export function ShortProposalStateFromTuple(abiTuple) {
    return getABIStructFromABITuple(abiTuple, APP_SPEC.structs.ShortProposalState, APP_SPEC.structs);
}
/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the XgovReader smart contract
 */
export class XgovReaderParamsFactory {
    /**
     * Gets available create ABI call param factories
     */
    static get create() {
        return {
            _resolveByMethod(params) {
                switch (params.method) {
                    case 'getShortProposalState':
                    case 'getShortProposalState(uint64)(uint64,address,uint64,uint64,string)':
                        return XgovReaderParamsFactory.create.getShortProposalState(params);
                }
                throw new Error(`Unknown ' + verb + ' method`);
            },
            /**
             * Constructs create ABI call params for the XgovReader smart contract using the getShortProposalState(uint64)(uint64,address,uint64,uint64,string) ABI method
             *
             * @param params Parameters for the call
             * @returns An `AppClientMethodCallParams` object for the call
             */
            getShortProposalState(params) {
                return {
                    ...params,
                    method: 'getShortProposalState(uint64)(uint64,address,uint64,uint64,string)',
                    args: Array.isArray(params.args) ? params.args : [params.args.appId],
                };
            },
        };
    }
    /**
     * Constructs a no op call for the getShortProposalState(uint64)(uint64,address,uint64,uint64,string) ABI method
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
    static getShortProposalState(params) {
        return {
            ...params,
            method: 'getShortProposalState(uint64)(uint64,address,uint64,uint64,string)',
            args: Array.isArray(params.args) ? params.args : [params.args.appId],
        };
    }
}
/**
 * A factory to create and deploy one or more instance of the XgovReader smart contract and to create one or more app clients to interact with those (or other) app instances
 */
class XgovReaderFactory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    appFactory;
    /**
     * Creates a new instance of `XgovReaderFactory`
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
        return new XgovReaderClient(this.appFactory.getAppClientById(params));
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
        return new XgovReaderClient(await this.appFactory.getAppClientByCreatorAndName(params));
    }
    /**
     * Idempotently deploys the XgovReader smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    async deploy(params = {}) {
        const result = await this.appFactory.deploy({
            ...params,
            createParams: params.createParams?.method ? XgovReaderParamsFactory.create._resolveByMethod(params.createParams) : params.createParams ? params.createParams : undefined,
        });
        return { result: result.result, appClient: new XgovReaderClient(result.appClient) };
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
             * Creates a new instance of the XgovReader smart contract using the getShortProposalState(uint64)(uint64,address,uint64,uint64,string) ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create params
             */
            getShortProposalState: (params) => {
                return this.appFactory.params.create(XgovReaderParamsFactory.create.getShortProposalState(params));
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
             * Creates a new instance of the XgovReader smart contract using the getShortProposalState(uint64)(uint64,address,uint64,uint64,string) ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create transaction
             */
            getShortProposalState: (params) => {
                return this.appFactory.createTransaction.create(XgovReaderParamsFactory.create.getShortProposalState(params));
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
             * Creates a new instance of the XgovReader smart contract using an ABI method call using the getShortProposalState(uint64)(uint64,address,uint64,uint64,string) ABI method.
             *
             * @param params The params for the smart contract call
             * @returns The create result
             */
            getShortProposalState: async (params) => {
                const result = await this.appFactory.send.create(XgovReaderParamsFactory.create.getShortProposalState(params));
                return { result: { ...result.result, return: result.result.return }, appClient: new XgovReaderClient(result.appClient) };
            },
        },
    };
}
/**
 * A client to make calls to the XgovReader smart contract
 */
class XgovReaderClient {
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
     * Returns a new `XgovReaderClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static async fromCreatorAndName(params) {
        return new XgovReaderClient(await _AppClient.fromCreatorAndName({ ...params, appSpec: APP_SPEC }));
    }
    /**
     * Returns an `XgovReaderClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static async fromNetwork(params) {
        return new XgovReaderClient(await _AppClient.fromNetwork({ ...params, appSpec: APP_SPEC }));
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
         * Makes a clear_state call to an existing instance of the XgovReader smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.params.bare.clearState(params);
        },
        /**
         * Makes a call to the XgovReader smart contract using the `getShortProposalState(uint64)(uint64,address,uint64,uint64,string)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        getShortProposalState: (params) => {
            return this.appClient.params.call(XgovReaderParamsFactory.getShortProposalState(params));
        },
    };
    /**
     * Create transactions for the current app
     */
    createTransaction = {
        /**
         * Makes a clear_state call to an existing instance of the XgovReader smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.createTransaction.bare.clearState(params);
        },
        /**
         * Makes a call to the XgovReader smart contract using the `getShortProposalState(uint64)(uint64,address,uint64,uint64,string)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        getShortProposalState: (params) => {
            return this.appClient.createTransaction.call(XgovReaderParamsFactory.getShortProposalState(params));
        },
    };
    /**
     * Send calls to the current app
     */
    send = {
        /**
         * Makes a clear_state call to an existing instance of the XgovReader smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params) => {
            return this.appClient.send.bare.clearState(params);
        },
        /**
         * Makes a call to the XgovReader smart contract using the `getShortProposalState(uint64)(uint64,address,uint64,uint64,string)` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        getShortProposalState: async (params) => {
            const result = await this.appClient.send.call(XgovReaderParamsFactory.getShortProposalState(params));
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
        return new XgovReaderClient(this.appClient.clone(params));
    }
    /**
     * Makes a readonly (simulated) call to the XgovReader smart contract using the `getShortProposalState(uint64)(uint64,address,uint64,uint64,string)` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    async getShortProposalState(params) {
        const result = await this.appClient.send.call(XgovReaderParamsFactory.getShortProposalState(params));
        return result.return;
    }
    /**
     * Methods to access state for the current XgovReader app
     */
    state = {};
    newGroup() {
        const client = this;
        const composer = this.algorand.newGroup();
        let promiseChain = Promise.resolve();
        const resultMappers = [];
        return {
            /**
             * Add a getShortProposalState(uint64)(uint64,address,uint64,uint64,string) method call against the XgovReader contract
             */
            getShortProposalState(params) {
                promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getShortProposalState(params)));
                resultMappers.push((v) => client.decodeReturnValue('getShortProposalState(uint64)(uint64,address,uint64,uint64,string)', v));
                return this;
            },
            /**
             * Add a clear state call to the XgovReader contract
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
/* BEGIN GHOST SDK CODE */
import { getABIDecodedValue } from '@algorandfoundation/algokit-utils/types/app-arc56';
import { makeEmptyTransactionSigner } from 'algosdk';
const emptySigner = makeEmptyTransactionSigner();
class GhostBase {
    static factory = XgovReaderFactory;
    static client = XgovReaderClient;
    algorand;
    readerAccount = 'A7NMWS3NT3IUDMLVO26ULGXGIIOUQ3ND2TXSER6EBGRZNOBOUIQXHIBGDE'; // non-mainnet fee sink
    factory;
    client;
    constructor({ algorand, readerAccount }) {
        this.algorand = algorand;
        if (readerAccount)
            this.readerAccount = readerAccount;
        this.factory = this.algorand.client.getTypedAppFactory(XgovReaderFactory, {
            defaultSender: this.readerAccount,
        });
        this.client = this.factory.getAppClientById({ appId: 0n });
    }
    async execute({ transactions, signature, extraSimulateArgs, }) {
        const methodName = signature.slice(0, signature.indexOf('('));
        let builder = this.client.newGroup();
        for (const txn of transactions) {
            builder = builder.addTransaction(txn, emptySigner);
        }
        const { confirmations } = await builder.simulate({
            extraOpcodeBudget: 170_000,
            allowMoreLogging: true,
            allowEmptySignatures: true,
            allowUnnamedResources: true,
            ...extraSimulateArgs,
        });
        // collect logs from multiple, future support for arg splitting when > 2KB
        const logs = confirmations.flatMap(({ logs }, i) => {
            if (!logs)
                throw new Error(`logs were not returned from simulate txn ${i}. this should never happen`);
            return logs.slice(0, -1);
        });
        const specRetObj = this.client.appSpec.methods.find(({ name }) => name === methodName)?.returns;
        if (!specRetObj)
            throw new Error('Method not found in app spec');
        const retTypeStr = specRetObj.struct ?? specRetObj.type;
        const retData = [];
        for (let i = 0; i < logs.length; i++) {
            retData.push(getABIDecodedValue(new Uint8Array(logs[i]), retTypeStr, this.factory.appSpec.structs));
        }
        return retData;
    }
}
export class XgovReaderSDK extends GhostBase {
    constructor(args) {
        super(args);
    }
    async getShortProposalState(args, extraMethodCallArgs, extraSimulateArgs) {
        const { transactions } = await this.factory.createTransaction.create.getShortProposalState({
            args,
            ...extraMethodCallArgs,
        });
        return this.execute({
            transactions,
            signature: 'getShortProposalState(uint64)(uint64,address,uint64,uint64,string)',
            extraSimulateArgs,
        });
    }
}
/* END GHOST SDK CODE */
