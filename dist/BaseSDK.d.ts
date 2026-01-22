import { Address } from "algosdk";
export declare abstract class BaseSDK {
    abstract client: {
        appId: bigint;
        appAddress: Address;
    };
    get appId(): bigint;
    get appAddress(): Address;
}
