var wemApp = angular.module('wemApp', ['ngRoute', 'ngStorage', 'ngAnimate']);

// configure the routes
wemApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        activetab: 'home'
    })
    .when('/articles', {
        templateUrl : 'pages/articles.html',
        controller  : 'articlesController',
        activetab: 'articles'
    })
    .when('/articles/:issue/:articleSlug', {
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
        templateUrl : 'pages/sell.html',
        controller  : 'advertiseController',
        activetab: 'advertise'
    })
    .when('/photocontest', {
        templateUrl : 'pages/photocontest.html',
        activetab: 'photocontest'
    })
    .when('/40404040404040404!!!!', {
        templateUrl : 'pages/fourohfour.html'
    })
    .otherwise('/40404040404040404!!!!')

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

});


// Home page controller
wemApp.controller('homeController', ['$scope', '$http', '$route',
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


        $scope.currentImages = [
            "articles/content/images/mar16/ants-ants-antibiotics.jpg",
            "articles/content/images/mar16/closer-look-at-optics.jpg",
            "articles/content/images/mar16/foundry-feature.jpg",
            "articles/content/images/mar16/preparing-for-engineering.jpg",
            "articles/content/images/mar16/nuclear-fusion-not-just-science-fiction.jpg",
            "articles/content/images/mar16/metrics-on-markets.jpg"
        ]
        // $scope.homeBG = $scope.currentImages[Math.floor(Math.random() * $scope.currentImages.length)];
        $scope.homeBG = "articles/content/images/mar16/foundry-feature.jpg";





        $scope.homeArticles = null;
        $http.get('articles/articles.json').success(function(data) {
            $scope.homeArticles = data.slice(0,4);;
            $scope.allArticles = data;
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
wemApp.controller('articlesController', ['$scope', '$location', '$http', '$anchorScroll', '$sessionStorage',
    function($scope, $location, $http, $anchorScroll, $sessionStorage) {

        ga('send', 'pageview', '/articles');




        // if($sessionStorage.clickedArticle){
        //     $location.hash($sessionStorage.clickedArticle);
        //     $anchorScroll();
        // }

        if($sessionStorage.scrollPos){$scope.articleLimit = $sessionStorage.scrollPos;}else{$scope.articleLimit = 10;}



        $scope.loadButtonText = "Load more articles...";
        $scope.endOfList = false;
        $scope.loadMoreArticles = function(){
            $scope.articleLimit = $scope.articleLimit + 10;
            $sessionStorage.scrollPos = $scope.articleLimit;
            $scope.checkForEnd();
        }

        $scope.checkForEnd = function(){
            if($scope.articleLimit >= $scope.allArticles.length){
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
wemApp.controller('singleController', ['$scope', '$rootScope', '$route', '$routeParams',
    function($scope, $rootScope, $route, $routeParams) {

        ga('send', 'pageview', '/singlearticle');


        $scope.slug = $routeParams.articleSlug;
        $scope.issue = $routeParams.issue;
        $scope.totalSlug = $scope.issue + "/" + $scope.slug;
        $scope.imageUrl = "../articles/content/images/"+$scope.totalSlug+".jpg";
        $scope.directUrl = "../articles/content/"+$scope.totalSlug+".html";


        console.log($scope.issue);


        // Images
        // if($scope.issue === "December 2015"){
        //     $scope.imageUrl = "../articles/content/images/dec15/"+$scope.slug+".jpg";
        // }else if($scope.issue === "March 2016"){
        //     $scope.imageUrl = "../articles/content/images/mar16/"+$scope.slug+".jpg";
        // }
        //
        // // Direct Links
        // if($scope.issue === "December 2015"){
        //     $scope.directUrl = "../articles/content/dec15/"+$scope.slug+".html";
        // }else if($scope.issue === "March 2016"){
        //     $scope.directUrl = "../articles/content/mar16/"+$scope.slug+".html";
        // }

    }
]);


// Contact page controller
wemApp.controller('contactController', ['$scope', '$http',
    function($scope, $http) {


        ga('send', 'pageview', '/contact');



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
                                'email': 'wiscengrmagazine@gmail.com',
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

        ga('send', 'pageview', '/about');


        $scope.staffWriting = [
            "ALEX BELICH",
            "KELSEY BRIGHT",
            "ALEX CHAY",
            "JACOB FREE",
            "NATE FRIAR",
            "BRANDON GRILL",
            "CHRIS HANKO",
            "MATTHEW LATUSZEK",
            "SARA MANULIK",
            "ANASTASIA MONTGOMERY",
            "KELSEY MURPHY",
            "EMILY MORZEWSKI",
            "STEPHEN SCHWARTZ",
            "YAMAN SANGER",
            "BRIAN ZHOU"
        ]


         $scope.staffPhotography = [
            "CHARLES FATUNBI",
            "MATT HENRICKS",
            "SAKURA KAWANO",
            "SUMEET KATARIYA",
            "KYLE PEDERSEN",
            "MARGO LABIK",
            "AMBER LIU",
            "SHU PAN",
            "JIELONG PENG",
            "SETH REUTER",
            "ROBIN RITCHEY",
            "HEATHER SCHUMAKER",
            "CODY SCHWARTZ",
            "JUSTIN WILLIAMS",
            "RYAN YAN"
        ]

        $scope.staffGraphic = [
            "MOHAMMAD ALDOLAIJAN",
            "CHRISTOPHER BRADLEY",
            "MARGARET BUTZEN",
            "VICKY HUANG",
            "MAXWELL JIN",
            "HELEN KEYES",
            "YANGBO SHUI",
            "TANAE SWENSON",
            "TUSHAR VERMA"
        ]

        $scope.staffBusiness = [
            "BRENDEN PITTMAN",
            "PAUL MILLER",
            "MATT GULLIXSON",
            "TYLER LIBBEY"
        ]

        $scope.staffWeb = [
            "Mitch Samuels",
            "Sam Calmes"
        ]


        $scope.deptHeads = [
            {
                "name" : "ALEX STEINHAUER",
                "department" : "Editor-in-chief",
                "major" : "Mechanical Engineering",
                "year" : "Senior"

            },{
                "name" : "NICK SCHOENHEIDER",
                "department" : "Managing Editor",
                "major" : "Industrial Engineering",
                "year" : "Senior"

            },{
                "name" : "Will Myers",
                "department" : "Business",
                "major" : "Operations Management",
                "year" : "Senior"

            },{
                "name" : "MATT GULLIXSON",
                "department" : "Business",
                "major" : "Geological Engineering",
                "year" : "Senior"

            },{
                "name" : "ASON WAN",
                "department" : "Graphic Design",
                "major" : "Biomedical Engineering",
                "year" : "Junior"

            },{
                "name" : "Brent Grimm",
                "department" : "Graphic Design",
                "major" : "Computer Engineering",
                "year" : "Senior"

            },{
                "name" : "Nathaniel Corey",
                "department" : "Photography",
                "major" : "Mechanical Engineering",
                "year" : "Junior"

            },{
                "name" : "HEATHER SHUMAKER",
                "department" : "Photography",
                "major" : "Biomedical Engineering",
                "year" : "Junior"

            },{
                "name" : "Alyssa Hantzsch",
                "department" : "Writing",
                "major" : "Mechanical Engineering",
                "year" : "Senior"

            },{
                "name" : "Justin Alt",
                "department" : "Writing",
                "major" : "Biomedical Engineering",
                "year" : "Senior"

            },{
                "name" : "Charlie Duff",
                "department" : "Writing",
                "major" : "Mechanical Engineering",
                "year" : "Senior"

            },{
                "name" : "MIKAELA O’KEEFE",
                "department" : "Writing",
                "major" : "Industrial Engineering",
                "year" : "Junior"
            },{
                "name" : "Mitch Samuels",
                "department" : "Web",
                "major" : "Undecided",
                "year" : "Junior"
            }
        ]



    }
]);



// Single page controller
wemApp.controller('advertiseController', ['$scope', '$rootScope', '$route', '$routeParams', 'getWP',
    function($scope, $rootScope, $route, $routeParams, getWP) {
        ga('send', 'pageview', '/advertise');

    }
]);




wemApp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
