const { Client } = require('pg')
import createTable from './create-table';
import modify_1 from './modify-table-1';
import modify_2 from './modify-table-2';
import modify_3 from './modify-table-3';
import modify_4 from './modify-table-4';
import modify_5 from './modify-table-5';
import modify_6 from './modify-table-6';
import modify_7 from './modify-table-7';

let ifClientConnected = false;

class DBService {
    client: any;
    constructor() {
        this.client = new Client({
            host: process.env.POSTGRESQL_HOST,
            port: process.env.POSTGRESQL_PORT,
            database: process.env.DB_NAME,
            user: process.env.USERNAME,
            password: process.env.PASSWORD
        });
    }
    async init() {
        if(this.client && ifClientConnected) {
            return this.client;
        } else {
            try {
                await this.client.connect();
                ifClientConnected = true;
                await createTable(this.client);
                await modify_1(this.client);
                await modify_2(this.client);
                await modify_3(this.client);
                await modify_4(this.client);
                await modify_5(this.client);
                await modify_6(this.client);
                await modify_7(this.client);
                return this.client;
            } catch (e) {
                console.error(e);
            }
        }
    }
}
const dbService = new DBService();
export default dbService;
