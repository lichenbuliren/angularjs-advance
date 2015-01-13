/**
 * Created by heaven on 2015/1/13.
 */

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'partials/index.html'
            },
            'topbar@index': {
                templateUrl: 'partials/topbar.html'
            },
            'main@index': {
                templateUrl: 'partials/home.html'
            }
        }
    }).state('index.usermng', {
        url: '/usermng',
        views: {
            'main@index': {
                templateUrl: 'partials/usermng.html',
                controller: function ($scope, $state) {
                    $scope.addUserType = function () {
                        $state.go("index.usermng.addusertype");
                    }
                }
            }
        }
    }).state('index.usermng.highendusers', {
        url: '/highendusers',
        templateUrl: 'partials/highendusers.html'
    }).state('index.usermng.normalusers', {
        url: '/normalusers',
        templateUrl: 'partials/normalusers.html'
    }).state('index.usermng.lowusers', {
        url: '/lowusers',
        templateUrl: 'partials/lowusers.html'
    }).state('index.usermng.addusertype', {
        url: '/addusertype',
        templateUrl: 'partials/addusertypeform.html',
        controller: function ($scope, $state) {
            $scope.backToPrevious = function () {
                window.history.back();
            }
        }
    }).state('index.permission', {
        url: '/permission',
        views: {
            'main@index': {
                template: '这里是权限管理'
            }
        }
    }).state('index.report', {
        url: '/report',
        views: {
            'main@index': {
                template: '这里是报表管理'
            }
        }
    }).state('index.settings', {
        url: '/settings',
        views: {
            'main@index': {
                template: '这里是系统设置'
            }
        }
    });
});
