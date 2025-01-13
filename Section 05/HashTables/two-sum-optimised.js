function twoSum(nums, target) {
  // Initialize an object to store numbers as keys and their indices as values.
  const numMap = {};

  // Iterate through the array of numbers.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the compliment by subtracting the current number from the target.
    const compliment = target - nums[i];

    // Check if the compliment exists in the map and that it is not the current index.
    if (compliment in numMap && numMap[compliment] !== i) {
      // If the compliment is found, return the indices of the current number and its compliment.
      return [numMap[compliment], i];
    }

    // Store the current number and its index in the map for future reference.
    numMap[nums[i]] = i;
  }

  // If no pair is found that adds up to the target, return an empty array.
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
