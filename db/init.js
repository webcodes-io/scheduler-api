const { Client } = require('pg')
const tableCreate = require('./create-table');
const tableAlter_1 = require('./modify-table-1');
const tableAlter_2 = require('./modify-table-2');
const tableAlter_3 = require('./modify-table-3');
const tableAlter_4 = require('./modify-table-4');
const tableAlter_5 = require('./modify-table-5');

let ifClientConnected = false;
const client = new Client({
    host: process.env.POSTGRESQL_HOST,
    port: process.env.POSTGRESQL_PORT,
    database: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
});
module.exports.init = async () => {
    if(client && ifClientConnected) {
        return client;
    } else {
        try {
            await client.connect();
            ifClientConnected = true;
            await tableCreate.createTable(client);
            await tableAlter_1.modify(client);
            await tableAlter_2.modify(client);
            await tableAlter_3.modify(client);
            await tableAlter_4.modify(client);
            await tableAlter_5.modify(client);
            return client;
        } catch (e) {
            console.error(e);
        }
    }
}
