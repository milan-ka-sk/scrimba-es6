const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// var 1

// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((r) => r.json())
//     .then((json) => {
//         console.log(json[0])
//     }).catch((error) =>{
//         console.log('failed');
//     });
// }

// var 2

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    
    console.log(json[0]);
}

getTop100Campers();