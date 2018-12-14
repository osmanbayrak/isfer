'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.catalog',
  'myApp.cart',
  'myApp.corporate',
  'ui.select',
  'ui.bootstrap',
  'ui.carousel',
  'pascalprecht.translate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
config(['$translateProvider', 'i18n', function($translateProvider, i18n) {
    $translateProvider.translations('en', i18n.en);
    $translateProvider.translations('tr', i18n.tr);
    $translateProvider.preferredLanguage('tr');
    $translateProvider.fallbackLanguage('tr')
}]).
run(function ($location, $rootScope, $http, $translate) {
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
        $rootScope.currentMenu = $location.path();

    });

    $rootScope.activeLang = 'tr';

    $rootScope.languages = [ 'tr', 'en'];

    $rootScope.changeLanguage = function() {
        if ($rootScope.activeLang === "en") {
            $translate.use('tr');
            $rootScope.activeLang = $translate.use()
        } else if ($rootScope.activeLang === 'tr') {
            $translate.use('en');
            $rootScope.activeLang = $translate.use()
        }
    }

    $rootScope.search = function () {
        console.log("asd")
    }
});
