const HttpClient = require('../../httpClient');
const _ = require('lodash');
const constants = require('../../constants');
const utils = require('../../utils');

function callGetList(options) {
  const endpointUrl = utils.textRequestUrl(constants.ENDPOINT.TEXTS.CATEGORIES) + utils.toQueryString(options.data);
  return HttpClient.callGet(endpointUrl, options);
}

function callPost(options) {
  return HttpClient.callPost(utils.textRequestUrl(constants.ENDPOINT.TEXTS.CATEGORIES), options);
}

function callGet(options) {
  const endpointUrl = `${utils.textRequestUrl(constants.ENDPOINT.TEXTS.CATEGORIES)}/${_.get(options.data, 'id')}`;
  return HttpClient.callGet(endpointUrl, options);
}

module.exports = {
  list: options => callGetList(options),
  create: options => callPost(options),
  get: options => callGet(options),
};
