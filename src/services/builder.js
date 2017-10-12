'use strict';

var loadResource = function(name) {
  return require(['../resources/', name, '.js'].join(''));
};


var kseq = function() {
  return {
    choice: loadResource('choices'),
    closedQuestion: loadResource('closedQuestions'),
    message: loadResource('messages'),
    photoTag: loadResource('photoTags'),
    prediction: loadResource('predictions')
  };
};


module.exports = { 
  kseq: kseq
};
