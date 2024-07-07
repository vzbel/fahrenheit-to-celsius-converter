// Fahrenheit form input
const fahrenheitInput = document.getElementById("fahrenheit-input");
// Celsius output field
const celsiusOutput = document.getElementById("celsius-output");

// Convert fahrenheit value to celsius
function fahrenheitToCelsius(fahrenheitValue) {
  return ((fahrenheitValue - 32) * 5) / 9;
}
