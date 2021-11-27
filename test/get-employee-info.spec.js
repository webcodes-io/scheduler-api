'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const getEmployee = require('../controllers/get-employee-info');
const db = require('../db/init');

describe('get employee', () => {
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
    it('was able to get employee information', async () => {
        const mockLambdaCallback = sinon.spy();
        const employeeId = 1;
        await getEmployee.getByEmployeeId({ path: { id: employeeId } }, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to get employee information', async () => {
        const mockLambdaCallback = sinon.spy();
        await getEmployee.getByEmployeeId({path: {id: undefined}}, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
