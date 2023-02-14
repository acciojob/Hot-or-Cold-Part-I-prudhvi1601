// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

 


var randomNum;
var input;

function generateRandomNum() {
  randomNum = Math.floor(Math.random() * 41) - 20;
  document.getElementById("num").innerText = randomNum;
  guessNum();
  checkGame();
}
function guessNum() {
  input = Number(document.getElementById("guess").value);
}
function checkGame() {
  if (Math.abs(randomNum - input <= 5)) {
    document.getElementById("respond").innerText = "Hot";
  }
  else {
    document.getElementById("respond").innerText = "Cold";
  }
}
btn.addEventListener("click",generateRandomNum);