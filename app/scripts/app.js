(function(angular, window) {
	'use strict';

	var voppBackOfficeApp = angular
			.module('voppBackOfficeApp', [ 'ngCookies', 'ngResource',
					'ngRoute', 
					'tnt.backoffice.identity',
					'tnt.backoffice.config',
					'tnt.backoffice.product.add.ctrl',
					'tnt.backoffice.product.client',
					'tnt.backoffice.product.list.ctrl',
					'tnt.backoffice.product.service',
					'tnt.backoffice.product.entity']);

	voppBackOfficeApp.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/product-list', {
			templateUrl : 'views/product-list.html',
			controller : 'ProductListCtrl'
		})
		.when('/product-add', {
			templateUrl : 'views/product-add.html',
			controller : 'ProductAddCtrl'
		})
		.otherwise({
			redirectTo : '/product-list.html'
		});
	} ]);
	
//	voppBackOfficeApp.config(['$resourceProvider', function ($resourceProvider) {
//	$resourceProvider.defaults.stripTrailingSlashes = false;
//} ]);

})(angular, window);