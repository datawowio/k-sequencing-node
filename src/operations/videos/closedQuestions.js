const HttpClient = require('../../httpClient');
const _ = require('lodash');
const constants = require('../../constants');
const utils = require('../../utils');

function callGetList(options) {
  const endpointUrl =
    `${utils.videoRequestUrl(constants.ENDPOINT.VIDEO.CLOSED_QUESTIONS)}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

function callGet(options) {
  const endpointUrl = `${utils.videoRequestUrl(constants.ENDPOINT.VIDEO.CLOSED_QUESTIONS)}/${_.get(options.data, 'id')}`;
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  const endpointUrl = utils.videoRequestUrl(constants.ENDPOINT.VIDEO.CLOSED_QUESTIONS);
  return HttpClient.callPost(endpointUrl, options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
  get: options => callGet(options),
};
