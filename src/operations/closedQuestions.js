const HttpClient = require('../httpClient');
const constants = require('../constants.js');
const utils = require('../utils');

function callGetList(options) {
  const endpointUrl = constants.ENDPOINT.CLOSED_QUESTIONS + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(constants.ENDPOINT.CLOSED_QUESTIONS, options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
};
