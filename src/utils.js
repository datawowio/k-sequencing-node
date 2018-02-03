function toQueryString(data) {
  const queryString = '';
  if (data) {
    return Object.keys(data).map(attr => `${attr}=${data[attr]}`).join('&');
  }
  return queryString;
}

module.exports = {
  toQueryString: data => toQueryString(data),
};
