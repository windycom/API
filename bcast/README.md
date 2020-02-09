# Observe what is happening inside
Major broadcasts are emitted by `windyApi.broadcast`. Receiving and emitting messages in Windy API has the usual syntax and methods: `on, off, once, fire`.

Tip: Use `verbose: true` as a parameter in start up `options` to see a nice colorful output in the browser's console.

## Main broadcasts
### mapChanged
After the Leaflet map has been panned or zoomed.

### paramsChanged
When a user changes some parameters (overlay, level, date etc...). Do not use this event to start any intensive action since Windy must now load and render all the data. Use `redrawFinished` instead.

### redrawFinished
Triggered when Windy has successfully loaded and rendered requested data. Use this for triggering your own tasks.

### metricChanged
After some of the units (wind, temp, ...) have been changed.

### rqstOpen, rqstClose, closeAll
Requests to load and open or close lazy loaded plugins (see later)

### pluginOpened, pluginClosed
Lazy loaded plugin was successfully loaded and opened/closed

### redrawLayers
Forces various renderers to render layers, for example after reconfiguring color gradient or changing particle animation settings.

### uiChanged
Whenever the User Interface has been changed. Information for other UI components to recalculate their respective sizes and adapt themselves to the new layout.
