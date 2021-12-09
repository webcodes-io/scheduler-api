const { Client } = require('pg')
import createTable from './create-table';
import modify_1 from './modify-table-1';
import modify_2 from './modify-table-2';
import modify_3 from './modify-table-3';
import modify_4 from './modify-table-4';
import modify_5 from './modify-table-5';
import modify_6 from './modify-table-6';

let ifClientConnected = false;
const client = new Client({
    host: process.env.POSTGRESQL_HOST,
    port: process.env.POSTGRESQL_PORT,
    database: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
});
class DBService {
    async init() {
        if(client && ifClientConnected) {
            return client;
        } else {
            try {
                await client.connect();
                ifClientConnected = true;
                await createTable(client);
                await modify_1(client);
                await modify_2(client);
                await modify_3(client);
                await modify_4(client);
                await modify_5(client);
                await modify_6(client);
                return client;
            } catch (e) {
                console.error(e);
            }
        }
    }
}
const dbService = new DBService();
export default dbService;
