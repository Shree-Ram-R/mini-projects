let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";
const maxDisplayLength = 12; // Set your desired maximum display length
display.innerText = "0";
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.innerText;

    if (buttonText === "clearAll") {
      clearAll();
    } else if (buttonText === "=") {
      calculate();
    } else {
      appendToDisplay(buttonText);
    }

    // Check if the button is an operator
    if (["+", "-", "*", "/", "%"].includes(buttonText)) {
      operator = buttonText;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

function appendToDisplay(value) {
  if (currentInput.length < maxDisplayLength) {
    currentInput += value;
    display.innerText = currentInput;
  }
}

function clearAll() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.innerText = "0";
}

function calculate() {
  if (previousInput !== "" && currentInput !== "") {
    const result = operate(
      parseFloat(previousInput),
      operator,
      parseFloat(currentInput)
    );
    display.innerText = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
  }
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        alert("Cannot divide by zero");
        clearAll();
        return undefined;
      }
    case "%":
      return num1 % num2;
    default:
      return num2;
  }
}
