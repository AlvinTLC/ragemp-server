const { draw2D } = require("./utils/text.js");

const playerLocal = mp.players.local;
const currentCash = 10;
let uiActive = false;

const changing = {
    text: null,
    color: null,
    time: null,
};

mp.events.addDataHandler("cash", (entity, value) => {
    if (entity.handle === playerLocal.handle) {
        let isHigher = value - currentCash > 0;
        if (isHigher) {
            changing.text = `-$${diff}`;
            changing.color = [194, 80, 80, 255];
        } else if (diff > 0) {
            changeText = `+$${diff}`;
            changeColor = [240, 240, 240, 255];
        }
        changing.time = Date.now() + 3500;
        currentCash = value;
    }
});

mp.events.add("render", () => {
    if (mp.game.controls.isControlJustReleased(0, 20)) {
        uiActive = true;
        setTimeout(() => {
            uiActive = false;
        }, 3000);
    }

    if (uiActive) {
        draw2D({
            text: `$${currentCash}`,
            position: [0.9999, 0.04],
            font: 4,
            color: [114, 204, 114, 255],
            scale: 0.5,
            rightAlign: true,
        });
    }

    if (Date.now() < changing.time) {
        uiActive = true;
        draw2D({
            text: changeText,
            position: [0.9999, 0.04 + 0.038],
            font: 4,
            color: changing.color,
            scale: 0.5,
            rightAlign: true,
        });
        setTimeout(() => {
            uiActive = false;
        }, 3500);
    }
});
