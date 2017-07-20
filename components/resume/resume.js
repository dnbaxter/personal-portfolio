angular.module("portfolioApp")

    .directive("myResume", function () {
        return {
            restrict: "AE",
            templateUrl: "components/resume/resume.html"
        }
    });



