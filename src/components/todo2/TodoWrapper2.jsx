import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm2 from "./TodoForm2";
import TodoEditForm2 from "./TodoEditForm2";
import TodoItem2 from "./TodoItem2";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos';

const TodoWrapper2 = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(url).then(response => setTodos(response.data));
  }, []) 

  const addTodo = (newTodo) => {
    setTodos([
      { id: uuidv4(), title: newTodo, completed: false, isEditing: false },
      ...todos,
    ]);
  };

  const editTodo = (editTodo, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: editTodo,
              completed: false,
              isEditing: false,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleEditingTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>TODO APP</h1>
      <TodoForm2 addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm2 key={todo.id} todo={todo} editTodo={editTodo} />
        ) : (
          <TodoItem2
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
            toggleEditingTodo={toggleEditingTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper2;
