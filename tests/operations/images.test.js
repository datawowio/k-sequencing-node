const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getImage } = require('../fixtures/images');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const image = require('../../src/operations/images/images');
const httpClient = require('../../src/httpClient');

const getOptions = {
  id: 1,
};

const PROJECT_KEY = 'project-key';

describe('operations/images', function () {
  let sandbox;
  let callGetStub;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    callGetStub = sandbox.stub(httpClient, 'callGet');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should get any image', async function () {
    callGetStub.resolves({ data: getImage });
    const result = await image.get({ token: PROJECT_KEY, data: getOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
