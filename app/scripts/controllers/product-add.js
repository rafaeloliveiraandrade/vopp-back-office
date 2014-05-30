(function($, angular, alert, confirm, unescape) {
	'use strict';
	angular
			.module('tnt.backoffice.product.add.ctrl',
					[ 'tnt.backoffice.product.service' ])
			.controller(
					'ProductAddCtrl',

					function($scope, ProductService) {

						$scope.product = undefined;
						$scope.message = '';

						$scope.create = function() {
							ProductService
									.create($scope.product)
									.then(
											function() {
												message = 'Produto cadastrado com sucesso.';
											},
											function(err) {
												message = 'Erro ao cadastrar o produto. Verifique os seguintes campos: '
														+ err;
											});
						};

						$scope.update = function() {
							ProductService
									.update($scope.product)
									.then(
											function() {
												message = 'Produto atualizado com sucesso.';
											},
											function(err) {
												message = 'Erro ao atualizar o produto. Verifique os seguintes campos: '
														+ err;
											});
						};

						$scope.loadByUUID = function() {
							$scope.product = ProductService
									.loadByUUID($scope.product.uuid);
						};
					});
}(jQuery, angular, window.alert, window.confirm, window.unescape));