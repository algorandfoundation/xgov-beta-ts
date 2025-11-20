import { APP_SPEC as REGISTRY_APP_SPEC, XGovRegistryClient, } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
import { ProposalStatusMap } from "./enums";
import { XgovReaderSDK } from "./generated/XgovReaderGhostSDK";
export class XGovRegistrySDK extends BaseSDK {
    client;
    algorand;
    static APP_SPEC = REGISTRY_APP_SPEC;
    constructor({ appId, algorand, }) {
        super();
        this.algorand = algorand;
        this.client = new XGovRegistryClient({ appId, algorand });
    }
    async getProposalAppIds() {
        const { createdApps } = await this.algorand.account.getInformation(this.appAddress);
        return createdApps?.map(({ id }) => id) || [];
    }
    async getProposalsShortState(appIds) {
        const sdk = new XgovReaderSDK({ algorand: this.algorand });
        const shortStates = await sdk.getShortProposalState({ appIds });
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
