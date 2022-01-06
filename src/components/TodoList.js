// Renders a list of Todos
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompleted={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
