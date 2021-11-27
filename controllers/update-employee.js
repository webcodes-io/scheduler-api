'use strict';
const db = require('../db/init');

module.exports.update = async (event, context, callback) => {
  const client = await db.init();
  let data;

  const employeeId = event.path.id;
  if(typeof event.body === 'string') {
    data = JSON.parse(event.body);
  } else {
    data = event.body;
  }
  if (
      !data ||
      !data.firstName ||
      !data.lastName ||
      !data.appartement ||
      !data.street ||
      !data.city ||
      !data.state ||
      !data.code ||
      !data.phone ||
      !data.skills ||
      !data.availability ||
      !data.score
  ) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Update employee **/
  const text = `update employees set
  first_name = ($1), 
  last_name = ($2), 
  appartement = ($3), 
  street = ($4), 
  city = ($5), 
  state = ($6), 
  code = ($7),
  phone = ($8),
  skills = ($9),
  availability = ($10),
  score = ($11)
  where id = ($12)
  RETURNING *`;
  const values = [
    data.firstName,
    data.lastName,
    data.appartement,
    data.street,
    data.city,
    data.state,
    data.code,
    data.phone,
    data.skills,
    data.availability,
    data.score,
    employeeId
  ];
  const results = await client.query(text, values);
  if(results && results.rows) return results.rows;
};
