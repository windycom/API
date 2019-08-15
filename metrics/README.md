# Change units
Each of Windy's overlays has its own object in `windyApi.overlays` modules. Use these objects to change an overlay's metric. For example, for `wind` overlay, use the read only value `overlays.wind.metric` to get the actual value, `.listMetrics()` to get allowed ones, and `.setMetric(metric)` to set the metric to the new value.

