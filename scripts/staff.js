wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Erin Clements": "eclements3@wisc.edu",
            "Katlyn Nohr" : "knohr@wisc.edu"
            //not a spelling mistake, just a weird name
        }

        $scope.staffWriting = [
          "*Erica Cavalche",
          "*Makenna Hall",
          "*Johnathon Brehm",
          "*Jemimah Mawande",
          "Sarah Gerarden",
          "Ana Alba",
          "Ben Hayes",
          "Alfred Sunaryo",
          "Partick Byrne",
          "Gaby Setyawan",
          "Isabella Wegner",
          "Daniel Yao",
          "Brianna Tobin",
          "Whitney Huang",
          "Sofia Noejovich",
          "Camey Zussman",
          "Sydney Heimer",
          "Teja Balasubramanian",
          "Mary Laudon",
          "Pierson Chu",
          "Jared Vahrenber",
          "Paige Dollevoet",
          "Alix Rosenblatt"
        ]

         $scope.staffPhotography = [
           "*Jacobo Kirsch",
           "Rung Shih",
           "Julien Bravo",
           "Marshall Walters",
           "Austin Nellis",
           "Jared Michael Vahrenberg",
        ]

        $scope.staffGraphic = [
          "*Laura Rodricks",
          "Isabella Wegner",
        ]

        $scope.staffBusiness = [
          "*Jake Cohn",
          "*Max Kaminski",
          "Owen Trast",
          "Wyatt Eiden",
          "Josh Niesen"
        ]

        $scope.staffWeb = [
          "*Sarwagya Jain",
          "Adrian Tse",
          "Vaathsalya Karpe",
        ]

/*        $scope.staffPublicRelations = [
          "*Ayushi Gangwal",
          "*Akshaya Thiru",
          "*Molly Zeinemann",
        ]*/
    }
]);
