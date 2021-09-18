const request = require("request");

const WEATHER_VALUES = {
    Sunny: "EXTRASUNNY",
    Clear: "EXTRASUNNY",
    Cloudy: "CLOUDS",
    Overcast: "OVERCAST",
    Mist: "FOGGY",
    Blizzard: "BLIZZARD",
    Fog: "FOGGY",
};

class Weather {
    constructor(city) {
        this.city = city;
        this.get();
        this.render();
    }

    get() {
        request(
            `http://api.weatherapi.com/v1/current.json?key=dc465e81fdd5444dade164858211709&q=${this.city}`,
            (error, response, data) => {
                if (dataFixed) {
                    const dataFixed = JSON.parse(data);
                    mp.world.setWeatherTransition(
                        WEATHER_VALUES[dataFixed.current.condition.text] || RAIN,
                        30000
                    );
                }
            }
        );
    }

    render() {
        setInterval(() => {
            this.get();
        }, 60000);
    }
}

const weather = new Weather("Los Angeles, CA");
