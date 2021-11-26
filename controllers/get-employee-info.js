'use strict';
const db = require('../db/init');

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
  const results = await client.query(query);
  if(results && results.rows) return results.rows[0];
};
