/**
 * Created by heaven on 2015/1/13.
 */
/**
 * Created by heaven on 2015/1/13.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('MyController',['$scope',function($scope){
    $scope.loadData = function(){
        console.log('加载数据中。。。');
    }
}]);

myApp.controller('MyController2',['$scope',function($scope){
    $scope.loadData2 = function(){
        console.log('加载数据中。。。222222222');
    }
}]);

myApp.directive('loader',function(){
    return {
        restrict: 'AE',
        link: function(scope,element,attrs){
            element.bind('mouseenter',function(){
                //scope.loadData();
                //scope.$apply('loadData()');
                scope.$apply(attrs.howtoload);
            });
        }
    }
});