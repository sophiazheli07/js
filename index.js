const arr = [1, 5, 17, 4, 8, 6, 7, 0];
const arr2 = ["banana", "animal", "flower"]
const arr3 = [
    { name: "Igor", age: 73},
    { name: "Yarik", age: 93},
    { name: "OLeg", age: 43},
    { name: "Olena", age: 23},
]

console.log(arr.sort((e1, e2) => e1 - e2))
console.log(arr.sort((e1, e2) => e2 - e1))
console.log(arr2.sort((e1, e2) => e1.localeCompare(e2)))
console.log("animal".localeCompare("banana")) //1, -1

console.log(arr3.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name)))


// function


function fn1 () {}  // function declaration
const fn2 = function () {} // function expression


// const sum = function (a, b, c, d) {
//     console.log(arguments)
//     alert(`Hello World ${a+b+c+d}`)
    
// };
// const num1 = 100;
// const num2 = 1000;
// const num3 = 1000;
// const num4 = 1000;
// sum(num1, num2, num3, num4);

// const task1 = function (a, b) {
//     console.log(a*b)
//     console.log((a+b)*2)
// };
// const width = 5;
// const height = 6;
// task1(width, height);


const sum = function(a,b) {
    return [a+b, a*b]
}
const num1 = 100;
const num2 = 1000;

const sumRes = sum(num1,num2)
console.log(sumRes)


// const createPerson = function(name, surname, age) {
//     return{
//         name, 
//         surname, 
//         age,
//     sayHello: function () {
//         console.log(`Hello my name is ${name}, I am ${age}`)
//     },
//     birthday: function () {
//         console.log(`Now age is ${++age}`)
//     }
//   }  
// }

// const name = "Igor";
// const surname = "Sergienko";
// const age = 23;

// const person1 = createPerson("Igor", "Sergienko", 23)
// person1.sayHello()
// person1.birthday()
// const CreatedPerson = createPerson(name, surname, age)
// console.log(CreatedPerson)


const createCar = function(name, price, color) {
    return{
        name,
        NewPrice: function (price) {
                return{name, color, price}
            }, 
        color
    }  
}
car1 = createCar("Dodge", 50000,"black");



console.log(car1.NewPrice(15000))