'use strict';
import { mapResponseObject } from '../services/utils';
import dbService from '../db/init';

export const create = async (event) => {
  const client = await dbService.init();
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
      !data.apartment ||
      !data.street ||
      !data.city ||
      !data.state ||
      !data.postalCode ||
      !data.phone ||
      !data.skills ||
      !data.availability ||
      !data.rate ||
      !data.country
  ) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Couldn\'t create the employee item. Insufficient data',
    };
  }
  /** Save employee **/
  const text = `insert into employees(
    first_name,
    last_name,
    apartment,
    street,
    city,
    state,
    postal_code,
    phone,
    skills,
    availability,
    rate,
    country
  ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`;
  const values = [
    data.firstName,
    data.lastName,
    data.apartment,
    data.street,
    data.city,
    data.state,
    data.postalCode,
    data.phone,
    data.skills,
    data.availability,
    data.rate,
    data.country
  ];
  const queryResult = await client.query(text, values);
  if(queryResult && queryResult.rows.length > 0) {
    return mapResponseObject(queryResult.rows[0]);
  }
};

