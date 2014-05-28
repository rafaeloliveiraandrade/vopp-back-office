'use strict';

angular
  .module('voppBackOfficeApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/product-add', {
        templateUrl: 'views/product-add.html',
        controller: 'ProductAddCtrl'
      })
      .when('/product-list', {
        templateUrl: 'views/product-list.html',
        controller: 'ProductListCtrl'
      })
      .otherwise({
        redirectTo: '/product-list.html'
      });
  });