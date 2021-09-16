const vehiclesWithoutRadar = [8, 13];

mp.game.ui.displayRadar(false);

mp.events.add("playerEnterVehicle", (vehicle, seat) => {
    let vehicleWithoutRadar = vehiclesWithoutRadar.includes(vehicle.getClass()); 
    let pilot = -1, copPilot = 0;
    if (vehicleWithoutRadar || seat !== pilot && seat !== copPilot) {
        mp.game.ui.displayRadar(false);
    } else {
        mp.game.ui.displayRadar(true);
    }
});

mp.events.add("playerLeaveVehicle", (vehicle, seat) => {
    mp.game.ui.displayRadar(false);
});
