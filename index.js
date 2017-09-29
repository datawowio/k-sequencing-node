'use strict';
var builder = require('./src/services/builder');
module.exports = function(config) {
  return builder.kseq(config);
};


