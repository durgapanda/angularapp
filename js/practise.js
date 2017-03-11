angular
    .module("my-App", [
        'ui-router'
    ])
    .config(['$urlRouteProvider', '$stateProvider', function ($stateProvider, $urlRouteProvider) {
        $urlRouteProvider.otherwise('/');

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