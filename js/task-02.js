const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const item = ingredients.map((ingredient) => {
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredient;
  lastItem.classList.add("item");
  return lastItem;
});
list.append(...item);
