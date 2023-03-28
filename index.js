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
    text: "buy Dodge Challenger",
    done: false
}

];
renderTodos(todos)

button.onclick = () => {
    const todo = {
        text: input.value,
        done: false

    }

    input.value = "";

    todos.push(todo);

    renderTodos(todos);
}

function renderTodos (todosToRender) {
    output.innerHTML = "";
    todosToRender.forEach(({text, done}, i) => {
        output.innerHTML += `
        <div class="todo ${done && "done"}">
        <span>${i+1}.</span>
        <input type="checkbox" ${done && "checked"} class="todo-checkbox"/>
        <span>${text}</span>
        <button class="delete-todo">Delete</button>

        </div>
        `
    });

    const checkboxes = [...document.querySelectorAll(".todo-checkbox")];
    const deleteButtons = [...document.querySelectorAll(".delete-todo")];
    deleteButtons.forEach((button, i) => {
        button.onclick = () => {
            const todo = todos[i];
            

        }
    })

    checkboxes.forEach((checkbox, i) => {
        checkbox.onchange = () => {
            const todo = todos[i];
            changeTodo(todo.text, !todo.done);
        }

    })
}

function changeTodo (text, newDone) {
    todos = todos.map((todo) => {
        if (text === todo.text) {
            todo = {text, done: newDone}
        }
        return todo;
    });
    renderTodos(todos)
}

function deleteTodo () {
    return todos.filter((todo) => todo.text !== text);
    renderTodos(todos);
}