'use strict';
import dbService from "../db/init";

module.exports.list = async (event) => {
  const client = await dbService.init();

  const text = 'select * from employees';
  const results =  await client.query(text);
  if(results && results.rows) return results.rows;
  return {
    errorMessage: "Failed to fetch data from Table"
  }
};
