angular.module('DraftBoard').controller('DraftlistController', function(Draft, $scope){

    $scope.playerlist = Draft.query();

    $scope.PlayerSelected = function($event, player){

        $scope.player = player.list;
    };

    $scope.nameSearch = {
        name: '',
        position: 'All'
    };

      var draftpick = 1,
          draftround = 0,
          draftTeamUp = 0,
          draftTeam = 11;

    $scope.selectPlayer = function(){

     if($scope.player){

         //  Draft round
        if(draftpick % 10 == 1) {
         draftround ++;
        }

        // Sets odd rounds to pick up even rounds to pick down.dsdsd
        if(draftround % 2){
            draftTeam = 11;
            draftTeamUp ++;
            $scope.player.DraftedTeamPosition = draftTeamUp;
        }else {
            draftTeamUp = 0;
            draftTeam--;
            $scope.player.DraftedTeamPosition = draftTeam;
        }

            $scope.player.DraftedRound = draftround;
            $scope.player.DraftedPick  = draftpick;
            $scope.player.DraftedTeamName = "BenchWarmers";

        //increment the pick and clear the selection
            draftpick ++;
            $scope.player = "";
     }

    };





});
