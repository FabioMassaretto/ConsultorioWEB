angular.module("consultorio").controller("medicosCtrl", function ($scope, $http) {
	$scope.app = "Lista Telefonica";
	$scope.medicos = [];
	$scope.teste = "d";
	
	var carregarMedicos = function () {
		$http({
			method: 'GET',
			url: 'http://localhost:100/ConsultorioAPI/medicos'
		}).then(function (response) {
			$scope.medicos = response.data;
			console.log(response);
		},function (error) {
			$scope.message = "Aconteceu um problema: " + error;
		});
	};

	$scope.adicionarMedico = function (medico) {
		var medicoJson = JSON.stringify(medico)
		$http.post("http://localhost:100/ConsultorioAPI/medicos", medicoJson)
		.then(function (response){
			delete $scope.medicos;
			$scope.medicoForm.$setPristine();
			carregarMedicos();
		},function (error){
			$scope.message = "Aconteceu um problema: " + error;
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
	
	$scope.apagar = function(medicoSelecionado){
		var medicoJson = JSON.stringify(medicoSelecionado)
		
		$http({
			method: 'DELETE',
			url: 'http://localhost:100/ConsultorioAPI/medicos',
			data: medicoJson,
		    headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    }
		}).then(function(response) {
			delete $scope.medicos;
			$scope.medicoForm.$setPristine();
			carregarMedicos();
		}, function (error){
			$scope.message = "Aconteceu um problema: " + error;
		});
		
		/*$http.delete("http://localhost:100/ConsultorioAPI/medicos", medicoJson)
		.then(function (response){
			delete $scope.medicos;
			$scope.medicoForm.$setPristine();
			carregarMedicos();
		},function (error){
			$scope.message = "Aconteceu um problema: " + error;
		});*/
	};

	carregarMedicos();
});