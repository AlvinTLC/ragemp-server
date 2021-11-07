const request = require("request");
const WORLD_SETTINGS = require("../../../config/world.js").WEATHER;

const WEATHER_VALUES = {
  Sunny: "EXTRASUNNY",
  Clear: "EXTRASUNNY",
  Cloudy: "CLOUDS",
  Overcast: "OVERCAST",
  Mist: "FOGGY",
  Blizzard: "BLIZZARD",
  Fog: "FOGGY",
};
let currentWeather = undefined;

const setWeather = () => {
  request(
    `http://api.weatherapi.com/v1/current.json?key=dc465e81fdd5444dade164858211709&q=${WORLD_SETTINGS.ZONE}`,
    (error, response, data) => {
      if (data) {
        const dataFixed = JSON.parse(data);
        currentWeather =
          WEATHER_VALUES[dataFixed.current.condition.text] || RAIN;

        mp.world.setWeatherTransition(currentWeather, 30000);
      }
    }
  );
};

const getWeather = () => {
  return currentWeather;
};

const refreshWeather = () => {
  setInterval(() => {
    setWeather();
  }, WORLD_SETTINGS.REFRESH_TIME);
};

(() => {
  setWeather();
  refreshWeather();
})();

module.exports = {
  getWeather,
};
