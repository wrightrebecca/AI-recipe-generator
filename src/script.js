function displayRecipe(response) {
  new Typewriter("#recipe-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#search-input");
  let apiKey = "37e9da10fet0ob8e3fe3769dc4fd8d70";
  let prompt = `User request: Generate a recipe that uses ${ingredientInput.value}`;
  let context =
    "You are an experienced chef who knows every recipe. You will provide a short recipe which incorporates an ingredient that the user has requested. You will provide the recipe in HTML, for example <h1> Tomato pasta </h1>. Do not include '``` html'. Sign 'SheCodes AI' at the end, in <strong>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let ingredientSearch = document.querySelector("#ingredient-forms");
ingredientSearch.addEventListener("submit", generateRecipe);
