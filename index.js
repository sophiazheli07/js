// логічні оператори

// boolean: yes or no, true or false

// || && !

// const username = prompt("Enter name"); // null or  undefined or "" or false or 0 //falsy
// // const gender = !username && "Not recognized"; 
// const gender = 
//     (username === "Igor" || username === "Oleg") 
//     ? "Male" 
//     : (username === "Olena" || username === "Nastya") 
//     ? "Female"
//     : "Not recognized";

// alert(gender);

// const resultName = username || "" || null || undefined || "We are finally here";
// alert(resultName)

// == без приведення типів
// === приводячи типи 

// console.log(null === undefined);
// console.log(null == undefined);

// console.log(null == 0); // null - примитив но в джаве прототип обьекта null никогда нельза сравнивать с числом
// console.log(null === 0); //використовувати лише три аби код працював вірно
// console.log(null !== 0); //строге не
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(typeof null, typeof 0);

// const userName = prompt("Enter name");
// const gender = userName || "" || false || "Default";
// alert(gender);

// const number = +prompt("Enter number") || 0;


// let name1 = prompt("Enter name");
// let name2 = prompt("Enter name");

// alert(name1 || name2 || "not recognized");


// const name1 = +prompt("Enter number");
// const name2 = +prompt("Enter number");

// const res = n1 && n2 || "undef";
// alert(res);

