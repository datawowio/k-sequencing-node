const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getBadWord, createBadWord } = require('../../fixtures/texts/bad_words');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const badWord = require('../../../src/operations/texts/bad_words');
const httpClient = require('../../../src/httpClient');

const getOptions = {
  project_type: 'text_bad_word',
};

const createOptions = {
  filter_set: ['foo', 'bar', 'baz'],
  project_type: 'text_bad_word',
};

const PROJECT_KEY = 'project-key';

describe('operations/texts/bad_words', function () {
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

  it('should get bad word', async function () {
    callGetStub.resolves({ data: getBadWord });
    const result = await badWord.get({ token: PROJECT_KEY, data: getOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create bad word', async function () {
    callPostStub.resolves({ data: createBadWord });
    const result = await badWord.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
