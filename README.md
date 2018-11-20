![](assets/intro4.gif)

# Windy API v4
Windy API v4, also known as as Windy Leaflet Plugin, is simple to use javascript API based on [Leaflet](https://leafletjs.com/) and technology, that powers [Windy.com](https://www.windy.com).

Windy API uses Leaflet version `0.7.7`.

## Previous versions of Windy API
 - Windy API `v2.3` will be discontinued as of 31.11.2018

## Getting started
Obtain your [Windy API key here](https://api4.windy.com/api-key/) and check out our tutorials. You will handle our API in less than 20 minutes!

## Examples
 - [Hello World](https://api4.windy.com/examples/hello-world/)
 - [Change Windy parameters](https://api4.windy.com/examples/parameters/)
 - [Observe what is happening inside](https://api4.windy.com/examples/bcast/)
 - [Mess with User Interface](https://api4.windy.com/examples/navigation/)
 - [Change units](https://api4.windy.com/examples/metrics/)
 - [Use weather picker](https://api4.windy.com/examples/picker/)
 - [Boat tracker](https://api4.windy.com/examples/boat-tracker/)

## Other resources
 - [Manage your API key](https://api4.windy.com/api-key/)
 - [Leaflet 0.7.7 documentation](https://leafletjs.com/reference-0.7.7.html)
 - [Leaflet Plugins](https://leafletjs.com/plugins.html)
 - [Windy API community discussion](https://community.windy.com/category/12/windy-api)

## Things to remember
 - Windy API is not compatible with higher versions of Leaflet and we have no intention to upgrade so far.
 - While providing coordinates to Leaflet can be done via object `{ lat, lng }` with **lng** property, Windy supports `{ lat, lon }` with **lon** property.
 - There can be only one instance of Windy Map on a page, but you can use multiple instances of Leaflet map on the same page.
 - All classes of `leaflet.css` are nested inside `#windy` selector (not to interfere with your own CSS), so if you want to use another instance of Leaflet map on the same page load `leaflet.css` yourself once more.
 - Windy uses a lot of global defined CSS classes and id selectors, with nice names like `#bottom, #logo` etc. Windy also puts a lot of CSS classes to `body` tag dynamically. If design of Windy Map is broken, check your CSS and rename your id and selectors please.
 - Windy API v4 does not use cookies
 - Windy API v4 heavily uses `localStorage`. Unintentional or intentional modifications of our items can lead to instability of Windy API.
 - Using undocumented functions of Windy engine can break your app, when we decide to upgrade our codes. If you miss something, rather [let us know here](https://community.windy.com/category/12/windy-api) and ask us to document and expose other features.

## Conditions of use
### Free version
Windy API is free and with unrestricted traffic usage, but offers only the `gfs` forecast model and only `wind`,`rain`,`clouds`, `temperature`, `pressure`,`currents` and `waves` layer. The Windy logo MUST remain as it is, i.e. clickable and without modification. However, you can move the Windy logo wherever you want within the Windy map. For the free version of the API, we reserve the right to 1) display advertisement inside the Windy map, 2) place "Download Windy App" message from time to time on mobile devices, or 3) discontinue free version of Windy API v4 at any time without prior notice

### Paid version
For serious work, we recommend to use the paid version that contains `iconEu`, `nam` and `gfs` models and the most of all `layers` and also `isolines`. Paid version  will also not contain our advertisement. It costs only 720USD per year (ordered via [this form](https://goo.gl/forms/qu21Snkl5igdIKcg1) and paid annually via invoice). Developers of paid version can decrease opacity of Windy logo to 0.8 (however logo must remain clickable) and usage limit is average of 5.000 Unique Visitors a day (measured by Google Analytics). For permission to a higher quota, please contact us.

We are not allowed to provide ECMWF data to third parties, and therefore we cannot provide layers based on this data model (`thunder`, `deg0`, `cloudtop`, `cbase`, `visibility`, `swell3`, `snowcover`, `ozone`, `sst` and `cape`). We also cannot provide you with the `radar` layer. Everything else is included in the paid version and this [Change Windy parameters](https://api4.windy.com/examples/parameters/) tutorial will show you how to access all allowed layers (even if they are not displayed in the right menu).

### Non-commercial projects
Interesting and non-commercial sites using Windy API can ask for free upgrade to the paid version. The condition is that your project will be open sourced on GitHub. If this is your case, use the same form for paid version and describe your request.

## Technical support
Drop a line in our [Windy API section](https://community.windy.com/category/12/windy-api) of our Windy Community forum.

## Changelog
###### [4.5] - 2018-11-20
- New lib codes based on Windy client `v16.17.0`
- Updated menu on the right side to contain all the available layers.
- Map selector was renamed to `#map-container` so make sure it will be compatible with your code.

###### [4.4] - 2018-10-05
- New API conditions

###### [4.0] - 2018-07-30
- Leaflet and Windy library based on Leaflet `v0.7.7` and based on Windy Client `v15.15.1`

###### [3.0] - 2017-2018
- Windy API as easy to use console, using `iframe` and requires all apps to run on `mywindy.com` domain.

###### [2.3] - 2016-11-18
- Fixed bug after changing URL from `windyty.com` to `windytv.com`

###### [2.2] - 2016-06-01
- boot.js now run on https

###### [2.1] - 2016-06-01
- Increased size of typed arrays storage to handle retina displays

###### [2.0] - 2016-04-15
- Completely new version of API based on new Windyty 6.X.X codes

