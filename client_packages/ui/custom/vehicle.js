const { draw2D } = require("./utils/text.js");

const player = mp.players.local;
const vehiclesWithoutInformation = [8, 13];
let uiActive = false;

const getStreetInfo = (coords) => {
  let streetInfo = {};

  const street = mp.game.pathfind.getStreetNameAtCoord(
    coords.x,
    coords.y,
    coords.z,
    0,
    0
  );
  const zoneName = mp.game.ui.getLabelText(
    mp.game.zone.getNameOfZone(coords.x, coords.y, coords.z)
  );
  let streetLabel = mp.game.ui.getStreetNameFromHashKey(street.streetName);

  if (street.crossingRoad && street.crossingRoad != street.streetName)
    streetLabel += ` / ${mp.game.ui.getStreetNameFromHashKey(
      street.crossingRoad
    )}`;

  streetInfo.name = streetLabel;
  streetInfo.zone = zoneName;
  return streetInfo;
};

mp.events.add("render", () => {
  if (uiActive) {
    const vehicle = player.vehicle;
    const coords = player.position;

    const street = getStreetInfo(coords);
    const currentMPH = (vehicle.getSpeed() * 2.23694).toFixed();

    let lightState = vehicle.getLightsState(1, 1);
    const isLightsOn = lightState.lightsOn == 1 || lightState.highbeamsOn == 1;
    const lightsLabel = isLightsOn ? "L " : "NL";

    draw2D({
      text: `${currentMPH}mph  ${street.name}`,
      position: [0.19, 0.885],
      font: 4,
      color: [209, 209, 209, 255],
      scale: 0.4,
      rightAlign: false,
    });
    draw2D({
      text: `${street.zone}`,
      position: [0.19, 0.905],
      font: 4,
      color: [185, 185, 185, 255],
      scale: 0.4,
      rightAlign: false,
    });
    draw2D({
      text: `${lightsLabel}`,
      position: [0.19, 0.925],
      font: 4,
      color: [185, 185, 185, 255],
      scale: 0.3,
      rightAlign: false,
    });
  }
});

mp.events.add("playerEnterVehicle", (vehicle, seat) => {
  let vehicleWithoutInformation = vehiclesWithoutInformation.includes(
    vehicle.getClass()
  );
  const pilot = -1,
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
