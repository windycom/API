# Observe what is happening inside
Major broadcasts are emmited by `windApi.broadcast`. Recieving and emmiting messages in Windy API has usuall syntax and methods: `on, off, once, fire`. 

Tip: Use `verbose: true` as a parameter in start up `options` to see nice colorfull output in browser's console.
   
## Main broadcasts
### mapChanged
After Leaflet map has been panned or zoomed.

### paramsChanged
When user changes some paramters (overlay, level, date etc...). Do not not use this event to start any intensive action since Windy now must load and render all the data. Use `redrawFinished` instead.

### redrawFinished
Triggered when Windy has succesfully loaded and rendered requested data. Use this for triggering your own tasks.

### metricChanged
After some of the units (wind, temp, ...) has been changed.

### rqstOpen, rqstClose, closeAll
Requests to load and open or close lazy loaded plug-ins (see later)

### pluginOpend, pluginClosed
Lazy loaded plugin was sucessully loaded and opend/closed

### redrawLayers
Forces various renderers to render layers, for example after reconfiguring  color gradient, or changing particle animation settings.

### uiChanged
Whenever User Interface has been changed. Information for other UI components to recalculate their respective sizes and adapt themselfs to new layout.
