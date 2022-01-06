// Renders a todo object and handles its actions

import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        onClick={handleCheckboxClick}
        removoTodo={removeTodo}
      />
      <li
        style={{
          color: "Blue",
          textDecoration: todo.completed ? "Line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveClick}>Done</button>
    </div>
  );
}

export default Todo;
