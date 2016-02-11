var wemApp = angular.module('wemApp', ['ngRoute', 'ngStorage']);

// configure the routes
wemApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'homeController'
    })
    .when('/articles', {
        templateUrl : 'pages/articles.html',
        controller  : 'articlesController'
    })
    .when('/articles/:article/:articleSlug', {
        templateUrl : 'pages/single.html',
        controller  : 'singleController'
    })
    .otherwise('/');


});



// $scope.wpArticles = "";
//
// $http.get('http://wisconsinengineer.com/?json=1')
//     .success(function (data) {
//         // $scope.wpArticles = data.posts.slice(0,6);
//         $scope.wpArticles = data.posts;
//         console.log(data.posts);
//         // $scope.fromTheBlog = data.slice(0,6);
//     })
//     .error(function (data, status, headers, config) { // Error if problems with JSON
//         console.log("Error loading JSON");
//     });





wemApp.factory("getWP", ['$http',function($http){
    var obj = {};

    obj.fetchArticles = function(){
        return $http.get('http://wisconsinengineer.com/?json=1');
    }

 return obj;
}]);

// Home page controller
wemApp.controller('homeController', ['$scope', '$http', 'getWP',
    function($scope, $http, getWP) {

        // Menu controller, used across all pages
        $scope.toggleMenu = function(){
            $("#main-nav").slideToggle();
            $("#menu-btn").toggleClass("ion-navicon").toggleClass("ion-ios-close-empty");
        }

        $scope.homeBG="https://static.pexels.com/photos/420/industry-rails-train-path.jpg";


        getWP.fetchArticles().success(function(response){
            $scope.wpArticles = response.posts.slice(0,4);
            console.log($scope.wpArticles)
        });





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

        getWP.fetchArticles().success(function(response){
            $scope.wpArticles = response.posts;
            console.log($scope.wpArticles)
        });





    }
]);


// Articles page controller
wemApp.controller('singleController', ['$scope', '$location', '$anchorScroll', '$rootScope', '$route', '$routeParams', 'getWP',
    function($scope, $location, $anchorScroll, $rootScope, $route, $routeParams, getWP) {

        $scope.currentArticle = $routeParams.article;

        getWP.fetchArticles().success(function(response){
            $scope.currentArticle = response.posts[$scope.currentArticle];
            console.log($scope.currentArticle)
        });



    }
]);



wemApp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
