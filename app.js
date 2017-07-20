var app = angular.module("portfolioApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "homeCtrl"
        })

});