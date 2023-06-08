name = '李四';
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