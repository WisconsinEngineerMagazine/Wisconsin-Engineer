wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Nathaniel Corey": "corey2@wisc.edu",
            "Matt Henricks": "mchenricks@wisc.edu"
        }

        $scope.staffWriting = [
          "*Alyssa Hantzsch",
          "*Brandon Grill",
          "*Mikaela O'Keefe",
          "*Stacy Montgomery",
          "Claire Holesovsky",
          "Connor Welch",
          "Erin Clements",
          "Jemimah Mawand",
          "Jordan Wolff",
          "Katlyn Nohr",
          "Morgan Adkins",
          "Ruite Guo",
          "Thomas Hansen",
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
          "Marvyn Hsn",
          "Sadeq Hashemi",
          "Ian Geocaris",
          "Kurtis Scott",
          "Brooke Berglund",
          "Tim Campbell",
          "James Johnston",
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
          "*Rachel Reiter",
          "*Thomas Hansen",
          "Eric Shumaker",
          "James Earley",
          "Ruite Guo",
          "Vanessa Chavez"
        ]

        $scope.staffSocialMedia = [
          "*Eric Fleming",
          "*Morgan Adkins",
        ]


    }
]);
