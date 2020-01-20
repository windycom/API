# Hello world
Load the Leaflet library at the beginning of your script and after that the Windy API library from URL `https://api.windy.com/assets/map-forecast/libBoot.js`.

The Leaflet CSS is loaded automatically.

Your application must contain `<div id="windy"></div>` in the place where you want to position the Windy map. Use CSS to resize or position Windy `div` as you wish.

In your JS code call the function `windyInit( options, callback )`, where the options object must contain a mandatory API key in the `key` property. Other start-up values are optional, but it is highly recommended to put as many start-up parameters as possible.

Your `callback` is called whenever Windy API is ready and as a parameter it receives the object with Windy API.

You can use well documented [Leaflet API](https://leafletjs.com/) to do **anything with the Windy map**, or use a rich ecosystem of [Leaflet plugins](http://leafletjs.com/plugins.html).


