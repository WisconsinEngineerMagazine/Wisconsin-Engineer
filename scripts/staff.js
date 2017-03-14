wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Nathaniel Corey": "corey2@wisc.edu",
            "Matt Henricks": "mchenricks@wisc.edu"
        }

        $scope.staffWriting = [
          "*Alyssa Hantzsch",
          "*Stacy Montgomery",
          "*Brandon Grill",
          "*Mikaela O'Keefe",
          "Jordan Wolff",
          "Morgan Adkins",
          "Stephen Schwartz",
          "Nena Nakum",
          "Casey Miller",
          "Madison Knobloch",
          "Edwin Neumann",
          "Yinghong Liu",
          "Chris Hanko",
          "Ben Zastrow",
          "Connor Welch",
          "Ruite Guo",
          "Tom Eithun",
          "Krishna Patel",
          "Eric Fleming",
          "Kirsten Pelkey",
          "Emily Morzewski"
        ]


         $scope.staffPhotography = [
           "*Heather Shumaker",
           "*Matt Henricks",
           "Chris DuPre",
           "Dylan Geulig",
           "Therese Besser",
           "Brendan Hanke",
           "Beth Enright",
           "Robin Ritchey",
           "Alexander Fanner",
           "Lauren Kuzminski",
           "Abhi Kumar",
           "Shashank Agrawal",
           "Simon Hensen",
           "Lili Haskins",
           "Ben Chen",
           "Carter Swedal",
           "Lianne Komen"
        ]

        $scope.staffGraphic = [
          "*Suzanne Kukec",
          "*Patricia Stan",
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
          "Vanessa Chavez",
          "James Earley",
          "Ruite Guo",
          "Eric Shumaker"
        ]


    }
]);
