angular
    .module('myApp')
    .controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
        // controller1 logic goes here
        $scope.person = {
            name: "Durga"
        };
        $scope.articles = [{
            id: 1,
            title: "Congress fires Digvijay Singh",
            desc: "Fed up with growing incompetency of senior party leader Digvijay Singh in linking and blaming Narendra Modi with any ongoing controversial event of late, Congress High Command has decided to fire the RSS hand finder. Sources tell Faking News that"
        },{
            id: 2,
            title: "Madhya Pradesh Polls",
            desc: "Madhya Pradesh polls: Women voters outnumbered men in 25 seats. Bhopal: Women voters outnumbered men in 25 out of the total 230 assembly constituencies where polling was held on November 25 for the Madhya Pradesh assembly elections"
        },{
            id: 3,
            title: "Cambridge gurus studying Rajasthan polls",
            desc: "Rajasthan's elections have caught the fancy of professors and research scholars from United Kingdom who are studying the way elections are fought in state and how the nation as a whole behaves during polls. Dr Anastasia Piliavsky who is a professor"
        },{
            id: 4,
            title: "Narendra Modi takes on Ashok Gehlot",
            desc: "Lashing out at the Ashok Gehlot-led Government for failing to do or achieve anything in Rajasthan, Bharatiya Janata Party (BJP) prime ministerial candidate Narendra Modi on Thursday said basic facilities were still not being provided to the people"
        }]
    }]);
