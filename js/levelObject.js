'use strict';
/***********************************
*     Global Variables             *
************************************/
var levelArray = [];
var levelOnePrompts = ['a + b', 'b - c', 'c * d'];
var levelTwoPrompts = ['e / f', 'f % g', 'g +=1'];

/***********************************
*     DOM access nodes             *
************************************/

var codePromptEl = document.getElementById('codePromptTest');

/***********************************
*     Level Constructor            *
************************************/
//level constructor (level, codePromptArray, timer)
function Level(level, codePromptArray, timer) {
  this.level = level;
  this.codePromptArray = codePromptArray;
  this.timer = new Timer(timer);
  levelArray.push(this);
}

// split prompt for input check validation
Level.prototype.parsePrompt = function (prompt) {
  var parsedPrompt = prompt.split('');
  return parsedPrompt;
};

// Render level and current prompt to the screen
Level.prototype.render = function () {
  var pEl = document.createElement('p');

  // TODO: Handle individual level logic here. Input check, etc.
  pEl.textContent = this.codePromptArray[0];
  codePromptEl.appendChild(pEl);

  // Start timer
  this.timer.startTimer();
};

//new levels
new Level(1, levelOnePrompts, 10);

// render level one
levelArray[0].render();
console.log(levelArray[0].timer.totalTime);
console.log(levelArray[0].timer.timeRemaining);