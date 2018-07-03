'use strict';
/***********************************
*     Global Variables             *
************************************/
var typingInputNode = document.getElementById('typingInput');
var currentLevel;

var levelArray = [];
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser.level);
var levelOnePrompts = ['a + b', 'b - c', 'c * d'];
var levelTwoPrompts = ['e / f', 'f % g', 'g +=1'];

/***********************************
*     DOM access nodes             *
************************************/

var codePromptNode = document.getElementById('promptSection');

/***********************************
*     Level Constructor            *
************************************/
//level constructor (level, codePromptArray, timer)
function Level(level, codePromptArray, timer) {
  this.level = level;
  currentLevel = this;
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
  var randomNum = Math.floor(Math.random() * this.codePromptArray.length);
  pEl.textContent = this.codePromptArray[randomNum];
  codePromptNode.appendChild(pEl);

  // Start timer
};


typingInputNode.addEventListener('keypress', startTimerHandler);

function startTimerHandler() {
  console.log('in event handler');
  currentLevel.timer.startTimer();
}

//new levels
new Level(currentUser.level, levelOnePrompts, 10);

// render level one
levelArray[0].render();