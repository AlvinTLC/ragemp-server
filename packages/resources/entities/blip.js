const Blip = require("../../models/Blip.js");
const Log = require("../../utils/log.js");

let blipsDraw = [];

const destroyBlipsDraw = () => {
    blipsDraw.map((blipDraw) => {
        setTimeout(() => {
            blipDraw.destroy();
        }, 100);
    });
    blipsDraw = [];
};

const createBlip = async ({
    name = "undefined.name",
    sprite = 66,
    position,
    label = "undefined.label",
    scale = 0.6,
    color = 0,
    shortRange = true,
}) => {
    const newBlip = new Blip({
        name,
        sprite,
        position,
        label,
        scale,
        color,
        shortRange,
    });
    await newBlip.save();
    Log.sendConsole(
        "INFO",
        `Blip created : ${newBlip.name} | ${newBlip.label}`
    );
    drawBlips();
    return newBlip;
};

const getBlips = async () => {
    const blipsGot = await Blip.find();
    return blipsGot;
};

const getBlip = async (name) => {
    const blip = await Blip.find({ name });
    return blip;
};

const drawBlips = async () => {
    destroyBlipsDraw();
    const blips = await getBlips();
    blips.map((blip) => {
        const blipDraw = mp.blips.new(blip.sprite, blip.position, {
            name: blip.label,
            scale: blip.scale,
            color: blip.color,
            shortRange: blip.shortRange,
        });
        blipsDraw.push(blipDraw);
    });
    Log.sendConsole("INFO", `${blipsDraw.length} blips draw`);
};

const deleteBlip = async (id) => {
    try {
        const deletedBlip = await Blip.findByIdAndDelete(id);
        drawBlips();
        return deletedBlip;
    } catch (error) {
        return null;
    }
};

const updateBlip = async (name, data) => {
    const updatedBlip = await Blip.findOneAndUpdate({ name }, data);
    drawBlips();
    return updatedBlip;
};

drawBlips();

module.exports = {
    createBlip,
    deleteBlip,
    getBlips,
};
