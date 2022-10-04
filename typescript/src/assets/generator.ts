export default function* testGenerator() {
  let a = 'hello'
  yield a
  a = 'world'
  yield a
  a = 'ending'
  return a
}

export function* testNext() {
  const firstP: string = yield 'ret1';
  if (firstP === 'x') {
    const secondP: boolean = yield 'ret2'
    return secondP
  }
  return firstP
}
