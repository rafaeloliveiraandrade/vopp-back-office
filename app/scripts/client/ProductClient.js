(function (angular) {
    'use strict';

    angular
        .module('tnt.backoffice.product.client',[])
        .service(
            'ProductClient',
            function ProductClient () {

                this.list =
                    function () {
                        
                	var result = [{
                        title: "Sabonete",
                        session: 'Cosméticos',
                        line: 'Inverno',
                        price: 8},                    
                    {
                        title: 'Creme',
                        session: 'Cosméticos',
                        line: 'Inverno',
                        price: 13}];
                	
                        return result;
                    };  
                    
                    this.remove =
                        function () {
                            
                    	var result = 'OK';
                    	//TODO
                            return result;
                        };  
            });         
})(angular);