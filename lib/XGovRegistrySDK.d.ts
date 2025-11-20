import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { XGovRegistryClient } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
import { ExtendedStatus } from "./enums";
import { ShortProposalState, XgovReaderSDK } from "./generated/XgovReaderGhostSDK";
export interface ShortProposalStateExtended extends ShortProposalState {
    appId: bigint;
    statusText: ExtendedStatus;
}
export declare class XGovRegistrySDK extends BaseSDK {
    client: XGovRegistryClient;
    algorand: AlgorandClient;
    ghostReaderSDK: XgovReaderSDK;
    static APP_SPEC: import("@algorandfoundation/algokit-utils/types/app-arc56").Arc56Contract;
    constructor({ appId, algorand, }: {
        appId: bigint;
        algorand: AlgorandClient;
    });
    getProposalAppIds(): Promise<bigint[]>;
    getProposalsShortState(appIds: bigint[]): Promise<ShortProposalStateExtended[]>;
    proposal(appId: bigint): XGovProposalSDK;
}
