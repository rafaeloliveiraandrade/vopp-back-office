(function($, angular, alert, confirm, unescape) {
	'use strict';
	angular
			.module('tnt.backoffice.product.list.ctrl',
					[ 'tnt.backoffice.product.service' ])
			.controller(
					'ProductListCtrl',

					function($scope, ProductService) {

						$scope.products = ProductService.list();

						$scope.product = undefined;
						$scope.message = '';

						$scope.remove = function() {
							ProductService
									.remove($scope.product.uuid)
									.then(
											function() {
												message = 'Produto removido com sucesso.';
											},
											function(err) {
												message = 'Erro ao remover o produto. Verifique os seguintes campos: '
														+ err;
											});
						};
					});
}(jQuery, angular, window.alert, window.confirm, window.unescape));