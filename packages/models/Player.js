const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    socialClub: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
        unique: true,
    },
    permissions: {
        type: String,
        required: true,
    },
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
