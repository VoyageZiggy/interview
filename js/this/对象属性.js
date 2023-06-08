name = '李四';
var person = {
  name: '张三',
  getName() {
    console.log(this.name); // 这个this是啥，不知道，我又没调用这个方法
  }
};

person.getName(); // 此时this为person, 作为对象属性执行，输出张三

