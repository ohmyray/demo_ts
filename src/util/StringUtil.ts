// 借用原型上的 toString 方法
const toString = Object.prototype.toString;

// 判断是否是时间
export function isData (val: any): val is Date {
  return toString.call(val) === '[object Date]';
}

// 判断是否是对象
export function isObject (val: any): val is Object {
  return val !== null && typeof val === 'object';
}