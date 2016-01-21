angular.module('appRoutes',['ngRoute'])




.config(function($routeProvider,$locationProvider){

	$routeProvider

	.when('/',{
		templateUrl:'app/views/index.html'
	})

	when('/signup',{
		templateUrl:'app/views/signup.html'
	})

	$locationProvider.html5Mode(true);
})

