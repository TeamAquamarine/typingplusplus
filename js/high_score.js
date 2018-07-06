'use strict';

/********************************************************************************
*         high score table render                                                          *
********************************************************************************/

// global variables
var tableNode = document.getElementById('highScore');
var playerArray = JSON.parse(localStorage.getItem('highScoreArray'));

//sort playerArray
var rankedArray = playerArray.slice();
rankedArray.sort(function(a,b) {
  return a.highScore - b.highScore;
});
rankedArray = rankedArray.reverse();

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
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = (rankedArray[i].name);
    trEl.appendChild(tdEl);
    //add highscore
    tdEl = document.createElement('td');
    tdEl.textContent = (rankedArray[i].highScore);
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

renderTable();
