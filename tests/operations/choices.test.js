const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { getListChoice, createChoice } = require('../fixtures/choice-image');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const choice = require('../../src/operations/choices');

const listOptions = {
    id: 1,
};

const createOptions = {
    instruction: 'instruction',
    categories: 'foo',
    data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
    custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/choices', function () {
    let sandbox;
    let choiceListStub;
    let choiceCreateStub;
    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        choiceListStub = sandbox.stub(choice, 'list');
        choiceCreateStub = sandbox.stub(choice, 'create');
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should get list of image choice', async function () {
        choiceListStub.resolves({ data: getListChoice });
        const result = await choice.list({ token: PROJECT_KEY, data: listOptions });
        const parsed = JSON.parse(result.data);
        assert.isArray(parsed.data.images);
        assert.equal(parsed.meta.code, HttpStatus.OK);
    });

    it('should create image choice', async function () {
        choiceCreateStub.resolves({ data: createChoice });
        const result = await choice.create({ token: PROJECT_KEY, data: createOptions });
        const parsed = JSON.parse(result.data);
        assert.isObject(parsed.data);
        assert.equal(parsed.meta.code, HttpStatus.OK);
    });
});
