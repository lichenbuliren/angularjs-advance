/**
 * Created by heaven on 2015/1/12.
 */

// APP依赖注入
var bookStoreApp = angular.module('bookStoreApp',[
    'ngRoute',
    'ngAnimate',
    'bookStoreCtrls',
    'bookStoreFilters',
    'booksStoreServices',
    'bookStoreDirectives'
]);

//路由配置
bookStoreApp.config(function($routeProvider){
    $routeProvider.when('/hello', {
        templateUrl: 'partials/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
        templateUrl: 'partials/booklist.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    });
});
