/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let s = str.charCodeAt(start);
    let e = str.charCodeAt(end);

    if (!isLetter(s)) {
      start++;
      continue;
    }
    if (!isLetter(e)) {
      end--;
      continue;
    }
    if (toLowerCase(s) !== toLowerCase(e)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
function isLetter(code) {
  if (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  ) {
    return true;
  } else {
    return false;
  }
}
function toLowerCase(code) {
  if (code >= 65 && code <= 90) {
    return (code += 32);
  } else {
    return code;
  }
}
// @lc code=end
