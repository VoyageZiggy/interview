/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (arr) {
  const n = arr.length;
  const list = [];
  for (let i = 0; i < n; ++i) {
    while (arr[i] !== arr[arr[i] - 1]) {
      swap(arr, i, arr[i] - 1);
    }
  }
  for (let i = 0; i < n; i++) {
    if (i !== arr[i] - 1) {
      list.push(arr[i]);
    }
  }
  return list;
};

// @lc code=end
