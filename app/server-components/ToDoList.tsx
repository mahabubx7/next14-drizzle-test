import db from "@/db";
import { todos } from "@/db/schema";

export default async function ToDoList() {
  const list = await db.select().from(todos)

  return (
    <>
      {list.length === 0 && <p className='text-gray-600 text-center'>No ToDo found!</p>}
      {list.length >= 1 && (
        <ul className='flex flex-col gap-2'>
          {list.map((todo) => (
            <li key={todo.id} className='text-gray-400'>
              <span className='flex gap-x-1'>
                <strong>{todo.title}</strong>
                <span>
                  {todo.completed ? (<span className='py-1 px-2 rounded text-[10px] text-green-500 bg-gray-800'>completed</span>) : (<span className="py-1 px-2 rounded text-[10px] bg-gray-800 text-gray-500">pending</span>)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}