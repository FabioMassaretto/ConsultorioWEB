angular.module("app").controller("medicosCtrl", function ($scope, $http) {
	$scope.app = "Lista Telefonica";
	$scope.medicos = [];
	$scope.teste = "d";
	
	var carregarMedicos = function () {
		$http.get("http://localhost:100/ConsultorioAPI/medicos").success(function (data) {
			$scope.medicos = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.adicionarMedico = function (medico) {
		var medicoJson = JSON.stringify(medico)
		$http.post("http://localhost:100/ConsultorioAPI/medicos", medicoJson).success(function (data) {
			delete $scope.medicos;
			$scope.medicoForm.$setPristine();
			carregarMedicos();
		});
	};
	$scope.apagarMedicos = function (medicos) {
		$scope.medicos = medicos.filter(function (medico) {
			if (!medico.selecionado) return medico;
		});
	};
	$scope.isMedicoSelecionado = function (medicos) {
		return medicos.some(function (medico) {
			return medico.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarMedicos();
});