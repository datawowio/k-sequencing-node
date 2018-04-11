const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

const FILTER_URL = utils.textRequestUrl(constants.ENDPOINT.TEXT.PROFANITY.FILTERS);
const TASK_URL = utils.textRequestUrl(constants.ENDPOINT.TEXT.PROFANITY.TASKS);

function createFilter(options) {
  return HttpClient.callPost(FILTER_URL, options);
}

function retrieveFilter(options) {
  const endpointUrl = `${FILTER_URL}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

function getResult(options) {
  const endpointUrl = `${TASK_URL}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

function sanitize(options) {
  return HttpClient.callPost(TASK_URL, options);
}

module.exports = {
  retrieveFilter: options => retrieveFilter(options),
  createFilter: options => createFilter(options),
  result: options => getResult(options),
  sanitize: options => sanitize(options),
};
