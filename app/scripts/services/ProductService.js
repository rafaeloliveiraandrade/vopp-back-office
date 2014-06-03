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
								uuid: '234sdf234234',
								title : "Sabonete",
								session : 'Cosmeticos',
								description:'Sabonete para banho',
								session : 'Cosméticos',
								line : 'Inverno',
								price : 8
								price : 8,
								points: 1
							}, {
								uuid: '999sdf234888',
								title : "Creme",
								description:'Creme para banho',							
								session : 'Cosmeticos',
								line : 'Verão',
								price : 9,
								points: 2
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
								uuid: '234sdf234234',
								title : "Sabonete",
								session : 'Cosméticos',
								description:'Sabonete para banho',
								session : 'Cosmeticos',
								line : 'Inverno',
								price : 8
								price : 8,
								points: 1
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
							var deferred = $q.defer ();
							
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
								ProductClient.save(product);
								
								deferred.resolve('OK');
								return deferred.promise;
							} else {
								$log
										.debug('ProductService.create: Invalid fields: '
												+ hasErrors);
								return $q.reject(hasErrors);
							}							
						};

						this.update = function(product) {
							var deferred = $q.defer ();
							
							var hasErrors = this.isValid(product);
							if (hasErrors.length === 0) {
								
								result = ProductClient.save(product);
								
								deferred.resolve('OK');
								return deferred.promise;
							} else {
								$log
										.debug('ProductService.update: Invalid fields: '
												+ hasErrors);								
								return $q.reject(hasErrors);
							}
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
							invalidProperty.image = angular.isDefined(entity.image);
							
							
							
		                    var result = [];	                    
		                    for (var prop in invalidProperty) {
		                        if (!invalidProperty[prop]) {
		                            result.push(prop);
		                        }
		                    }
		                    return result;
		                };
					});
	

})(angular);