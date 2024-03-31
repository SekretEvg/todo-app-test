import React, { useEffect, useState } from "react";
import TodoForm1 from "./TodoForm1";
import TodoItem1 from "./TodoItem1";
import TodoEditForm1 from "./TodoEditForm1";
import axios from "axios";

const url = "http://localhost:3002/api/todos";

const TodoWrapper1 = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setTodos(response.data));
  }, []);

  const addTodo = (newTodo) => {
    axios
      .post(
        url,
        { title: newTodo },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => setTodos(response.data));
  };

  const editTodo = (editTodo, id) => {
    axios
      .put(
        url + "/" + id,
        { title: editTodo },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => setTodos(response.data));
  };

  const deleteTodo = (id) => {
    axios.delete(url + "/" + id).then((response) => setTodos(response.data));
  };

  const toggleCompleteTodo = (id) => {
    axios.patch(url + "/" + id).then((response) => setTodos(response.data));
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
      <TodoForm1 addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm1 key={todo.id} todo={todo} editTodo={editTodo} />
        ) : (
          <TodoItem1
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

export default TodoWrapper1;
