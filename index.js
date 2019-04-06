if (false) {
    var example = 5;
}

console.log(example); // undefined

/*
// is the same as:
var example; // hoisting

if (false) {
    example = 5;
}

*/

if (false) {
    let example2 = 5; // block scoped
}

// console.log(example2); // error

const example3  = 3; // read only
//example3 = 2;   // error
console.log(example3);

// if it is an array or object we still can adjust it like so
const example4 = {};
example4.firstName = 'Dylan';
console.log(example4); // {firstName: "Dylan"}