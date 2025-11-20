import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import {
  APP_SPEC as REGISTRY_APP_SPEC,
  XGovRegistryClient,
} from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";

export class XGovRegistrySDK extends BaseSDK {
  public client: XGovRegistryClient;
  public algorand: AlgorandClient;

  static APP_SPEC = REGISTRY_APP_SPEC;

  constructor({
    appId,
    algorand,
  }: {
    appId: bigint;
    algorand: AlgorandClient;
  }) {
    super();
    this.algorand = algorand;
    this.client = new XGovRegistryClient({ appId, algorand });
  }

  async getProposalAppIds(): Promise<bigint[]> {
    const { createdApps } = await this.algorand.account.getInformation(
      this.appAddress
    );
    return createdApps?.map(({ id }) => id) || [];
  }

  proposal(appId: bigint): XGovProposalSDK {
    return new XGovProposalSDK({ appId, algorand: this.algorand });
  }
}
