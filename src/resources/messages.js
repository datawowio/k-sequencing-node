'use strict';
var api = require('../services/connector');
var querystring = require('querystring');
var message = {};
var _url = 'images/messages';
var _url_id = 'images/message';

message.list = function(option, callback) {
  option.path = _url;
  return api.sendRequest('GET', option.path, option.token, option.data || {}, callback);
};

message.create = function(option, callback) {
  option.path = _url;
  return api.sendRequest('POST', option.path, option.token, option.data || {}, callback);
};

message.find = function(option, callback){
  option.path = _url_id + '?' +querystring.stringify(option.data);
  return api.sendRequest('GET', option.path, option.token, null, callback);
};

module.exports = message;
