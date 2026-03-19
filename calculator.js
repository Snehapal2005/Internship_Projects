document.addEventListner("DOMContentLoaded",function (){

let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
  window.appendValue =appendValue;
  window.clearDisplay = clearDisplay;
  window.calculator=calculator;
});
  
