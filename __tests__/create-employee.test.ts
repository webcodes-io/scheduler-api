'use strict';
import {eventMock, mappedResponseData, emptyEventMock, queryResponseData} from '../mocks/mock';
import create from '../controllers/create-employee';

// mock is in __mock__ folder
jest.mock('../db/init');

// TODO: add plugin for invoke
// import * as jestPlugin from 'serverless-jest-plugin';

// TODO: alternative way to mock module
//  lambdaWrapper.init(liveFunction); // Run the deployed lambda

// jest.mock('../db/init', () => ({
//   default: () => ({
//     query: () => ({
//       rows: [queryResponseData]
//     })
//   })
// }));

describe('create', () => {
  it('implement tests here', async () => {
    const response = await create(eventMock);
    expect(response).toMatchObject(mappedResponseData);
  });
  it('was not able to create employee', async () => {
      const response = await create(emptyEventMock);
      expect(response).toMatchObject({statusCode: 400});
  });
});
