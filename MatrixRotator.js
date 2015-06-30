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
MatrixRotator.prototype.rotate = function(direction,layer) {

var matrix = this.matrix;
var theLength = this.matrix.length;
var tempArr = [];
var finalArr = [];
var radius = Math.ceil(theLength/2);
var magicBig = (theLength - 1) - (radius-layer);
var magicSmall = (radius - layer);
var topArr = [];
var botArr = [];
var leftArr = [];
var rightArr = [];

  // if(layer < 1 || layer > radius){
  //   throw new RangeError("there are only 3 layers in this onion");
  // }

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
    this.matrix = finalArr;
  }


  //get me the rows/columns into arrays
  for(var i = magicSmall; i <= magicBig; i++){
    topArr.push(matrix[magicSmall][i])
    botArr.push(matrix[magicBig][i])
    leftArr.push(matrix[i][magicSmall])
    rightArr.push(matrix[i][magicBig])
  }

  //puts them back into the matrix
  for(var j = magicSmall; j <= magicBig; j++){
    matrix[magicSmall][j] = leftArr.pop();
    matrix[magicBig][j] = rightArr.pop();
    matrix[j][magicSmall] = botArr.shift();
    matrix[j][magicBig] = topArr.shift();
  }





return this.matrix;

};
