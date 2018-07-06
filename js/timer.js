'use strict';
//global variables 
var timeInterval;

/***********************************
*     Timer Object Constructor     *
************************************/
function Timer(totalTime) {
  this.totalTime = totalTime;
  this.timeRemaining = this.totalTime;

}

Timer.prototype.startTimer = function () {
  var animationTime = 'timerBar ' + this.totalTime + 's linear forwards';
  timerBar.style.animation = animationTime;
  this.countDown();
};

Timer.prototype.countDown = function () {
  var _this = this;
  timeInterval = setInterval(function () {
    if (_this.timeRemaining > 0) {
      _this.timeRemaining--;
      console.log(_this.timeRemaining);
    } else {
      var loseMsg = 'Sorry, ' + currentUser.name + '... You\'re fired!';
      highScoreArray.push(currentUser);
      localStorage.setItem('highScoreArray', JSON.stringify(highScoreArray));
      currentUser.highScore = 0;

      localStorage.setItem('highScoreMsg', JSON.stringify(loseMsg));
      window.location.href = 'https://teamaquamarine.github.io/html/high_score.html';

      clearInterval(timeInterval);
    }
  }, 1000);
  this.timeRemaining = _this.timeRemaining;
};

Timer.prototype.stopTimer = function () {
  var animationTime = 'timerBar ' + this.totalTime + 's linear forwards paused';
  timerBar.style.animation = animationTime;
  clearInterval(timeInterval);
};

Timer.prototype.resetTimer = function () {
  timerBar.style.animation = '';
  this.timeRemaining = this.totalTime;
};