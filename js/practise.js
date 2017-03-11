angular
.module("myApp", [
    'ui.router'
])
.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state("home", {
        url: "/home",
        template: "<h2 class='p20'>this is the template for the home route</h2>",
        controller: "homeCtrl"
    })
    .state("about", {
        url: "/about",
        template: "<h3 class='p10'>This is the template for the about route</h3>",
        controller: "aboutCtrl"
    })
}])
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    
}
