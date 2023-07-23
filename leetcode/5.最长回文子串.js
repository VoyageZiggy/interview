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
  let max = 0;
  let start = -1;
  for (let i = 0; i < s.length; i++) {
    let now = 1
    let l = i - 1
    while(s[i] === s[i+1] && s[i] !== undefined) {
      now++
      i++
    }
    let r = i+1
    while(s[l] === s[r] && s[l] !== undefined) {
      now+=2
      l--
      r++
    }
    if (now > max) {
      max = now
      start = l + 1
    }
  }
  return s.substring(start, start+  max)
};

// @lc code=end

