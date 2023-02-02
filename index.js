//map
//filter
//forEach
//------
//every
//some
//fill
//------
//reduce
//[[], [], []]

// FILL

// const arr = [];
// arr.length = 20;
// arr.fill(1)     
// // arr.fill(Math.floor(Math.random() * 10))

// console.log(arr);


//EVERY 

// const arr = new Array(10).fill({ name: "Igor", age: 23});
const arr = [
    {
        name: "Igor",
        age: 23,
        role: "admin",
        city: () => "Lviv"
    },
    {
        name: "Oleg",
        age: 23,
        role: "user",
        city: () => "Lviv"
    },
    {
        name: "Yula",
        age: 50,
        role: "user",
    },
];

const isAllElementsEqualToOne = arr.every((obj) => 
 ["admin", "user"].includes(obj.role)
);

// SOME

const isSomeElements = arr.some((obj) => obj.name === "Yula");
// const isSomeElements = arr.some((obj) => obj.city() === "Lviv");

console.log(isAllElementsEqualToOne, "every");
console.log(isSomeElements, "some");


// 1 

const arr1 = [1, 5, 10, 20];

const ifElementMoreThan = arr.every((el) => el > 30);
console.log(ifElementMoreThan);


// 2

// const arr2 = [5, 10, 15, 20];

// const elementIncreases = arr.every((el) => el + 5);

// console.log(elementIncreases);

// 3

const arr2 = [5, 10, 15, 20];

// console.log(
//     arr2.every((el, i, arr) => 
//  i === arr.length - 1
//  ? arr[arr.length - 1] - 5 === arr[arr.length - 2]
//  : arr[i + 1] - el === 5)
//  )

console.log(arr2.every((e, i) => ((i+1)*5 === e)));


// REDUCE

const arr3 = [1, 5, 7, 9];

const sum = arr3.reduce((acc, el, i, arr) => acc += el);
console.log(sum)

const arr4 = [{age: 10}, {age: 30}, {age: 80}];
const sum1 = arr4.reduce((acc, el, i, arr) => acc += el.age, 0)
console.log(sum1);

const words = ["React ", "Angular ", "Vue ", "Svelte "]
const allFrameWorks = words.reduce((acc,el) => acc += el, "")
console.log(allFrameWorks)
console.log(words.join(""), "with join")


const frameWorksWithoutSpace = words.reduce((acc, el) => {
    acc.push(el.trim())
    return acc;
}, [])
console.log(frameWorksWithoutSpace);


const firstLetters = words.reduce((acc, el, i, arr) => {
    acc.push(el.charAt(0))
    return acc;
},[])
console.log(firstLetters)

const passwords = [{password: "1245"}, {password: "sasasasa"}, {password: "yuduudu"}, {password: "33"}, {password: "334"}];
const passwordsLessThan = passwords.reduce((acc, el, i, arr) => {
    // acc.push(el.password.length < 6)
    // return acc;
    if(el.password.length < 6){
        acc.push(el)
    }
    return acc;
},[])

console.log(passwordsLessThan)



// const invalidPassword = passwords.reduce((acc, {password}) => {
//     passwords.length < 6 && acc.push(password);
//     return acc;
// })

// console.log(invalidPassword)


const arr6 = [1, 2, 60, 6, 3];
// const arrayReverse = arr6.reduce((acc, el, i, arr) => {
//     acc.unshift(el)
//     return acc;
// },[])
// console.log(arrayReverse)

// const arrayReverse2 = arr6.reduce((acc, el, i, arr) => })

// const arrayReverse = arr6.reduce((acc, el, i, arr) => {
//     acc.concat(el)
//     return acc;
// },[])
console.log(arrayReverse)

arr6.reduceRight((acc, el) => acc.unshift(el), []);
console.log(arr6)

