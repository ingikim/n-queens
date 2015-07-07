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
    if(!newBoard.hasAnyRooksConflicts()) {
      var moreSolutions = findAllNRooksSoutions(n, newBoard, numRooksSoFar + 1)
      solutions = solutions.concat(moreSolutions);
    }
  }

  return solutions;
}

window.findNRooksSolution = function(n) {


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution;
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



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solutionObj = new Board({n: n});
  // var solution = solutionObj.rows();
  // var columnIndexes = [];
  // for(var i = 0; i < n; i++) {
  //   columnIndexes.push(i);
  // }
  // var solution = undefined; //fixme


  // for(var r = 0; r < n; r++) {
  //   var ci = columnIndexes[Math.round(Math.random() * (columnIndexes.length - 1))];
  //   solution[r][ci] = 1;
  //   if(solutionObj.hasAnyQueensConflicts()) {

  //     solution[r][ci] = 0;
  //     var copyCi = columnIndexes.slice();
  //     var ccDelete = copyCi.indexOf(ci);
  //     copyCi.splice(ccDelete, 1);

  //     cci = copyCi[Math.round(Math.random() * (copyCi.length - 1))];
  //     solution[r][cci] = 1;
  //     r--;
  //   }
  //   var cDelete = columnIndexes.indexOf(ci);
  //   columnIndexes.splice(cDelete, 1);
  // }


  // // deep vs. shallow copy
  // var a = [1,2,3];
  // var b = a; // shallow copy, because a and b reference the same exact object
  // b[0] = 10; // both a and b will have [10,2,3]

  // var c = [];
  // for (var i = 0; i < a.length; i++){
  //   c.push(a[i]);
  // }
  // // deep copy


  // var n = whatever number you want
  // // We want findAllNRooksSolutions(n, new Board({n: n}), 0) to give us an array of solutions

  // // Each solution would be an array of array
  // [[0,1],
  // [1,0]]

  // // 
  // solutions
  // [
  //   [[0,1], [1,0]], // solution 1
  //   [[1,0], [0,1]] // solution 2
  // ]

  // var copyBoard = function(oldBoard){
  //   var newRows = [];
  //   var oldRows = oldBoard.rows();
  //   // for each row in oldRow
  //     // make a copy of that row (*hint: use splice*), and assign that row to newRows[i]
  //   for(var i = 0; i < oldRows.length; i++) {
  //     newRows.push(oldRows[i].slice());
  //   }
  //   var newBoard = new Board(newRows);
  //   return newBoard;
  // }

  // var findAllNRooksSolutions = function(n, board, numRooksSoFar){
  //   var solutions = [];

  //   if (n === numRooksSoFar){
  //     var solution = board.rows();
  //     return [solution];
  //   }

  //   var rowIndex = numRooksSoFar;

  //   for(var i = 0; i < n; i++) {
  //     var newBoard = copyBoard(board);
  //     newBoard.togglePiece(rowIndex, i);
  //     if(!newBoard.hasAnyRooksConflicts()) {
  //       var moreSolutions = findAllRooksSolutions(n, newBoard, numRooksSoFar + 1);
  //       solutions = solutions.concat(moreSolutions);
  //     }

  //   }
  //   return solutions; // [solution1, solution2, solution 3]
  // };


  // window.findNRooksSolution(n){
  //   var board = new Board({n:n});
  //   var solutions = findAllNRooksSolutions(n, board, 0);
  // }


  // // we want an array of all odd numbers between 2 and n
  // n = 3

  // [3]




  // // var a = [1,2,3];
  // // var b = [4,5,6];
  // a.concat(b)


  

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
