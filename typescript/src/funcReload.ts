let suits = ["hearts", "spades", "clubs", "diamonds"];

export function pickCard(x: { suit: string; card: number; }[]): number;
export function pickCard(x: number): { suit: string; card: number; };
export function pickCard(x: { suit: string; card: number; }[] | number) {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

export function add(x: number, y: number): number;
export function add(x: string, y: string): string;
export function add(x: any, y: any) {
  if (typeof x === 'number') {
    return x + y
  }
  if (typeof y === 'string') {
    return x + y
  }
}