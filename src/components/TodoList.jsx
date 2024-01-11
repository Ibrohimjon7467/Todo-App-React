function TodoList({ todos, handleDelete }) {
  return (
    <ul className="w-full p-3 flex flex-col gap-3 bg-blue-100">
      {todos.map((todo) => {
        return (
          <li className="flex items-center justify-between bg-slate-400 px-2 py-1" key={todo.id}>
            <h2 className="font-bold">{todo.title}</h2>
            <div className="flex items-center gap-3">
              <p>{todo.completed ? "✅" : "❌"}</p>
              <button className="bg-black rounded-lg text-white text-xs px-2 py-1" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList