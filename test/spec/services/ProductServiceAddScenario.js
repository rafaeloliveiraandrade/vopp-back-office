'use strict';

describe('Service: ProductServiceAddScenario', function() {

	var logger = angular.noop;

	var log = {
		debug : logger,
		error : logger,
		warn : logger,
		fatal : logger
	};
	
	// load the service's module
	beforeEach(function() {
		module('tnt.backoffice.identity');
		module('tnt.backoffice.config');
		module('tnt.backoffice.product.entity');
		module('tnt.backoffice.product.add.ctrl');		
		module('tnt.backoffice.product.list.ctrl');
		module('tnt.backoffice.product.service');
		module('tnt.backoffice.product.client');

		module(function($provide) {
			$provide.value('$log', log);
		});
	});

	// instantiate service
	var ProductService = undefined;
	var Product = undefined;
	var $rootScope = undefined;
	var ProductClient = undefined;
	var IdentityService = undefined;

	beforeEach(inject(function(_$rootScope_, _Product_,_ProductService_, _IdentityService_, _ProductClient_) {
		ProductService = _ProductService_;
		Product = _Product_;
		$rootScope = _$rootScope_;
		IdentityService = _IdentityService_;
		ProductClient = _ProductClient_;
	}));

	it('Should create', function() {

		var fakeProductClient = new ProductClient();
		
		fakeProductClient.save = jasmine.createSpy("SAVE").andCallFake(function() {
		    //document.write('OK');
		    return 'OK';
		});
		
		var product = {};
		
		product.title = 'Shampoo';
		product.description = 'Shampoo para cabelo';
		product.session = 'Banho';
		product.line = 'Banho';
		product.price = 10;
		product.points = 3;
		
		var created = false;

		//when
		runs(function() {
			var promise = ProductService.create(product);
			promise.then(function(result) {
				log.debug('Product created!', result);
				created = true;
			}, function(err) {
				log.debug('Failed to create Product!', err);
			});

			$rootScope.$apply();
		});

		waitsFor(function() {
			return created;
		}, 'ProductService.create()', 500);

		//then
		runs(function() {
			expect(ProductService.list().length).toBe(1);
			expect(ProductService.list()[0].title).toBe('TESTE OK');
		});
	});
	
});