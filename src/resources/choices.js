'use strict';

var api = require('../services/connector');
var choice = function() {
  return api.action('choice', ['create', 'find_by_id', 'list']);
}

module.exports = choice;
