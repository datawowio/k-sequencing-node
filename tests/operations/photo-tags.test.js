const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const _ = require('lodash');
const HttpStatus = require('http-status');
const { listPhotoTag, createPhotoTag } = require('../fixtures/photo-tags');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const photoTag = require('../../src/operations/photoTags');

const listOptions = {
    id: 1,
};

const createOptions = {
    instruction: 'Instruction',
    data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
    custom_id: '1',
};

const PROJECT_KEY = 'project-key';

describe('operations/photoTag', function () {
    let sandbox;
    let listPhotoTagStub;
    let createPhotoTagStub;
    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        listPhotoTagStub = sandbox.stub(photoTag, 'list');
        createPhotoTagStub = sandbox.stub(photoTag, 'create');
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should get list of photo tag image', async function () {
        listPhotoTagStub.resolves({ data: listPhotoTag });
        const result = await photoTag.list({ token: PROJECT_KEY, data: listOptions });
        const parsed = JSON.parse(result.data);
        assert.isArray(parsed.data.images);
        assert.equal(parsed.meta.code, HttpStatus.OK);
    });

    it('should create photo tag image', async function () {
        createPhotoTagStub.resolves({ data: createPhotoTag });
        const result = await photoTag.create({ token: PROJECT_KEY, data: createOptions });
        const parsed = JSON.parse(result.data);
        assert.isObject(parsed.data);
        assert.equal(parsed.meta.code, HttpStatus.OK);
    });
});
