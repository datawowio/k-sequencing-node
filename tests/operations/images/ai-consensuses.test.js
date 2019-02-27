const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { listAiConsensus, createAiConsensus } = require('../../fixtures/images/ai-consensuses');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const aiConsensus = require('../../../src/operations/images/aiConsensus');
const httpClient = require('../../../src/httpClient');

const listOptions = {
  id: 1,
};

const createOptions = {
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/aiConsensus', function () {
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

  it('should get list of AI Consensus', async function () {
    callGetStub.resolves({ data: listAiConsensus });
    const result = await aiConsensus.list({ token: PROJECT_KEY, data: listOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data.jobs);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create AI Consensus', async function () {
    callPostStub.resolves({ data: createAiConsensus });
    const result = await aiConsensus.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });
});
