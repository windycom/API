# Hello world
Load Leaflet library at the beginning of your script and after that Windy API library from URL `https://api4.windy.com/assets/libBoot.js`.

Leaflet CSS is loaded automatically.

Your application must contain `<div id="windy"></div>` in a place, where  you want to position Windy map. Use CSS to resize or position Windy `div` as you wish.

In your JS code call function `windyInit( options, callback )`, where options object must contain mandatory API key. Other start-up values are optional, but it is highly recommended to put a much as start-up parameters as possible.

Your `callback` is called whenever Windy API is ready and as a parameter it receives object with Windy API.

You can use well documented [Leaflet API](https://leafletjs.com/) to do **anything with Windy map**, or use rich ecosystem of [Leaflet plugins](http://leafletjs.com/plugins.html).


