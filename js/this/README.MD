# this
## 前排提示：this 只有在执行的时候才能确认，定义时无法被确认。

1. 作为对象属性执行

```
var name = '李四';
var person = {
  name: '张三',
  getName() {
    console.log(this.name); // 这个this是啥，不知道，我又没调用这个方法
  }
};

person.getName(); // 此时this为person, 作为对象属性执行，输出张三
```

2. 作为构造函数执行
```
function Foo(name) {
  this.name = name; // 此时的this === {}
};
var f = new Foo('张三');
```

3. 作为普通函数执行
```
var name = '李四';
var person = {
  name: '张三',
  getName() {
    console.log(this.name)
  }
};
var per = person.getName;
per();
// 此时输出李四而不是张三, this已经为window了，在全局作用域中定义了name变量，自然输出全局的name
// 而不是person对象的name
```

4. call，apply，bind 可以改
```
变 this 的指向
var p1 = {
  name: '张三',
  getName(age, job) {
    console.log(this.name, age, job);
  }
};
var p2 = {
  name: '李四'
};
p1.getName.call(p2, 18, '前端工程师'); // 输出李四18前端工程师
p1.getName.apply(p2, [18, '前端工程师']); // 输出李四18前端工程师
p2.getName = p1.getName.bind(p2);
p2.getName(18, '前端工程师'); // 输出李四
```