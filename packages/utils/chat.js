const CHAT = require("../config/chat.js");

const sendChatNotAllowed = (player) => {
  player.outputChatBox(`!{${CHAT.COLORS.ERROR}}${CHAT.TEXT.NOT_ALLOWED}`);
};

const sendChatCustom = (player, message, color) => {
  player.outputChatBox(`!{${color}}${message}`);
};

const sendChatWarning = (player, message) => {
  player.outputChatBox(`!{${CHAT.COLORS.WARNING}}${message}`);
};

const sendChatSuccess = (player, message) => {
  player.outputChatBox(`!{${CHAT.COLORS.SUCCESS}}${message}`);
};

const sendChatError = (player, message) => {
  player.outputChatBox(`!{${CHAT.COLORS.ERROR}}${message}`);
};

module.exports = {
  sendChatNotAllowed,
  sendChatCustom,
  sendChatWarning,
  sendChatSuccess,
  sendChatError,
};
