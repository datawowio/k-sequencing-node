'use strict';

var loadResource = function(name) {
  return require(['../resources/', name, '.js'].join(''));
};


var kseq = function() {
  return {
    choice: loadResource('choices')
  };
};


module.exports = { 
  kseq: kseq
};
