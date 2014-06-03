(function($, angular, alert, confirm, unescape) {
	'use strict';
	angular
			.module('tnt.backoffice.product.add.ctrl',
					[ 'tnt.backoffice.product.service' ])
			.controller(
					'ProductAddCtrl',

					
					function($scope, $q, ProductService) {

						$scope.msgValidacao = 'Campo obrigatorio';
						$scope.product = undefined;
						$scope.message = '';
						$scope.skus = [];
						$scope.newSku = {};

						$scope.create = function() {
							ProductService
									.create($scope.product)
									.then(
											function() {
												$scope.message = 'Produto cadastrado com sucesso.';
											},
											function(err) {
												$scope.message = 'Erro ao cadastrar o produto. Verifique os seguintes campos: '
														+ err;
											});
						};

						$scope.addSku = function() {
							$scope.skus.splice(0, 0, angular.copy($scope.newSku));	                        
							$scope.copyNewSku = angular.copy($scope.newSku);
							$scope.skus.push($scope.copyNewSku);
	                        $scope.newSku = {};

						};

						$scope.removeSku = function(sku) {
							$scope.skus.splice($scope.skus.indexOf(sku), 1);
						};

						$scope.update = function() {
							ProductService
									.update($scope.product)
									.then(
											function() {
												$scope.message = 'Produto atualizado com sucesso.';
											},
											function(err) {
												$scope.message = 'Erro ao atualizar o produto. Verifique os seguintes campos: '
														+ err;
											});
						};

						$scope.loadByUUID = function() {
							$scope.product = ProductService
									.loadByUUID($scope.product.uuid);
						};

						$scope.submitForm = function(isValid) {
							if(!isValid){
								alert("Validação incorreta");
							}
						};
						
						$scope.cleanView = function() {
							$scope.product.line = "";
							$scope.product.session = "";
							$scope.product.title = "";
							$scope.product.description = "";
							$scope.product.points = "";
							$scope.product.price = "";
							$scope.product.image = "";
							$scope.newSku = {};
							$scope.skus = [];
								
						}
					});
}(jQuery, angular, window.alert, window.confirm, window.unescape));
