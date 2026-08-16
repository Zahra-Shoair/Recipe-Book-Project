const addRecipeBtn = document.querySelector(".add-recipe-btn");
const form = document.querySelector(".recipe-form");
const cancelBtn = document.querySelector("#cancel-btn");
const addBtn = document.querySelector("#add-btn");

const recipes = [];

addRecipeBtn.addEventListener("click", () => {
  form.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

addBtn.addEventListener("click", () => {
  addRecipeObject();
  form.style.display = "none";
});

function addRecipeObject() {
  const recipe = {
    name: document.querySelector("#name").value,
    ingredients: document.querySelector("#ingredients").value,
    steps: document.querySelector("#steps").value,
    Time: document.querySelector("#time").value,
    servings: document.querySelector("#servings").value,
    type: document.querySelector("#type").value,
  };
  recipes.push(recipe);
}
