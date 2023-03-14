// Promise

// GET 
console.log("1")
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log("err", err))
.finally(() => {
    console.log("we've done the request");
});
console.log("2")