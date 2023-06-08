function Animal(name) {
  this.name = name || "Animal";
  this.sleep = function () {
    console.log(this.name + " sleep");
  };
}

/*
1. 原型链继承
将父类的实例作为子类的原型

要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行
创建子实例时，无法向父类构造函数传参
来自原型对象的所有属性被所有实例共享
*/

function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = "cat";
const cat = new Cat();
cat.sleep();
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);
console.log("================================");

/*
2 构造继承

无原型链，不继承原型链上的属性、方法
创建子类可以向父类传参
实例不是父类实例，只是子类的实例
*/

function Dog(name) {
  Animal.call(this, name);
}
const dog = new Dog("dog");
console.log(dog.name);
dog.sleep();
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);
console.log("================================");

/*
3 实例继承
不限制调用方式 new 子类()  还是 子类()，返回的对象具有相同效果
实例是父类的实例，不是子类的实例
不支持多继承
*/

function Fish(name) {
  const instance = new Animal(name);
  return instance;
}
const fish = new Fish("fish");
console.log(fish.name);
fish.sleep();
console.log(fish instanceof Fish);
console.log(fish instanceof Animal);
console.log("================================");
