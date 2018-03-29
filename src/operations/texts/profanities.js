const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function createFilter(options) {
  return HttpClient.callPost(utils.textRequestUrl(constants.ENDPOINT.TEXTS.BAD_WORDS), options);
}

function retrieveFilter(options) {
  const endpointUrl =
    utils.textRequestUrl(constants.ENDPOINT.TEXTS.BAD_WORDS) + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function getResult(options) {
  const endpointUrl =
    utils.textRequestUrl(constants.ENDPOINT.TEXTS.TEXT_BAD_WORDS) + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function sanitize(options) {
  return HttpClient.callPost(utils.textRequestUrl(constants.ENDPOINT.TEXTS.TEXT_BAD_WORDS), options);
}

module.exports = {
  retrieveFilter: options => retrieveFilter(options),
  createFilter: options => createFilter(options),
  result: options => getResult(options),
  sanitize: options => sanitize(options),
};
