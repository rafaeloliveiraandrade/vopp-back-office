(function(angular) {
	'use strict';

	angular
			.module('tnt.backoffice.product.entity', [])
			.factory(
					'Product',
					function Product() {

						var service = function svc(uuid, title, description,
								price, line, session, status, points) {
							var validProperties = [ 'uuid', 'title', 'description', 'price', 'line', 'session', 'points'];

							ObjectUtils
									.method(
											svc,
											'isValid',
											function() {
												for ( var ix in this) {
													var prop = this[ix];

													if (!angular
															.isFunction(prop)) {
														if (validProperties
																.indexOf(ix) === -1) {
															throw 'Unexpected property '
																	+ ix;
														}
													}
												}
											});

							if (arguments.length !== svc.length) {
								if (arguments.length === 1
										&& angular.isObject(arguments[0])) {
									svc.prototype.isValid.apply(arguments[0]);
									ObjectUtils.dataCopy(this, arguments[0]);
								} else {
									throw 'Entity must be initialized with uuid, title, description, price, line, session, points';
								}
							} else {
								this.uuid = uuid;								
								this.title = title;
								this.description = description;
								this.price = price;
								this.line = line;
								this.session = session;
								this.points = points;	
							}

							ObjectUtils.ro(this, 'uuid', this.uuid);
						};
						return service;
					});

}(angular));