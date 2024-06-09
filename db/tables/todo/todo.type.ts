import { todo } from "./todo.table";

export type Todo = typeof todo.$inferSelect;
export type CreateTodo = typeof todo.$inferInsert;