/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let left = 0, sum = 0, i = 0;
  nums.map((x) => (sum += x));
  for (i; i < nums.length; i++) {
    if (left * 2 == sum - nums[i]) return i
    left += nums[i]
  }
  return -1
};
