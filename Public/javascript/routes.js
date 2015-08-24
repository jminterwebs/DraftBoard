angular.module('DraftBoard').config(function($routeProvider){
 $routeProvider
    .when('/', {
        templateUrl: "/templates/list.html",
        controller: "DraftlistController"

 })
    .when('/:team', {
        templateUrl: "/templates/teams/team.html",
        controller: "TeamShowController"
 });

});
