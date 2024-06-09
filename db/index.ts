import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: "postgres://postgres:postgres@127.0.0.1:5432/nxt",
});
// or
// const pool = new Pool({
//   host: "127.0.0.1",
//   port: 5432,
//   user: "postgres",
//   password: "password",
//   database: "db_name",
// });
const db = drizzle(pool);

export default db;