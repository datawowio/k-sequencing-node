const sinon = require('sinon');
const chai = require('chai');
const HttpStatus = require('http-status');
const { getListDocumentVerification, createDocumentVerification } = require('../../fixtures/images/document-verification');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const documentVerification = require('../../../src/operations/images/documentVerification');
const httpClient = require('../../../src/httpClient');

const listOptions = {
  id: 1,
};

const createOptions = {
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/documentVerification', function () {
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

  it('should get list of document verification', async function () {
    callGetStub.resolves({ data: getListDocumentVerification });
    const result = await documentVerification.list({ token: PROJECT_KEY, data: listOptions });
    const parsed = JSON.parse(result.data);
    assert.isArray(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.OK);
  });

  it('should create document verification', async function () {
    callPostStub.resolves({ data: createDocumentVerification });
    const result = await documentVerification.create({ token: PROJECT_KEY, data: createOptions });
    const parsed = JSON.parse(result.data);
    assert.isObject(parsed.data);
    assert.equal(parsed.meta.code, HttpStatus.CREATED);
  });
});
