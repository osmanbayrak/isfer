'use strict';

angular.module('myApp.catalog', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products/:category/:active', {
    templateUrl: '/views/product/catalog.html',
    controller: 'catalogCtrl'
  });
}])

.controller('catalogCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', '$routeParams', function($scope, $rootScope, $http, $uibModal, $location, $routeParams) {
  $scope.category = $routeParams.category;
  if ($scope.category === "flat_products") {
      $scope.product = {
          shr: {short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shr_desc",
              usage: "shr_usage"},
          shl: {short: "shl", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shl_desc",
              usage: "shl_usage"},
          dkp: {short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "dkp_desc",
              usage: "dkp_usage"},
          hr: {short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "hr_desc",
              usage: "hr_usage"},
          gr: {short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "gr_desc",
              usage: "gr_usage"},
          bs: {short: "bs", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bs_desc",
              usage: "bs_usage"},
          bgd: {short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bgd_desc",
              usage: "bgd_usage"},
          tos: {short: "tos", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "tos_desc",
              usage: "tos_usage"}
      }
  } else if ($scope.category === "long_products") {
      $scope.product = {
          shr: {short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shr_desc",
              usage: "shr_usage"},
          shl: {short: "shl", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shl_desc",
              usage: "shl_usage"},
          dkp: {short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "dkp_desc",
              usage: "dkp_usage"},
          hr: {short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "hr_desc",
              usage: "hr_usage"},
          gr: {short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "gr_desc",
              usage: "gr_usage"},
          bs: {short: "bs", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bs_desc",
              usage: "bs_usage"},
          bgd: {short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bgd_desc",
              usage: "bgd_usage"},
          tos: {short: "tos", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "tos_desc",
              usage: "tos_usage"}
      }
  } else if ($scope.category === "profiles") {
      $scope.product = {
          shr: {short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shr_desc",
              usage: "shr_usage"},
          shl: {short: "shl", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shl_desc",
              usage: "shl_usage"},
          dkp: {short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "dkp_desc",
              usage: "dkp_usage"},
          hr: {short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "hr_desc",
              usage: "hr_usage"},
          gr: {short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "gr_desc",
              usage: "gr_usage"},
          bs: {short: "bs", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bs_desc",
              usage: "bs_usage"},
          bgd: {short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bgd_desc",
              usage: "bgd_usage"},
          tos: {short: "tos", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "tos_desc",
              usage: "tos_usage"}
      }
  } else if ($scope.category === "decorative_irons") {
      $scope.product = {
          shr: {short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shr_desc",
              usage: "shr_usage"},
          shl: {short: "shl", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "shl_desc",
              usage: "shl_usage"},
          dkp: {short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "dkp_desc",
              usage: "dkp_usage"},
          hr: {short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "hr_desc",
              usage: "hr_usage"},
          gr: {short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "gr_desc",
              usage: "gr_usage"},
          bs: {short: "bs", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bs_desc",
              usage: "bs_usage"},
          bgd: {short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "bgd_desc",
              usage: "bgd_usage"},
          tos: {short: "tos", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "tos_desc",
              usage: "tos_usage"}
      }
  }

  $scope.activeProduct = $scope.product[$routeParams.active];
  console.log($location.path());

  $scope.selectProduct = function (key) {
      $scope.activeProduct = $scope.product[key];
      $location.path('/products/'+$routeParams.category + '/' +key, false);
  };

}]);