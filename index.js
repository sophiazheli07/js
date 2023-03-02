
// DOM document object model


// window.onload = () => {
//     alert("Hello I am loaded");



// const h1 = document.getElementById("h1");
// console.log(h1);

// h1.textContent = "Hello World"

// const spans = document.getElementsByTagName("span");
// console.log(spans);

// const spansWithNames = document.getElementsByName("span");
// [...spansWithNames].forEach((el) => el.style.color = "red");

// [...spans].forEach((el, i) => {
//     el.textContent = i;
// });

// const allElements = [...document.querySelectorAll("*")];
// allElements.forEach((el) => el.style.fontSize = "80px")
// let counter = 0;

// const h1 = document.querySelector("h1");
// h1.textContent = "1"

// const button = document.createElement("button");
// button.textContent = "Button";

// document.body.appendChild(button);

// button.onclick = () => {
//     counter = counter + 1;
//     h1.textContent = counter;
// };

// const button2 = document.createElement("button");
// button2.textContent = "Button2";

// document.body.appendChild(button2);

// button2.onclick = () => {
//     counter = counter - 1;
//     h1.textContent = counter;
// };

// const button2 = document.createElement("button2");
// document.body.appendChild(button2);
// button2.onclick = () => {
//     counter = counter - 1;
//     h1.textContent = counter;
// };


// const h1 = document.querySelector("h1");
// const incrementButton = document.querySelector("#increment")
// const decrementButton = document.querySelector("#decrement")
// const resetButton = document.querySelector("#reset")
// let counter = 0;

// incrementButton.onclick = () => {
//     counter = counter + 1;
//     h1.textContent = counter;
//     onChangeCounter();
// };
// decrementButton.onclick = () => {
//     counter = counter - 1;
//     h1.textContent = counter;
//     onChangeCounter();
// };
// resetButton.onclick = () => {
//     counter = 0;
//     h1.textContent = counter;
//     onChangeCounter();
// };

// const onChangeCounter = () => {
//     document.body.style.background = `rgb(${counter * 10} ${counter * 10} ${counter * 10})`;
// };
const addSquareButton = document.getElementById("addSquare");
class Square {
    constructor (size, color, textContent) {
        this.size = size;
        this.color = color;
        this.textContent = textContent;
        this.element = document.createElement("div");

        this.element.textContent = textContent;
        this.element.style.width = this.size;
        this.element.style.height = this.size;
        this.element.style.background = this.color;
        this.element.className = "square";
    }

    render (htmlElement) {
        htmlElement.appendChild(this.element);
    }
    delete () {
        document.body.removeChild(this.element);
    }
    changeText (usersText) {
        this.element.textContent = usersText
    }
}
let counter = 0;

const colorOfSquare = ["white", "blue", "green"];
const getRandomColor = (arr) => {
    const randomNumber = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomNumber];
};
addSquareButton.onclick = () => {
    const square = new Square(20, getRandomColor(colorOfSquare), counter);
    square.render(document.body);
    square.element.onclick = () => {
        square.delete(document.body);
        counter = 0;
    }
    square.changeText("Hello World")
    counter = counter + 1;
};

window.onblur = () => {
    document.title = "Hey come back"
}

window.onfocus = () => {
    document.title = "Hey bitch"
}

window.onclose = () => {

}

const googleButton = document.querySelector("#google-button");

googleButton.onclick = () => {
    // window.open("https://google.com")
    window.location = "https://google.com"
};

setTimeout(() => {
    window.open = "https://google.com"
}, 3000)

// };  // onload
