import { describe, it, expect } from "vitest"
import quickSort from './quickSort'

describe('快速排序', () => {
  it('quickSort', () => {
    let arr = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

    expect(quickSort(arr, 0, arr.length - 1)).toEqual(sortArr)
  })
})