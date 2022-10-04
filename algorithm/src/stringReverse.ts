import { swap } from '@/utils'

export default function reverse1(str: string) {
  return str.split('').reverse().join('')
}

export function reverse2(str: string) {
  let list = str.split("")
  for (let i = 0; i < list.length / 2; i++) {
    swap(list, i, list.length - 1 - i)
  }
  return list.join('')
}