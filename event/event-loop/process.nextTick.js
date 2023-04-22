// process.nextTick(function A() {
//   console.log(11);
//   process.nextTick(function C(){console.log(22);});
// });
// process.nextTick(function B(){console.log(33);});

// setTimeout(function timeout() {
//   console.log('TIMEOUT FIRED');
// }, 0)

// console.log("<================>");

// setTimeout(function () {
//   console.log(1);
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log(2);
//   resolve();
//   console.log("resolve");
// })
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });

process.nextTick(function A() {
  console.log("A");
  process.nextTick(function C() {
    console.log("C");
    process.nextTick(function D() {
      console.log("D");
    });
  });
});

process.nextTick(function F() {
  console.log("F");
  process.nextTick(function J() {
    console.log("J");
  });
});

new Promise((resolve) => {
  console.log("Promise");
  resolve();
}).then(() => {
  console.log("then");
});
