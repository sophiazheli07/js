const author = document.querySelector("#author");
const description = document.querySelector("#desription");

let box = "";
async function getServersData(index) {
    const resolve = await fetch("https://type.fit/api/quotes");
    const data = await resolve.json();
    return data[index];
}


    getServersData(0)
    .then((data) => {
        author.value = Object.values(data)[1];
        description.textContent = Object.values(data)[0];
        console.log(data)

    })

    // getServersData(3)
    // .then((data) => {
    //     box = Object.values(data)[0]
    //     console.log(box, "!!!!!")
    // })

    const value = Object.values(document.getElementById("author"))[0];

