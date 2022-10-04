import { describe, it, expect } from 'vitest'
import binarySearch from './binarySearch'
describe("升序数组二分查找", () => {
  it('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2, 0, 4)).toBe(1)
    expect(binarySearch([1, 2, 3, 4, 5], 2.2, 0, 4)).toBe(-1)
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4, 0, 5)).toBe(3)
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6, 0, 5)).toBe(5)
  })
})


