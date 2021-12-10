'use strict';
import {eventMock, mappedResponseData, emptyEventMock, queryResponseData} from '../mocks/mock';
import {getByEmployeeId} from '../controllers/get-employee-info';

// mock is in __mock__ folder
jest.mock('../db/init');

describe('get employee', () => {
    it('was able to get employee information', async () => {
        const employeeId = 1;
        const response = await getByEmployeeId({ path: { id: employeeId } });
        expect(response).toMatchObject(mappedResponseData);
    });
    it('was not able to get employee information', async () => {
        const response = await getByEmployeeId({path: {id: undefined}});
        expect(response).toMatchObject({statusCode: 400});
    });
});
