import React, { useState } from "react";

const TodoForm1 = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandle} className="TodoForm">
      <input
        className="todo-input"
        type="text"
        placeholder="Your new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-btn">ADD TASK</button>
    </form>
  );
};

export default TodoForm1;
