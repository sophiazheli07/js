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
const pagination = document.querySelector("#pagination");

let users = [
  { name: "Igor", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Sophia", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Alina", city: "Kyiv", age: 20 },
  { name: "Alex", city: "Kyiv", age: 50 },
  { name: "Oleg", city: "Kyiv", age: 10 },
  { name: "Yana", city: "Kyiv", age: 10 },
];

let changingUser = undefined;
let paginationPageNumber = 0;

renderUsers(users);
renderPagination(users.length);

const deleteUser = (inexOfUsers) => {
  users = users.filter((el, i) => i !== inexOfUsers);
  renderUsers();
};

const editUser = (indexOfUser) => {
  changingUser = { data: users[indexOfUser], index: indexOfUser };
  createButton.textContent = "Save changes";

  nameInput.value = changingUser.data.name;
  ageInput.value = changingUser.data.age;
  cityInput.value = changingUser.data.city;
};

function renderPagination(usersQuantity) {
  const buttonQuantity = !usersQuantity % 3 ? usersQuantity / 3 : (usersQuantity / 3) + 1;

  for (let i = 0; i < usersQuantity / 3; i++) {
    const button = document.createElement("button");
    button.textContent = i + 1;
    button.onclick = () => {
      paginationPageNumber = i;
      const groupedUsers = groupElementsOfArray(users, 3);
      renderUsers();
    };
    pagination.appendChild(button);
  }
  // render first 3 users permanently
  renderUsers(groupElementsOfArray(users, 3)[0]);
}

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

// const groupElementsOfArray = (usersToRender) => {
//   let subarray = [];
//   for (let i = 0; i < usersToRender.length; i += 3) {
//     subarray.push(usersToRender.slice(i, i + 3));
//   }
//   return subarray.filter((arr) => arr.length > 0);
// }
// console.log(groupElementsOfArray(users,3))

function groupElementsOfArray(arr, oneSetQuantity = 3) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(i * oneSetQuantity, (i + 1) * oneSetQuantity));
  }

  return result.filter((arr) => arr.length > 0);
}

function renderUsers(
  usersToRender = groupElementsOfArray(users, 3)[paginationPageNumber]
) {
  usersSection.innerHTML = "";

  // HW Написати функцію (логіку, що розбиває масив з користувачами на підмасиви по 3 користувачі у кожному)
  // FIRST WAY

  // FIRST WAY
  // let temporary = [];
  // for (let i = 0; i < Math.ceil(usersToRender.length/3); i++){ // Using Math.ceil() I am returning rounded up numbers
  //   temporary[i] = usersToRender.slice((i*3), (i*3) + 3);
  // }
  // console.log(temporary)

  // SECOND WAY
  // let subarray = [];
  // for (let i = 0; i < usersToRender.length; i += 3) {
  //   subarray.push(usersToRender.slice(i, i + 3));
  // }
  // console.log(subarray)

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

  if (!name || !age || !city) {
    return alert("Please fill all required data");
  }

  renderUsers();
};

searchInput.oninput = (event) => {
  if (!event.target.value) return renderUsers();
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
    sortByName.checked = false;
  } else {
    renderUsers(users);
  }
};

// const onClickEvent = document.body.addEventListener("click", () => {
//   alert("Hello")
// });

// document.body.removeEventListener("click", onClickEvent);
// document.body.addEventListener("click", () => {
//   alert("No")
// })

//  IMPORTANT           IMPORTANT           IMPORTANT

// document.body.onclick = () => {
//   alert("Hello");
// }
// document.body.onclick = null

// document.body.ondblclick = () => {
//   alert("hello btch");
// }

// document.body.onresize = () => {
//   alert(`resize ${window.innerWidth} ${window.innerHeight}` );

// }

// document.body.onscroll = () => {
//   alert(`scroll ${window.scrollX} ${window.scrollY}`);
// }

// const scrollUpBtn = document.querySelector("#scroll-up");
// const newButton = document.createElement("button")
// // scrollUpBtn.remove();
// newButton.onmouseenter = () => {
//   console.log("HOVERED")
// }
// newButton.onmouseleave = () => {
//   console.log("UNHOVERED")
// }
// scrollUpBtn.replaceWith(newButton)

// scrollUpBtn.onclick = () => {
//   window.scrollTo({top: 0, behavior: "smooth"});
// }

// let interval;

// scrollUpBtn.onmousedown = () => {
//   console.log("hello down");
//   // interval = setInterval(() => {
//   //   window.scrollTo({ top: window.scrollY + 10 });
//   // }, 1500);

// };
// scrollUpBtn.onmouseup = () => {
//   console.log("hello up");
//   // clearInterval(interval);
// };

// document.body.onpaste = () => {
//   alert("paste");
// }
// document.body.oncopy = (e) => {
//   alert("copy");
//   e.preventDefault();
// }

// document.body.onmousemove = (e) => {
//   console.log(e.pageX, e.pageY, e.target);
// }

// document.body.oncontextmenu = (e) => {
//   console.log("gggg");
//   e.preventDefault()
// }

// document.body.onkeypress = (e) => {
//   console.log("key pressed", e.key);
// }
// document.body.onkeydown = (e) => {
//   console.log("key pressed", e.key);
// }
// document.body.onkeyup = (e) => {
//   console.log("key pressed", e.key);
// }

// window.onerror = () => {
//   alert("!!!!")
// }
