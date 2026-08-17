const form = document.querySelector(".recipe-form");
const cancelBtn = document.querySelector("#cancel-btn");
const addBtn = document.querySelector("#add-btn");
const recipesContainer = document.querySelector(".recipes-container");

const recipes = [];

recipesContainer.addEventListener("click", (e) => {
  if (e.target.closest(".add-recipe-btn")) {
    form.style.display = "block";
  }
});

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateInput()) {
    addRecipeObject();
    displayRecipes(recipes);
    form.style.display = "none";
  }
});

function validateInput() {
  if (
    document.querySelector("#name").value.length < 2 ||
    document.querySelector("#ingredients").value.length < 2 ||
    document.querySelector("#steps").value.length < 2 ||
    document.querySelector("#time").value < 1 ||
    document.querySelector("#time").value > 720 ||
    document.querySelector("#servings").value < 1 ||
    document.querySelector("#servings").value > 24
  ) {
    alert("Please enter valid values");
    return false;
  }
  return true;
}

function addRecipeObject() {
  const recipe = {
    name: document.querySelector("#name").value,
    ingredients: document.querySelector("#ingredients").value,
    steps: document.querySelector("#steps").value,
    time: document.querySelector("#time").value,
    servings: document.querySelector("#servings").value,
    type: document.querySelector("#type").value,
  };
  recipes.push(recipe);
}

function displayRecipes(recipes) {
  let html = "";
  recipes.forEach((recipe) => {
    html += `<button class="recipe-card">
          <img src="images/recipe (1).png" alt="Placeholder icon for a recipe" />
          <p class="recipe-name">${recipe.name}</p>
          <span class="attribute" id="duration-span">${recipe.time} Mins</span>
          <span id="servings-span" class="attribute">${recipe.servings} Servings</span>
          <span id="type-span" class="attribute">${recipe.type}</span>
        </button>`;
  });
  html += `<button class="add-recipe-btn">
          <img
            src="images/plus (1).png"
            alt="icon for a plus sign"
            width="128px"
          />
          <p>Add New Recipe</p>
        </button>`;
  recipesContainer.innerHTML = html;
}

// ---------------------------------------------------------
const allFilter = document.querySelector("#all");
const breakfastFilter = document.querySelector("#breakfast");
const lunchFilter = document.querySelector("#lunch");
const dinnerFilter = document.querySelector("#dinner");
const dessertFilter = document.querySelector("#dessert");
const snackFilter = document.querySelector("#snack");
const favouritesFilter = document.querySelector("#favourites");

allFilter.addEventListener("click", () => {
  displayRecipes(recipes);
  changeFilterStyle("all");
});

breakfastFilter.addEventListener("click", () => {
  displayRecipes(returnFilteredRecipes("Breakfast"));
  changeFilterStyle("Breakfast");
});

lunchFilter.addEventListener("click", () => {
  displayRecipes(returnFilteredRecipes("Lunch"));
  changeFilterStyle("Lunch");
});

dinnerFilter.addEventListener("click", () => {
  displayRecipes(returnFilteredRecipes("Dinner"));
  changeFilterStyle("Dinner");
});

dessertFilter.addEventListener("click", () => {
  displayRecipes(returnFilteredRecipes("Dessert"));
  changeFilterStyle("Dessert");
});

snackFilter.addEventListener("click", () => {
  displayRecipes(returnFilteredRecipes("Snack"));
  changeFilterStyle("Snack");
});

function returnFilteredRecipes(filter) {
  const filteredRecipes = [];
  recipes.forEach((recipe) => {
    if (recipe.type === filter) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
}

function changeFilterStyle(filter) {
  const filtersContainer = document.querySelectorAll(`.filter`);
  filtersContainer.forEach((filter) => {
    filter.style.backgroundColor = "";
    filter.style.color = "";
  });
  document.querySelector(`#${filter.toLowerCase()}`).style.backgroundColor =
    "#F1943C";
  document.querySelector(`#${filter.toLowerCase()}`).style.color = "white";
}
