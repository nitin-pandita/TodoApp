import React from "react";
import { useState } from "react";
const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn">Update Task</button>
    </form>
  );
};

export default EditTodo;
