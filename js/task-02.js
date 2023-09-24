const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listLi = [];
for (const ingredient of ingredients) {
  let ItemLi = document.createElement("li");
  ItemLi.textContent = ingredient;
  ItemLi.className = "item"

  listLi.push(ItemLi);  
}
const IngredientsList = document.querySelector("#ingredients");

IngredientsList.append(...listLi);
