# Unfinished

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


