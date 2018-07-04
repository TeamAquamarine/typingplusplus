'use strict';
/***********************************
*     Global Variables             *
************************************/
var typingInputNode = document.getElementById('typingInput');
var currentLevel;
var currentPrompt;
var currentPromptChar = 0;
var parsedCurrentPrompt;
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
  currentPrompt = this.codePromptArray[randomNum];
  pEl.textContent = currentPrompt;
  codePromptNode.appendChild(pEl);
  
  // Start timer
};


typingInputNode.addEventListener('focus', startTimerHandler);

function startTimerHandler() {
  console.log('in event handler');
  parsedCurrentPrompt = currentLevel.parsePrompt(currentPrompt);
  console.log(parsedCurrentPrompt);
  if(currentLevel.timer.timeRemaining === currentLevel.timer.totalTime){
    currentLevel.timer.startTimer();
  } else {
    typingInputNode.removeEventListener(startTimerHandler);
  }
}

//creating the event listeners for the validation input box
var typingInput = document.getElementById('typingInput');
typingInput.addEventListener('keypress', textValidation);
typingInput.addEventListener('animationend', refreshShake);

//this is our function to validate text
function textValidation(event) {
  console.log(event.key);
  event.preventDefault();
  var keyPressed = event.key;
  if(keyPressed !== parsedCurrentPrompt[currentPromptChar]){
    typingInput.classList.add('shake');
  } else {
    typingInput.value += keyPressed;
    currentPromptChar++;
  }
}
//this is our function which allows the validation input box to continue shaking
function refreshShake() {
  typingInput.classList.remove('shake');
}

//new levels
new Level(currentUser.level, levelOnePrompts, 10);

// render level one
levelArray[0].render();