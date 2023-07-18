/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  let numSum = nums[0]
  for(let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i-1]) + nums[i]
    if (nums[i] > numSum) {
      numSum = nums[i]
    }
  }
  return numSum
};
// @lc code=end

