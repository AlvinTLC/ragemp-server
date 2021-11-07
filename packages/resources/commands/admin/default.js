mp.events.addCommand(
  "weapon",
  (player, args, weapon = "WEAPON_COMBATPISTOL", ammo) => {
    let weaponHash = mp.joaat(weapon);
    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
  }
);

mp.events.addCommand("duty", (player, args, car) => {
  player.model = mp.joaat("s_f_y_cop_01");
});

mp.events.addCommand("car", (player, args, car) => {
  let carModel = mp.joaat(car);
  const carSpawned = mp.vehicles.new(carModel, player.position, {
    numberPlate: "ADMIN",
    color: [
      [255, 255, 255],
      [255, 255, 255],
    ],
  });
  player.putIntoVehicle(carSpawned, 0);
});

mp.events.addCommand("noclip", (player) => {
  player.call("client_packages/player/admin/events//toggleNoclip");
});
