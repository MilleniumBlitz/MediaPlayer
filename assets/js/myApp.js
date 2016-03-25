var app = angular.module( 'mediaPlayer', [ 'ngMaterial', 'ngRoute', 'ngAnimate' ]);

app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .dark();
    });

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'templates/welcome.html',
            controller: 'controller'
        }).
        when('/welcome', {
            templateUrl: 'templates/welcome.html',
            controller: 'controller'
        }).
        when('/download', {
            templateUrl: 'templates/download.html',
            controller: 'controller'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
