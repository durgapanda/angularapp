angular
    .module("myApp", [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("home", {
                url: "/home",
                template: "template for the home state",
                controller: "homeCtrl"
            })
            .state("about", {
                url: "/about",
                template: "template for the about state",
                controller: "aboutCtrl"
            });
    }]);