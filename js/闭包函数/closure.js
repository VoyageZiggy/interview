// var a  = 1;
/*
? 闭包的概念：闭包就是能够获取其他函数内部变量的函数。在 Javascript 语言中，
? 只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成 "定义在一个函数内部的函数"。
? 使用方法:
*   1、一个是可以读取函数内部的变量。
*   2、另一个就是让这些变量的值始终保持在内存中。

? 使用闭包的注意点

*   1、由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，
否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，
将不使用的局部变量全部删除。

*   2、闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，
把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），
这时一定要小心，不要随便改变父函数内部变量的值。
 */
console.log("``````````f1`````````");
function f1() {
  let a = "hello";
  function f2() {
    return a;
  }
  return f2;
}

var test1 = f1();
console.log("TCL: test1()", test1());

console.log("\n``````````f3`````````");

function f3() {
  var n = 999;
  local = 10;
  // local nAdd 前面没有使用 let var。nAdd是全局变量，在全局都能使用
  nAdd = function() {
    n += 1;
  };
  function f4() {
    console.log(n);
  }
  return f4;
}

var test2 = f3();
// f4赋给 全局变量test2 这导致 f4 始终在内存中，而 f4 的存在依赖于 f3，因此 f3 也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。

console.log("TCL: local", local);

test2(); // 999

nAdd();
// nAdd 的值是一个匿名函数,这个匿名函数本身就是一个闭包，所以nAdd 相当于一个setter

test2(); // 1000
var name = "The Window";
// name = "global"

var object = {
  name: "My Object",

  getNameFunc1: function() {
    return function ()  {
      return name;
    };
  },
  getNameFunc2: function() {
    return () => {
      return this.name;
    };
  },
  getNameFunc3: function() {
    console.log("f1", this)
    return function ()  {
    console.log("f2", this)
    return this.name;
    };
  },
};


let test3 = object.getNameFunc1()
let test4 = object.getNameFunc2()
let test5 = object.getNameFunc3()


console.log("getNameFunc1", test3());
console.log("getNameFunc2", test4());
console.log("getNameFunc3", test5());

/*
代码在node 环境下中 name 和 var name 执行结果是不一样的，在浏览器环境下是一样的。 node是严格模式
*/
