const axios = require('axios');
const HTTP = require('http-constants');
const constants = require('../constants.js');
const _ = require('lodash');

module.exports = {
  get: options =>
    axios({
      method: HTTP.methods.GET,
      baseURL: constants.URL,
      url: `${constants.ENDPOINT.IMAGE}/${_.get(options.data, 'id')}`,
      headers: { Authorization: options.token },
    }),
};
