const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getConversation, createConversation } = require('../../fixtures/texts/conversations');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const textConversation = require('../../../src/operations/texts/conversations');
const httpClient = require('../../../src/httpClient');

const getPayload = {
  id: 123456,
};

const createPayload = {
  conversation: ['foo', 'bar', 'baz'],
  custom_conversation_ids: ['1', '2', '3'],
  postback_url: 'http://localhost:3000/foo',
  postback_method: 'POST',
};

const APP_KEY = 'project-key';

describe('operations/texts/conversations', function () {
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

  it('should get text conversation', async function () {
    callGetStub.resolves({ data: getConversation });

    const result = await textConversation.list({
      token: APP_KEY,
      data: getPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create text conversation', async function () {
    callPostStub.resolves({ data: createConversation });

    const result = await textConversation.create({
      token: APP_KEY,
      data: createPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });
});
