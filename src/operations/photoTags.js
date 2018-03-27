const HttpClient = require('../httpClient');
const constants = require('../constants.js');
const utils = require('../utils');

function callGetList(options) {
  const endpointUrl = utils.imageRequestUrl(constants.ENDPOINT.PHOTO_TAGS) + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(utils.imageRequestUrl(constants.ENDPOINT.PHOTO_TAGS), options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
};
