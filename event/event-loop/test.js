const { log } = console;

setImmediate(function A() {
  console.log("setImmediate  A");

  setImmediate(function B(){console.log("setImmediate B");});
    process.nextTick (function C () {
	  console.log("setImmediate nextTick")
  });
});

console.log("excute stack");

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
      process.nextTick(function C () {
	  console.log("TIMEOUT nextTick")
  });
}, 0);



// 两种答案