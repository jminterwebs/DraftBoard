angular.module('DraftBoard').controller('DraftlistController', function(Draft, $scope, $http, $routeParams, $location){


    $scope.playerlist = Draft.query();

    $scope.PlayerSelected = function($event, player){


    $scope.player = player.list;

    };

    $scope.nameSearch = {
        name: '',
        position: 'All'
    };

      var draftpick = 1;
      var draftTeam = 1;
      var draftround = 0;
      var draftTeamUp = 0;
      var draftTeam = 11;
    $scope.selectPlayer = function(player){


        //  Draft round
        if(draftpick % 10 == 1) {
         draftround ++;
        }

        // Sets odd rounds to pick up even rounds to pick down.
        if(draftround % 2 == !0){
                draftTeam = 11;
               draftTeamUp ++;
            $scope.player.DraftedTeamPosition = draftTeamUp;
        }else {
            draftTeamUp = 0
            draftTeam--;
            $scope.player.DraftedTeamPosition = draftTeam;
        }

      $scope.player.DraftedRound = draftround;
      $scope.player.DraftedPick  = draftpick;
      $scope.player.DraftedTeamName = "BenchWarmers";


      var value = $scope.playerlist.indexOf($scope.player);

      //remove from draft list
      //$scope.playerlist.splice(value, 1);


        //increment the pick
        draftpick ++;



     console.log("Draft pick " + $scope.player.DraftedPick + " Drafted Round " + $scope.player.DraftedRound + " Team Drafted " + $scope.player.DraftedTeamPosition );
        $scope.player = "";

    };





});
