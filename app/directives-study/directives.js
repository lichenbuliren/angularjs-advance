/**
 * Created by heaven on 2015/1/13.
 */
var myApp = angular.module('myApp',[]);


myApp.run(function($templateCache){
    $templateCache.put('hello.html','<div>hello everyone !!!</div>');
});
myApp.directive('hello',function($templateCache){
    return {
        restrict: 'AEMC',
        //template: '<div>Hi everyone !</div>',
        //templateUrl: 'hello.html',
        template: $templateCache.get('hello.html'),
        replace: true
    }
});
