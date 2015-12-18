'use strict'

app.factory("Trabajo", function(FBURL, $firebaseArray, $firebaseObject, Aut) {

	var ref = new Firebase(FBURL); //Referencia a la App de Firebase
	var trabajos = $firebaseArray(ref.child("trabajos"));//Nodo hijo 'trabajos'
	var usuario = Aut.usuario;//Información del usuario que inició sesión

	var Trabajo = {
		all: trabajos, //Muestra todas las ofertas de trabajo

		//Función para obtener la oferta de Trabajo basado en su Id
		obtenerTrabajo: function(trabajoId){
			return $firebaseObject(ref.child("trabajos").child(trabajoId));
		},

		publicar: function(trabajo){
			trabajo.fecha = Firebase.ServerValue.TIMESTAMP;
			trabajo.gravatar = usuario.profile.gravatar;
			return trabajos.$add(trabajo);
		},

		editar: function(trabajoElegido){
			return trabajoElegido.$save();
		}

	}

	return Trabajo;
});