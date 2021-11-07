const { getWeather } = require("./controller.js");

mp.events.addProc(
  "packages/resources/world/time/shared//getWeather",
  (player) => {
    return getWeather();
  }
);
