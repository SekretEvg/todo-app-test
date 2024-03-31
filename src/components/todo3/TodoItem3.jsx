import React from "react";

const TodoItem3 = ({ todo, deleteTodo, toggleComplete, toggleEditing }) => {
  const completed = todo.completed ? "completed" : "";
  return (
    <div className="Todo">
      <p className={completed} onClick={() => toggleComplete(todo.id)}>
        {todo.title}
      </p>
      <div>
        <button onClick={() => toggleEditing(todo.id)} className="action-btn">
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="action-btn trash-icon"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem3;
