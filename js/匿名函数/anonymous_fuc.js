//普通函数 
function box() {               //函数名是 box 
  return'Lee'; 
}
/*
匿名函数,指的是没有函数名的函数

function(){              
  return'Lee'
}

使用方法：
? 1、声明一个匿名函数，直接赋值给某一个事件。
? 2、使用匿名函数表达式，将匿名函数，赋值给一个变量。
注意：使用匿名函数表达式时，函数的调用语句，必须放在函数声明语句之后！！！（与普通函数的区别）变量提升，但未赋值就使用
 */

//1、在网页中测试
// window.onload = function () {
//   alert(123);
// };
console.log('TCL: func()', func);


//2、声明
var func = function() {
  console.log('fun anonymous_func');
};
//2、调用
func();

// 两个TCL log 打印信息区别undefined/is not defined
console.log("TCL: a", a);
