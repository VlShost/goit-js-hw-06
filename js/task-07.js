const refs = {
  input: document.querySelector('#font-size-control'),
  textSample: document.querySelector('#text')
};

refs.input.addEventListener('input', onSelectorMove);

function onSelectorMove(event) {
  refs.textSample.style.fontSize = refs.input.value + 'px';
};
