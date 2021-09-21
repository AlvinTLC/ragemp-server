mp.events.add('server:occupied:set', (player, boolean) => {
    player.setVariable('occupied', boolean);
});