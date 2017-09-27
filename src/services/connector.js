'use strict';

var https = require('https');
var Promise = require('bluebird');
var pkjson = require('../../package.json');

function create_response(req) {
  return new Promise(function(resolve, reject) {
    req.on('response', function(res) {
      var body = '';
      res.setEncoding('utf8');
      res.on('data', function(chunk) { body += chunk; });
      res.on('end', function() {
      try {
        body = JSON.parse(body);
        console.log(body);
            // if (resp.object === 'error') {
            //   reject(resp);
            // } else {
        resolve(body);
            // }
      } catch (err) {
        reject(err);
      }
      });
    });
  });
}

function create_header(token) {  
  return { 
    'Authorization': token,
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'KSequencing/'+pkjson.version+'/Node'
  };
}

function create_request(path, token, method, data){
  return {
    host: 'https://kseq.datawow.io',
    path: '/api/' + path,
    headers: create_header(token),
    method: method,
    body: data
  };
}

function get(path, token, data,  callback) {
  var options = create_request(path, token, 'get', data);
  var request = https.request(options);
  var resolve = create_response(request).nodeify(callback);
  request.write(options['body'], 'utf8');
  request.end();
  return resolve;
}

function post(path, token, data,  callback) {
  var options = create_request(path, token, 'post', data);
  var request = https.request(options);
  var resolve = create_response(request).nodeify(callback);
  request.write(options['body'], 'utf8');
  request.end();
  return resolve;
}
module.exports = { 
  get: get(),
  post: post()
};
