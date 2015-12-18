'use strict'

var app = angular.module("FireJobApp", [
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'firebase'
])
.constant('FBURL', 'https:/<URL-de-Tu-App>.firebaseio.com/')
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'vistas/main.html'
		})
		.when('/publicar', {
			templateUrl: 'vistas/publicar.html',
			controller: 'TrabajoCtrl'
		})
		.when('/editar/:trabajoId', {
			templateUrl: 'vistas/editar.html',
			controller: 'TrabajoCtrl'
		})
		.when('/buscar', {
			templateUrl: 'vistas/buscar.html',
			controller: 'TrabajoCtrl'
		})
		.when('/detalle/:trabajoId', {
			templateUrl: 'vistas/detalle.html',
			controller: 'TrabajoCtrl'
		})
		.when('/registro', {
			templateUrl: 'vistas/registro.html',
			controller: "AutenCtrl"
		})
		.when('/sesion', {
			templateUrl: 'vistas/sesion.html',
			controller: "AutenCtrl"
		})
		.otherwise({
			redirectTo: '/'
		});
});