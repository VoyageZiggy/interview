import { describe, expect, it } from "vitest";
import removeDuplicates, { removeDuplicates2, removeDuplicates3 } from './removeDuplicates'


describe('数组去重', () => {
  const arr = [
    1, 1, "1", "1",
    {}, {}, { c: 1 }, { c: 1 },
    'a', 'a', 'b', 'b',
    [], [], [1], [1],
    undefined, undefined,
    null, null,
    NaN, NaN,
  ]
  const removeDuplicatesList = [1, '1', {}, {}, { c: 1 }, { c: 1 }, 'a', 'b', [], [], [1], [1], undefined, null, NaN]


  it('removeDuplicates', () => {
    expect(removeDuplicates(arr)).toEqual(removeDuplicatesList)
  })
  it('removeDuplicates2', () => {
    expect(removeDuplicates2(arr)).toEqual(removeDuplicatesList)
  })
  it('removeDuplicates3', () => {
    expect(removeDuplicates3(arr)).toEqual(removeDuplicatesList)
  })
})
