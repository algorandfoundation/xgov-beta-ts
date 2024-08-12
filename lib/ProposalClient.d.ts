import type { ABIAppCallArg, AppCallTransactionResult, AppCallTransactionResultOfType, AppCompilationResult, AppReference, AppStorageSchema, CoreAppCallArgs, RawAppCallArgs, TealTemplateParams } from '@algorandfoundation/algokit-utils/types/app';
import type { AppClientCallCoreParams, AppClientCompilationParams, AppClientDeployCoreParams, AppDetails, ApplicationClient } from '@algorandfoundation/algokit-utils/types/app-client';
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec';
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction';
import type { ABIResult, TransactionWithSigner } from 'algosdk';
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk';
export declare const APP_SPEC: AppSpec;
/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp = {
    onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC;
};
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn = {
    onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC;
};
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut = {
    onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC;
};
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp = {
    onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC;
};
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp = {
    onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC;
};
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
    /**
     * Gets the state value as a BigInt.
     */
    asBigInt(): bigint;
    /**
     * Gets the state value as a number.
     */
    asNumber(): number;
};
/**
 * A state record containing binary data
 */
export type BinaryState = {
    /**
     * Gets the state value as a Uint8Array
     */
    asByteArray(): Uint8Array;
    /**
     * Gets the state value as a string
     */
    asString(): string;
};
export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference;
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>;
export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
    sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>;
};
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>;
export type IncludeSchema = {
    /**
     * Any overrides for the storage schema to request for the created app; by default the schema indicated by the app spec is used.
     */
    schema?: Partial<AppStorageSchema>;
};
/**
 * Defines the types of available calls and state of the Proposal smart contract.
 */
export type Proposal = {
    /**
     * Maps method signatures / names to their argument and return types.
     */
    methods: Record<'create(address)void' | 'create', {
        argsObj: {
            /**
             * Address of the proposer
             */
            proposer: string;
        };
        argsTuple: [proposer: string];
        returns: void;
    }> & Record<'submit_proposal(pay,string,byte[59],uint64,uint64)void' | 'submit_proposal', {
        argsObj: {
            /**
             * Commitment payment transaction from the proposer to the contract
             */
            payment: TransactionToSign | Transaction | Promise<SendTransactionResult>;
            /**
             * Proposal title, max TITLE_MAX_BYTES bytes
             */
            title: string;
            /**
             * IPFS V1 CID
             */
            cid: Uint8Array;
            /**
             * Funding type (Proactive / Retroactive)
             */
            fundingType: bigint | number;
            /**
             * Requested amount in microAlgos
             */
            requestedAmount: bigint | number;
        };
        argsTuple: [payment: TransactionToSign | Transaction | Promise<SendTransactionResult>, title: string, cid: Uint8Array, fundingType: bigint | number, requestedAmount: bigint | number];
        returns: void;
    }>;
    /**
     * Defines the shape of the global and local state of the application.
     */
    state: {
        global: {
            approvals?: IntegerState;
            category?: IntegerState;
            cid?: BinaryState;
            committeeId?: BinaryState;
            committeeMembers?: IntegerState;
            committeeVotes?: IntegerState;
            finalizationTs?: IntegerState;
            fundingType?: IntegerState;
            lockedAmount?: IntegerState;
            proposer?: BinaryState;
            registryAppId?: IntegerState;
            rejections?: IntegerState;
            requestedAmount?: IntegerState;
            status?: IntegerState;
            submissionTs?: IntegerState;
            title?: BinaryState;
            votedMembers?: IntegerState;
        };
    };
};
/**
 * Defines the possible abi call signatures
 */
export type ProposalSig = keyof Proposal['methods'];
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends ProposalSig | undefined> = {
    method: TSignature;
    methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>;
} & AppClientCallCoreParams & CoreAppCallArgs;
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>;
/**
 * Maps a method signature from the Proposal smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends ProposalSig> = Proposal['methods'][TSignature]['argsObj' | 'argsTuple'];
/**
 * Maps a method signature from the Proposal smart contract to the method's return type
 */
export type MethodReturn<TSignature extends ProposalSig> = Proposal['methods'][TSignature]['returns'];
/**
 * A factory for available 'create' calls
 */
export type ProposalCreateCalls = (typeof ProposalCallFactory)['create'];
/**
 * Defines supported create methods for this smart contract
 */
export type ProposalCreateCallParams = (TypedCallParams<'create(address)void'> & (OnCompleteNoOp));
/**
 * Defines arguments required for the deploy method.
 */
export type ProposalDeployArgs = {
    deployTimeParams?: TealTemplateParams;
    /**
     * A delegate which takes a create call factory and returns the create call params for this smart contract
     */
    createCall?: (callFactory: ProposalCreateCalls) => ProposalCreateCallParams;
};
/**
 * Exposes methods for constructing all available smart contract calls
 */
export declare abstract class ProposalCallFactory {
    /**
     * Gets available create call factories
     */
    static get create(): {
        /**
         * Constructs a create call for the Proposal smart contract using the create(address)void ABI method
         *
         * @param args Any args for the contract call
         * @param params Any additional parameters for the call
         * @returns A TypedCallParams object for the call
         */
        create(args: MethodArgs<"create(address)void">, params?: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp)): {
            sender?: SendTransactionFrom;
            note?: import("@algorandfoundation/algokit-utils/types/transaction").TransactionNote;
            sendParams?: SendTransactionParams;
            lease?: string | Uint8Array;
            boxes?: (import("algosdk").BoxReference | import("@algorandfoundation/algokit-utils/types/app").BoxReference | import("@algorandfoundation/algokit-utils/types/app").BoxIdentifier)[];
            accounts?: (string | import("algosdk").Address)[];
            apps?: number[];
            assets?: number[];
            rekeyTo?: SendTransactionFrom | string;
            deployTimeParams?: TealTemplateParams;
            updatable?: boolean;
            deletable?: boolean;
            onCompleteAction?: "no_op" | OnApplicationComplete.NoOpOC;
            method: "create(address)void";
            methodArgs: string[];
        };
    };
    /**
     * Constructs a no op call for the submit_proposal(pay,string,byte[59],uint64,uint64)void ABI method
     *
     * Submit the first draft of the proposal.
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static submitProposal(args: MethodArgs<'submit_proposal(pay,string,byte[59],uint64,uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom;
        note?: import("@algorandfoundation/algokit-utils/types/transaction").TransactionNote;
        sendParams?: SendTransactionParams;
        lease?: string | Uint8Array;
        boxes?: (import("algosdk").BoxReference | import("@algorandfoundation/algokit-utils/types/app").BoxReference | import("@algorandfoundation/algokit-utils/types/app").BoxIdentifier)[];
        accounts?: (string | import("algosdk").Address)[];
        apps?: number[];
        assets?: number[];
        rekeyTo?: SendTransactionFrom | string;
        method: "submit_proposal(pay,string,byte[59],uint64,uint64)void";
        methodArgs: (string | number | bigint | TransactionToSign | Transaction | Promise<SendTransactionResult> | Uint8Array)[];
    };
}
/**
 * A client to make calls to the Proposal smart contract
 */
export declare class ProposalClient {
    private algod;
    /**
     * The underlying `ApplicationClient` for when you want to have more flexibility
     */
    readonly appClient: ApplicationClient;
    private readonly sender;
    /**
     * Creates a new instance of `ProposalClient`
     *
     * @param appDetails appDetails The details to identify the app to deploy
     * @param algod An algod client instance
     */
    constructor(appDetails: AppDetails, algod: Algodv2);
    /**
     * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
     *
     * @param result The AppCallTransactionResult to be mapped
     * @param returnValueFormatter An optional delegate to format the return value if required
     * @returns The smart contract response with an updated return value
     */
    protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult;
    /**
     * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
     *
     * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
     * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
     * @returns The result of the smart contract call
     */
    call<TSignature extends keyof Proposal['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>): Promise<AppCallTransactionResultOfType<MethodReturn<TSignature>> & AppCallTransactionResult>;
    /**
     * Idempotently deploys the Proposal smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    deploy(params?: ProposalDeployArgs & AppClientDeployCoreParams & IncludeSchema): ReturnType<ApplicationClient['deploy']>;
    /**
     * Gets available create methods
     */
    get create(): {
        /**
         * Creates a new instance of the Proposal smart contract using the create(address)void ABI method.
         *
         * @param args The arguments for the smart contract call
         * @param params Any additional parameters for the call
         * @returns The create result
         */
        create(args: MethodArgs<"create(address)void">, params?: AppClientCallCoreParams & AppClientCompilationParams & IncludeSchema & CoreAppCallArgs & (OnCompleteNoOp)): Promise<AppCallTransactionResultOfType<void> & AppCallTransactionResult & Partial<AppCompilationResult> & AppReference>;
    };
    /**
     * Makes a clear_state call to an existing instance of the Proposal smart contract.
     *
     * @param args The arguments for the bare call
     * @returns The clear_state result
     */
    clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResult>;
    /**
     * Calls the submit_proposal(pay,string,byte[59],uint64,uint64)void ABI method.
     *
     * Submit the first draft of the proposal.
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call
     */
    submitProposal(args: MethodArgs<'submit_proposal(pay,string,byte[59],uint64,uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<void> & AppCallTransactionResult>;
    /**
     * Extracts a binary state value out of an AppState dictionary
     *
     * @param state The state dictionary containing the state value
     * @param key The key of the state value
     * @returns A BinaryState instance containing the state value, or undefined if the key was not found
     */
    private static getBinaryState;
    /**
     * Extracts a integer state value out of an AppState dictionary
     *
     * @param state The state dictionary containing the state value
     * @param key The key of the state value
     * @returns An IntegerState instance containing the state value, or undefined if the key was not found
     */
    private static getIntegerState;
    /**
     * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
     */
    getGlobalState(): Promise<Proposal['state']['global']>;
    compose(): ProposalComposer;
}
export type ProposalComposer<TReturns extends [...any[]] = []> = {
    /**
     * Calls the submit_proposal(pay,string,byte[59],uint64,uint64)void ABI method.
     *
     * Submit the first draft of the proposal.
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    submitProposal(args: MethodArgs<'submit_proposal(pay,string,byte[59],uint64,uint64)void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): ProposalComposer<[...TReturns, MethodReturn<'submit_proposal(pay,string,byte[59],uint64,uint64)void'>]>;
    /**
     * Makes a clear_state call to an existing instance of the Proposal smart contract.
     *
     * @param args The arguments for the bare call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): ProposalComposer<[...TReturns, undefined]>;
    /**
     * Adds a transaction to the composer
     *
     * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
     * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
     */
    addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): ProposalComposer<TReturns>;
    /**
     * Returns the underlying AtomicTransactionComposer instance
     */
    atc(): Promise<AtomicTransactionComposer>;
    /**
     * Simulates the transaction group and returns the result
     */
    simulate(options?: SimulateOptions): Promise<ProposalComposerSimulateResult<TReturns>>;
    /**
     * Executes the transaction group and returns the results
     */
    execute(sendParams?: AppClientComposeExecuteParams): Promise<ProposalComposerResults<TReturns>>;
};
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>;
export type ProposalComposerSimulateResult<TReturns extends [...any[]]> = {
    returns: TReturns;
    methodResults: ABIResult[];
    simulateResponse: modelsv2.SimulateResponse;
};
export type ProposalComposerResults<TReturns extends [...any[]]> = {
    returns: TReturns;
    groupId: string;
    txIds: string[];
    transactions: Transaction[];
};
