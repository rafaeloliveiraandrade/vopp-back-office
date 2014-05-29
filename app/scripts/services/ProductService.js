(function (angular) {
    'use strict';

    angular
        .module('tnt.backoffice.product.service', ['tnt.backoffice.product.client'])
        .service(
            'ProductService',
            function ProductService (ProductClient) {

            	this.list =
                    function () {
                        var result = null;
                        try {
                            result = ProductClient.list();
                        } catch (err) {
                            $log.debug('ProductClient.list: Unable to recover the list of products. Err=' + err);
                        }
                        return result;
                    };
                    
                    this.remove =
                        function () {
                            var result = null;
                            try {
                                result = ProductClient.remove();
                            } catch (err) {
                                $log.debug('ProductClient.remove: Unable to remove the product. Err=' + err);
                            }
                            return result;
                        };
            });
})(angular);