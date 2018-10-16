'use strict';

angular.module('myApp.catalog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/catalog', {
    templateUrl: 'catalog/catalog.html',
    controller: 'catalogCtrl'
  });
}])

.controller('catalogCtrl', [function() {

}]);