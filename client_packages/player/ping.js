const playerLocal = mp.players.local;

mp.events.add("render", () => {
    mp.players.forEach((playerNearby) => {
        let distance = 3;
        if (distance < 5.0 && playerNearby.getVariable("highPing")) {
            const { x, y, z } = playerNearby.position;
            mp.game.graphics.drawText("///", [x, y, z + 0.905], {
                font: 4,
                color: [153, 39, 39, 255],
                scale: [0.4, 0.4],
            });
        }
    });
});
