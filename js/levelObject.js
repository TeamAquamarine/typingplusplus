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
  this.timer = timer;
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
  console.log(pEl);
  codePromptEl.appendChild(pEl);
};

//new levels
new Level(1, levelOnePrompts);
new Level(2, levelTwoPrompts);

// render level one
console.log(levelArray[0]);
levelArray[0].render();