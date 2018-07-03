'use strict';
//globals
var userNode = document.getElementById('playerNameInput');

// Grab users array from local storage or create an empty array if nothing is stored
var userArray = JSON.parse(localStorage.getItem('users') || '[]');

//user constructor
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

//listener/handler to create user objects
userNode.addEventListener('submit', createUserObject);

function createUserObject(event){
  new User(event.target.value);
}


//New instance to check its working
var Fred = new User('Fred');
console.log(userArray);
