export function chunk(array: bigint[], size: number): bigint[][] {
  const chunkedArr: bigint[][] = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}