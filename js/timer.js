'use strict';

var totalTime = 10;
var timerInterval;
var timerSection = document.getElementById('timerSection');

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
  var animationTime = 'timerBar ' + totalTime + 's linear';
  timerBar.style.animation = animationTime;
  console.log(timerBar);
  countDownTimer();
}


// animation: timerBar 10s;