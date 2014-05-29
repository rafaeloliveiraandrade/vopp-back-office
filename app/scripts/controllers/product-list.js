(function ($, angular, alert, confirm, unescape) {
    'use strict';
    angular
        .module('tnt.backoffice.product.list.ctrl', ['tnt.backoffice.product.service'])
        .controller('ProductListCtrl',
            
        	function ($scope, ProductService) {

       		 $scope.products = ProductService.list();
        	
             $scope.product = undefined;

             $scope.remove = function () {
            	 //TODO Promessa
            	 //TODO Janela de confirmacao
            	 //TODO msg de erro
            	 //TODO msg sucesso
            	 ProductService.remove($scope.product);
             };          
        }); 
}(jQuery, angular, window.alert, window.confirm, window.unescape));