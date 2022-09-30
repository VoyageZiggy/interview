export default function bubbleSort(arr: number[], n: number) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
// 外层for循环 n-1 次   内层 n - i
