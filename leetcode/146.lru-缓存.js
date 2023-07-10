/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map()   // 遍历顺序为添加顺序
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) { return -1 }
  const value = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, value)
  return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }
  this.cache.set(key, value)
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value)   // 返回第一个key， 先进先出
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end



