import React, { useState } from "react";

const TodoEditForm3 = ({ todo, editTodo }) => {
  const [input, setInput] = useState(todo.title);
  const submitHandle = (e) => {
    e.preventDefault();
    if (input) {
      editTodo(input, todo.id);
    }
  };
  return (
    <form onSubmit={submitHandle} className="TodoForm">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="todo-input"
      />
      <button className="todo-btn">SAVE</button>
    </form>
  );
};

export default TodoEditForm3;
