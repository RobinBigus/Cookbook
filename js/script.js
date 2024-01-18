function showRecipe(recipeNumber) {
  let allContainers = document.querySelectorAll(".recipeDisplay");
  allContainers.forEach(function (container) {
    container.style.display = "none";
  });

  let selectedContainer = document.getElementById(
    "recipeContainer" + recipeNumber
  );
  if (selectedContainer) {
    selectedContainer.style.display = "block";
  }
}

let allButtons = document.querySelectorAll(".foodIcon");

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let buttonNr = button.id.slice(-1);
    showRecipe(buttonNr);
  });
});
