const { requestClipSet } = require("./utils/animation.js");

const player = mp.players.local;

const config = {
  movementClipSet: "move_ped_crouched",
  strafeClipSet: "move_ped_crouched_strafing",
  clipSetSwitchTime: 1.0,
};
let crouching = false;

const canCrouch = () => {
  return player.isOnFoot() && !player.isJumping();
};

requestClipSet(config.movementClipSet);
requestClipSet(config.strafeClipSet);

mp.events.add("render", () => {
  mp.game.controls.disableControlAction(0, 36, true); //Disable CTRL (silence mode)

  if (crouching) {
    mp.game.controls.disableControlAction(0, 0, true); //VKey (camera)
    mp.game.controls.disableControlAction(0, 22, true); //SpaceKey
    if (!player.isOnFoot()) {
      player.resetMovementClipset(config.clipSetSwitchTime);
      player.resetStrafeClipset();
      crouching = false;
    }
  }
});

mp.events.add("render", () => {
  if (mp.game.controls.isControlJustReleased(0, 60) && canCrouch()) {
    if (crouching) {
      player.resetMovementClipset(config.clipSetSwitchTime);
      player.resetStrafeClipset();
      crouching = false;
      return;
    }
    player.setMovementClipset(config.movementClipSet, config.clipSetSwitchTime);
    player.setStrafeClipset(config.strafeClipSet);
    crouching = true;
    return;
  }
});
