const sinon = require('sinon');
const chai = require('chai');
const HttpStatus = require('http-status');
const httpClient = require('../src/httpClient');
const axios = require('axios');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

describe('httpClient', function () {
  let sandbox;
  let axiosGetStub;
  let axiosPostStub;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    axiosGetStub = sandbox.stub(axios, 'get');
    axiosPostStub = sandbox.stub(axios, 'post');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should be able to call get api from httpClient', async function () {
    axiosGetStub.resolves({ data: 'foo' });
    const options = {
      token: 'auth-token',
    };
    const result = await httpClient.callGet('url', options);
    assert.isNotEmpty(result);
  });

  it('return an error if get api call was failed', async function () {
    axiosGetStub.rejects(new Error('GET API calling failed'));
    const result = await httpClient.callGet('url', {});
    assert.instanceOf(result, Error);
  });

  it('should be able to call post api from httpClient', async function () {
    axiosPostStub.resolves({ data: 'foo' });
    const options = {
      token: 'auth-token',
    };
    const result = await httpClient.callPost('url', options);
    assert.isNotEmpty(result);
  });

  it('return an error if post api call was failed', async function () {
    axiosPostStub.rejects(new Error('POST API called failed'));
    const result = await httpClient.callPost('url', {});
    assert.instanceOf(result, Error);
  });
});
