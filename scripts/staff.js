wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Suzanne Kukec": "skukec@wisc.edu",
            "Edwin Neumann" : "eneumann3@wisc.edu"
        }

        $scope.staffWriting = [
          "*Erin Clements",
          "*Erica Cavalche",
          "*Katlyn Nohr",
          "*Jemimah Mawande",
          "Sarah Gerarden",
          "Makenna Hall",
          "Ana Alba",
          "Ben Hayes",
          "Alfred Sunaryo",
          "Partick Byrne",
          "Nyah Banik",
          "Nandan Venkatesan",
          "Isabella Wegner",
          "Daniel Yao",
          "Johnathon Brehm",
          "Brianna Tobin",
          "Whitney Huang",
          "Sofia Noejovich",
          "Camey Zussman",
          "Sydney Heimer",
        ]

         $scope.staffPhotography = [
           "*Jason Hakamaki",
           "*Hamoud Alshammari",
           "Cody Schwartz",
           "Ella Gao",
           "Simon Hensen",
           "Julia Mauser",
           "Mayukh Misra",
           "Gary Gensen",
           "Mary Shaughessy",
           "Casey Schackow",
           "Alex Lape",
           "Carter Swedal",
           "Annie Helmes",
           "Beth Enright"
        ]

        $scope.staffGraphic = [
          "*Patricia Stan",
          "Jonathan Evans",
          "Laura Rodricks",
        ]

        $scope.staffBusiness = [
          "*Jake Cohn",
          "*Max Kaminski",
          "Josh Niesen",
          "Owen Trast",
          "Wyatt Eiden",
        ]

        $scope.staffWeb = [
          "*Eric Shumaker",
          "James Earley",
          "Emily Cebasek",
        ]

        $scope.staffPublicRelations = [
          "*Amalia Zeinemann",
          "*Ayushi Gangwal",
          "*Akshaya Thiru",
        ]
    }
]);
