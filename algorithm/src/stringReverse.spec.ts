import { describe, it, expect } from 'vitest'
import reverse, { reverse2 } from './stringReverse'

describe("reverse 字符串“abcdef逆序fedcba", () => {
  it("reverse", () => {
    expect(reverse('abc')).toEqual('cba')
    expect(reverse('abcd')).toEqual('dcba')

  })
  it("reverse2", () => {
    expect(reverse2('abc')).toEqual('cba')
    expect(reverse2('abcd')).toEqual('dcba')

  })
})