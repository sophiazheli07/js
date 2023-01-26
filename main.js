const input = document.getElementById("input");
const clear = document.getElementById("clear");
const calculateButton = document.getElementById("calculate")

const calculationButtons = Array.from(document.getElementsByClassName("calculation"));

calculationButtons.forEach((el) => {
    el.onclick = function () {
    input.value = input.value + el.textContent;
    };
});

const numberButtons = Array.from(document.getElementsByClassName("number"));

numberButtons.forEach((el) => {
    el.onclick = function () {
        input.value = input.value + (+el.textContent);
    };
});

calculateButton.onclick = function () {
    input.value = eval(input.value);
}

clear.onclick = function clearScreen() {
    document.getElementById('input').value = ''
}