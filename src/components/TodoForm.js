// Keeping track of our todo state through a form

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the task..."
          name="task"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default TodoForm;
