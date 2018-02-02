const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { listPrediction, createPrediction } = require('../fixtures/predictions');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const prediction = require('../../src/operations/predictions');

const listOptions = {
  id: 1,
};

const createOptions = {
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/Prediction', function () {
  let sandbox;
  let listPredictionStub;
  let createPredictionStub;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    listPredictionStub = sandbox.stub(prediction, 'list');
    createPredictionStub = sandbox.stub(prediction, 'create');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should get list of prediction image', async function () {
    listPredictionStub.resolves({ data: listPrediction });
    const result = await prediction.list({ token: PROJECT_KEY, data: listOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data.image);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create prediction image', async function () {
    createPredictionStub.resolves({ data: createPrediction });
    const result = await prediction.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
