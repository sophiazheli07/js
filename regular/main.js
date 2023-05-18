const r1 = /hello/;

const regexp = new RegExp(r1); // what

// "hello".includes("hell") // це входження, тому відпрацьовує на true

const res1 = regexp.test("hello"); // where
const res2 = regexp.exec("hello2"); // where

console.log(res1);
console.log(res2);

// const r2 = /xxxx/i;
// r2.ignoreCase = false;
// const res3 = r2.test("xxxxxxxxxxxxxxxxxxxxx");

// console.log(res3)

const r2 = /xxxx/;
const res3 = r2.test("xxxxx");
const res4 = r2.exec("xxxxxxxxxxxxxxxxxxxxx");

console.log(res3);
console.log(res4);

// end operator $

const r5 = /end$/;
const r52 = /ABC$/;
const res5 = r5.test("hello this is end");
const res52 = r52.test("abc ABC");
console.log(res5, "end operator $");
console.log(res52, "end operator $");

// Parametrical character

const r6 = /colou?r/; //color
const res6 = r6.test("color");
const res7 = r6.test("colour");

console.log(res6, "Parametrical character");
console.log(res7, "Parametrical character");

// start operator ^

const r8 = /^start/;

const res8 = r8.test("start end");
console.log(res8, "start operator ^");


// not stable

// * cases matches quantity

const r9 = /a*/g; // zero or more
const r91 = /a+/; // one or more

const res9 = r9.exec("aaa.aa,aaaAAA");
const res92 = r91.exec("helloaaaaa");

console.log(res9, "* cases matches quantity");
console.log(res92, "* one or more");


// Quantificators

const r10 = /a{2}/g; // декілька символів підряд
const r102 = /(a{1,3})/g; // декілька символів підряд

const res10 = r102.test("Mama")
const res102 = r102.exec("Maaamaa")

console.log(res10)
console.log(res102, "!!!!!!!!!!!!!!!!!!")


// Selection tools

const r11 = /[^0-9]/g;

const res11 = r11.test("");

console.log(res11)
const str = "aaaaaaaaaaaaaaaa"
const matches = str.match(/a/g)
console.log(matches)