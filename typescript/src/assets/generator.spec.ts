import { describe, it, expect } from "vitest";
import testGenerator, { testNext } from "./generator";

describe('generator', () => {
  it('next', () => {
    const hw = testGenerator()
    expect(hw.next()).toEqual({ value: 'hello', done: false })
    expect(hw.next()).toEqual({ value: 'world', done: false })
    expect(hw.next()).toEqual({ value: 'ending', done: true })
    expect(hw.next()).toEqual({ value: undefined, done: true })
  })

  it('next param case 1', () => {
    const tn = testNext()
    expect(tn.next()).toEqual({ value: 'ret1', done: false })
    expect(tn.next('x')).toEqual({ value: 'ret2', done: false })
    expect(tn.next('y')).toEqual({ value: 'y', done: true })
  })

  it('next param case 2', () => {
    const tn = testNext()
    expect(tn.next()).toEqual({ value: 'ret1', done: false })
    expect(tn.next('y')).toEqual({ value: 'y', done: true })
  })
})