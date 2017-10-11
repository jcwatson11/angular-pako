# Angular Pako extension for Angular 1.5.x (ngPako)

The [pako javascript library](https://github.com/nodeca/pako) offers an extensive set of compression and decompression features for javascript based on zlib.

However, the package is not web ready, and must be browserified, (or web-packed) in order to be used with any client-side browser library.

This package contains a pre-browserified version of the pako library wrapped in an angular 1.5 service.

## Installation
```
bower insttall ngPako
```

## Usage
```
angular.module('myModule', ['ngPako'])
.controller('myController',[
    'pako'
    ,'$log'
    ,function(pako, $log) {

        // Some data to compress using pako
        var myString = "Compress me.";

        // Compressing the data...
        var compressed = pako.deflate(myString);

        // Viewing the data with the console log.
        $log.log('This is compressed binary data: ', compressed);
    }
]);
```

All other pako methods are also exposed. This is as light a wrapper as it can be for pako.
