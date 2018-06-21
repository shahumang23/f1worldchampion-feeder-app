angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getWorldChampionLists = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/driverStandings/1.json?callback=JSON_CALLBACK&limit=11&offset=55'
      });
    }

    ergastAPI.getWinnerListOfYear = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+ id +'/results/1.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  })
  .factory('winnerData', function() {
    var saveData = {};

    function set(data) {
      saveData = data;
    }

    function get() {
      return saveData;
    }

    return {
      set: set,
      get: get
    }
  });
