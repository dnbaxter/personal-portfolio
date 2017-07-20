var app = angular.module("portfolioApp");

app.directive("myNav", function() {

    return {
        restrict: "AE",
        templateUrl: "components/navbar/navbar.html"
    }

});