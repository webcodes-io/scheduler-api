'use strict';
const db = require('../db/init');

module.exports.delete = async (event) => {
  const client = await db.init();

  const employeeId = event.path.id;
  if(!employeeId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Delete company **/
  const text = 'delete from employees where id = $1 RETURNING *';
  const results = await client.query(text, [employeeId]);
  if(results && results.rows) return results.rows;
};
