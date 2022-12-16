const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.classList = 'item';
    ingredientEl.textContent = ingredient;
    // console.log(ingredientEl);
    return ingredientEl;
  });
};

const ingredientsEl = makeIngredientsList(ingredients);
ingredientsList.append(...ingredientsEl);



//           Alternative Solution

// for (const ingredient of ingredients) {
//   const ingredientsElement = document.createElement("li");
//   ingredientsElement.classList = 'item';
//   ingredientsElement.textContent = ingredient;
//   // console.log(ingredientsElement);
//   ingredientsList.append(ingredientsElement)
// };

