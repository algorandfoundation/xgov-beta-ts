import { APP_SPEC as REGISTRY_APP_SPEC, XGovRegistryClient, } from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
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
}
