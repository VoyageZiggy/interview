export default function binarySearch(arr: number[], target: number, start: number, end: number): number {
  const medium = Math.ceil((start + end) / 2)

  if (arr[medium] === target) {
    return medium
  }
  if (start >= end) {
    return -1
  }
  if (arr[medium] > target) {
    return binarySearch(arr, target, start, medium - 1)
  } else {
    return binarySearch(arr, target, medium + 1, end)
  }
}