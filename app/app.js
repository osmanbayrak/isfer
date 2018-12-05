'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.catalog',
  'myApp.cart',
  'ui.select',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
run(function ($location, $rootScope, $http) {
    $rootScope.showDropdown = true;
    $http.defaults.headers.common.Authorization = 'Token '+ localStorage.getItem('key');

    $rootScope.brighter = function (e) {
        e.target.style.filter = 'brightness(110%)';
    };
    $rootScope.darker = function (e) {
        e.target.style.filter = 'brightness(100%)';
    };

    window.onscroll = function(ev) {
        if (window.scrollY > 87) {
            document.getElementById('nav').style.opacity = '0.8';

        } else {
            document.getElementById('nav').style.opacity = '1'
        }
    };

    $rootScope.$on('$routeChangeStart', function($event, next, current) {
        $rootScope.currentMenu = $location.path()
        console.log($rootScope.currentMenu.slice(0,9))

    });
});
