# Use the weather picker
The weather picker works **only on desktop** and is not intended for mobile use. It resides at `windyApi.picker`. It can be opened programmatically by calling `.open({ lat, lon })` or closed by `.close()` methods.

If the picker is opened outside of the visible map, it can lead to an exception or it is closed afterwards. Also panning the map, so the picker gets outside the map, leads to auto closing of the picker. The picker emits messages about its own state, so use methods `.on(), .off()` or `.once()` to observe `pickerOpened`, `pickerClosed` and `pickerMoved` broadcasts.

While the picker is opened, use its method `.getParams()` to get picker coordinates and raw meteorological values in the location of the picker.

## Converting raw meteorological values to readable numbers
Raw meteorological units returned from the weather picker are usually described in respective documentation for `ECMWF`, `GFS` or other used forecast models. Use `windApi.utils` to convert these values to something more useful.

Most popular overlays have these values:

### wind
Array `[ U, V ]`, where U and V are wind vectors in `m/s`. To compute wind magnitude and direction use `utils.wind2obj( values )`, which returns `{ dir: 210.4334, wind: 10.2 }`

### temperature, dewPoint
Temperature in `K`

### rain, rainAccumulation
Rain for a duration of 3 hours or the selected accumulation period in `mm`

### waves, swell
Array `[ U, V, size]` where U and V are direction vectors and wave size is in `m`. Period in seconds is computed as `Math.sqrt( U * U + V * V )`. Use `utils.wave2obj( values )`, which returns `{ dir: 325.9878, size: 2.4, period: 8 }`

To convert values to user's selected metrics use `.convertNumber(num)` or `.convertValue(num)` methods of respective `overlays` instance. While `converNumber` just recalculates value and return a number, `convertValue` adds name of a metric and returns a string. For example `overlays.wind.convertNumber(10)`  returns 19, while `overlays.wind.convertValue(10)` return "19kt".

