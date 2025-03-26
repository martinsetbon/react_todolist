import { TodoItem } from "./TodoItem" // Importing the TodoItem component for rendering each individual todo

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* If no todos exist, display a message */}
      {todos.length === 0 && "no Todos"}

      {/* Mapping through the todos array and rendering a TodoItem for each */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // Spread the properties of each todo item as individual props
            key={todo.id} // Provide a unique key for each TodoItem based on the todo's ID
            toggleTodo={toggleTodo} // Pass the toggleTodo function to TodoItem for toggling completion
            deleteTodo={deleteTodo} // Pass the deleteTodo function to TodoItem for deleting the todo
          />
        )
      })}
    </ul>
  )
}
