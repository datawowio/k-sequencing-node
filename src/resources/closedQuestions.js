'use strict';
var api = require('../services/connector');
var querystring = require('querystring');
var closedQuestion = {};
var _url = 'images/closed_questions';
var _url_id = 'images/closed_question';

closedQuestion.list = function(option, callback) {
  option.path = _url;
  return api.sendRequest('GET', option.path, option.token, option.data || {}, callback);
};

closedQuestion.create = function(option, callback) {
  option.path = _url;
  return api.sendRequest('POST', option.path, option.token, option.data || {}, callback);
};

closedQuestion.find = function(option, callback){
  option.path = _url_id + '?' +querystring.stringify(option.data);
  return api.sendRequest('GET', option.path, option.token, null, callback);
};

module.exports = closedQuestion;
