const CHAT = require("../config/chat.js");

class Chat {
    static sendNotAllowed(player) {
        player.outputChatBox(`!{${CHAT.COLORS.ERROR}}${CHAT.TEXT.NOT_ALLOWED}`);
    }

    static sendCustom(player, message, color) {
        player.outputChatBox(`!{${color}}${message}`);
    }

    static sendWarning(player, message) {
        player.outputChatBox(`!{${CHAT.COLORS.WARNING}}${message}`);
    }

    static sendSuccess(player, message) {
        player.outputChatBox(`!{${CHAT.COLORS.SUCCESS}}${message}`);
    }

    static sendError(player, message) {
        player.outputChatBox(`!{${CHAT.COLORS.ERROR}}${message}`);
    }
}

module.exports = Chat;
