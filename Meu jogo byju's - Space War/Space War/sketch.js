var miniNaveImg, navePrincImg, navePrinc2Img, backgroundImg, resetButtonImg;
var miniNave, navePrinc, navePrinc2, background;
var shidld, shield2;
var player, playerCount, allPlayers;
var game, form;
var gameState;
var playerCount;
var database;
var nave = [], shield = [];
var bulletGroup;

function preload() {
  
    navePrincImg = loadImage("imagens/nave_principal.png");
    navePrinc2Img = loadImage("imagens/nave_principal2.png");
    miniNaveImg = loadImage("imagens/mini_nave.png");
    backgroundImg = loadImage("imagens/fundo_espaco.jpg");
    resetButtonImg = loadImage("imagens/reset.png");
}

function setup() {
  
    createCanvas(windowWidth, windowHeight);
    database = firebase.database();

    game = new Game();
    game.start();
    game.getState();
}

function draw() {
 
    background(backgroundImg);

    if (playerCount == 2) {
        game.update(1);
 
     }
 
     if (gameState == 1) {
        game.play();
 
     }
}
