Windy creates a global object `WindyApp`, that is (almost) completely yours.

It will have a method `run()`, that will be executed after windy including some
dependencies was loaded.

The code you write here will become the body of `WindyApp.run()`, means, you can
use `this` in your code to refer to your `WindyApp` (or, of course, the global
`WindyApp`).