'use strict';
//globals
userArray = [];
var userNode = document.getElementById('playerNameInput');

//user constructor
function User(name) {
  this.name = name;
  this.highScore = 0;
  this.level = 1;
  userArray.push(this);
};

//When there is consensus on calculating score can create this function
User.prototype.calcScore = function() {};

//When there is a handler for name input can create this function
User.prototype.storeLocal = function() {};

//listener/handler to create user objects
userNode.addEventListener('submit', createUserObject);

// function createUserObject(event){
//   new User(event.target);
// }


//New instance to check its working
var Fred = new User(Fred);
