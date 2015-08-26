angular.module('DraftBoard').filter('playersFilter', function () {
    return function (input, filterObject) {
        if (filterObject == undefined) { return input; }

        var searchName = filterObject.name.toLowerCase();
        var searchPosition = filterObject.position.toLowerCase();
        var out = [];
        if (input != undefined) {
            for (var i = 0; i < input.length; i++) {

                var firstName = input[i].First != undefined ? input[i].First.toString().toLowerCase() : '';
                var lastName = input[i].Last != undefined ? input[i].Last.toString().toLowerCase() : '';
                var team = input[i].Team != undefined ? input[i].Team.toString().toLowerCase() : '';
                var position = input[i].Position != undefined ? input[i].Position.toString().toLowerCase() : '';

                var filterCondition = ((searchPosition === 'all') || (position.indexOf(searchPosition) > -1))
                    && ((searchName == '') || (firstName.indexOf(searchName) > -1) || (lastName.indexOf(searchName) > -1) || (team.indexOf(searchName) > -1));

                if (filterCondition) {
                    out.push(input[i]);
                }
            }
        }
        return out;
    };
});
