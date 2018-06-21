angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/wolrdChampions", {templateUrl: "sections/worldChampionsLists.html", controller: "worldChampionsController"}).
	when("/winnerOfYear", {templateUrl: "sections/winnersOfYear.html", controller: "winnerOfYearController"}).
	otherwise({redirectTo: '/wolrdChampions'});
}]);