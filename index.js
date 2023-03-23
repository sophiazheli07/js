// Promise

// GET
// const postsSection = document.querySelector("#posts-section");

// function renderPosts(posts) {
//   postsSection.innerHTML = "";
//   posts.forEach(
//     ({ id, body, title }) =>
//       (postsSection.innerHTML += `<div>
//     <span>${id}</span>
//     <h3>${title}</h3>
//     <p>${body}</p>
//   </div>`)
//   );
// }

// console.log("1");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     // data.forEach((post) => console.log(post));
//     renderPosts(data);
//   })
//   .catch((err) => console.log("err", err))
//   .finally(() => {
//     console.log("we've done the request");
//   });

// console.log(2);

// const promise = new Promise((resolve, reject) => {
//     console.log("Hello, it's promise");
//     resolve({NAME: "Igor"})
//     // reject("Failure");

//     // return {NAME: "Igor"};

// })
// .then((obj) => console.log("Then", obj))
// .catch((msg) => console.log("Oops error", msg))

// setTimeout(() => {
//     console.log("Delayed Hello")
// }, 5000)

// let counter = 0;

// new Promise((res, rej) => {
//   const interval = setInterval(() => {
//     counter++;
//     console.log(counter);

//     if (counter > 5) {
//       clearInterval(interval);
//       res();
//     }
//   }, 1000);
// }).then((msg) => {
//   console.log("we are done", counter);
// });

// const circle = document.querySelector("#circle");
// circle.style.left = 0;

// const circleInterval = setInterval(() => {
//   circle.style.left = parseStringToNumber(circle.style.left) + 5 + "px";
//   circle.style.top = parseStringToNumber(circle.style.top) + 5 + "px";
// }, 100);

// function getNumericValue(str) {
//     return parseInt(str, 10);
//   }

// function getNumericValue(str) {
//   const num = parseInt(str);
//   return isNaN(num) ? null : num;
// }
const parseStringToNumber = (str) => {
    const arrayFromStr = str.split("");
    let res = "";

    for (let symbol of arrayFromStr) {
        if (!isNaN(+symbol)) {
            res += symbol
        }
    }
    return +res
}
// console.log(getNumericValue("10px"), "hello");
// console.log(parseStringToNumber("10px"))