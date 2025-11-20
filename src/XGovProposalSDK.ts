import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { BaseSDK } from "./BaseSDK";
import {
  APP_SPEC as PROPOSAL_APP_SPEC,
  ProposalClient,
  GlobalKeysState as ProposalGlobalKeysState,
} from "./generated/ProposalClient";
import { ProposalStatusMap, ProposalStatus, ExtendedStatus } from "./enums";

export interface ProposalState extends ProposalGlobalKeysState {
  appId: bigint;
  statusText: ExtendedStatus;
}

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

  async getState(): Promise<ProposalState | null> {
    const state = (await this.client.state.global.getAll()) as ProposalState;
    if (!state || !state.registryAppId) {
      return null;
    }
    return {
      ...state,
      appId: this.appId,
      statusText: ProposalStatusMap[Number(state.status) as ProposalStatus],
    };
  }
}
