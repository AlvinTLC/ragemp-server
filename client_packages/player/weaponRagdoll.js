const player = mp.players.local;
const blacklistedWeapons = [416676503, 3337201093, 860033945, 970310034, 1159398588, 3082541095, 2725924767];

mp.events.add("render", () => {
    let selectedWeapon = mp.game.invoke(`0x0A6DB4965674D243`, mp.players.local.handle);
    let typeWeapon = mp.game.weapon.getWeapontypeGroup(selectedWeapon);

    if (blacklistedWeapons.includes(typeWeapon)) {
        let aiming = player.getConfigFlag(78, true)
        let shotting = player.isShooting();
        let reloading = player.isReloading();
    
        if (aiming || shotting || reloading) {
            mp.game.controls.disableControlAction(0, 22, true); //Space control
        }
    }
});