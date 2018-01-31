angular.module("app").config(function ($routeProvider) {
	$routeProvider.when("/medicos", {
		templateUrl: "view/medicos.html",
		controller: "medicosCtrl",
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
	});
	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",

	});
	$routeProvider.otherwise({redirectTo: "/"});
});