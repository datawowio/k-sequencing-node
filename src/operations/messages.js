const axios = require('axios');
const HTTP = require('http-constants');
const constants = require('../constants.js');

module.exports = {
    list: options => axios({
        method: HTTP.methods.GET,
        baseURL: constants.URL,
        url: constants.ENDPOINT.MESSAGES,
        headers: { Authorization: options.token },
        params: options.data,
    }),

    create: options => axios({
        method: HTTP.methods.POST,
        baseURL: constants.URL,
        url: constants.ENDPOINT.MESSAGES,
        headers: { Authorization: options.token },
        data: options.data,
    }),
};
