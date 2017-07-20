angular.module("portfolioApp")

.directive("myProjects", function () {
    return {
        restrict: "AE",
        templateUrl: "components/myprojects/myprojects.html"
    }
});