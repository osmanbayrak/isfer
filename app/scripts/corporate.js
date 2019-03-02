'use strict';

angular.module('myApp.corporate', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/corporate/:page', {
        templateUrl: '/views/corporate/corporate.html',
        controller: 'corporateCtrl'
    });
}])

.controller('corporateCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', '$routeParams', function($scope, $rootScope, $http, $uibModal, $location, $routeParams) {
    $scope.page = $routeParams.page;
    $scope.options = {
        about: {name: "about", img: "images/rulo.jpg", description: "about_content"},
        applications: {name: "applications", img: "images/rulo.jpg", description: "applications_content"},
        activities: {name: "activities", img: "images/rulo.jpg", description: "activities_content"}
    };

    $scope.activeItem = $scope.options[$scope.page];

    $scope.changePage = function (key) {
        $scope.page = $scope.options[key].name;
        $location.path('/corporate/'+key, false);
        $scope.activeItem = $scope.options[$scope.page];
    };

}]);