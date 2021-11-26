'use strict';
const db = require('../db/init');

module.exports.create = async (event) => {
  const client = await db.init();
  let data;

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
      body: 'Couldn\'t create the company item. Insufficient data',
    };
  }
  /** Save company **/
  const text = `insert into employees(
    first_name,
    last_name,
    appartement,
    street,
    city,
    state,
    code,
    phone,
    skills,
    availability,
    score
  ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
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
    data.score
  ];
  const results = await client.query(text, values);
  if(results && results.rows) return results.rows;
};
