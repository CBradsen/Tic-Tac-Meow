var iggy = new Player("Iggy", "0", "assets/iggy-token.svg", ["assets/iggyProfilepic.svg"], ["assets/iggy-lost.svg"]);
var ziggy = new Player("Ziggy", "1", "assets/ziggy-token.svg");
var currentGame = new Game(iggy, ziggy);

var outcomeIggy = document.querySelector(".outcome-iggy");
var iggyLoses = document.querySelector(".iggy-loses");
var outcomeDraw = document.querySelector("#draw");
var outcomeZiggy = document.querySelector("#ziggy-outcome");
var outcomeZiggyPic = document.querySelector(".outcome-ziggy-pic")
var gameBoard = document.querySelector(".game-container");
var gameBoxes = document.querySelectorAll(".game");
var iggyWins = document.querySelector(".iggy-wins");
var ziggyWins = document.querySelector(".ziggy-wins");
var box0 = document.getElementById("0");
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");

var iggyWinPics = [];
var iggyLosesPics = "assets/iggy-lost.svg";
var draw = [];

var gameHeadline = document.querySelector(".game-headline");


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
      showTurn();
    } else {
      
      renderOutcome();
      setTimeout(function() {
        clearGameBoard()
        showStartingPlayer();
      }, 5000);
    }
}

function renderOutcome() {
  
  gameBoard.removeEventListener("click", updateGame); 
  gameHeadline.innerHTML = `${currentGame.winner} wins!`;
  renderOutcomeImages();

  setTimeout(function() {
    gameBoard.addEventListener("click", updateGame);
  }, 5000);
  }


function placeToken(boxNumber) {
  if (!boxNumber.innerText) {
  boxNumber.innerHTML = currentGame.currentPlayer.token;
  }
}

function clearGameBoard() {
  currentGame.resetGame();
    for (var i = 0; i < gameBoxes.length; i++) {
  gameBoxes[i].innerText = "";
 }
}

function showStartingPlayer() {
  currentGame.startPlayer();
  gameHeadline.innerHTML= `${currentGame.startingPlayer.token} ${currentGame.startingPlayer.name} goes first this time.`;
}

function showTurn() {
  gameHeadline.innerHTML = `${currentGame.currentPlayer.token} ${currentGame.currentPlayer.name}'s turn.`;
}

function renderOutcomeImages() {
  if (currentGame.winner === currentGame.player2.name) {
    outcomeZiggyPic.classList.remove("hidden");
    return;
  }
}
