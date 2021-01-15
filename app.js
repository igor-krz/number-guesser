// Game values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//  Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//  Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  //  Validate
  if (isNaN(guess) || guess < min || guess > max) {
    return setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //   Check if won
  if (guess === winningNum) {
    // Set message
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //   Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        false,
        `Game Over! You Lost! The correct number was ${winningNum}`
      );
    } else {
      //   Tell user number is wrong
      setMessage(`${guess} is not correct! ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);
}

// Set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
