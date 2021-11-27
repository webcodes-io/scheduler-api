'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const mock = require('../test/mock');
const updateEmployee = require('../controllers/update-employee');
const db = require('../db/init');

describe('update employee', () => {
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
    it('was able to update employee', async () => {
        const mockLambdaCallback = sinon.spy();
        const employeeId = 1;
        await updateEmployee.update({...mock.eventMock, path: {id: employeeId}}, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to update employee', async () => {
        const mockLambdaCallback = sinon.spy();
        await updateEmployee.update({...mock.emptyEventMock, path: {id: undefined}}, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
