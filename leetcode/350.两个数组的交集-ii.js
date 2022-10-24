/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const ret = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      ret.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return ret;
};
// @lc code=end
