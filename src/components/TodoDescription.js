import React, { useState } from "react";

const TodoDescription = ({ addTodo }) => {
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
        placeholder="Description"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn">Add</button>
    </form>
  );
};

export default TodoDescription;
