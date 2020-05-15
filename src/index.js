console.log("debug")
let myExports={};
Object.defineProperty(myExports, Symbol.toStringTag, { value: '1111' });
console.log(Object.prototype.toString.call(myExports));
