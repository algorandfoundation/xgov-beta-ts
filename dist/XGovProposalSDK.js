import { BaseSDK } from "./BaseSDK";
import { APP_SPEC as PROPOSAL_APP_SPEC, ProposalClient, } from "./generated/ProposalClient";
import { ProposalStatusMap } from "./enums";
export class XGovProposalSDK extends BaseSDK {
    client;
    algorand;
    static APP_SPEC = PROPOSAL_APP_SPEC;
    constructor({ appId, algorand, }) {
        super();
        this.algorand = algorand;
        this.client = new ProposalClient({ appId, algorand });
    }
    async getState() {
        const state = (await this.client.state.global.getAll());
        if (!state || !state.registryAppId) {
            return null;
        }
        return {
            ...state,
            appId: this.appId,
            statusText: ProposalStatusMap[Number(state.status)],
        };
    }
}
