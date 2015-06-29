var chai = require('chai');
chai.should();
var MatrixRotator = require("../MatrixRotator").MatrixRotator;
var Matrix = require("../Matrix").Matrix;
var Direction = require("../Direction").Direction;

describe("The Matrix Rotator", function () {

  var matrixRotator = new MatrixRotator(Matrix.matrix1);

  it("can rotate Clockwise", function () {
    matrixRotator.rotate(Direction.CW);
    matrixRotator.matrix.should.be.deep.equal([
                                            [9,0,3,4,8],
                                            [0,6,3,5,0],
                                            [3,8,6,2,1],
                                            [8,8,9,9,9],
                                            [7,3,0,7,3]
                                          ]);

  });

  it("can rotate CounterClockwise", function () {
    matrixRotator.rotate(Direction.CCW);
    matrixRotator.rotate(Direction.CCW);
    matrixRotator.matrix.should.be.deep.equal([
                                            [3,7,0,3,7],
                                            [9,9,9,8,8],
                                            [1,2,6,8,3],
                                            [0,5,3,6,0],
                                            [8,4,3,0,9]
                                          ]);
  });

});