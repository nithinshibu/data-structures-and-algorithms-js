/*

Array Chunk
Write a function that takes an array and a chunk size as input.
The function should return a new array where the original array is split into chunks of the specified size.

Examples:
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
Output: [[1, 2, 3], [4, 5, 6], [7, 8]]

chunkArray([1, 2, 3, 4, 5], 2)
Output: [[1, 2], [3, 4]]

*/

const chunk = (array, size) => {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunkedArray.push(chunk);
    index += size;
  }

  return chunkedArray;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

/*

const chunk = (array, size) => {
  const chunkedArray = [];
  let currentChunk = [];

  for (let i = 0; i < array.length; i++) {
    currentChunk.push(array[i]);

    If the current chunk reaches the specified size, push it to the result and reset currentChunk
    if (currentChunk.length === size) {
      chunkedArray.push(currentChunk);
      currentChunk = [];
    }
  }

  Push any remaining elements in the last chunk (if any)
  if (currentChunk.length > 0) {
    chunkedArray.push(currentChunk);
  }

  return chunkedArray;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));


*/
