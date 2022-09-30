export default function bubbleSort(arr: number[], n?: number) {
  const list = arr.slice()
  const count = n ? n : list.length
  for (let i = 1; i < count; i++) {
    for (let j = 0; j < count - i; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
      }
    }
  }
  return list
}
// 外层for循环 n-1 次   内层 n - i