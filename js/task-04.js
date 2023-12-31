const counterValue = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
