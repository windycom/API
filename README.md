# Windy API

![](img/intro.gif)

# Getting started
Windy API enables you to create your own Windy Apps with minimum effort. You do not need any server, and you can have your Windy App up and running in less than 5 minutes. 

Once you are logged in API console at [https://api.windy.com](https://api.windy.com), you can create one or more Windy Apps by adding JS, CSS or HTML code to client codes of Windy. 

Your published Windy App will be accessible on `https://mywindy.com/your-username/name-of-your-app`, or if you prefer private app, the URL will be somewhat mangled like `https://mywindy.com/your-username/507f191e810c19729de860ea` (not implemented yet).

If you want to run your Windy App on your own domain, set up your own server somewhere, and embed your Windy App inside and `iframe`.

Windy API console let you edit **Javascript, CSS, Head** or **HTML** of Windy. HTML and Head content is inserted as the last element of document's `body`, or `head` section. 

Windy javascript libraries use global object `W`. 

Your Javascript code, that you will write inside the editor in API console, will be launched when document is loaded, Leaflet map is initialized, and all is up and running. Instance of Leaflet map is then available as `W.maps`.

Our examples use ES6 syntax, but there is no traspilation of Javascript code. Whatever you write, will go directlly to client's browser so use ES5 if you want to cover older browser. 

# Conditions to use
Windy API is free for time being, but Windy logo must remain visible and clickable in your App. Using Windy API inside native iOS or Android apps is prohibited and requires our permission. Detailed conditions are [described here](CONDITIONS.md)

# How to use Leaflet, jQuery or other libraries
leaflet library is already loaded. We use version 0.77 and we do not plan to upgrade right now. Leaflet documentation [is described here](http://leafletjs.com/)

If you want use external library (for instance `jQuery`) or some Leaflet plugin just include few lines into **head** section of your Windy App, like this.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
```

# Examples
[1. Hello world](https://api.windy.com/myapps/59ca6222383fc346dd51a373)
[2. Leaflet, markers and pupups](https://api.windy.com/myapps/59cb613b383fc346dd51a37e)
[3. Playing with USer Interface](https://api.windy.com/myapps/59cb5559383fc346dd51a376)
[4. Recieving broadcasts](https://api.windy.com/myapps/59f2d86b8944d95935cfff66)
[5. Changing overlays, levels](https://api.windy.com/myapps/59f2e0e08944d95935cfff68)
[Flight tracker](https://api2.windy.com/myapps/59c3714a534c3d3051e047c4)


