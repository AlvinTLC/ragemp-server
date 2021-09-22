const playerLocal = mp.players.local;
let occupied = false;

setInterval(() => {
    if (mp.gui.cursor.visible && !occupied) {
        occupied = true;
        mp.events.callRemote("server:occupied:set", true);
    } else if (!mp.gui.cursor.visible && occupied) {
        occupied = false;
        mp.events.callRemote("server:occupied:set", false);
    }
}, 1000);

mp.events.add("render", () => {
    mp.players.forEach((playerNearby) => {
        let distance = 3;
        if (distance < 5.0 && playerNearby.getVariable("occupied")) {
            let { x, y, z } = playerNearby.position;
            mp.game.graphics.drawText("[. . .]", [x, y, z + 0.905], {
                font: 4,
                color: [169, 169, 169, 255],
                scale: [0.40, 0.40],
            });
        }
    });
});
