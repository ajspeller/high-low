var randomNumber;
var guesses = [];
var maxGuesses = 10;

var gameEnded = () => {
  document.querySelector("#newGameBtn").style.display = 'inline';
  document.querySelector("#easyBtn").style.display = "none";
  document.querySelector("#hardBtn").style.display = "none";
  document.querySelector("input").setAttribute("readonly", "readonly");
}

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
      document.querySelector("#results").innerHTML = "Correct! It only took " + guesses.length + " attempts!";
      document.querySelector("#container").style.background = "rgb(25,220,25)";
      gameEnded();
    }
    logGuess(userGuess);
  } else {
    if (userGuess > randomNumber) {
      document.querySelector("#results").innerHTML = `You Lose! The number was ${randomNumber}`;
      document.querySelector("#container").style.background = "rgb(220,25,25)";
      gameEnded();
    } else if (userGuess < randomNumber) {
      document.querySelector("#results").innerHTML = `You Lose! The number was ${randomNumber}`;
      document.querySelector("#container").style.background = "rgb(220,25,25)";
      gameEnded();
    } else {
      document.querySelector("#results").innerHTML = "You Won! It only took " + guesses.length + " attempts!";
      document.querySelector("#container").style.background = "rgb(25,220,25)";
      gameEnded();
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
