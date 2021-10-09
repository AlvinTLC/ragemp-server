const Player = require("../../../models/Player.js");
const Log = require("../../../utils/log.js");

const createPlayer = async ({ socialClub, name, ip, permissions }) => {
    const newPlayer = new Player({ socialClub, name, ip, permissions });
    await newPlayer.save();
    Log.sendConsole("INFO", `Player created : ${newPlayer.name} | ${newPlayer.socialClub}`);
    return newPlayer;
};

const getPlayer = async (socialClub) => {
    const playerData = await Player.findOne({ socialClub });
    return playerData;
};

const updatePlayer = async (player, socialClub) => {
    const dataToUpdate = {
        permissions: player.getVariable("permissions"),
    };
    const playerUpdated = await Player.findOneAndUpdate(
        { socialClub },
        dataToUpdate
    );
    return playerUpdated;
};

const existsPlayer = async (socialClub) => {
    const playerData = await getPlayer(socialClub);
    if (playerData != undefined) {
        return true;
    }
    return false;
};

const loadPlayer = async (player) => {
    const socialClub = player.rgscId;
    const playerData = await getPlayer(socialClub);

    //RAGEMP DATA
    Object.keys(playerData._doc).forEach((key, index) => {
        setTimeout(() => {
            player.setVariable(key, playerData._doc[key]);
        }, 100)
    });

    Log.sendConsole("INFO", `Player loaded : ${player.name} | ${socialClub}`);
    return playerData;
};

module.exports = {
    createPlayer,
    getPlayer,
    updatePlayer,
    existsPlayer,
    loadPlayer
}