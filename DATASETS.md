# Use Windyty to visualize your own weather data
If you run your own weather model, using Windyty API can provide highest additional value to bots: your users and Windyty users.

Windyty uses two classes for data management: `W.Product` and `W.Overlay`.

## W.Product
Product is set of weather data, that share same density, coverage, are issued in the same intervals and reside in same directories. Product contain methods to load and display the product on a map.

Windyty has for example follofing instances of W.Product: `W.products.gfs`, `W.products.waves` and so on.

If you want visualise your own data set you will have to make your own instance of W.Product.

## W.Overlay
Overlay is set of colors and conversion functions, that identify color overlay.

If your data files will have same metrics as Windyty metric, then you can use already prepared overlays. If not you will have to create your own instances of overlays.

## Step 1: Prepare data on your own server

### Files and directories
All data files must be stored in JSON files that must be stored in following directories and filenames:

`YYYY/MM/DD/HH/overlay-level.json`

I hope I don't need to explain what YYYY/MM/DD means. HH is hour for which the forecast is valid. As you can seen, Windyty does not support forecasts that are more detailed than for one hour.

Overlay identifies overlay, and Windyty internally support following overlays: `wind, temp, pressure, clouds, rh, gust, snow, lclouds, rain, snowcover, waves, swell, wwaves, swellperiod`

Of course you can name your overlay as you like, but the name of overlay must correspond to name of your custom W.Ovarlay instance.

Basic level is `surface` and other level used in Windyty are `975h, 950h, 925h, 900h, 850h, 750h, 700h, 550h, 450h, 350h, 300h, 250h, 200h, 150h`. 

You can use any level identifier you will want, but Windyty User Interface recognizes only these values.

### JSON data points
JSON files contain array of data points, that are distributed on the planet each lat and lon degree in WGS projection. Since this projection distrubutes data points in planet in very uneven way, this is the worst projection for meteorological data. 

We use it, because it is format of NOAA's GFS model, and displaying such a data is pretty quick on client's browser.

### Tylification of JSONs
Web browsers and networks can handle JSONs up to 1 megabyte. But what about more detailed data? You have to "tylify" these data, or being exact, split these data to geographical times. And of course you can make more tileZoom levels, similary like map engines do it. Windyty API recognizes eight tileZoom levels, and each one have strict parameters, that you will have to fullfill.

TileZoom level 0 is basic resolution. Data files reside in root directory and have 1x1 degree resolution.

For tileZoom level 1, the tiles must have 0.25x0.25 degree resolution, and size 120x120 data points, se the are 30x30 degrees wide and there is 12x6 tiles in the world.

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

Most of the overlays have simple JSONs, that have just one data set. Wind have for example one data set for U-component of a wind and one for V-component of a wind.

## Step 2: Configure your web server
Configure your server so HTTP header will contain `Access-Control-Allow-Origin: *` or at least `Access-Control-Allow-Origin: windyty.com`

And also set up gzip compression if it is not yet.

## Step 3: Create your own instance of W.Product


