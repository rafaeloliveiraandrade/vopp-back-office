(function(angular) {
	'use strict';

	angular.module('tnt.backoffice.product.client',
			[ 'tnt.backoffice.product.entity' ]).service('ProductClient',
			function ProductClient($q) {

				this.list = function() {
					var result = [ {
						title : "Sabonete",
						session : 'Cosméticos',
						line : 'Inverno',
						price : 8
					}, {
						title : 'Creme',
						session : 'Cosméticos',
						line : 'Inverno',
						price : 13
					} ];

					return result;
				};

				this.loadByUUID = function(uuid) {					
					var result = [ {
						title : "Sabonete",
						session : 'Cosméticos',
						line : 'Inverno',
						price : 8
					} ];

					return result;
				};

				this.create = function(product) {
					var deferred = $q.defer();

					deferred.resolve('OK');

					return deferred.promise;
				};

				this.update = function(product) {

					var deferred = $q.defer();

					deferred.resolve('OK');

					return deferred.promise;
				};

				this.remove = function(uuid) {

					var deferred = $q.defer();

					deferred.resolve('OK');

					return deferred.promise;
				};

			});
})(angular);