const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");
const cityInput = document.querySelector("#city");
const searchInput = document.querySelector("#search");
// const searchButton = document.querySelector("#search-button")
const cancelButton = document.querySelector("#cancel-button");
const sortByName = document.querySelector("#sort-by-name");
const sortByAge = document.querySelector("#sort-by-age");
let users = [
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
];

let changingUser = undefined;

renderUsers(users);

const deleteUser = (inexOfUsers) => {
  users = users.filter((el, i) => i !== inexOfUsers);
  renderUsers(users);
};

const editUser = (indexOfUser) => {
  changingUser = { data: users[indexOfUser], index: indexOfUser };
  createButton.textContent = "Save changes";

  nameInput.value = changingUser.data.name;
  ageInput.value = changingUser.data.age;
  cityInput.value = changingUser.data.city;
};

const sorting = {
  names: () => {
    const usersCopy = [...users];
    usersCopy.sort((user1, user2) => user1.name.localeCompare(user2.name));
    renderUsers(usersCopy);
  },
};
const sortingAge = {
  age: () => {
    const usersCopy = [...users];
    usersCopy.sort((a, b) => a.age - b.age);
    renderUsers(usersCopy);
  },
};


function renderUsers(usersToRender) {
  usersSection.innerHTML = "";

  const usersContent = usersToRender.map(
    (user) => `<div class="user-card">
        <p>${"SENT TO PENTAGON: "}</p>
        <p>${user.name}</p>
        <span>${user.age}</span>
        <p>${user.city}</p>
        <button class="delete-user-button">Remove</button>
        <button class="edit-user-button">Edit</button>
    </div>`
  );

  usersContent.forEach((userLayout) => {
    usersSection.innerHTML += userLayout;
  });

  const dleeteButton = [...document.querySelectorAll(".delete-user-button")];

  dleeteButton.forEach((el, i) => {
    el.onclick = () => deleteUser(i);
  });

  const editButtons = [...document.querySelectorAll(".edit-user-button")];

  editButtons.forEach((button, i) => {
    button.onclick = () => editUser(i);
  });
}

createButton.onclick = () => {
  const name = nameInput.value;
  const age = +ageInput.value;
  const city = cityInput.value;

  if (changingUser) {
    users[changingUser.index] = {
      name: name,
      age: age,
      city: city,
    };

    changingUser = undefined;
    createButton.textContent = "Create Button";
  } else {
    const user = { name: name, age: age, city: city };
    users.push(user);
  }

  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";

  renderUsers(users);
};



searchInput.oninput = (event) => {
  const usersToRender = users.filter(({ name, age, city }) =>
    [name, age.toString(), city].some((element) =>
      element.includes(event.target.value)
    )
  );
  renderUsers(usersToRender);
};

sortByName.onchange = (event) => {
  if (event.target.checked) {
    sorting.names();
    sortByAge.checked = false;
  } else {
    renderUsers(users);
  }
};
sortByAge.onchange = (event) => {
  if (event.target.checked) {
    sortingAge.age();
    sortByName.checked = false
  } else {
    renderUsers(users);
  }
};


