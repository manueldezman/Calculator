function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let firstNumber, operator, secondNumber;

function operate(firstNumber, operator, secondNumber) {
    
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return "error";
    }
}

const button = document.querySelector(".buttons");
const displayDiv = document.querySelector(".display");

function display(event) {
    

}

button.addEventListener("click", (Event) => {
    displayDiv.textContent = "";
    let clicked = event.target.textContent;
    console.log(clicked);
    console.log(event.type);

    displayDiv.textContent += clicked;
});