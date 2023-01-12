// console methods

console.log("!!!");
console.warn("Slow Connection");
console.error("Error")

const obj = {
    a: 10,
    b: 100,
    c: 1000
}
console.table(obj)

console.group("");
console.log("");
console.log(1);
console.log(2);
console.log(3);
console.groupEnd("");

console.info("Info")

console.time();
console.log(1);
console.log(2);
console.log(3);
console.timeEnd();