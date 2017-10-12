'use strict';
var api = require('../services/connector');
var querystring = require('querystring');
var prediction = {};
var _url = '/prime/predictions';

prediction.list = function(option, callback) {
  option.path = _url;
  return api.sendRequest('GET', option.path, option.token, option.data || {}, callback);
};

prediction.create = function(option, callback) {
  option.path = _url;
  return api.sendRequest('POST', option.path, option.token, option.data || {}, callback);
};

prediction.find = function(option, callback){
  option.path = _url + '/' + option.data.id;
  return api.sendRequest('GET', option.path, option.token, null, callback);
};

module.exports = prediction;
