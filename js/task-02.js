const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientList = document.querySelector("#ingredients");
const addItem = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  return li;
});
ingridientList.append(...addItem);
