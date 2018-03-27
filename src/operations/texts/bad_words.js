const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function callGetList(options) {
  const endpointUrl =
    utils.textRequestUrl(constants.ENDPOINT.TEXTS.BAD_WORDS) + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(utils.textRequestUrl(constants.ENDPOINT.TEXTS.BAD_WORDS), options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
};
