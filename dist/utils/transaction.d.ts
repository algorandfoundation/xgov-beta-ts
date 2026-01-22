import type { TransactionSigner } from "algosdk";
/**
 * Represents the current state of a transaction flow.
 * - "idle": No transaction in progress
 * - "loading": Transaction is being prepared
 * - "signing": Waiting for user to sign
 * - "sending": Transaction signed, being sent to network
 * - "confirmed": Transaction confirmed on chain
 * - Error: Transaction failed with an error
 */
export type TransactionState = "idle" | "loading" | "signing" | "sending" | "confirmed" | Error;
/**
 * Callback function type for transaction status updates.
 */
export type StatusCallback = (status: TransactionState) => void;
/**
 * Callback function type for refetching data after transaction.
 */
export type RefetchCallback = () => Promise<unknown>;
/**
 * Base options for transaction handlers in the SDK.
 * This is a framework-agnostic interface that can be adapted
 * to different UI frameworks (React, Vue, etc.)
 */
export interface TransactionOptions {
    /** The address of the account sending the transaction */
    sender: string;
    /** The transaction signer function */
    signer: TransactionSigner;
    /** Optional callback for status updates */
    onStatusChange?: StatusCallback;
    /** Optional callbacks to run after successful transaction */
    onSuccess?: RefetchCallback[];
}
/**
 * Wraps a transaction signer to provide status updates during the signing process.
 * This allows the UI to show appropriate feedback when the user is signing.
 *
 * @param transactionSigner - The original transaction signer
 * @param onStatusChange - Callback to update status during signing
 * @returns A wrapped transaction signer that reports status
 */
export declare function wrapTransactionSigner(transactionSigner: TransactionSigner, onStatusChange?: StatusCallback): TransactionSigner;
/**
 * Checks if a transaction state represents an in-progress operation.
 * Useful for disabling UI elements during transactions.
 *
 * @param state - The current transaction state
 * @returns True if transaction is in progress
 */
export declare function isLoadingState(state: TransactionState): boolean;
/**
 * Checks if a transaction state is an error.
 *
 * @param state - The current transaction state
 * @returns True if state is an Error instance
 */
export declare function isErrorState(state: TransactionState): state is Error;
/**
 * Sleep utility for adding delays (e.g., showing confirmation feedback).
 *
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the delay
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Standard post-transaction handler that manages status updates and refetching.
 * Used internally by SDK methods after successful transactions.
 *
 * @param options - Transaction options containing callbacks
 * @param delayMs - Optional delay before marking as idle (default: 800ms)
 */
export declare function handleTransactionSuccess(options: Pick<TransactionOptions, "onStatusChange" | "onSuccess">, delayMs?: number): Promise<void>;
/**
 * Standard error handler for SDK transaction methods.
 * Logs the error and updates the status.
 *
 * @param error - The error that occurred
 * @param operation - Name of the operation for logging
 * @param onStatusChange - Status callback to report the error
 */
export declare function handleTransactionError(error: unknown, operation: string, onStatusChange?: StatusCallback): void;
