const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getListChoice, createChoice } = require('../../fixtures/images/choice-image');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const choice = require('../../../src/operations/images/choices');
const httpClient = require('../../../src/httpClient');

const listOptions = {
  id: 1,
};

const createOptions = {
  instruction: 'instruction',
  categories: 'foo',
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/choices', function () {
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

  it('should get list of image choice', async function () {
    callGetStub.resolves({ data: getListChoice });
    const result = await choice.list({ token: PROJECT_KEY, data: listOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data.images);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create image choice', async function () {
    callPostStub.resolves({ data: createChoice });
    const result = await choice.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
