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
  return HttpClient.callGet(
    `${utils.videoRequestUrl(constants.ENDPOINT.VIDEO.CLOSED_QUESTIONS)}/${_.get(options.data, 'id')}`,
    options,
  );
}

function callPost(options) {
  return HttpClient.callPost(
    utils.imageRequestUrl(constants.ENDPOINT.VIDEO.CLOSED_QUESTIONS),
    options,
  );
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
  get: options => callGet(options),
};
