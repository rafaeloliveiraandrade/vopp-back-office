(function(angular) {
	'use strict';

	angular
			.module('tnt.backoffice.product.service',
					[ 'tnt.backoffice.product.client', 'tnt.backoffice.product.entity', 'tnt.backoffice.identity'])
			.service(
					'ProductService',
					function ProductService($log, $q, ProductClient, Product, IdentityService) {

						this.list = function() {
														
							//Remove after NodeJS development
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
							
							/*var result = null;
							try {
								result = ProductClient.query();
							} catch (err) {
								$log
										.debug('ProductService.list: Unable to list products. Err='
												+ err);
								throw 'ProductService.list: Unable to list products'
										+ '. Err=' + err;
							}*/
							return result;
						};

						this.loadByUUID = function(uuid) {
							
							//Remove after NodeJS development
							var result = [ {
								title : "Sabonete",
								session : 'Cosméticos',
								line : 'Inverno',
								price : 8
							} ];
							
							/*var result = '';
							try {
								if (uuid === undefined) {
									throw 'UUID is mandatory.';
								}
								result = ProductClient.get({},{'uuid': uuid});
							} catch (err) {
								var errorMessage = 'ProductService.loadByUUID: Unable to loadByUUID a product=' + uuid + '. Err=' + err;
								$log.debug(errorMessage);
								throw errorMessage;
							}*/
						};
						
						this.listByDescription = function(description) {
							var result = '';
							try {								
								result = Booking.query({'description':description});
							} catch (err) {
								var errorMessage = 'ProductService.listByDescription: Unable to list products. Description=' + description + '. Err=' + err;
								$log.debug(errorMessage);
								throw errorMessage;
							}
						};

						this.create = function(product) {
							var result = null;
							
							if(product === undefined) {
								$log
								.debug('ProductService.create: Unable to create product. You must define properties.');
								return $q.reject('You must define properties.');
							}
							product.uuid = IdentityService.generateUUID();
													
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
								result = ProductClient.save(product);
							} else {
								$log
										.debug('ProductService.create: Invalid fields: '
												+ hasErrors);
								result =  $q.reject(hasErrors);
							}
							return result;
						};

						this.update = function(product) {
							var result = null;
							var hasErrors = this.isValid(product);
							if (hasErrors.length === 0) {
								result = ProductClient.save(product);
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
									//result = ProductClient.delete({}, {'uuid': uuid});
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