// old

// function add(nums) {
    
//     console.log(arguments); // Arguments(5) [4, 5, 7, 8, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ] ....
// }

// add(4, 5, 7, 8, 12)

// new

function add(...nums) {
    console.log(nums); // [4, 5, 7, 8, 12]
    console.log(Array.isArray(nums)); // true
}

add(4, 5, 7, 8, 12)