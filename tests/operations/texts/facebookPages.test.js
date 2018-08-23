const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const {
  getFacebookPage,
  createFacebookPage,
  getFacebookFeed,
} = require('../../fixtures/texts/facebookPages');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const facebookPage = require('../../../src/operations/texts/facebookPages');
const httpClient = require('../../../src/httpClient');

const getPayload = {
  page_id: 123456,
};

const createPayload = {
  page_id: '245473502860590',
  actions: {
    word: 'foo',
    action: 'removed',
  },
};

const getFeedPayload = {
  page_id: '12345',
  start_date: 'Wed, 22 Aug 2018 16:35:04 +07 +07:00',
  end_date: 'Sat, 22 Sep 2018 16:35:24 +07 +07:00',
};

const APP_KEY = 'project-key';

describe('operations/texts/facebookPages', function () {
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

  it('should get text facebook pages', async function () {
    callGetStub.resolves({ data: getFacebookPage });

    const result = await facebookPage.get({
      token: APP_KEY,
      data: getPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create text facebook pages', async function () {
    callPostStub.resolves({ data: createFacebookPage });

    const result = await facebookPage.create({
      token: APP_KEY,
      data: createPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });

  it('should get text facebook feed histories', async function () {
    callGetStub.resolves({ data: getFacebookFeed });

    const result = await facebookPage.getFeed({
      data: getFeedPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isArray(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
    assert.equal(parsed.meta.total, 4);
  });
});
