

 


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