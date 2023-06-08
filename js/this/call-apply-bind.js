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
p2.getName(18, '前端工程师'); // 输出李四18前端工程师