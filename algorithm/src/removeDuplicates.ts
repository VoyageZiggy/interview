export default function removeDuplicates(arr: any[]) {
  const list: any[] = []
  arr.forEach((item) => {
    !list.includes(item) && list.push(item)
    // [NaN].includes(NaN)  true   
  })
  return list
}

export function removeDuplicates2(arr: any[]) {
  return [...new Set(arr)]
}

export function removeDuplicates3(arr: any[]) {
  let list = arr.slice()
  for (let i = 0; i <= list.length; i++) {
    for (let j = i + 1; j <= list.length; j++) {
      if (list[j] === list[i]) {
        list.splice(j, 1)
      } else {
        if ((typeof list[i] === 'number' && list[i] !== list[i]) && (typeof list[j] === 'number' && list[j] !== list[j])) {
          list.splice(j, 1)
        }
      }
    }
  }
  return list
}
