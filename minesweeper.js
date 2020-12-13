document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

// Define your `board` object here!
var board = {
  cells: 
  [
    { 
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    { 
      row: 1,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    { 
      row: 1,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    { 
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    { 
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    { 
      row: 2, 
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    { 
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    { 
      row: 3,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    { 
      row: 3,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true
    }
  ]
} 

function startGame () {
  
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  var mineCount = 0
  var clearedCount = 0

  for(var i = 0; i < board.cells.length; i++){
    
    if (board.cells[i].isMine == true && board.cells[i].isMarked == true) {
      mineCount++;
    }

    if (board.cells[i].hidden == false) {
      clearedCount++;
    }

  }
  
  if (mineCount + clearedCount == board.cells.length) {
    lib.displayMessage('You win!');
  }
      
}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for(var i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine == true){
      count++;
    }
  }
  return count;
}