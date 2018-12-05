'use strict';

angular.module('myApp.cart', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cart', {
        templateUrl: 'cart/cart.html',
        controller: 'cartCtrl'
    });
}])

.controller('cartCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', function($scope, $rootScope, $http, $uibModal, $location) {
    $scope.list = [
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"},
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"},
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"},
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"},
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"},
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"},
        {name: "ferforje", img:"metal.jpg", weight: "100kg", price:"950$"}
    ]
}]);