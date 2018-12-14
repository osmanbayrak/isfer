'use strict';

angular.module('myApp.home', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', 'Carousel', function($scope, $rootScope, $http, $uibModal, $location, Carousel) {

  $scope.bottomMenu = [
      {title: "flat_products", img: "images/yassimamuller.jpg", content: "bottom_menu_content1"},
      {title: "long_products", img: "images/uzunmamuller.jpg", content: "bottom_menu_content2"},
      {title: "profiles", img: "images/profilmamuller.jpg", content: "bottom_menu_content3"},
      {title: "decorative_irons", img: "images/dekoratifmamuller.jpg", content: "bottom_menu_content4"}
  ];

  $scope.slide = [
      {img: "images/kaynak.png", id: "img-1", for1: "img-6", for2: "img-2"},
      {img: "images/karisikdemir.png", id: "img-2", for1: "img-1", for2: "img-3"},
      {img: "images/shutterprofile.jpeg", id: "img-3", for1: "img-2", for2: "img-4"},
      {img: "images/insaat.png", id: "img-4", for1: "img-3", for2: "img-5"},
      {img: "images/shutterp.jpeg", id: "img-5", for1: "img-4", for2: "img-6"},
      {img: "images/yassi.png", id: "img-6", for1: "img-5", for2: "img-1"}
  ];

  $scope.openWindow = function (url) {
      $location.path(url)
  }
}]);