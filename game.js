class Game {
  constructor(iggy, ziggy) {
  this.player1 = iggy;
  this.player2 = ziggy;
  this.gameBoard = ["", "", "", "", "", "", "", "", ""];
  this.currentPlayer = this.player1;
}

trackGameData(i) {
  console.log(i)
  if (!this.gameBoard[i]) {
    this.gameBoard[i] = this.currentPlayer.id  
  }
} 

goNext() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
  return this.currentPlayer
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
  var wins = [win1, win2, win3, win4, win5, win6, win7, win8]
  
    for (var i = 0; i < wins.length; ++i) {
      if ([i] === 0) {
        console.log("iggy wins");
      } else if ([i] === 3) {
        console.log("ziggy wins");
      } else {
        console.log("its a draw")
      }
    }

// and update wins in player class
}

}

  // winningCombos: 



// resetGameBoard() {

// }

