### Leaflet options

You can specify any of the [leaflet options for GeoJSON-layers](http://leafletjs.com/reference-0.7.7.html#geojson)
to customize the appearance of your data:

```js
{
    color: '#ccc',
    weight: 2,
    fillOpacity: 0.5,
}
```

Additionally to the callbacks from leaflet (like `onEachFeature()`),
you can specify a function `onLayerLoaded(layer)`, that will be called
after the layer was created. You can use that to do additional work.

The code is evaluated as an expression, usually you would put a single object here.
However: If you need a context, e.g. for adding some additional code, you can use an
[IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
that returns the options object for leaflet:

```js
(function() {
    // Your functions here
    ...

    // Return options-object for leaflet
    return {
        weight: 1,
        fillOpacity: 0.6
    };
})()
```

Note that there is no semicolon at the end.
