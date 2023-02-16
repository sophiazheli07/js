// function fn(fn1, message) {
//     fn1(message)
// }
// fn((msg) => console.log(msg), "Hello world")


// function fn(fn1, str) {
//     fn1(str)
//     return fn1(str)
// }
// const res = fn((str1) => str1.toUpperCase(), "kyiv")
// console.log(res)

// Array.prototype.forEach2 = function (fn) {   
//     for(let i = 0; i < this.length; ++i) {
//         fn(this[i], i, this);
//     }
// }

// const arr = [1, 2, 3, 4, 5] 
// arr.forEach2((e, i, arr) => console.log(e, i, arr))
// arr.forEach((e, i, arr) => console.log(e, i, arr))

// Array.prototype.map2 = function (fn) {
//     const res = [];
//     for(let i = 0; i < this.length; i = i + 1) {
//         const newElement = fn(this[i], i, arr);
//         res.push(newElement)
//     }

//     return res;
// }

// console.log([1, 2, 3, 4].map2((e, i, arr) => e.toString()))

// Array.prototype.myReduce = function (fn) {
//     let a = 0;

//     for(let i=0; i < this.length; i++)      
//     {
//         fn(a, this[i], i, this)            
//     }
     
//     return a;                           
// }

const arr = [1, 2, 3, 4, 5];
Array.prototype.myReduce = function (fn, acc = 0) {
    for(let i = 0; i < this.length; i++)      
    {
        acc = fn(acc, this[i], i, this)            
    }
     
    return acc;                           
}
console.log(arr.myReduce((acc, e) => acc = acc + e))

// const res = arr.myReduce((acc, i) => acc + i)
// console.log(res)


// function reducer(acc, e, i) {
//     const a = acc + e;
//     for(let i=0; i < this.length; i++)      
//     {
//         fn(a, this[i], i, this)            
//     }

// }
  
// console.log(arr.reducer((acc, i) => acc+i, 0));


