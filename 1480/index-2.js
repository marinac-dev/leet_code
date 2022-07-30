/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  const len = nums.length;
  let result = [nums[0]];
  let i = 1;

  for (i; i < len; i++) {
    const element = nums[i];
    const sum = result[i - 1] + element;
    result.push(sum);
  }

  return result;
};
