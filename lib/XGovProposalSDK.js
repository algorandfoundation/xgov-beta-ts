import { BaseSDK } from "./BaseSDK";
import { APP_SPEC as PROPOSAL_APP_SPEC, ProposalClient, } from "./generated/ProposalClient";
export class XGovProposalSDK extends BaseSDK {
    client;
    algorand;
    static APP_SPEC = PROPOSAL_APP_SPEC;
    constructor({ appId, algorand, }) {
        super();
        this.algorand = algorand;
        this.client = new ProposalClient({ appId, algorand });
    }
}
