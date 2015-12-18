'use strict'

app.controller("TrabajoCtrl", function ($scope, $routeParams, $location, $firebaseObject, Trabajo) {
	
	
	$scope.trabajos = Trabajo.all; // Variable que lista TODAS las ofertas de Trabajo
	var trabajoId = $routeParams.trabajoId; // Variable para tomar el Id como parametro

	if (trabajoId) {
		// Variable para almacenar la info de la oferta de trabajo seleccionada
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