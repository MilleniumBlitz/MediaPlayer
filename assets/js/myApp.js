var app = angular.module( 'mediaPlayer', [ 'ngMaterial', 'ngRoute', 'ngAnimate' ]);

app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .dark();
    });

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'templates/musicLibrary.html',
            controller: 'musicController'
        })
    }]);