mp.events.add("render", () => {
    mp.game.ui.hideHudComponentThisFrame(1); //HUD_WANTED_STARS
    mp.game.ui.hideHudComponentThisFrame(3); //HUD_CASH
    mp.game.ui.hideHudComponentThisFrame(6); //HUD_VEHICLE_NAME
    mp.game.ui.hideHudComponentThisFrame(7); //HUD_AREA_NAME
    mp.game.ui.hideHudComponentThisFrame(8); //HUD_VEHICLE_CLASS
    mp.game.ui.hideHudComponentThisFrame(9); //HUD_STREET_NAME
    mp.game.ui.hideHudComponentThisFrame(20); //HUD_WEAPON_WHEEL_STATS
});