function add(a, b) {

    return Number(a) + Number(b);
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
        case "X":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return "error";
    }
}

const button = document.querySelector(".buttons");
const displayDiv = document.querySelector(".display");

function display(Event) {
    let clicked = event.target.textContent;

    if (clicked === "C") {
        displayDiv.textContent = "";
        secondNumber = "";
        firstNumber = "";
    }
    else if (clicked === "=") {
        secondNumber = displayDiv.textContent;
        displayDiv.textContent = operate(firstNumber, operator, secondNumber);
    }
    else if (clicked === "+" || clicked === "-" || clicked === "/" || clicked === "X"){
        firstNumber = displayDiv.textContent;
        operator = clicked;
        displayDiv.textContent = "";
    }
    else {
        displayDiv.textContent += clicked;
    }

}  

button.addEventListener("click", display);