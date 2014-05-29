(function ($, angular, alert, confirm, unescape) {
    'use strict';
    angular
        .module('tnt.backoffice.product.add.ctrl', ['tnt.backoffice.product.service'])
        .controller('ProductAddCtrl',
            
        	function ($scope, ProductService) {
        	
        	$scope.product = undefined;
        	        	       	        	
        	$scope.create = function () {
            	 //TODO Promessa
            	 //TODO Janela de confirmacao
            	 //TODO msg de erro
            	 //TODO msg sucesso
            	 ProductService.create($scope.product);        		 
             };          
        }); 
}(jQuery, angular, window.alert, window.confirm, window.unescape));