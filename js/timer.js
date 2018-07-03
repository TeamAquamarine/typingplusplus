'use strict';
//global variables 
var timerInterval;

// var timerStartButton = document.getElementById('start');
// var timerStopButton = document.getElementById('stop');

// //bar timer count down
// function countDownTimer() {
//   totalTime--;
//   var countdown = function () {
//     console.log(totalTime--);
//     if (totalTime < 0) {
//       clearInterval(timerInterval);
//     }
//   };
//   timerInterval = setInterval(countdown, 1000);
// }
// //start button event listener
// timerStartButton.addEventListener('click', startTimerBar);
// //animation for timer bar
// function startTimerBar(event) {
//   event.preventDefault();
//   var animationTime = 'timerBar ' + totalTime + 's linear forwards';
//   timerBar.style.animation = animationTime;
//   console.log(timerBar);
//   countDownTimer();
// }
// //stop button for timer
// timerStopButton.addEventListener('click', stopTimerBar);

// // Stop timer, pause animation
// function stopTimerBar(event) {
//   event.preventDefault();
//   var animationTime = 'timerBar ' + totalTime + 's linear forwards paused';
//   timerBar.style.animation = animationTime;
//   clearInterval(timerInterval);
// }

// function resetTimerBar() {
//   totalTime = 30;
//   timerBar.style.animation = '';
// }

/***********************************
*     Timer Object Constructor     *
************************************/
function Timer(totalTime) {
  this.totalTime = totalTime;
  this.timeRemaining = this.totalTime;

}

Timer.prototype.startTimer = function () {
  var animationTime = 'timerBar ' + this.timeRemaining + 's linear forwards';
  timerBar.style.animation = animationTime;
  this.countDown();
};

Timer.prototype.countDown = function () {
  var _this = this;
  var timeInterval = setInterval(function () {
    if(_this.timeRemaining > 0){
      _this.timeRemaining--;
      console.log(_this.timeRemaining);
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
  this.timeRemaining = _this.timeRemaining;
};