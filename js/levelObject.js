'use strict';
/***********************************
*     Global Variables             *
************************************/
var currentLevel;
var currentPrompt;
var currentPromptChar = 0;
var parsedCurrentPrompt;
var levelArray = [];
var currentScore = document.getElementById('score');
var currentLevelRender = document.getElementById('level');
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser.level);
var levelOnePrompts = ['a + b', 'b - c', 'c * d'];
var levelTwoPrompts = ['e / f', 'f % g', 'g +=1'];
// var levelOnePrompts = ['var i = 0', 'console.log', 'function winLevel(){}'];
// var levelTwoPrompts = ['document.getElementById', 'event.preventDefault();', 'if (!localStorage.getItem)'];
/***********************************
*     DOM access nodes             *
************************************/

var typingInputNode = document.getElementById('typingInput');
var codePromptNode = document.getElementById('promptSection');
var promptTextNode = document.getElementById('promptText');

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
  promptTextNode.textContent = '';
  // TODO: Handle individual level logic here. Input check, etc.
  var randomNum = Math.floor(Math.random() * this.codePromptArray.length);
  currentPrompt = this.codePromptArray[randomNum];
  promptTextNode.textContent = currentPrompt;
  typingInputNode.value = '';
  currentPromptChar = 0;

  // Start timer
};


typingInputNode.addEventListener('focus', startTimerHandler);

function startTimerHandler() {
  console.log('in event handler');
  parsedCurrentPrompt = currentLevel.parsePrompt(currentPrompt);
  console.log(parsedCurrentPrompt);
  if (currentLevel.timer.timeRemaining === currentLevel.timer.totalTime) {
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
  if (keyPressed !== parsedCurrentPrompt[currentPromptChar]) {
    typingInput.classList.add('shake');
  } else {
    typingInput.value += keyPressed;
    currentPromptChar++;
    winLevel();
  }
}
//this is our function which allows the validation input box to continue shaking
function refreshShake() {
  typingInput.classList.remove('shake');
}

//new levels
new Level(currentUser.level, levelOnePrompts, 10);
new Level(currentUser.level, levelTwoPrompts, 20);
// render level one
levelArray[0].render();

function winLevel() {
  //adds to high score and increments the level
  if (currentPromptChar == parsedCurrentPrompt.length) {
    currentUser.highScore += 1000000;
    renderLevel();
    currentUser.level++;
    renderScore();
    currentLevel.timer.stopTimer();
    typingInputNode.blur();
    //end of game send user to high score and generate table
    if (currentUser.level > levelArray.length) {
      window.location.href = '../html/high_score.html';
    } else {
      levelArray[currentUser.level - 1].render();
      currentLevel.timer.resetTimer();
      console.log(parsedCurrentPrompt);
    }

  }
}

//current score render
function renderScore() {
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  score.textContent = ('Score: ' + currentUser.highScore);
  ulEl.appendChild(liEl);
};

function renderLevel() {
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  level.textContent = ('Level: ' + currentUser.level);
  ulEl.appendChild(liEl);
};