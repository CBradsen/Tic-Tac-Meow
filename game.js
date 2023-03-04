class Game {
  constructor(iggy, ziggy) {
  player1 = iggy;
  player2 = ziggy;
  gameBoard = {
    row1: ["", "-", "-"],
    row2: ["-", "-", "-"],
    row3: ["-", "-", "-"]
  };
  currentPlayer = player1;
  }

  // winningCombos: 
  var one = gameBoard.row1[0];
  var two = gameBoard.row1[1];
  var three = gameBoard.row1[2];
  var four = gameBaord.row2[0];
  var five = gameBoard.row2[1];
  var six = gameBoard.row2[2];
  var seven = gameBoard.row3[0];
  var eight = gameBaord.row3[1];
  var nine = gameBoard.row4[2];

trackGameData() {
  one.push(box1.dataset.player);
  two.push(box2.dataset.player);
  three.push(box3.dataset.player);
  four.push(box4.dataset.player);
  five.push(box5.dataset.player);
  six.push(box6.dataset.player);
  seven.push(box7.dataset.player);
  eight.push(box8.dataset.player);
  nine.push(box9.dataset.player);

//   /will update gameboardTracker to "i" or "z"
// }

goNext() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  return currentPlayer
}

determineWinner() {

[box1, box2, box3], [box1, box4, box7], [box]

}

resetGameBoard() {

}

}
}