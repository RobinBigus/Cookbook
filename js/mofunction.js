const enteRezept = document.querySelector('#duckRecipe');
let isClicked = true;

let showDuck = function(){
    if(isClicked){
        enteRezept.style.display = 'flex';
        isClicked = false;
    }
    else{
        enteRezept.style.display = 'none';
        isClicked = true;
    }
}