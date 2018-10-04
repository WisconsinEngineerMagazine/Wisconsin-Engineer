wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Steven Musbach": "smusbach@wisc.edu",
            "Edwin Neumann" : "eneumann3@wisc.edu"
        }

        $scope.staffWriting = [
          "*Stacy Montgomery",
          "*Brandon Grill",
          "*Morgan Adkins",
          "*Erin Clements",
          "Ana Alba",
          "Patrick Byrne",
          "Erica Cavalche",
          "Sarah Gerarden",
          "Makenna Hall",
          "Chris Hanko",
          "Ben Hayes",
          "Yuliia Kap",
          "Yinghong Liu",
          "Jemimah Mawande",
          "Katlyn Nohr",
          "Junior Quintero",
          "Lucy Shoemaker",
          "Jordan Wolff",
          "Ben Zastrow"
        ]

         $scope.staffPhotography = [
           "*Brendan Hanke",
           "*Jason Hakamaki",
           "Gary Geson",
           "Alex Lape",
           "Mayukh Misra",
           "Casey Schackow",
           "Cody Schwartz",
           "Mary Shaughnessy",
           "Carter Swedal",
           "Simon Hensen"
        ]

        $scope.staffGraphic = [
          "*Patricia Stan",
          "*James Johnston"
        ]

        $scope.staffBusiness = [
          "*Jake Cohn",
          "*Max Kaminski",
          "Josh Niesen"
        ]

        $scope.staffWeb = [
          "*James Earley",
          "*Eric Shumaker",
          "Jiangang Chen",
          "Tingyou Guo",
          "Thomas Hansen",
          "Matt Kesler",
        ]

        $scope.staffSocialMedia = [
          "*Eric Fleming",
          "Lexi Kenwood"
        ]

    }
]);
