var app = angular.module('mediaPlayer', ['ngMaterial', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/musicLibrary.html'
        })
    }]);
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/videos', {
            templateUrl: 'templates/videoLibrary.html'
        })
    }]);

app.config(function ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .backgroundPalette('blue-grey')
});