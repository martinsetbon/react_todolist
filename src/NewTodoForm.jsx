import { useState } from "react" // Importing the useState hook to manage form state

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("") // State to hold the input value for the new todo item

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault() // Prevents the default form submission behavior (page reload)
    if (newItem === "") return // Prevents submitting if the input is empty
    onSubmit(newItem) // Calls the passed onSubmit function with the new item
    setNewItem("") // Clears the input field after submitting
  }

  return (
    // Form to input new todo items
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label> {/* Label for the input field */}
        <input
          value={newItem} // Binds the input value to the `newItem` state
          onChange={e => setNewItem(e.target.value)} // Updates the `newItem` state as the user types
          type="text" // Input field for text
          id="item" // Sets the input's id for accessibility
        />
      </div>
      <button className="btn">Add</button> {/* Button to submit the form */}
    </form>
  )
}
