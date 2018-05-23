angular.module("consultorio", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/partial/inicio.html"
    })
    .when("/medicos", {
        templateUrl : "view/medicos.html",
        controller : "medicosCtrl"
    })
    .when("/paris", {
        templateUrl : "paris.htm",
        controller : "parisCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/"});
});