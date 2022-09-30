import { describe, it, expect } from "vitest"
import bubbleSort from './bubbleSort'

describe('冒泡排序  起泡排序', () => {


  it('bubbleSort', () => {
    let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    bubbleSort(arr, arr.length)
    expect(arr).toEqual(sortArr)
  })
})