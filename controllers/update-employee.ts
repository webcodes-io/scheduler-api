'use strict';
import { mapResponseObject } from '../services/utils';
import dbService from "../db/init";

export const update = async (event) => {
  const client = await dbService.init();
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
      !data.apartment ||
      !data.street ||
      !data.city ||
      !data.state ||
      !data.postalCode ||
      !data.phone ||
      !data.skills ||
      !data.availability ||
      !data.rate
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
  apartment = ($3), 
  street = ($4), 
  city = ($5), 
  state = ($6), 
  postal_code = ($7),
  phone = ($8),
  skills = ($9),
  availability = ($10),
  rate = ($11),
  country = ($12)
  where id = ($13)
  RETURNING *`;
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
    data.country,
    employeeId
  ];
  const queryResult = await client.query(text, values);
  if(queryResult && queryResult.rows.length > 0) {
    return mapResponseObject(queryResult.rows[0]);
  }
};
