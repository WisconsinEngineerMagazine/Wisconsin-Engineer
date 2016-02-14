var wemApp = angular.module('wemApp', ['ngRoute', 'ngStorage', 'ngAnimate']);

// configure the routes
wemApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'homeController',
        activetab: 'home'
    })
    .when('/articles', {
        templateUrl : 'pages/articles.html',
        controller  : 'articlesController',
        activetab: 'articles'
    })
    .when('/articles/:article/:articleSlug', {
        templateUrl : 'pages/single.html',
        controller  : 'singleController',
        activetab: 'articles'
    })

    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController',
        activetab: 'contact'
    })
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController',
        activetab: 'about'
    })
    .when('/advertise', {
        templateUrl : 'pages/advertise.html',
        activetab: 'advertise'
    })
    .when('/40404040404040404!!!!', {
        templateUrl : 'pages/fourohfour.html'
    })
    .otherwise('/40404040404040404!!!!')

});




wemApp.factory("getWP", ['$http',function($http){
    var obj = {};

    obj.fetchArticles = function(){
        return $http.get('http://wisconsinengineer.com/?json=1');
    }

 return obj;
}]);


// Home page controller
wemApp.controller('homeController', ['$scope', '$http', '$route', 'getWP',
    function($scope, $http, $route, getWP) {

        $scope.$route = $route;

        // Menu controller, used across all pages
        $scope.toggleMenu = function(){
            $("#main-nav").slideToggle();
            $("#menu-btn").toggleClass("ion-navicon").toggleClass("ion-ios-close-empty");
        }

        $scope.homeBG="https://static.pexels.com/photos/420/industry-rails-train-path.jpg";


        getWP.fetchArticles().success(function(response){
            $scope.homeArticles = response.posts.slice(0,4);
            $scope.wpArticles = response.posts;
            console.log($scope.wpArticles)
        });



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

// Articles page controller
wemApp.controller('articlesController', ['$scope', '$location', '$anchorScroll', '$sessionStorage', 'getWP',
    function($scope, $location, $anchorScroll, $sessionStorage, getWP) {



        // if($sessionStorage.clickedArticle){
        //     $location.hash($sessionStorage.clickedArticle);
        //     $anchorScroll();
        // }

        if($sessionStorage.scrollPos){$scope.articleLimit = $sessionStorage.scrollPos;}else{$scope.articleLimit = 2;}


        $scope.loadButtonText = "Load more articles...";
        $scope.endOfList = false;
        $scope.loadMoreArticles = function(){
            $scope.articleLimit = $scope.articleLimit + 2;
            $sessionStorage.scrollPos = $scope.articleLimit;
            $scope.checkForEnd();
        }

        $scope.checkForEnd = function(){
            if($scope.articleLimit >= $scope.wpArticles.length - 1){
                $scope.loadButtonText = "You've reached the end";
                $scope.endOfList = true;
            }
        }

        $scope.saveScrollPos = function(article){
            $sessionStorage.clickedArticle = article;
        }



    }
]);


// Single page controller
wemApp.controller('singleController', ['$scope', '$rootScope', '$route', '$routeParams', 'getWP',
    function($scope, $rootScope, $route, $routeParams, getWP) {

        $scope.currentArticle = $routeParams.article;

        getWP.fetchArticles().success(function(response){
            $scope.currentArticle = response.posts[$scope.currentArticle];
            console.log($scope.currentArticle)
        });



    }
]);


// Contact page controller
wemApp.controller('contactController', ['$scope', '$http',
    function($scope, $http) {





        $scope.sendBtn = "Send";
        $scope.sendFailed = false;

        $scope.sendForm = function(){

            $scope.sendBtn = "Sending..."
            $scope.messageSent = false;

            if(!$scope.contactName | !$scope.contactEmail | !$scope.contactMessage){
                $scope.sendBtn = "Try again"
                $scope.sendFailed = true;
                return;
            }else{
                $http.post('https://mandrillapp.com/api/1.0//messages/send.json', {
                    'key': 'lq4msOm2tOT7-hPl3fBw6A',
                    'message': {
                        'html': '<span style="font-size:12pt; font-family: Helvetica, sans-serif;"><b>Message From:</b><br>'+$scope.contactName+'<br><br><b>Email Address:</b><br>'+$scope.contactEmail+'<b><br/><br/>Message:</b><br>'+$scope.contactMessage+'<br><br><br><small>This is an automatically-generated email. You can reply to this email like any other email and it will be sent to the original message sender.</small>',
                        'subject': 'Contact WEM - '+$scope.contactName,
                        'from_email': $scope.contactEmail,
                        'from_name': $scope.contactName,
                        'to': [
                            {
                                'email': 'samuels.mitch@gmail.com',
                                'name': 'Mitch Samuels',
                                'type': 'to'
                            }
                        ],
                        'headers': {
                            'Reply-To': $scope.contactEmail
                        }
                    }
                })
                .success(function(data, status, headers, config){
                    console.log("SENT");
                    $scope.sendFailed = false;
                    $scope.sendBtn = "Sent Successfully!";
                    $scope.messageSent = true;
                });

            }


        }



    }
]);


// About page controller
wemApp.controller('aboutController', ['$scope',
    function($scope) {



    }
]);


wemApp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
