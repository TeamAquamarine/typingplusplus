'use strict';
/***********************************
*     Global Variables             *
************************************/
var currentLevel;
var currentPrompt;
var currentPromptChar = 0;
var parsedCurrentPrompt;
var levelArray = [];
var highScoreArray = JSON.parse(localStorage.getItem('highScoreArray') || '[]');
var currentScore = document.getElementById('score');
var currentLevelRender = document.getElementById('level');
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
// var levelOnePrompts = ['a + b', 'b - c', 'c * d'];
// var levelTwoPrompts = ['e / f', 'f % g', 'g +=1'];
var levelOnePrompts = ['var i = 0;', 'console.log()', 'function winLevel(){}'];
var levelTwoPrompts = ['document.getElementById();', 'event.preventDefault();', 'if (!localStorage.getItem){}'];
var levelThreePrompts = ['function User(name){ this.name = name;}','this.highscore = 0; this.level = 1;'];
var levelFourPrompts = ['<p>Hi, how are you?</p>', '<h1>This is a header!</h1>'];
var levelFivePrompts = ['p { color: red }', 'git push origin master', 'mkdir newfolder'];
var levelSixPrompts = ['p { font-family: arial }', 'git checkout -b tuesdayBranch', '#playerOne { color: blue }'];
var levelSevenPrompts = ['git commit -m "this is the best commit ever"', 'cd../..'];
/***********************************
*     DOM access nodes             *
************************************/

var typingInputNode = document.getElementById('typingInput');
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
  renderLevel();
  renderScore();

  // Start timer
};


typingInputNode.addEventListener('focus', startTimerHandler);

function startTimerHandler() {
  parsedCurrentPrompt = currentLevel.parsePrompt(currentPrompt);
  if (currentLevel.timer.timeRemaining === currentLevel.timer.totalTime) {
    currentLevel.timer.startTimer();
  } else {
    typingInputNode.removeEventListener(startTimerHandler);
  }
}

//creating the event listeners for the validation input box
var typingInput = document.getElementById('typingInput');
typingInput.addEventListener('keydown', textValidation);
typingInput.addEventListener('animationend', refreshShake);
//if keypress = ==8 then --currentpromptchar

//this is our function to validate text
function textValidation(event) {
  event.preventDefault(); 
  // debugger;
  var keyPressed = event.key;
  var keyCode = event.keyCode;
  if(keyCode == 8){
    typingInput.classList.add('shake');
  } else if (keyPressed !== parsedCurrentPrompt[currentPromptChar]) {
    typingInput.classList.add('shake');
  } else {
    typingInput.value += keyPressed;
    currentPromptChar++;
    winLevel();
  }
}

function backspaceHandler(event) {
  event.preventDefault();
  if(event.keyCode == 8){
    currentPromptChar--;
  }
}
  // LOOK HERE CONNOR+++++++++=========================================================
//                     if (keyCode == 8) {
//                       currentPromptChar--;
//                       // debugger;
//                     }
  
//   // debugger;
// }

//this is our function which allows the validation input box to continue shaking
function refreshShake() {
  typingInput.classList.remove('shake');
  typingInput.classList.remove('flashGreen');
}

//new levels
new Level(currentUser.level, levelOnePrompts, 10);
new Level(currentUser.level, levelTwoPrompts, 20);
new Level(currentUser.level, levelThreePrompts, 30);
// new Level(currentUser.level, levelFourPrompts, 30);
// new Level(currentUser.level, levelFivePrompts, 30);
// new Level(currentUser.level, levelSixPrompts, 30);
// new Level(currentUser.level, levelSevenPrompts, 30);
// render level one
levelArray[currentUser.level - 1].render();

function winLevel() {
  //adds to high score and increments the level
  if (currentPromptChar == parsedCurrentPrompt.length) {
    typingInputNode.classList.add('flashGreen');
    currentUser.highScore += Math.floor(1000000 * (currentLevel.timer.timeRemaining / currentLevel.timer.totalTime));
    currentUser.level++;
    currentLevel.timer.stopTimer();
    typingInputNode.blur();
    updateLocalStorage();
    //end of game send user to high score and generate table
    if (currentUser.level > levelArray.length) {
      highScoreArray.push(currentUser);
      localStorage.setItem('highScoreArray', JSON.stringify(highScoreArray));
      currentUser.level = 1;
      currentUser.highScore = 0;
      updateLocalStorage();
      var winMsg = 'Congratulations, ' + currentUser.name + '! You\'re promoted!';
      localStorage.setItem('highScoreMsg', JSON.stringify(winMsg));
      window.location.href = '../html/high_score.html';
      highScoreHeader.textContent = 'CONGRATULATIONS, ' + currentUser.name + '! You\'re promoted!';
    } else {
      levelArray[currentUser.level - 1].render();
      currentLevel.timer.resetTimer();
    }

  }
}


//current score render

function updateLocalStorage() {
  userArray = userArray.filter(x => !(x.name === currentUser.name));
  userArray.push(currentUser);
  localStorage.setItem('users', JSON.stringify(userArray));
};

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
