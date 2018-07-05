'use strict';
//globals
var userNode = document.getElementById('playerNameInput');
var playButton = document.getElementById('playGameButton');
var defaultScore = 999990;
// Grab users array from local storage or create an empty array if nothing is stored
var userArray = JSON.parse(localStorage.getItem('users') || '[]');

/***********************************
*     User Constructor             *
************************************/
function User(name) {
  this.name = name;
  this.highScore = 0;
  this.level = 1;
};

//When there is consensus on calculating score can create this function
User.prototype.incrementScore = function() {
  this.highScore += 1000000;
};

//When there is a handler for name input can create this function
User.prototype.storeLocal = function() {
  localStorage.setItem(JSON.stringify('users', this));
};


/***********************************
*     Listener/Handler for User    *
************************************/
//listener/handler to create user objects
playButton.addEventListener('click', createUserObject);

// Creates a new user and saves to local storage when name is inputted and play is clicked
function createUserObject(event){
  event.preventDefault();
  currentUser = new User(userNode.value);
  userArray.push(currentUser);
  localStorage.setItem('users', JSON.stringify(userArray));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

/********************************************************************************
*         Instantiate default users for high score                              *
********************************************************************************/

//function to create a default user
function createDefaultUser (name){
  var defaultUser = new User(name);
  defaultUser.highScore = defaultScore;
  defaultScore++;
  userArray.push(defaultUser);
  localStorage.setItem('users', JSON.stringify(userArray));
}

//function to create set of default top 10 users
function populateUserArray (defaultScore){
  createDefaultUser('Jasper', defaultScore);
  createDefaultUser('Declan', defaultScore);
  createDefaultUser('Sadie', defaultScore);
  createDefaultUser('Finley', defaultScore);
  createDefaultUser('Brooklyn', defaultScore);
  createDefaultUser('Gabe', defaultScore);
  createDefaultUser('Evelyn', defaultScore);
  createDefaultUser('Jameson', defaultScore);
  createDefaultUser('Isla', defaultScore);
  createDefaultUser('Nicholas', defaultScore);
}

//calls the populate default users in not in storage already
if (!localStorage.getItem('users')){
  populateUserArray();
}
