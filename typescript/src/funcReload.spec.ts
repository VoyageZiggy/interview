import { describe, expect, it } from 'vitest'
import { pickCard, add } from './funcReload'
describe("函数的重载", () => {
  it('pickCard', () => {
    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    let pickedCard2 = pickCard(15);
    expect(pickedCard2).toEqual({ suit: 'spades', card: 2 })
  })

  it('add', () => {
    expect(add(1, 2)).toBe(3)
    expect(add('1', '2')).toBe('12')

  })
})