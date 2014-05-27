'use strict';

angular
  .module('voppBackOfficeApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product-add', {
        templateUrl: 'views/product-add.html',
        controller: 'ProductAddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });