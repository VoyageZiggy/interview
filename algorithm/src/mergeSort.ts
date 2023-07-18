export default function mergeSort(arr: number[]): number[] {
  if (arr.length<= 1) return arr

  const mid = Math.floor(arr.length /2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(left: number[], right: number[]) {
  const res = []
  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)]
}
