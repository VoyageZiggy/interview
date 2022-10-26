/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散法  考虑回文子串奇偶性

  let ll = 0;
  let rr = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i + 1]) {
      for (let l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
        [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];
      }
    }
  }
  return s.substring(ll, rr + 1);
};
// @lc code=end
