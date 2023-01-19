// for clear button

// by id

// const clearButton = document.getElementById("clear")

// clearButton.onclick = function () {
//     input.value = "";
// }


// OBJECTS

// const obj = {};
// const obj2 = new Object({});


// const user = {
//     name: "Igor",
//     age: "23",
//     obj: {
//         key: "value"
//     },
// };

// console.log(user.name);
// console.log(user["age"]);
// console.log(user.obj.key);

// console.log(Object.keys(user));
// // console.log(Object.keys(user).length);
// console.log(Object.values(user));

// user.newProp = "NEW";
// user.obj.secondKey = 2;
// console.log(user);

// for (let i = 0; i <= 3; i++) {
//     const keys = Object.keys(user);
//     const values = Object.values(user);

//     console.log(`${keys[i]}: ${values[i]}`);
// }

// console.log('before', user);
// delete user.age

// for (let key in user) {
//     console.log(key); 
//     console.log(user[key])
// }

// for (let key in user) {
//     delete user[key];
// }

// console.log('after', user)

// for (let key in user) {

// }

// const data = {
//     name: "Sophia",
//     lastname: "Zhelikhivska",
//     age: "15",
//     occupation: "high school student",
//     location: {
//         city: "Kyiv"
//     },
// };


// const name1 = "Sophia";
// const age = 15;
// const city = " Kyiv"

// const data2 = {
//     // name1, 
//     // age,
//     // city
// };

// data2.name1 = name1
// data2.age = age
// data2.city = city

// console.log(data2)




// alphObj.A = str[0];
// alphObj.B = str[1];
// alphObj.C = str[2];
// alphObj.D = str[3];
// alphObj.E = str[4];
// alphObj.F = str[5];
// alphObj.G = str[6];
// console.log(alphObj);

// for (let i = 0; i < str.length; i++){
//     alphObj[i] = str[i];

// };
// console.log(alphObj);

// const str = "ABCDEFG";
// const alphObj = {};

// for (let i = 0; i < str.length; i ++) {
//     alphObj[str[i]] = str[i];
// }
// console.log(alphObj);

// const data1 = {
//     name: "Igor",
//     age: 15,
//     city: "Kyiv"
// };

// const data2 = {...data1};

// for (let key in data1) {
//     data2[key] = data1[key];
// }


const  data = {
    name: "Igor"
};

const data2 = {
    data2[data.name]: Object.keys(data)[0];
};


console.log(data)
console.log(data2)