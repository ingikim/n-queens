/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.copyBoard = function(oldBoard){
  var newRows = [];
  var oldRows = oldBoard.rows();
  for(var i = 0; i < oldRows.length; i++) {
    newRows.push(oldRows[i].slice());
  }
  var newBoard = new Board(newRows);
  return newBoard;
}

window.findAllNRooksSoutions = function(n, board, numRooksSoFar){
  var solutions = [];

  if(n === numRooksSoFar) {
    var solution = board.rows();
    return [solution];
  }

  var rowIndex = numRooksSoFar;

  for(var i = 0; i < n; i++) {
    var newBoard = copyBoard(board);
    newBoard.togglePiece(rowIndex, i);
    if(!newBoard.hasAnyRookConflictOn(rowIndex, i)) {
      var moreSolutions = findAllNRooksSoutions(n, newBoard, numRooksSoFar + 1)
      solutions = solutions.concat(moreSolutions);
    }
  }

  return solutions;
}

window.findNRooksSolution = function(n) {

  var solutions = findAllNRooksSoutions(n, new Board({n:n}), 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));

  return solutions[0];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixme

  for(i = 1; i <= n; i++) {
    solutionCount = solutionCount * i;
  }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


window.findAllNQueensSolutions = function(n, board, numQueensSoFar){
  var solutions = [];

  if(n === numQueensSoFar) {
    var solution = board.rows();
    return [solution];
  }

  var rowIndex = numQueensSoFar;

  for(var i = 0; i < n; i++) {
    var newBoard = copyBoard(board);
    newBoard.togglePiece(rowIndex, i);
    if(!newBoard.hasAnyQueenConflictsOn(rowIndex, i)) {
      var moreSolutions = findAllNQueensSolutions(n, newBoard, numQueensSoFar + 1)
      solutions = solutions.concat(moreSolutions);
    }
  }

  return solutions;
}
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  if(n === 2 || n === 3) {
    return board.rows();
  }
  var solutions = findAllNQueensSolutions(n, board, 0);



  

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));
  return solutions[0];
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(n === 2 || n === 3) {
    return 0;
  }
  var solutions = findAllNQueensSolutions(n, new Board({n:n}), 0);
  var solutionCount = solutions.length; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
