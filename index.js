// new Promise((res) => {
//   res("hello")
// })
// .then(() => {});

// async await

// const getTodods = async () => {
//   // const response = await new Promise((res) => {
//   //   res("Hello");
//   // });
//   // console.log(response)

//   const result = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await result.json();
//   console.log(data);
//   return data;
// };

// const getUsers = async () => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await result.json();
//   console.log(data);
//   return data;
// };

// // getTodods().then(() => {
// //   console.log("todos", data)
// // });

// // getUsers().then(() => {
// //   console.log("users", data)
// // });

// Promise.all([getTodods(), getUsers()]).then(() => {
//   console.log("DONE");
// });
// // функція яка позначається "async" стає "Promise" в нашому випадку main

// // async function main2 () {}
// // const main3 = async function () {}
// // const main4 = async () => {}

// // main2()

// const main5 = async () => {
//   const res = await new Promise((resp) => {
//     resp("!!");
//   });
//   console.log(res)
// }
// main5();


// HW перепишіть запит на нотацію async / await 
// Дано:
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log(json);
  return json
}

fetchTodo();