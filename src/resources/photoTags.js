'use strict';
var api = require('../services/connector');
var querystring = require('querystring');
var photoTag = {};
var _url = 'images/photo_tags';
var _url_id = 'images/photo_tag';

photoTag.list = function(option, callback) {
  option.path = _url;
  return api.sendRequest('GET', option.path, option.token, option.data || {}, callback);
};

photoTag.create = function(option, callback) {
  option.path = _url;
  return api.sendRequest('POST', option.path, option.token, option.data || {}, callback);
};

photoTag.find = function(option, callback){
  option.path = _url_id + '?' +querystring.stringify(option.data);
  return api.sendRequest('GET', option.path, option.token, null, callback);
};

module.exports = photoTag;
