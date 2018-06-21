angular.module('F1FeederApp.controllers', []).

  /* World Champions controller */
  controller('worldChampionsController', function($scope, $location, ergastAPIservice, winnerData) {
    $scope.yearsOfWinnerList = [];
   
    $scope.go = function ( path, data ) {
        winnerData.set({
            year: data.season,
            givenName: data.DriverStandings[0].Driver.givenName
        });
        $location.path( path );
    };
    ergastAPIservice.getWorldChampionLists().success(function (response) {
        $scope.yearsOfWinnerList = response.MRData.StandingsTable.StandingsLists;
    });
  }).

  /* Winner Of Year controller */
  controller('winnerOfYearController', function($scope, ergastAPIservice, winnerData) {
    var winnerDetails = winnerData.get();
    $scope.year = winnerDetails.year;
    $scope.givenName = winnerDetails.givenName;
    $scope.racesWinnerList = [];

    ergastAPIservice.getWinnerListOfYear($scope.year).success(function (response) {
        $scope.raceYear = response.MRData.RaceTable.season; 
        $scope.racesWinnerList = response.MRData.RaceTable.Races; 
    });
  });