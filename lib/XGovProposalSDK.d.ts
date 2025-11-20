import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { BaseSDK } from "./BaseSDK";
import { ProposalClient, GlobalKeysState as ProposalGlobalKeysState } from "./generated/ProposalClient";
import { ExtendedStatus } from "./enums";
export interface ProposalState extends ProposalGlobalKeysState {
    appId: bigint;
    statusText: ExtendedStatus;
}
export declare class XGovProposalSDK extends BaseSDK {
    client: ProposalClient;
    algorand: AlgorandClient;
    static APP_SPEC: import("@algorandfoundation/algokit-utils/types/app-arc56").Arc56Contract;
    constructor({ appId, algorand, }: {
        appId: bigint;
        algorand: AlgorandClient;
    });
    getState(): Promise<ProposalState | null>;
}
