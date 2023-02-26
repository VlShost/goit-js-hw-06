const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const listArr = [];

ingredients.forEach(value => {
  const listItemEl = document.createElement(`li`);
  listItemEl.classList.add('item');
  listItemEl.textContent = value;
  listArr.push(listItemEl);
});

listEl.append(...listArr);
