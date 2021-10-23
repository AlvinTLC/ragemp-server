let viewMode = 0;

mp.events.add("render", () => {
  if (mp.game.controls.isControlJustReleased(0, 0)) {
    viewMode = viewMode === 0 ? 4 : 0;
  }
  mp.game.cam.setFollowPedCamViewMode(viewMode);
  mp.game.cam.setFollowVehicleCamViewMode(viewMode);
});
