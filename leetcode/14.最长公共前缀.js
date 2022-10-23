/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strList
 * @return {string}
 */
var longestCommonPrefix = function (strList) {
  if (strList === undefined || strList.length === 0) {
    return 0;
  }
  return strList.reduce((prev, cur) => {
    let i = 0;
    while (prev[i] && cur[i] && prev[i] === cur[i]) {
      i++;
    }
    return prev.slice(0, i);
  });
};
// @lc code=end
