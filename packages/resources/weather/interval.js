var weatherVariations = ['EXTRASUNNY', 'CLOUDS', 'FOGGY', 'RAIN', 'THUNDER', 'CLEARING', 'CLEAR'];

let actual = 0;

setInterval(() => {
    actual = weatherVariations.length != actual ? actual + 1 :  0;
    mp.world.setWeatherTransition(weatherVariations[actual]);
    console.log(weatherVariations[actual]);
}, 3000);