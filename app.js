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
    .when('/photo-contest', {
        templateUrl : 'pages/photo-contest.html',
        controller : 'promoController',
        activetab: 'promo'
    })
    .when('/40404040404040404!!!!', {
        templateUrl : 'pages/fourohfour.html'
    })
    .otherwise('/40404040404040404!!!!')

    // check browser support
    if(window.history && window.history.pushState) {
      //$locationProvider.html5Mode(true); will cause
      // an error $location in HTML5 mode requires a
      // tag to be present! Unless you set baseUrl tag
      // after head tag like so: <head> <base href="/">

      // // to know more about setting base URL visit:
      // https://docs.angularjs.org/error/$location/nobase

      // if you don't wish to set base URL then use this
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      })
    }

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
