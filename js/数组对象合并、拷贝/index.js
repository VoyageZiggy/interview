const { log } = console;

log("\r\n<======================JSON=====================================>");
log("JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null。");
log(
  "JSON.stringify()将 对象、数组、数值、字符串、布尔值和 null，转换为一个 JSON 字符串"
);
log(
  "JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。"
);

log("TCL: JSON.stringify([1,2,3,4])");
log(JSON.stringify([1, 2, 3, 4]));

log(
  'TCL: JSON.stringify(1) && JSON.parse(JSON.stringify(1)) && JSON.parse("1")'
);
log(JSON.stringify(1));
log(JSON.parse(JSON.stringify(1)));
log(JSON.parse("1"));
log(
  `TCL: JSON.stringify("2") && JSON.parse(JSON.stringify("2")) && JSON.parse("\\"2\\"")`
);
log(JSON.stringify("2"));
log(JSON.parse(JSON.stringify("2")));
log(JSON.parse('"2"'));

log(
  "可以利用JSON.parse(JSON.stringify(arr)) && JSON.parse(JSON.stringify(obj)) 实现深拷贝"
);

log(
  `\r\n<======================数组拷贝=====================================>
  赋值  浅拷贝  深拷贝  拷贝都会新建对象
  `
);
let arr = [{ a: { b: 1 } }, ["1"], 1];
log("TCL: arr", arr);

// concat slice [...arr] 浅拷贝
log("concat slice [...arr]扩展运算符 浅拷贝  拷贝值");
let newArrA = arr.concat();
let newArrB = arr.slice();
let newArrC = [...arr];
let newArrD = shallowCopy(arr);

// 深拷贝 副本 1.JSON.parse(JSON.stringify()) 2.for deepCopy 3.Array.prototype.forEach （需补充）
log();
let newArrDeepA = JSON.parse(JSON.stringify(arr));
let newArrDeepB = deepCopy(arr);
arr[0].a.b = 2;
newArrA[1][0] = 2;
newArrA[2][0] = 2;
log("TCL:concat newArrA", newArrA);
log("TCL:slice newArrB", newArrB);
log("TCL:[...arr]扩展运算符 newArrC", newArrC);
log("TCL:shallowCopy newArrD", newArrD);
log("TCL:JSON.parse(JSON.stringify(arr)) newArrDeepA", newArrDeepA);
log("TCL:deepCopy newArrDeepB", newArrDeepB);

function shallowCopy(obj) {
  if (typeof obj !== "object") {
    log("shallowCopy out");
    return;
  } else {
    var newObj = obj instanceof Array ? [] : {};
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
}

function deepCopy(obj) {
  if (typeof obj !== "object") {
    log("shallowCopy out");
    return;
  } else {
    var newObj = obj instanceof Array ? [] : {};
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] =
          typeof obj[key] === "object" && obj[key] !== null
            ? deepCopy(obj[key])
            : obj[key];
      }
    }
    return newObj;
  }
}

log(
  "\r\n<======================数组合并=====================================>"
);

(function() {
  let arr1 = [1, 2, 3];
  log("TCL: arr1", arr1);
  let arr2 = ["a", "b", "c", "d", "e", "f"];
  log("TCL: arr2", arr2);
  log("方法一：concat arr1.concat(arr2)");
  log(arr1.concat(arr2, arr2));
  log("方法二：for 循环 push");
  let temp = [];
  for (let i in arr1) {
    temp.push(arr1[i]);
  }
  for (let i in arr2) {
    temp.push(arr2[i]);
  }
  log(temp);
  temp = [];
  log("TCL: temp", temp);
  log("方法三：map() push");
  arr1.map(item => {
    temp.push(item);
  });
  arr2.map(item => {
    temp.push(item);
  });
  log("TCL: temp", temp);
  temp = [];
  log("方法四：apply");
  log(`
  1.
  arr1.push.apply(arr1,arr2);   
  log(arr1)  // [1, 2, 3, "a", "b", "c", "d", "e", "f"] 
  2.
  Array.prototype.push.apply(arr1,arr2);
  log(arr1)  // [1, 2, 3, "a", "b", "c", "d", "e", "f"]`);

  log("方法五：ES6扩展运算符 [...arr1, ...arr2]");
  temp = [...arr1, ...arr2];
  log("TCL: temp", temp);
})();

log(
  "\r\n<======================数组构造函数Array 继承 Object=====================================>"
);
let testArr = [1];
log("TCL: testArr", testArr);
let testObj = { a: "1" };
log("TCL: testObj", testObj);

log("testArr instanceof Object", testArr instanceof Object);
log("testArr instanceof Array", testArr instanceof Array);
log("testObj instanceof Object", testObj instanceof Object);
log("testObj instanceof Array", testObj instanceof Array);
log("Array.prototype instanceof Object", Array.prototype instanceof Object);
log("Object.prototype instanceof Array", Object.prototype instanceof Array);
log(
  "testArr.__proto__.constructor === Array",
  testArr.__proto__.constructor === Array
);

log(
  "\r\n<======================操作数组方法=====================================>"
);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
log("TCL: fruits", fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
log("TCL: fruits", fruits);
log("TCL: fruits", fruits.slice(1));

log(
  "\r\n<======================数组排序=====================================>"
);
let myArr = [40, 100, 1, 5, 25, 10, 1, 10];
log("TCL: myArr", myArr);
myArr.sort();
myArr.sort(function(a, b) {
  return b > a;
});
log("TCL: myArr", Math.max.apply(null, myArr));
log("TCL: myArr", myArr);

var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
cars.sort((a, b) => a.year > b.year);
log("\r\nTCL: cars 以年排序", cars);

function mySetArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
  }
}
mySetArray(myArr);
log(myArr);

log(
  `\r\n<=====================拷贝注意=====================================>
当值为 undefined、function、symbol 会在转换过程中被忽略。`
);

function deep(obj) {
  if (typeof obj !== "object") {
    return;
  } else {
    var newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        newObj[key] =
          typeof obj[key] === "object" && obj[key] !== null
            ? deep(obj[key])
            : obj[key];
    }
    return newObj;
  }
}
var syb = Symbol("obj");
let testDeep = { a: { c: "1" }, b: undefined, d: null, e: syb };
log("TCL: testDeep", testDeep);
let hehe = deep(testDeep);
log("TCL: hehe", hehe);

log("TCL: testDeep", testDeep);
log("TCL: hehe", hehe);

function F() {}
let f = new F();

//对象的深拷贝 浅拷贝  对象的合并
log(`\r\n<=====================对象拷贝=====================================>
赋值不会新建对象，传值或引用
拷贝都会新建对象
浅拷贝 1. Object.assign({}, obj1)   2. {...newObj} = obj 3.shallowCopy (for)
深拷贝 1. JSON.parse(JSON.stringify(obj2)) 2.deep
`);

(() => {
  let obj1 = { a: 1, b: 2 };
  let newObj1 = Object.assign({}, obj1);
  log("TCL: obj1", obj1);
  log("TCL: newObj1", newObj1);

  let obj2 = { a: { b: 1 } };
  log("init TCL: obj2", obj2);
  let { ...newObj2 } = obj2;
  let newObj22 = Object.assign({}, obj2);
  let newObj22Deep = deep(obj2);
  let newObj22Json = JSON.parse(JSON.stringify(obj2));
  obj2.a.b = 2;
  log("TCL: obj2", obj2);
  log("TCL: newObj2", newObj2);

  log("TCL: newObj22", newObj22);
  log("TCL: newObj22Deep", newObj22Deep);
  log("TCL: newObj22Json", newObj22Json);
})();

log(`\r\n<=====================对象合并=====================================>`);
(() => {
  let obj1 = { a: 1, b: 1, c: 1 };
  let obj2 = { d: 1, e: 1, f: [1] };
  let newObj1 = Object.assign({}, obj1, obj2);
  let newObj2 = { ...obj1, ...obj2 };
  log("TCL: newObj1", newObj1);
  log("TCL: newObj2", newObj2);
})();

log(
  `\r\n<=====================ES6数组/对象解构、扩展运算符=====================================>
  解构---按照一定模式，从数组和对象中提取值，对变量进行赋值 let[a,[b,c]] = [1,[2,3]] let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
  ...扩展运算符---将一个数组/对象转为用逗号分隔的参数序列`
);

(() => {
  // 数组解构
  let [foo, [[bar], baz]] = [1, [[2], 3]];
  foo; // 1
  bar; // 2
  baz; // 3
})();
(() => {
  // 对象解构
  let { foo, bar } = { foo: "aaa", bar: "bbb" };
  foo; // "aaa"
  bar; // "bbb"
})();
(() => {
  let arr1 = [2, 3, 4];
  let arr2 = [...arr1]; //数组拷贝
  log(...arr1);
  log(...[2, 3, 4]);
  log(arr2);
  //函数参数
  function addThree(x, y, z) {
    log("addThree", x + y + z);
  }
  addThree(...[1, 2, 3]);
  addThree(...arr2);
})();

(() => {
  // 合并数组
  log("合并数组");
  let arr1 = [5, 6];
  let arr2 = [11, 22];
  let arr3 = [...arr1, ...arr2];
  log("TCL: arr1", arr1);
  log("TCL: arr2", arr2);
  log("TCL: arr3", arr3);
})();

(() => {
  // 合并对象
  log("合并对象");
  let z = { x: 1, y: 2, a: 3, b: 4 };
  let f = { c: 5, d: 6 };
  let g = { ...z, ...f };
  delete g.x;
  log("TCL: f", f);
  log("TCL: z", z);
  log("TCL: g", g);
})();

(() => {
  // 数组解构赋值与扩展操作符合并
  log("扩展操作符后面一定跟的是---数组或对象或字符串");
  let [a, ...arr1] = [1, 2, 3, 4, 5];
  log(a);
  log(arr1);
  let [...arr2] = "heheh";
  log("TCL: arr2", [..."hello"]);
  const foo = "bar";
  const baz = { foo };

  log("TCL: baz", baz);
})();

function test(obj) {
  if (typeof obj !== "object") {
    return;
  } else {
    var newObj = obj instanceof Array ? [] : {};
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] =
          typeof obj[key] === "object" && obj[key] !== null
            ? test(obj[key])
            : obj[key];
      }
    }
    return newObj;
  }
}

let test1 = { a: 1, b: null, c: { a: 1 } };
let test2 = test(test1);
console.log("TCL: test2", test2);
(() => {
  let arr = [0, 1, 2, 3, 4];
  let x = [...arr];
  let [...y] = arr;
  arr.pop();

  x.shift();
  console.log("TCL: arr", arr);
  console.log("TCL: x", x);
  console.log("TCL: y", y);
})();

(() => {
  let obj = { a: 1, b: 1 };
  let { a } = obj;
  let { ...b } = obj;
  log(a);
  log(b);
  function unique(arr) {
    var obj = {};
    return arr.filter(function(item) {
      return obj.hasOwnProperty(typeof item + item)
        ? false
        : (obj[typeof item + item] = true);
    });
  }
  var arr = [
    1,
    1,
    "true",
    "true",
    true,
    true,
    15,
    15,
    false,
    false,
    undefined,
    undefined,
    null,
    null,
    NaN,
    NaN,
    "NaN",
    0,
    0,
    "a",
    "a",
    {},
    {}
  ];
  console.log("TCL: arr", arr);
  console.log(unique(arr));
  console.log("TCL: arr", arr);

  function uni (arr) {
    let obj = {};
    return arr.filter( (item)=> {
      return (obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true))
    })
  }
  console.log(uni(arr))

  function de (obj) {
    if (typeof obj !== "object") {
      return ;
    } else {
      var newObj = obj instanceof Array ? [] : {};
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = (typeof obj[key] === 'object') ? de(obj[key]) : obj[key];
        }
      }
      return newObj;
    }
  }
  let test1 = { a: 1, b: null, c: { a: 1 } };
  log(de(test1))
  console.log("TCL: test1", test1)
  function un1 (arr) {
    let obj = {};
    return arr.filter((item)=> {
      return (obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true))
    })
  }
  log(un1(arr));
})();
