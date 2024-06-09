// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite"
  out: "./db",
  schema: './db/schema.ts',
  migrations: {
    table: '__drizzle_migrations', // default `__drizzle_migrations`,
    schema: 'public', // used in PostgreSQL only and default to `drizzle`
  },
  dbCredentials: {
    url: 'postgres://postgres:postgres@127.0.0.1:5432/nxt',
  }
});