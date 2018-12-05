'use strict';

angular.module('myApp.catalog', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products/:category', {
    templateUrl: 'product/catalog.html',
    controller: 'catalogCtrl'
  });
}])

.controller('catalogCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', '$routeParams', function($scope, $rootScope, $http, $uibModal, $location, $routeParams) {
  $scope.category = $routeParams.category;
  $scope.products = [
      [{name: "ferforje", img:"metal.jpg", weight: "100kg"}, {name: "parcaBoru", img:"metal.jpg", weight: "50kg"}, {name: "yassiBoru", img:"metal.jpg", weight: "30kg"}],
      [{name: "kilim", img:"metal.jpg", weight: "43kg"}, {name: "topuz", img:"metal.jpg", weight: "11kg"}, {name: "elyaf", img:"metal.jpg", weight: "25kg"}],
      [{name: "ferforje", img:"metal.jpg", weight: "100kg"}, {name: "parcaBoru", img:"metal.jpg", weight: "50kg"}, {name: "yassiBoru", img:"metal.jpg", weight: "30kg"}]
  ]
}]);