(function(){
  'use strict';
  angular
    .module('GoLabs', [
      'ngCookies',
      'ui.router',
      'ui.bootstrap',
      'ui.navbar'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('base', {
          abstract: true,
          url: '',
          templateUrl: 'common/views/base.html'
        })
        .state('home', {
          url: '/home',
          parent: 'base',
          templateUrl: 'home/views/home.html',
          controller: 'HomeCtrl'
        })
    })
})();

