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
      {title: "Yassı Mamüller", img: "images/yassimamuller.jpg", content: "Sıcak Hadde Rulo, Sıcak Hadde Levha, Soğuk Hadde Rulo, Soğuk Hadde Levha ve Paket, Galvanizli Levha Sac,\n" +
      "                Boyalı Levha Sac, Galcanizli Rulo Sac, Boyalı Rulo Sac, Baklavalı Sac, Gözyaşı Desenli Sac"},
      {title: "Uzun Mamüller", img: "images/uzunmamuller.jpg", content: "Filmaşin, Nervürlü Çelik, Çelik Hasır, Köşebent, Lama, Sıcak Çekme Kare Demir, Soğuk Çekme Kare Demir,\n" +
      "                Putrel Demirler, Dikdörtgen Profil, Yuvarlak Profil, T Profil, IPN, UPN IPE, UPE HEA, HEB"},
      {title: "Profiller", img: "images/profilmamuller.jpg", content: "Geniş Çaplı Borular, Su Boruları, Doğal Gaz Boruları, Dikişli Sanayi Boruları, Hassas Borular,\n" +
      "                Çelik Çekme Borular, Galvanizli Borular, Spiral Kaynaklı Borular, Konstrüksiyon Boruları, Kazan Boruları"},
      {title: "Dekoratif Demirler", img: "images/dekoratifmamuller.jpg", content: "Motifler, Panolar, Cumbalar, Boğumlu Demirler, Halkalar, Rozetler, Mızraklar, Topuzlar, Yapraklar,\n" +
      "                Yapraklı Parça Motifler,Küpeşteler ve Kelepçeler, Kapı Kilit Sacı ve Kapı Kilit Kolları"}
  ];

  $scope.slide = [
      {img: "images/kaynak.png", id: "img-1", for1: "img-6", for2: "img-2"},
      {img: "images/karisikdemir.png", id: "img-2", for1: "img-1", for2: "img-3"},
      {img: "images/shutterprofile.jpeg", id: "img-3", for1: "img-2", for2: "img-4"},
      {img: "images/insaat.png", id: "img-4", for1: "img-3", for2: "img-5"},
      {img: "images/shutterp.jpeg", id: "img-5", for1: "img-4", for2: "img-6"},
      {img: "images/yassi.png", id: "img-6", for1: "img-5", for2: "img-1"}
  ]
}]);