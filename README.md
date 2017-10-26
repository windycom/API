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

# W. - Windy namespace
While Leaflet API exposes mostly classes (and occupies global object `L`), Windy exposes mostly modules (with small letter, for example `W.metrics`), and also classes (with capital letter, for example `W.Evented`).

# Description of Windy API

## W.Class - Classes and instances 
Windy Class mechanism is derived form Leaflet's `L.Class` and even more simplified (for instance we do not use Leflet options and keyword `new`), since most of the instances in Windy are singletons . Windy introduces `W.Class` that is parent of all classes having following methods: `extends` (for extending a class) and `instance` (for creating instance). Constructor (if present) is simply method named `_init`. `extend` and `instance` method can derive from more classes at the same time, making nice mixins.

## W.Evented - Broadcasting messages
A lot of Windy objects are descendants on `W.Evented` class having following methods:
### W.Evented.emit(message,args)
Emits a message accompanied by up to three more arguments.
### W.Evented.on(message,callback)
Hooks a callback, that will be triggerd on specified message. Callback recieves emmited arguments.  **Returns** uniqie `id` that can be also used for cancelling this hook.
### W.Evented.once(message,callback)
Same as above. Will be called just once.
### W.Evented.off(callback|id)
Unhooks registered callback, identified by previously provided `callback` or  `id`.

## Leaflet vs. Windy broadcasting
Please bear in mind, that Leaflet has slightlly different broadcasting mechanism (different paremeters, and is also using `fire` instead of `emit` ). And since `W.maps` is instance of `L.Map`, `W.maps` emits messsages Leaflet way. 

## W.broadcast - Overall Windy broadcaster
Instance of `W.Evented` for overall app braodcasts. Whatever important happens inside Windy is broadcasted via `W.broadcast`.

Usage:

```js
    W.broadcast.on('redrawFinished', params => {
        console.log( params )
    })
```

### List of the most important messages:
#### mapChanged
After Leaflet map has been panned or zoomed.
#### paramsChanged
When user changes some paramters (overlay, level, date etc...). Do not not use this event to start any intensive action in the main thread (since Windy now must load and render all the data). We recommend to use `redrawFinished` instead.
#### redrawFinished
When Windy has succesfully loaded and rendered requested data.
### metricChanged
After weather units (wind, temp, ...) has been changed.


