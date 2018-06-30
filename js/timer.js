'use strict';

var totalTime = 10;
var timerInterval;
var timerSection = document.getElementById('timerSection');
var timerBarEl = document.getElementById('timerBar');
function countDownTimer() {
  totalTime--;
  var countdown = function () {
    console.log(totalTime--);
    if (totalTime < 0) {
      clearInterval(timerInterval);
    }
  };
  timerInterval = setInterval(countdown, 1000);
}

timerSection.addEventListener('click', startTimerBar);


function startTimerBar(event) {
  event.preventDefault();
  var animationTime = 'timerBar ' + totalTime + 's';
  timerBar.style.animation = animationTime;
  countDownTimer();
}


// animation: timerBar 10s;