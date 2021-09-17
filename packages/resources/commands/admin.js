mp.events.addCommand('duty', (player) => {
    player.admin = true;
});


mp.events.addCommand('weapon', (player, args, weapon = "WEAPON_COMBATPISTOL", ammo) => {
    let weaponHash = mp.joaat(weapon);
    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
});


mp.events.addCommand('car', (player, args, car) => {
    let carModel = mp.joaat(car);
    mp.vehicles.new(carModel, player.position,
    {
        numberPlate: "ADMIN",
        color: [[0, 255, 0],[0, 255, 0]]
    });
});


