const HttpClient = require('../../httpClient');
const constants = require('../../constants');
const utils = require('../../utils');

function callPostCustomer(options) {
  return HttpClient.callPost(utils.imageRequestUrl(constants.ENDPOINT.IMAGES.KYC_CUSTOMER), options);
}

function callPostDocument(options) {
  return HttpClient.callPost(utils.imageRequestUrl(constants.ENDPOINT.IMAGES.KYC_DOCUMENT), options);
}

// TODOs:
//  - Implement GET endpoints
//  - Fix api authentication, should be project authen rather than user authen

module.exports = {
  createCustomer: options => callPostCustomer(options),
  createDocument: options => callPostDocument(options),
};
