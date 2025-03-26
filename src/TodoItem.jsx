export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      {/* Label containing the checkbox and title */}
      <label>
        {/* Checkbox to toggle completion status */}
        <input
          type="checkbox"
          checked={completed} // Checkbox is checked if `completed` is true
          onChange={e => toggleTodo(id, e.target.checked)} // When the checkbox is clicked, it triggers `toggleTodo` with the new checked status
        />
        {title} {/* Display the title of the todo */}
      </label>

      {/* Button to delete the todo item */}
      <button
        onClick={() => deleteTodo(id)} // Triggers `deleteTodo` when clicked with the todo's id
        className="btn btn-danger" // Adds CSS classes for styling the button (danger button for delete)
      >
        Delete
      </button>
    </li>
  )
}
