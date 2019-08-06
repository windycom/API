# Change units

Each Windy's overlay has its own object in `windyApi.overlays` modules. Use these objects to change overlay's metric. For example for `wind` overlay, use read only value `overlays.wind.metric` to get actual value, `.listMetrics()` to get allowed ones, and `.setMetric(metric)` to set metric to the new value.

