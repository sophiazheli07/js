// NaN - not a number

// console.log(1 + undefined, "NaN")
console.log(isNaN(1 + undefined))


// const arr2 = [300, 100, 500, undefined, 800, undefined];
const res = [];

// for (let el of arr2) {
// if (undefined !== el)

// for (let el of arr1) {
//     if (!isNaN(el)){
//         res.push(el)
//     };
// }

console.log(res);

// infinity 
console.log(Infinity / Infinity);

// for(let i = 0; i < Infinity; i++) {
//     console.log("Log", i)
// }


// {repeat: Infinity}


const arr1 = [300, 100, 500, NaN, 800, NaN];
console.log(arr1.filter((el) => !isNaN(el)))

arr1.forEach((el, i, arr) =>{
    console.log(!isNaN(el))
});

console.log(
    arr1.filter((el, i, arr) => true),
    "!!!!"
)

const arr2 = ["A", "B", "c", "D", "Y", "o"];

arr2.forEach((el, i, arr) =>{
    arr2.filter((el) => el === el.toLowerCase() !== el)
    
});
console.log(arr2)

const arr = [1, 80, 1, 4, 5, 7, 5]

let res3 = arr.filter((el, i, arr) => {
    return arr.indexOf(el) === i;
});

console.log(res3)

//indexOf - завжди повертає перший інекс при зустрічі в масиві


let res2 = [];
arr.forEach((el) => {
    if (!res2.includes(el)) {
        res2.push(el);
    }
});

console.log(res2)

// // 
// const arr4 = [10, 60, 80, 40, 80, 70];
// let sum = 0;
// arr4.forEach((el, i) => {
//     if(i % 2 == 0) {
//         sum += el
//     }
// })
// console.log(sum)

// const str = "Hello World";
// console.log(str.split(" "))

// const arr5 = ["Hello", "World"]
// console.log(arr5.join(" "))

// // 5

// const arr6 = ["Hello", "world", "how", "are", "you"];
// console.log(arr6.join("."))


// const arr7 = ["1", "2", "4", "7"];
// const res7 = []

// console.log(arr7.map((el, i, arr) => +el ));

const users = [
 {name: "Igor", password: "password", location: "Kyiv"},
 {name: "Oleg", password: "password", location: "Kyiv"},
 {name: "Alex", password: "password", location: "Kyiv"},
 {name: "Maryna", password: "password", location: "Kyiv"}
];

// const cleanUsers = users.map((el) => {
//     delete el.password;
//     return users;
//  })

//  console.log(cleanUsers);

// const changedUsers =  users.map((el) => {
//     el.location = "Lviv";
//     return changedUsers
// })
// console.log(changedUsers)


//1.1

// const usersAge = users.map((el) => {
//     el.age = Math.floor(Math.random() * 100);
//     return el

// })
// let sum = 0;
// users.forEach((el, i) => {
//     sum += el.age
// })
// console.log(sum)

//1.2
const usersAge = users.map((el) => {
    el.age = Math.floor(Math.random() * 100);
    return el

})
const ages = [];
users.forEach((el, i) => {
    ages.push(el.age)
})
console.log(ages)

// usersAge.forEach(el,i){
//     sum += el.age
// }
// console.log(usersAge)

