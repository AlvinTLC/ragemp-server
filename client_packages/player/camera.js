let viewMode = 0;

mp.events.add("render", () => {
    if (mp.game.controls.isControlJustReleased(0, 0)) {
        if (viewMode === 0) {
            viewMode = 4;
        } else {
            viewMode = 0;
        }
    }
    mp.game.cam.setFollowPedCamViewMode(viewMode);
    mp.game.cam.setFollowVehicleCamViewMode(viewMode);
});
