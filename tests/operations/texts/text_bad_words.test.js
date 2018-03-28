const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getTextBadWord, createTextBadWord } = require('../../fixtures/texts/text-bad-words');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const textBadWord = require('../../../src/operations/texts/text_bad_words');
const httpClient = require('../../../src/httpClient');

const getOptions = {
  project_type: 'text_bad_word',
};

const createOptions = {
  data: 'test data for text moderation',
  postback_url: 'http://localhost:3000',
  custome_id: 123,
};

const PROJECT_KEY = 'project-key';

describe('operations/texts/text_bad_words', function () {
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

  it('should get list of text bad word', async function () {
    callGetStub.resolves({ data: getTextBadWord });
    const result = await textBadWord.list({ token: PROJECT_KEY, data: getOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create text bad word', async function () {
    callPostStub.resolves({ data: createTextBadWord });
    const result = await textBadWord.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
