'use strict';
var api = require('../services/connector');
var querystring = require('querystring');
var choice = {};
var _url = 'images/choices';
var _url_id = 'images/choice';

choice.list = function(option, callback) {
  option.path = _url;
  return api.sendRequest('GET', option.path, option.token, option.data || {}, callback);
};

choice.create = function(option, callback) {
  option.path = _url;
  return api.sendRequest('POST', option.path, option.token, option.data || {}, callback);
};

choice.find = function(option, callback){
  option.path = _url_id + '?' +querystring.stringify(option.data);
  return api.sendRequest('GET', option.path, option.token, null, callback);
};

module.exports = choice;
