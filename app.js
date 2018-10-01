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
            templateUrl : 'pages/reach.html',
            activetab: 'advertise'
        })

        .when('/upcomingevents', {
            templateUrl : 'pages/upcomingevents.html',
            controller : 'upcomingeventsController',
            activetab : 'upcomingevents'
        })

        .when('/crossword', {
            templateUrl : 'pages/crossword.html',
            controller : 'crosswordController',
            activetab : 'crossword'
        })

        .when('/40404040404040404!!!!', {
            templateUrl : 'pages/fourohfour.html'
        })

        .otherwise('/40404040404040404!!!!')

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

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
