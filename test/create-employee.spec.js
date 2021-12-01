'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const mock = require('../test/mock');
const createEmployee = require('../controllers/create-employee');
const db = require('../db/init');

describe('create employee', () => {
    const callback = sinon.stub();
    callback.resolves({ rows: mock.responseData });
    beforeEach(() => {
        sinon.stub(db, 'init').resolves({
            query: () => Promise.resolve({ rows: [mock.responseData] })
        });
    });
    afterEach(() => {
        db.init.restore();
    });
    it('was able to create employee', async () => {
        const mockLambdaCallback = sinon.spy();
        const response = await createEmployee.create(mock.eventMock, {}, mockLambdaCallback);
        expect(response).to.include.keys('firstName', 'lastName');
    });
    it('was not able to create employee', async () => {
        const mockLambdaCallback = sinon.spy();
        const response = await createEmployee.create(mock.emptyEventMock, {}, mockLambdaCallback);
        expect(response).to.include({statusCode: 400});
    });
});
