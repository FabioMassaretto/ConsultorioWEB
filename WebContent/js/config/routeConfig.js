angular.module("consultorio", ["ngRoute"])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/partial/inicio.html"
    })
    .when("/medicos", {
        templateUrl : "view/medicos.html",
        controller : "medicosCtrl"
    })
    .when("/consultorios", {
        templateUrl : "view/consultorios.html",
        controller : "consultoriosCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/"});
    
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('');
});