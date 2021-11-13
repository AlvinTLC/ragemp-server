const {
  getBlips,
  createBlip,
  deleteBlip,
} = require("../../../entities/blip/controller.js");

const {
  sendChatNotAllowed,
  sendChatSuccess,
  sendChatError,
} = require("../../../../utils/chat.js");

mp.events.addCommand("gets.blip", async (player, args, limit) => {
  if (player.getVariable("user").permissions !== "admin") return;

  let blips = await getBlips();
  blips = limit != null && limit > 0 ? blips.slice(0, limit) : blips;
  blips.map((blip) => {
    sendChatSuccess(player, blip._id + " " + blip.label);
  });
});

mp.events.addCommand(
  "new.blip",
  async (player, args, name, sprite, label, scale, color, shortRange) => {
    if (player.getVariable("user").permissions !== "admin") return;
    console.log("pasa");
    label = label.split(".").join(" "); //transform "." to space
    const blip = await createBlip({
      player,
      name,
      sprite,
      position: player.position,
      label,
      scale,
      color,
      shortRange,
    });
    sendChatSuccess(player, "Entity created " + blip._id + " - " + blip.label);
  }
);

mp.events.addCommand("delete.blip", async (player, args, id) => {
  if (player.getVariable("user").permissions !== "admin") return;

  if (!id) {
    sendChatError(player, "ID invalid");
    return;
  }

  const blip = await deleteBlip(id);
  if (blip != null) {
    sendChatSuccess(player, "Entity deleted " + blip._id + " - " + blip.label);
    return;
  }
  sendChatError(player, "Entity invalid " + id);
});
