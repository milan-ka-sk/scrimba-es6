function add(...nums) {
    
    let total;
    
    // old
    // total = nums.reduce(function(x,y){
    //     return x + y;
    // })

    // es6
    // total = nums.reduce((x,y) => {
    //     return x + y;
    // })

    // if it is just a one line return we can shorten even it so:
    total = nums.reduce((x, y) => x + y);
    
    console.log(total);
}

add(4, 5, 7, 8, 12)