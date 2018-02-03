const axios = require('axios');
const constants = require('./constants');

function callGet(endpoint, options = {}) {
  return axios.get(constants.URL + endpoint, {
    headers: { Authorization: options.token },
  })
  .then(result => result)
  .catch(err => err);
}

function callPost(endpoint, options = {}) {
  return axios.post(constants.URL + endpoint, {
    headers: { Authorization: options.token },
    data: options.data,
  })
  .then(result => result)
  .catch(err => err);
}

module.exports = {
  callGet,
  callPost,
};
