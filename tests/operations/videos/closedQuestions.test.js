const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const {
  getVideoClosedQuestion,
  listVideoClosedQuestion,
  createVideoClosedQuestion,
} = require('../../fixtures/videos/closed-question');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const videoClosedQuestion = require('../../../src/operations/videos/closedQuestions');
const httpClient = require('../../../src/httpClient');

const getPayload = {
  id: 123456,
};

const createPayload = {
  data: 'video-url',
  muted: true,
  allow_seeking: true,
  play_at: 0,
  postback_url: 'http://localhost:3000/foo',
  postback_method: 'GET',
  custom_id: '12312324',
};

const APP_KEY = 'project-key';

describe('operations/videos/closedQuestions', function () {
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

  it('should list video closed question', async function () {
    callGetStub.resolves({ data: listVideoClosedQuestion });

    const result = await videoClosedQuestion.list({
      token: APP_KEY,
      data: getPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isArray(parsed.data.videos);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should get video closed question', async function () {
    callGetStub.resolves({ data: getVideoClosedQuestion });

    const result = await videoClosedQuestion.get({
      token: APP_KEY,
      data: getPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create video closed question', async function () {
    callPostStub.resolves({ data: createVideoClosedQuestion });

    const result = await videoClosedQuestion.create({
      token: APP_KEY,
      data: createPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });
});
