function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-result", {
    strings: "Here is a recipe that uses halloumi...",
    autoStart: true,
    delay: "natural",
  });
}

let ingredientSearch = document.querySelector("#ingredient-forms");
ingredientSearch.addEventListener("submit", generateRecipe);
