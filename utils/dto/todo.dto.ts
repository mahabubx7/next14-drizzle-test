import { z } from "zod"

export const createTodoDto = z.object({
  title: z.string({ required_error: 'Title must be given!' }).min(4).max(255),
})