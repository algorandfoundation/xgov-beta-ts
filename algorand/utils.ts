import { AlgoAmount } from "@algorandfoundation/algokit-utils/types/amount";
import { algorand } from "./algo-client";
import type algosdk from "algosdk";

const max = (...values: bigint[]): bigint => {
    if (values.length === 0) {
        throw new Error('Cannot find maximum of empty array')
    }
    return values.reduce((max, val) => (val > max ? val : max))
}

export type Exclude =
    | 'all'
    | 'assets'
    | 'created-assets'
    | 'apps-local-state'
    | 'created-apps'
    | 'none'

export async function fetchAccountInformation(
    address: string,
    exclude: Exclude = 'none',
): Promise<algosdk.modelsv2.Account> {
    const accountInfo = await algorand.client.algod.accountInformation(address).exclude(exclude).do()
    return accountInfo as algosdk.modelsv2.Account
}

export type AccountBalance = {
  amount: AlgoAmount
  available: AlgoAmount
  minimum: AlgoAmount
}

export async function fetchBalance(address: string | null): Promise<AccountBalance> {
    if (!address) {
        throw new Error('No address provided')
    }
    const accountInfo = await fetchAccountInformation(address, 'all')

    const amount = accountInfo.amount
    const minimum = accountInfo.minBalance
    const available = max(0n, amount - minimum)

    return {
        amount: AlgoAmount.MicroAlgos(amount),
        available: AlgoAmount.MicroAlgos(available),
        minimum: AlgoAmount.MicroAlgos(minimum),
    }
}