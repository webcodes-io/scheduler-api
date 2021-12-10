'use strict';
import {mappedResponseData, eventMock, emptyEventMock} from '../mocks/mock';
import {update} from '../controllers/update-employee';

// mock is in __mock__ folder
jest.mock('../db/init');

describe('update employee', () => {
    it('was able to update employee', async () => {
        const employeeId = 1;
        const response = await update({...eventMock, path: {id: employeeId}});
        expect(response).toMatchObject(mappedResponseData);
    });
    it('was not able to update employee', async () => {
        const response = await update({...emptyEventMock, path: {id: undefined}});
        expect(response).toMatchObject({statusCode: 400});
    });
});
