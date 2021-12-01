'use strict';
const db = require('../db/init');
const utilService = require('../services/utils');

module.exports.getByEmployeeId = async (event) => {
  const client = await db.init();

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
    return utilService.mapResponseObject(queryResult.rows[0]);
  }
};
