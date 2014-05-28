'use strict';

angular.module('voppBackOfficeApp')
  .controller('ProductListCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
       
    $http.get('resources/products.json').then(function(response) {
    	$scope.produtos = response.data;
    });
     
    $scope.productAdd = function() {
        $location.path('/product-add');
    };    
 
  });
