
angular.module('DraftBoard').factory('Draft', function($resource){
  return $resource('/board', {}, {});
});
