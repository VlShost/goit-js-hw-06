const refs = {
  plusBtn: document.querySelector('button[data-action="increment"]'),
  minusBtn: document.querySelector('button[data-action="decrement"]'),
  currentValue: document.querySelector('#value'),
};

let counterValue = 0;

refs.plusBtn.addEventListener('click', onValueIncrement);
refs.minusBtn.addEventListener('click', onValueDecrement);

function onValueIncrement(event) {
  refs.currentValue.textContent = counterValue += 1;
};

function onValueDecrement(event) {
  refs.currentValue.textContent = counterValue -= 1;
};

