const axios = require('axios');

function callGet(endpoint, options = {}) {
  return axios.get(endpoint, {
    headers: { Authorization: options.token },
  })
  .then(result => result)
  .catch(err => err);
}

function callPost(endpoint, options = {}) {
  return axios.post(endpoint,
    options.data,
    { headers: { Authorization: options.token } },
  )
  .then(result => result)
  .catch(err => err);
}

module.exports = {
  callGet,
  callPost,
};
