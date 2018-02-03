const HTTP = require('http-constants');
const axios = require('axios');
const constants = require('./constants');

function callGet(url, options = {}) {
  return axios({
    method: HTTP.methods.GET,
    baseURL: constants.URL,
    url,
    headers: { Authorization: options.token },
  });
}

function callPost(url, options = {}) {
  return axios({
    method: HTTP.methods.POST,
    baseURL: constants.URL,
    url,
    headers: { Authorization: options.token },
    data: options.data,
  });
}

module.exports = {
  callGet,
  callPost,
};
