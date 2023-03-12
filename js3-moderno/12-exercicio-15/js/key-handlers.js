import calculate from "./calculate.js";

export { hadleButtonPress, handleClearButton, handleTyping };

const input = document.getElementById('input');
const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' ',];

function hadleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

function handleClearButton() {
  input.value = '';
  input.focus();
}

function handleTyping(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === 'Enter') {
    calculate();
  }
}
