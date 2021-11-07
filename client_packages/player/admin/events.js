const { startNoClip, stopNoClip } = require("./player/admin/controller.js");

mp.events.add("client_packages/player/admin/events//toggleNoclip", (player) => {
  isNoClip = !isNoClip;
  mp.game.ui.displayRadar(!isNoClip);
  if (isNoClip) {
    startNoClip();
  } else {
    stopNoClip();
  }
});
