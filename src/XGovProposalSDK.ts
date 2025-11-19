import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { BaseSDK } from "./BaseSDK";
import {
  APP_SPEC as PROPOSAL_APP_SPEC,
  ProposalClient,
} from "./generated/ProposalClient";

export class XGovProposalSDK extends BaseSDK {
  public client: ProposalClient;
  public algorand: AlgorandClient;

  static APP_SPEC = PROPOSAL_APP_SPEC;

  constructor({
    appId,
    algorand,
  }: {
    appId: bigint;
    algorand: AlgorandClient;
  }) {
    super();
    this.algorand = algorand;
    this.client = new ProposalClient({ appId, algorand });
  }
}
