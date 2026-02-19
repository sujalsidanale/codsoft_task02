let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Loop through all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {

    let value = button.innerText;

    // If Clear button pressed
    if (value === "C") {
      currentInput = "";
      display.value = "";
    }

    // If Delete button pressed
    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }

    // If Equal button pressed
    else if (value === "=") {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
      }
    }

    // Otherwise add input
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
