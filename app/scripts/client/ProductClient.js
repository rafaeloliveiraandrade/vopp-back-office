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
                        session: 'Cosm�ticos',
                        line: 'Inverno',
                        price: 8},                    
                    {
                        title: 'Creme',
                        session: 'Cosm�ticos',
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