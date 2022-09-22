class Game {
  constructor() {

    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
  }

  start() {

    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    navePrinc = createSprite(width -200, height /2);
    navePrinc.addImage("miniNaveImg", navePrincImg);
    navePrinc
    navePrinc.scale = 0.2;

    navePrinc2 = createSprite(width -1200, height /2);
    navePrinc2.addImage("miniNaveImg", navePrinc2Img);
    navePrinc2
    navePrinc2.scale = 0.2;

    shield = createSprite(width - 350, height /2, 50, 630);
    shield.shapeColor ="#00BFFF";

    shield2 = createSprite(width - 1050, height /2, 50, 630);
    shield2.shapeColor ="#FF6347";

    nave = [navePrinc, navePrinc2];
    shield = [shield, shield2];

    bulletGroup = new Group();
}

  update(state) {

    database.ref("/").update({
      gameState: state
    });
}

  getState() {

    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
}

  play() {
    
    this.handleElements();
    this.handleResetButton();
    this.handlePlayerControls();
    
    Player.getPlayersInfo();

    if (allPlayers !== undefined) {

        var index = 0;
        for (var plr in allPlayers) {

          index = index + 1;

          var y = height - allPlayers[plr].positionY;
          var x = allPlayers[plr].positionX;

          nave[index - 1].position.x = x;
          nave[index - 1].position.y = y;
  
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 40);
            
          }
        }

        this.handlePlayerControls();
        this.handleShoot();

        drawSprites();

    }
}

  handleElements() {
    form.hide();
    //form.titleImg.position(40, 50);
    //form.titleImg.class("gameTitleAfterEffect");

    this.resetTitle.html("Reiniciar");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
}

  handlePlayerControls() {

    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.positionY -= 10;
        player.update();
    }

}

handleResetButton() {
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {},
    });
    window.location.reload();
  });
}

handleShoot() {

  if (keyDown("space")) {
    fill("#A020F0");
    var  bullet = createSprite(player.positionX + 65, player.positionY, 40, 20);
    bullet.velocityX = 7;
    bulletGroup.add(bullet);

  }
}

}
