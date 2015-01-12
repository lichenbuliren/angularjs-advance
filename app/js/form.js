/**
 * Created by heaven on 2015/1/12.
 */

var userInfoApp = angular.module('userInfoApp',[]);

userInfoApp.controller('UserInfoController',['$scope',function($scope){
    $scope.userInfo = {
        email: '617106268@qq.com',
        password: '6171123213',
        autoLogin: true
    };

    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };

    $scope.setFormData = function(){
        $scope.userInfo = {
            email: '1360253584@qq.com',
            password: 'asdfsafasdf',
            autoLogin: false
        };
    };

    $scope.resetFormData = function(){
        $scope.userInfo = {
            email: '617106268@qq.com',
            password: '6171123213',
            autoLogin: true
        };
    };
}]);
