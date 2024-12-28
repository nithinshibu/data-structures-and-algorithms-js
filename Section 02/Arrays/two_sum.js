//This is the brute force approach of two sum

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let twoSum = nums[i] + nums[j];
      if (twoSum === target) {
        return [i, j];
      }
    }
  }
  return [];
};

const res = twoSum([2, 7, 1, , 5, 3], 9);
console.log(res);
