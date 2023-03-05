class Game {
  constructor(iggy, ziggy, starting) {
  this.player1 = iggy;
  this.player2 = ziggy;
  this.gameBoard = ["", "", "", "", "", "", "", "", ""];
  this.currentPlayer = this.player1;
  this.startingPlayer = this.player1;
  this.turns = 0
}

trackGameData(i) {
  console.log(i)
  if (!this.gameBoard[i]) {
    this.gameBoard[i] = this.currentPlayer.id;
    this.turns += 1;  
  }
} 

goNext() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}
 
determineOutcome() {
  var g = this.gameBoard;
  var win1 = parseInt(g[0]) + parseInt(g[1]) + parseInt(g[2]);
  var win2 = parseInt(g[3]) + parseInt(g[4]) + parseInt(g[5]);
  var win3 = parseInt(g[6]) + parseInt(g[7]) + parseInt(g[8]);
  var win4 = parseInt(g[0]) + parseInt(g[3]) + parseInt(g[6]);
  var win5 = parseInt(g[1]) + parseInt(g[4]) + parseInt(g[7]);
  var win6 = parseInt(g[2]) + parseInt(g[5]) + parseInt(g[8]);
  var win7 = parseInt(g[0]) + parseInt(g[4]) + parseInt(g[8]);
  var win8 = parseInt(g[2]) + parseInt(g[4]) + parseInt(g[6]);
  var wins = [win1, win2, win3, win4, win5, win6, win7, win8];
  
    for (var i = 0; i < wins.length; ++i) {
      if (wins[i] === 0) {
        this.player1.increaseWins();
        setTimeout(gameHeadline.innerHTML = "Iggy Wins!", 5000);
        console.log("iggy wins");
        this.gameBoard = ["", "", "", "", "", "", "", "", ""];
        return;
      } else if (wins[i] === 3) {
        this.player2.increaseWins();
        gameHeadline.innerHTML = "ZIggy Wins!";
        setTimeout("location.reload(true);", 5000);
        console.log("ziggy wins");
        return;
      } else if (!this.gameBoard.includes("")) {
        gameHeadline.innerHTML = "It's a draw!";
        setTimeout("location.reload(true);", 8000);
        console.log("its a draw");
        return
      }
      else return
    }
    // determineDraw(!wins[i].includes("")) {
    //     gameHeadline.innerHTML = "It's a draw!";
    //     setTimeout("location.reload(true);", 5000);
    //     console.log("its a draw");
    //   } 
}
  
startPlayer() {
  if (this.startingPlayer === this.player1) {
    this.startingPlayer = this.player2;
  } else {
    this.startingPlayer = this.player1;
  }
  return this.startingPlayer
}

resetGameBoard() {
	this.gameBoard = ["", "", "", "", "", "", "", "", ""];
}
}









