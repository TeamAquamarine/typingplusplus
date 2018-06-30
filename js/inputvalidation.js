'use strict';
var shake = document.getElementsByClassName('shake');
debugger;
shake.addEventListener('keypress', textValidation);
debugger;

function textValidation(event) {
  console.log('alert working');
  event.preventDefault();

}


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
