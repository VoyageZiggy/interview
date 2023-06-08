console.log("\r\n<=================原型链====================>");
function M(name) {
  this.name = name;
}
var o3 = new M("o3");
console.log("TCL: o3", o3);
console.log("TCL: M -> M", M);
let a = o3.__proto__ === M.prototype;
console.log("TCL: o3.__proto__", o3.__proto__);
console.log("TCL: M.prototype", M.prototype);
console.log("o3.__proto__ === M.prototype", a);
let b = M === o3.__proto__.constructor;
console.log("TCL: o3.__proto__.constructor", o3.__proto__.constructor);
console.log(" M === o3.__proto__.constructor ", b);
console.log("实例没有prototype: o3.prototype", o3.prototype);
console.log(
  "函数有__proto__: M.__proto__ === Function.prototype",
  M.__proto__ === Function.prototype
);
console.log(
  "原型链终点原型对象 Object.prototype， M.prototype.__proto__ === Object.prototype",
  M.prototype.__proto__ === Object.prototype
);
console.log(
  "原型链终点原型对象 Object.prototype.__proto__ === null",
  Object.prototype.__proto__ === null
);
console.log(
  "我认为 函数和对象就是先有鸡先有蛋的问题，先有Function 再有Ojbect  Function.prototype === Object.__proto__",
  Function.prototype === Object.__proto__
);




console.log(
  "Function instanceof Object  &&  Object instanceof Function",
  Function instanceof Object,
  Object instanceof Function
);
console.log(
  "Function的原型也是对象",
  Function.prototype instanceof Object,
);


console.log("\r\n<=================instanceof====================>");
console.log(
  "instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。"
);

console.log("o3 instanceof M", o3 instanceof M);
console.log("o3 instanceof Object", o3 instanceof Object);

console.log("\r\n<=================constructor====================>");
console.log(
  "判断实例的构造函数 o3.__proto__.constructor === M",
  o3.__proto__.constructor === M
);

console.log("\r\n<=================例题1====================>");
function A() {}
function B(a) {
  this.a = a;
}
function C(a) {
  if (a) {
    this.a = a;
  }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;
console.log(new A().a);
console.log(new B().a);
console.log(new C(2).a);
console.log("函数B  形参(a) 实际意义是 (a) { let a;}\r\n");

console.log("\r\n<=================例题2====================>");
var F = function() {};
Object.prototype.a = function() {
  console.log("Object.prototype.a");
  console.log("a()");
};
Function.prototype.b = function() {
  console.log("Function.prototype.b");
  console.log("b()");
};
console.log("new F()");
var f = new F();
console.log("TCL: f", f);
console.log("\r\n调用F.a()");
F.a(); //a()
console.log("\r\n调用F.b()");
F.b(); //b()
console.log("\r\n调用f.a()");
f.a(); //a()
console.log("\r\n不能调用f.b()\r\n");
// f.b; //UncaughtTypeError: f.b is not a function

console.log("F instanceof Object",F instanceof Object);
console.log("F instanceof Function",F instanceof Function);
console.log("f instanceof Object",f instanceof Object);
console.log("f instanceof Function",f instanceof Function);


console.log("\r\n<=====================================>");
console.log(
  "调用F.__proto__.b()"
)
F.__proto__.b();

console.log(
  "调用F.prototype.__proto__.a()"
)
F.prototype.__proto__.a();
console.log("F 是构造函数，构造函数也是函数，是通过new Function()生成的,Function.prototype是所有函数的终点")
