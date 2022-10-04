import { swap } from '@/utils'

export default function getDuplicates(arr: any[]) {
  const list: any[] = arr.slice()
  const duplicates = []
  for (let i = 0; i < list.length; i++) {
    let duplicateFlag = 0
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        duplicateFlag++
        const temp = list.splice(j, 1)
        j--
        if (duplicateFlag === 1) {
          duplicates.push(temp[0])
        }
      } else {
        if ((typeof list[i] === 'number' && list[i] !== list[i]) && (typeof list[j] === 'number' && list[j] !== list[j])) {
          duplicateFlag++
          const temp = list.splice(j, 1)
          j--
          if (duplicateFlag === 1) {
            duplicates.push(temp[0])
          }
        }
      }

    }
  }
  return duplicates
}

export function findDuplicates(arr: number[]) {
  const n = arr.length
  const list = []
  for (let i = 0; i < n; ++i) {
    while (arr[i] !== arr[arr[i] - 1]) {
      swap(arr, i, arr[i] - 1);
    }

  }
  for (let i = 0; i < n; i++) {
    if (i !== arr[i] - 1) {
      list.push(arr[i])
    }
  }
  return list
}
