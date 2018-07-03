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

var codePromptNode = document.getElementById('promptSection');

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
  var randomNum = Math.floor(Math.random() * (this.codePromptArray.length) - 1);
  pEl.textContent = this.codePromptArray[randomNum];
  codePromptNode.appendChild(pEl);

  // Start timer
};

//new levels
new Level(1, levelOnePrompts, 10);

// render level one
levelArray[0].render();