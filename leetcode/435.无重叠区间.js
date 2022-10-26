/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let remove = 0;
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] > intervals[i][0]) {
      remove++;
    } else {
      prev = intervals[i];
    }
  }
  return remove;
};
// @lc code=end
