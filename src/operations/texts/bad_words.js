const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function callGet(options) {
  const endpointUrl =
    utils.textRequestUrl(constants.ENDPOINT.TEXTS.BAD_WORDS) + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(utils.textRequestUrl(constants.ENDPOINT.TEXTS.BAD_WORDS), options);
}

module.exports = {
  get: options => callGet(options),
  create: options => callPost(options),
};
