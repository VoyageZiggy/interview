export default function minMax(arr: number[]) {
  return [Math.min(...arr), Math.max(...arr)]
}

export function minMax2(arr: number[]) {
  let min = arr[0]
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return [min, max]
};

export function minMax3(arr: number[]) {
  quickSort(arr, 0, arr.length - 1)
  return [arr[0], arr[length - 1]]
}

function partition(arr: number[], low: number, high: number) {
  const pivot = arr[low]

  while (low < high && pivot < arr[high]) {
    high--
  }
  arr[low] = arr[high]
  while (low < high && arr[low] > pivot) {
    low++
  }
  arr[high] = arr[low]
  arr[low] = pivot
  return low
}

function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    const pivot = partition(arr, low, high)
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }
}