var randomNumber;
var newGame = () => {
  window.location.reload();
};

document.body.onload = () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
};

document.querySelector("#newGame").addEventListener("click",function() {
  newGame();
});
