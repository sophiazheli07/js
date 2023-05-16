// $("form").on("submit", (event) => {
//     event.preventDefault();
// })

// window.addEventListener("load", () => {
//   const checks = {
//     name: (name) => name.lenght >= 3,
//     secondName: (secondName) => secondName.length >= 3,
//     email: (email) =>
//       email.lenght >= 6 && email.includes(".") && email.includes("@"),
//     password: (password) =>
//       password.length >= 10 &&
//       password.split("").some((el) => Number.isInteger(+el)),
//   };
//   const errors = {
//     name: "no",
//     secondName: "Invalid!",
//     email: "Invalid!!",
//     password: "Invalid!!!",
//   };
//   $("button").click((event) => {
//     event.preventDefault();

//     [...$("input")].forEach((e, index) => {
//       console.log($(e).val());
//       !Object.values(checks)[index]($(e).val()) &&
//         alert(Object.values(errors)[index]);
//     });
//   });

//   [...$("input")].forEach((e) => $(e).val(""))
// });

window.addEventListener("load", () => {
  const checks = {
    name: (name) => name.length >= 3,
    secondName: (secondName) => secondName.length >= 3,
    email: (email) =>
      email.length >= 6 && email.includes(".") && email.includes("@"),
    password: (password) =>
      password.length >= 10 &&
      password.split("").some((e) => Number.isInteger(+e)),
  };

  const errors = {
    name: "Name is invalid",
    secondName: "Second Name is invalid",
    email: "Email is invalid",
    password: "Password is bad",
  };

  $("button").click((event) => {
    event.preventDefault();

    [...$("input")].forEach((e, index) => {
      console.log($(e).val());
      !Object.values(checks)[index]($(e).val()) &&
        alert(Object.values(errors)[index]);
    });

    [...$("input")].forEach((e) => $(e).val(""));
  });

  console.log(Object.values({ name: "Igor", age: 12, fn: () => "" }), "!!!!");
});
