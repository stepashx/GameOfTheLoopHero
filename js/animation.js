var canvas = document.getElementById("character1");
var context = canvas.getContext('2d');
canvas.width = window.innerWidth; //введите размер ячейки
canvas.height = window.innerHeight - window.innerHeight/40;//введите размер ячейки
var coordX = 0;
var coordY = 530;
var innerX = 90;
var innerY = 150;
var marginX = 15;
var marginY = 15;
var width = 130;
var height = 150;
var move = 0; 
var character = new Image();
character.src = "png/Person/Male_adventurer/character1.png";

function animateRight(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    coordX +=95
    move+=15;
    if (coordX>700){
        coordX=0;
    }
    if (move> 1000){
        move=0;
    }
    context.drawImage(character, coordX, coordY, innerX, innerY, marginX+move, marginY, width, height);
}
function animateDown(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    coordX +=96
    move+=15;
    if (coordX>700){
        coordX=0;
    }
    if (move> 500){
        move=0;
    }
    context.drawImage(character, coordX, coordY, innerX, innerY, marginX, marginY+move, width, height);
}
function animateUp(){
    marginY=500;
    context.clearRect(0, 0, canvas.width, canvas.height);
    coordX +=96
    move+=15;
    if (coordX>700){
        coordX=0;
    }
    if (move> 500){
        move=0;
    }
    context.drawImage(character, coordX, coordY, innerX, innerY, marginX, marginY-move, width, height);
}
function animateLeft(){
    marginX=1000;
    context.clearRect(0, 0, canvas.width, canvas.height);
    coordX +=95
    move+=15;
    if (coordX>750){
        coordX=0;
    }
    if (move> 1000){
        move=0;
    }
    context.drawImage(character, 665-coordX, coordY, innerX, innerY, marginX-move, marginY, width, height);
}
setInterval(animateUp, 100);
