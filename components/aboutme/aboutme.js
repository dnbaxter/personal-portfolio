angular.module("portfolioApp")

.directive("aboutMe", function () {
    return {
        restrict: "AE",
        templateUrl: "components/aboutme/aboutme.html"
    }
});