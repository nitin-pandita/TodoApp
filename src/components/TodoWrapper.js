import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditForm";
import TodoSearch from "./TodoSearch";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState(null);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        complete: false,
        isEditing: false,
        createAt: new Date(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Sorting function for title
  const sortByTitle = () => {
    const sortedTodos = [...todos].sort((a, b) => a.task.localeCompare(b.task));
    setTodos(sortedTodos);
    setSortOption("title");
  };

  // Sorting function for time of creation
  const sortByTime = () => {
    const sortedTodos = [...todos].sort((a, b) => a.createdAt - b.createdAt);
    setTodos(sortedTodos);
    setSortOption("time");
  };

  return (
    <div className="todoWrapper">
      <h1>Welcome to Todo List 📑</h1>
      {/* Render TodoSearch component */}
      <div className="todo-Container">
        <TodoForm addTodo={addTodo} />
        <TodoSearch setSearchValue={setSearchValue} />{" "}
        <div className="filter">
          <button className="filter-btn" onClick={sortByTitle}>
            Sort by Title
          </button>
          <button className="filter-btn" onClick={sortByTime}>
            Sort by Time
          </button>
        </div>
        {filteredTodos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodo editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
