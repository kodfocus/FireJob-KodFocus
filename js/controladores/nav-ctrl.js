'use strict'

app.controller("NavCtrl", function($scope, $location, Aut){
	$scope.usuarioActual = Aut.usuario;
	$scope.sesionIniciada = Aut.sesionIniciada;

	$scope.cerrarSesion = function(){
		Aut.cerrarSesion();
		console.log("Sesión cerrada exitosamente!")
		$location.path("/buscar");
	}
});