(function(angular) {
	'use strict';

	angular.module('tnt.backoffice.product.client', ['tnt.backoffice.product.entity']).service(
			'ProductClient', function ProductClient() {

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

					var result = 'OK';
					// TODO
					return result;
				};

				this.create = function(product) {

					var result = 'OK';
					// TODO
					return result;
				};

				this.update = function(product) {

					var result = 'OK';
					// TODO
					return result;
				};

				this.remove = function(uuid) {

					var result = 'OK';
					// TODO
					return result;
				};

			});
})(angular);