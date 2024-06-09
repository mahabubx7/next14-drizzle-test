'use client'

import { useState } from "react";
import addToDo from "@/app/actions/addTodo";

export default function AddToDoForm () {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    try {
      await addToDo(form)
      setError(null)
    }
    catch(err) {
      if (err instanceof Error) setError(err.message)
    }
  }

  return (
    <div className='my-1.5'>
      {error && (<p className="text-red-600 bg-red-200 p-1.5 rounded">{error}</p>)}
      <form onSubmit={handleSubmit} className='text-gray-400'>
        <fieldset>
          <input className="w-full rounded p-1.5 pl-2.5 bg-[#010102] border border-gray-800 outline-none" type="text" name="title" required placeholder="Enter the title of ToDo" />
        </fieldset>
        <fieldset className="text-right mt-2">
          <button type="submit" className="text-white p-2 bg-indigo-700 rounded my-2.5 capitalize px-4 transition hover:bg-indigo-600">add</button>
        </fieldset>
      </form>
    </div>
  )
}