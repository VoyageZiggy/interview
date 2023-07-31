function debounce(fn, delay) {
  let timerId = null
  return function (...arg) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  }
}

function throttle(fn, delay) {
  let timerId = null
  return function (...arg) {
    if (!timerId) {
      fn.apply(this, arg)
      timerId = setTimeout(() => {
        timerId = null
      }, delay)
    }
  }
}

// const debounceFn = debounce(()=> {console.log(new Date().toUTCString())}, 1000);
// setInterval(() => {
//   debounceFn()
// }, 900)

const throttleFn = debounce(()=> {console.log(new Date().toUTCString())}, 1000);
setInterval(() => {
  throttleFn()
}, 1000)