const refs = {
  input: document.querySelector('#name-input'),
  userName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.userName.textContent = event.currentTarget.value;
  if (refs.input.value === '') {
    refs.userName.textContent = 'Anonymous';
  }
}