export declare function chunk(array: bigint[], size: number): bigint[][];
/**
 * Decorator that automatically chunks array arguments and aggregates results
 * @param chunkSize - The maximum size of each chunk
 * @returns Method decorator
 */
export declare function chunked(chunkSize: number, chunkArgIndex?: number): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
