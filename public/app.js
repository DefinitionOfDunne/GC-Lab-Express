angular.module("quoteApp", [])
.controller("quoteController", function($scope, $http) {

    $http.get("/random").then(function(response) {
        console.log(response.data);
        $scope.quote = response.data;
    })
});
