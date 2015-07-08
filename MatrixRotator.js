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
MatrixRotator.prototype.rotate = function(direction, layer) {

var matrix = this.matrix;

var theLength = this.matrix.length;
console.log('the length', theLength);
var tempArr = [];
var finalArr = [];
var radius = Math.ceil(theLength/2);

var magicBig = (theLength - 1) - (radius-layer);
var magicSmall =  (radius - layer);
console.log('magic big', magicBig);
console.log('magic small', magicSmall);

var topArr = [];
var botArr = [];
var leftArr = [];
var rightArr = [];


//tests to see if there is an argument in Layer


  if(arguments[1] === undefined){
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

  }else{
      if(layer < 1 || layer > radius){
        throw new RangeError("there are only 3 layers in this onion");
      }
   // console.log('starting', matrix);

      //get me the rows/columns into arrays
      for(var i = magicSmall; i <= magicBig; i++){
        topArr.push(matrix[magicSmall][i])
        botArr.push(matrix[magicBig][i])
        leftArr.push(matrix[i][magicSmall])
        rightArr.push(matrix[i][magicBig])
      }

    //Clockwise Solution
    if(direction === 'ClockWise'){
      //puts them back into the matrix
      for(var j = magicSmall; j <= magicBig; j++){
        matrix[magicSmall][j] = leftArr.pop();
        matrix[magicBig][j] = rightArr.pop();
        matrix[j][magicSmall] = botArr.shift();
        matrix[j][magicBig] = topArr.shift();
      }
    }else{
    //Counterclockwise Solution
      //puts them back into the matrix

      for(var k = magicSmall; k <= magicBig; k++){
        matrix[magicSmall][k] = rightArr.shift();
        matrix[magicBig][k] = leftArr.shift();
        matrix[k][magicSmall] = topArr.pop();
        matrix[k][magicBig] = botArr.pop();
      }
     // console.log('ending', matrix);

    }
  }




return this.matrix;

};

//                    Must be Direction.CW               |-- Must be a valid Number
//                        or Direction.CCW ---v          v   between 1 and [radius]
MatrixRotator.prototype.rotateStep = function(direction, layer) {
  // do work here

var matrix = this.matrix;

var theLength = this.matrix.length;
var tempArr = [];
var finalArr = [];
var radius = Math.ceil(theLength/2);

var magicBig = (theLength - 1) - (radius-layer);
var magicSmall =  (radius - layer);

var topArr = [];
var botArr = [];
var leftArr = [];
var rightArr = [];



  if(layer < 1 || layer > radius){
      throw new RangeError("there are only 3 layers in this onion");
    }

  if(argument[0] !== 'CW' || argument[0] !== 'CCW' )
    //console.log('starting', matrix);

      //get me the rows/columns into arrays
      for(var i = magicSmall; i <= magicBig; i++){
        topArr.push(matrix[magicSmall][i])
        botArr.push(matrix[magicBig][i])
        leftArr.push(matrix[i][magicSmall])
        rightArr.push(matrix[i][magicBig])
      }

    //Clockwise Solution
    if(direction === 'ClockWise'){
      //puts them back into the matrix
      for(var j = magicSmall; j <= magicBig; j++){
        matrix[magicSmall][j] = leftArr.pop();
        matrix[magicBig][j] = rightArr.pop();
        matrix[j][magicSmall] = botArr.shift();
        matrix[j][magicBig] = topArr.shift();
      }
    }else{
    //Counterclockwise Solution
      //puts them back into the matrix

      for(var k = magicSmall; k <= magicBig; k++){
        matrix[magicSmall][k] = rightArr.shift();
        matrix[magicBig][k] = leftArr.shift();
        matrix[k][magicSmall] = topArr.pop();
        matrix[k][magicBig] = botArr.pop();
      }
      //console.log('ending', matrix);

    }

    //work in progress....
    // got the outsides on a layer 3

    var theLength = m.length;
var newM = [[],[],[],[],[],[]]

var m = [
              [1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10,11,12],
              [13,14,15,16,17,18],
              [19,20,21,22,23,24],
              [25,26,27,28,29,30],
              [31,32,33,34,35,36]
            ]

var t = [1, 2, 3, 4, 5, 6];
var b = [31,32,33,34,35,36];
var l = [1, 7,13,19,25,31];
var r = [6,12,18,24,30,36];

//console.log(l.shift());

//Top
t.pop(); //6
l.shift(); //1
var count = 0;
for(var i = 0; i < theLength; i++){
    newM[i][count] = l.shift();
    for(var j = 1; j < theLength; j++){
        newM[i][j] = t.shift();
    }
}

//Bottom
b.shift()
countr= 0;
for(var i = 1; i < theLength; i++){
    newM[i][5] = r.shift();
    newM[5][countr] = b.shift();
    countr++
}


//inners

// for(var i = 0; i <theLength; i++){

// }

console.log('newM',newM);










  return this.matrix;

};
