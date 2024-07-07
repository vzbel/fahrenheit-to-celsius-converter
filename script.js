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
    handleFahrenheitInput(Number(fahrenheitInput.value));
  });
}

// Handle the fahrenheit input by converting it and changing the celsius output
function handleFahrenheitInput(fahrenheitValue) {
  // Convert then update the output with the new value.
  updateOutput(fahrenheitToCelsius(fahrenheitValue));
}

// Update celsius output
function updateOutput(newOutput) {
  // Handle NaN results
  if(isNaN(newOutput)){
    celsiusOutput.textContent = "";
  }else{
    // Set output content to the provided output
    celsiusOutput.textContent = newOutput;
  }
}
// Convert fahrenheit value to celsius
function fahrenheitToCelsius(fahrenheitValue) {
  // Calculate the result then round to decimal place 4.
  return roundToDecimalPlace(4, ((fahrenheitValue - 32) * 5) / 9);
}

// Round a number to a fixed decimal place. This will return a number.
function roundToDecimalPlace(decimalPlace, value){
  // Note that toFixed returns a string.
  // Thus, we must first round the value using toFixed, then convert the result to a number.
  return Number(value.toFixed(decimalPlace));
}
