const sinon = require('sinon');
const chai = require('chai');
const HttpStatus = require('http-status');
const utils = require('../src/utils');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

describe('utils', function () {
  it('should transform json object to query string', function () {
    const data = {
      data: 'http://localhost:3000',
      postback_url: 'Postback url',
      instruction: 'face',
    };
    const expectedResult = 'data=http://localhost:3000&postback_url=Postback url&instruction=face';
    const result = utils.toQueryString(data);
    assert.equal(result, expectedResult);
  });

  it('should return empty if object is empty', function () {
    const data = '';
    const result = utils.toQueryString(data);
    assert.isEmpty(result);
  });
});
