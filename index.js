// old
// function addressMaker(city, state) {
//     const newAdress = {city: city, state: state};
    
//     console.log(newAdress); // {city: "Austin", state: "Texas"}
// }

// addressMaker('Austin', 'Texas');

// new
function addressMaker(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress); // {city: "Austin", state: "Texas"}
}

addressMaker('Austin', 'Texas');