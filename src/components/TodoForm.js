import React from "react";
import { useState } from "react";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={value}
        placeholder="What's up for the day"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );
};

export default TodoForm;
