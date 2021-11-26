'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const mock = require('../test/mock');
const createEmployee = require('../controllers/create-employee');
const db = require('../db/init');

describe('create company', () => {
    let querySpy = sinon.spy();
    beforeEach(() => {
        sinon.stub(db, 'init').resolves({
            query: querySpy
        });
    });
    afterEach(() => {
        querySpy.resetHistory();
        db.init.restore();
    });
    it('was able to create company', async () => {
        const mockLambdaCallback = sinon.spy();
        await createEmployee.create(mock.eventMock, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to create company', async () => {
        const mockLambdaCallback = sinon.spy();
        await createEmployee.create(mock.emptyEventMock, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
