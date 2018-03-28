const sinon = require('sinon');
const chai = require('chai');
const HttpStatus = require('http-status');
const utils = require('../src/utils');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

describe('utils#toQueryString', function () {
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

describe('utils#imageRequestUrl', function () {
  it('should append endpoint to url correctly', function () {
    const endpoint = 'images/closed_question';
    const result = utils.imageRequestUrl(endpoint);
    assert.equal(result, 'https://k-sequencing.datawow.io/api/images/closed_question');
  });
});

describe('utils#textRequestUrl', function () {
  it('should append endpoint to url correctly', function () {
    const endpoint = 'texts/text_categories/123';
    const result = utils.textRequestUrl(endpoint);
    assert.equal(result, 'https://kiyo-text.datawow.io/api/v1/texts/text_categories/123');
  });
});
