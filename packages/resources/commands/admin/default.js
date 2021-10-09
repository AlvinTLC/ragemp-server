const Chat = require("../../../utils/chat.js");
const { hasPermission } = require("../../../utils/player.js");

mp.events.addCommand("goto", (player, args, targetID) => {
    if (!targetID) {
        Chat.sendError(player, "ID to go is undefined");
        return;
    }

    if (!hasPermission(player, "admin")) {
        Chat.sendNotAllowed(player);
        return;
    }

    const target = mp.players.at(targetID);
    if (!target) {
        Chat.sendError(player, targetID + " is undefined");
        return;
    }

    player.position = target.position;
    Chat.sendSuccess(player, "Goto to " + target.name);
    Chat.sendSuccess(target, "An admin go to you " + player.name);
});

mp.events.addCommand("tp", (player, args, x, y, z) => {
    if (!x || !y || !z) {
        Chat.sendError(player, "Invalid coords {x, y ,z}");
        return;
    }

    if (!hasPermission(player, "admin")) {
        Chat.sendNotAllowed(player);
        return;
    }

    player.position = new mp.Vector3(x, y, z)
    Chat.sendSuccess(player, "Goto to " + {x, y, z});
});



mp.events.addCommand(
    "weapon",
    (player, args, weapon = "WEAPON_COMBATPISTOL", ammo) => {
        let weaponHash = mp.joaat(weapon);
        player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
    }
);

mp.events.addCommand("car", (player, args, car) => {
    let carModel = mp.joaat(car);
    mp.vehicles.new(carModel, player.position, {
        numberPlate: "ADMIN",
    });
});
