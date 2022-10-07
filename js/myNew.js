export default function _new(func, ...arg) {
  let obj = {};
  obj.__proto__ = func.prototype;
  const result = func.apply(obj, arg);
  return result instanceof func ? result : obj;
}
