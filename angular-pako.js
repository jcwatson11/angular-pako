/**
 * ngPako module written to bring pako javascript compression
 * and decompression services into angular.
 */
angular.module('ngPako', [])
.service('pako', ['$log', function($log) {
    return require('pako');
}]);
