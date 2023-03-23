// Promise.all()

// const promiseArr = [];
// function fillPromises(n) {
//   for (let i = 0; i < n; i++) {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject();
//       }, Math.floor(Math.random() * 3000))
//     });
//     promiseArr.push(promise);
//   }
// }

// fillPromises(3);
// console.log(promiseArr, "hellooo");

// Promise.all(promiseArr)
//   .then(() => console.log("we are done!!"))
//   .catch(() => console.log("error"));

// Promise.race();

// const promiseArr = [];
// function fillPromises(n) {
// const promise = new Promise((resolve, reject) => {
//     for (let i = 0; i < n; i++) {
//         const timeOfExecution = Math.floor(Math.random() * 3000);
//         console.log(timeOfExecution);
//         setTimeout(() => {
//             reject();
//         }, timeOfExecution)
//     });

// }


function fillPromises (n) {
    const promises = [];

    for(let i = 0; i < n; i++) {
        const promise = new Promise((resolve, reject) => {
            const timeOfExecution = i*1000;
            console.log(timeOfExecution);
            setTimeout(() => {
                resolve(timeOfExecution);
            }, timeOfExecution)
        });

        promises.push(promise);
    }

    return promises;
}

Promise.race(fillPromises(4))
.then((timeOfExecution) => console.log(`Time:`, timeOfExecution))

//LocalStorage
//Session Storage

//JSON => string

// localStorage.setItem("msg", "hello");
// localStorage.setItem("num", 1);
// localStorage.setItem("boolean", true);
// localStorage.setItem("array", [1,2,3,4,5,6]);
// localStorage.setItem("bigData", JSON.stringify({name: "Igor", array: [1,2,3,4]}));

// const user = {name: "Oleg"}

// // console.log(JSON.stringify(user));

// localStorage.setItem("user", JSON.stringify(user));

// const msg = localStorage.getItem("msg");
// const boolean = localStorage.getItem("boolean");

// const userData = JSON.parse(localStorage.getItem("user"));
// const array = JSON.parse(localStorage.getItem("array"));
// const bigData = JSON.parse(localStorage.getItem("bigData"))
// console.log(msg, boolean, userData, array, bigData)

const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

if (users.length === 0){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(users => {
      console.log(users, "users");
      localStorage.setItem("users", JSON.stringify(users))
    });
} else {
    console.log(users, "users")
}

sessionStorage.setItem("name", "Igor")

const emailField = document.querySelector("#text");
const passwordField = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");

emailField.oninput = (e) => {
    console.log("email", e.target.value)
}
passwordField.oninput = (e) => {
    console.log("password", e.target.value)
}
submitBtn.onclick = (user) => {
    const email = emailField.value;
    const password = passwordField.value;
    user = {email, password};
    userEmail.textContent = email;
    userPassword.textContent = password;


    emailField.value = "";
    passwordField.value = "";

    localStorage.setItem("user", JSON.stringify(user))
}

window.onclose = () => {

}




// localStorage.setItem("users", JSON.stringify(users));
// console.log(users)