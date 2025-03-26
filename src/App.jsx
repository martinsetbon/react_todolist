import { useEffect, useState } from "react" // Importing React hooks for state and side effects
import { NewTodoForm } from "./NewTodoForm" // Importing the component for adding new todos
import { TodoList } from "./TodoList" // Importing the component for displaying the todo list
import "./styles.css" // Importing the CSS file for styling

export default function App() {
  // Initializing state for todos
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from local storage
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [] // If no stored items, return an empty array
    return JSON.parse(localValue) // Parse the stored JSON string back into an array
  })

  // useEffect to update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) // Store updated todos in local storage
  }, [todos]) // Runs whenever the `todos` state changes

  // Function to add a new todo item
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, // Keep the existing todos
        { id: crypto.randomUUID(), title, completed: false }, // Add a new todo with a unique ID
      ]
    })
  }

  // Function to toggle the completed state of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } // Update the completed status
        }
        return todo // Return unchanged todos
      })
    })
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) // Remove the todo with the matching ID
    })
  }

  return (
    <>
      {/* Component for adding new todos */}
      <NewTodoForm onSubmit={addTodo} />

      {/* Header for the todo list */}
      <h1 className="header">Todo List</h1>

      {/* Component that displays the todo items */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
