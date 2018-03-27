const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { listClosedQuestion, createClosedQuestion } = require('../fixtures/closed-question');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const closedQuestion = require('../../src/operations/images/closedQuestions');
const httpClient = require('../../src/httpClient');

const listOptions = {
  id: 1,
};

const createOptions = {
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/closedQuestion', function () {
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

  it('should get list of closed question image', async function () {
    callGetStub.resolves({ data: listClosedQuestion });
    const result = await closedQuestion.list({ token: PROJECT_KEY, data: listOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data.images);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create closed question image', async function () {
    callPostStub.resolves({ data: createClosedQuestion });
    const result = await closedQuestion.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
