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

const input = document.querySelector("#todo-creation");
const button = document.querySelector("#create-todo-button");
const output = document.querySelector("#output");
const usersOutput = document.querySelector("#users-output");
const clearCurrentUser = document.querySelector("#clear-current-user");
const searxhTodoInput = document.querySelector("#todo-search");
const clearTodoSearch = document.querySelector("#clear-todo-search");
const scrollUpBtn = document.querySelector("#scroll-to-btn");

// const localSt = localStorage.getItem("todos");
// let todos = localSt ? JSON.parse(localSt) : [
let todos = [
  {
    text: "buy Dodge Challeger",
    done: false,
  },
];

let users = [];
let currentUser = undefined;
renderTodos(todos);

// function generateUniqueKey() {
//   const existingKeys = Object.keys(localStorage);
//   let key = `todos-${existingKeys.length + 1}`;
//   while (existingKeys.includes(key)) {
//     key = `todos-${existingKeys.length + 1}`;
//   }
//   return key;
// }
// const key =  generateUniqueKey();
// console.log(key)

button.onclick = () => {
  const todo = {
    text: input.value,
    done: false,
  };

  input.value = "";

  todos.push(todo);

  renderTodos(todos);
};

function renderTodos(todosToRender) {
  output.innerHTML = "";

  // HW -----------
  localStorage.setItem("todos", JSON.stringify(todos));
  todosToRender.forEach((todo, i) => {
    output.innerHTML += `
            <li class="todo ${todo.done && "done"}">
                <div>
                    <span>${i + 1}.</span>
                    <input id="${todo.id}" type="checkbox" ${
                      todo.done && "checked"
                    } class="todo-checkbox" />
                    <span>${todo.text}</span>
                </div>
                <button id="${todo.id}" class="delete-todo">Delete</button>
            </li>
        `;
  });

  const checkboxes = [...document.querySelectorAll(".todo-checkbox")];

  checkboxes.forEach((checkbox, i) => {
    checkbox.onchange = () => {
      const todo =  todos.find((todo) => todo.id === +checkbox.id);
      changeTodo(todo.id, !todo.done);
    };
  });

  const deleteButtons = [...document.querySelectorAll(".delete-todo")];

  deleteButtons.forEach((button, i) => {
    button.onclick = () => {
      const todo =  todos.find((todo) => todo.id === +button.id);
      deleteTodo(todo.text);
    };
  });
}

function changeTodo(id, newDone) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: newDone };
    }
    return todo;
  });

  renderTodos(
    currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
  );
}

function deleteTodo(text) {
  todos = todos.filter((todo) => todo.text !== text);
  console.log(todos)
  renderTodos(
    currentUser ? todos.filter((todo) => todo.userId === currentUser.id) : todos
  );
}

function searchTodo(value) {
  const filteredTodos = currentUser
    ? todos.filter(
        (todo) => todo.text.includes(value) && todo.userId === currentUser.id
      )
    : todos.filter((todo) => todo.text.includes(value));
  renderTodos(filteredTodos);
}
// const keys = {
//   title: "text",
//   completed: "done",
// };

// function getServerTodos() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => {
//       json.map((item) => {
//         let newItem = {};
//         Object.keys(item).forEach((key) => {
//           newItem[keys[key]] = item[key];
//           console.log(newItem);
//         });
//         return newItem;
//       });
//       console.log(json);
//     });
// }
// console.log(getServerTodos());
function getServerTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todosFromServer) => {
      const transformedTodos = todosFromServer.map((todo) => {
        return {
          text: todo.title,
          done: todo.completed,
          userId: todo.userId,
          id: todo.id,
          ...todo,
        };
      });
      console.log(transformedTodos);

      todos = transformedTodos;
      renderTodos(todos);
    });
}

getServerTodos();

function getServerUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((usersFromServer) => {
      console.log(usersFromServer);

      users = usersFromServer;
      renderUsers();
    });
}

getServerUsers();

function renderUsers() {
  usersOutput.innerHTML = "";

  users.forEach((user) => {
    usersOutput.innerHTML += `
        <button class="user-todos-button">${user.name}</button>
        `;
  });
  const userButtons = [...document.querySelectorAll(".user-todos-button")];
  userButtons.forEach((button, i) => {
    button.onclick = (event) => {
      searxhTodoInput.value = "";
      currentUser = users[i];
      clearCurrentUser.disabled = false;
      console.log(currentUser);

      userButtons.forEach((btn) => btn.classList.remove("active-user-button"));
      event.target.classList.add("active-user-button");

      const todosOfCurrentUser = todos.filter(
        (todo) => todo.userId === currentUser.id
      );
      renderTodos(todosOfCurrentUser);
    };
  });
}

clearCurrentUser.disabled = true;

clearCurrentUser.onclick = () => {
  currentUser = undefined;
  clearCurrentUser.disabled = true;
  const userButtons = [...document.querySelectorAll(".user-todos-button")];
  userButtons.forEach((btn) => btn.classList.remove("active-user-button"));
  renderTodos(todos);
};
searxhTodoInput.oninput = () => {
  console.log(searxhTodoInput.value);
  searchTodo(searxhTodoInput.value);
};

// HW Кнопку очищення input для пошуку (кнопка має очистити value інпуту) April 13, 2023

clearTodoSearch.onclick = () => {
  searxhTodoInput.value = "";
  const todosToRender = currentUser ? todos.filter((todo) =>  todo.userId === currentUser.id) : todos;
  renderTodos(todosToRender);
};
// Кнопку, що прогортує весь контент до гори (для великої кількості todo)


scrollUpBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//remember it's async js!!!


// вибачте, є запитання трохи не по темі,
// чому на більшості вакансій та стажувань одним з основних вимог також є РНР і чи є сенс братися за вивчення зараз?