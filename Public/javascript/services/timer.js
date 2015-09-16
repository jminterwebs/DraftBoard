
angular.module('DraftBoard').service('Timer', function(){
    this.square = function (a) { return a*a};

    this.timer = function startTimer(duration) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $('#time').text(minutes + ":" + seconds);
        $('.draftbtn').click(function(){
            timer = 90;

        })

        if (--timer < 0) {

            timer = duration;
        }

    }, 1000);
}







});
