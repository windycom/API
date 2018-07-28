# `.store`: Changing Windy parameters
Main Windy parameters like overlay, level and forecast model are identified by string identifier, for example `overlay` can be `rainAccu`, or `level` can be `850h`.

State of Windy map is then stored in key-value store, that can be used via `windyAPI.store`. Use methods `.get(key)` or `.set(key,value)` to read or modify values.

Handy method `.getAllowed(key)` will return array of allowed values for given key.

Windy parameters can be changed at **start-up** (using start-up `options` object) which can lead to faster loading time.  

Parameters can be also changed during **runtime**.


`windyAPI.store` is also Event Emitter so observe change of parameters with methods `.on(), .off()`, or `.once()`.

## Main items stored in windyAPI.store
### overlay
Color weather overlay. 

### level
Level used for actually displayed overlay or isolines. To get list of available levels for current combination of overlay and data provider use `store.get('availLevels')` 

### availLevels
List of levels, that are available for current combination of product and overlay.

### acTime
Accumulated time. 

### timestamp
Timestamp of actual weather moment. Use freely and without hesitation.

### isolines
Isolines displayed over the map.

### product
Product is set of weather data, that have same resolution, boundaries, time range and so on. For simplification, you can think of product as a weather model. 

### particlesAnim
Animation of wind/waves particles over the map. Set value to `on`, or `off` if you want to hide or show them.

### graticule
Display graticule over the map. Set it to `true` or `false`.

### latlon
Display lat/lon values on weather picker. Set it to `true` or `false`.

### englishLabels
Show English map labels instead of localized labels. Set it to `true` or `false`.

### lang
Desired language for Windy. By default lang is determined by user's browser setting and set to `auto`. 

### hourFormat
Time format, Set it to `12h` or `24h`.

### numDirection 
Display directions in Weather picker as number or as a string (for example NW). Set it to `true` or `false`..

### favOverlays
List of overlays, that are displayed in overlays menu. Always create new array, when you want to modify this list (`.store` is primitive and can't compare arrays)



