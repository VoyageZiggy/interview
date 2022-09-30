export default function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    const pivot = partition(arr, low, high)
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }
}

function partition(arr: number[], low: number, high: number) {
  let pivot = arr[low]
  while (low < high) {
    while (low < high && pivot <= arr[high]) {
      --high
    }
    arr[low] = arr[high]
    while (low < high && arr[low] <= pivot) {
      ++low
    }
    arr[high] = arr[low]
    arr[low] = pivot
  }
  return low
}