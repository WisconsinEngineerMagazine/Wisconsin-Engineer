wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Steven Musbach": "smusbach@wisc.edu",
            "Matt Henricks": "mchenricks@wisc.edu"
        }

        $scope.staffWriting = [
          "*Alyssa Hantzsch",
          "*Brandon Grill",
          "*Mikaela O'Keefe",
          "*Stacy Montgomery",
          "Chris Hanko",
          "Claire Holesovsky",
          "Connor Welch",
          "Eric Fleming",
          "Erin Clements",
          "Jemimah Mawande",
          "Jordan Wolff",
          "Katlyn Nohr",
          "Morgan Adkins",
          "Ruite Guo",
          "Tom Eithun",
          "Yinghong Liu"
        ]


         $scope.staffPhotography = [
           "*Beth Enright",
           "*Heather Shumaker",
           "Abhi Kumar",
           "Carter Swedal",
           "Cody Schwartz",
           "Dylan Guelig",
           "Erin Clements",
           "Lauren Kuzminski",
           "Lili Haskins",
           "Lianne Komen",
           "Simon Hensen",
           "Therese Besser"
        ]

        $scope.staffGraphic = [
          "*Patricia Stan",
          "*Suzanne Kukec",
          "James Johnston",
          "Jonathan Evans",
          "Tim Campbell",
          "Lindsay George"
        ]

        $scope.staffBusiness = [
          "*Steven Musbach",
          "Alex Hirsche",
          "Felix Nguyen",
          "Helen Keyes",
          "Eric Wolfe",
          "Mike Landowski",
          "Cody Larson",
          "Laine Kuether"
        ]

        $scope.staffWeb = [
          "*Thomas Hansen",
          "*James Earley",
          "Eric Shumaker",
          "Junior Quintero",
          "Ruite Guo",
          "Kelly Wegner",
          "Matt Kesler"
        ]

        $scope.staffSocialMedia = [
          "*Eric Fleming",
          "*Morgan Adkins",
        ]


    }
]);
