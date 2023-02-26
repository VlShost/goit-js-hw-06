// const categoriesEl = document.querySelector('#categories');

const categoriesElAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesElAll.length}`);

// for (let i = 0; i < categoriesElAll.length; i += 1) {
//   const categoryEl = categoriesEl.children[i].querySelector('h2');
//   console.log(`Category: ${categoryEl.textContent}`);

//   const elemsEl = categoriesEl.children[i].querySelectorAll('li');
//   console.log(`Elements: ${elemsEl.length}`);
// }

categoriesElAll.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);

  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});