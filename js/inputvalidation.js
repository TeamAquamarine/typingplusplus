'use strict';
var typingInput = document.getElementById('typing-input');
typingInput.addEventListener('keypress', textValidation);


//this is our function to validate text
function textValidation(event) {
  event.preventDefault();
  console.log(event.key);
  if (event.key === 'h'){
    typingInput.className = 'shake';
  }

}
// function handleClickEvent(event) {
//   var clickedNode = event.target;
//   if (clickedNode.dataset.index >= 0) {
//     Product.renderThreeRandomly();
//     Product.totalClicks++;
//     Product.productsArray[clickedNode.dataset.index].votedTimes++;
//     storeTotalClicks()

// function click(event) {
//   document.getElementsByClassName('shake').addEventListner('submit', function (event) {
//   });
//   event.preventDefault();
// }
// click();

// // var shake = document.getElementsByClassName('shake');



// function validation() {
//   var shake = document.getElementsByClassName('shake');
//   shake.classList += 'validation';
//   if (validation.innertext == false) {
//     shake.style.backgroundColor = '#ff4c4c';
//   }
//   // debugger;

//   // validation.classList.add('error');

//   preventDefault();
// }

// validation();
