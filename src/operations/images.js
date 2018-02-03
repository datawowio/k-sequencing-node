const constants = require('../constants');
const HttpClient = require('../httpClient');
const _ = require('lodash');

function callGet(options) {
  const endpointUrl = `${constants.ENDPOINT.IMAGE}/${_.get(options.data, 'id')}`;
  return HttpClient.callGet(endpointUrl, options);
}

module.exports = {
  get: options => callGet(options),
};
