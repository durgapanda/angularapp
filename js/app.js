// application code goes here
angular.module('myApp', [
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');
        $stateProvider

            //state1 block starts
            .state('home', {
                url: '/home',
                templateUrl: "templates/home.html",
                controller: "homeCtrl",
                resolve: {
                    articles: ['$http', function ($http) {
                        return $http.get('/api/articles.json').then(function (response) {
                            return response.data;
                        })
                    }]
                }
            }).state('about', {
                url: "/about",
                templateUrl: "templates/about.html",
                controller: "aboutCtrl"
            })
        //state1 ends

        // insert states in this section





    }]);
