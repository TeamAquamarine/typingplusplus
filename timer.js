'use strict';

var timerTotal = 10;
var timerInterval;

function countDownTimer() {
  var countdown = function () {
    console.log(totalTime--);
    if (totalTime === 0 ) {
      clearInterval(timerInterval);
    }
  };
  timerInterval = setInterval(countdown, 1000);
}

countDownTimer();

