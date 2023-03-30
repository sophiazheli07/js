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

let todos = [
    {
        text: "buy Dodge Challeger",
        done: false
    }
];

renderTodos(todos);

function generateUniqueKey() {
  const existingKeys = Object.keys(localStorage);
  let key = `todos-${existingKeys.length + 1}`;
  while (existingKeys.includes(key)) {
    key = `todos-${existingKeys.length + 1}`;
  }
  return key;
}
const key =  generateUniqueKey();
console.log(key)

button.onclick = () => {
    const todo = {
        text: input.value,
        done: false
    }

    input.value = "";
    
    todos.push(todo);
    localStorage.setItem(key, JSON.stringify(todo));

    renderTodos(todos);
}

function renderTodos (todosToRender) {
    output.innerHTML = "";
    
    todosToRender.forEach((todo, i) => {
        output.innerHTML += `
            <li class="todo ${todo.done && "done"}">
                <div>
                <span>${i + 1}.</span>
                <input type="checkbox" ${todo.done && "checked"} class="todo-checkbox" />
                <span>${todo.text}</span>
                </div>
                <button class="delete-todo">Delete</button>
            </li>
        `
    });

    const checkboxes = [...document.querySelectorAll(".todo-checkbox")];

    checkboxes.forEach((checkbox, i) => {
        checkbox.onchange = () => {
            const todo = todos[i];
            changeTodo(todo.text, !todo.done);
        }
    });

    const deleteButtons = [...document.querySelectorAll(".delete-todo")];

    deleteButtons.forEach((button, i) => {
        button.onclick = () => {
            const todo = todos[i];
            deleteTodo(todo.text);
            localStorage.setItem(key, "");
        }
        
    });
}

function changeTodo (text, newDone) {
    todos = todos.map((todo) => {
        if (text === todo.text) {
            return { text, done: newDone }
        }
        return todo;
    });

    renderTodos(todos);
}

function deleteTodo (text) {
  todos = todos.filter((todo) => todo.text !== text);
  renderTodos(todos);
}