//boolean true / false


// if(a < b) {
//     console.log("LOWER")
// } else if(a > b) {
//     console.log("GREATER")
// } else {
//     console.log("EQUAL")
// }


// const a = "Igor2";
// const b = "Alex"; 
// const c = "Helen";

// // || - or

// if(a === "Igor" || b === "Alex" || c === "Helen") {
//     console.log("TRUE");
// }

// // && - and

// if(a === "Igor2" && b === "Alex") {
//     console.log("TRUE2");
// }


// // ! - not інверсія
// // !== - не дорівнює

// console.log(!true)
// console.log(!false)

// if (a !== b) {
//     console.log("TRUE3")
// }

// console.log(!!false)

// if (!!false) {
//     console.log("TRUE3")
// }

// // тернарний оператор 

// console.log(1 > 2 ? "GREATER" : "LOWER")
// const equality = a === "Igor11" || b === "Alex11" || c === "Helen11" ? console.log("") : console.log("");
// console.log(equality);

//1

// const a = 10;
// const b = 15;

// if(a > b) {
//     console.log("GREATER")
// } else if(a < b) {
//     console.log("LOWER")
// } else console.log("EQUAL")

//2

// const value = +prompt("Enter number");
// console.log(value, "value")

// const value1 = +prompt("Enter first number under 100");
// const value2 = +prompt("Enter secon number under 100");
// if(value1 > value2){
//     alert(value1)
// } else alert(value2)


//3

// const name1 = prompt("Enter")
// const name2 = prompt("Enter")
// if (name1.includes("script") || name2.includes("script")){
//     alert("script")
// } else ("no")

//4

// const name1 = prompt("Enter")
// const name2 = prompt("Enter")
// if(name1.length < 10 && name2.length < 10){
//     alert(name1 + " " + name2);
// } else("undef")

//5

// switch (name1) {
//     case "Oleg": 
//         console.log("name is Oleg");
//         break
//     case "Igor": 
//         console.log("name is Igor");
//         console.log("Hello")
//         break
//     default : 
//         console.log("Unknown name")
// }

// const fn = () => "Igor" 
// const name1 = "Igor"

// switch (name1) {
//     case "Some Name": 
//     case "Misha":
//     case "Igor": 
//         console.log("name is Igor");
//         console.log("Hello")
//         break
//     default : 
//         console.log("Unknown name")
// }

//6

// const name1 = prompt("Enter your name")
// switch (name1) {
//         case "Sophia": 
//             console.log("Hello Friend");
//             break
//         case "": 
//             console.log("Hello Stranger");
//             break
//         default : 
//             console.log("Unknown name");
// }

//7

// const num1 = promt("Enter text")
// console.log(num1.lenght < 20 ? "fine" : "too long")


// const word1 = prompt("Enter your word");
// const word2 = prompt("Enter your word");
// const word3 = prompt("Enter your word");
// if(word1 > word2 && word1 > word3){
//     alert(word1)
// } else if(word2 > word1 && word2 > word3){
//     alert(word2)
// } else alert(word3)

const numbers = prompt("enter 5 numbers")
const analyzer = (numbers) => {
    const numbersArray = numbers.split(" ").map((el) => +el);
    const statics = {
        "+": numbersArray.filter((el) => el >= 0),
        "-": numbersArray.filter((el) => el < 0),
        0: numbersArray.filter((el) => el === 0),
        "парні": numbersArray.filter((el) => el % 2 === 0),
        "непарні": numbersArray.filter((el) => el % 2 !== 0),
    };
    console.table(statics);
    return statics;
}
analyzer(numbers);