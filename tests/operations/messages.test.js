const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { listMessage, createMessage } = require('../fixtures/messages');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const message = require('../../src/operations/messages');

const listOptions = {
  id: 1,
};

const createOptions = {
  instruction: 'Instruction',
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/message', function () {
  let sandbox;
  let listMessageStub;
  let createMessageStub;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    listMessageStub = sandbox.stub(message, 'list');
    createMessageStub = sandbox.stub(message, 'create');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should get list of message image', async function () {
    listMessageStub.resolves({ data: listMessage });
    const result = await message.list({ token: PROJECT_KEY, data: listOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data.images);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create a message image', async function () {
    createMessageStub.resolves({ data: createMessage });
    const result = await message.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
