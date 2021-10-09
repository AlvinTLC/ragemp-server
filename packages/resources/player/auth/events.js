const {
    createPlayer,
    updatePlayer,
    existsPlayer,
    loadPlayer,
} = require("./player.js");

const DATABASE = require("../../../config/database.js");

mp.events.add("playerReady", async (player) => {
    const socialClub = player.rgscId;
    const isPlayerRegistered = await existsPlayer(socialClub);

    if (isPlayerRegistered) {
        await loadPlayer(player);
    } else {
        const newPlayer = await createPlayer({
            socialClub: socialClub,
            name: player.name,
            ip: player.ip,
            permissions: "admin",
        });
        await loadPlayer(player);
    }
});

mp.events.add("playerQuit", async (player) => {
    const socialClub = player.rgscId;
    await updatePlayer(player, socialClub);
});

mp.events.add("serverShutdown", async () => {
    mp.events.delayShutdown = true;
    mp.players.forEach(async (player) => {
        const socialClub = player.rgscId;
        await updatePlayer(player, socialClub);
        Log.sendConsole(
            "INFO",
            `Player saved : ${player.name} | ${socialClub}`
        );
    });
    mp.events.delayShutdown = false;
});

setInterval(() => {
    mp.players.forEach(async (player) => {
        const socialClub = player.rgscId;
        await updatePlayer(player, socialClub);
    });
}, DATABASE.AUTO_SAVE_INTERVAL);
