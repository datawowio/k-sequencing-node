'use strict';

var https = require('https');
var Promise = require('bluebird');
var pkjson = require('../../package.json');

var _request_data = '';
var create_response = function(req) {
  return new Promise(function(resolve, reject) {
    req.on('response', function(res) {
      var body = '';
      res.setEncoding('utf8');
      res.on('data', function(chunk) { body += chunk;});
      res.on('end', function() {
        try {
          body = JSON.parse(body);
          if (res.statusCode >= 400) {
            reject(body);
          } else {
            resolve(body);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  });
};

var create_header = function(token) {  
  return { 
    'Authorization': token,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'KSequencing/'+pkjson.version+'/Node',
    'Content-Length': Buffer.byteLength(_request_data, 'utf8')
  };
};

var create_request = function(path, token, method){
  return {
    host: 'k-sequencing.datawow.io',
    path: '/api/' + path,
    headers: create_header(token),
    method: method,
    body: _request_data
  };
};

var sendRequest = function(method, path, token, data, callback){ 
  _request_data = JSON.stringify(data) || '';
  var options = create_request(path, token, method);
  var request = https.request(options);
  var resolve = create_response(request).nodeify(callback);
  request.write(_request_data, 'utf8');
  request.end();
  return resolve;
};

module.exports = {
  sendRequest: sendRequest
};
