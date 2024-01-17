const recipeDisplayClass = document.querySelector('.recipeDisplay')
const enteRezept = document.querySelector('#duckRecipe');
const steakRezept = document.querySelector('#steakSaladRecipe');

let isClickedDuck = true;
let isClickedSteak = true;

let showDuck = function(){
    if(isClickedDuck){
        enteRezept.style.display = 'flex';
        isClickedDuck = false;
    }
    else{
        enteRezept.style.display = 'none';
        recipeDisplayClass.style.display = 'none';
        isClickedDuck = true;
    }
};

let showSteak = function(){
    if(isClickedSteak){
        steakRezept.style.display = 'flex';
        isClickedSteak = false;
    }
    else{
        steakRezept.style.display = 'none';
        recipeDisplayClass.style.display = 'none';
        isClickedSteak = true;
    }
};