mp.events.addCommand('weather', (player) => {
    player.outputChatBox(`Weather : Los Santos, ${mp.world.weather}`);
});

mp.events.addCommand('time', (player) => {
    const textTime = mp.world.time.hour > 12 ? "PM" : "AM";
    player.outputChatBox(`Time : Los Santos, ${mp.world.time.hour}:${mp.world.time.minute}${textTime}`);
});