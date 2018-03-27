var randomNumber;
var newGame = () => {
  window.location.reload();
};

var logGuess = (guess) => {
  document.querySelector("#guessLog").innerHTML += `${guess}, `;
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
