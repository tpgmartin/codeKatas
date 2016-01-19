var assert = require('assert'),
    minesweeper = require('./minesweeper')();

describe('minesweeper', function () {

  it('should return empty string for field of zero rows and columns respectively', function () {
    var dimensions = '0,0';
    var field = minesweeper.createField(dimensions, '');
    assert.equal('', field);
  });
  
  it('should return an n by m grid string of "0" for field of n rows and m columns', function () {
    var dimensions = '4,4';
    var field = minesweeper.createField(dimensions, '');
    assert.equal('0000\n0000\n0000\n0000', field);
  });
  
  it('should return an n by m grid string of "0" for field of n rows and m columns', function () {
    var dimensions = '4,4';
    var plot = '*...\n....\n....\n....'
    var field = minesweeper.createField(dimensions, plot);
    assert.equal('*100\n1100\n0000\n0000', field);
  });

});