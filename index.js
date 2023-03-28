// localStorage
// sessionStorage
// cookie

// document.cookie = "name=Igor";
// document.cookie = "city=Kyiv";
// document.cookie = "age=23";

// console.log(document.cookie, "!!!");

// const getCookie = (name) => {
//   return (
//     document.cookie
//       .split(";")
//       .map((cookie) => cookie.replaceAll(" ", ""))
//       .find((cookie) => cookie.split("=")[0] === name)
//       .split("=")[1] || undefined
//   );
// };

// const setCookie = (name, value) => {
//   document.cookie = `${name}=${value}`;
//   return { name, value };
// };
// console.log(setCookie("test-name", "test-value"));

// console.log(getCookie("name"), "!!!!");
// getCookie("age");
// getCookie("city");
// document.cookie = "=null";

// TO DO LIST 