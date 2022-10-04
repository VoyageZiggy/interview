import { describe, expect, it } from "vitest";
import getDuplicates, { findDuplicates } from './getDuplicates'

describe('获取数组重复的元素', () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 1, "1", "1",
    {}, {}, { c: 1 }, { c: 1 },
    'a', 'a', 'b', 'b',
    [], [], [1], [1],
    undefined, undefined,
    null, null,
    NaN, NaN,
  ]
  const duplicatesList = [1, '1', 'a', 'b', undefined, null, NaN]


  const test = [1, 1, 2, 3, 4, 2]
  const testE = [1, 2]

  it('getDuplicates', () => {
    expect(getDuplicates(arr)).toEqual(duplicatesList)
  })

  it('findDuplicates  给你一个长度为 n 的整数数组 arr ，其中 arr 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。', () => {
    const arr = [4, 3, 2, 7, 8, 2, 3, 1]
    expect(findDuplicates(arr)).toMatchObject([3, 2])
  })

})
