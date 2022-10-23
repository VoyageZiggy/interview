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
  const map = new Map();
  for (var i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map.has(target - n)) {
      return [map.get(target - n), i];
    } else {
      map.set(target - n, i);
    }
  }
  return [];
};
// @lc code=end
