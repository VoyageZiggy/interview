export default function shuffle(arr: (string | number)[]) {
  let arrShuffle = []
  let copy = arr.slice()
  while (copy.length) {
    let i = Math.floor(Math.random() * copy.length)
    let el = copy[i]
    arrShuffle.push(el)
    copy.splice(i, 1)
  }
  return arrShuffle;
}

export function shuffle2(arr: (string | number)[]) {
  return arr.slice().sort(() => Math.random() - 0.5)
}