const enteRezept = document.querySelector('#duckRecipe');
const steakRezept = document.querySelector('#steakSaladRecipe');
const chickenRezept = document.querySelector('#crispyChickRecipe');
const lachsRezept = document.querySelector('#salmonRecipe');
const cabonaraRezept = document.querySelector('#cabonaraRecipe');
const wustRezept = document.querySelector('#sausageRecipe');

let isClicked = true;

let showDuck = function(){
    if(isClicked){
        enteRezept.style.display = 'flex';
        steakRezept.style.display = 'none';
        chickenRezept.style.display = 'none';
        lachsRezept.style.display = 'none';
        cabonaraRezept.style.display = 'none';
        wustRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        enteRezept.style.display = 'none';
        isClicked = true;
    }
};

let showSteak = function(){
    if(isClicked){
        enteRezept.style.display = 'none';
        steakRezept.style.display = 'flex';
        chickenRezept.style.display = 'none';
        lachsRezept.style.display = 'none';
        cabonaraRezept.style.display = 'none';
        wustRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        steakRezept.style.display = 'none';
        isClicked = true;
    }
};

let showChicken = function(){
    if(isClicked){
        enteRezept.style.display = 'none';
        steakRezept.style.display = 'none';
        chickenRezept.style.display = 'flex';
        lachsRezept.style.display = 'none';
        cabonaraRezept.style.display = 'none';
        wustRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        chickenRezept.style.display = 'none';
        isClicked = true;
    }
};

let showSalmon = function(){
    if(isClicked){
        enteRezept.style.display = 'none';
        steakRezept.style.display = 'none';
        chickenRezept.style.display = 'none';
        lachsRezept.style.display = 'flex';
        cabonaraRezept.style.display = 'none';
        wustRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        lachsRezept.style.display = 'none';
        isClicked = true;
    }
};

let showCabonara = function(){
    if(isClicked){
        enteRezept.style.display = 'none';
        steakRezept.style.display = 'none';
        chickenRezept.style.display = 'none';
        lachsRezept.style.display = 'none';
        cabonaraRezept.style.display = 'flex';
        wustRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        cabonaraRezept.style.display = 'none';
        isClicked = true;
    }
};

let showSausage = function(){
    if(isClicked){
        enteRezept.style.display = 'none';
        steakRezept.style.display = 'none';
        chickenRezept.style.display = 'none';
        lachsRezept.style.display = 'none';
        cabonaraRezept.style.display = 'none';
        wustRezept.style.display = 'flex';
        isClicked = false;
    }
    else{
        wustRezept.style.display = 'none';
        isClicked = true;
    }
};