import { swap } from '@/utils'


export default function bubbleSort(arr: number[], n: number) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
// 外层for循环 n-1 次   内层 n - i
