const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const {
  createCustomer,
  createDocument,
  listCustomer,
  listDocument,
} = require('../../fixtures/images/kyc');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const kyc = require('../../../src/operations/images/kyc');
const httpClient = require('../../../src/httpClient');

const createCustomerPayload = {
  first_name: 'foo',
  last_name: 'bar',
  email: 'foo@bar.com',
};

const createDocumentPayload = {
  customer_id: '5b752f286e11576f13c0324a',
  type: 'PASSPORT',
  data: [
    {
      attr: 'front_side',
      url: 'front_pic_url',
    },
    {
      attr: 'back_side',
      url: 'back_pic_url',
    },
  ],
};

const listCustomerPayload = {
  id: '123',
};

const listDocumentPayload = {
  customer_id: '123',
  id: '321',
};

const PROJECT_KEY = 'project-key';

describe('operations/kyc', function () {
  let sandbox;
  let callPostStub;
  let callGetStub;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    callPostStub = sandbox.stub(httpClient, 'callPost');
    callGetStub = sandbox.stub(httpClient, 'callGet');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should create kyc customer', async function () {
    callPostStub.resolves({ data: createCustomer });

    const result = await kyc.createCustomer({
      token: PROJECT_KEY,
      data: createCustomerPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });

  it('should create kyc document', async function () {
    callPostStub.resolves({ data: createDocument });

    const result = await kyc.createDocument({
      token: PROJECT_KEY,
      data: createDocumentPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });

  it('should list kyc customer', async function () {
    callGetStub.resolves({ data: listCustomer });

    const result = await kyc.listCustomer({
      token: PROJECT_KEY,
      data: listCustomerPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isArray(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should list kyc document', async function () {
    callGetStub.resolves({ data: listDocument });

    const result = await kyc.listDocument({
      token: PROJECT_KEY,
      data: listDocumentPayload,
    });
    const parsed = JSON.parse(result.data);

    assert.isArray(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });
});
