import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { XGovRegistryClient } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
export declare class XGovRegistrySDK extends BaseSDK {
    client: XGovRegistryClient;
    algorand: AlgorandClient;
    static APP_SPEC: import("@algorandfoundation/algokit-utils/types/app-arc56").Arc56Contract;
    constructor({ appId, algorand, }: {
        appId: bigint;
        algorand: AlgorandClient;
    });
    getProposalAppIds(): Promise<bigint[]>;
    proposal(appId: bigint): XGovProposalSDK;
}
