'use strict';

/* Controllers */


function GenericViewCtrl($scope, ngMaterial) {
    
    sum = function(a , b){
        console.log(a+b);
    }
    
}
GenericViewCtrl.$inject = ['$scope'];


function ContactViewCtrl($scope, $http) {

    $scope.lastForm = {};

   

    $scope.resetForm = function() {
        $scope.form = angular.copy($scope.lastForm);
    }

}

ContactViewCtrl.$inject = ['$scope', '$http'];



