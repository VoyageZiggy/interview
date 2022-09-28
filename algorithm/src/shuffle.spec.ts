import { describe, it, expect } from 'vitest'
import shuffle, { shuffle2 } from './shuffle'



describe("shuffle 数组元素随机排序", () => {

  it("shuffle", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let shuffleList = shuffle(list)
    console.log("🚀 ~ file: shuffle.spec.ts ~ line 10 ~ it ~ list", list, shuffleList)

    expect(list).not.toEqual(shuffleList)
  })

  it("shuffle2", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let shuffleList = shuffle2(list)
    console.log("🚀 ~ file: shuffle.spec.ts ~ line 10 ~ it ~ list", list, shuffleList)
    expect(list).not.toEqual(shuffleList)
  })
})


