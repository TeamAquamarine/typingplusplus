'use strict';
//Global variables
var levelArray = [];

//level constructor (level, textArray, timer)
function Level(level, text, timer) {
  this.level = level;
  this.text = text;
  this.timer = timer;
  levelArray.push(this);
}

var level1 = new Level(1, ['var i = 0', 'i = 0; i < 3; i++']);
var level2 = new Level(2, [' ( ) ! @ : / ~ { }', 'function(){};']);

Level.prototype.parsePrompt = function (prompt) {
  var parsedPrompt = prompt.split('');
  return parsedPrompt;

};
var a = level1.parsePrompt(level1.text[0]);
var b = level1.parsePrompt(level1.text[1]);
var c = level2.parsePrompt(level2.text[0]);
var d = level2.parsePrompt(level2.text[1]);