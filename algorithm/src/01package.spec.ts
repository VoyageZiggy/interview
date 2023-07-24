import { describe, it, expect } from 'vitest'
import {testWeight } from './01package'

describe('01背包', () =>{
  it('', () => {
    const res = testWeight([1, 3, 4, 5], [15, 20, 30, 55], 6)
    expect(res).equal(70)
  })
})