import { useState, useRef } from "react"

function Form({ addTodos }) {

  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(null)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodos({
      id: Math.random(),
      title: title,
      completed: Boolean(Number(completed))
    })
    form.current.reset()
  }

  return (
    <div>
      <form ref={form} className="flex flex-col items-center p-7 w-[450px] bg-blue-100" onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-10">My Todo App</h1>
        <input type="text" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-1" onChange={(e) => setTitle(e.target.value)} required />
        <label className="flex items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Completed:</span>
            <input type="radio" name="status" value={1} onChange={(e) => setCompleted(e.target.value)} required />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Uncompleted:</span>
            <input type="radio" name="status" value={0} onChange={(e) => setCompleted(e.target.value)} required />
          </div>
        </label>
        <button type="submit" className="mt-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add</button>
      </form>
    </div>
  )
}

export default Form