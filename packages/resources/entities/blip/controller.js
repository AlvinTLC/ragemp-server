const Blip = require("../../../models/entities/Blip.js");
const { sendLog } = require("../../../utils/log.js");

let currentBlips = [];

const destroyCurrentBlips = () => {
  currentBlips.map((blipDraw) => {
    setTimeout(() => {
      blipDraw.destroy();
    }, 100);
  });
  currentBlips = [];
};

const createBlip = async ({
  player,
  name = "undefined.name",
  sprite = 66,
  position,
  label = "undefined.label",
  scale = 0.6,
  color = 0,
  shortRange = true,
}) => {
  const { rgscId } = player;
  const blip = new Blip({
    rgscId,
    name,
    sprite,
    position,
    label,
    scale,
    color,
    shortRange,
  });
  await blip.save();
  sendLog("DONE", `{entities.blip} new : ${blip.name} | ${blip.rgscId}`);
  drawBlips();
  return blip;
};

const getBlips = async () => {
  const blips = await Blip.find();
  return blips;
};

const getBlip = async (name) => {
  const blip = await Blip.find({ name });
  return blip;
};

const drawBlips = async () => {
  destroyCurrentBlips();

  const blips = await getBlips();
  blips.map((blip) => {
    const newBlip = mp.blips.new(blip.sprite, blip.position, {
      name: blip.label,
      scale: blip.scale,
      color: blip.color,
      shortRange: blip.shortRange,
    });
    currentBlips.push(newBlip);
  });
  sendLog("INFO", `{entities.blip} load : ${blips.length}`);
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
  updateBlip,
  getBlips,
  getBlip,
};
