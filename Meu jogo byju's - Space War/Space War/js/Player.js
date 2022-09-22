class Player {
    constructor() {
    this.name = null;
    this.index = null;
    this.positionY = 0;
    this.positionX = 0;
    this.life = 3;

    }

    addPlayer() {

        var playerIndex = "players/player" + this.index;

        if (this.index === 1) {
          this.positionY = height / 2 - 100;
          this.positionX = width / 2 + 600;
        } else {
          this.positionY = height / 2 + 100;
          this.positionX = width / 2 - 600;
        }

        
    
        database.ref(playerIndex).set({
          name: this.name,
          positionX: this.positionX,
          positionY: this.positionY,
        });
    }

    getCount() {

        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
    }

    updateCount(count) {

        database.ref("/").update({
          playerCount: count
        });
      }

      static getPlayersInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
          allPlayers = data.val();
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          positionY: this.positionY,
        });
      }

      getDistance() {
        var playerDistanceRef = database.ref("players/player" + this.index);
        playerDistanceRef.on("value", data => {
          var data = data.val();
          this.positionY = data.positionY;
        });
      }

      updateBullet() {

        var bulletIndex = "players/player" + this.index;
        database.ref(bulletIndex).update({
          positionX: this.positionX,
        });
      }

      getDistanceBullet() {

        var bulletDistanceRef = database.ref("players/player" + this.index);
        bulletDistanceRef.on("value", data => {
          var data = data.val();
          this.positionX = data.positionX;
        });
      }

}
