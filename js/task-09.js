function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeClrBtn = document.querySelector('.change-color');
const colorCode = document.querySelector('.color');
const body = document.querySelector('body');

function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorCode.textContent = body.style.backgroundColor;
};

changeClrBtn.addEventListener('click', onBtnClick);
