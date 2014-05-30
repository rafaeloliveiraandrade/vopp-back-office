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
						
						$scope.cleanView = function() {
							$scope.product.line = "";
							$scope.product.session = "";
							$scope.product.title = "";
							$scope.product.description = "";
							$scope.product.points = "";
							$scope.product.price = "";
							$scope.product.image = "";
						}
						
						$scope.cleanViewSku = function() {
							$scope.product.option = "";
							$scope.product.sku = "";
							$scope.product.pricesku = "";
							$scope.product.imagesku = "";
						}
					});
}(jQuery, angular, window.alert, window.confirm, window.unescape));