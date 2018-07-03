'use strict';

userArray = [];

//user constructor
function User(name) {
  this.name = name;
  highScore = 0;
  level = 1;
  userArray.push(this);
};

//When there is consensus on calculating score can create this function
User.prototype.calcScore = function() {};

//When there is a handler for name input can create this function
User.prototype.storeLocal = function() {};

//New instance to check its working
var Fred = new User(Fred);