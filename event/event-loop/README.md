# 事件循环

## 个人理解
  1. 首先执行栈 execute stack （同步），直到执行栈为空。
  2. 再读取 process.nextTick (node 特有，浏览器跳过该步骤)。
  3. 读取任务队列 task queue（异步回调）队列第一个事件，同步代码进入执行栈，异步代码进入任务队列。再从步骤一开始循环执行。

## 任务队列

### 同步任务
synchronous
同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务
#### 执行栈
所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）

### 异步任务
asynchronous
任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行

  #### 任务队列
  主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

  ### 执行顺序
  一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行，（执行回调函数）。


  ## 事件和回调函数

  ### “任务队列”是一个事件队列

  1. "任务队列"是一个事件的队列（也可以理解成消息的队列），IO设备完成一项任务，就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了。主线程读取"任务队列"，就是读取里面有哪些事件。

  2. "任务队列"中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。

  3. "任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。

### 回调函数

  1. "回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。


## event-loop

![event-loop](https://gitee.com/ziggycs9796/study-project/raw/master/event/img/event-loop.png)

上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。

## 定时器

### setTimeout() setInterval()

  1. setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。


  2. 需要注意的是，setTimeout()只是将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在setTimeout()指定的时间执行。

## Node.js的Event Loop

  ![node-event-loop](https://gitee.com/ziggycs9796/study-project/raw/master/event/img/node-even-loop.png)

  根据上图，Node.js的运行机制如下。

（1）V8引擎解析JavaScript脚本。

（2）解析后的代码，调用Node API。

（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。

（4）V8引擎再将结果返回给用户。

### process.nextTick
process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。

### setImmediate
setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一轮Event Loop时执行，这与setTimeout(fn, 0)很像。

Node.js文档中称，setImmediate指定的回调函数，总是排在setTimeout前面。实际上，这种情况只发生在递归调用的时候。

````
setImmediate(function (){
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
  });

  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);
});
// 1
// TIMEOUT FIRED
// 2
// 也不一定 需要了解
````

setImmediate总是将事件注册到下一轮Event Loop

## 异步任务

  1. IO
  2. 网络事件 ajax
  3. 定时器事件 setTimeOut setInterval
  4. 浏览器事件 click keypress