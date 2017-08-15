angular.module("quoteApp", [])
.controller("quoteController", function($scope, $http) {

    $http.get("/api/random-quote").then(function(response) {
        console.log(response.data.author);
        $scope.quote = response.data;
    })
});
