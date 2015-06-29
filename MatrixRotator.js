/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {

  matrix = this.matrix;
  theLength = this.matrix.length;
  tempArr = [];
  finalArr = [];

  if(direction === Direction.CW){
    for (var i = 0; i < theLength; i++) {
      for(var j = 0; j < theLength; j++){
        tempArr.unshift(matrix[j][i]);
      }
      finalArr.push(tempArr);
      tempArr = [];
    }
    this.matrix = finalArr;
  }

  if(direction === Direction.CCW){
    for (var i = 0; i < theLength; i++) {
      for(var j = 0; j < theLength; j++){
        tempArr.push(matrix[j][i]);
      }
      finalArr.unshift(tempArr);
      tempArr = [];
    }
    console.log('counterclock', finalArr)
    this.matrix = finalArr;
  }

return this.matrix;

};
