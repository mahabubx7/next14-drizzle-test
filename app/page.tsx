// import Image from "next/image";

import AddToDoForm from "@/app/components/AddTodoForm";
import ToDoList from "@/app/server-components/ToDoList";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-[15vh] p-2">
      <div className="p-2.5 py-6 border border-gray-900 w-full max-w-[400px] rounded">
        <h2 className='text-4xl font-semibold text-center mb-4'>Todo App</h2>
        <AddToDoForm />
        <ToDoList />
      </div>
    </main>
  );
}
