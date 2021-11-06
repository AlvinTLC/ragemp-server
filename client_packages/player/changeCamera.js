let currentViewMode = 0;

mp.events.add("render", () => {
  if (mp.game.controls.isControlJustReleased(0, 0)) {
    currentViewMode = currentViewMode === 0 ? 4 : 0;
  }
  mp.game.cam.setFollowPedCamViewMode(currentViewMode);
  mp.game.cam.setFollowVehicleCamViewMode(currentViewMode);

  if (currentViewMode === 4) {
    mp.game.controls.disableControlAction(0, 21, true); //disable shift (run)
  }
});
