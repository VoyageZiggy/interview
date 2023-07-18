import { describe, it, expect } from "vitest"
import mergeSort from './mergeSort'

describe('归并排序', () => {
  it('quickSort', () => {
    let arr = [ 9, 8, 7, 6, 5, 4, 3, 1, 2]
    const sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(mergeSort(arr)).toEqual(sortArr)
  })
})