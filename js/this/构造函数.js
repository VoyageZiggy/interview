function Foo(name) {
  this.name = name; // 此时的this === {}  对象本身
};
var f = new Foo('张三');
