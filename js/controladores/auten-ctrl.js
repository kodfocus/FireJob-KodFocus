app.controller("AutenCtrl", function ($scope, Aut, $location){
	$scope.sesion = function(usuario){
		Aut.sesion(usuario).then(function (){
			console.log("Sesion iniciada exitosamente!");
			$location.path("/buscar");
		}, function(error){
			console.log(error);
		});
	}

	$scope.registro = function(usuario){
		Aut.registro(usuario).then(function () {
			console.log("Registrado exitosamente!");
			$location.path("/buscar");
		}, function(error){
			console.log(error);
		});
	}
});