function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
        $('.draftbtn').click(function(){
            timer = 90;

        })

        if (--timer < 0) {

            timer = duration;
        }

    }, 1000);
}


  jQuery(function ($) {
    var minutethirty = 60 * 1.5,
        display = $('#time');

    $('#time').click( function(){
        startTimer(minutethirty, display);
        console.log('time');

    });

});


