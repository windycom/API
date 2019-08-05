const options = {
    key: 'PsLAtXpsPTZexBwUkO7Mx5I', // REPLACE WITH YOUR KEY !!!
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
};

windyInit(options, windyAPI => {
    const { picker, utils, broadcast } = windyAPI;

    picker.on('pickerOpened', latLon => {
        // picker has been opened at latLon coords
        console.log(latLon);

        const { lat, lon, values, overlay } = picker.getParams();
        // -> 50.4, 14.3, 'wind', [ U,V, ]
        console.log(lat, lon, values, overlay);

        const windObject = utils.wind2obj(values);
        console.log(windObject);
    });

    picker.on('pickerMoved', latLon => {
        // picker was dragged by user to latLon coords
        console.log(latLon);
    });

    picker.on('pickerClosed', () => {
        // picker was closed
    });

    // Wait since wather is rendered
    broadcast.once('redrawFinished', () => {
        picker.open({ lat: 48.4, lon: 14.3 });
        // Opening of a picker (async)
    });
});
