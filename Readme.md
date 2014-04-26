# Nanobar

A progress bar at the very top of a webpage.

VIEW DEMO: <http://yuehu.github.io/nanobar/>

## Installation

Install with [component(1)](http://component.io):

    $ component install yuehu/nanobar

## API

```
var Nanobar = require('nanobar');
```
### new Nanobar(parent);

append nanobar to parentNode;

### Nanobar#update(number)

Goto a certain percent of progress.

```
nanobar.update(30)
```

### Nanobar#dismiss()

Remove this nanobar.

### Nanobar#infinite()

Make the progress bar infinite.

## License

  MIT
