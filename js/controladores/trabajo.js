'use strict'

app.controller("TrabajoCtrl", function ($scope, $routeParams, $location, $firebaseObject, Trabajo) {
	
	
	$scope.trabajos = Trabajo.all;
	var trabajoId = $routeParams.trabajoId;

	if (trabajoId) {
		$scope.trabajoElegido = Trabajo.obtenerTrabajo(trabajoId);
	};


	$scope.publicarTrabajo = function (trabajo) {
		Trabajo.publicar(trabajo).then(function(){
			console.log("Trabajo creado exitosamente!");
			$location.path("/buscar");
		});
		
	}

	$scope.editarTrabajo = function () {
		Trabajo.editar($scope.trabajoElegido).then(function(){
			console.log("Trabajo editado exitosamente!");
			$location.path("/buscar");
		});
	}
});