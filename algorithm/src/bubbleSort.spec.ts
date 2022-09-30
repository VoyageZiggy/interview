import { describe, it, expect } from "vitest"
import bubbleSort from './bubbleSort'

describe('冒泡排序  起泡排序', () => {
  it('bubbleSort', () => {
    let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const sortArr = arr.sort((a, b) => a - b)
    bubbleSort(arr)
    expect(arr).toEqual(sortArr)
  })

  it('bubbleSort n', () => {
    let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const sortArr = arr.sort((a, b) => a - b)
    bubbleSort(arr, arr.length)
    expect(arr).toEqual(sortArr)
  })
})