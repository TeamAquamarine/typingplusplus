'use strict';
//globals
var userNode = document.getElementById('playerNameInput');
console.log(userNode);
var playButton = document.getElementById('playGameButton');
// Grab users array from local storage or create an empty array if nothing is stored
var userArray = JSON.parse(localStorage.getItem('users') || '[]');

/***********************************
*     User Constructor             *
************************************/
function User(name) {
  this.name = name;
  this.highScore = 0;
  this.level = 1;
  userArray.push(this);
  localStorage.setItem('users', JSON.stringify(userArray));
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
  console.log(userNode.value);
  new User(userNode.value);
}