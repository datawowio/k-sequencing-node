const HttpClient = require('../httpClient');
const constants = require('../constants.js');
const utils = require('../utils');

function callGetList(options) {
  const endpointUrl = constants.ENDPOINT.MESSAGES + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(constants.ENDPOINT.MESSAGES, options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
};
