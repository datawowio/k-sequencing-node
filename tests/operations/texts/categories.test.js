const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getTextCategory, createTextCategory } = require('../../fixtures/texts/categories');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const textCategory = require('../../../src/operations/texts/categories');
const httpClient = require('../../../src/httpClient');

const getOptions = {
  id: 123456,
};

const createOptions = {
  data: 'test data for text moderation',
  postback_url: 'http://localhost:3000',
  custome_id: 123,
};

const APP_KEY = 'project-key';

describe('operations/texts/categories', function () {
  let sandbox;
  let callGetStub;
  let callPostStub;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    callGetStub = sandbox.stub(httpClient, 'callGet');
    callPostStub = sandbox.stub(httpClient, 'callPost');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should get text category', async function () {
    callGetStub.resolves({ data: getTextCategory });
    const result = await textCategory.get({ token: APP_KEY, data: getOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create text category', async function () {
    callPostStub.resolves({ data: createTextCategory });
    const result = await textCategory.create({ token: APP_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
