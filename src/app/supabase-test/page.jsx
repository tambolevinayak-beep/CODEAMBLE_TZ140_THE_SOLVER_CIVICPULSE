import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = await createClient(cookieStore)

  // This will try to fetch from a 'todos' table if one exists
  const { data: todos, error } = await supabase.from('todos').select()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      
      {error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          <p><strong>Error:</strong> {error.message}</p>
          <p className="text-sm mt-2 text-red-500">
            Note: If you haven't created a "todos" table yet, this error is expected. 
            The connection itself is working if you get a PostgreSQL error about a missing table rather than a network error.
          </p>
        </div>
      ) : (
        <ul className="list-disc pl-5">
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
          {(!todos || todos.length === 0) && (
            <li className="text-gray-500">Connection successful, but the 'todos' table is empty.</li>
          )}
        </ul>
      )}
    </div>
  )
}
