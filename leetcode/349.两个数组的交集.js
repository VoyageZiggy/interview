/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  return [...new Set(nums2.filter((item) => set1.has(item)))];
};

// @lc code=end

/*
// force
var intersection = function (nums1, nums2) {
  const sort1 = nums1.sort((a, b) => a - b);
  const sort2 = nums2.sort((a, b) => a - b);
  const ret = [];
  let i = 0;
  let j = 0;
  while (i < sort1.length && j < sort2.length) {
    if (sort1[i] === sort2[j]) {
      if (!ret.includes(sort1[i])) {
        ret.push(sort1[i]);
      }
      i++;
      j++;
    } else if (sort1[i] < sort2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return ret;
};

// hash map
var intersection = function (nums1, nums2) {
  let map = new Map();
  for (let num of nums1) {
    if (!map.has(num)) {
      map.set(num, 1);
    }
  }
  return nums2.filter((n) => {
    if (map.has(n)) {
      map.delete(n);
      return true;
    }
  });
};

// set
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ret = [];
  let [smallSet, largeSet] =
    set1.length > set2.length ? [set1, set2] : [set2, set1];
  smallSet.forEach((item) => {
    if (largeSet.has(item)) {
      ret.push(item);
    }
  });
  return ret;
};

var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  return [...new Set(nums2.filter((item) => set1.has(item)))];
};

*/
