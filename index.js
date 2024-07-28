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
const active = Array.from(document.querySelectorAll(".operator"));



function display(Event) {
    let clicked = event.target.textContent;

    if (clicked === "C") {
        displayDiv.textContent = "";
        secondNumber = "";
        firstNumber = "";
        active.map(item => item.classList.remove("clicked"));
    }
    else if (clicked === "=") {
        secondNumber = displayDiv.textContent;
        displayDiv.textContent = operate(firstNumber, operator, secondNumber);
        active.map(item => item.classList.remove("clicked"));
    }
    else if (clicked === "+" || clicked === "-" || clicked === "/" || clicked === "X"){
        active.map(item => item.classList.remove("clicked"));
        firstNumber = displayDiv.textContent;
        operator = clicked;
        event.target.classList.add("clicked");
        displayDiv.textContent = "";
    }
    else {
        active.map(item => item.classList.remove("clicked"));
        displayDiv.textContent += clicked;
    }

}  

button.addEventListener("click", display);