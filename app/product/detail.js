'use strict';

angular.module('myApp.catalogDetail', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/catalog/detail/:id', {
        templateUrl: 'catalog/detail.html',
        controller: 'catalogDetailCtrl'
    });
}])

.controller('catalogDetailCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', function($scope, $rootScope, $http, $uibModal, $location) {

}]);