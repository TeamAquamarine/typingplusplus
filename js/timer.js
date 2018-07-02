'use strict';
//global variables 
var totalTime = 60;
var timerInterval;
var timerStartButton = document.getElementById('start');
var timerStopButton = document.getElementById('stop');
//bar timer count down
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
//start button event listener
timerStartButton.addEventListener('click', startTimerBar);
//animation for timer bar
function startTimerBar(event) {
  event.preventDefault();
  var animationTime = 'timerBar ' + totalTime + 's linear forwards';
  timerBar.style.animation = animationTime;
  console.log(timerBar);
  countDownTimer();
}
//stop button for timer
timerStopButton.addEventListener('click', stopTimerBar);

// Stop timer, pause animation
function stopTimerBar(event) {
  event.preventDefault();
  var animationTime = 'timerBar ' + totalTime + 's linear forwards paused';
  timerBar.style.animation = animationTime;
  clearInterval(timerInterval);
}
