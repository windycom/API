# Windyty API v2.0
Windyty API is set of code and resources for displaying interactive animated map of weather forecast, based on GFS model. Use of this version of Windyty API is free for the time being as long as Widyty logo and link to Windyty website will be visible on a map. API key can be obtained [here](http://goo.gl/forms/MAzmHl8Cuy) (please allow some time till we manually generate the key)

## Tutorial
### [Chapter 1: Hello World](http://api.windyty.com/examples/hello_world/)
### [Chapter 2: Change of map params](http://api.windyty.com/examples/navigation/)
### [Chapter 3: Change of metrics](http://api.windyty.com/examples/metrics/)
### [Chapter 4: Change of time](http://api.windyty.com/examples/timeline)

## Known BUG
In order to have visually nice waves and currents overlays, we use small trick to achieve this. We use transparent Leaflet map tiles and we position them **above** weather layer in sea types of forecast. While some of the Leaflet map objects (like markers and popups) are fine, some of the map objects become hidden, behind map tiles. We are unable to do anything with this.

## No technical support
We are working hard on Windyty.com and therefore we can not provide you with any support. Try to drop a line on our [forum](https://forum.windyty.com)
