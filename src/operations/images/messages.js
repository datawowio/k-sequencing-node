const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function callGetList(options) {
  const endpointUrl = `${utils.imageRequestUrl(constants.ENDPOINT.IMAGES.MESSAGES)}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(utils.imageRequestUrl(constants.ENDPOINT.IMAGES.MESSAGES), options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
};
