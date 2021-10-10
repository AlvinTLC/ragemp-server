const request = require("request");
const nameZone = "Los Angeles, CA";
const halfHourInMilliseconds = 1_800_000

const WEATHER_VALUES = {
    Sunny: "EXTRASUNNY",
    Clear: "EXTRASUNNY",
    Cloudy: "CLOUDS",
    Overcast: "OVERCAST",
    Mist: "FOGGY",
    Blizzard: "BLIZZARD",
    Fog: "FOGGY",
};

const setWeather = () => {
    request(
        `http://api.weatherapi.com/v1/current.json?key=dc465e81fdd5444dade164858211709&q=${nameZone}`,
        (error, response, data) => {
            if (data) {
                const dataFixed = JSON.parse(data);
                mp.world.setWeatherTransition(
                    WEATHER_VALUES[dataFixed.current.condition.text] || RAIN,
                    30000
                );
            }
        }
    );
};

const refreshWeather = () => {
    setInterval(() => {
        setWeather();
    },  halfHourInMilliseconds);
};

(() => {
    setWeather();
    refreshWeather();
})();
