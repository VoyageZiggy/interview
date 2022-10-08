const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  status = PENDING;
  value = null;
  reason = null;

  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  };
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    const realOnFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    const realOnRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const promise2 = new MyPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.status === FULFILLED) {
        // this.status 不是刚 new MyPromise的
        fulfilledMicrotask();
      } else if (this.status === REJECTED) {
        rejectedMicrotask();
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    });
    return promise2;
  }
  catch(onRejected) {
    // 只需要进行错误处理
    this.then(undefined, onRejected);
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(
      new TypeError("The promise and the return value are the same")
    );
  }

  if (typeof x === "object" || typeof x === "function") {
    if (x === null) {
      return resolve(x);
    }

    let then;
    try {
      then = x.then;
    } catch (error) {
      return reject(error);
    }

    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (error) {
        if (called) return;

        reject(error);
      }
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

// MyPromise.deferred = function () {
//   var result = {};
//   result.promise = new MyPromise(function (resolve, reject) {
//     result.resolve = resolve;
//     result.reject = reject;
//   });

//   return result;
// };
// module.exports = MyPromise;

MyPromise.resolve()
  .then(() => {
    console.log(0);
    return MyPromise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

// MyPromise.resolve()
// .then(() => {
//   console.log(1);
// })
// .then(() => {
//   console.log(2);
// })
// .then(() => {
//   console.log(3);
// })
// .then(() => {
//   console.log(5);
// })
// .then(() => {
//   console.log(6);
// });
