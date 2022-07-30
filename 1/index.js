/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let i = 0, trail = new Map();

  for (i; i < nums.length; i++) {
    const el = nums[i];
    if (trail.has(el)) return [trail.get(el), i];
    let diff = target - el;
    trail.set(diff, i)
  }
};
