import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import {
  APP_SPEC as REGISTRY_APP_SPEC,
  XGovRegistryClient,
} from "./generated/XGovRegistryClient";
import { BaseSDK } from "./BaseSDK";
import { XGovProposalSDK } from "./XGovProposalSDK";
import { ExtendedStatus, ProposalStatusMap, ProposalStatus } from "./enums";
import {
  ShortProposalState,
  XgovReaderSDK,
} from "./generated/XgovReaderGhostSDK";
import { chunked } from "./utils";

export interface ShortProposalStateExtended extends ShortProposalState {
  appId: bigint;
  statusText: ExtendedStatus;
}

export class XGovRegistrySDK extends BaseSDK {
  public client: XGovRegistryClient;
  public algorand: AlgorandClient;
  public ghostReaderSDK: XgovReaderSDK;

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
    this.ghostReaderSDK = new XgovReaderSDK({ algorand });
  }

  async getProposalAppIds(): Promise<bigint[]> {
    const { createdApps } = await this.algorand.account.getInformation(
      this.appAddress
    );
    return createdApps?.map(({ id }) => id) || [];
  }

  @chunked(128) // chunks array arguments into sizes of 128. ghost call needs 1 ref atmo, 128 max in simulate
  async getProposalsShortState(
    appIds: bigint[]
  ): Promise<ShortProposalStateExtended[]> {
    // currently not a great example since global state are all in creator algod response
    // better when mixed with box data, e.g. "can vote" information for specific account
    const shortStates = await this.ghostReaderSDK.getShortProposalState({
      appIds,
    });
    return shortStates.map((shortState, index) => ({
      ...shortState,
      appId: appIds[index],
      statusText:
        ProposalStatusMap[Number(shortState.status) as ProposalStatus],
    }));
  }

  proposal(appId: bigint): XGovProposalSDK {
    return new XGovProposalSDK({ appId, algorand: this.algorand });
  }
}
