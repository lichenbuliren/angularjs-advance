/**
 * Created by heaven on 2015/1/13.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('TestFormModule',['$scope',function($scope){
    $scope.user = {
        userName: 'HeavenRu',
        password: ''
    };
    $scope.save = function(){
        alert('表单提交');
    };
}]);
