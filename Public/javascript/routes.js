angular.module('Cityapp').config(function($routeProvider){
 $routeProvider
    .when('/', {
        templateUrl: "/templates/city/index.html",
        controller: "CityCreateController"

 })
    .when('/city/:city', {
        templateUrl: "/templates/city/city.html",
        controller: "CityShowController"
 });

});
