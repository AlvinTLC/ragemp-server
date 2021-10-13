mp.events.add("server:player:events:setVariable", (player, name, value) => {
    player.setVariable(name, value);
});

mp.events.add("server:player:events:getVariable", (player, name) => {
    return player.getVariable(name);
});