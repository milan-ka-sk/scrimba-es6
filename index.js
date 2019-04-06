// function add(numArray) {
//     //numArray = numArray || [];  // alr1
//     numArray = typeof numArray !== 'undefined' ? numArray : []; // alt 2
//     // https://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function

//     let total = 0;
//     numArray.forEach((element) => {
//         total += element;
//     });
    
//     console.log(total);
// }

// add();

function add(numArray = []) {
    let total = 0;
    numArray.forEach((element) => {
        total += element;
    });
    
    console.log(total);
}

add();