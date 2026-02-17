const allCategories = document.querySelector('ul#categories');
// console.log(allCategories);
const items = allCategories.querySelectorAll('li.item');
console.log(`Number of category: ${items.length}`);
items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elemCount = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elemCount}`)
});
const listItems = document.querySelectorAll('#categories ul li');

listItems.forEach(item => {
  item.classList.add('js-item-up');
});