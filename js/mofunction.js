const enteRezept = document.querySelector('#duckRecipe');
const steakRezept = document.querySelector('#steakSaladRecipe');
const chickenRezept = document.querySelector('#crispyChickRecipe');
const lachsRezept = document.querySelector('#salmonRecipe');
const cabonaraRezept = document.querySelector('#cabonaraRecipe');
const wustRezept = document.querySelector('#sausageRecipe');

const bowlRezept = document.querySelector('#bowlRecipe');
const brocRezept = document.querySelector('#brocRecipe');
const endiveRezept = document.querySelector('#endiveRecipe');
const carrotRezept = document.querySelector('#carrotRecipe');
const spinachRezept = document.querySelector('#spinachRecipe');
const stirFryRezept = document.querySelector('#stirFryRecipe');

let isClicked = true;

let showBowl = function(){
    if(isClicked){
        bowlRezept.style.display = 'flex';
        brocRezept.style.display = 'none';
        endiveRezept.style.display = 'none';
        carrotRezept.style.display = 'none';
        spinachRezept.style.display = 'none';
        stirFryRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        bowlRezept.style.display = 'none';
        isClicked = true;
    }
};

let showBroc = function(){
    if(isClicked){
        bowlRezept.style.display = 'none';
        brocRezept.style.display = 'flex';
        endiveRezept.style.display = 'none';
        carrotRezept.style.display = 'none';
        spinachRezept.style.display = 'none';
        stirFryRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        brocRezept.style.display = 'none';
        isClicked = true;
    }
};

let showEndive = function(){
    if(isClicked){
        bowlRezept.style.display = 'none';
        brocRezept.style.display = 'none';
        endiveRezept.style.display = 'flex';
        carrotRezept.style.display = 'none';
        spinachRezept.style.display = 'none';
        stirFryRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        endiveRezept.style.display = 'none';
        isClicked = true;
    }
};

let showCarrot = function(){
    if(isClicked){
        bowlRezept.style.display = 'none';
        brocRezept.style.display = 'none';
        endiveRezept.style.display = 'none';
        carrotRezept.style.display = 'flex';
        spinachRezept.style.display = 'none';
        stirFryRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        carrotRezept.style.display = 'none';
        isClicked = true;
    }
};

let showSpinach = function(){
    if(isClicked){
        bowlRezept.style.display = 'none';
        brocRezept.style.display = 'none';
        endiveRezept.style.display = 'none';
        carrotRezept.style.display = 'none';
        spinachRezept.style.display = 'flex';
        stirFryRezept.style.display = 'none';
        isClicked = false;
    }
    else{
        spinachRezept.style.display = 'none';
        isClicked = true;
    }
};

let showStir = function(){
    if(isClicked){
        bowlRezept.style.display = 'none';
        brocRezept.style.display = 'none';
        endiveRezept.style.display = 'none';
        carrotRezept.style.display = 'none';
        spinachRezept.style.display = 'none';
        stirFryRezept.style.display = 'flex';
        isClicked = false;
    }
    else{
        stirFryRezept.style.display = 'none';
        isClicked = true;
    }
};

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