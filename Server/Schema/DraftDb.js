var mongoose = require('mongoose');
var Schema = mongoose.Schema;


  module.exports = mongoose.model('DraftDb', {
      PlayerFirst:           String,
      PlayerLast:            String,
      PlayerTeam:            String,
      Position:              String,
      ByeWeek:               String,
      Rank:                  Number,
      DraftedRound:          Number,
      DraftedPick:           Number,
      DraftedTeamPosition:   Number,
      DraftedTeam: {
                    TeamName: String,
                    TeamNeeds: {    QB:  Number,
                                    RB:  Number,
                                    WR:  Number,
                                    TE:  Number,
                                    DEF: Number,
                                    K:   Number,
                                 }
                    }
  });
