angular
    .module('myApp')
    .controller('homeCtrl', ['$scope', 'articles', function ($scope, articles) {
        // controller1 logic goes here
        $scope.person = {
            name: "Durga"
        };
        $scope.articles = articles;
    }]);
