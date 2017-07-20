var wemApp = angular.module('wemApp', ['ngRoute', 'ngAnimate']);



// configure the routes
wemApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'homeController',
        activetab: 'home'
    })
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController',
        activetab: 'contact'
    })
    .when('/staff', {
        templateUrl : 'pages/staff.html',
        controller  : 'staffController',
        activetab: 'staff'
    })
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        activetab: 'contact'
    })
    .when('/advertise', {
        templateUrl : 'pages/advertise.html',
        activetab: 'advertise'
    })
    .when('/promo', {
        templateUrl : 'pages/photo-contest.html',
        controller : 'photo-contestController',
        activetab: 'photo-contest'
    })
    .when('/40404040404040404!!!!', {
        templateUrl : 'pages/fourohfour.html'
    })
    .otherwise('/40404040404040404!!!!')

});




// Home page controller
wemApp.controller('mainController', ['$scope', '$http', '$route',
    function($scope, $http, $route) {

        $scope.$route = $route;

        // Menu controller, used across all pages
        $scope.isMobile = false;
        $scope.toggleMenu = function () {
            $scope.isMobile = true;
        }
        $scope.closeMenu = function () {
            $scope.isMobile = false;
        }

        // Active link handling
        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }

    }
]);
