//只要构造函数不返回对象，就不会影响新建的实例。

(()  => {
  function Fn() {
    this.name = 'fn';
    return {};
  }
  var f = new Fn();
  console.log(f.name); // 输出undefined
})();

(()  => {
  function Fn() {
    this.name = 'fn';
    return function () {};
  }
  var f = new Fn();
  console.log(f.name); // 输出undefined
})();

(()  => {
  function Fn() {
    this.name = 'fn';
    return undefined;
  }
  var f = new Fn();
  console.log(f.name); // 输出fn
})();

(()  => {
  function Fn() {
    this.name = 'fn';
    return 1;
  }
  var f = new Fn();
  console.log(f.name); // 输出fn
})()



