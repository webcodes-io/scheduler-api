'use strict';
import { mapResponseObject } from '../services/utils';
import dbService from "../db/init";

const deleteEmployeeInfo = async (event) => {
  const client = await dbService.init();
  const employeeId = event.path.id;
  if(!employeeId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Delete employee **/
  const text = 'delete from employees where id = $1 RETURNING *';
  const results = await client.query(text, [employeeId]);
  if(results && results.rows.length > 0) {
    return mapResponseObject(results.rows[0]);
  }
};
export default deleteEmployeeInfo;
