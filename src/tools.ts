/**
 * Divide elements into chunks of fixed size. Also called batching. The last 
 * chunk may have less items than `size` of the chunks
 * @param arr An array
 * @param size How many items in each chunk
 * @returns The elements in a list of arrays of the specified size
 */
export function chunkArray<T>(arr: Array<T>, size: number) {
  let result = []
  for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size)
      result.push(chunk)
  }
  return result
};