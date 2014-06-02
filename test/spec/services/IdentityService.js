'use strict';

describe('Service: IdentityService', function() {

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
    });

    // instantiate service
    var IdentityService = null;
    beforeEach(inject(function(_IdentityService_) {
        IdentityService = _IdentityService_;
    }));

    it('should generate a valid UUID', function() {
        var uuid = IdentityService.generateUUID();
        expect(uuid.length).toBe(36);
    });

});
