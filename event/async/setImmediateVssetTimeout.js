const promise = new Promise((resolve, reject) => {
  console.log("promise begin");
  setImmediate(() => {
    console.log('setImmediate')
    resolve("resolved");
  });
  // 优先执行
  setTimeout(() => {
    console.log('setTimeout 0/null')
    reject("rejected");
  });
});

promise
  .then(
    res => {
      return res;
    },
  )
  .then(
    res => {
			console.log(res);
			console.log("right")
    },
  ).catch(err => {
		console.log(err);
		console.log("wrong");
	});
