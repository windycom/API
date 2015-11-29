# Windyty API v1.0
Windyty API is set of code and resources for displaying interactive animated map of weather forecast, based on GFS model.

Use of this version of Windyty API is free for time being as long as Windyty logo and link to Windyty website will be visible on a map.

## How Windyty works
Windyty introduces global object `W` and uses system of modules. Http module  is for example located at `W.http` and broadcast module is located at `W.broadcast`. 

Your API code will communicate with Windyty by recieving or emmiting broadcasting messages, via `W.broadcast.on, off, once, fire`, for example like this:

        // Lets's wait till map is completelly rendered...
        W.broadcast.on('redrawFinished',function(params) {

            // ...than show temperature overlay, by firing
            // redraw message with required parametrs
            W.broadcast.emit('redraw',{ 
                                        overlay: 'temp',
                                        level:   'surface',
                                        model:   'gfs',
                                        product: 'gfs',
                                        path:    '2015/12/07/15' 
                                    })
        })

Windyty uses Leaflet library, version 0.7.5,  to display map. Leaflet occupies global object `L`.

You can use well documented [Leaflet API](http://leafletjs.com/) to do anything with Windyty map, including enormous number of Leaflet plugins. Leaflet map is already initilized in Windyty, and Leaflet map object is aviable via `W.maps`. Adding a marker to Windyty map looks for example like this:

        L.marker([51.5, -0.09]).addTo( W.maps )

If you decide to visualise your own weather data, you will have to extend some of Windyty classes. Windyty classes have first capital letter and can be extended by `extend` method like this:

    var ozoneLayerOverlay = W.Overlay.extend({
        // additional methods and stuff
    });

## Hello world
Get your API key at this address, and then create html file with following code:

    <!DOCTYPE html>
    <html>
      <head>
        <style type="text/css">
          html, body { height: 100%; margin: 0; padding: 0; }
          #windyty { height: 80%; width: 80%; position: absolute; top: 10%; left: 10%; }
        </style>
      </head>
      <body>

        <!-- Include div with 'windyty' id to your page -->
        <div id="windyty"></div>

        <script type="text/javascript">

            // Windyty API key
            var windytyKey = 'XpsPTZexBwUkO7Mx5I';

            // Optional: version of API you want to use
            var windytyVersion = '1.0';  

            // windytyMain() is called as soon as Windyty API
            // will be ready 
            function windytyMain() {

                // Put your JS code here
                console.log('Hello world')
            }

        </script>

        <!-- Load Windyty API -->
        <script async defer src="http://api.windyty.com/js/boot.js"></script> 

      </body>
    </html>

Wow, how easy it is.

## Define Windyty start-up parameters
By default, Windyty API is launched with wind overlay and nearest aviable forecast. To define initail state of the map, use `windytyInit` object. Hello world script will then look like this:

        var windytyKey = 'XpsPTZexBwUkO7Mx5I';

        var windytyInit = {

            // initial state of the map
            lat: 50.4,
            lon: 14.3,
            zoom: 8,

            // initially displayed forecast
            overlay: 'gust',
            level: 'surface', 
            path: '2015/11/24/03',

        }

        function windytyMain() { ... }



## Use Windyty to visualize your own weather data

Windyty uses two classes for data management: `W.Product` and `W.Overlay`, and one class for visualisation: `W.Particles`. To display your own data, you will have to make your own instances of these classes, or use instances, that are already part of Windyty API.

### W.Product
Product is set of weather data, that share same density, coverage, are issued in the same intervals and reside in the same directories. Product contain methods to load and display the product on a map.

Windyty has for example follofing instances of W.Product: `W.products.gfs` and `W.products.waves`.

If you want to visualise your own data set you will have to make your own instance of W.Product, that describe your own product.

### W.Overlay
Overlay is set of colors and conversion functions, that identify color overlay.

If your data files will have same metrics as Windyty metric, then you can use existing instances of W.Overlay classes, that reside in `W.overlays.wind, W.overlays.temp` and so on. If not, you will have to create your own instances of overlays, where you define your own metrics and colors. 

### W.Particles
Particles are objects, that display movement of wind and waves on the map. They define methods that return amout, width, speed and other visual parameters of particles based on zoom. Since there are de-facto two maps: ortographic and mercator, there are two instances of W.Particles class to extend: W.Particles.maps and W.Particles.globe. Windyty API uses only W.Particles.maps.

Unless you want your particles to look different than a current particles, you can use current instances of particles `W.particles.wind.maps` and `W.particles.wave.maps`.

## Step 1: Prepare data on your own server

### Files and directories
All data files must be stored in JSON files that must be stored in following directories and filenames:

`YYYY/MM/DD/HH/overlay-level.json`

I hope I don't need to explain what YYYY/MM/DD means. HH is hour for which the forecast is valid. As you can seen, Windyty does not support forecasts that are more detailed than for one hour.

Overlay identifies overlay, and Windyty internally support following overlays: `wind, temp, pressure, clouds, rh, gust, snow, lclouds, rain, snowcover, waves, swell, wwaves, swellperiod`

Of course you can name your overlay as you like, but the name of overlay must correspond to name of your custom W.Ovarlay instance. 

Basic level is `surface` and other level used in Windyty are `975h, 950h, 925h, 900h, 850h, 750h, 700h, 550h, 450h, 350h, 300h, 250h, 200h, 150h`. 

You can use any level identifier you will want.

### JSON data files
JSON files contain array of data points, that are distributed on the planet evenly, each lat and lon degree in WGS projection. Since this projection distrubutes data points in planet in gegraphicaly very uneven way, this is the worst projection for meteorological data. But we use it, because it is format of NOAA's GFS model, and computing such a data is pretty quick on client's browser.

### Tylification of JSONs
Web browsers and networks can handle JSONs up to 1 megabyte. But what about more detailed data? You have to "tylify" these data, or being exact, split these data to geographical tiles. And of course you can make more tileZoom levels, similary like map engines do it. Windyty API recognizes eight tileZoom levels, and each one have strict parameters, that you will have to fullfill.

TileZoom level 0 is basic resolution. Data files reside in root directory and have 1x1 degree resolution. This resolution is used for global weather models covering whole world. If you want to display your data on a globe, you must have data in TileZoom level 0.

For tileZoom level 1, the tiles must have 0.25x0.25 degree resolution, and fixed size 120x120 data points, se they are 30x30 geographical degrees wide and there is 12x6 tiles in the world.

Description of other tileZooms and parameters can be found here:

Tilyfied data will then reside in following directories:

`YYYY/MM/DD/HH/tZ/X/Y/overlay-level.json`

Z is in this case tileZoom level and X,Y represent the tile. 

### JSON file format
Windyty emerged from source codes of [Earth](https://github.com/cambecc/earth) project so basic JSON file format is the one, that is produced by [grib2json](https://github.com/cambecc/grib2json) utility. 

The minimal format of the file at tileZoom level 0 is:
    
        [
            {"header":
                {"nx":360,"ny":181,
                 "la1":90,"lo1":0,
                 "la2":-90,"lo2":359,
                 "dx":1,"dy":1 },
             "data":[6.7,6.6,6.6,6.5,... 
            },
            {"header":
                {"nx":360,"ny":181,
                 "la1":90,"lo1":0,
                 "la2":-90,"lo2":359,
                 "dx":1,"dy":1 },
             "data":[7.8,-5.6,6.6,6.5,... 
            }
        ]    

So basically it is:
 - Array that contains one to three objects
 - Each object represent one data set
 - Each data set have header and data section
 - Header section is obligatory for grids at tileZoom level 0. For higher zooms, headers are ignored.
 - Data are stored in single dimensional array.

Tylified JSONs are much more easy and have following format:

        [
            [6.7,6.6,6.6,6.5,... ],
            [7.8,-5.6,6.6,6.5,... ]
        ]

As you can see it is just Array of one up to three, single dimensional arrays.

Most of the overlays have simple JSONs, that have just one data set. Wind have, for example, one data set for U-component of a wind and one for V-component of a wind.



