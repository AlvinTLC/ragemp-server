const UI_CONFIG = require("./config/ui.js");
const COMPONENTS_TO_DISABLE = UI_CONFIG.native.components;

mp.events.add("render", () => {
  COMPONENTS_TO_DISABLE.map((component) =>
    mp.game.ui.hideHudComponentThisFrame(component.id)
  );
});
