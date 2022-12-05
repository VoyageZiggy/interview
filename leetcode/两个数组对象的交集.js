const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const arr2 = [{ id: 11 }, { id: 2 }, { id: 33 }, { id: 4 }];

const arr3 = arr1.filter((x) => {
  return arr2.some((y) => x.id === y.id);
});
console.log("🚀 ~ file: 两个数组对象的交集.js ~ line 7 ~ arr3 ~ arr3", arr3);

const arr4 = arr1.filter((x) => {
  return arr2.every((y) => y.id !== x.id);
});

const arr5 = arr2.filter((x) => {
  return arr1.every((y) => y.id !== x.id);
});

console.log("🚀 ~ file: 两个数组对象的不相交.js ~ line 12 ~ arr4 ~ arr4", [
  ...arr4,
  ...arr5,
]);
