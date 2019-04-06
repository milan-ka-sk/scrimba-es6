let example1 = [1,2,3,4,5,6];
let example2 = [...example1];

console.log(example2); //  [1, 2, 3, 4, 5, 6]

// pokusy
example2.push('x');
console.log(example2); // [1, 2, 3, 4, 5, 6, "x"]
console.log(example1); // [1, 2, 3, 4, 5, 6] .. i.e. example2 is a new array and not a reference to example1

let example3 = [10, 20, ...example1, 40];
console.log(example3); // [10, 20, 1, 2, 3, 4, 5, 6, 40]