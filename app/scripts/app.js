(function(angular, window) {
	'use strict';

	var voppBackOfficeApp = angular
			.module('voppBackOfficeApp', [ 'ngCookies', 'ngResource',
					'ngRoute', 
					'tnt.backoffice.identity',
					'tnt.backoffice.product.add.ctrl',
					'tnt.backoffice.product.list.ctrl',
					'tnt.backoffice.product.service',
					'tnt.backoffice.product.entity',
					'tnt.backoffice.product.client' ]);

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

})(angular, window);