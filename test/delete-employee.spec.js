'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const deleteEmployee = require('../controllers/delete-employee');
const db = require('../db/init');

describe('delete employee', () => {
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
    it('was able to delete employee', async () => {
        const deleteMockLambdaCallback = sinon.spy();
        const employeeId = 1;
        await deleteEmployee.delete({path: {id: employeeId}}, {}, deleteMockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to delete employee', async () => {
        const deleteMockLambdaCallback = sinon.spy();
        await deleteEmployee.delete({path: {id: undefined}}, {}, deleteMockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
