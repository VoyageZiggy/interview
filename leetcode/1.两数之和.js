/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
};
// @lc code=end
