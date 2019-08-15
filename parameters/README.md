# Change Windy parameters

Main Windy parameters like overlay, level, and forecast model are identified by a string identifier, for example `overlay` can be `rainAccu`, or `level` can be `850h`.

The state of the Windy map is then stored in the key-value store which can be used via `windyAPI.store`. Use methods `.get(key)` or `.set(key,value)` to read or modify values.

Handy method `.getAllowed(key)` will return an array of allowed values for a given key.

Windy parameters can be changed at **start-up** (using start-up `options` object) which can lead to a faster loading time.

Parameters can also be changed during **runtime**.

`windyAPI.store` is also an Event Emitter so observe changes of parameters with methods `.on(), .off()`, or `.once()`.

## Main items stored in windyAPI.store
### overlay
Color weather overlay.

### level
Level used for actual displayed overlay or isolines. To get a list of available levels for the current combination of overlay and data provider, use `store.get('availLevels')`

### availLevels
List of levels that are available for the current combination of product and overlay.

### acTime
Accumulated time.

### timestamp
Timestamp of actual weather moments. Use freely and without hesitation.

### isolines
Isolines displayed over the map.

### product
Product is a set of weather data that have the same resolution, boundaries, time range, and so on. For simplification, you can think of product as a weather model. 

### particlesAnim
Animation of wind/waves particles over the map. Set the value to `on`, or `off` if you want to hide or show them.

### graticule
Display the graticule over the map. Set it to `true` or `false`.

### latlon
Display lat/lon values on the weather picker. Set it to `true` or `false`.

### englishLabels
Show English map labels instead of localized labels. Set it to `true` or `false`.

### lang
Desired language for Windy. By default, the language is determined by the user's browser settings and set to `auto`.

### hourFormat
Time format, Set it to `12h` or `24h`.

### numDirection
Display directions in Weather picker as a number or string (for example NW). Set it to `true` or `false`..

### favOverlays
List of overlays that are displayed in the overlays menu. Always create a new array when you want to modify this list (`.store` is primitive and can't compare arrays)



