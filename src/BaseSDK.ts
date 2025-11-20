import { Address } from "algosdk";

export abstract class BaseSDK {
  public abstract client: { appId: bigint; appAddress: Address };

  get appId() {
    return this.client.appId;
  }

  get appAddress() {
    return this.client.appAddress;
  }
}
