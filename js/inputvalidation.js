'use strict';
var typingInput = document.getElementById('typingInput');
typingInput.addEventListener('keypress', textValidation);
typingInput.addEventListener('animationend', refreshShake);

//this is our function to validate text
function textValidation(event) {
  console.log(event.key);
  if (event.key === 'h'){
    event.preventDefault();
    // setTimeout(1000, refreshClass(typingInput, 'shake'));
    // typingInput.classList.remove('shake');
    typingInput.classList.add('shake');
    // refreshClass(typingInput, 'shake');
  }
}

function refreshShake() {
  typingInput.classList.remove('shake');
  // typingInput.classList.add('shake');
}
