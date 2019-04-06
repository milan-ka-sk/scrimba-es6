// does an arrau include an item?

let numArray = [1,2,3,4,5];

// old

console.log(numArray.indexOf(0)); // -1 
console.log(numArray.indexOf(2)); // 1

// es6

console.log(numArray.includes(0)); // false
console.log(numArray.includes(2)); // true