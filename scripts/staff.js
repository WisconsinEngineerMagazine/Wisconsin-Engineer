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
          "*Nandan Venkatesan",
          "*Johnathon Brehm",
          "Sydney Heimer",
          "Sofia Noejovich",
          "Alfred Sunaryo",
          "Brianna Tobin",
          "Daniel Yao",
          "Camey Zussman",
          "Sarah Gerarden",
          "Ana Alba",
          "Isabella Wegner",
          "Whitney Huang",
          "Teja Balasubramanian",
          "Jared Vahrenberg",
          "Gabriela Setyawan",
          "Mary Laudon",
          "Alix Rosenblatt",
          "Pierson Chu",
          "Paire Dollevoet",
        ]

         $scope.staffPhotography = [
           "*Jacobo Kirsch",
           "Taha Sawar",
           "Rung Shih",
           "Lucy Kuo",
           "Julien Bravo",
           "Marshall Walters",
           "Austin Nellis",
           "Jared Michael Vahrenberg",
           "Evan Birschbach",
        ]

        $scope.staffGraphic = [
          "*Laura Rodricks",
          "Lucas Bartel",
          "Lujain Al Jumah",
          "Hannah Smoot",
        ]

        $scope.staffBusiness = [
          "*Jake Cohn",
        ]

        $scope.staffWeb = [
          "*Adrian Tse",
          "*Simone Wright",
          "*Vaathsalya Karpe",
        ]

        $scope.staffPublicRelations = [
          "*Ayushi Gangwal",
          "*Akshaya Thiru",
          "*Molly Zeinemann",
        ]
    }
]);
