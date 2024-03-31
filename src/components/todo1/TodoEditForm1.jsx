import React, { useState } from "react";

const TodoEditForm1 = ({ editTodo, todo }) => {
  const [input, setInput] = useState(todo.title);
  const submitHandle = (e) => {
    e.preventDefault();
    if (input) {
      editTodo(input, todo.id);
    }
  };
  return (
    <form className="TodoForm" onSubmit={submitHandle}>
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-btn">SAVE</button>
    </form>
  );
};

export default TodoEditForm1;
