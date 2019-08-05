const options = {
    key: 'PsLAtXpsPTZexBwUkO7Mx5I', // REPLACE WITH YOUR KEY !!!

    // Tip: Use verbose true for nice console output
    // verbose: true
};

windyInit(options, windyAPI => {
    const { store, broadcast } = windyAPI;
    // broadcast is main Windy's event emmiter that
    // let you know what is happening inside

    // Change overlays programatically
    const overlays = ['rain', 'wind', 'temp', 'clouds'];
    let i = 0;

    setInterval(() => {
        i = i === 3 ? 0 : i + 1;
        store.set('overlay', overlays[i]);
    }, 800);

    // Observe the most important broadcasts
    broadcast.on('paramsChanged', params => {
        console.log('Params changed:', params);
    });

    broadcast.on('redrawFinished', params => {
        console.log('Map was rendered:', params);
    });
});
