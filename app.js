let a = ""; // First number
let b = ""; // Second number
let sign = ""; // Operation sign
let finish = false; //

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "x", "÷", "%", "+/-"];

// Output
const output = document.querySelector(".output p");

// All buttons
const buttons = document.querySelector(".buttons");

// AC button
const clear = document.querySelector(".clear");

//console.log(a, b, sign);

clear.addEventListener("click", () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  output.textContent = 0;
});

buttons.addEventListener("click", (event) => {
  // NON button pressed
  if (!event.target.classList.contains("btn")) return;
  // Pressed clearAll button (AC)
  if (event.target.classList.contains("clear")) return;

  output.textContent = "";

  // Putting text elements from buttons to 'key'
  const key = event.target.textContent;

  // If pressed button 0 - 9 or .
  if (digit.includes(key)) {
    // If const b and sign are empty
    if (b === "" && sign === "") {
      // Filling variable a
      a += key;
      output.textContent = a;
    } else if (a !== "" && b !== "" && finish) { // If const a and b are NOT empty and finish is TRUE
      b = key;
      finish = false;
      output.textContent = b;
    } else {
      // If const b is NOT empty
      b += key;
      output.textContent = b;
    }
    return;
  }

  // If pressed signs +, -, x, ÷
  if (action.includes(key)) {
    // If pressed any sign
    sign = key;
    // Filling variable sign
    output.textContent = sign;
    return;
  }

  // Pressed button = (calculating)
  if (key === "=") {
    if (b === "") b = a;

    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "÷":
        if (b === "0") {
          output.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
      case "%":
        a = a / 100;
        break;
      case "+/-":
        a = -a;
        break;
    }
    finish = true;
    output.textContent = a; 
  }
});
