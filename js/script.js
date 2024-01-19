// Select all html button elements with the "foodIcon" class.
let allButtons = document.querySelectorAll(".foodIcon");

// Loop through every button that was previously selected with "allButtons".
allButtons.forEach(function (button) {
  // For each button an Event Listener is added which listenes for "click" Events.
  // The function that follows is executed for every "click" Event.
  button.addEventListener("click", function () {
    // Extracting the last character of the button id. In this cas a number from 1 - 6.
    let buttonNr = button.id.slice(-1);
    // Call the "showRecipe" function with the extracted number as a parameter.
    showRecipe(buttonNr);
  });
});

function showRecipe(recipeNumber) {
  // Select all recipe containers (all elements with the class "recipeDisplay").
  let allContainers = document.querySelectorAll(".recipeDisplay");
  // Loop through each container.
  allContainers.forEach(function (container) {
    // Set the css styling of each container to display: none. So that only one container is showing at a time.
    container.style.display = "none";
  });

  // Select the recipe container with the recipe number which was given as a parameter in the show recipe function.
  let selectedContainer = document.getElementById(
    "recipeContainer" + recipeNumber
  );
  // Set the style of the container that was selected (button that was pressed) and setting itself to display: block.
  if (selectedContainer) {
    selectedContainer.style.display = "block";
  }
}
