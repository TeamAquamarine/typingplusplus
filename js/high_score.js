'use strict';

/********************************************************************************
*         high score table render                                                          *
********************************************************************************/

// global variables
var tableNode = document.getElementById('highScore');
var playerArray = localStorage.getItem('users');

//render header row function
function createHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ('Player Name');
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ('High Score');
  trEl.appendChild(thEl);

  tableNode.appendChild(trEl);
}

//render table rows
function createTableBody() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  //create row for each player in array
  for (var i = 0; i < 10; i++ ) {
    //add player name
    tdEl = document.createElement('td');
    tdEl.textContent = (playerArray[i].name);
    trEl.appendChild(tdEl);
    //add highscore
    tdEl = document.createElement('td');
    tdEl.textContent = (playerArray[i].highScore);
    trEl.appendChild(tdEl);
    //append player row to table
    tableNode.appendChild(trEl);
  }
}

//renders table
function renderTable() {
  createHeaderRow();
  createTableBody();
}