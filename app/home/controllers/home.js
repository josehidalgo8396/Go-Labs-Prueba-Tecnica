(function(){
  'use strict';
  angular
    .module('GoLabs')
    .controller('HomeCtrl', ["$scope", "HomeService",
     function ($scope, homeService) {
      $scope.ls = 0;
      $scope.ss = 0;
      $scope.bd = {};
      $scope.cookies = 0;

      $scope.setLocalStorage = function() {
        homeService.setLocalStorage(1);
        $scope.getLocalStorage();
      };

      $scope.getLocalStorage = function() {
        $scope.ls = homeService.getLocalStorage();
      };

      $scope.setSessionStorage = function() {
        homeService.setSessionStorage(1);
        $scope.getSessionStorage();
      };

      $scope.getSessionStorage = function() {
        $scope.ss = homeService.getSessionStorage();
      };

      $scope.setBD = function() {
        homeService.setBD({valor: 1}).then(function(result) {
          if(result.success) {
            $scope.bd = result.data;
          }
          else{
            window.alert(result.message);
          }
        });
      };

      $scope.getBD = function() {
        homeService.getBD().then(function(result) {
          if(result.success) {
            $scope.bd = result.data;
          }
          else {
            window.alert(result.message);
          }
        });
      };
    
      $scope.setCookie = function() {
        homeService.setCookie(1);
        $scope.getCookie();
      }
      $scope.getCookie = function() {
        $scope.cookies = homeService.getCookie();
      };

      $scope.getBD();
      $scope.getCookie();
      $scope.getSessionStorage();
      $scope.getLocalStorage();
  }]);
})();