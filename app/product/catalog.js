'use strict';

angular.module('myApp.catalog', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products/:category/:active', {
    templateUrl: 'product/catalog.html',
    controller: 'catalogCtrl'
  });
}])

.controller('catalogCtrl', ['$scope','$rootScope','$http', '$uibModal', '$location', '$routeParams', function($scope, $rootScope, $http, $uibModal, $location, $routeParams) {
  $scope.category = $routeParams.category;

  if ($scope.category === "yassimamuller") {
      $scope.product = {
          shr: {name: "Sıcak Haddelenmiş Rulo", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          shl: {name: "Sıcak Haddelenmiş Levha Sac", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          dkp: {name: "Soğuk Haddelenmiş(DKP) Rulo", short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          hr: {name: "HRP Rulo", short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          gr: {name: "Galvanizli Rulo", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bs: {name: "Boyalı Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bgd: {name: "Baklavalı / Gözyaşı Desenli Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          tos: {name: "Trapez / Oluklu Sac", short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."}
      }
  } else if ($scope.category === "uzunmamuller") {
      $scope.product = {
          shr: {name: "Sıcak Haddelenmiş Rulo", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          shl: {name: "Sıcak Haddelenmiş Levha Sac", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          dkp: {name: "Soğuk Haddelenmiş(DKP) Rulo", short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          hr: {name: "HRP Rulo", short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          gr: {name: "Galvanizli Rulo", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bs: {name: "Boyalı Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bgd: {name: "Baklavalı / Gözyaşı Desenli Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          tos: {name: "Trapez / Oluklu Sac", short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."}
      }
  } else if ($scope.category === "profiller") {
      $scope.product = {
          shr: {name: "Sıcak Haddelenmiş Rulo", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          shl: {name: "Sıcak Haddelenmiş Levha Sac", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          dkp: {name: "Soğuk Haddelenmiş(DKP) Rulo", short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          hr: {name: "HRP Rulo", short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          gr: {name: "Galvanizli Rulo", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bs: {name: "Boyalı Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bgd: {name: "Baklavalı / Gözyaşı Desenli Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          tos: {name: "Trapez / Oluklu Sac", short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."}
      }
  } else if ($scope.category === "dekoratifdemirler") {
      $scope.product = {
          shr: {name: "Sıcak Haddelenmiş Rulo", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          shl: {name: "Sıcak Haddelenmiş Levha Sac", short: "shr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          dkp: {name: "Soğuk Haddelenmiş(DKP) Rulo", short: "dkp", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          hr: {name: "HRP Rulo", short: "hr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          gr: {name: "Galvanizli Rulo", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bs: {name: "Boyalı Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          bgd: {name: "Baklavalı / Gözyaşı Desenli Sac", short: "gr", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."},
          tos: {name: "Trapez / Oluklu Sac", short: "bgd", img1: "images/rulo.jpg", img2: "images/rulo.png",
              description: "<b>Sıcak Haddelenmiş Rulo / Paket Sac;</b>çeliğin yeniden kristalleşme sıcaklığının üstünde olan" +
              " yüksek bir sıcaklıkta (1700 F ve üzeri) haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme " +
              "sıcaklığının üzerinde olduğunda, şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik)" +
              " genellikle üretim esnasında herhangi bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş" +
              " çeliğe göre daha ucuzdur. Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve" +
              " şeklini soğuk haddelenmiş ürüne göre daha az kontrol eder.",
              usage: "Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, " +
              "inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır."}
      }
  }

  $scope.activeProduct = $scope.product[$routeParams.active];

  $scope.selectProduct = function (key) {
      $scope.activeProduct = $scope.product[key];
  }

}]);