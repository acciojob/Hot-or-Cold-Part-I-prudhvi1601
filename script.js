var randomNum;
var input;
var num = document.getElementById("num");
var numPtag = document.getElementById("guess").value;
var respond = document.getElementById("respond");
function generateRandomNum() {
  randomNum = Math.floor(Math.random() * 41) - 20;
  num.innerText = randomNum;
  guessNum();
  checkGame();
}
function guessNum() {
  input = Number(numPtag);
}
function checkGame() {
  if (Math.abs(randomNum - input <= 5)) {
    respond.innerText = "Hot";
  }
  else {
    respond.innerText = "Cold";
  }
}
btn.addEventListener("click", generateRandomNum);