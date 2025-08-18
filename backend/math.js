const sum = (a,b) => a+b; //local variable holding function
const mul = (a,b) => a*b;
const g = 9.18;
const pi = 3.14;

// module.exports = 123;
// module.exports = "hello!";

// let object ={
//     sum : sum,
//     mul : mul,
//     g : g,
//     pi : pi
// };
// module.exports = object;

// module.exports ={
//     sum : sum,
//     mul : mul,
//     g : g,
//     pi : pi
// };

module.exports.sum = (a,b) => a+b;