// Fahrenheit form input
const fahrenheitInput = document.getElementById("fahrenheit-input");
// Celsius output field
const celsiusOutput = document.getElementById("celsius-output");

// Start main event listener
initializeEventListener();

// Function to initialize the fahrenheit input event listener
function initializeEventListener() {
  // Listen for key up
  fahrenheitInput.addEventListener("keyup", () => {
    // Pass current input value along for further processing
    handleFahrenheitInput(fahrenheitInput.value);
  });
}

// Handle the fahrenheit input by converting it and changing the celsius output
function handleFahrenheitInput(fahrenheitValue) {
  // Convert then update the output with the new value.
  updateOutput(fahrenheitToCelsius(fahrenheitValue));
}

// Update celsius output
function updateOutput(newOutput) {
  celsiusOutput.textContent = newOutput;
}
// Convert fahrenheit value to celsius
function fahrenheitToCelsius(fahrenheitValue) {
  return ((fahrenheitValue - 32) * 5) / 9;
}
