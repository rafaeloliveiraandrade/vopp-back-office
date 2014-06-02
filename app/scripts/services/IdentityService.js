(function(angular, uuid) {
	'use strict';

	angular.module('tnt.backoffice.identity', []).service(
			'IdentityService',
			function IdentityService() {

				this.generateUUID = function generateUUID() {
					var d = new Date().getTime();
					var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
							/[xy]/g, function(c) {
								var r = (d + Math.random() * 16) % 16 | 0;
								d = Math.floor(d / 16);
								return (c == 'x' ? r : (r & 0x7 | 0x8))
										.toString(16);
							});
					return uuid;
				};

			});
})(angular, window.uuid);