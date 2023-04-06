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
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
  return json;
}

fetchTodo();

const createPost = (post) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};

// createPost({ title: "title", body: "text", userId: 0 }).then((data) =>
//   console.log("hello", data)
// );

// Requests -> response

// 1. GET          server --> client
// 2. POST         client --> server - створення нових сутностей
// 3. PATCH/PUT    client --> server - оновлення існуючих стуностей
// 4. DELETE       client --> server - видаленя сутності

//                        APP
//                    /        \
//                   /          \
//                  /            \
//                    [data flow]
//   Frontend(visual) <--------> Backend(logic, data manipulation)
//                       fetch           DataBase(DB)

//      ∧,,,∧
//    (  ̳• · • ̳)
//    /    づ♡

const createPosts = async (post) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const updatePost = (post) => {
  return fetch("https://jsonplaceholder.typicode.com/posts/7", {
    method: "PATCH",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA after PATCH", data);
      return data;
    });
};

const deletePost = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",
  })
    .then((response) => response.status)
    .then((data) => {
      console.log("DELETE DATA");
      return data
    });
};

createPosts({ title: "title", body: "text", userId: 0 }).then((data) =>
  console.log("hello", data)
);

updatePost({ title: "title", body: "text", userId: 0 });
