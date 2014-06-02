(function (angular) {
    'use strict';

    angular.module('tnt.backoffice.config', []).service('Config', function Config () {
        ObjectUtils.ro(this, 'BACKEND-URL', '');
        ObjectUtils.ro(this, 'BACKEND-USER', 'backoffice');
        ObjectUtils.ro(this, 'BACKEND-PASSWORD', 'senha!@#123');   
    });
    
})(angular);