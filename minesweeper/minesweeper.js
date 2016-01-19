'use strict';
// 
// ----------> x
// |
// |
// V
// y
// 

module.exports = function () {
  
  var mineCoords = { x: [], y: [] };
  
  function getMineIndex (plot, mineCoords) {
    
    var rows = plot.split('\n');
    
    for (var i=0, max=rows.length; i<max; i++) {
      if (rows[i].indexOf('*') > -1) {
        mineCoords.x.push(rows[i].indexOf('*'));
        mineCoords.y.push(i);
      }
    }
    
    return mineCoords;
    
  }
  
  return {
    createField: function(dimensions, plot) {
      
      var rows = parseInt(dimensions.split(',')[0]);
      var columns = parseInt(dimensions.split(',')[1]);
      var grid = '';
      var mineCoords = getMineIndex(plot, { x: [], y: [] });
      
      for (var i=0; i<rows; i++) {
        for (var j=0; j<columns; j++) {
          if (mineCoords.x.indexOf(j) > -1 && mineCoords.y.indexOf(i) > -1 && mineCoords.x.indexOf(j) === mineCoords.y.indexOf(i)) {
            grid += '*';
          } else {
            grid += '0';
          }
        }
        if (i < rows-1) grid += '\n';
      }
      
      return grid;
      
    }
  };
  
};