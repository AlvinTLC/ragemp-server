const playerLocal = mp.players.local;
const playerFlags = {
  occupied: "[...]",
  ping: "///",
};
let playerText = "";

setInterval(() => {
  if (mp.gui.cursor.visible && !playerNearby.getVariable("occupied")) {
    mp.events.callRemote("server:player:events:setVariable", "occupied", true);
  } else if (!mp.gui.cursor.visible && playerNearby.getVariable("occupied")) {
    mp.events.callRemote("server:player:events:setVariable", "occupied", false);
  }
}, 1000);

mp.events.add("render", () => {
  mp.players.forEach((playerNearby) => {
    let distance = 3.0;
    if (distance < 5.0) {
      let { x, y, z } = playerNearby.position;
      const isOccupied = playerNearby.getVariable("occupied");
      const hasHighPing = playerNearby.getVariable("highPing");

      if (isOccupied && hasHighPing) {
        playerText = `${playerFlags.occupied} ${playerFlags.ping}`;
      } else if (isOccupied && !hasHighPing) {
        playerText = `${playerFlags.occupied}`;
      } else if (hasHighPing && !isOccupied) {
        playerText = `${playerFlags.ping}`;
      } else {
        playerText = ``;
      }

      mp.game.graphics.drawText(playerText, [x, y, z + 0.905], {
        font: 4,
        color: [169, 169, 169, 255],
        scale: [0.4, 0.4],
      });
    }
  });
});
