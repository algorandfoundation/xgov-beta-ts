// ============================================================================
// Transaction Utilities
// ============================================================================
/**
 * Wraps a transaction signer to provide status updates during the signing process.
 * This allows the UI to show appropriate feedback when the user is signing.
 *
 * @param transactionSigner - The original transaction signer
 * @param onStatusChange - Callback to update status during signing
 * @returns A wrapped transaction signer that reports status
 */
export function wrapTransactionSigner(transactionSigner, onStatusChange) {
    return async function (txns, idxs) {
        onStatusChange?.("signing");
        const signed = await transactionSigner(txns, idxs);
        onStatusChange?.("sending");
        return signed;
    };
}
/**
 * Checks if a transaction state represents an in-progress operation.
 * Useful for disabling UI elements during transactions.
 *
 * @param state - The current transaction state
 * @returns True if transaction is in progress
 */
export function isLoadingState(state) {
    return (state === "loading" ||
        state === "signing" ||
        state === "sending" ||
        state === "confirmed");
}
/**
 * Checks if a transaction state is an error.
 *
 * @param state - The current transaction state
 * @returns True if state is an Error instance
 */
export function isErrorState(state) {
    return state instanceof Error;
}
/**
 * Sleep utility for adding delays (e.g., showing confirmation feedback).
 *
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the delay
 */
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Standard post-transaction handler that manages status updates and refetching.
 * Used internally by SDK methods after successful transactions.
 *
 * @param options - Transaction options containing callbacks
 * @param delayMs - Optional delay before marking as idle (default: 800ms)
 */
export async function handleTransactionSuccess(options, delayMs = 800) {
    options.onStatusChange?.("confirmed");
    await sleep(delayMs);
    options.onStatusChange?.("idle");
    if (options.onSuccess) {
        await Promise.all(options.onSuccess.map((fn) => fn()));
    }
}
/**
 * Standard error handler for SDK transaction methods.
 * Logs the error and updates the status.
 *
 * @param error - The error that occurred
 * @param operation - Name of the operation for logging
 * @param onStatusChange - Status callback to report the error
 */
export function handleTransactionError(error, operation, onStatusChange) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error(`Error during ${operation}:`, err.message);
    onStatusChange?.(err);
}
