const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function callGetPage(options) {
  const endpointUrl = `${utils.textRequestUrl(constants.ENDPOINT.TEXT.FACEBOOK_PAGES)}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(utils.textRequestUrl(constants.ENDPOINT.TEXT.FACEBOOK_PAGES), options);
}

function callGetFeed(options) {
  const endpointUrl = `${utils.textRequestUrl(constants.ENDPOINT.TEXT.FACEBOOK_FEED_HISTORIES)}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

module.exports = {
  get: options => callGetPage(options),
  create: options => callPost(options),
  getFeed: options => callGetFeed(options),
};
