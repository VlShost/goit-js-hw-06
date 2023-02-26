function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
};

function createBoxes(amount) {
  amount = refs.input.value;
  
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement('div');

    div.style.width = `${i * 10 + 30}px`;
    div.style.height = `${i * 10 + 30}px`;
    div.style.backgroundColor = getRandomHexColor();

    console.log(div);
    refs.boxes.append(div);
  };
};