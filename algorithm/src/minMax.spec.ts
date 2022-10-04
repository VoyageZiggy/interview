import { describe, it, expect } from 'vitest'
import minMax, { minMax2 } from './minMax'

describe('最值', () => {
  it('minMax', () => {
    const list = [1, 2, 3, 4, 5, 6]
    expect(minMax(list)).toEqual([1, 6])
  })

  it('minMax2', () => {
    const list = [1, 2, 0, 1, 3, 4, 5, 6]
    expect(minMax2(list)).toEqual([0, 6]);
  })
})