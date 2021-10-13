setInterval(() => {
    mp.players.forEach(player => {
        if (player.ping > 300) {
            player.setVariable("highPing", true)
        } else {
            player.setVariable("highPing", false)
        }; 
    });
}, 2000);