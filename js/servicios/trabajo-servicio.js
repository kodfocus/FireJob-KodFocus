'use strict'

app.factory("Trabajo", function(FBURL, $firebaseArray, $firebaseObject, Aut) {

	var ref = new Firebase(FBURL);
	var trabajos = $firebaseArray(ref.child("trabajos"));
	var usuario = Aut.usuario;

	var Trabajo = {
		all: trabajos,

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