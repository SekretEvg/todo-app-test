import React, { useState } from "react";
import TodoForm3 from "./TodoForm3";
import TodoItem3 from "./TodoItem3";
import { v4 as uuidv4 } from "uuid";
import TodoEditForm3 from "./TodoEditForm3";

const TodoWrapper3 = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), title: newTodo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (newTodo, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTodo, completed: false, isEditing: false }
          : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo App</h1>
      <TodoForm3 addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm3 key={todo.id} editTodo={editTodo} todo={todo} />
        ) : (
          <TodoItem3
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            toggleEditing={toggleEditing}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper3;
