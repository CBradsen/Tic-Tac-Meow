var iggy = new Player("Iggy", "0", "assets/iggy-token.svg");
var ziggy = new Player("Ziggy", "1", "assets/ziggy-token.svg");
var currentGame = new Game(iggy, ziggy);

var outcomeIggy = document.querySelector(".outcome-iggy");
var outcomeIggyWonPic = document.querySelector(".outcome-iggy-won-pic");
var outcomeIggyLostPic = document.querySelector(".outcome-iggy-lost-pic");
var outcomeDraw = document.querySelector("#draw");
var outcomeDrawPic = document.querySelector(".outcome-draw-pic");
var outcomeZiggy = document.querySelector("#ziggy-outcome");
var outcomeZiggyWonPic = document.querySelector(".outcome-ziggy-won-pic");
var outcomeZiggyLostPic = document.querySelector(".outcome-ziggy-lost-pic");
var gameHeadline = document.querySelector(".game-headline");
var gameBoard = document.querySelector(".game-container");
var gameBoxes = document.querySelectorAll(".game");
var iggyWins = document.querySelector(".iggy-wins");
var ziggyWins = document.querySelector(".ziggy-wins");

gameBoard.addEventListener("click", updateGame);

function updateGame(event) {
  var index = event.target.id
  var boxName = document.getElementById(index);

  if (currentGame.gameBoard[index] !== "") {
    return;
  } else {
    currentGame.trackGameData(index) 
    placeToken(boxName, index)
    currentGame.determineWinner();
    currentGame.determineDraw();
    showWhatsNext();
  }
}

function showWhatsNext() {
  if (currentGame.winner === null) {
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
  boxNumber.innerHTML = currentGame.currentPlayer.token; 
} 

function clearGameBoard() {
  clearOutcomeImages();
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
  if (currentGame.winner === currentGame.player1.name) {
    outcomeIggyWonPic.classList.remove("hidden");
    outcomeZiggyLostPic.classList.remove("hidden");
  } else if (currentGame.winner === currentGame.player2.name) {
    outcomeZiggyWonPic.classList.remove("hidden");
    outcomeIggyLostPic.classList.remove("hidden");
  } else {
    outcomeDrawPic.classList.remove("hidden");
  }
}

function clearOutcomeImages() {
  if (currentGame.winner === currentGame.player1.name) {
    outcomeIggyWonPic.classList.add("hidden");
    outcomeZiggyLostPic.classList.add("hidden");
  } else if (currentGame.winner === currentGame.player2.name) {
    outcomeZiggyWonPic.classList.add("hidden");
    outcomeIggyLostPic.classList.add("hidden");
  } else {
    outcomeDrawPic.classList.add("hidden");
  }
}
