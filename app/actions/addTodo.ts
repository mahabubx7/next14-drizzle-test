'use server'

import db from "@/db"
import { todos } from "@/db/schema"
import { createTodoDto } from "@/utils/dto"
import { ZodError } from "zod"

export default async function addToDo (form: FormData) {
  const todo = {
    title: form.get('title')?.toString()
  }

  // validate and process action 
  try {
    const payload = await createTodoDto.parseAsync(todo)
    await db.insert(todos).values(payload)
  }
  catch (err) {
    if (err instanceof ZodError) {
      throw err // errors from zod validation
    }

    throw new Error('An unexpected error occurred!')
  }
}