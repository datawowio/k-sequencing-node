const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const {
  retrieveFilter,
  createFilter,
  moderationResult,
  sanitize,
} = require('../../fixtures/texts/profanities');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const profanity = require('../../../src/operations/texts/profanities');
const httpClient = require('../../../src/httpClient');

const getOptions = {
  project_type: 'text_bad_word',
};

const createOptions = {
  filter_set: ['foo', 'bar', 'baz'],
  project_type: 'text_bad_word',
};

const sanitizeOptions = {
  data: 'test data for text moderation',
  postback_url: 'http://localhost:3000',
  custome_id: 123,
};

const PROJECT_KEY = 'project-key';

describe('operations/texts/profanities', function () {
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

  it('should get filter', async function () {
    callGetStub.resolves({ data: retrieveFilter });
    const result = await profanity.retrieveFilter({ token: PROJECT_KEY, data: getOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create filter', async function () {
    callPostStub.resolves({ data: createFilter });
    const result = await profanity.createFilter({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should sanitize data', async function () {
    callPostStub.resolves({ data: sanitize });
    const result = await profanity.sanitize({ token: PROJECT_KEY, data: sanitizeOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should get moderation result', async function () {
    callGetStub.resolves({ data: moderationResult });
    const result = await profanity.result({ token: PROJECT_KEY, data: getOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
