// 7 - looking for 7

const arr = [
[1,2], 
[3,4], 
[5,6], 
[7,8]
];

arr.forEach((arrayElement) => {
    // console.log(arrayElement);
    arrayElement.forEach((number) => {
        console.log(number)
    });
});

arr.find((arrayElement) => arrayElement.includes(7));

console.log(Boolean(arr.find((arrayElement) => arrayElement.includes(7))));

console.log(arr.some((arrayElement) => arrayElement.includes(7)))

let sum = 0;
console.log(arr.forEach((arrayElement) => arrayElement.forEach((el) => {sum += el})))

console.log(sum)

// const sum2 = arr.reduce((acc, el) => {
//     el.forEach((num) => acc += num)
//     return acc;
// }, 0)

console.log(arr.flat())

// arr.forEach((el) => {
//     el.forEach((number) => {
//         sum += number
//     });
// });

const arr2 = [
    [
    [1, "A"],
    [2, "B"],
    [3, "C"]
    ], 
    [
    [4, "D"],
    [5, "E"],
    [6, "F"]
    ], 
    [
    [7, "C"],
    [8, "T"],
    [9, "A"]
    ], 
    [
    [10, "P"],
    [11, "L"],
    [12, "M"]
    ],
];


console.log(arr2.flat(2))
console.log(arr.flat().reduce((acc, num) => acc += num, 0))


// ... - spread 
const arr3 = [...arr.flat(), ...arr2.flat(2)];
console.log(arr3)

// reverse

// const arr4 = [1, 2, 3, 4, 5]

// console.log(arr4.reverse())

// const arrNames = ["Alex", "Igor", "Oleg"];
// const obj = { name: "Oleg", age: 20}

// const { name, age } = obj;
// console.log(name, age)

// const [ name1, name2, name3] = arrNames;
// console.log(name1, name2, name3)

const arrNum = [["1", "5", "7"], ["6", "9","3"]]
// const arrNum1 = [];

const arrNum1 = arrNum.map((arrayElement) => {
    return arrayElement.map((element) => +element)
}, 0)
console.log(arrNum1)

// arrNum.forEach((el) => {
//     el.forEach((num) => {
//         num.forEach(parseInt) = arrNum1.num
//     });
// });

// console.log(arrNum1)

// const arr9 = {};
// console.log(Object.keys(obj).length)


console.log(Array.isArray([]))

const arr8 = [1, 6, 9, "Text", [1,9], [], {}, () => {}]

// console.log(arr8.some(el => Array.isArray(el)))

console.log(arr8.some(el => Array.isArray(el) && el.length != 0))



// sort

const arrNumber = [2,5,9,10,0,6,1, 10000000]

const arrAlph = ["b","a","c"]
console.log(arrNumber.sort((el, el2) => el - el2))
console.log(arrAlph.sort())

const arrNumbers = [1, 4, 6, 8, 2, 9];
console.log(arrNumbers.sort((el, el2) => el2 - el))

