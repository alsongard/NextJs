import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config()

// console.log(process.env.DB_HOST); // working:success

const pool = new Pool({
    connectionString: process.env.DB_HOST
});
export default pool;
