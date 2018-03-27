var randomNumber;
var guesses = [];
var maxGuesses = 10;

var newGame = () => {
  window.location.reload();
};

var easyMode = () => {
  maxGuesses = 10;
  document.querySelector("#easyBtn").className = "activeButton";
  document.querySelector("#hardBtn").className = "";
};

var hardMode = () => {
  maxGuesses = 5;
  document.querySelector("#easyBtn").className = "";
  document.querySelector("#hardBtn").className = "activeButton";
};

var logGuess = (guess) => {
  guestList = "";
  const COMMA = ",";
  guesses.push(guess);
  guesses.forEach((v, i) => {
    if (i === 0) {
      guestList += v;
    } else {
      guestList += `${COMMA} ${v}`;
    }
  });
  document.querySelector("#guessLog").innerHTML = guestList;
  document.querySelector("#attempts").innerHTML = guesses.length;
};

var compareGuess = () => {
  var userGuess = document.querySelector("input").value
  console.log(userGuess);

  if (guesses.length < maxGuesses) {
    if (userGuess > randomNumber) {
      document.querySelector("#results").innerHTML = "Your guess was too high!";
    } else if (userGuess < randomNumber) {
      document.querySelector("#results").innerHTML = "Your guess was too low!";
    } else {
      document.querySelector("#results").innerHTML = "Your guess was correct!";
    }
    logGuess(userGuess);
  } else {
    if (userGuess > randomNumber) {
      document.querySelector("#results").innerHTML = "You Lose!";
    } else if (userGuess < randomNumber) {
      document.querySelector("#results").innerHTML = "You Lose!";
    } else {
      document.querySelector("#results").innerHTML = "You Win!";
    }
  }

};

document.body.onload = () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector("#newGameBtn").style.display = 'none';
  console.log(randomNumber);
};

document.querySelector("#newGameBtn").addEventListener("click", function() {
  newGame();
});

document.querySelector("input").addEventListener("change", function() {
  compareGuess();
  document.querySelector("input").value = "";
});

document.querySelector("#easyBtn").addEventListener("click", function() {
  easyMode();
});

document.querySelector("#hardBtn").addEventListener("click", function() {
  hardMode();
});
