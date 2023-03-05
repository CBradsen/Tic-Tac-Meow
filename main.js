var iggy = new Player("0", "🐷");
var ziggy = new Player("1", "😻");
var currentGame = new Game(iggy, ziggy);


var gameBoard = document.querySelector(".game-container");
var gameBoxes = document.querySelectorAll(".game");
var box0 = document.getElementById("0");
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById('8');

var gameHeadline = document.querySelector(".game-headline");

// var iggyWins = document.querySelector(".iggy-wins")
// iggyWins.dataset.iggy-wins = iggy.wins;

gameBoard.addEventListener("click", updateGame)


function updateGame(event) {
  var index = event.target.id
  var boxName = document.getElementById(index);
  console.log(index, boxName)
  currentGame.trackGameData(index)
  placeToken(boxName)
  currentGame.determineOutcome();
    if (!currentGame.winner) {
      currentGame.goNext();
    } else {
      renderOutcome();
      clearGameBoard();
    }
  
}

function renderOutcome() {
  gameBoard.removeEventListener("click", updateGame); 
  setTimeout(function() {
    gameBoard.addEventListener("click", updateGame);
  }, 4000);
   gameHeadline.innerHTML = `${currentGame.winner} wins this game!`

  }
    

function placeToken(boxNumber) {
  if (!boxNumber.innerText) {
  boxNumber.innerText = currentGame.currentPlayer.token;
  }
}

function clearGameBoard() {
  currentGame.resetGame();
 for (var i = 0; i < gameBoxes.length; i++) {
  gameBoxes[i].innerText = "";
 }
 return
}

