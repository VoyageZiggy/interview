function Person(name) {
  this.name = name;
}

Person.prototype.age = 29;

const person = new Person("ziggy");

for (const key in person) {
  console.log(key);
}

for (const key in person) {
  person.hasOwnProperty(key) && console.log(key);
}
