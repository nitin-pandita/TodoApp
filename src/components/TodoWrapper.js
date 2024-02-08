import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditForm";
import TodoSearch from "./TodoSearch";
import Category from "./Category";
import TodoDescription from "./TodoDescription";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState(null);
  const [filterOption, setFilterOption] = useState("all");
  // marking down the todo functionality
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  // adding todo

  const addTodo = (todo, category, description) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        complete: false,
        isEditing: false,
        createAt: new Date(),
        category: category,
        description: description,
      },
    ]);
  };
  // for deleting the todos
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // for editing todo
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // filtering todo functionality
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Sorting function for title
  const sortByTitle = () => {
    const sortedTodos = [...todos].sort((a, b) => a.task.localeCompare(b.task));
    setTodos(sortedTodos);
    setSortOption("title");
  };

  const filterPending = () => {
    setFilterOption("pending");
  };

  const filterComplete = () => {
    setFilterOption("complete");
  };

  const clearFilter = () => {
    setFilterOption("all");
  };

  const renderFilteredTodos = () => {
    switch (filterOption) {
      case "pending":
        return filteredTodos.filter((todo) => !todo.complete);
      case "complete":
        return filteredTodos.filter((todo) => todo.complete);
      default:
        return filteredTodos;
    }
  };

  return (
    <div className="todoWrapper">
      <div className="todo-Container">
        <h1>Welcome to Todo List 📑</h1>
        <TodoForm addTodo={addTodo} />
        <TodoSearch setSearchValue={setSearchValue} />{" "}
        <div className="filter">
          <button className="filter-btn" onClick={sortByTitle}>
            Sort by Title
          </button>
          <button
            className={`${
              filterOption === "pending" ? "active" : "filter-btn"
            }`}
            onClick={filterPending}
          >
            Filter Pending
          </button>
          <button
            className={` ${
              filterOption === "complete" ? "active" : "filter-btn"
            }`}
            onClick={filterComplete}
          >
            Filter Complete
          </button>
          <button className="filter-btn" onClick={clearFilter}>
            Clear Filter
          </button>
        </div>
        {renderFilteredTodos().map((todo, index) =>
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
