'use strict';
import { mapResponseObject } from '../services/utils';
import dbService from "../db/init";

const getByEmployeeId = async (event) => {
  const client = await dbService.init();

  const employeeId = event.path.id;
  if(!employeeId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Find employee **/
  const query = {
    name: 'fetch-employee',
    text: 'SELECT * FROM employees WHERE id = $1',
    values: [employeeId],
  }
  const queryResult = await client.query(query);
  if(queryResult && queryResult.rows.length > 0) {
    return mapResponseObject(queryResult.rows[0]);
  }
};
export default getByEmployeeId;
