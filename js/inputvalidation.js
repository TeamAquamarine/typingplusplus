'use strict';
//creating the event listeners for the validation input box
var typingInput = document.getElementById('typingInput');
typingInput.addEventListener('keypress', textValidation);
typingInput.addEventListener('animationend', refreshShake);

//this is our function to validate text
function textValidation(event) {
  console.log(event.key);
  if (event.key === 'h'){
    event.preventDefault();
    typingInput.classList.add('shake');
  }
}
//this is our function which allows the validation input box to continue shaking
function refreshShake() {
  typingInput.classList.remove('shake');
}
