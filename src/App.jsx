import { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

const todosLocalStorege = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

function App() {
  const [todos, setTodos] = useState(todosLocalStorege)


  const addTodos = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo]
    })
  }
  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos.length])
  return (
    <>
      <Form addTodos={addTodos} />
      <h3 className="message text-center bg-blue-100">{todos.length === 0 && "You don't have any todos"}</h3>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  )
}

export default App
