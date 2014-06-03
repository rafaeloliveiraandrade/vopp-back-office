(function(angular) {
	'use strict';

	angular
			.module('tnt.backoffice.product.client',
					[ 'ngResource'])
			.factory(
					'ProductClient',
					function ProductClient($resource, Config) {

						return $resource(
								Config.BACKEND-URL+'/api/product/:uuid',
								{
									uuid : "@uuid"
								}, {
									"update" : {
										method : "PUT"
									}
								});
					});
	
})(angular);