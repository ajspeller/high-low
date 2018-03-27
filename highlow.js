var randomNumber;
var guesses = [];
var newGame = () => {
  window.location.reload();
};

var logGuess = (guess) => {
  guestList = "";
  const COMMA = ",";
  guesses.push(guess);
  guesses.forEach((v, i) => {
    if ( i === 0) {
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
  if (userGuess > randomNumber) {
    document.querySelector("#results").innerHTML = "Your guess was too high!";
  } else if (userGuess < randomNumber) {
    document.querySelector("#results").innerHTML = "Your guess was too low!";
  } else {
    document.querySelector("#results").innerHTML = "Your guess was correct!";
  }

  logGuess(userGuess);
};

document.body.onload = () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
};

document.querySelector("#newGame").addEventListener("click",function() {
  newGame();
});

document.querySelector("input").addEventListener("change",function(e){
  compareGuess();
  document.querySelector("input").value = "";
});
