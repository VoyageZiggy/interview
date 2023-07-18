/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  const pow = Math.abs(n)
  let res = n% 2 === 0 ? myPow(x*x, pow/2) : myPow(x*x , (pow-1)/2)*x
  return n > 0 ? res : 1/res
};
// @lc code=end

