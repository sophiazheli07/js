const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");
const cityInput = document.querySelector("#city")

let users = [];

const deleteUser = (inexOfUsers) => {
    users = users.filter((el, i) => i !== inexOfUsers);
    renderUsers();
}

function renderUsers () {

    usersSection.innerHTML = "";

    const usersContent = users.map((user) => `<div class="user-card">
        <p>${"SENT TO PENTAGON: "}</p>
        <p>${user.name}</p>
        <span>${user.age}</span>
        <p>${user.city}</p>
        <button class="delete-user-button">Remove</button>
    </div>`);

    usersContent.forEach((userLayout) => {
        usersSection.innerHTML +=userLayout
    });

    const dleeteButton = [...document.querySelectorAll(".delete-user-button")];

    dleeteButton.forEach((el, i) =>{
        el.onclick = () => deleteUser(i);
    })
}


createButton.onclick = () => {
    const name = nameInput.value;
    const age = +ageInput.value;
    const city = cityInput.value;

    const user = {name: name, age: age, city: city};
    users.push(user);
    
    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";

    renderUsers();
}

// function declaration функція замість константи достпупна всюди до і після її написання renderUsers();

// const rateButtonOne = document.getElementById("#rate-one");
// rateButtonOne.onclick = () => {
//     alert("!")
// }