const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function callPostCustomer(options) {
  return HttpClient.callPost(utils.imageRequestUrl(constants.ENDPOINT.IMAGES.KYC_CUSTOMER), options);
}

function callPostDocument(options) {
  return HttpClient.callPost(utils.imageRequestUrl(constants.ENDPOINT.IMAGES.KYC_DOCUMENT), options);
}

function callGetListDocument(options) {
  const endpointUrl =
    `${utils.imageRequestUrl(constants.ENDPOINT.IMAGES.KYC_DOCUMENT)}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

function callGetListCustomer(options) {
  const endpointUrl =
    `${utils.imageRequestUrl(constants.ENDPOINT.IMAGES.KYC_CUSTOMER)}?${utils.toQueryString(options.data)}`;
  return HttpClient.callGet(endpointUrl, options);
}

module.exports = {
  createCustomer: options => callPostCustomer(options),
  createDocument: options => callPostDocument(options),
  listDocument: options => callGetListDocument(options),
  listCustomer: options => callGetListCustomer(options),
};
