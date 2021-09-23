
const {fixPosition} = require("./utils/screen.js")

const draw2D = ({
    text = "undefined",
    position = [0, 0],
    font = 4,
    color = [255, 255, 255, 255],
    scale = 0.5,
    rightAlign = false,
}) => {
    position = fixPosition(position);

    mp.game.ui.setTextEntry("STRING");
    mp.game.ui.addTextComponentSubstringPlayerName(text);
    mp.game.ui.setTextScale(scale, scale);
    mp.game.ui.setTextFont(font);
    mp.game.ui.setTextColour(color[0], color[1], color[2], color[3]);
    if (rightAlign) {
        mp.game.ui.setTextRightJustify(true);
        mp.game.ui.setTextWrap(0, position[0]);
    }
    mp.game.invoke("0x2513DFB0FB8400FE");
    mp.game.ui.drawText(position[0], position[1]);
};

exports = {
    draw2D
}
