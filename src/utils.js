const constants = require('./constants');

function toQueryString(data) {
  const queryString = '';
  if (data) {
    return Object.keys(data).map(attr => `${attr}=${data[attr]}`).join('&');
  }
  return queryString;
}

function imageRequestUrl(endpoint) {
  return constants.BASE_IMAGE_URL + endpoint;
}

function textRequestUrl(endpoint) {
  return constants.BASE_TEXT_URL + endpoint;
}

function videoRequestUrl(endpoint) {
  return constants.BASE_IMAGE_URL + endpoint;
}

module.exports = {
  toQueryString: data => toQueryString(data),
  imageRequestUrl: endpoint => imageRequestUrl(endpoint),
  textRequestUrl: endpoint => textRequestUrl(endpoint),
  videoRequestUrl: endpoint => videoRequestUrl(endpoint),
};
