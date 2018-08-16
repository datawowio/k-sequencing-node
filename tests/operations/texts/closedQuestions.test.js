const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getTextClosedQuestion, createTextClosedQuestion } = require('../../fixtures/texts/closedQuestions');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const textClosedQuestion = require('../../../src/operations/texts/closedQuestions');
const httpClient = require('../../../src/httpClient');

const getPayload = {
  id: 123456,
};

const createPayload = {
  data: 'foo bar baz',
  postback_url: 'http://localhost:3000',
  custome_id: 123,
};

const APP_KEY = 'project-key';

describe('operations/texts/closedQuestions', function () {
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

  it('should get text closed question', async function () {
    callGetStub.resolves({ data: getTextClosedQuestion });

    const result = await textClosedQuestion.list({
      token: APP_KEY,
      data: getPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create text closed question', async function () {
    callPostStub.resolves({ data: createTextClosedQuestion });

    const result = await textClosedQuestion.create({
      token: APP_KEY,
      data: createPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });
});
