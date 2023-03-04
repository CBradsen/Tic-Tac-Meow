var iggy = new Player("0", "🐷");
var ziggy = new Player("1", "😻");
var currentGame = new Game(iggy, ziggy);

var gameBoard = document.querySelector(".game-container");
var box0 = document.getElementById("0");
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById('8');

// var iggyWins = document.querySelector(".iggy-wins")
// iggyWins.dataset.iggy-wins = iggy.wins;

gameBoard.addEventListener("click", updateGame)

function updateGame(event) {
  var index = event.target.id
  var boxName = document.getElementById(index);
  console.log(index, boxName)
  
  currentGame.trackGameData(index)
 
  placeToken(boxName)
  // currentGame.determineOutcome();
  currentGame.goNext();
}

// }
function placeToken(boxNumber) {
  if (!boxNumber.innerText) {
  boxNumber.innerText = currentGame.currentPlayer.token;
}
}
// currentGame.trackGameData()

// }
// currentGame.currentPlayer.id
// currentGame.trackGameData

// currentGame.gameBoard

// //