const { draw2D } = require("./utils/text.js");

const playerLocal = mp.players.local;
const vehiclesWithoutInformation = [8, 13];
let uiActive = false;

mp.events.add("render", () => {
    if (uiActive) {
        const vehicle = playerLocal.vehicle;
        
        //MPH
        let currentMPH = (vehicle.getSpeed() * 2.23694).toFixed();
        draw2D({
            text: currentMPH + "mph",
            position: [0.5, 0.5],
            font: 4,
            color: [169, 169, 169, 255],
            scale: 0.5,
            rightAlign: false,
        })
    }
});

mp.events.add("playerEnterVehicle", (vehicle, seat) => {
    let vehicleWithoutInformation = vehiclesWithoutInformation.includes(
        vehicle.getClass()
    );
    let pilot = -1,
        copPilot = 0;
    if (vehicleWithoutInformation || (seat !== pilot && seat !== copPilot)) {
        uiActive = false;
    } else {
        uiActive = true;
    }
});

mp.events.add("playerLeaveVehicle", (vehicle, seat) => {
    uiActive = false;
});
