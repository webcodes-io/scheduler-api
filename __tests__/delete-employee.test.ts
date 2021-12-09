'use strict';
import {mappedResponseData, queryResponseData} from '../mocks/mock';
import deleteEmployeeInfo from '../controllers/delete-employee';

// mock is in __mock__ folder
jest.mock('../db/init');

describe('delete employee', () => {
    it('was able to delete employee', async () => {
        const employeeId = 1;
        const response = await deleteEmployeeInfo({path: {id: employeeId}});
        expect(response).toMatchObject(mappedResponseData);
    });
    it('was not able to delete employee', async () => {
        const response = await deleteEmployeeInfo({path: {id: undefined}});
        expect(response).toMatchObject({statusCode: 400})
    });
});
