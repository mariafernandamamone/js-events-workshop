// === Typing Speed Race ===

// Test your left vs. right hand typing speed by repeatedly pressing [F] and [J] to race the green and red bars to 500px.

// DOM Elements
const greenBar = document.getElementById('green');
const redBar = document.getElementById('red');
const winnerMessage = document.getElementById('winnerMessage');
const reset = document.getElementById('resetBtn');

let greenBarwidth = 10;
let redBarwidth = 10;

const increment = 5;

function TypingRace(event) {
  if (event.key.toLowerCase() === 'f') {
    greenBarwidth += increment;
    greenBar.style.width = `${greenBarwidth}px`;

    if (greenBarwidth >= 500) {
      winnerMessage.textContent = 'GREEN WINS!!';
      document.removeEventListener('keydown', TypingRace);
    }
    
  } else if (event.key.toLowerCase() === 'j') {
    redBarwidth += increment;
    redBar.style.width = `${redBarwidth}px`;

    if (redBarwidth >= 500) {
      winnerMessage.textContent = 'RED WINS!!';
      document.removeEventListener('keydown', TypingRace);
    }
  }
}

document.addEventListener('keydown', TypingRace);

reset.addEventListener('click', function() {
  greenBarwidth = 10;
  redBarwidth = 10;

  greenBar.style.width = '10px';
  redBar.style.width = '10px';

  winnerMessage.textContent = '';

  reset.blur();

  document.addEventListener('keydown', TypingRace);
});

