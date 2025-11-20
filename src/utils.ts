export function chunk(array: bigint[], size: number): bigint[][] {
  const chunkedArr: bigint[][] = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

/**
 * Decorator that automatically chunks array arguments and aggregates results
 * @param chunkSize - The maximum size of each chunk
 * @returns Method decorator
 */
export function chunked(chunkSize: number, chunkArgIndex: number = 0) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const ids = args[chunkArgIndex];
      // If appIds array is smaller than or equal to chunk size, call original method directly
      if (ids.length <= chunkSize) {
        console.log("No chunking needed, calling original method directly.");
        return originalMethod.apply(this, [ids, ...args]);
      }

      // Chunk the appIds array
      const chunks = chunk(ids, chunkSize);
      // Process each chunk sequentially and collect results
      const results = [];
      for (const chunkedIds of chunks) {
        console.log(`Processing chunk of size ${chunkedIds.length}: ${chunkedIds}`);
        const chunkResult = await originalMethod.apply(this, [chunkedIds, ...args]);
        results.push(chunkResult);
      }

      // Flatten the results into a single array
      return results.flat();
    };

    return descriptor;
  };
}