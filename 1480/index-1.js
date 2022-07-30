/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let result = [];
  nums.reduce((prev, curr) => {
    if (prev && prev.length == 0) {
      result.push(curr);
      return result;
    }
    let el = prev[prev.length - 1] + curr;

    result.push(el);
    return result;
  }, result);

  return result;
};

const arr = [1, 2, 3, 4];

console.log(runningSum(arr));
