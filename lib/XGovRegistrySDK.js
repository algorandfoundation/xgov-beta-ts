var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { APP_SPEC as REGISTRY_APP_SPEC, XGovRegistryClient, } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
import { ProposalStatusMap } from "./enums";
import { XgovReaderSDK, } from "./generated/XgovReaderGhostSDK";
import { chunked } from "./utils";
export class XGovRegistrySDK extends BaseSDK {
    client;
    algorand;
    ghostReaderSDK;
    static APP_SPEC = REGISTRY_APP_SPEC;
    constructor({ appId, algorand, }) {
        super();
        this.algorand = algorand;
        this.client = new XGovRegistryClient({ appId, algorand });
        this.ghostReaderSDK = new XgovReaderSDK({ algorand });
    }
    async getProposalAppIds() {
        const { createdApps } = await this.algorand.account.getInformation(this.appAddress);
        return createdApps?.map(({ id }) => id) || [];
    }
    async getProposalsShortState(appIds) {
        // currently not a great example since global state are all in creator algod response
        // better when mixed with box data, e.g. "can vote" information for specific account
        const shortStates = await this.ghostReaderSDK.getShortProposalState({ appIds });
        return shortStates.map((shortState, index) => ({
            ...shortState,
            appId: appIds[index],
            statusText: ProposalStatusMap[Number(shortState.status)],
        }));
    }
    proposal(appId) {
        return new XGovProposalSDK({ appId, algorand: this.algorand });
    }
}
__decorate([
    chunked(4) // chunks array arguments into sizes of 128
], XGovRegistrySDK.prototype, "getProposalsShortState", null);
