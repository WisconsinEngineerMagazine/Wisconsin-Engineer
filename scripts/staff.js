wemApp.controller('staffController', ['$scope',
    function($scope) {

        ga('send', 'pageview', '/about');

        $scope.eics = {
            "Suzanne Kukec": "skukec@wisc.edu",
            "Edwin Neumann" : "eneumann3@wisc.edu"
        }

        $scope.staffWriting = [
          "*Erin Clements",
          "*Morgan Adkins",
          "*Katlyn Nohr",
          "*Jemimah Mawande"
          "Patrick Byrne",
          "Sarah Gerarden",
          "Makenna Hall",
          "Erica Cavalche",
          "Lucy Shoemaker",
          "Ana Alba",
          "Ben Hayes",
          "Alfred Sunaryo",
          "Nyah Banik",
          "Nandan Venkatesan",
          "Isabella Wegner",
          "Akshat",
          "Daniel Yao",
          "Johnathon Brehm",
          "Ethan Padgett",
          "Ishan Luitel",
          "Brianna Tobin",
          "Cecelia Kaeder",
          "Adam Mcavoy",
          "Caitlin Bolz",
          "Yanxu Guo",
          "Lauren Westlund",
          "Sion Wilks-Boguszewicz",
          "Prasoon Sinha",
          "Drew Accola",
          "Camey Zussman",
          "Evan Hakamaki",
          "Sherine McManus",
          "Ashley Pernsteiner",
          "Leta Landucci",
          "Elizabeth Eberhardt",
          "Sharon Koretskov",
          "Taylor Berger",
          "Jake Beshlian",
          "Madison Shipshock",
          "Ivan Purgill",
          "Emma Swanson",
          "Hyunsung Ko",
          "Connor Sanda",
          "Sydney Heimer",
          "Megan Baranek",
          "Chaerim Lee",
          "Zoe Delaney",
          "Mayank Dornala",
          "Dan Sa",
          "Eric Tian",
          "Whitney Huang",
          "Sofia Noejovich"
        ]

         $scope.staffPhotography = [
           "*Jason Hakamaki",
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
          "Jonathan Evans"
        ]

        $scope.staffBusiness = [
          "*Jake Cohn",
          "*Max Kaminski",
          "Josh Niesen",
          "Owen Trast",
          "Wyatt Eiden"
        ]

        $scope.staffWeb = [
          "*James Earley",
          "*Eric Shumaker",
          "Tingyou Guo",
          "Thomas Hansen",
          "Matt Kesler"
        ]

        $scope.staffPublicRelations = [
          "*Amalia Zeinemann",
          "*Ayushi Gangwal",
          "*Akshaya Thiru"

        ]

    }
]);
