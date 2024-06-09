import { boolean, date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable('todo', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  completed: boolean('is_completed').default(false),
  createdAt: date('created_at').default('now()').notNull(),
  updatedAt: date('updated_at').default('now()'),
});