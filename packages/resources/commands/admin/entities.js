const { hasPermission } = require("../../../utils/player.js");
const Chat = require("../../../utils/chat.js");

//Blips
mp.events.addCommand("gets.blip", async (player, args, limit) => {
    if (!hasPermission(player, "admin")) {
        Chat.sendNotAllowed(player);
        return;
    }
    const { getBlips } = require("../../entities/blip.js");
    let blips = await getBlips();
    blips = limit != null && limit > 0 ? blips.slice(0, limit) : blips;
    blips.forEach((blip) => {
        Chat.sendSuccess(player, blip._id + " " + blip.label);
    });
});

mp.events.addCommand(
    "new.blip",
    async (player, args, name, sprite, label, scale, color, shortRange) => {
        if (!hasPermission(player, "admin")) {
            Chat.sendNotAllowed(player);
            return;
        }
        const { createBlip } = require("../../entities/blip.js");
        const blip = await createBlip({
            name,
            sprite,
            position: player.position,
            label,
            scale,
            color,
            shortRange,
        });
        Chat.sendSuccess(
            player,
            "Entity created " + blip._id + " - " + blip.label
        );
    }
);

mp.events.addCommand("delete.blip", async (player, args, id) => {
    if (!hasPermission(player, "admin")) {
        Chat.sendNotAllowed(player);
        return;
    }

    if (!id) {
        Chat.sendError(player, "ID invalid");
        return;
    }

    const { deleteBlip } = require("../../entities/blip.js");
    const blip = await deleteBlip(id);
    if (blip != null) {
        Chat.sendSuccess(
            player,
            "Entity deleted " + blip._id + " - " + blip.label
        );
        return;
    }
    Chat.sendError(player, "Entity invalid " + id);
});
