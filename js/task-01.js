
const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');



const quantityCategoriesItems = categories.children.length;
console.log(`Number of categories: ${quantityCategoriesItems}`);


const categoriesContent = items.forEach(item => console.log(`Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`));