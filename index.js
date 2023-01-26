//arrays

// [] - вид обєкта 

// const arr = [];

// const obj = {};

// const arr2 = new Array([]);

// const arr = [1, 10, "hello", true, null, undefined, [], {}, function () {}];
// console.log(arr[0], arr[1], arr[2], arr.length);

// const names = ["Igor", "Oleg", "Alex"];
// const ages = [23, 20, 34];

// console.log(names, names.slice(0, 2));
// console.log(names.concat(["Vitaliy", "Vika"]));
// console.log(names.includes("Igor"));
// console.log(names.indexOf("Alex"));

// мутабельність та немутабельність масивів на совб.

// names[3] = "Olena";

// names[names.length] = "Nastya"

// delete names[0]

// console.log(names);

// console.log(names[0], ages[0]);

// const names = ["Igor", "Oleg", "Alex"];

// names[10] = "New Name"
// console.log(names)

const names = ["Igor", "Oleg", "Alex", "Olena", "Ivan"];

// console.log(names.slice(1, 3));



// shift
// pop
// push
// unshift

names[names.length] = "Yula";
names.push("Vika");

// const igor = names.shift();
const igor = names.shift();

names.unshift("Sasha");

const vika = names.pop()
console.log(vika)
console.log(igor, names)
console.log(names)

// 1

// const arr = ["Igor", "Oleg", "Alex"];
// arr.pop(arr.unshift("Alex"))

// console.log(arr)

// 2 

const arr2 = ["Kyiv", "Lviv", "Odesa"];

// console.log(arr2[arr2.indexOf("Lviv")]);

//3

const arr3 = ["Ford", "Mazda", "Lincoln", "Pontiac", "Lexus"];
// for (let el of arr3) {
//     if (el.includes("L")) {
//         console.log(el)
//     }
// }

// for (let el of arr3) {                     // of - in arrays ; in - in objects
//     console.log(el);
// }



//CallBack
//function declaration

// arr3.forEach(function (el, i, arr) {
//     console.log("Hello", el, i, arr);
// })

// arr3.forEach((cars, i, arr) => {
//     console.log("Hello", cars, i, arr);
// })

arr3.forEach((el) => {
    if(el.includes("L")) {
        console.log(el);
    }
})

//4 

const arr4 = [10, 30, 2, 5, 9];
let sum = 0;
arr4.forEach((el) => {
    sum += el
})
console.log(sum);

//5 
const arr5 = [
{name: "Igor", age: 40},
{name: "Oleg", age: 34},
{name: "Misha", age: 10},
];
const res = [];
arr5.forEach((el) => {
    if(el.age > 10) {
        res.push(el)
    }
})
console.log(res);
