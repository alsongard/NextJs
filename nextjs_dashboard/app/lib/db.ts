import {Pool} from "pg";

const pool = new Pool({
  connectionString: process.env.NEW_DATABASE_URL
})

export default pool;