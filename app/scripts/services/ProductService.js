(function(angular) {
	'use strict';

	angular
			.module('tnt.backoffice.product.service',
					[ 'tnt.backoffice.product.client', 'tnt.backoffice.product.entity' ])
			.service(
					'ProductService',
					function ProductService($log, $q, ProductClient, Product) {

						this.list = function() {
							var result = null;
							try {
								result = ProductClient.list();
							} catch (err) {
								$log
										.debug('ProductService.list: Unable to list products. Err='
												+ err);
								throw 'ProductService.list: Unable to list products'
										+ '. Err=' + err;
							}
							return result;
						};

						this.loadByUUID = function(uuid) {
							var result = '';
							try {
								if (uuid === undefined) {
									throw 'UUID is mandatory.';
								}
								result = ProductClient.loadByUUID(uuid);
							} catch (err) {
								$log
										.debug('ProductService.loadByUUID: UUID is mandatory.');
								throw 'ProductService.loadByUUID: Unable to loadByUUID a product='
										+ uuid + '. Err=' + err;
							}
						};

						this.create = function(product) {
							var result = null;
							
							try {
								product = new Product(product);
							} catch(err) {
								
								$log
								.debug('ProductService.create: Unable to create product. Err='
										+ err);
								return $q.reject(err);
							}
							var hasErrors = this.isValid(product);
							if (hasErrors.length === 0) {
								return ProductClient.create(product);
							} else {
								$log
										.debug('ProductService.create: Invalid fields: '
												+ hasErrors);
								return $q.reject(hasErrors);
							}
						};

						this.update = function(product) {
							var result = null;
							var hasErrors = this.isValid(product);
							if (hasErrors.length === 0) {
								result = ProductClient.update(product);
							} else {
								$log
										.debug('ProductService.update: Invalid fields: '
												+ hasErrors);
								result = $q.reject(hasErrors);
							}
							return result;
						};

						this.remove = function(uuid) {
							var result = '';
							var product = '';
							try {
								product = this.loadByUUID(uuid);
								if (product === undefined) {
									result = $q.reject('Product not found.');
								} else {
									product.status = 'REMOVED';
									result = this.update(product);
								}
							} catch (err) {
								$log
										.debug('ProductService.remove: Unable to remove product. Err='
												+ err);
								throw 'ProductService.remove: Unable to remove a product='
										+ JSON.stringify(product)
										+ '. Err='
										+ err;
							}
							return result;
						};
						
						this.isValid = function (entity) {
		                    var invalidProperty = {};
		                    
		                    invalidProperty.uuid = angular.isDefined(entity.uuid);								
		                    invalidProperty.title = angular.isDefined(entity.title);
		                    invalidProperty.description = angular.isDefined(entity.description);
		                    invalidProperty.price = angular.isDefined(entity.price);
		                    invalidProperty.line = angular.isDefined(entity.line);
							invalidProperty.session = angular.isDefined(entity.session);
							invalidProperty.points = angular.isDefined(entity.points);

		                    var result = [];

		                    for ( var ix in invalidProperty) {
		                        if (!invalidProperty[ix]) {
		                            result.push(ix);
		                        }
		                    }
		                    return result;
		                };
					});

})(angular);