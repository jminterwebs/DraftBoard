angular.module('DraftBoard').controller('DraftlistController', function(Draft, $scope){


    $scope.playerlist = Draft.query();
    $scope.teams = [1,2,3,4,5,6,7,8,9,10];

    $scope.PlayerSelected = function($event, player){

        $scope.player = player.list;
    };




      var draftpick = 1, // intial draft pick number
          draftround = 0, // on first pick will change to 1
          draftTeamUp = 0,  // same as above
          draftTeam = 11;  // changes to 10 on click before needed to count down.

    $scope.selectPlayer = function(){

     if($scope.player){

         //  Draft round increased darft round whenever the last digit is a 1
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

        //increment the pick and clear the selection
            draftpick ++;
            $scope.player = "";
     }


    };


    // Helper for filter search
     $scope.nameSearch = {
        name: '',
        position: 'All'
    };

});
